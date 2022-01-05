import { AddIcon } from '@chakra-ui/icons';
import { Button, ButtonGroup, Flex, Input, InputGroup, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react'
import { createCategory, getUserCategories } from '../../helpers/data/categoryData';

const CategoryModal = ({ user, setUserCategories }) => {
    const [category, setCategory] = useState({
        userId: user.userId,
        categoryName: "",
        totalCategoryItems: 0,
        totalCategoryItemsRemoved: 0,
    });

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleInputChange = (e) => {
        setCategory((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleClick = (e) => {
        e.preventDefault();
        createCategory(category).then(() => getUserCategories(category.userId).then(setUserCategories));
    };

    return (
        <Flex width={"70%"}>
            <Button isFullWidth={true} rightIcon={<AddIcon />} variant={"outline"} onClick={onOpen}>Add a Category</Button>
            <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add a Category</ModalHeader>
                    <ModalBody>
                        <InputGroup display={"flex"} flexDir={"column"}>
                            <Text marginTop={"2px"} mb={"8px"}>Name</Text>
                            <Input onChange={handleInputChange} name="categoryName" marginBottom={"2rem"} placeholder="Name" variant="outline" />
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

export default CategoryModal;
