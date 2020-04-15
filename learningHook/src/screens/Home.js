import React from  'react'
import {View, Text, StyleSheet, TouchableOpacity}from 'react-native'

const Home =({history})=>{
    return <View>
        <Text style={{fontSize:14,fontWeight: 'bold'}}>HOME SCREEN HELLO LEANING</Text>
        <TouchableOpacity
        style={{marginHorizontal:20,alignItems:'center', marginTop:20}}
        onPress={()=>{history.push('/about')}}
        >
            <Text style={{color:'blue', fontSize:20}}>Go to about</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({

})

export default Home;
