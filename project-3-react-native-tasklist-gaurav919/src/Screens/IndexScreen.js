import React,{useContext,useState} from 'react';
import {View,Text,StyleSheet,FlatList,Button,TouchableOpacity} from'react-native';
import {Context} from '../context/todoContext';
import {Feather} from '@expo/vector-icons';
import {CheckBox} from 'react-native';

const IndexScreen =({navigation})=>{
const{state,addtodoPost,deletetodoPost,edittodoPost}  = useContext(Context);
const [isSelected, setSelection] = useState(false);

const sortTasks = () => {
    let taskArray = [...state];
    taskArray.sort((a, b) => new Date(a.date) - new Date(b.date));
    return taskArray.sort((a, b) => a.done - b.done);
  };

return(
		<View>
		<FlatList
		data={sortTasks()} 
		keyExtractor={(todoPosts)=>todoPosts.title}
		renderItem={({item})=>{
		return (
		<TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id })}>
		<View style={styles.row}>
		 <CheckBox
			value={item.id.isSelected}
			onValueChange={item.id.setSelection}
		  />
		<Text style={styles.title}>{item.title}</Text>
		<TouchableOpacity onPress={()=>deletetodoPost(item.id) }>
		<Feather style ={styles.icon} name="trash"/>
		</TouchableOpacity>
		</View>
		<View>
		<Text style={styles.row2}>{item.content}</Text>
		<Text style={styles.row1}>{item.date.toString()}</Text>
		</View>
		</TouchableOpacity>
		);
	}}
	/>
	</View>
);

};

IndexScreen.navigationOptions=({navigation})=>{
return{
	headerRight:(
	<TouchableOpacity onPress={()=>navigation.navigate('Create') }>
	<Feather name="plus" size={30}/>
	</TouchableOpacity>
	)
};
};
const styles=StyleSheet.create({
row:{
	flexDirection:'row',
	justifyContent:'space-between',
	paddingVertical:1,
	paddingHorizontal:1,
	borderTopWidth:1,
	borderColor:'gray'
	
},
title:{
	fontSize: 18,
	flex:2
},
icon:{
	fontSize:24
},
row1:{
	
	paddingHorizontal:35,
	fontSize:12,
	color: '#f44336'
},
row2:{
	paddingHorizontal:35,
	fontSize:12,
	color: '#120AFE'
}

});
export default IndexScreen;