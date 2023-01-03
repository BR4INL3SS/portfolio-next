import { Center, Container, Flex, Heading, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { CSSProperties, useState } from "react";
import React from 'react';
import DotLoader from "react-spinners/ClimbingBoxLoader";
import { loadingPhrases } from '../utils/constants';
import { customColors } from '../utils/theme';

const LoadingSpinner = () => {

    const [phrase, setPhrase] = useState('')

    React.useEffect(() => {
        setPhrase(loadingPhrases[Math.floor(Math.random() * loadingPhrases.length)] as string)
    }, []);

    return (
        <Container h='100vh' w='100vw'>
            <Center
                position='fixed'
                top='50%'
                left='50%'
                transform='translate(-50%, -50%)'
            >
                <VStack>

                    <DotLoader
                        color={useColorModeValue(customColors.customBlue, customColors.customRed)}
                        loading
                        size={20}
                        aria-label="Loading Spinner"
                        data-testid="loader"

                    />
                    <br />
                    <br />
                    <br />
                    <Text textAlign={'center'} fontSize={'md'}>{phrase}</Text>
                </VStack>
            </Center>
        </Container>
    )
}

export default LoadingSpinner