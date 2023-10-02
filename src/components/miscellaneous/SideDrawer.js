import React, { useState } from 'react'
import './SideDrawer.css'
import { Box, Text, Flex } from "@chakra-ui/layout";
import { BellIcon, ChevronDownIcon} from "@chakra-ui/icons"
import { Tooltip } from "@chakra-ui/tooltip";
import { Avatar, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider } from '@chakra-ui/react';
import { ChatState } from '../../Context/ChatProvider';
import ProfileModal from './ProfileModal';

const SideDrawer = () => {
    const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  const { user } = ChatState();

  return (
    <>
        <Box className='sideDrawer'>

        {/* <Flex> */}
            <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
                <Button variant="ghost">
                    <i className="fas fa-search"></i>
                    <Text d={{ base: "none", md: "flex" }} px={4}>
                        Search User
                    </Text>
                </Button>
            </Tooltip>

            <Text fontSize="2xl" fontFamily="Work sans">
                Talk-A-Tive
            </Text>
            <div>
                <Menu>
                    <MenuButton p={1}>
                        {/* <NotificationBadge
                            count={notification.length}
                            effect={Effect.SCALE}
                        /> */}
                        <BellIcon fontSize="2xl" m={1} />
                    </MenuButton>
                    <MenuList pl={2}>
                        {/* {!notification.length && "No New Messages"}
                        {notification.map((notif) => (
                            <MenuItem
                            key={notif._id}
                            onClick={() => {
                                setSelectedChat(notif.chat);
                                setNotification(notification.filter((n) => n !== notif));
                            }}
                            >
                            {notif.chat.isGroupChat
                                ? `New Message in ${notif.chat.chatName}`
                                : `New Message from ${getSender(user, notif.chat.users)}`}
                            </MenuItem>
                        ))} */}
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton as={Button} bg="white" rightIcon={<ChevronDownIcon />}>
                    <Avatar
                        size="sm"
                        cursor="pointer"
                        name={user.name}
                        src={user.pic}
                    />
                    </MenuButton> 
                    <MenuList>
                    <ProfileModal user={user}>
                        <MenuItem>My Profile</MenuItem>
                    </ProfileModal>
                    <MenuDivider />
                    <MenuItem>Logout</MenuItem>
                    </MenuList>
                </Menu>
            </div>
        {/* </Flex> */}
        </Box>
    </>
  )
}

export default SideDrawer