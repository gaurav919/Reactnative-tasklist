
import createDataContext from './createDataContext';

const todoReducer=(state,action)=>{
switch(action.type){
case'edit_todoPost':
return state.map((todoPosts)=>{
if(todoPosts.id===action.payload.id){
	return action.payload;
}else{
	return todoPosts;
}
});
case'delete_todo':
return state.filter((todoPosts)=> todoPosts.id !== action.payload);

case 'ADD_TODO':

return [...state, 
{
id: Math.floor(Math.random()*99999),
title:action.payload.title,
content:action.payload.content,
date:action.payload.date
}
];

default:
return state;

}
};

const addtodoPost=(dispatch)=>{
return( title,content,date,callback)=>{
dispatch({type:'ADD_TODO', payload:{title,content,date}});
callback();
};
};
const deletetodoPost = (dispatch) =>{
	return( id)=>{
		dispatch({type:'delete_todo',payload:id})
	};
};
const edittodoPost = dispatch => {
return(id, title,content,date,callback)=>{
dispatch({type:'edit_todoPost', payload:{id: id, title: title,content:content,date }})
callback();
};
};


export const {Context, Provider}=createDataContext(todoReducer,{addtodoPost, deletetodoPost,edittodoPost},[]);