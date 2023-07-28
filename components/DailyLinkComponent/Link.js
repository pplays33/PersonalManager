'use client'
import './components.css'
import { useState } from 'react';


export default function Link({link,}){
    return(
        <>
            <li> - {link} </li>
            <div className='vertical-line'></div>
         </>
    );
}
