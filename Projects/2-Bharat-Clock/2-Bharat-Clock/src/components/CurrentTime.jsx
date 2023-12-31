
let CurrentTime=()=>{
    let time=new Date();
   
    return <p className="lead">this is the current ime :{time.toLocaleDateString()}</p>

};
export default CurrentTime;