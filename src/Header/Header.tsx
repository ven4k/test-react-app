import { FC } from 'react';
import styles from './Header.module.scss';
import avatar from '../assets/img/Avatar.png';
import envelope from '../assets/svg/Envelope.svg';
import phone from '../assets/svg/Phone.svg';
import {Button} from '../Button/Buttton';

export const Header: FC = () => {
    const fakeClick = () => {
        //заглушка
    }
    return (
        <header className={styles.header}>
            <div className={styles.backgroundImage}></div>
            <div className={styles.Menu}>
                <div><img className={styles.avatar} src={avatar} alt='avatar' /></div>
                <h2>Ricardo Cooper</h2>
                <div className={styles.btnsBlock}>
                    <Button onClick={fakeClick}><img className={styles.envelope} src={envelope} alt='envelope icon'/>Message</Button>
                    <Button onClick={fakeClick}><img className={styles.phone} src={phone} alt='phone icon' />Call</Button>                        
                </div>
            </div>
        </header>
    )
}