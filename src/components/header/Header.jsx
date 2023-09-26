import React from 'react';
import Wrapper from '../wrapper/Wrapper';
import styles from './header.module.scss';


const Header = () => {
    return (
        <div>
            <Wrapper className={'flex'} >
                <div className='border-[5px] border-t-[0] border-solid border-[#C23594]  rounded-b-[25px] flex items-center justify-between p-[15px] bg-[black]'>
                    <span className={`${styles.logo}`} />
                    <h2>"Для моментов страсти и близости"</h2>
                    <div className='text-end'>
                        <p>+996 (558) 69-00-69</p>
                        <p>+996 (222) 69-00-69</p>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default Header;
