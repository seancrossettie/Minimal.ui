import { Input, InputGroup, ModalBody, Text } from '@chakra-ui/react';
import React from 'react'

export const StepTwo = ({ handleInputChange }) => {
    return (
        <>
            <ModalBody>
                <InputGroup display={"flex"} flexDir={"column"}>
                <Text marginTop={"2px"} mb={"8px"}>When did you acquire this item?</Text>
                    <Input onChange={handleInputChange} name="timeOwned" marginBottom={"2rem"} type="date" variant="outline" />
                    <Text marginTop={"2px"} mb={"8px"}>When was the last time you used this item?</Text>
                    <Input onChange={handleInputChange} name="categoryName" marginBottom={"2rem"} placeholder="Name" variant="outline" />
                    <Text marginTop={"2px"} mb={"8px"}>Give a brief description</Text>
                    <Input onChange={handleInputChange} name="categoryDescription" placeholder="Description" variant="outline" />
                </InputGroup>
            </ModalBody>
        </>
    );
}