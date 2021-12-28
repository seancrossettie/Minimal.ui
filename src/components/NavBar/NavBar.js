import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Flex, IconButton, Image, LightMode, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { signInUser, signOutUser } from "../../helpers/auth";

const NavBar = ({ user, setUser, photoURL }) => {
    const navigate = useNavigate();
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [display, setDisplay] = useState('none');
    const bg = useColorModeValue("white", "gray.800");

    return (
        <Flex>
            <Flex pos="fixed" top="1rem" left="2rem" alignSelf="center">
                <Text alignSelf="center" fontSize="4xl">Minimal</Text>
            </Flex>
            <Flex pos="fixed" top="1rem" right="1rem" align="center">
                <Flex display={["none", "none", "flex", "flex"]}>
                    <Button variant="ghost" m={2} onClick={() => navigate('/')}>Home</Button>
                    <Button variant="ghost" m={2} onClick={() => navigate('/items')}>Items</Button>
                    <Button variant="ghost" m={2} onClick={() => navigate('/categories')}>Categories</Button>
                    { user
                        ? <>
                            <IconButton m={2} alignSelf="center" variant="ghost" borderRadius="full" onClick={() => navigate('/profile')}>
                                <Image src={photoURL} borderRadius="full" boxSize="30px" alt={photoURL} />
                            </IconButton>
                            <IconButton variant="ghost" m={2} outline onClick={() => signOutUser()}><BiLogOutCircle /></IconButton>
                          </>
                        : <Button variant="ghost" m={2} outline onClick={() => signInUser(setUser)}><BiLogInCircle/></Button>
                    }
                </Flex>
                <IconButton 
                    aria-label="Open Menu"
                    variant="ghost"
                    mr={2}
                    size="md"
                    icon={<HamburgerIcon />}
                    display={["flex", "flex", "none", "none"]}
                    onClick={() => setDisplay("flex")}
                />
                <IconButton m={2} variant="ghost" size="md" onClick={toggleColorMode}>
                    { isDark 
                        ? <SunIcon />
                        : <MoonIcon />
                    }
                </IconButton>
            </Flex>
            <LightMode>
                <Flex
                    width="100vh"
                    height="100vh"
                    zIndex={20}
                    bgColor={bg}
                    top="0"
                    left="0"
                    overflowY="auto"
                    flexDir="column"
                    display={display}
                >
                    <Flex justify="flex-end" mt="1rem" mr="1rem">
                        <IconButton 
                            m={2}
                            size="md"
                            variant="ghost"
                            aria-label="Close Menu"
                            icon={<CloseIcon />}
                            onClick={() => setDisplay("none")}  
                        />
                    </Flex>
                    <Flex flexDir="column" align="center">
                        <Button variant="ghost" m={2} onClick={() => { navigate('/'); setDisplay("none"); }}>Home</Button>
                        <Button variant="ghost" m={2}  onClick={() => { navigate('/items'); setDisplay("none"); }}>Items</Button>
                        <Button variant="ghost" m={2}  onClick={() => { navigate('/categories');  setDisplay("none"); }}>Categories</Button>
                        <Button variant="ghost" m={2}  onClick={() => { navigate('/profile');  setDisplay("none"); }}>Profile</Button>
                        { user
                            ? <Button variant="ghost" m={2}  outline onClick={() => { signOutUser(); setDisplay("none"); }}>Sign Out</Button>
                            : <Button variant="ghost" m={2}  outline onClick={() => { signInUser(setUser); setDisplay("none"); }}>Sign In</Button>
                        }
                    </Flex>
                </Flex>
            </LightMode>
        </Flex>
    );
};

export default NavBar;