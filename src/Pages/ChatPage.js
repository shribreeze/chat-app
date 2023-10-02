import React from 'react'
import './ChatPage.css'
import { ChatState } from '../Context/ChatProvider'
import { Box, Flex } from '@chakra-ui/react';
import SideDrawer from '../components/miscellaneous/SideDrawer';
import MyChats from '../components/MyChats';
import ChatBox from '../components/ChatBox';

const ChatPage = () => {
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
        {user && <SideDrawer/>}
        <Box className='Box'>
          {/* <Flex> */}
          {user && <MyChats/>}
          {user && <ChatBox/>}
          {/* </Flex> */}
        </Box>
    </div>
  )
}

export default ChatPage