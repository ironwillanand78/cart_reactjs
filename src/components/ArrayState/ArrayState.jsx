import ToDoCard from '../toDoCard/ToDoCard';
import styles from './ArrayState.module.css'
import { useState } from 'react';

const ArrayState = () =>{
    const [todo , setTodo] = useState([
        {
        id: 1,
        task:"Get a Job in first 2 months in 2025.." ,
        status:false
        } ,
        {
          id:2 ,
          task:"Get married.." ,
          status:false
         } ,
        {
         id: 3,
         task:"Enjoy life alot.." ,
         status:false
        }]
    )

    const checked = (id) =>{
        const indexToUpdate = todo.findIndex((todo) => todo.id === id);
        const newObj = {
            ...todo[indexToUpdate],
            status:true
        }
        const copyTodo = [...todo];
        copyTodo.splice(indexToUpdate , 1 , newObj);
        setTodo(copyTodo);

    }
    return (
        <div className={styles.mainContainer}>
            {todo.map((todo)=>(
                <ToDoCard key = {todo.id} {...todo} checked = {checked}/>
            ))}
        </div>
    )
   
}
export default ArrayState;