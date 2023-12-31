function AddToDo(){

    return (
      <>
      <div className="container ">
      <div className="row vk-row">
      <div className="col-6"><input type="text" placeholder="Enter To Do here !"></input></div>
      <div className="col-4"><input type="date"></input></div>
      <div className="col-2"><button type="button" className="btn btn-success vk-button">Add</button></div> 
      </div> 
      </div>       
    </>
    );
  
}
export default AddToDo;