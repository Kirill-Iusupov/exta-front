import React from 'react';
import Contacts from '../contacts/Contacts';
import Logo from '../logo/Logo';
import Wrapper from '../wrapper/Wrapper';


const Header = () => {
    return (
        <div>
            <Wrapper >
                <div className='border-[5px] border-t-[0] border-solid border-[#C23594] rounded-b-[25px] flex items-center justify-around p-[15px] bg-[black]'>
                    <Logo />
                    <h2 className='text-3xl font-serif dark:text-white w-[750px] text-center'>"Для моментов страсти и близости"</h2>
                    <Contacts />
                </div>
            </Wrapper>
        </div>
    );
}

export default Header;
