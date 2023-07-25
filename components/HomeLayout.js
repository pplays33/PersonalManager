'use client'
import './components.css'
import Task from './Task';
import { useState } from 'react';

export const generateId = () => (
    Math.random().toString(16).slice(2) + new Date().getTime().toString(36)
);

export default function HomeLayout(){
    const [titel, setTitel] = useState();
    const [inputValue, setInputValue] = useState("");

    const [tasks, setAddTask] = useState(
        [
            {
                titel: titel ?? "titel default",
                check: false,
            },
            {
                titel: titel ?? "titel default",
                check: false,
            },
            {
                titel: titel ?? "titel default",
                check: false,
            },
            {
                titel: titel ?? "titel default",
                check: false,
            },
        ]
    );


    const ClickHendlerCheckBox = (id) => {
        const newTasks = [...tasks];
        newTasks[id].check = (!tasks[id].check);
        setAddTask(newTasks);
        //console.log(tasks[id]);
    }
    const AddTask = () => {
        if(!inputValue){
            return;
        }
        console.log(inputValue)
        const newTasks = [...tasks, {titel: inputValue, check: false}];
        setAddTask(newTasks);
    }

    return(
        <main className='container-main'>
            <h1 className='Titel'>this's your <br/>  private personal manager</h1>
            
            <div className='container-new-task'>
                <label className= 'label-text'>
                    <textarea
                        type="textarea"
                        className= 'inputTaskText'
                        value={inputValue}
                        placeholder='create this note...'
                        onChange={(event) => {
                                setInputValue(event.target.value)
                            }
                        }
                    ></textarea>
                </label>
                <button className='button-task'
                    onClick={() => AddTask()}
                >add task</button>
            </div>            
            
            
            <div className='wrapper-main-items'>
                {
                    tasks.map((value, index) => (
                        < Task  
                            key={generateId()}
                            id={index}
                            titel = {value.titel}
                            checked={value.check}
                            onClick={ClickHendlerCheckBox}
                        />
                    ))
                }
            </div>

        </main>
    );
}