import { InputGroup, ModalBody, Select, Text } from '@chakra-ui/react';
import React from "react"

export const StepTwo = ({ rank, handleRankChange }) => {

    return (
        <>
            <ModalBody>
                <InputGroup display={"flex"} flexDir={"column"}>
                    <Text fontSize={"2xl"} mb="1rem">On a scale from 1 to 5...</Text>
                    <Text marginTop={"2px"} mb={"8px"}>How practically functional is this item?</Text>
                    <Select defaultValue={rank.practical} placeholder="Select" name="practical" variant="outline" mb="2rem" onChange={handleRankChange}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </Select>
                    <Text marginTop={"2px"} mb={"8px"}>How vital is this item to your work?</Text>
                    <Select defaultValue={rank.vitalToWork} placeholder="Select" name="vitalToWork" variant="outline" mb="2rem" onChange={handleRankChange}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </Select>
                    <Text marginTop={"2px"} mb={"8px"}>If you were to get rid of this, how badly would you need to replace it?</Text>
                    <Select placeholder="Select" defaultValue={rank.replace} name="replace" variant="outline" mb="2rem" onChange={handleRankChange}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </Select>
                    <Text marginTop={"2px"} mb={"8px"}>How important is this to you happiness?</Text>
                    <Select placeholder="Select" defaultValue={rank.happiness} name="happiness" variant="outline" mb="2rem" onChange={handleRankChange}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </Select>
                    <Text marginTop={"2px"} mb={"8px"}>How sentimental is this item?</Text>
                    <Select placeholder="Select" defaultValue={rank.sentimental} name="sentimental" variant="outline" mb="2rem" onChange={handleRankChange}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </Select>
                </InputGroup>
            </ModalBody>
        </>
    );
}