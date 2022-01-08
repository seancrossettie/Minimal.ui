import { AddIcon } from '@chakra-ui/icons';
import { Button, ButtonGroup, Flex, Modal, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import React, { useEffect, useState } from 'react'
import { createNewItem, getUserItems } from '../../../helpers/data/itemData';
import { StepOne } from './StepOne';
import { StepThree } from './StepThree';
import { StepTwo } from './StepTwo';

const ItemModal = ({ user, setUserItems, userCategories }) => {
    // State of item to be created
    const [item, setItem] = useState({
        userId: user.userId,
        categoryId: "",
        itemName: "",
        timeOwned: "",
        quantity: 1,
        isDuplicate: false,
        isRemoved: false,
        necessityRank: 0
    });
    
    // Modal Stepping API
    const { isOpen, onOpen, onClose } = useDisclosure();
    const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }]
    const { nextStep, prevStep, reset, activeStep } = useSteps({
        initialStep: 0,
    });

    // Handles stepping in modal
    const handleStepButton = () => {
        if (activeStep === 2) {
            setItem((prevState) => ({
                ...prevState,
                necessityRank: Object.values(rank).reduce((a, b) => a + b, 0)
            }));
            createNewItem(item).then(() => getUserItems(user.userId).then(setUserItems));
            onClose();
            reset();
        } else {
            nextStep();
        }
    };

    // Handle isDisabled on modal button
    const [isDisabled, setIsDisabled] = useState(true);
    useEffect(() => {
        if (userCategories.length < 1) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        };
    }, [userCategories.length]);

    // Changes the state of the item based on the form inputs
    const handleInputChange = (e) => {
        setItem((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    // Change the state of the item rank based on form inputs
    const [rank, setRank] = useState({
        practical: 0,
        vitalToWork: 0,
        replace: 0,
        happiness: 0,
        sentimental: 0,
        couldntLive: 0,
        oneOfaKind: 0,
        often: 0,
        forget: 0
    });

    const handleRankChange = (e) => {
        setRank((prevState) => ({
            ...prevState,
            [e.target.name]: Number(e.target.value)
        }));
    };

    return (
        <Flex width={"70%"}>
            <Button isDisabled={isDisabled} isFullWidth={true} rightIcon={<AddIcon />} variant={"outline"} onClick={onOpen}>Add an Item</Button>
            <Modal isOpen={isOpen} size="xl" onClose={() => { onClose(); reset(); }}>
                <ModalOverlay onClick={() => { onClose(); reset(); }} />
                <ModalContent>
                    <ModalHeader>
                        <Steps activeStep={activeStep}>
                            {steps.map(({ label }, index) => (
                            <Step label={label} key={label}>
                            </Step>
                            ))}
                        </Steps>
                        <Text marginTop={"1rem"}>Add an Item</Text>
                    </ModalHeader>
                    {activeStep === 0 
                        ? <StepOne 
                                handleInputChange={handleInputChange} 
                                item={item} 
                                setItem={setItem} 
                                userCategories={userCategories} 
                            />
                        : ""
                    }
                    {activeStep === 1 
                        ? 
                        <StepTwo
                            rank={rank}
                            handleRankChange={handleRankChange}
                        />
                        : ""
                    }
                    {activeStep === 2
                        ? 
                        <StepThree
                            rank={rank} 
                            handleInputChange={handleInputChange} 
                        />
                        : ""
                    }
                    <ModalFooter>
                        <ButtonGroup isAttached variant={"outline"}>
                            <Button variant={"outline"} onClick={prevStep} isDisabled={activeStep === 0}>
                                Prev
                            </Button>
                            <Button variant="outline" color={"teal.400"} onClick={e => handleStepButton(e)}>
                                {activeStep === steps.length - 1 ? "Finish" : "Next"}
                            </Button>   
                            <Button onClick={() => console.warn(Object.values(rank).reduce((a, b) => a + b, 0))}>Test</Button>
                        </ButtonGroup>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    );
};

export default ItemModal;
