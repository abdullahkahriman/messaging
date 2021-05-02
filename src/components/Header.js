import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'

const Header = ({ text, isBack = false, navigation }) => {
    return (
        <View style={styles.headerWrapper}>
            {
                isBack && <Icon
                    name='chevron-left'
                    onPress={() => navigation.goBack()}
                    size={32}
                    type='feather'
                    color='#000' />
            }
            <Text style={[
                styles.headerText,
                {
                    fontSize: !isBack ? 20 : 15
                }
            ]}>{text}</Text>
            {
                !isBack && <Icon
                    name='gear'
                    onPress={() => alert("Setting")}
                    size={32}
                    type='evilicon'
                    color='#000' />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        flex: 1,
        textAlign: 'center',
    }
})

export default Header;