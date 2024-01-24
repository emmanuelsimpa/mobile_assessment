import {navigationProps} from '@/common/types/NavigationProps';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

export const useSplashScreen = () => {
  const [steps, setSteps] = useState(0);
  const navigation: navigationProps = useNavigation();

  const handleNextSteps = () => {
    if (steps <= 1) {
      setSteps(prev => prev + 1);
    } else {
      navigation.navigate('login');
    }
  };

  const handleSkip = () => {
    navigation.navigate('dashboard');
  };

  return {steps, handleNextSteps, handleSkip};
};
