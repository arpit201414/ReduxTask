import React from "react";
import Counter from "./counter/screen/counter";
import { Provider } from "react-redux";
//import { store } from "./counter/store/store";
import { store } from "./TodoRedux/store/store";
import { NavigationContainer } from "@react-navigation/native";
import TodoScreen from "./TodoRedux/screen/todoScreen";

const App = () => {
  return (
    <NavigationContainer >
      <Provider
        store={store}
      >
        <TodoScreen />
      </Provider>
    </NavigationContainer>
  )
}
export default App;