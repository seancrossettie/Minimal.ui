import { Flex, Text } from '@chakra-ui/react'
import { ChartDonut, ChartThemeColor } from '@patternfly/react-charts'
import React from 'react'

export const ProgressChart = ({ totalItemsOwned, totalItemsRemoved }) => {
    return (
        <Flex flexDir={"column"} align={"center"} height={["90%"]} width={["90%"]}>
            <Text fontSize={["4xl", "6xl"]}>Progress</Text>
            <ChartDonut
                title={`${totalItemsOwned}`}
                constrainToVisibleArea={true}
                subTitle="Items"
                data={[{x: "Owned", y: `${totalItemsOwned}`}, {x: "Removed", y: `${totalItemsRemoved}`}]}
                labels={({ datum }) => `${datum.x} : ${datum.y}`}
                themeColor={ChartThemeColor.multiUnordered}
            />   
        </Flex>
    )
}
