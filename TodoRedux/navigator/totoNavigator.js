import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoScreen from "../screen/todoScreen";

const stack = createNativeStackNavigator();

const TodoStack = () => {
    return (
        <stack.Navigator initialRouteName="TodoScreen" screenOptions={{ headerShown: false }}>
            <stack.Screen name="TodoScreen" component={TodoScreen} />
        </stack.Navigator>
    )
}

export default TodoStack;