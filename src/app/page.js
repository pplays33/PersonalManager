import Image from 'next/image';
import styles from './page.module.css'
import HomeLayout from '../../components/HomeLayout';


export default function Home() {
  return (
    <div className={styles.wrapper}>
        <HomeLayout />
    </div>
  );
}
