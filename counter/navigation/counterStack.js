import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Counter from "../screen/counter";

const stack = createNativeStackNavigator();

const CounterStack = () => {
    return (
        <stack.Navigator initialRouteName="Counter" screenOptions={{ headerShown: false }}>
            <stack.Screen name="Counter" component={Counter} />
        </stack.Navigator>
    )
}

export default CounterStack;