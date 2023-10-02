import React, { useState } from 'react'
import './ChatPage.css'
import { ChatState } from '../Context/ChatProvider'
import { Box } from '@chakra-ui/react';
import SideDrawer from '../components/miscellaneous/SideDrawer';
import MyChats from '../components/MyChats';
import ChatBox from '../components/ChatBox';

const ChatPage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
        {user && <SideDrawer/>}
        <Box className='Box'>
          {user && ( <MyChats fetchAgain={fetchAgain} />)}
          {user && ( <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />)}
        </Box>
    </div>
  )
}

export default ChatPage