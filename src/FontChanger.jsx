import React, { useState } from 'react'
import Navbar from './assets/Navbar';

export default function FontChanger() {
    const [name, Setname] = useState('')

    const fonts = [
        'Arial', 'Courier New', 'Times New Roman', 'Verdana',
        'Georgia', 'Tahoma', 'Trebuchet MS', 'Lucida Console',
        'Comic Sans MS', 'Impact', 'Palatino Linotype',
        'Segoe UI', 'Roboto', 'Open Sans', 'Lato',
        'Oswald', 'Merriweather', 'Montserrat', 'Ubuntu', 'Slabo 27px'
    ];

    return (
        <>
            <Navbar />
            <h3>Font Changer</h3>
            <div className="font-changer-container">
                <div className="font-changer">
                    <label htmlFor="name-input">Enter Text:</label>
                    <input type="text" placeholder='enter your UserName' className='input-box' value={name} onChange={(e) => Setname(e.target.value)} />

                </div>

                <div className="font-changer">

                    <div className="output">

                        {fonts.map((font, i) => {
                            return (
                                <p key={i} style={{ fontFamily: font, }}>{name}</p>
                            )
                        })}
                    </div>
                </div>

            </div>

        </>
    )
}
