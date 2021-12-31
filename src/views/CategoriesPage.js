import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import CategoryModal from "../components/Modals/CategoryModal";

const CategoriesPage = ({ user, setUser, userCategories, setUserCategories }) => {
    const [categoryItems, setCategoryItems] = useState();

    return (
        <Flex flexDir={"column"} marginTop={["6rem"]} marginLeft={["2rem"]}>
            <Text fontSize="6xl" marginBottom={"2rem"}>My Categories</Text>
            <Flex width={"40%"} marginLeft={"2%"} flexDir={"column"} align={"center"}>
                {userCategories?.map((category) => (
                    <Button key={category.categoryId} rightIcon={<ArrowForwardIcon />} width={"70%"} size={"lg"}>
                        {category.categoryName}
                    </Button>
                    ))
                }
                <CategoryModal
                    user={user}
                    setUserCategories={setUserCategories}
                />
            </Flex> 
        </Flex>
    );
};

export default CategoriesPage;