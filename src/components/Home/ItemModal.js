import { AddIcon } from '@chakra-ui/icons';
import { Button, ButtonGroup, Flex, Input, InputGroup, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react'

const ItemModal = (user, setUserItems) => {
    const [item, setItem] = useState({
        userId: user.userId,
        itemName: "",
        itemDescription: "",
        timeOwned: "",
        quantity: 0,
        isDuplicate: false,
        isRemoved: false,
        necessityRank: 0
    });

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleInputChange = (e) => {
        setItem((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleClick = (e) => {
        e.preventDefault();
        console.warn(item);
    };

    return (
        <Flex width={"70%"}>
            <Button isFullWidth={true} rightIcon={<AddIcon />} variant={"outline"} onClick={onOpen}>Add an Item</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add an Item</ModalHeader>
                    <ModalBody>
                        <InputGroup display={"flex"} flexDir={"column"}>
                            <Text marginTop={"2px"} mb={"8px"}>Name</Text>
                            <Input onChange={handleInputChange} name="categoryName" marginBottom={"2rem"} placeholder="Name" variant="outline" />
                            <Text marginTop={"2px"} mb={"8px"}>Give a brief description of the category</Text>
                            <Input onChange={handleInputChange} name="categoryDescription" placeholder="Description" variant="outline" />
                        </InputGroup>
                    </ModalBody>
                    <ModalFooter>
                        <ButtonGroup isAttached variant={"outline"}>
                            <Button 
                                onClick={e => { handleClick(e); onClose(); }} 
                                color={"teal.400"}
                                variant={"outline"}
                            >
                                Save
                            </Button>
                            <Button variant={"outline"} onClick={onClose}>Close</Button>
                        </ButtonGroup>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    );
};

export default ItemModal;
