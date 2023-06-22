import React, { useEffect, useState } from 'react'

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menu, setMenu] = useState(false)
    const hamburgerClick = () => {
        setMenu(!menu)
        console.log(menu)
    }



    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    return (
        <div className={isScrolled? 'scroll-navbar': 'navbar'}>
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

           
                <div className={menu? 'nav-links-res': 'nav-links-res-hide'}>
                    <a href="#" className="nav-link">Home</a>
                    <a href="#" className="nav-link">About</a>
                    <a href="#" className="nav-link">Testimonials</a>
                    <a href="#" className="nav-link">Contact</a>
                    <a href="#" className='login'>Login</a>
                    <a href="#" className="signup">Sign up</a>
                </div>
             

            <div className="hamburger" onClick={hamburgerClick}>
                {!menu? 
            <><div className='line'></div>
            <div className='line'></div>
            <div className='line'></div></>
            :
            <div
            style={{
                fontSize : '3rem',
                color : 'white',
                transform : 'translate(0%, -40%)'
            }}
            >×</div> 
            }
            </div>

        </div>
    )
}

export default Navbar