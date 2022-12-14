import React from 'react'
import {useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const handler1 = (event)=>{
        event.preventDefault();
        navigate("/user");
    }
    const handler2 = (event)=>{
        event.preventDefault();
        navigate("/manager");
    }
    const handler3 = (event)=>{
        event.preventDefault();
        navigate("/");
    }
  return (
    <nav>
        <h3>Task Management</h3>
        <h5><a href="/user" onClick={handler1}>User</a></h5>
        <h5><a href="/manager" onClick={handler2}>Manager</a></h5>
        <h5><a href="/" onClick={handler3}>Switch</a></h5>
    </nav>
  )
}

export default Header;