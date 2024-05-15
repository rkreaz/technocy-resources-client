import { useEffect, useState } from "react";

const useSingleProduct = (id) => {
    const [singleProducts, setSingleProduct] = useState({});
    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => {
               const findP = data.find(p => p._id === id)
               setSingleProduct(findP)
            })
    }, [id])
    return singleProducts
};

export default useSingleProduct;