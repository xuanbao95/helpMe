import React from 'react'

export default function Help() {
    const [hover, setHover] = React.useState(false)
    return (
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <span>Help<span className="logo_border">|</span></span>
            <div>
                {hover && (
                    <div className="logo-help">
                        <h3>Help</h3>
                        <br />
                        <p><a href="#a">Order Status</a></p>
                        <p><a href="#a">Contract Us</a></p>
                        <p><a href="#a">Return</a></p>
                        <p><a href="#a">Privacy Policy</a></p>
                    </div>
                )}


            </div>

        </div>
    )
}
