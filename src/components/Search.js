import * as React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Icon } from 'react-native-elements'

const Search = () => {
    return (
        <View style={styles.wrapper}>
            <Icon
                name='search'
                size={32}
                type='evilicon'
                color='#666' />
            <TextInput placeholder="412 messages" style={styles.input} placeholderTextColor="#666" />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e9e9e9',
        marginVertical: 20,
        borderRadius: 20,
        paddingHorizontal: 10,
        height: 40
    },
    input: {
        color: '#666',
        flex: 1
    }
});

export default Search;