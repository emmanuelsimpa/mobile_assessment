import React from 'react';
import {Box, Button, Center, Stack} from 'native-base';
import {useLoginScreen} from '../hooks/login-screen';
// import GoogleIcon from '@/assets/svgs/google.svg';

export default function LoginScreen() {
  const {handleLogin} = useLoginScreen();
  return (
    <Box backgroundColor={'#01071B'} flex={1} safeArea>
      <Center flex={1}>
        <Stack alignItems={'center'} space={6} width={'100%'}>
          <Box h={16} width={'5/6'} rounded={'full'}>
            <Button
              // leftIcon={<GoogleIcon />}
              onPress={handleLogin}
              bg={'#01071B'}
              _text={{
                color: 'warmGray.500',
                fontWeight: 'extrabold',
                fontSize: 'xl',
              }}
              rounded={'full'}
              h={'full'}
              borderColor={'primary.700'}
              borderWidth={'4'}
              shadow={10}
              style={{
                shadowColor: 'primary.700',
                shadowOffset: {width: -10, height: 5},
                shadowOpacity: 1,
                shadowRadius: 10,
                elevation: 10,
              }}>
              Google Auth
            </Button>
          </Box>
          <Box h={16} width={'5/6'} rounded={'full'}>
            <Button
              onPress={handleLogin}
              bg={'#01071B'}
              _text={{
                color: 'warmGray.500',
                fontWeight: 'extrabold',
                fontSize: 'xl',
              }}
              rounded={'full'}
              h={'full'}
              borderColor={'primary.700'}
              borderWidth={'4'}
              shadow={10}
              style={{
                shadowColor: 'primary.700',
                shadowOffset: {width: -10, height: 5},
                shadowOpacity: 1,
                shadowRadius: 10,
                elevation: 10,
              }}>
              App Auth
            </Button>
          </Box>
        </Stack>
      </Center>
    </Box>
  );
}
