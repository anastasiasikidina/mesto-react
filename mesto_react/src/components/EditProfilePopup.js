import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
    const { isOpen, onClose } = props;

    return (
        <PopupWithForm
        name='profile'
        title='Редактировать профиль'
        buttonText='Сохранить'

        isOpen={isOpen}
        onClose={onClose}
        >

            <input id="popup__input_type_name" className="popup__input popup__input_type_name" 
            type="text" name="name" minLength="2" maxLength="40" placeholder="Введите имя" required 
            />
            <span id="popup__input_type_name-error" className="popup__error"></span>

            <input id="popup__input_type_about" className="popup__input popup__input_type_about" 
            type="text" name="about" minLength="2" maxLength="200" placeholder="Ваша профессия" required 
            />
            <span id="popup__input_type_about-error" className="popup__error"></span>

</PopupWithForm>
    )
}

export default EditProfilePopup;