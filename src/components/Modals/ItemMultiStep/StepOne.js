import { Checkbox, HStack, Input, InputGroup, ModalBody, Select, Text } from '@chakra-ui/react';
import React from "react";

export const StepOne = ({ handleInputChange, item, setItem, userCategories }) => {

    const handleIsDuplicate = (e) => {
        setItem((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.checked
        }));
    };
    
    return (
        <>
            <ModalBody>
                <InputGroup display={"flex"} flexDir={"column"}>
                    <Text marginTop={"2px"} mb={"8px"}>Select a category</Text>
                    <Select defaultValue={item.categoryId} placeholder="Select an option" mb={"2rem"} name="categoryId" onChange={handleInputChange}>
                        {userCategories.map((category) => (
                            <option name="categoryId" value={category.categoryId} key={category.categoryId}>{category.categoryName}</option>
                        ))
                        }
                    </Select>
                    <Text marginTop={"2px"} mb={"8px"}>Name</Text>
                    <Input onChange={handleInputChange} name="itemName" defaultValue={item.itemName} marginBottom={"2rem"} placeholder="Name" variant="outline" />
                    <HStack alignContent={"center"} marginTop={"2px"} mb={"8px"}>
                        <Text>When did you acquire this item?</Text><Text fontSize={"xs"}>(approximate)</Text>
                    </HStack>
                    <Input defaultValue={item.timeOwned} onChange={handleInputChange} name="timeOwned" marginBottom={"2rem"} type="date" variant="outline" /> 
                    <Text marginTop={"2px"} mb={"8px"}>Do you have more than one of this item?</Text>
                    <Checkbox defaultValue={item.isDuplicate} onChange={e => handleIsDuplicate(e)} name="isDuplicate" defaultChecked={item.isDuplicate} marginBottom={item.isDuplicate ? "1rem" : ""}>Yes</Checkbox>
                    {
                        item.isDuplicate 
                        ? 
                            <>
                                <Text marginTop={"2px"} mb={"8px"}>How many?</Text>
                                <Input onChange={handleInputChange} defaultValue={item.quantity} name="quantity" type="number" variant="outline" />
                            </>
                        : ""
                    }
                </InputGroup>
            </ModalBody>
        </>
    );
};
