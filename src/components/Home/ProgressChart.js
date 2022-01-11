import { Flex, Text } from '@chakra-ui/react'
import { ChartDonut, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts'
import React from 'react'

export const ProgressChart = ({ totalItemsOwned, totalItemsRemoved }) => {
    return (
        <Flex flexDir={"column"} align={["center"]}>
        <Text fontSize={["4xl", "6xl"]}>Progress</Text>
            <Text>Total number of items: {totalItemsOwned}</Text>
            <Text>Number of items removed: {totalItemsRemoved}</Text>
            <Flex width={"400px"} height={"500px"} >
                <ChartDonut
                    width={400}
                    height={500}
                    title={`${totalItemsRemoved}`}
                    constrainToVisibleArea={true}
                    themeVariant={ChartThemeVariant.dark}
                    themeColor={ChartThemeColor.dark}
                    subTitle="Item Removed"
                    data={[{x: "Owned", y: `${totalItemsOwned}`}, {x: "Removed", y: `${totalItemsRemoved}`}]}
                    labels={({ datum }) => `${datum.x} : ${datum.y}`}
                    legendPosition="bottom"
                    legendData={[
                        { name: "Owned" },
                        { name : "Removed"}
                    ]}
                />   
            </Flex>
        </Flex>
    )
}
