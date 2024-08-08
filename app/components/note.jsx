import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

const Note = ({ keyval, val, deleteMethod }) => {
    return (
        <View key={keyval} style={styles.note}>
            <Text style={styles.noteText}>{val.date}</Text>
            <Text style={styles.noteText}>{val.note}</Text>
            <TouchableOpacity onPress={deleteMethod} style={styles.noteDelete}>
                <Text style={styles.noteDeleteText}>Del</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#e91e63',
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
    },
    noteDeleteText: {
        color: 'white',
    }
});

export default Note;
