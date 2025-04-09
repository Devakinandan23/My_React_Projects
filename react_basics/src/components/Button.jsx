
const MyButton = (props)=>{
    const {color,value,name} = props;
    return(<>
    
    <button onClick={()=>{alert(`hello ${name}`)}} style={ {backgroundColor:`${color}`, borderRadius:'2px solid black'}}>{value}</button>
    </>)
}

export default MyButton;

