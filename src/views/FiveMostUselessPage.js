import { Flex, Table, Tbody, Text, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ItemCard } from "../components/Items/ItemCard";
import { getFiveMostUseless } from "../helpers/data/itemData";

const FiveMostUselessPage = ({ user, setUserItems }) => {
    const [five, setFive] = useState([]);

    useEffect(() => {
        getFiveMostUseless().then(setFive);  
    }, []);

    useEffect(() => {})
    return (
        <Flex flexDir={"column"} marginTop={["6rem"]} marginLeft={["2rem"]}>
            <Text fontSize="6xl" marginBottom={"2rem"}>Five Most Useless Items</Text>
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
                    {five.map((item) => (
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

export default FiveMostUselessPage;