import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import MessageItem from './MessageItem';

const MessageItems = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://608eb1070294cd001765da18.mockapi.io/test')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    const renderMessageList = ({ item }) => {
        return <MessageItem item={item} />
    }
    return (
        <View>
            {isLoading ? <ActivityIndicator size="large" color="#06bcee" /> : <FlatList data={data} renderItem={renderMessageList} keyExtractor={item => item.id} />}
        </View>
    )
}

export default MessageItems;