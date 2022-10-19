import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import SuperRadio from "./SuperRadio";


export default {
    title: 'SuperRadio',
    component: SuperRadio
}
const array1 = ['Pizza', 'Hot Dog', 'Burger']


const callBack = action('clicked')

export const Radio = () => {
    return(
        <SuperRadio name={'radio'}
                    options={array1}
                    value={array1}
                    onChangeOption={callBack}/>

        )

}







