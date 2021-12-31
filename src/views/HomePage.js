import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import CategoriesList from '../components/Home/CategoriesList';
import { ProgressChart } from '../components/Home/ProgressChart';

export const HomePage = ({ user, userCategories, setUserCategories, setUserItems }) => {
    return (
        <Flex flexDir={["column-reverse","row"]} justifyContent={"space-between"}>
            <Flex width={"40%"} marginLeft={"2%"} flexDir={"column"} align={"center"} marginTop={["8rem"]}>
                <Text fontSize={"6xl"}>Categories</Text>
                <CategoriesList
                    user={user} 
                    userCategories={userCategories}
                    setUserCategories={setUserCategories}
                    setUserItems={setUserItems}
                />
            </Flex>
            <Flex width={"40%"} marginRight={"2%"} flexDir={"column"} justifyContent={"center"} marginTop={"6.5rem"}>
                <ProgressChart 
                    totalItemsOwned={user.totalItemsOwned} 
                    totalItemsRemoved={user.totalItemsRemoved}
                />  
            </Flex>
        </Flex>
    )
};
