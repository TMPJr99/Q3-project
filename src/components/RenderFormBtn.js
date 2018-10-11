import React from 'react';

const RenderFormBtn = (props) => {
    return (
        <button class={`fixed ${props.classes}`} onClick={()=> props.changeToForm()}>{props.btnTxt()}</button>
    )
}

export default RenderFormBtn;