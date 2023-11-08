    

import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

function MyAccordion() {
  const [openIndex, setOpenIndex] = useState([0]);

  const handleAccordionChange = (index) => {
    setOpenIndex(index);
  };

  return (
<Accordion allowToggle className='bg-gray-600 rounded-md mt-10'>
  <AccordionItem>
    <h2>
    <AccordionButton py={10} px={15} boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)">
        <Box as="span" flex='1' textAlign='left'>
        ¿Cómo retirar mis ganancias por Binance?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel px={15} py={15} >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
    <AccordionButton py={10} px={15} boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)">
        <Box as="span" flex='1' textAlign='left'>
        ¿Cómo depositar por MT4 por Binance?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel py={15} px={15}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
    <AccordionButton py={15} px={15} boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)">
        <Box as="span" flex='1' textAlign='left'>
        ¿Cómo usar la plataforma de RoboForex?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel py={15} px={15}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
  );
}

export default MyAccordion;
