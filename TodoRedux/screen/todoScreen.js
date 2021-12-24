import React, { useState } from "react";
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { add_Todo, delete_Todo, edit_Todo } from "../store/actions";

const TodoScreen = () => {
    const [todoTitle, setTodoTitle] = useState("")
    const [edit, setEdit] = useState(false)
    const [editTitle, setEditTitle] = useState("")
    const dispatch = useDispatch();
    const Data = useSelector((state) => state.data)

    // const Data = [
    //     { title: "kk" },
    //     { title: "k" },
    // ]

    const addTodoHandler = () => {
        let todoDetails = {
            title: todoTitle,
        }
        dispatch(add_Todo(todoDetails))
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={[styles.container, { marginHorizontal: 16 }]}>
                <TextInput
                    placeholder="Todo Title"
                    value={edit ? editTitle : todoTitle}
                    onChangeText={(text) => setTodoTitle(text)}
                />
                <Button
                    title={edit ? "Edit Todo" : "Add Todo"}
                    onPress={() => { addTodoHandler(), setTodoTitle("") }}
                />
                <FlatList
                    data={Data}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => {
                        return (
                            <View>
                                <Text>{item.title}</Text>
                                <Button
                                    title="Edit"
                                    onPress={() => { setEditTitle(item.title), setEdit(true) }}
                                />
                                <Button
                                    title="Delete"
                                    onPress={() => dispatch(delete_Todo(index))}
                                />
                            </View>
                        )
                    }}
                />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    }
})

export default TodoScreen;