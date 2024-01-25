import {useToast} from 'native-base';
import {useEffect, useState} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import storage from '@react-native-firebase/storage';

const audioRecorderPlayer = new AudioRecorderPlayer();

export const useRecord = () => {
  const toast = useToast();
  const [recordSecs, setRecordSecs] = useState('00:00:00');
  const [playTime, setPlayTime] = useState('00:00:00');
  const [duration, setDuration] = useState('00:00:00');
  const [playState, setPlayState] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const permission = async () => {
    if (Platform.OS === 'android') {
      try {
        const grants = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);
        if (
          grants['android.permission.RECORD_AUDIO'] ===
          PermissionsAndroid.RESULTS.GRANTED
        ) {
          return true;
        } else {
          toast.show({
            description: 'Permissions not granted',
            title: 'Permissions Info',
            variant: 'solid',
          });
          return false;
        }
      } catch (err) {
        toast.show({
          description: 'err',
          title: 'Permissions Info',
          variant: 'solid',
        });
        return false;
      }
    }
  };

  const uploadAudioToFirebase = async (filePath: string) => {
    setIsLoading(true);
    try {
      const reference = storage().ref('path/to/uploaded/audio.mp3');
      await reference.putFile(filePath, {contentType: 'audio/mp3'});
      toast.show({
        description: 'Audio file uploaded successfully!',
        title: 'Success Message',
        variant: 'solid',
      });
      setIsLoading(false);
    } catch (error: any) {
      toast.show({
        description: error.message,
        title: 'Error uploading audio file:',
        variant: 'solid',
      });
      setIsLoading(false);
    }
  };

  const HandleStartRecord = async () => {
    const permissionGranted = await permission();
    if (permissionGranted) {
      await audioRecorderPlayer.startRecorder();
      audioRecorderPlayer.addRecordBackListener(e => {
        setRecordSecs(
          audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
        );
      });
      setIsRecording(true);
    }
  };

  const handleStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setRecordSecs('00:00:00');
    uploadAudioToFirebase(result);
    setIsRecording(false);
  };

  const handleStartPlay = async () => {
    setPlayState(true);
    await audioRecorderPlayer.startPlayer();
    audioRecorderPlayer.addPlayBackListener(e => {
      setPlayTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
      setDuration(audioRecorderPlayer.mmssss(Math.floor(e.duration)));
    });
  };

  const handlePausePlay = async () => {
    await audioRecorderPlayer.pausePlayer();
  };

  const handleStopPlay = async () => {
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
    setPlayState(false);
  };

  useEffect(() => {
    storage();
  }, []);

  return {
    HandleStartRecord,
    recordSecs,
    playTime,
    duration,
    handleStopRecord,
    handleStartPlay,
    isLoading,
    playState,
    isRecording,
    handleStopPlay,
    handlePausePlay,
  };
};
