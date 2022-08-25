import { FC, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import closeIcon from '../assets/svg/CloseIcon.svg';
import styles from './Modal.module.scss';

interface ModalProps {
    onClose: () => void;
    isOpen?: boolean;
    currentId?: string;
}
const modalRootElement = document.querySelector('#modal');
export const Modal: FC<ModalProps> = ({ onClose, isOpen = false, currentId}) => {
    const element = useMemo(() => document.createElement('div'), []);
    const [singleItem, setSingleItem] = useState<any>({});
    const [comment, setComment] = useState<string>('');
    useEffect(() => {
        if (isOpen) {
            modalRootElement?.appendChild(element);

            return () => {
                modalRootElement?.removeChild(element);
            };
        }
    }, [isOpen, element]);
    useEffect(() => {
        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${currentId}`)
            .then(response => response.json())
            .then(result => setSingleItem(result))
    }, [currentId]);
    
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value)
    }
    const commentPost = {
        id: Math.floor(Math.random( ) * (1000+1)),
        date: Date.now(),
        text: comment
    }

    const handleSubmit = () => {
        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${currentId}/comments`, {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(commentPost)
        }).then(() => console.log('comment'))
    }

    if (isOpen) {
        return createPortal(
            <div className={styles.modalAll} onClick={onClose}>
                <div className={styles.modal} onClick={e => e.stopPropagation()}>
                    <div className={styles.modalIcon}>
                        <img src={closeIcon} alt='close icon' onClick={onClose} />
                    </div>
                    <div>
                    </div>
                    <div className={styles.modalContent}>
                        <div className={styles.imgBlock}><img src={singleItem.url} alt='choosed item' /></div>
                        {singleItem.comments?.map((el: any) => (
                            <p className={styles.commentItem} key={el.id}>{el.text}</p>
                        ))}
                        <div className={styles.labelBlock}>
                            <label>Comments</label>
                        </div>
                        <div><textarea onChange={handleChange}></textarea></div>
                        <p className={styles.info}>Write a few sentences about the photo.</p>
                        <div className={styles.btnBlock}><button onClick={handleSubmit}>Save</button></div>
                    </div>
                </div>
            </div>,
            element,
        );
    }
    return null;
};
