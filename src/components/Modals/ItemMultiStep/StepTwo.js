import { Button, HStack, Input, InputGroup, ModalBody, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import { differenceInWeeks, parseISO } from "date-fns";
import moment from "moment";
import React, { useState } from "react"

export const StepTwo = ({ 
    handleInputChange, 
    item, 
    itemRank, 
    setItemRank,
    timesUsed,
    setTimesUsed,
    rememberValue,
    setRememberValue,
    handleRankUpdate
}) => {
    const [practicalBool, setPracticalBool] = useState(0);

    const handleTimesUsed = () => {
        setTimesUsed(Math.abs(differenceInWeeks(parseISO(item.timeOwned), parseISO(moment(new Date()).format("YYYY-MM-DD")))));
    };

    return (
        <>
            <ModalBody>
                <InputGroup display={"flex"} flexDir={"column"}>
                    <HStack alignContent={"center"} marginTop={"2px"} mb={"8px"}>
                        <Text>When did you acquire this item?</Text><Text fontSize={"xs"}>(approximate)</Text>
                    </HStack>
                    <Input onChange={handleInputChange} name="timeOwned" marginBottom={"2rem"} type="date" variant="outline" />
                    <Text marginTop={"2px"} mb={"8px"}>Does this item have a practical use?</Text>
                        <RadioGroup marginBottom={"2rem"} onChange={(e) => setPracticalBool(Boolean(e))} direction={"row"}>
                            <Stack direction={"row"}>
                                <Radio value={"true"}>Yes</Radio>
                                <Radio value={""}>No</Radio>
                            </Stack>
                        </RadioGroup>
                    { practicalBool 
                        ?
                        <>
                            <Text marginTop={"2px"} mb={"8px"}>How many time a week do you use this item?</Text>
                            <Input name="timesAWeek" type="number" onChange={handleTimesUsed} marginBottom={"2rem"} variant="outline" />
                        </>
                        : ""
                    }
                    <Text marginTop={"2px"} mb={"8px"}>Do you even remember that you owned this?</Text>
                    <RadioGroup marginBottom={"2rem"} onChange={setRememberValue} direction={"row"}>
                        <Stack direction={"row"}>
                            <Radio value={"0"}>Yes</Radio>
                            <Radio value={"-2"}>No</Radio>
                        </Stack>
                    </RadioGroup>
                    <Button marginBottom={"1rem"} width={"4rem"} onClick={handleRankUpdate}>Save</Button>
                </InputGroup>
            </ModalBody>
        </>
    );
}