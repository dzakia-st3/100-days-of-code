import React, { useEffect, useState } from "react";
import SingleColor from "./singleColor";
import './style.css'
import Values from 'values.js'

const ColorGenerator = () => {
    const [color, setColor] = useState('')
    const [error, setError] = useState(false)
    const [list, setList] = useState(new Values('#f15025').all(10))
    const [alert, setAlert] = useState(false)
    const [copyColor, setCopyColor] = useState("")
    const [timer, setTimer] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            let colors = new Values(color).all(10)
            setError(false)
            setList(colors)
        } catch (error) {
            setError(true)
        }
    }

    const onCopy = (hexValue) => {
        setAlert(hexValue)
        setCopyColor(hexValue)
        navigator.clipboard.writeText(hexValue)
    }

    useEffect(() => {
        if (!alert) return;

        const timeout = setTimeout(() => {
            setAlert(false)
            setTimer(null)
        }, 3000)

        setTimer((prevValue) => {
            if (!isNaN(prevValue)) clearTimeout(prevValue)
            return timeout
        })

        return () => clearTimeout(timeout)
    }, [alert])

    return (
        <>
            <section className="container-color-generator">
                <h3>Color Generator</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        style={{width: '50%'}}
                        type='text'
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        placeholder='#f15025'
                        className={`${error ? 'error' : null}`}
                    />
                    <button className="btn-color-generator" type="submit">Submit</button>
                </form>
                <section className="container-color-generator">
                    {alert && <p className="alert">#{copyColor} copied to clipboard</p>}
                </section>
            </section>
            <section className='colors'>
                {list.map((color, index) => {
                    return (
                        <SingleColor
                            key={index}
                            {...color}
                            index={index}
                            hexColor={color.hex}
                            onCopy={() => onCopy(color.hex)}
                        />
                    )
                })}
            </section>
        </>
    )
}

export default ColorGenerator