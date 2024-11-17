import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  SafeAreaView
} from 'react-native';
import ToDoForm from './src/components/ToDoForm';
import ToDoList from './src/components/ToDoList';
import AboutScreen from "./src/screens/AboutScreen";
import HomeScreen from "./src/screens/HomeScreen";


function App(): React.JSX.Element {
  const [taskList, setTaskList] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const Stack = createNativeStackNavigator();

  const addTask = (taskText: string) => {
    const taskExist = taskList.some(
      (task) => task.toLowerCase() === taskText.toLowerCase()
    );

    if (taskExist) {
      return false;
    } else {
      setTaskList([...taskList, taskText]);
      return true;
    }
  };

  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
      <SafeAreaView>
        <ToDoList taskList={taskList}></ToDoList>
        <ToDoForm addTask={addTask}></ToDoForm>
      </SafeAreaView>
    </NavigationContainer>
  );
}


export default App;