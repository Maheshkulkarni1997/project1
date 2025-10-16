import { useState } from "react";

export function ToggleText() {
    const [isVisible, SetisVisible] = useState(false);

    return (
        <div>
            <button onClick={() => SetisVisible(!isVisible)}>
                {isVisible ? 'Hide' : 'Show'} Text
            </button>
            {isVisible && <p>This is some text!</p>}
        </div>
    );
}


export function NameInput() {
    const [name, setName] = useState('');

    return (
        <div>
            <input
                type="text"
                placeholder="Enter your Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <p>Hello, {name || 'stranger'}!</p>
        </div>
    );
}


export function LightSwitch() {
    const [isOn, setIsOn] = useState(false);
    return (
        <div>
            <p>The Light is {isOn ? "Off" : "On"}</p>
            <button onClick={() => setIsOn(!isOn)}>Turn {isOn ? 'OFF' : 'ON'}</button>
        </div>
    )
}

// export function Counter() {

//     const [count, setCount] = useState(0);

//     console.log(count)
//     return (
//         <div>
//             <h4>Count :{count}</h4>
//             <button onClick={() => setCount(count + 1)}>count++</button>
//             <button onClick={() => setCount(0)}>resetCount</button>
//         </div>
//     )
// }

