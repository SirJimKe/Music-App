import React from "react";
import Searchbar from "./Searchbar";
import { NavLink } from "react-router-dom";

const Header = ({ endPoint, onChangeHandler, submitHandler, show, setShow }) => {

    return (
        <header className="header">
            <div className="header_logo">           
                <NavLink exact to="/" onClick={()=>setShow(false)}>J-MusiQ</NavLink>
            </div>
            {
                show? <Searchbar 
                endPoint = {endPoint} 
                onChangeHandler={onChangeHandler} 
                submitHandler={submitHandler}
            /> : <h2><NavLink exact to="/" >Home</NavLink></h2>
            }
        </header>
    );
}

export default Header;