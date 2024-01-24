import React from 'react';
import {Box, Button, Center, Heading, Image, Stack, Text} from 'native-base';
import splashScreenImage from '@/assets/images/splash-screen.png';
import {splashData} from '@/common/data/splash';
import {useSplashScreen} from '../hooks/splash-screen';

export function SplashScreen() {
  const {steps, handleNextSteps, handleSkip} = useSplashScreen();
  return (
    <Box bg={'#01071B'} flex={1} safeArea>
      <Stack alignItems={'flex-end'} width={'100%'}>
        <Button
          onPress={handleSkip}
          variant={'ghost'}
          width={'1/5'}
          _text={{
            color: 'primary.500',
            fontWeight: 'extrabold',
            fontSize: 'xl',
          }}>
          Skip
        </Button>
      </Stack>
      <Center flex={1} w={'100%'} height={'auto'} bg={'#01071B'}>
        <Stack
          alignItems={'center'}
          justifyContent={'center'}
          space={6}
          width={'100%'}
          h={'auto'}>
          <Box mr={-20} h={'auto'}>
            <Image
              source={splashScreenImage}
              alt="Alternate Text"
              width={420}
              height={460}
            />
          </Box>
          <Stack direction={'row'} space={3}>
            {splashData.map(item => (
              <Box
                key={item.id}
                h={4}
                w={4}
                borderRadius={'full'}
                borderColor={'white'}
                bg={item.id === steps ? 'white' : '#01071B'}
                borderWidth={2}
              />
            ))}
          </Stack>
          <Center>
            <Heading color={'white'}>{splashData[steps].title}</Heading>
            <Text color={'white'}>{splashData[steps].subtitle}</Text>
          </Center>
        </Stack>
      </Center>
      <Stack alignItems={'flex-end'} width={'95%'} mb={10}>
        <Box width={'auto'} height={'auto'}>
          <Button
            onPress={handleNextSteps}
            variant={'ghost'}
            width={20}
            bg={'black'}
            rounded={'full'}
            borderBottomRadius={'full'}
            h={20}
            shadow={10}
            style={{
              shadowColor: '#7EE8F6',
              shadowOpacity: 1,
              shadowRadius: 10,
              elevation: 7,
            }}>
            <Heading
              color={'white'}
              fontWeight={'extrabold'}
              fontSize={'5xl'}
              textAlign={'center'}>
              {'>'}
            </Heading>
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
