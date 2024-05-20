import React, { useState } from 'react';
export default function Bt2() {
    const [color, setColor] = useState<string>("");

    const handleClick = () => {
        const colorInp = document.getElementById('colorInp') as HTMLInputElement;
        setColor(colorInp.value);
    }

    return (
        <div style={{ paddingTop: 30 }}>
            Bài tập 2
            <div>
                <h2>Color: {color}</h2>
                <h3>From</h3>
                <p>Màu sắc</p>
                <input id="colorInp" type="color" /><br />
                <button onClick={handleClick}>Submit</button>
            </div>
        </div>
    );
}

