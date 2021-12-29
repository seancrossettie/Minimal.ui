import { Button, VStack } from '@chakra-ui/react'
import { ArrowForwardIcon} from '@chakra-ui/icons'
import React from 'react'
import CategoryModal from './CategoryModal';
import ItemModal from './ItemModal';


const CategoriesList = ({ userCategories, setUserCategories, user, setUserItems }) => {   
    return (
        <VStack marginTop={"1rem"} width={"80%"}>
        {  userCategories?.map((category) => (
                <Button 
                    key={category.categoryId} 
                    rightIcon={<ArrowForwardIcon />}
                    width={"70%"}
                    size={"lg"}
                >
                    {category.categoryName}
                </Button>
            ))
        }
            <CategoryModal 
                user={user}
                setUserCategories={setUserCategories}
            />
            <ItemModal 
                user={user}
                setUserItems={setUserItems}
            />
        </VStack>
    )
};

export default CategoriesList;
