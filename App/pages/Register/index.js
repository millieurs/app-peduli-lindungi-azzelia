import * as React from 'react';
import { 
  ICBack
 } from '../../assets/images'
import {
  PrimaryButton,
} from '../../components'
import { 
  View,
  Image, 
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView
 } from 'react-native';
 import DateTimePicker from '@react-native-community/datetimepicker';



export default RegisterScreen =({navigation})=> {
  const [email, onSetEmail] = React.useState(null);
  const [password, onSetPassword] = React.useState(null);
  const [date, setDate] = React.useState(null);
  const [tmpDate, setTmpDate] = React.useState(new Date());
  const [mode, setMode] = React.useState('date');
  const [show, setShow] = React.useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    const tgl = currentDate.getDate()
    const bulan = currentDate.getMonth()+1
    const tahun = currentDate.getFullYear()
    
    setShow(false);
    setTmpDate(currentDate);
    setDate(tgl+"/"+bulan+"/"+tahun);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(false);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    setShow(true);
  };


  const onClickBack=()=>{
    navigation.replace('LoginScreen')
  }

    return (
      <SafeAreaView style={style.mainContainer}>
      <View style={style.container}>
          <View style={{flex:1}}>
            {/* <BackButton 
            onPress={onClickBack}
            source={ICBack}
            /> */}
          </View>
          <View style={{flex:5,marginTop:5}}>
              <Text style={{fontWeight:'bold'}}>
                  Registration
              </Text>
          </View>
      </View>


      <View style={{marginTop:30,flexDirection:'column'}}>
        <View>

          <View>
              <Text style={style.TextTitle}>
                  NIK
              </Text>
            <TextInput
              placeholder='Type NIK'
              style={style.inputSytle}
              keyboardType='numeric'
              // onChangeText={(text)=> this.onChanged(text)}
              // value={this.state.myNumber}
              maxLength={20}  //setting limit of input
              />
          </View>

          <View>
              <Text style={style.TextTitle}>
                Full Name
              </Text>
            
            <TextInput
              placeholder='Type Full Name'
              style={style.inputSytle}
              />
          </View>

          <View>
              <Text style={style.TextTitle}>
                Birth Date
              </Text>
            <View style={{flexDirection:'row'}}>
                <TextInput
                    placeholder='MM/DD/YYYY'
                    style={style.inputDate}
                    editable = {false}
                    format='MM-DD-YYYY'
                    value={date}
                    />
                <PrimaryButton
                    title="SELECT DATE"
                    style={{marginTop:10,height:40}}
                    onPress={showDatepicker}
                    />
                {show && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={tmpDate}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                />
                )}
              </View>
           
          </View>

          <View>
              <Text style={style.TextTitle}>
                Email
              </Text>
            
            <TextInput
              placeholder='Type Email'
              onChangeText={onSetEmail}
              style={style.inputSytle}
              value={email}

              />
          </View>

          <View>
              <Text style={style.TextTitle}>
                Phone Number
              </Text>
            
            <TextInput
              placeholder='Type Phone Number'
              style={style.inputSytle}
              keyboardType='numeric'
              // onChangeText={(text)=> this.onChanged(text)}
              // value={this.state.myNumber}
              maxLength={13}  //setting limit of input
              />
          </View>

          <View>
              <Text style={style.TextTitle}>
                Password
              </Text>
            
            <TextInput
              placeholder='Type Password'
              onChangeText={onSetPassword}
              style={style.inputSytle}
              secureTextEntry
              value={password}/>
          </View>

          <PrimaryButton
           title="Submit Data"
           onPress={onClickBack}/>

        </View>
      </View>
    
      </SafeAreaView>
        
    );
}

const style = StyleSheet.create({
  container:{
    marginTop:50,
    marginLeft:15,
    flexDirection:'row'
  },  
  logoTopStyle:{
    width:150,
    height:150,
    resizeMode:'contain'

  },
  inputSytle:{
    height: 40,
    width:'90%',
    margin: 12,
    borderWidth: 1,
    borderColor:'#006175',
    borderRadius:9,
    padding: 10,
},
  inputDate:{
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderColor:'#006175',
      borderRadius:9,
      padding: 10,
      backgroundColor:'#E0E0E0',
      flex:2
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
    width:75, 
    height:75, 
    resizeMode:'contain',
    marginLeft:7,
    marginTop:25
  },
  mainContainer:{
    flex:1, 
    backgroundColor:'white',
    padding:15
  },
  TextTitle:{
    fontWeight:'500',
    marginLeft:17 
  }
})