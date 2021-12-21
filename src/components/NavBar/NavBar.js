import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Flex, IconButton, useColorMode } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import React, { useState } from "react"
import { signInUser, signOutUser } from "../../helpers/auth";

export const NavBar = ({ user, setUser }) => {
    const navigate = useNavigate();
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [display, setDisplay] = useState('none');

    return (
        <Flex>
            <Flex pos="fixed" top="1rem" right="1rem" align="center">
                <Flex display={["none", "none", "flex", "fle"]}>
                    <Button variant="ghost" m={2} onClick={() => navigate('/')}>Home</Button>
                    <Button variant="ghost" m={2} onClick={() => navigate('/items')}>Items</Button>
                    <Button variant="ghost" m={2} onClick={() => navigate('/categories')}>Categories</Button>
                    { user
                        ? <Button variant="ghost" m={2} outline onClick={() => signOutUser()}>Sign Out</Button>
                        : <Button variant="ghost" m={2} outline onClick={() => signInUser(setUser)}>Sign In</Button>
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
                <IconButton m={2} variant="ghost" size="md">
                    { isDark 
                        ? <SunIcon  onClick={toggleColorMode} />
                        : <MoonIcon onClick={toggleColorMode} />
                    }
                </IconButton>
            </Flex>
            <Flex
                width="100vh"
                height="100vh"
                zIndex={20}
                bgColor="gray.500"
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
                    { user
                        ? <Button variant="ghost" m={2}  outline onClick={() => { signOutUser(); setUser(null); setDisplay("none"); }}>Sign Out</Button>
                        : <Button variant="ghost" m={2}  outline onClick={() => { signInUser(setUser); setDisplay("none"); }}>Sign In</Button>
                    }
                </Flex>
            </Flex>
        </Flex>
    );
};