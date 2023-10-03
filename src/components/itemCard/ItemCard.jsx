import React from 'react';

const ItemCard = ( {item} ) => {

    return (
        <>
          <div className='flex justify-between items-center my-[15px] w-[380px] p-[10px] border-[3px] border-[#C23594] rounded-[15px] hover:border-[#fff]'>
            <img src={item.img} alt="img" className='w-[120px] h-[120px]'/>
            <div className='w-[220px] '>
                <p>Название: {item.title}</p>
                <p>Цена: {item.price}c</p>
            </div>
          </div>
        </>
    );
}

export default ItemCard;
