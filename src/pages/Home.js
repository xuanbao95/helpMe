import React from 'react'
import Logo from '../components/Logo/Logo'
import Menu from '../components/Menu/Menu'
import Slogan from '../components/Slick_text/Slogan'
import { useDispatch, useSelector } from 'react-redux'
import * as action from "../../src/redux/actions/actionType"
import NavBar from '../components/NavBar/NavBar'





export default function Home() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(action.actGetProductAPI())
    })
    return (
        <React.Fragment>
            <NavBar/>
        </React.Fragment>
    )
}
