import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from '../itemCard/ItemCard';


const Catalog = () => {

    const [items, setItems] = useState()


    const getItems = async() => {


        // const response = axios.get("http://localhost:3001/items")

        // const { data } = await response
        
        // setItems(data)
        }

    useEffect(()=>{
        getItems()
    },[])



    return (
        <div className='flex flex-wrap justify-around'>
            {!items ? <h1>Loading..</h1>
            :
                items.map( item => <ItemCard key= {item.id} item={item}/> )
            }
        </div>
    );
}

export default Catalog;
