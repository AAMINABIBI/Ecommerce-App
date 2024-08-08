import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Note from './note';

const Main = () => {
    const [noteArray, setNoteArray] = useState([]);
    const [noteText, setNoteText] = useState('');

    const addTask = () => {
        if (noteText) {
            const date = new Date();
            const newNote = {
                date: `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`,
                note: noteText
            };

            setNoteArray([...noteArray, newNote]);
            setNoteText('');
        }
    };

    const deleteNote = (key) => {
        setNoteArray(noteArray.filter((note, index) => index !== key));
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>ToDo</Text>
            </View>

            <ScrollView style={styles.scrollContainer}>
                {noteArray.map((val, key) => (
                    <Note
                        key={key}
                        keyval={key}
                        val={val}
                        deleteMethod={() => deleteNote(key)}
                    />
                ))}
            </ScrollView>

            <View style={styles.footer}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={setNoteText}
                    value={noteText}
                    placeholder='Task'
                    placeholderTextColor='white'
                    underlineColorAndroid='transparent'
                />
            </View>

            <TouchableOpacity onPress={addTask} style={styles.addButton}>
                <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#3933FF',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd',
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26,
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#3933FF',
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
    },
});

export default Main;
