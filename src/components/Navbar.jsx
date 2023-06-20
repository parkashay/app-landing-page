import React from 'react'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='nav-links'>
                <a href="#" className="nav-link">Home</a>
                <a href="#" className="nav-link">About</a>
                <a href="#" className="nav-link">Testimonials</a>
                <a href="#" className="nav-link">Contact</a>
            </div>
            <div className='app-title'>smartHome</div>
            <div className="auth">
                <a href="#" className='login'>Login</a>
                <a href="#" className="signup">Sign up</a>
            </div>
        </div>
    )
}

export default Navbar