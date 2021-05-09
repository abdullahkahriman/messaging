import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, AppRegistry } from 'react-native';
import Moment from 'moment';

export default class MessageDetailItem extends Component {
    constructor(props) {
        Moment.locale('en');
        super(props);

        console.log("ok");
        console.log(props)

        this.state = {
            navigation: props.navigation,
            item: props.item,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textDate}>{Moment(this.state.item.date).format('hh:mm')}</Text>
                <TouchableOpacity>
                    <View style={styles.itemWrapper}>
                        <Text style={styles.itemText}>{this.state.item.text}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

// const MessageDetailItem = ({ navigation, item }) => {
//     Moment.locale('en');

//     return (
//         <View style={styles.container}>
//             <Text style={styles.textDate}>{Moment(item.date).format('hh:mm')}</Text>
//             <TouchableOpacity>
//                 <View style={styles.itemWrapper}>
//                     <Text style={styles.itemText}>{item.text}</Text>
//                 </View>
//             </TouchableOpacity>
//         </View>
//     )
// }

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    textDate: {
        color: 'gray',
        fontSize: 12
    },
    itemWrapper: {
        backgroundColor: '#f1f1f1',
        width: '85%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    itemText: {
        fontSize: 14,
        lineHeight: 18
    }
});

// export default MessageDetailItem;

AppRegistry.registerComponent('MessageDetailItem', () => MessageDetailItem);
