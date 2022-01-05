import { Checkbox, Input, InputGroup, ModalBody, Select, Text } from '@chakra-ui/react';
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
                    <Text marginTop={"2px"} mb={"8px"}>Name</Text>
                    <Input onChange={handleInputChange} name="itemName" defaultValue={item.itemName} marginBottom={"2rem"} placeholder="Name" variant="outline" />
                    <Text marginTop={"2px"} mb={"8px"}>Select a category</Text>
                    <Select placeholder="Select an option" mb={"2rem"} name="categoryId" onChange={handleInputChange}>
                        {userCategories.map((category) => (
                            <option name="categoryId" value={category.categoryId} key={category.categoryId}>{category.categoryName}</option>
                        ))
                        }
                        <option value={null}>None</option>
                    </Select> 
                    <Text marginTop={"2px"} mb={"8px"}>Do you have more than one of this item?</Text>
                    <Checkbox onChange={e => handleIsDuplicate(e)} name="isDuplicate" defaultChecked={item.isDuplicate} marginBottom={item.isDuplicate ? "1rem" : ""}>Yes</Checkbox>
                    {
                        item.isDuplicate 
                        ? 
                            <>
                                <Text marginTop={"2px"} mb={"8px"}>How many?</Text>
                                <Input onChange={handleInputChange} name="quantity" type="number" defaultValue={item.quantity} variant="outline" />
                            </>
                        : ""
                    }
                </InputGroup>
            </ModalBody>
        </>
    );
};
