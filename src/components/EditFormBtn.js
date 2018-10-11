import React from 'react';

const EditFormBtn = (props) => {
    return (
        <button class={`fixed ${props.classes}`} onClick={()=> props.changeToEditForm()}>{props.btnTxt()}</button>
    )
}

export default EditFormBtn;