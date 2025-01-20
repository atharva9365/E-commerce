import React from 'react';
import "./breadcrums.css";
import arrow_icon from "../../assets/frontend assest/breadcrum_arrow.png"


const BreadCrums = (props) => {
    const { product } = props;

    // Provide default values to avoid crashes
    const category = product?.category || "Unknown Category";
    const name = product?.name || "Unknown Product";

    return (
        <div className='breadcrums'>
            Home <img src={arrow_icon} alt="" />
            Shop <img src={arrow_icon} alt="" /> {category}
            <img src={arrow_icon} alt="" /> {name}
        </div>
    );
};

export default BreadCrums;
