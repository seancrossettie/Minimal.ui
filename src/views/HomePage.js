import { Flex, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import CategoriesList from '../components/Home/CategoriesList';
import { ProgressChart } from '../components/Home/ProgressChart';
import ItemModal from '../components/Modals/ItemMultiStep/ItemModal';
import { getUserCategories } from '../helpers/data/categoryData';
import { getUserItems } from '../helpers/data/itemData';

export const HomePage = ({ user, userCategories, setUserCategories, setUserItems, userItems }) => {
    useEffect(() => {
        getUserItems(user.userId).then(setUserItems);
        getUserCategories(user.userId).then(setUserCategories);
    }, [setUserCategories, setUserItems, user.userId]);

    return (
        <Flex flexDir={["column","row"]} justifyContent={"space-between"} marginTop={["8rem"]}>
            <Flex width={"40%"} marginLeft={"2%"} flexDir={"column"} align={"center"}>
                <Text fontSize={"6xl"}>Categories</Text>
                <VStack marginTop={"1rem"} width={"80%"}>
                    <CategoriesList
                        user={user} 
                        userCategories={userCategories}
                        setUserCategories={setUserCategories}
                        setUserItems={setUserItems}
                    />
                    <ItemModal 
                        user={user}
                        setUserItems={setUserItems}
                        userCategories={userCategories}
                    />
                </VStack>
            </Flex>
            <Flex width={"40%"} marginRight={"2%"} flexDir={"column"} justifyContent={"center"}>
                <ProgressChart 
                    totalItemsOwned={user.totalItemsOwned} 
                    totalItemsRemoved={user.totalItemsRemoved}
                />  
            </Flex>
        </Flex>
    )
};
