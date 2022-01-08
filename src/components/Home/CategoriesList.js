import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon} from "@chakra-ui/icons";
import React from "react";
import CategoryModal from '../Modals/CategoryModal';
import { useNavigate } from 'react-router-dom';

const CategoriesList = ({ userCategories, setUserCategories, user, setUserItems }) => {   
    const navigate = useNavigate();

    return (
        <>
            {userCategories?.map((category) => (
                <Button
                    key={category.categoryId} 
                    rightIcon={<ArrowForwardIcon />} 
                    width={"70%"} 
                    size={"lg"}
                    onClick={() => navigate(`/items/${category.categoryId}`)}
                >
                    {category.categoryName}
                </Button>
                ))
            }
            <Button
                rightIcon={<ArrowForwardIcon />} 
                width={"70%"} 
                size={"lg"}
                variant={"outline"}
                onClick={() => navigate(`/items/removed`)}
            >
                Removed Items
            </Button>
            <CategoryModal 
                user={user}
                setUserCategories={setUserCategories}
            />
        </>
    )
};

export default CategoriesList;
