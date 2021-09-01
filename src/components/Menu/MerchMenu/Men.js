import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { Link, useHistory } from 'react-router-dom';

export default function Men() {
    const [hover, setHover] = React.useState(false);
    // const [css, setCss] = React.useState(null)
    // const useStyles = makeStyles((theme) => ({
    //     lala: {
    //         transform: "translateY(50px)",
    //         transition: "ease-in-out 1s",
    //     }
    // }))
    // const classes = useStyles();
    const history=useHistory();
    return (

        <div className="main" onMouseEnter={() => {
            setHover(true);

        }
        } onMouseLeave={() => { setHover(false); }}>
            <div className="grid-hover" style={{ marginBottom: "50px" }}>
                <Link
                onClick={()=>history.push("/men")}
                >Men</Link>
            </div>

            <div className="grid-dropDown">
                {hover && (
                    <div className="dropDown-ul">

                        <div className="dropDown-li">
                            <h6>Featured</h6>
                            <br />
                            <p><a href="#a">New Releases</a></p>
                            <p><a href="#a">Member Access</a></p>
                            <p><a href="#a">Air Force 1</a></p>
                            <p><a href="#a">SNKRS Launch Calendar</a></p>
                            <p><a href="#a">Sales</a></p>
                        </div>


                        <div className="dropDown-li">
                            <h6>Shoes</h6>
                            <br />
                            <p><a href="#a">Newest Sneaker</a></p>
                            <p><a href="#a">All Shoses</a></p>
                            <p><a href="#a">Lifestyle</a></p>
                            <p><a href="#a">Running</a></p>
                            <p><a href="#a">Baseketball</a></p>
                            <p><a href="#a">Jordan</a></p>
                            <p><a href="#a">FootBall</a></p>
                            <p><a href="#a">Gym and traning</a></p>
                        </div>


                        <div className="dropDown-li">
                            <h6>Clothing</h6>
                            <br />
                            <p><a href="#a">All Clothing</a></p>
                            <p><a href="#a">Tóp and T-shirts </a></p>
                            <p><a href="#a">Jersy and Kíts</a></p>
                            <p><a href="#a">Hoodies and SweetShirt</a></p>
                            <p><a href="#a">Jacket and Gillets</a></p>
                        </div>


                        <div className="dropDown-li">
                            <h6>Shop By Sport</h6>
                            <br />
                            <p><a href="#a">Running</a></p>
                            <p><a href="#a">Football</a></p>
                            <p><a href="#a">Gym and traning</a></p>
                            <p><a href="#a">Baseketball</a></p>
                            <p><a href="#a">Yoga</a></p>
                        </div>


                        <div className="dropDown-li">
                            <h6>Ions</h6>
                            <br />
                            <p><a href="#a">Air Force 1</a></p>
                            <p><a href="#a">Pegasus</a></p>
                            <p><a href="#a">Blazer</a></p>
                            <p><a href="#a">Air Jordan 1</a></p>
                            <p><a href="#a">Air Max</a></p>
                        </div>

                    </div>
                )}




            </div>

        </div>
    )
}
