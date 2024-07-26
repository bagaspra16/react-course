import {useState} from "react";

function Button(){

    const [counter, setCounter] = useState(0);

    let newCounter = 0;
    function clickHandler(){
        newCounter = counter  +1;
        console.log(`Saya kena klik oleh ${newCounter}`)
        setCounter(newCounter)
    }

    return(
        <button onClick={() => clickHandler()}>Klik saya {counter} kali</button>
    )
}

export default Button