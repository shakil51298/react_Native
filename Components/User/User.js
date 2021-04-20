import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function User({user , index}) {
    
    return (
        <View style={styles.borderFor}>
            <Text>{index + 1} {user.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    borderFor : {
        borderColor:'purple',
        borderWidth:2,
        borderRadius:50,
        padding:5
    },
    btn: {
        width:50,
        backgroundColor:'red'
    }
})
