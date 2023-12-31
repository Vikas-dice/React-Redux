
import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import "./App.css";
import ToDoItems from "./components/ToDoItems";

function App() {
  const toDoItems = [{ name: "buy milk", DueDate: "04/10/2023" },{
    name:"go to college",
    DueDate:"12/10/2022"
  },{ name: "Youtube", DueDate: "08/09/2023" }];
  return (
    <>
    <center className="todo-container">
      <AppName></AppName>
      <AddToDo></AddToDo>
      <ToDoItems toDoItems={toDoItems}></ToDoItems> 
    </center>
    </>
  );
}

export default App;

