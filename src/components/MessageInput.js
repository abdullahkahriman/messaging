import * as React from 'react';
import { Component } from 'react';
import { View, StyleSheet, TextInput, AppRegistry } from 'react-native';
import { Icon } from 'react-native-elements'

export default class MessageInput extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.wrapper} >
                <TextInput placeholder="Text Message"
                    style={styles.textInput}
                    placeholderTextColor="#666" />
                <Icon onPress={() => alert("Send message")} size={48} type="evilicon" name="chevron-up" style={styles.icon} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: 60,
        position: 'absolute',
        bottom: 0,
        left: 0,
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '100%',
        alignItems: 'center',
        marginBottom: 5
    },
    textInput: {
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        flex: 1,
        marginHorizontal: 10,
        paddingHorizontal: 15,
        color: '#666',
    },
    icon: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    }
});

AppRegistry.registerComponent('MessageInput', () => MessageInput);
