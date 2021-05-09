import * as React from 'react';
import { Component } from 'react';
import { View, StyleSheet, TextInput, AppRegistry } from 'react-native';
import { Icon } from 'react-native-elements'

export default class ReceiverInput extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <TextInput style={styles.input}
                    placeholder="Receiver:"
                    autoFocus={true}
                    placeholderTextColor="#666" />
                <Icon onPress={() => alert("Find users...")} type="evilicon" style={styles.receiverIcon} name="search" size={32} color="#666" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
        backgroundColor: '#fff',
        flexDirection: 'row',
        height: 50,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        fontSize: 15,
        color: '#666'
    },
});

AppRegistry.registerComponent('ReceiverInput', () => ReceiverInput);
