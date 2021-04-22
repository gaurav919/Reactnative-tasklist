import React,{useContext,useState} from 'react';
import {View,Text,StyleSheet,TextInput,Button,Component} from 'react-native';
import {Context} from '../context/todoContext';
import ShowScreens from './ShowScreens';
import DateTimePicker from '@react-native-community/datetimepicker';



const CreateScreen =({navigation}) =>{
const[title,setTitle]= useState('');
const [content, setContent] = useState('');
const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
 const {addtodoPost} = useContext(Context);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  
 
return (
<View>
<Text style={styles.label}>Enter To-Do Item:</Text>
<TextInput  style= {styles.input} value={title} onChangeText={(text) =>  setTitle(text)}/>

 <View>
      <View>
        <Button onPress={showDatepicker} title="Pick a Date" />
      </View>
     
      {show && (
      
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      
    </View>
    <TextInput  style= {styles.date} 
                value={date.toString()} 
                onChangeText={text=>setContent(text)}/>
   <Text style={styles.label}>Enter the note:</Text> 
<TextInput  style= {styles.input}  
value={content} 
onChangeText={text=>setContent(text)}/>
<Button title="Save"
onPress={()=>{addtodoPost(title,content,date,()=>{
navigation.navigate('Index');
});
}}

/>
</View>
);
};
const styles= StyleSheet.create({
input:{
	fontSize:18,
	borderColor: 'black',
	borderWidth:1,
	marginBottom:15 
},
label:{
	fontSize:20,
	marginBottom: 10
},
date:{
fontSize:18,
	borderColor: 'black',
	borderWidth:1,
	marginBottom:15 ,
    color:'#f44336'
}

});
export default CreateScreen;