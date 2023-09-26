import React from 'react';

const Wrapper = ( {children} ) => {

    return (
        <div className='w-[1200px] m-auto'>
            {children}
        </div>
    );
}

export default Wrapper;
