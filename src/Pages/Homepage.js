import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'
import './ChatPage.css';


function Homepage() {

  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
        <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="#266efd"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        >
            {/* <Text fontSize="4xl" color='white' fontFamily="Work sans">LogAntu</Text> */}
            <Image
    width={170}
    height={35}
    src='https://github.com/shribreeze/pic-url/blob/main/pic-url/tantu.png?raw=true'
    alt='logo'
  />
        </Box>
        <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px" id='homeBox'>
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default Homepage