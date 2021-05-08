import * as React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Icon } from 'react-native-elements'

import { MainContext } from '../provider/MainProvider'

const Search = () => {
    const ctx = React.useContext(MainContext);

    const clear = () => {
        ctx.setText('');
    }

    return (
        <View style={styles.wrapper}>
            <Icon
                name='search'
                size={32}
                type='evilicon'
                color='#666' />
            <TextInput placeholder={`${ctx.messageCount} messages`}
                value={ctx.text}
                onChangeText={val => ctx.setText(val)}
                style={styles.input}
                placeholderTextColor="#666" />
            {
                ctx.text ? <Icon
                    name='close'
                    size={32}
                    onPress={() => clear()}
                    type='evilicon'
                    color='gray' /> : null
            }
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
    },
});

export default Search;