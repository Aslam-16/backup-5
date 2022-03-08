// import React from 'react';
// import { Link } from 'react-router-dom';
// class ListTodo extends React.Component{
//     constructor(props){
//         super(props)
//        this.state={
//            data:[]
//        }
//     }
//     componentWillUpdate(){
//         console.log("hiii");
//         this.setState({data:this.props.data})
//     }
 
//     delTodo(id){
        
//         console.log('del',id);
//         const newdata=this.state.data.filter((vid)=>vid.id!=id);
//         this.setState({data:newdata})
        
//     }
//     render(){
//         console.log("hii",this.props.data);
//         const data=this.state.data;
//         const todolist=data.map((todo)=>{
//             var id=todo.id;
//             return (<div key={todo.id}>
//             <p >{todo.todolist}</p>
//             <Link to="/editTodo"><button>
//                 Edit
//                 </button></Link>
//             <button onClick={()=>this.delTodo(id)}>
//                 Delete
//             </button>
//             </div>)

//             })
//         return(
//             <>
//             <h1>ListTodo</h1>
//             {todolist}
//             </>
//         )
//     }
// }
// export default ListTodo;