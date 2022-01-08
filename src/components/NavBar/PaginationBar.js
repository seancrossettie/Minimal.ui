import { IconButton } from '@chakra-ui/button';
import {
  ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon
} from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/layout';
import { Tooltip } from '@chakra-ui/tooltip';
import React from 'react';
import {
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react';

const PaginationBar = () => {
  return (
    <Flex justifyContent='space-between' alignItems='center' bottom={0} width={"100%"} left={0} p='5' position={"fixed"}>
      <Flex>
        <Tooltip label='First Page'>
          <IconButton
            mr={4}
            icon={<ArrowLeftIcon h={3} w={3} />}
          />
        </Tooltip>
        <Tooltip label='Previous Page'>
          <IconButton
            icon={<ChevronLeftIcon h={6} w={6} />}
          />
        </Tooltip>
      </Flex>
      <Flex alignItems='center'>
        {/* <Text flexShrink='0' mr={8}>Page{' '}
          <Text fontWeight='bold' as='span'>{pageNumber}{' '}</Text>
            of{' '}
          <Text fontWeight='bold' as='span'>{max}{' '} </Text>
        </Text>
        <Text flexShrink='0'>Go to page:</Text>{' '} */}
        <NumberInput
          flexShrink='0'
          ml={2}
          mr={8}
          w={28}
          min={1}
        //   max={max}

        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Select
          w={32}
          flexShrink='0'
        >
          <option value={10}>Display 10</option>
          <option value={25}>Display 25</option>
        </Select>
      </Flex>
      <Flex>
        <Tooltip label='Next Page'>
          <IconButton
            icon={<ChevronRightIcon h={6} w={6} />}
          />
        </Tooltip>
        <Tooltip label='Last Page'>
          <IconButton
            ml={4}
            icon={<ArrowRightIcon h={3} w={3} />}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default PaginationBar;