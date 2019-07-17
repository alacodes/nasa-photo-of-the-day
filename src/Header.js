import React from "react";

const Header = (props) => {
    return (
        <header>
            <h1>NASA PICTURE OF THE DAY</h1>
            <p>{props.date}</p>
            <p>{props.title}</p>
        </header>
    );
};

export default Header;