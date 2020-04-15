import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { NativeRouter, Route, Link , Switch} from "react-router-native";
import Home from './screens/Home'
import About from './screens/About'

const App =()=>{
    return(
    <NativeRouter>
        <View>

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            {/*<Route path="/topics" component={Topics} />*/}

        </View>
    </NativeRouter>
    )
}

const styles = StyleSheet.create({

});

export default App;
