'use client'
import './components.css'
import { useState } from 'react';

export default function BudgetComp(){
    const [isEdit, setEdit] = useState(false);
    const [sumValue, setSumValue] = useState(0);

    const checkIsEdit = () => {
        if(isEdit){
            return(
                <>
                    <label className='label'>
                        <input
                            type='num'
                            className='input-sum'
                            value={sumValue}
                            onChange={(event) =>  setSumValue(event.target.value)}
                        />
                    </label>
                    <button 
                        className='sumSave-button'
                        onClick={() => setEdit(!isEdit) }
                    >
                        set Sum
                    </button>
                </>
            );
        }
        return(
            <>
                <p className='Sum' onClick={() => setEdit(!isEdit)}>Total daily:<br/> {sumValue} </p>
            </>
        );
    }

    return(
        <div className='container-budget'>
            <div className='budget'> 
                { checkIsEdit() }
                <p className='Sum'>Current sum:<br/> 0 </p>
            </div>
        </div>
    );
}