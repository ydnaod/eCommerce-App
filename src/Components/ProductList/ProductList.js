import React, {Fragment, useEffect, useState} from 'react';
import {Product} from '../Product/Product';

export function ProductList(){

    const [productList, setProductList] = useState([]);

    async function fetchData(){
        try {
            const response = await fetch('http://localhost:3000/products',{
                    method: "GET",
                    headers: {"Content-Type" : "application/json"}
            });
            const parseRes = await response.json();
            console.log(parseRes);
            
            const newList = parseRes.map(product => ({
                description: product.description,
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image
            }));
            console.log(Array.isArray(newList));
            console.log(typeof productList);
            setProductList(newList);
            return newList;
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Fragment>
            {
                productList.map(product => {
                    return <Product 
                        product={product}
                        key={product.id}/>
                })
            }       
        </Fragment>
    );
}