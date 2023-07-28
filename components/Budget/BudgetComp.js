'use client'
import './components.css'
import SetComponents from './SetComponent';
import { useState, useEffect} from 'react';

export default function BudgetComp(){
    const [isEdit, setEdit] = useState(false);
    const [currCoast, setCurrCoast] = useState(0);
    const [sumValueLimit, setSumValueLimit] = useState(0);
    const [sumCoast, setCoast] = useState(0);
    
    useEffect(() => {
        if(sumValueLimit - sumCoast < 0){
            alert(`you're over the limit on ${Math.abs(sumValueLimit - sumCoast)}`)
        }

        setSumValueLimit(sumValueLimit - sumCoast);
    
    }, [sumCoast]);

    const checkIsEdit = () => {
        if(isEdit){
            return(
                <>
                    < SetComponents 
                        valueDefault={sumValueLimit}
                        onChange={(event) => setSumValueLimit(event.target.value)}
                        onClick={() => setEdit(!isEdit)}
                    />
                </>
            );
        }
        return(
            <>
                <p className='Sum' onClick={() => setEdit(!isEdit)}>Total daily:<br/> {sumValueLimit} </p>
            </>
        );
    }


    return(
        <div className='container-budget'>
            <div className='budget'> 
                { checkIsEdit() }
            </div>

            <div className='About'>
                <p>
                    you can set a limit for your daily budget and make expenses during the day and when the limit is exceeded you will receive a warning message
                </p>
            </div>

            <div className='set-expenses'>
                < SetComponents
                    valueDefault={currCoast}
                    onChange={(event) => setCurrCoast(event.target.value)}
                    onClick={() => {            
                        setCoast(currCoast);
                        setCurrCoast(0);
                    }}
                />
            </div>

        </div>
    );
}