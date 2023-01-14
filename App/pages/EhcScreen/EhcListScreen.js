import * as React from 'react';
import { 
    StyleSheet, 
    View, 
    Text,
    ImageBackground,
    Image,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';

const Item = ({title}) => (
    <View style={style.item}>
      <Text style={style.title}>{title}</Text>
    </View>
);

export default EhcListScreen =({navigation})=> {

    return (
        <SafeAreaView style={style.container}>
            {/* <FlatList
                data={DATA}
                renderItem={({item}) => <Item title={item.title} />}
                keyExtractor={item => item.id}/> */}
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{

    }
})