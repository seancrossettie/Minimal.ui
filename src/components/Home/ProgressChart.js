import { Flex } from '@chakra-ui/react'
import { ChartDonut, ChartThemeColor } from '@patternfly/react-charts'
import React from 'react'

export const ProgressChart = ({ totalItemsOwned, totalItemsRemoved }) => {

    return (
        <Flex height={["30rem"]} width={["30rem"]}>
                <ChartDonut
                    title={`${totalItemsOwned}`}
                    subTitle="Items"
                    data={[{x: "Owned", y: `${totalItemsOwned}`}, {x: "Removed", y: `${totalItemsRemoved}`}]}
                    labels={({ datum }) => `${datum.x} : ${datum.y}`}
                    themeColor={ChartThemeColor.multiUnordered}
                />   
        </Flex>
    )
}
