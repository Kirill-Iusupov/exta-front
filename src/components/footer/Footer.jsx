import React from 'react';

import Contacts from '../contacts/Contacts';
import Wrapper from "../wrapper/Wrapper"
import Logo from '../logo/Logo';

const Footer = () => {
    return (
        <div>
            <Wrapper>
                <div className='border-[5px] border-b-[0] border-solid border-[#C23594] rounded-t-[25px] flex items-center justify-around p-[15px] bg-[black]'>
                    <Contacts />
                    <Logo />
                </div>
            </Wrapper>
        </div>
    );
}

export default Footer;
