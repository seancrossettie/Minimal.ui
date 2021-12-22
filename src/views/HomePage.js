import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const HomePage = ({ user, setUser }) => {
    return (
        <Flex flexDir="column" algin="center" justifyContent="flex-start" marginTop={["6rem","10rem"]} marginLeft={["2rem","10rem"]}>
            <Text fontSize={"6xl"}>Welcome to Minimal</Text>
            <Text fontSize="xl">Sometimes, less is more. Get started with Minimal today.</Text>
            <Button variant="outline" alignSelf="flex-start" marginTop={"1rem"}>Get Started</Button>
        </Flex>
    );
};

export default HomePage;