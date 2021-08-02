import { Button, VStack } from '@chakra-ui/react';

const BasicForm = (props) => {
  return (
    <form>
      
      
      <VStack pt={20} spacing={10}>
      <VStack className='control-group'>
      <VStack spacing={10}>
        <VStack className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' />
        </VStack>
        <VStack className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </VStack>
        </VStack>
      </VStack>
      <VStack className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </VStack>
      
      <VStack className='form-actions'>
        <Button><button>Submit</button>
        </Button> 
      </VStack>
      </VStack>
    </form>
  );
};

export default BasicForm;
