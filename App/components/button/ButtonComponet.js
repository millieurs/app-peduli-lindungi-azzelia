import * as React from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';


export const PrimaryButton=(props)=>{
    return(
        <TouchableOpacity 
            onPress={props.onPress} 
            style={style.primaryBtnStyle}>
            <Text style={style.texBtn}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    primaryBtnStyle:{
        backgroundColor:'#006175',
        padding:10,
        border:1,
        borderRadius:10,
        marginLeft: 12,
        marginRight: 12,
    },
    texBtn:{
        color:'white',
        textAlign:'center'
    }
})