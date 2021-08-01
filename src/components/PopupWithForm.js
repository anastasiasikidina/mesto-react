import React from 'react';

export default function PopupWithForm(props) {
    const { title, name, buttonText, children, isOpen, onClose } = props;

    return (
        <div className={`popup popup-${name} ${isOpen && 'popup_opened'}`}>

            <button className={`button-close popup__cross popup__cross_btn_close-${name}`}
                type="button" onClick={onClose}></button>
            <form className={`popup__form popup__form_${name}`} name={`${name}-form`}>

                <h2 className="popup__title">{title}</h2>

                {children}

                <button className="popup__button popup__save" type="submit">{buttonText}</button>

            </form>

        </div>
    )
}