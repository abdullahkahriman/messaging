import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import MessageDetailItem from './MessageDetailItem';

const MessageDetailItems = ({ route, navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://608eb1070294cd001765da18.mockapi.io/detail')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    const renderMessageList = ({ item }) => {
        return <MessageDetailItem navigation={navigation} item={item} />
    }

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator size="large" color="#333" /> : <FlatList data={data} renderItem={renderMessageList} keyExtractor={item => item.id} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        backgroundColor: '#fff'
    }
});

export default MessageDetailItems