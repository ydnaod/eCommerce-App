import React, {useState, Fragment} from 'react';

export function Product(props){
    return(
        <Fragment>
            <h4>{props.product.id}</h4>
            <h4>{props.product.name}</h4>
            <h4>{props.product.description}</h4>
            <h4>{props.product.price}</h4>
        </Fragment>
    )
}