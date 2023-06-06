import React, {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import '../styles/NavBar.css'
import ReorderIcon from '@mui/icons-material/Reorder';

function NavBar() {
    const [expandNavBar, setExpandNavBar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavBar(false);
    }, [location])

    function handleClickExpandNavBar(){
        setExpandNavBar((prev) => !prev);
    }

    return (
        <div className = "navbar" id = {expandNavBar ? "open" : "close"}>
            <div className= 'toggleButton'>
                <button onClick = {handleClickExpandNavBar}>
                    <ReorderIcon/>
                </button>
            </div>
            <div className = 'links'>
                <Link to = "/">Home</Link>
                <Link to = '/skills'>Skills</Link>
                <Link to = "/projects">Projects</Link>
            </div>
        </div>
    )
}

export default NavBar