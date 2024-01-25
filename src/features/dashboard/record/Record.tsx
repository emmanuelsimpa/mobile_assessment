import {
  Box,
  Center,
  IconButton,
  Image,
  Stack,
  Text,
  HStack,
  Button,
  Pressable,
} from 'native-base';
import React from 'react';
import {Appbar} from './component/Appbar';
import BgImage from '@/assets/images/record.png';
import TranscriptImage from '@/assets/images/transcript-box.png';
import EditIcon from '@/assets/svgs/edit.svg';
import MicrophoneIcon from '@/assets/svgs/microphone.svg';
import {useRecord} from './hooks/record';

export function Record() {
  const {
    HandleStartRecord,
    handleStopRecord,
    recordSecs,
    playTime,
    duration,
    isLoading,
    isRecording,
    handleStartPlay,
    playState,
    handlePausePlay,
    handleStopPlay,
  } = useRecord();

  return (
    <Box flex={1} safeArea>
      <Image
        source={BgImage}
        alt="Background Image"
        resizeMode="cover"
        height="100%"
        width="100%"
        position="absolute"
      />
      <Appbar />
      <Center>
        <Box h={'500px'} w={'5/6'} position={'relative'}>
          <Image
            source={TranscriptImage}
            alt="Background Image"
            resizeMode="cover"
            height="100%"
            width="100%"
            position="absolute"
          />
          <Box mt={16} h={'full'} width={'full'}>
            <Stack ml={-10} width={'full'} alignItems={'flex-end'}>
              {playTime && (
                <IconButton
                  display={'flex'}
                  justifyContent={'flex-end'}
                  icon={<EditIcon />}
                />
              )}
            </Stack>
            <Center px={'8'} pt={8}>
              {playState ? (
                <Box>
                  <Text color={'white'} fontSize={'lg'} textAlign={'center'}>
                    Summary for IndRecord will be here as simple text which you
                    can copy/paste
                  </Text>
                  <Text color={'white'} fontSize={'lg'} textAlign={'center'}>
                    {playTime} --- {duration}
                  </Text>
                </Box>
              ) : (
                <Text color={'white'} fontSize={'lg'} textAlign={'center'}>
                  {recordSecs}
                </Text>
              )}
            </Center>
            <Center px={'8'} pt={16}>
              <HStack space={4} h={'auto'}>
                <Button
                  variant={'outline'}
                  _text={{color: 'white'}}
                  onPress={!isRecording ? handleStopPlay : handleStopRecord}
                  isDisabled={isLoading}
                  isLoading={isLoading}>
                  Stop
                </Button>
                <Button
                  variant={'outline'}
                  _text={{color: 'white'}}
                  isDisabled={isRecording}
                  onPress={handlePausePlay}>
                  Pause
                </Button>
                <Button
                  variant={'outline'}
                  _text={{color: 'white'}}
                  onPress={handleStartPlay}
                  isDisabled={isRecording}>
                  Play
                </Button>
              </HStack>
            </Center>
          </Box>
        </Box>
      </Center>
      {recordSecs === '00:00:00' && (
        <Box
          position={'absolute'}
          bottom={0}
          width={'100%'}
          display={'flex'}
          alignItems={'center'}>
          <Pressable onPress={HandleStartRecord} isDisabled={isLoading}>
            <Center h={12} w={12} bg={'#7EE8F6'} rounded={'full'}>
              <MicrophoneIcon />
            </Center>
          </Pressable>
        </Box>
      )}
    </Box>
  );
}
