import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import MessageItems from '../components/MessageItems';
import Search from '../components/Search';
import Header from '../components/Header';

const HomeView = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <Header text="Messaging" />

            {/* Search */}
            <Search />

            {/* Message List */}
            <MessageItems navigation={navigation} />

            {/* Plus button */}
            <TouchableOpacity onPress={() => navigation.push('NewMessageView')} style={styles.plusBtnWrapper}>
                <Icon
                    name='plus'
                    size={32}
                    type='feather'
                    color='#fff' />
            </TouchableOpacity>
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
    //plus button
    plusBtnWrapper: {
        backgroundColor: 'orange',
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 48,
        height: 48,
        borderRadius: 48,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default HomeView;