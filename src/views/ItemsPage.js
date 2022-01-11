import { Flex, Table, Tbody, Text, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { ItemCard } from "../components/Items/ItemCard";
import PaginationBar from "../components/NavBar/PaginationBar";

const ItemsPage = ({ user, userItems, setUserItems }) => {
    return (
        <Flex flexDir={"column"} marginTop={["6rem"]} marginLeft={["2rem"]}>
            <Text fontSize="6xl" marginBottom={"2rem"}>All Items</Text>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Category</Th>
                        <Th>Owned Since</Th>
                        <Th>Quantity</Th>
                        <Th>Score</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {userItems.map((item) => (
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