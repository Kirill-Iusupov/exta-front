import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from '../itemCard/ItemCard';
import {Dna} from "react-loader-spinner"



const Catalog = () => {

    const [items, setItems] = useState()


    const getItems = async() => {
            const response = await axios.get("https://exta-back.onrender.com/api/items")

            const {data} = response

            setItems(data)
        }

    useEffect(()=>{
        getItems()
    },[])


    
    return (
        <div className='flex flex-wrap justify-around'>
            {!items ? <Dna 
                    visible={true}
                    height="150"
                    width="150"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                />
            :
                items.map( item => <ItemCard key= {item.id} item={item}/> )
            }
        </div>
    );
}

export default Catalog;
