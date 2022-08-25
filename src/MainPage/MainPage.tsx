import { FC, useEffect, useState, MouseEvent } from 'react';
import styles from './MainPage.module.scss';
import {Modal} from '../Modal/Modal';


export const MainPage: FC = () => {
    const [items, setItems] = useState([]);
    const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
    const [currentId, setCurrentId] = useState<string>('');

    
    const handleclick = (e: MouseEvent<HTMLElement>) => {
        let target = e.target as HTMLElement;
        setCurrentId(target.id);
        setShowForgotPasswordModal(true)
      };
    const handleCloseModal = () => setShowForgotPasswordModal(false);
    useEffect(() => {
        fetch('https://boiling-refuge-66454.herokuapp.com/images')
            .then((response) => response.json())
            .then((result) => setItems(result))
    }, [])
    
    return (
        <main className={styles.main}>
                {items.map((item: any) => (
                    <div className={styles.items} key={item.id}>
                        <div ><img src={item.url} alt={`Author's work`} id={item.id} onClick={handleclick}/></div>
                        <div><span className={styles.itemId}>id: {item.id}</span></div>
                    </div>
                ))}
                <Modal onClose={handleCloseModal} isOpen={showForgotPasswordModal} currentId={currentId}/>
        </main>
    )
}