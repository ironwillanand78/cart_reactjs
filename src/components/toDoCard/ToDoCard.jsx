
import styles from './Card.module.css'

const ToDoCard = (props) =>{
    return <div className={styles.container}>
        {
            props.status ? <img src="https://c8.alamy.com/comp/2ABNAN7/green-check-mark-icon-in-a-circle-tick-symbol-in-green-color-2ABNAN7.jpg" width={"50px"} height ={"50px"}/> :
            <img  src= "https://media.istockphoto.com/id/1039939018/vector/wrong-mark-line-icon-one-of-set-web-icons.jpg?s=612x612&w=0&k=20&c=p5zCbRQaUQHkFi6yBPWLYoeQMEQ4u8cnMyu0xqktQbE=" width={"50px"} height ={"50px"}/>
        }
        <span style={{
            textDecoration: props.status ? "line-through" : ""
        }}>{props.task}</span>
        <span>{props.status}</span>
        <button className={styles.checkbtn} onClick={()=>{
            props.checked(props.id);
        }}>check</button>
    </div>
}
export default ToDoCard;