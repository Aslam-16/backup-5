import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './components/layout/header';
import CreateTodo from './components/createtodo';
import EditTodo from './components/edittodo';
import DeleteTodo from './components/deletetodo';
import ListTodo from './components/listtodo';
function App() {

  return (
    <div className="App">
      <Header/>
      <Router>
      <Route exact path="/createTodo"><CreateTodo/></Route>
      <Route exact path="/editTodo"><EditTodo/></Route>
      <Route exact path="/listTodo"><ListTodo/></Route>
      <Route exact path="/deleteTodo"><DeleteTodo/></Route>
      </Router>

    </div>
  );
}

export default App;
