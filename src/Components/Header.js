import React from "react";
import Searchbar from "./Searchbar";
import { NavLink } from "react-router-dom";

const Header = ({ endPoint, onChangeHandler, submitHandler }) => {

    return (
        <header className="header">
            <div className="header_logo">           
                <NavLink exact to="/">J-MusiQ</NavLink>
            </div>
            <Searchbar 
                endPoint = {endPoint} 
                onChangeHandler={onChangeHandler} 
                submitHandler={submitHandler}
            />
        </header>
    );
}

export default Header;