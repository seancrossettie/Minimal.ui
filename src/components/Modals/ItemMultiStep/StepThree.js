import { InputGroup, ModalBody, Select, Text } from '@chakra-ui/react';
import React from 'react'

export const StepThree = ({ handleRankChange }) => {
    return (
        <>
            <ModalBody>
                <InputGroup display={"flex"} flexDir={"column"}>
                    <Text fontSize={"2xl"} mb="1rem">On a scale from 1 to 5...</Text>
                    <Text marginTop={"2px"} mb={"8px"}>How sentimental is this item?</Text>
                    <Select placeholder="Select" defaultValue="0" name="play" variant="outline" mb="2rem" onChange={handleRankChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Select>
                    <Text marginTop={"2px"} mb={"8px"}>How vital is this item to your work?</Text>
                    <Select placeholder="Select" defaultValue="0" name="eat" variant="outline" mb="2rem" onChange={handleRankChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Select>
                    <Text marginTop={"2px"} mb={"8px"}>How much would you miss this item?</Text>
                    <Select placeholder="Select" defaultValue="0" name="miss" variant="os" mb="2rem" onChange={handleRankChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Select>
                    <Text marginTop={"2px"} mb={"8px"}>How important is this to you happiness?</Text>
                    <Select placeholder="Select" defaultValue="0" name="ha" variant="outline" mb="2rem" onChange={handleRankChange}>
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