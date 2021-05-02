import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../components/Header';
import MessageDetailItems from '../components/messageDetailItems/MessageDetailItems';

const MessageDetailView = ({ route, navigation }) => {

    const { name } = route.params;

    return (
        <View style={styles.container}>
            {/* Header */}
            <Header text={name} isBack={true} navigation={navigation} />

            {/* Detail list */}
            <MessageDetailItems navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20
    },
})

export default MessageDetailView;