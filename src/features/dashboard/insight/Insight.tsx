import {Box, Center, Image, Text} from 'native-base';
import React from 'react';
import {Appbar} from './component/Appbar';
import RangeBoxIcon from '@/assets/images/range-box.png';
import {Range} from './component/Range';

export function Insight() {
  return (
    <Box bg={'#01071B'} flex={1} safeArea>
      <Appbar />
      <Center>
        <Box h={'240px'} w={'95%'} mt={8} position={'relative'}>
          <Image
            source={RangeBoxIcon}
            alt="Background Image"
            resizeMode="cover"
            height="100%"
            width="100%"
            position="absolute"
          />
          <Box h={'full'} width={'full'}>
            <Center px={'8'} pt={8}>
              <Text color={'white'} fontSize={'2xl'} textAlign={'center'}>
                average attitude of people towards me
              </Text>
            </Center>
            <Range />
          </Box>
        </Box>
      </Center>
    </Box>
  );
}
