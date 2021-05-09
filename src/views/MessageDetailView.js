import * as React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Header from '../components/Header';
import MessageDetailItems from '../components/messageDetailItems/MessageDetailItems';
import MessageInput from '../components/MessageInput';

const { height } = Dimensions.get('screen');

const MessageDetailView = ({ route, navigation }) => {

    const { name } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.padding}>
                {/* Header */}
                <Header text={name} isBack={true} navigation={navigation} />

                {/* Detail list */}
                <MessageDetailItems navigation={navigation} />
            </View>

            {/* Message Input */}
            <MessageInput />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    padding: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        height: (height - 90)
    }
})

export default MessageDetailView;