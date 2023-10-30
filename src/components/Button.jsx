import React from "react";


const Button = ({text, color, size, onclick}) => {
    const className = `button ${color} ${size}`;

return (
    <> 
        <button className={className} onClick={onclick}>
            {text}
        </button>
    </>
    );
};

export default Button;