import { InputGroup, ModalBody, Select, Text } from '@chakra-ui/react';
import React from 'react'

export const StepThree = ({ rank, handleRankChange }) => {
    return (
        <>
            <ModalBody>
                <InputGroup display={"flex"} flexDir={"column"}>
                    <Text fontSize={"2xl"} mb="1rem">Do you agree or disagree with the following statements?</Text>
                    <Text marginTop={"2px"} mb={"8px"}>I couldn't live without this item.</Text>
                    <Select placeholder=" " defaultValue={rank.couldntLive} name="couldntLive" variant="outline" mb="2rem" onChange={handleRankChange}>
                        <option value="-2">Strongly Disagree</option>
                        <option value="-1">Disagree</option>
                        <option value="0">Neutral</option>
                        <option value="1">Agree</option>
                        <option value="2">Strongly Agree</option>
                    </Select>
                    <Text marginTop={"2px"} mb={"8px"}>This item is one of a kind.</Text>
                    <Select placeholder=" " defaultValue={rank.oneOfaKind} name="oneOfaKind" variant="outline" mb="2rem" onChange={handleRankChange}>
                        <option value="-2">Strongly Disagree</option>
                        <option value="-1">Disagree</option>
                        <option value="0">Neutral</option>
                        <option value="1">Agree</option>
                        <option value="2">Strongly Agree</option>
                    </Select>
                    <Text marginTop={"2px"} mb={"8px"}>I use this item often.</Text>
                    <Select placeholder=" " defaultValue={rank.often} name="often" variant="outline" mb="2rem" onChange={handleRankChange}>
                        <option value="-2">Strongly Disagree</option>
                        <option value="-1">Disagree</option>
                        <option value="0">Neutral</option>
                        <option value="1">Agree</option>
                        <option value="2">Strongly Agree</option>
                    </Select>
                    <Text marginTop={"2px"} mb={"8px"}>I sometimes forget I own this.</Text>
                    <Select placeholder=" " defaultValue={rank.forget} name="forget" variant="outline" mb="2rem" onChange={handleRankChange}>
                        <option value="2">Strongly Disagree</option>
                        <option value="1">Disagree</option>
                        <option value="0">Neutral</option>
                        <option value="-1">Agree</option>
                        <option value="-2">Strongly Agree</option>
                    </Select>
                </InputGroup>
            </ModalBody>
        </>
    );
};