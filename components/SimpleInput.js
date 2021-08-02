import { Button, VStack } from '@chakra-ui/react';

const SimpleInput = (props) => {

  return (
    <form>
      <VStack pt={20} className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' />
      </VStack>
      <VStack pt={10} className="form-actions">
        <Button><button>Submit</button></Button> 
      </VStack>
    </form>
  );
};

export default SimpleInput;
