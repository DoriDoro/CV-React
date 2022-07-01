import React from 'react'

export default function PageCard( {title, nameOfCompany, contentCompany } ) {
    return (
        <div className="PageCard">
        <h4> {title} </h4>
        <h5> {nameOfCompany} </h5>
        <p> {contentCompany} </p>
            
        </div>
    )
}
