import { IconButton, Td } from '@chakra-ui/react';
import { differenceInWeeks, parseISO } from 'date-fns';
import moment from "moment";
import { AiOutlineClose } from "react-icons/ai";
import React from "react"
import { getUserItems, removeItem } from '../../helpers/data/itemData';

export const ItemCard = ({ item, user, setUserItems }) => {

    const handleDeleteButton = () => {
        removeItem(item).then(() => getUserItems(user.userId).then(r => setUserItems(r)));
    };

    return (
        <>
            <Td>{item.itemName}</Td>
                <Td>{item.itemDescription}</Td>
                <Td>{item.categoryId}</Td>
                <Td>{Math.abs(differenceInWeeks(parseISO(item.timeOwned), parseISO(moment(new Date()).format("YYYY-MM-DD"))))}</Td>
                <Td>{item.quantity}</Td>
                <Td>{item.necessityRank}</Td>
                <Td><IconButton icon={<AiOutlineClose />} variant={"ghost"} onClick={() => handleDeleteButton(item)} />
            </Td>
        </>
    );
};
