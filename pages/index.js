import { useState, useEffect } from 'react';
import {
  Button,
  Heading,
  useColorMode,
  VStack,
} from '@chakra-ui/react';
import BasicForm from '../components/BasicForm';
import SimpleInput from '../components/SimpleInput';



const Index = () => {
//! this is just for dark mode...
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = {
    light: 'black',
    dark: 'white',
  };
  const textColor = {
    light: 'white',
    dark: 'black',
  };
//!
 
  return (
    <>
      <VStack minHeight="100vh" bg={bgColor[colorMode]}>
        <Heading
          pt={20}
          align="center"
          color={textColor[colorMode]}
        >
          Section 16: Working with Forms
        </Heading>
     <BasicForm />
     <SimpleInput />
      </VStack>
    </>
  );
};

export default Index;
