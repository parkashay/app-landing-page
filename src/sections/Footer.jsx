import React from 'react'
import Qoutation from '../components/Qoutation'
import { data } from '../data'
function Footer() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Submitted')
    }
    const d = data.footer
    const categories = d.categories
    const about = d.about
    const follow = d.follow
    return (
        <div className='footer-section'>
            <div className='footer-tab'>
                <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '700'
                }}>smartHome</div>
                <Qoutation quotation={d.text} />
                <form className='footer-form' onSubmit={handleSubmit}>
                    <input type="email" className='footer-input' placeholder='Email Address' required />
                    <input type="submit" className='footer-btn-submit' value={'Register'} />
                </form>
            </div>

            <div className="footer-tab">
                <div className="footer-title">Categories</div>
                <div className="footer-links">
                    {
                        categories.map(c => {
                            return <a href={c.link} className='footer-link' key={c.title}>{c.title}</a>
                        })
                    }
                </div>
            </div>

            <div className="footer-tab">
                <div className="footer-title">About</div>
                <div className="footer-links">
                    {
                        about.map(a => {
                            return <a href={a.link} className='footer-link' key={a.title}>{a.title}</a>
                        })
                    }
                </div>
            </div>


            <div className="footer-tab">
                <div className="footer-title">Follow Us</div>
                <div className="footer-links">
                    {
                        follow.map(f => {
                            return <a href={f.link} className='footer-link' key={f.title}>{f.title}</a>
                        })
                    }
                </div>
            </div>

                    <div 
                    style={{
                        width : '100%',
                        height : '100px',
                        backgroundColor : '#000F38',
                        display : 'flex',
                        justifyContent : 'center',
                        alignItems : 'center',
                        color : 'white',
                        marginTop : '100px'
                    }}
                    >Copyright &copy; 2021 All Rights Reserved smartHome</div>
        </div>
    )
}

export default Footer