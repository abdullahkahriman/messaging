import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import MessageItem from './MessageItem';

import { MainContext } from '../provider/MainProvider'

const MessageItems = ({ navigation }) => {
    const ctx = React.useContext(MainContext);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!ctx.text) {
            fetch('https://608eb1070294cd001765da18.mockapi.io/test')
                .then((response) => response.json())
                .then((json) => {
                    setData(json);
                    ctx.setMessageCount(json.length);
                })
                .catch((error) => console.error(error))
                .finally(() => setLoading(false));
        } else {
            const searchText = ctx.text.toLowerCase();
            setData(data.filter(d => d.name.toLowerCase().includes(searchText) || d.text.toLowerCase().includes(searchText)));
        }
    }, [ctx.text]);

    const renderMessageList = ({ item }) => {
        return <MessageItem navigation={navigation} item={item} />
    }

    return (
        <View>
            {isLoading ? <ActivityIndicator size="large" color="#333" /> : <FlatList data={data} renderItem={renderMessageList} keyExtractor={item => item.id} />}
        </View>
    )
}

export default MessageItems;