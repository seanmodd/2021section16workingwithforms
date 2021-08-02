import { useState, useEffect } from 'react';
import {
  Button,
  Heading,
  useColorMode,
  VStack,
} from '@chakra-ui/react';
import BackwardCounter from '../components/BackwardCounter';
import ForwardCounter from '../components/ForwardCounter';
import NewTask from '../components/NewTask/NewTask';
import Tasks from '../components/Tasks/Tasks';
// import useHttp from '.././hooks/useHttp';
import useHttp from '../hooks/use-http';


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
          const [tasks, setTasks] = useState([]);
  
  const {isLoading, error, sendRequest: fetchTasks} = useHttp();

useEffect(() => {
  const transformTasks = (tasksObj) => {
    const loadedTasks = [];

    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }

    setTasks(loadedTasks)
  };
  fetchTasks(
    {url: 'https://react-http-movies-post-default-rtdb.firebaseio.com/tasks.json'}, 
    transformTasks);
   }, [fetchTasks]);

const taskAddHandler = (task) => {
  setTasks((prevTasks) => prevTasks.concat(task));
};
  return (
    <>
      <VStack minHeight="100vh" bg={bgColor[colorMode]}>
        <Heading
          pt={20}
          align="center"
          color={textColor[colorMode]}
        >
          Section 15: Building Custom Hooks
        </Heading>
        <VStack>
          <BackwardCounter />
          <ForwardCounter />
        </VStack>
        <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
      
      </VStack>
    </>
  );
};

export default Index;
