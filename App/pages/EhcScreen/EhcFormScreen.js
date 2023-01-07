import * as React from 'react';
import { useSelector } from 'react-redux'
import { 
    StyleSheet, 
    View, 
    Text,
    ImageBackground,
    Image,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import {
    PrimaryButton,
    LoadingUi
  } from '../../components'

export default EhcFormScreen =({navigation})=> {
    const user = useSelector(state => state.user)
    const personalData = [
        {label:"NIK", value:user.nik},
        {label:"Nama", value: user.fullName},
        {label:"Tgl Lahir", value: user.tglLahir},
        {label:"Email", value: user.email},
        {label:"Phone Number", value: user.phoneNumber}
    ]

    const onSaveData=()=>{
        alert('save data')
    }

    return (
        <SafeAreaView style={style.container}>
            <Text style={style.textGroupHeader}>Personal Detail</Text>
            
            {personalData.map((prop, key) => {
                return(
                    <View>
                        <View style={ style.formHeader}>
                            <View style={{
                                flex:1,
                                justifyContent:'center',
                                }}>
                                <Text style={style.inputTextLabel}>
                                    {prop.label} : </Text>
                            </View>
                            <View style={style.inputStyle} >
                                <Text>{prop.value} </Text>
                            </View>
                        </View>
                    </View>
                )
            })}

            <Text style={[style.textGroupHeader,{marginTop:20}]}>Travel Detail</Text>
            <View style={ style.formHeader}>
                <View style={{
                    flex:1,
                    justifyContent:'center',
                    }}>
                    <Text style={style.inputTextLabel}>Transportasi : </Text>
                </View>
                <TouchableOpacity onPress={()=>alert('tes')} style={style.inputStyle} >
                    <Text>sdf</Text>
                </TouchableOpacity>
            </View>

            <View style={ style.formHeader}>
                <View style={{
                    flex:1,
                    justifyContent:'center',
                    }}>
                    <Text style={style.inputTextLabel}>Kota Tujuan : </Text>
                </View>
                <TouchableOpacity onPress={()=>alert('tes')} style={style.inputStyle} >
                    <Text>sdf</Text>
                </TouchableOpacity>
            </View>

            <View style={ style.formHeader}>
                <View style={{
                    flex:1,
                    justifyContent:'center',
                    }}>
                    <Text style={style.inputTextLabel}>Keberangkatan : </Text>
                </View>
                <TouchableOpacity onPress={()=>alert('tes')} style={style.inputStyle} >
                    <Text>sdf</Text>
                </TouchableOpacity>
            </View>

            <View style={ style.formHeader}>
                <View style={{
                    flex:1,
                    justifyContent:'center',
                    }}>
                    <Text style={style.inputTextLabel}></Text>
                </View>
                <View style={style.inputStyleAction} >
                    <PrimaryButton
                        title="Save Data"
                        style={{ marginLeft: 0,
                            marginRight: 0,}}
                        onPress={onSaveData}/>
                </View>
            </View>

            
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        padding:15,
        backgroundColor:'white',
        flex:1
    },
    textGroupHeader:{
        fontWeight:'bold',
        fontSize:15
    },
    formHeader:{
        flexDirection:'row',
        marginTop:8
    },
    inputTextLabel:{
        fontWeight:'bold',
        textAlign:'right'
    },
    inputStyle:{
        backgroundColor:'#BDE6FA',
        flex:3, 
        borderRadius: 5, 
        borderWidth:1,
        padding:8,
        fontSize:14,
        borderColor:'#DDDDDD'
    },
    inputStyleAction:{
        flex:3, 
        
    }
})