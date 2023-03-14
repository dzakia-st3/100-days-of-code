import React, { useState } from "react";
import data from './data'
import './style.css'

const LoremIpsum = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        let amount = parseInt(count)
        if (count <= 0) {
            amount = 1
        }
        if (count > 8) {
            amount = 8
        }
        setText(data.slice(0, amount))
    }

    return (
        <div className="section-center-lorem-ipsum">
            <h3>tired of boring lorem ipsum?</h3>
            <form className="lorem-form" onSubmit={handleSubmit}>
                <label>paragraphs:</label>
                <input type="text" name="amount" id="amount" value={count} onChange={e => setCount(e.target.value)} />
                <button className="btn-lorem">Generate</button>
            </form>
            <div className="lorem-text">
                {text.map((item, index) => {
                    return <p key={index}>{item}</p>
                })}
            </div>
        </div>
    )
}

export default LoremIpsum