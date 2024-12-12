import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className=''>
                <Link to={`/`} className='text-white' href="">Stop Watch</Link>
                <Link to={`/fontchanger`} className='text-white' href="">Font Changer</Link>
            </nav>

        </>
    )
}
