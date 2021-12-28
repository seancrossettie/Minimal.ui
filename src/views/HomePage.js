import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import CategoriesList from '../components/Home/CategoriesList';
import { ProgressChart } from '../components/Home/ProgressChart';

export const HomePage = ({ user, userCategories, setUserCategories }) => {
    return (
        <Flex flexDir={["column","row"]} justifyContent={"center"}>
            <Flex flexDir="column" marginRight={["auto"]} marginLeft={["5%","6rem"]} marginTop={["25%","8rem"]}>
                <Text fontSize={"6xl"}>Categories</Text>
                <CategoriesList 
                    userCategories={userCategories}
                    setUserCategories={setUserCategories}
                />
            </Flex>
            <Flex marginLeft={"auto"} marginTop={"8rem"} marginRight={["none","6rem"]}>
                <ProgressChart 
                        totalItemsOwned={user.totalItemsOwned} 
                        totalItemsRemoved={user.totalItemsRemoved}
                />  
            </Flex>
        </Flex>
    )
};
