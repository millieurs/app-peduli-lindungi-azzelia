import * as React from 'react';
import { 
  LogoTop,
  LogoBumn,
  LogoKemkes,
  LogoKominfo,
  LogoKpc
 } from '../../assets/images'
import {
  PrimaryButton
} from '../../components'
import { 
  View,
  Image, 
  Text,
  TextInput,
  StyleSheet
} from 'react-native';
import { useDispatch } from 'react-redux'
import { setEmail, setFullName } from '../../store/reducers/userReducer'

export default LoginScreen =({navigation})=> {
  const [email, onSetEmail] = React.useState(null);
  const [password, onSetPassword] = React.useState(null);
  const dispatch = useDispatch()

  const onSubmitLogin=()=>{
    if(email=='admin@mail.com' && password=='admin'){
      navigation.replace('HomeScreen')
      dispatch(setEmail(email))
      dispatch(setFullName('Administrator'))
    }else{
      console.log('username & password tidak sesuai')
    }
  }


    return (
      <View style={style.mainContainer}>
        <View style={style.container}>
          <View style={style.logoContainer}>
            <Image source={LogoTop}  style={style.logoTopStyle} />
          </View>
          <TextInput
            placeholder='Masukan email'
            onChangeText={onSetEmail}
            style={style.inputSytle}
            value={email}
          />

          <TextInput
            placeholder='Masukan password'
            onChangeText={onSetPassword}
            style={style.inputSytle}
            secureTextEntry
            value={password}
          />

          <PrimaryButton
            title="Login"
            onPress={onSubmitLogin}/>

          <PrimaryButton
            title="Register"
            style={{margin:10}}
            onPress={()=>navigation.navigate('RegisterScreen')}/>
        </View>

        <Text style={style.footherText}>Bekerjasama dengan</Text>
        <View style={style.footherLogo}>
          <Image source={LogoKpc} style={style.logoImage}/>
          <Image source={LogoKominfo} style={{width:100, height:60,resizeMode:'contain'}}/>
          <Image source={LogoKemkes} style={style.logoImage}/>
          <Image source={LogoBumn} style={style.logoImage}/>
        </View>
      </View>
    );
}

const style = StyleSheet.create({
  container:{
    flex: 1, 
    padding:25,
    justifyContent: 'center',
    backgroundColor:'white'
  },  
  logoTopStyle:{
    width:150,
    height:150,
    
  },
  logoContainer:{
    alignItems:'center'
  },  
  inputSytle:{
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderColor:'#006175',
      borderRadius:5,
      padding: 10,
  },
  footherText:{
    fontWeight:'bold',
    marginBottom:-30
  },
  footherLogo :{
    alignItems:'center',
    flexDirection:'row'
  },
  logoImage:{
    width:100, 
    height:130, 
    resizeMode:'contain',
    marginLeft:10
  },
  mainContainer:{
    flex:1, 
    backgroundColor:'white',
    padding:15
  }
})