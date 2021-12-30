import { Button, Checkbox, Input, InputGroup, ModalBody, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react'

export const StepTwo = ({ handleInputChange, itemRank, setItemRank }) => {
    const [radioValue, setRadioValue] = useState("0");

    return (
        <>
            <ModalBody>
                <InputGroup display={"flex"} flexDir={"column"}>
                    <Text marginTop={"2px"} mb={"8px"}>When did you acquire this item?</Text>
                    <Input onChange={handleInputChange} name="timeOwned" marginBottom={"2rem"} type="date" variant="outline" />
                    <Text marginTop={"2px"} mb={"8px"}>When was the last time you used this item?</Text>
                    <Input onChange={handleInputChange} name="categoryName" type="date" marginBottom={"2rem"} variant="outline" />
                    <Text marginTop={"2px"} mb={"8px"}>Do you even remember that you owned this?</Text>
                    <RadioGroup onChange={setRadioValue} direction={"row"}>
                        <Stack direction={"row"}>
                            <Radio value={"2"}>Yes</Radio>
                            <Radio value={"-2"}>No</Radio>
                        </Stack>
                    </RadioGroup>
                </InputGroup>
            </ModalBody>
        </>
    );
}