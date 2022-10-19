import {useState} from "react";

export const CheckBox=()=>{
    const [checked, setChecked] = useState(true);

    return <div>
        <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
        <p>состояние: {checked ? 'отмечен' : 'не отмечен'}</p>
    </div>;
}
