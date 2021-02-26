import { useState, useEffect } from 'react';


const Counter = (props) => {
    const [count, setCount] = useState(props.initalNumber)
    // cosnt [name, setName] = useState('Scott')

    const updateByFive = () => {
        setCount(count + 5)
    }

    //this will run on first mount ComponentDidMount
    //this will run on every update ComponentDidUpdate
    useEffect(()=> {
        console.log('hello')
    });

    useEffect(()=> {
        console.log('only on the mount')
    }, []);

    return (
        <div>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={()=> setCount( count + 1)}>Add</button>
            <button onClick={()=> setCount( count - 1)}>Subtract</button>
            <button onClick={ updateByFive }>Plus 5</button>
        </div>
    )
}


export default Counter;