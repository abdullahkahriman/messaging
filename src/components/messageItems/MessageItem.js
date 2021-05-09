import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, AppRegistry } from 'react-native';
import Moment from 'moment';
import { Component } from 'react';

export default class MessageItem extends Component {
    constructor(props) {
        Moment.locale('en');
        super(props);
        this.state = {
            navigation: props.navigation,
            item: props.item,
        }
    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.state.navigation.navigate('MessageDetailView', { name: this.state.item.name })} style={styles.wrapper}>
                <View style={styles.imageWrapper}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar.png',
                        }}
                    />
                </View>
                <View style={styles.textWrapper}>
                    <View style={styles.textTopWrapper}>
                        <Text style={{ fontSize: 18 }}>{
                            this.state.item.name.length > 20 ? this.state.item.name.substr(0, 17) + '...' : this.state.item.name
                        }</Text>
                        <Text style={{ color: 'gray' }}>{Moment(this.state.item.date).format('hh:mm')}</Text>
                    </View>
                    <View>
                        <Text>{this.state.item.text}</Text>
                    </View>
                </View >
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
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
        width: 40,
        height: 40,
        borderRadius: 40
    },
    textWrapper: {
        flex: 1, paddingHorizontal: 10
    },
    textTopWrapper: {
        flexDirection: 'row', justifyContent: 'space-between'
    }
});

AppRegistry.registerComponent('MessageItem', () => MessageItem);
