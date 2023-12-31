
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Heading from "./components/Heading";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";

function App() {
  let foodItems=["roti","sabji","dal","salad","fruits","ghee","milk"];

  return (
    <>
    <Heading></Heading>
    <ErrorMsg items={foodItems}></ErrorMsg >
    <FoodItems items={foodItems}></FoodItems>




</>

  );

  //  let foodItems=[];
   
  // if(foodItems.length===0){
  //   return <h2>i am still hungry</h2>
  // }

  // let emptyMsg=foodItems.length===0 ? <h2>i am still hungry</h2>:null;
  

 

  // return
  // (
  // <>
  

  // /* /* foodItems.length===0 ? <h2>i am still hungry</h2>:null*/ */
  // // emptyMsg
  // <Heading></Heading>
  // /* {
  // foodItems.length===0 && <h2>i am still hungry</h2>
  // } */
  // <FoodItems></FoodItems>
  
  
  
   

  
  
  // </>
  // )
 
}

export default App
