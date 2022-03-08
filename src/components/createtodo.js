import React from 'react';
import ListTodo from './listtodo';
import { Link } from 'react-router-dom';

class CreateTodo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:'',
            list:[],
            edit:false,
            editId:'',
            edititem:''
        }
    }
    onChange(e){
        const name=e.target.name;
        const value=e.target.value;
        this.setState({[name]:value})
        console.log(name,value);
    }
    onSubmit(){
        const value={
            id:this.state.list.length,
            todolist:this.state.data
        }
       const todolist =[...this.state.list,value]
        
        this.setState({list:todolist})
        console.log(this.state.list)
        this.setState({data:''})
        
        
    }
    update(){
       this.setState({edit:false})
    }
    onEditChange(e,i){
        const copy=[...this.state.list]
        copy[i].todolist=e.target.value;
        console.log('ci\opy',copy);
        this.setState({list:copy})
        if(e.target.name=="edititem"){
            this.setState({edititem:e.target.value})
        }

    }
    editTodo(id,todo){
        
        this.setState({edit:true})
        this.setState({editId:id,edititem:todo})
       
    }
     delTodo(id){
        
        console.log('del',id);
        const newdata=this.state.list.filter((vid)=>vid.id!=id);
        this.setState({list:newdata})
        
    }
        render(){
           
            const data=this.state.list;
             const todolist=data.map((todo)=>{
            var id=todo.id;
            return (<div key={todo.id}>
            <p >{todo.todolist}</p>
            <button onClick={()=>this.editTodo(id,todo.todolist)}>
                Edit
                </button>
            <button onClick={()=>this.delTodo(id)}>
                Delete
            </button>
            </div>)
             })
             if(this.state.edit==false){
        return(
            <>
            <h1>CreateTodo</h1>
            <label for="data">write your Appointments</label><br/>

            <input type="text" id="data" name="data" value={this.state.data} onChange={(e)=>this.onChange(e)}/><br/>
            <button  onClick={()=>this.onSubmit()}>cReAtE t0D0</button>
            {this.state.list.length>0?
            <div><h1>Listtodo</h1>
            {todolist}</div>:""}
            
            </>
        )
            }
            else if(this.state.edit==true){

                return(
                      <>
            <h1>EditTodo</h1>
            <label for="data">Edit your Appointments</label><br/>
                    {this.state.list.map((data,i)=>{
                    if(data.id==this.state.editId){
                  return(  <div>
                            <input type="text" id="ndata" name="edititem" value={this.state.edititem} onChange={(e)=>{this.onEditChange(e,i)}}/><br/>
                            <button  onClick={()=>this.update()}>update</button></div>)}})}
                            {this.state.list.length>0?
                            <div><h1>Listtodo</h1>
                            {todolist}</div>:""}
            
            </>
                )
            }
    }
}
export default CreateTodo