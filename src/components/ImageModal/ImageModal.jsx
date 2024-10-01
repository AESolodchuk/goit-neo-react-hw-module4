import css from './ImageModale.module.css'
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ImageModal = ({ handleModalClose, fullImage }) => {   
       return (
        <Modal className={css.Modal}       
        isOpen={true}    
        onRequestClose={handleModalClose}       
        overlayClassName={css.Overlay}>
            <div onClick={handleModalClose}>
                <img src={fullImage} alt="full image" />
            </div>
        </Modal>
    )
}

export default ImageModal