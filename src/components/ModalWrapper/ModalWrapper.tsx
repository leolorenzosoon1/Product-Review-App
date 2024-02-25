import React, { ReactNode, useState } from 'react'; 
import styles from './ModalWrapper.module.css'
interface ModalWrapperProps {
    children: ReactNode; 
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ children }) => { 
    const [open,setOpen] = useState(true)

    return (
        <div className={styles.container}>
            <dialog open={open} className={styles.dialog} >
                {children}
            </dialog>
        </div>
    );
};

export default ModalWrapper;
