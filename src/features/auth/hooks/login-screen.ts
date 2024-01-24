import {navigationProps} from '@/common/types/NavigationProps';
import {useNavigation} from '@react-navigation/native';

export const useLoginScreen = () => {
  const navigation: navigationProps = useNavigation();

  const handleLogin = () => {
    navigation.navigate('dashboard');
  };

  return {handleLogin};
};
