import { Button, VStack } from '@chakra-ui/react'
import { AddIcon} from '@chakra-ui/icons'
import React from 'react'

const CategoriesList = ({ userCategories, setUserCategories }) => {   
    return (
        <VStack marginTop={"1rem"}>
        {   userCategories.length > 0
            ? ""
            : <Button isFullWidth={true} rightIcon={<AddIcon />}>Add a Category</Button>
        }
        </VStack>
    )
};

export default CategoriesList;
