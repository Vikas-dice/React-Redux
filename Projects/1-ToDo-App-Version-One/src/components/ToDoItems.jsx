import ToDoItem from "./ToDoItem";
const ToDoItems=({toDoItems})=>{
    return <>
     <div className="items-container">
        {
            toDoItems.map((item)=> (
                <ToDoItem todoDate={item.dueDate} todoName={item.name}></ToDoItem>)
            )
        }
      </div> 
    </>
};
export default ToDoItems;

