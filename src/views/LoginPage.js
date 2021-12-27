import { Button, Flex, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import React from "react";
import { signInUser } from "../helpers/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ user }) => {
    const navigate = useNavigate();
    return (
        <Flex flexDir="column" align="center" marginTop={["6rem","15rem"]} marginLeft={["2rem", "none"]}>
            <Text fontSize={"6xl"}>Welcome to Minimal</Text>
            <Text fontSize="xl">Sometimes, less is more. Get started with Minimal today.</Text>
            <Button 
                marginTop={"1rem"} 
                alignSelf={["flex-start", "center"]} 
                rightIcon={<ArrowForwardIcon />} 
                variant="outline"
                onClick={() => { user ? navigate("/")  : signInUser() }}
            >
                { user ? "Get Started" : "Login" } 
            </Button>
        </Flex>
    );
};

export default LoginPage;