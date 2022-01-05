import { Button, Flex, Image, Text } from "@chakra-ui/react";
import moment from "moment";
import React from "react";

const ProfilePage = ({ user, setUser, photoURL }) => {

    return (
        <Flex flexDir={"column"} marginTop={["8rem"]} align={"center"}>
            <Image 
                src={photoURL}
                borderRadius={"full"}
                mb={"1rem"}
            />
            <Text fontSize={"4xl"} mb={"0.5rem"}>{user.firstName} {user.lastName}</Text>
            <Text fontSize={"2xl"} mb={"0.5rem"}>User Tier: {user.userGoalTier}</Text>
            <Text fontSize={"2xl"} mb={"0.5rem"}>{user.email}</Text>
            <Text mb={"0.5rem"}>Joined on {moment(user.createdAt).format("MM/DD/YYYY")}</Text>
            <Button variant={"ghost"}>Update</Button>
        </Flex>
    );
};

export default ProfilePage
