import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { signInUser, signOutUser } from "../helpers/auth";

const HomePage = ({ user, setUser }) => {
    return (
        <div>
            <Text>Home Page</Text>
            { user
                ? <Button outline onClick={() => signOutUser()}>Sign Out</Button>
                : <Button outline onClick={() => signInUser(setUser)}>Sign In</Button>
            }
            <Button onClick={() => console.warn(user)}>Test</Button>
        </div>
    );
};

export default HomePage;