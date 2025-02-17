import React from "react";
interface InputProps {
    placeholder: string;
    className: string
}


 const Input: React.FC<InputProps> = ({placeholder,className})=>{
    return(
        <>
            <input className={className}
                placeholder={placeholder}
            />
        
        </>
    )
}

export default Input