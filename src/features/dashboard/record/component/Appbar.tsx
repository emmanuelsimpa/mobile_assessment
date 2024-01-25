/* eslint-disable react/no-unstable-nested-components */
import {Avatar, Box, HStack, IconButton, Menu, Text} from 'native-base';
import React from 'react';
import AppbarIcon from '@/assets/svgs/appBar.svg';
import {Pressable} from 'react-native';
import {useLoginScreen} from '@/features/auth/hooks/login-screen';

export function Appbar() {
  const {signOut, userState} = useLoginScreen();

  return (
    <HStack
      bg="transparent"
      px="1"
      pt={2}
      justifyContent="space-between"
      alignItems="center"
      w="100%">
      <HStack alignItems="center">
        <IconButton icon={<AppbarIcon />} />
      </HStack>
      <Box>
        <Text color={'white'}>
          Hi, {userState ? userState.user.name : 'Micheal'} 👋
        </Text>
      </Box>
      <HStack alignItems="center">
        <Menu
          w="190"
          trigger={triggerProps => {
            return (
              <Pressable
                accessibilityLabel="More options menu"
                {...triggerProps}>
                <Avatar
                  bg="primary.500"
                  source={{
                    uri: userState
                      ? userState.user.photo
                      : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                  }}>
                  Avater
                </Avatar>
              </Pressable>
            );
          }}>
          <Menu.Item onPress={signOut}>Logout</Menu.Item>
        </Menu>
      </HStack>
    </HStack>
  );
}
