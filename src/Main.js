import React from "react";

const Main = ( props ) => {
    return (
        <main>
            <div className = "video">
                <iframe className="media" width="420" height="315" src={props.url}>
                </iframe>
            </div>
            <p>
                {props.description}
            </p>
        </main>
    );
};

export default Main;