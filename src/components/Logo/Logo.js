import React from 'react'

import logo1 from "../../assets/img/logo-thuong-hieu-jordan-elle-man-feature-1.jpg"
import Help from './Help'



export default function Logo() {

    return (

        <div className="logo">
            <div className="logo-right">
                <img
                    className="logo1"
                    src={logo1}
                    atl="123"
                />
            </div>
            <div className="logo-left">
                <span className="logo-dropDown">
                    <div className="logo-a">
                        <a href="#a"><span>Help<span className="logo_border">|</span></span></a>
                    </div>
                    <div className="hidden">
                        <div className="logo-help">
                            <h3>Help</h3>
                            <br />
                            <p><a href="#a">Order Status</a></p>
                            <p><a href="#a">Contract Us</a></p>
                            <p><a href="#a">Return</a></p>
                            <p><a href="#a">Privacy Policy</a></p>
                        </div>
                    </div>

                </span>

                <span ><a href="#a">Join Us<span className="logo_border">|</span></a></span>
                <span><a href="#a">Sign In</a></span>
            </div>

        </div>



    )
}
