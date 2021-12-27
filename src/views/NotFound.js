import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const NotFound = () => {
    return (
        <Flex flexDir="column" align="center" marginTop={["6rem","8rem"]}>
             <Text fontSize={"2xl"}>Page not found</Text>
        </Flex>
    )
}
