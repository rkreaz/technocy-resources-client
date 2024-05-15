import { useParams } from "react-router-dom";
import useSingleProduct from "../../Hooks/useSingleProduct";

const ProductDetails = () => {
    const {id} = useParams();
 
// const findProduct = allProducts.find(pro => pro._id === id)

const findProduct = useSingleProduct(id)

    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <div className="card card-compact max-sm:w-full shadow-xl theme_text h-[400px] pt-40">
                    <div className='border container rounded-xl'><img className="h-44 mx-auto " src={findProduct?.image} alt="Shoes" /></div>
                    <p className='text-[#fff] bg-[#F90101] absolute left-2 px-1 text-sm
     rounded-lg mr-2 mt-2'>${findProduct?.price}</p>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">{findProduct?.name}</h2>
                        <p>{findProduct?.details}</p>
                        <button className="btn btn-slide-left px-4 py-0 max-sm:px-2 max-sm:py-1 rounded-full mt-4">Add to Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;