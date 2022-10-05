import React from "react";
import Searchbar from "./Searchbar";

const Header = () => {

    return (
        <div className="header">
            <div className="header_logo">           
                <h1>J-Music</h1>
            </div>
        <Searchbar />
        </div>
    );
}

export default Header;