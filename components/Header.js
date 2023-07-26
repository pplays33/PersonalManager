import './components.css'
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return(
        <header className='header'>
            <h3>
                Daily_M
            </h3>

            <nav className='container_nav'>
                <ul className='ul-container'>
                    <li className='item-nav'>
                        <Link href='/about' className ='Link'>budget</Link>
                    </li>
                    <li className='item-nav'>
                         daily Link
                    </li>
                </ul>
            </nav> 

            <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={54}
                height={54}
                priority
            />      
        </header>
    );
}