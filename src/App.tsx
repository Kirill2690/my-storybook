import React, {useState} from 'react';
import './App.css';
import {Clock} from "./components/clock/Clock";
import {Accordion} from "./components/accordion/Accordion";
import {UncontrolledAccordion} from "./components/unControlledAccordion/UnControlledAccordion";
import {OnOff} from "./components/controlledOnOff/СontrolledOnOff";
import {Select} from "./components/select/Select";

let items1 = [
    {title: 'Minsk', value: 1},
    {title: 'Kiev', value: 2},
    {title: 'London', value: 3},
]

let items2 = [
    {title: 'Kirill', value: 1},
    {title: 'Natalia', value: 2},
    {title: 'Anton', value: 3},
    {title: 'Fedor', value: 4}
]

let items3 = [
    {value: 1, title: 'Minsk'},
    {value: 2, title: 'Moscow'},
    {value: 3, title: 'Kiev'},
]

// function declaration
function App() {
    console.log('App rendering')

    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    const [accordionCollapsed2, setAccordionCollapsed2] = useState<boolean>(true)
    const [switchOn, setSwitchOn] = useState(false)
    const [select, setSelect] = useState('')

    const ControlledAccordionComponent = React.memo(Accordion)
    const UncontrolledAccordionComponent = React.memo(UncontrolledAccordion)
    const ControlledSwitchComponent = React.memo(OnOff)
    const ControlledSelectComponent = React.memo(Select)

    return (
        <div className={'App'}>
            <PageTitle title={'These are APP components:'}/>
            <hr/>
            Controlled Accordion
            <hr/>
            <ControlledAccordionComponent color={'black'} onClick={() => {
            }} items={items1} titleValue={'Menu'}
                                          accordionCollapsed={accordionCollapsed}
                                          setAccordionCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}/>
            <ControlledAccordionComponent color={'black'} onClick={() => {
            }} items={items2} titleValue={'Users'}
                                          accordionCollapsed={accordionCollapsed2}
                                          setAccordionCollapsed={() => setAccordionCollapsed2(!accordionCollapsed2)}/>
            <hr/>
            Uncontrolled Accordion
            <hr/>
            <UncontrolledAccordionComponent titleValue={'Menu'}/>
            <UncontrolledAccordionComponent titleValue={'Users'}/>
            <hr/>
            Controlled switch
            <hr/>
            <ControlledSwitchComponent switchOn={switchOn} setSwitchOn={setSwitchOn}/>
            <hr/>
            Controlled Select
            <hr/>
            <div style={{margin:'70px', alignItems: 'center',flexDirection: 'column',display: 'flex'}}>
                <ControlledSelectComponent value={select} items={items3} onChange={(value) => {
                    setSelect(value)
                }}/>
            </div>

            <hr/>
            Clock
            <hr/>
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <Clock mode={'analog'}/>
                <Clock mode={'digital'}/>
            </div>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('AppTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;
