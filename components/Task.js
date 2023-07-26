'use client'
import { useState } from 'react';

import './components.css'

export default function Task({id, titel, checked, onClick, HendelerEditClick}) {
    const [isEdit, setEdit] = useState(false);
    const [valueEdit, setEditValue] = useState(titel);

    const IsEdit = () =>{
        if(isEdit){
            return (
                <>
                    <input 
                        type='text'
                        value={valueEdit}
                        className= 'inputNewTitel'
                        onChange={(event) => {
                            setEditValue(event.target.value)
                        }
                    }
                    />
                    <button
                    onClick={() => { HendelerEditClick(id, valueEdit); }}
                    aria-label="save"
                    className='inputTaskEdit'
                    placeholder='save'
                    > save </button>
                </>
            );
        }
        return (<h3 className= 'inputTaskTitle'> {valueEdit} </h3>);
    }


    return (
        <div className='item-main'>
            <label className= 'label'>
                <input
                    type="checkbox"
                    className= 'inputTaskCheckbox'
                    checked = {checked}
                    onClick={() => onClick(id)}
                /> 
                { IsEdit() }    
            </label>

                
            <div>
                <button
                    onClick={() => { setEdit(!isEdit); }}
                    aria-label="Edit"
                    className='inputTaskEdit'
                    placeholder='edit'
                > edit </button>
                
                <button
                    onClick={() => {
                        // if (confirm("Are you sure?")) {}
                    }}
                    aria-label="Remove"
                    className='inputTaskRemove'
                    placeholder='remove'
                > remove </button>
            </div>
        </div>
    );
}