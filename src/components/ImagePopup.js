import React from 'react';

function ImagePopup(props) {
    const { card, onClose } = props;

    return (
        
            <div 
            className={`popup popup_full_photo ${card.name && 'popup_opened'}`}
            >
                <div className="popup__figure-flex">
                    <button className="button-close popup__close popup__close_btn_close popup__button-close" type="button" onClick={onClose}></button>
                    <figure className="popup__container popup__container-image popup__container-image_open">
                        <img className="popup__image" src={card.link} alt={card.name} />
                        <figcaption className="popup__caption">{card.name}</figcaption>
                    </figure>
                </div>
            </div>
        
        )
}

export default ImagePopup