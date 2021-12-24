import React, { useState } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addition, substraction } from "../store/actions";

const Counter = () => {
    const data = useSelector((state) => state.counter)
    const dispatch = useDispatch();
    return (
        <View>
            <SafeAreaView>
                <Button
                    title="Add"
                    onPress={() => dispatch(addition())}
                />
                <Text style={{ alignSelf: "center" }}>{data}</Text>
                <Button
                    title="Minus"
                    onPress={() => dispatch(substraction())}
                />
            </SafeAreaView>
        </View>
    )
}

export default Counter;