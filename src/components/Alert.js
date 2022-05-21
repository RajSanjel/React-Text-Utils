import React from 'react'

export default function Alert(props) {
    const capitalizeCase = (word) => {
        const text = word
            .toLowerCase()
            .split(" ")
            .map((e) => e.charAt(0).toUpperCase() + e.substring(1))
            .join(" ");
        return text;
    };
    return (

        props.alert &&
        <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>  {capitalizeCase(props.alert.type)}</strong> {props.alert.msg}
            </div>
        </div>
    )
}
