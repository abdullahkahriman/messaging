import * as React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Icon } from 'react-native-elements'
import Header from '../components/Header';
import MessageInput from '../components/MessageInput';

const NewMessageView = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.padding}>
                {/* Header */}
                <Header text="New Message" isBack={true} navigation={navigation} />

                {/* Receiver message */}
                <View style={styles.receiverWrapper}>
                    <TextInput style={styles.receiverInput} autoFocus={true} placeholder="Receiver:" placeholderTextColor="#666" />
                    <Icon onPress={() => alert("Find users...")} type="evilicon" style={styles.receiverIcon} name="search" size={32} color="#666" />
                </View>
            </View>

            {/* Message input */}
            <MessageInput />
        </View>
    );
}

const styles = StyleSheet.create({
    padding: {
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    receiverWrapper: {
        marginVertical: 30,
        backgroundColor: '#fff',
        flexDirection: 'row',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        alignItems: 'center'
    },
    receiverInput: {
        flex: 1,
        fontSize: 15,
        color: '#666'
    },
})

export default NewMessageView;