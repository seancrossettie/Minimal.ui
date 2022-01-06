import { CloseIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, Flex, Table, Tbody, Text, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ItemCard } from "../components/Items/ItemCard";
import { deleteCategory, getCategoryById } from "../helpers/data/categoryData";
import { getUserItems } from "../helpers/data/itemData";

const CategoryItemsPage = ({ user, userItems, setUserItems }) => {
    const [itemCat, setItemCat] = useState({});
    const { categoryId } = useParams();
    const navigate = useNavigate();

    useState(() => {
        getCategoryById(categoryId).then(setItemCat);
    });

    const handleDelete = () => {
        deleteCategory(categoryId).then(() => { 
            getUserItems(user.userId).then(setUserItems);
            navigate("/");
        });
    };

    return (
        <Flex flexDir={"column"} marginTop={["6rem"]} marginLeft={["2rem"]}>
        <Flex alignItems="center" marginBottom={"2rem"}>
            <Text fontSize="6xl">{itemCat.categoryName}</Text>
            <ButtonGroup isAttached ml={"auto"}>
                <Button isDisabled={
                    userItems.filter(item => item.categoryId === itemCat.categoryId && item.isRemoved === false).length === 0 ? false : true } 
                    onClick={() => handleDelete()} 
                    mr={"6rem"} 
                    variant={"outline"} 
                    icon={<CloseIcon />}
                >
                    Delete
                </Button>
            </ButtonGroup>
        </Flex>
        <Table>
            <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Category</Th>
                    <Th>Time Owned (weeks)</Th>
                    <Th>Quantity</Th>
                    <Th>Score</Th>
                    <Th>Remove</Th>
                </Tr>
            </Thead>
            <Tbody>
                {userItems.filter(item => item.categoryId === itemCat.categoryId && item.isRemoved === false).map((item) => (
                    <Tr key={item.itemId}>
                        <ItemCard
                            user={user}
                            item={item}
                            setUserItems={setUserItems}
                        />
                    </Tr>
                ))
                }
            </Tbody>
        </Table>
    </Flex>
    );
};

export default CategoryItemsPage;