import * as React from 'react';
import { 
    View,
    Text,
    Image,
    SafeAreaView,
    StyleSheet
   } from 'react-native';
import{
    ICNotification,
    ICAccount
} from '../../assets/images'

export default HomeScreen =()=> {
    return (
        <SafeAreaView  style={style.mainContainer}>
            <View style={style.header}>
                <View style={{flex:1}}>
                    <Image source={ICAccount}/>
                </View>
                <View style={{flex:10, flexDirection:'row'}}>
                    <Text  style={{fontWeight:'bold'}}>
                        Hi
                    </Text>
                    <Text style={style.haderText}>
                        Sata Lesmana
                    </Text>
                </View>
                <View style={{flex:1}}>
                    <Image source={ICNotification}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    mainContainer:{
        flex:1, 
        backgroundColor:'white',
        padding:15
    },
    header:{
        marginTop:20,
        flexDirection:'row'
    },
    haderText:{
        fontWeight:'bold',
        marginLeft:5,
        textDecorationLine:'underline'
    }
})