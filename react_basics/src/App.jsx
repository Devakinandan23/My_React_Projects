import {useState} from 'react';
import MyButton from './components/Button';

function App() {
    


  const arr = [];
  

  let userNumber = 12;
  
  const getTable = (n)=>{
    for(let i = 1;i<=10;i++){
      arr.push(i*n);
    }

    console.log('-----btn----',arr);
  }

  const displayTable = ()=>{

   

    
    console.log('-----table----',arr);
    return(  arr && arr.map((value,index)=>{
      <li>{value}</li>
    }))
  }

  return (
    <div>
      <MyButton color={"green"} value={"share"} name='kaushal'/>
      <MyButton color={"red"} value={"delete"} name='kl rahul'/>
    <MyButton color={"orange"} value={"update"} name='bharat'/>
      <MyButton color={"yellow"} value={"subcribe"} name='india'/>

      <input type='number' value ={userNumber}  onChange={(e)=>(userNumber=e.target.value)}   />
      <button   onClick={()=>getTable(userNumber)}>get</button>

     <ul> {displayTable()}</ul>
    </div>
  );
}



export default App


