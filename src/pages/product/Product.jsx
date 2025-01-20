import React, { useContext } from 'react';
import { ShopContext } from "../../context/ShopContext";
import { useParams } from 'react-router';
import BreadCrums from '../../components/breadcrums/BreadCrums';
import ProductDisplay from '../../components/productdisplay/ProductDisplay';
import DescriptionBox from '../../components/descriptionbox/DescriptionBox';
import RelatedProducts from '../../components/relatedproducts/RelatedProducts';

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();

    // Find product by ID
    const product = all_product?.find((e) => e.id === Number(productId));

    // Handle case where product is not found
    if (!product) {
        return <div>Product not found.</div>;
    }

    return (
        <div>
            <BreadCrums product={product} />
            <ProductDisplay product={product}/>
            <DescriptionBox/>
            <RelatedProducts/>
        </div>
    );
};

export default Product;
