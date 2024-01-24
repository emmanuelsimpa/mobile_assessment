import {Avatar, Box, HStack, IconButton, Text} from 'native-base';
import React from 'react';
import AppbarIcon from '@/assets/svgs/appBar.svg';

export function Appbar() {
  return (
    <HStack
      bg="transparent"
      px="1"
      justifyContent="space-between"
      alignItems="center"
      w="100%">
      <HStack alignItems="center">
        <IconButton icon={<AppbarIcon />} />
      </HStack>
      <Box>
        <Text color={'white'}>Hi, Michael 👋 </Text>
      </Box>
      <HStack alignItems="center">
        <Avatar
          bg="primary.500"
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}>
          Avater
        </Avatar>
      </HStack>
    </HStack>
  );
}
