import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Moment from 'moment';

const MessageDetailItem = ({ navigation, item }) => {
    Moment.locale('en');

    return (
        <View style={styles.container}>
            <Text style={styles.textDate}>{Moment(item.date).format('hh:mm')}</Text>
            <View style={styles.itemWrapper}>
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    textDate: {
    },
    itemWrapper: {
        backgroundColor: '#f1f1f1',
        width: '85%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    itemText: {
        fontSize: 14,
        lineHeight: 18
    }
});

export default MessageDetailItem;