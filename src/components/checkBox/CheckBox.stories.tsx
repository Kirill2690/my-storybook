import React, {useState} from 'react';
import {CheckBox} from "./CheckBox";

export default {
    title: 'CheckBox',
    component: CheckBox,
};

export const UncontrolledCheckBox = () => {
    const [checked, setChecked] = useState(true);

    return <div>
        <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
        <p>состояние: {checked ? 'отмечен' : 'не отмечен'}</p>
    </div>;
}