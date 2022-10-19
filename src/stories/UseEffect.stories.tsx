import React, {useEffect, useState} from 'react';
import SuperButton from "../components/superButton/SuperButton";

export default {
    title: 'UseEffect demo',
}

export const SimpleExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('SimpleExample');

    useEffect(() => {
        console.log('useEffect every render');
        document.title = counter.toString();
    },) //в зависимости не передаем вообще ничего

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)');
        document.title = counter.toString();
    }, []) //в зависимости передаем []

    useEffect(() => {
        console.log('useEffect first render and every counter change');
        document.title = counter.toString();
    }, [counter]) //в зависимости передаем [counter]

    return <div style={{display:"flex"}}>
        Hello, {counter} {fake}
        <SuperButton onClick={() => setFake(fake + 1)}>fake+</SuperButton>
        <SuperButton onClick={() => setCounter(counter + 1)}>counter+</SuperButton>
    </div>

}

export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(state => state + 1);
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])


    return <>
        Hello, counter: {counter}
    </>

}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)
    console.log('Component rendered with ' + counter);

    useEffect(() => {
        console.log('Effect occurred: ' + counter)
        return () => {
            console.log('RESET EFFECT ' + counter)
        }
    }, [counter])

    const increase = () => {
        setCounter(counter + 1)
    }

    return <div style={{display:"flex"}}>
        Hello, counter: {counter}
        <SuperButton onClick={increase}>+</SuperButton>
    </div>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')
    console.log('Component rendered with ' + text);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        };

        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
}

export const SetTimeoutExample = () => {
    const [text, setText] = useState('')
    console.log('Component rendered with ' + text);

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            console.log('TIMEOUT EXPIRED')
            setText('3 seconds passed')
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }

    }, [text])

    return <>
        text: {text}
    </>
}