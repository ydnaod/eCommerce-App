import React, { Fragment } from 'react';
import {ProductList} from '../ProductList/ProductList';

export function Home(){
    return (
        <Fragment>
            <p>Home</p>
            <ProductList />
        </Fragment>
    )
}