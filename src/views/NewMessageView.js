import * as React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Icon } from 'react-native-elements'
import Header from '../components/Header';
import MessageInput from '../components/MessageInput';
import ReceiverInput from '../components/ReceiverInput';

const NewMessageView = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.padding}>
                {/* Header */}
                <Header text="New Message" isBack={true} navigation={navigation} />

                {/* Receiver message */}
                <ReceiverInput />
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
})

export default NewMessageView;