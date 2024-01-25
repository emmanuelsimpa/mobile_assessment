import {navigationProps} from '@/common/types/NavigationProps';
import {useNavigation} from '@react-navigation/native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useEffect, useState} from 'react';
import {useToast} from 'native-base';

export const useLoginScreen = () => {
  const toast = useToast();
  const navigation: navigationProps = useNavigation();
  const [userState, setUserState] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '653871808954-71eam6erbun9ktopdelbj4qfe3ek9003.apps.googleusercontent.com',
      scopes: ['https://www.googleapis.com/auth/user.gender.read'],
      offlineAccess: true,
      hostedDomain: '', // specifies a hosted domain restriction
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: '',
      iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
      openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
      profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    });
  }, []);

  const isErrorWithCode = (error: any) => {
    return error && typeof error.code !== 'undefined';
  };

  const handleGoogleSignin = async () => {
    setIsLoading(true);
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserState(userInfo);
      setIsLoading(false);
      await toast.show({
        title: 'Successfully Login',
        variant: 'top-accent',
      });
    } catch (error: any) {
      setIsLoading(false);
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.SIGN_IN_CANCELLED:
            toast.show({
              description: statusCodes.SIGN_IN_CANCELLED,
              title: 'Error Message',
              variant: 'solid',
            });
            break;
          case statusCodes.IN_PROGRESS:
            toast.show({
              description: statusCodes.IN_PROGRESS,
              title: 'Error Message',
              variant: 'solid',
            });
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            toast.show({
              description: statusCodes.PLAY_SERVICES_NOT_AVAILABLE,
              title: 'Error Message',
              variant: 'solid',
            });
            break;
          default:
            toast.show({
              description: error.message,
              title: 'Error Message',
              variant: 'solid',
            });
        }
      } else {
        toast.show({
          description: 'Please reach out to the administrator',
          title: 'Error Message',
          variant: 'solid',
        });
      }
    }
  };

  const getCurrentUser = async () => {
    setIsLoading(true);
    const currentUser = await GoogleSignin.getCurrentUser();
    setUserState(currentUser);
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  const handleLogin = () => {
    navigation.navigate('dashboard');
  };

  useEffect(() => {
    if (userState) {
      navigation.navigate('dashboard');
      setIsLoading(false);
    }
  }, [navigation, userState]);

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      setUserState(null);
      navigation.navigate('login');
    } catch (error: any) {
      toast.show({
        description: error.message,
        title: 'Error Message',
        variant: 'solid',
      });
    }
  };

  return {
    handleLogin,
    handleGoogleSignin,
    userState,
    isLoading,
    signOut,
  };
};
