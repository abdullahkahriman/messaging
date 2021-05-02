import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import MessageItems from '../components/MessageItems';
import Search from '../components/Search';

const HomeView = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerWrapper}>
                <Text style={styles.headerText}>Messaging</Text>
                <Icon
                    name='gear'
                    onPress={() => alert("Setting")}
                    size={32}
                    type='evilicon'
                    color='#000' />
            </View>

            {/* Search */}
            <Search />

            {/* Message List */}
            <MessageItems />

            {/* Plus button */}
            <TouchableOpacity onPress={() => alert("New message page")} style={styles.plusBtnWrapper}>
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
    //header
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20
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