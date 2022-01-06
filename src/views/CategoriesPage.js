import { Flex, Text, VStack } from "@chakra-ui/react";
import CategoriesList from '../components/Home/CategoriesList';
import React from "react";

const CategoriesPage = ({ user, userCategories, setUserCategories, setUserItems }) => {

    return (
        <Flex flexDir={"column"} marginTop={["6rem"]} align={"center"}>
            <Text fontSize="6xl" marginBottom={"2rem"}>My Categories</Text>
            <Flex width={"70%"} marginLeft={"2%"} flexDir={"column"} align={"center"}>
            <VStack marginTop={"1rem"} width={"80%"}>
                <CategoriesList
                        user={user} 
                        userCategories={userCategories}
                        setUserCategories={setUserCategories}
                        setUserItems={setUserItems}
                    />
            </VStack>
            </Flex> 
        </Flex>
    );
};

export default CategoriesPage;