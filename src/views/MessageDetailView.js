import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../components/Header';
import MessageDetailItems from '../components/messageDetailItems/MessageDetailItems';
import MessageInput from '../components/MessageInput';

const MessageDetailView = ({ route, navigation }) => {

    const { name } = route.params;

    return (
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
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
})

export default MessageDetailView;