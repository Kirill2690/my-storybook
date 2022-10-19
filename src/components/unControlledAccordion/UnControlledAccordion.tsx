import React, {useState} from 'react';


type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

    let [collapsed, setCollapsed] = useState(true);

    return <div>
        <AccordionTitle title={props.titleValue} onClick={() => {
           setCollapsed(!collapsed)
        }}/>
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>-- {props.title} --</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return <ul>
        <li>Kirill</li>
        <li>Albert</li>
        <li>Grigory</li>
    </ul>
}