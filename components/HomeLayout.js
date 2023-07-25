'use client'
import './components.css'
import Task from './Task';
import { useState } from 'react';

export const generateId = () => (
    Math.random().toString(16).slice(2) + new Date().getTime().toString(36)
);

export default function HomeLayout(){
    const [titel, setTitel] = useState();
    const [check, setCheak] = useState(false);

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

    return(
        <main className='container-main'>
            <h1 className='Titel'>this's your <br/>  private personal manager</h1>
            <div className='wrapper-main-items'>
                {
                    tasks.map((value, index) => (
                        < Task  
                            key={generateId()}
                            id={index}
                            titel = {value.check === true ? "True" : "false"}
                            checked={value.check}
                            onClick={ClickHendlerCheckBox}
                        />
                    ))
                }
            </div>
            <button className='button-task'>add task</button>
        </main>
    );
}