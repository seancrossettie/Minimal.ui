import { Button, IconButton, Td } from "@chakra-ui/react";
import { differenceInWeeks, parseISO } from 'date-fns';
import moment from "moment";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { getCategoryById } from '../../helpers/data/categoryData';
import { deleteItem, getUserItems } from '../../helpers/data/itemData';

export const ItemCard = ({ item, user, setUserItems }) => {
    const navigate = useNavigate();
    const [itemCategory, setItemCategory] = useState({});

    useEffect(() => {
        getCategoryById(item.categoryId).then(setItemCategory);
    }, [item.categoryId]);

    const handleDeleteButton = () => {
        deleteItem(item).then(() => getUserItems(user.userId).then(r => setUserItems(r)));
    };


    return (
        <>
            <Td>{item.itemName}</Td>
                <Td>
                    <Button 
                        size="sm" 
                        variant={"ghost"}
                        onClick={() => navigate(`/items/${item.categoryId}`)}
                    >
                        {itemCategory.categoryName}
                    </Button>
                </Td>
                <Td>{Math.abs(differenceInWeeks(parseISO(item.timeOwned), parseISO(moment(new Date()).format("YYYY-MM-DD"))))}</Td>
                <Td>{item.quantity}</Td>
                <Td>{item.necessityRank}</Td>
                <Td><IconButton icon={<AiOutlineClose />} variant={"ghost"} onClick={() => handleDeleteButton(item)} />
            </Td>
        </>
    );
};
