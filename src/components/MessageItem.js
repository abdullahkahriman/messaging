import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Moment from 'moment';

const MessageItem = ({ item }) => {
    Moment.locale('en');

    return (
        <TouchableOpacity onPress={() => alert("Message detail page")} style={styles.wrapper}>
            <View style={styles.imageWrapper}>
                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
            </View>
            <View style={styles.textWrapper}>
                <View style={styles.textTopWrapper}>
                    <Text style={{ fontSize: 18 }}>{item.name.length > 20 ? item.name.substr(0, 17) + '...' : item.name}</Text>
                    <Text style={{ color: 'gray' }}>{Moment(item.date).format('hh:mm')}</Text>
                </View>
                <View>
                    <Text>{item.text}</Text>
                </View>
            </View >
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    //messageItem
    wrapper: {
        flexDirection: 'row',
        marginBottom: 10,
        height: 60,
        overflow: 'hidden',
    },
    imageWrapper: {
        alignItems: 'center', justifyContent: 'center'
    },
    image: {
        width: 30,
        height: 30,
        borderRadius: 30
    },
    textWrapper: {
        flex: 1, paddingHorizontal: 10
    },
    textTopWrapper: {
        flexDirection: 'row', justifyContent: 'space-between'
    }
});

export default MessageItem;