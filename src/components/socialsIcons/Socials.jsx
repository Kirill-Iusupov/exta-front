import React from 'react';
import {FaWhatsapp, FaTelegramPlane, FaInstagram} from "react-icons/fa"
const Socials = () => {
    return (
        <div className='w-[150px] h-[50px] flex justify-between items-center m-auto'>
            <a href="https://wa.me/996558690069" target={"_blank"}>
                <FaWhatsapp size={"30px"} />
            </a>
            <a href="https://t.me/extaseaKG" target={"_blank"}>
                <FaTelegramPlane size={"30px"} />
            </a>
            <a href="https://www.instagram.com/extasea_kg/" target={"_blank"}>
                <FaInstagram size={"30px"} />
            </a>
        </div>
    );
}

export default Socials;
