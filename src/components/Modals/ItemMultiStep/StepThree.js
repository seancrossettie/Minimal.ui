import { InputGroup, ModalBody, Select, Text } from '@chakra-ui/react';
import React from 'react'

export const StepThree = ({ handleInputChange }) => {
    return (
        <>
            <ModalBody>
                <InputGroup display={"flex"} flexDir={"column"}>
                    <Text fontSize={"2xl"} mb="1rem">On a scale from 1 to 5...</Text>
                    <Text marginTop={"2px"} mb={"8px"}>How sentimental is this item?</Text>
                    <Select variant="outline" mb="2rem">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Select>
                    <Text marginTop={"2px"} mb={"8px"}>How vital is this item to your work?</Text>
                    <Select variant="outline" mb="2rem">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Select>
                    <Text marginTop={"2px"} mb={"8px"}>How much would you miss this item?</Text>
                    <Select variant="outline" mb="2rem">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Select>
                    <Text marginTop={"2px"} mb={"8px"}>How important is this to you happiness?</Text>
                    <Select variant="outline" mb="2rem">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Select>
                </InputGroup>
            </ModalBody>
        </>
    );
};