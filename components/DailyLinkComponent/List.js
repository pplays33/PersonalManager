'use client'
import './components.css'
import Link from './Link';
import { useState } from 'react';

export default function List() {
    const [links, setLink] = useState([]);
    const [currLink, setCurrLink] = useState( "" );

    return (
        <div className='main-list-container'>
            
            <label className='label-link'>
                <input
                    type='text'
                    className='input-link'
                    value={currLink}
                    onChange={(event) => {
                        setCurrLink(event.target.value);  
                    }}
                />
            </label>
            <button
                className='SaveLink-button'
                onClick={() => {
                    let newLinks = [currLink, ...links];
                    setLink(newLinks);
                }}
            >
                add link
            </button>


            <ul className='ul-list-container'>
                {
                    links.map((linkValue, index) => ( <Link id={index} link={linkValue} /> ))
                }
            </ul>
        </div>
    );
}