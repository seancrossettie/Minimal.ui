import { AddIcon } from '@chakra-ui/icons';
import { Button, ButtonGroup, Flex, Modal, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import React, { useState } from 'react'
import { StepOne } from './StepOne';
import { StepThree } from './StepThree';
import { StepTwo } from './StepTwo';

const ItemModal = ({ user, setUserItems, userCategories }) => {
    const [item, setItem] = useState({
        userId: user.userId,
        itemName: "",
        itemDescription: "",
        timeOwned: "",
        quantity: 1,
        isDuplicate: false,
        isRemoved: false,
        necessityRank: 0
    });

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { nextStep, prevStep, reset, activeStep } = useSteps({
        initialStep: 0,
      })
    const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }]

    const handleInputChange = (e) => {
        setItem((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value 
        }));
    };

    const handleStepButton = () => {
        if (activeStep === 2) {
            onClose();
            reset();
        } else {
            nextStep();
        }
    };

    return (
        <Flex width={"70%"}>
            <Button isFullWidth={true} rightIcon={<AddIcon />} variant={"outline"} onClick={onOpen}>Add an Item</Button>
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
                        <Text marginTop={"1rem"}>Add a Category</Text>
                    </ModalHeader>
                    {activeStep === 0 
                        ? <StepOne handleInputChange={handleInputChange} item={item} setItem={setItem} userCategories={userCategories} />
                        :""
                    }
                    {activeStep === 1 
                        ? <StepTwo handleInputChange={handleInputChange} item={item} />
                        :""
                    }
                    {activeStep === 2
                        ? <StepThree handleInputChange={handleInputChange} item={item} />
                        : ""
                    }
                    <ModalFooter>
                        <ButtonGroup isAttached variant={"outline"}>
                            <Button 
                                variant={"outline"}
                                onClick={prevStep}
                                isDisabled={activeStep === 0}
                            >
                                Prev
                            </Button>
                            <Button variant="outline" color={"teal.400"} onClick={e => handleStepButton(e)}>
                                {activeStep === steps.length - 1 ? "Finish" : "Next"}
                            </Button>
                            <Button onClick={() => console.warn(item)}>Test</Button>
                        </ButtonGroup>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    );
};

export default ItemModal;
