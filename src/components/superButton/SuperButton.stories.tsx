import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import SuperRadio from "./SuperButton";
import SuperButton from "./SuperButton";


export default {
    title: 'SuperButton',
    component: SuperButton
}



const callBack = action('clicked')

export const Button = () => {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            setText(text) // если нет ошибки показать текст
        }
    }

    return(
        <div style={{display:"flex"}}>
            <SuperButton
                red
                onClick={showAlert}
            >
                delete
            </SuperButton>
            <SuperButton onClick={callBack}>
                default
            </SuperButton>

            <SuperButton disabled>
                disabled
            </SuperButton>

        </div>


        )

}







