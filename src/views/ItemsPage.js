import { Flex, Table, Tbody, Text, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { ItemCard } from "../components/Items/ItemCard";

const ItemsPage = ({ user, setUser, userItems, setUserItems }) => {
    return (
        <Flex flexDir={"column"} marginTop={["6rem"]} marginLeft={["2rem"]}>
            <Text fontSize="6xl" marginBottom={"2rem"}>My Items</Text>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Description</Th>
                        <Th>Category</Th>
                        <Th>Time Owned (weeks)</Th>
                        <Th>Quantity</Th>
                        <Th>Score</Th>
                        <Th>Remove</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {userItems.filter(item => item.isRemoved === false).map((item) => (
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

export default ItemsPage;