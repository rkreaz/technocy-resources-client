import useSingleCategory from "../../Hooks/useSingleCategory";

const Cart = () => {
    const [singleCategory, isLoading] = useSingleCategory('offer');
    return (
        <div className='grid lg:grid-cols-4 gap-5 w-10/12  p-5 rounded-xl'>

            {
            isLoading ?
             <div className='text-2xl text-center'><span className="loading loading-spinner text-error"></span></div> :
                singleCategory.slice(0, 4).map(offer => <div key={offer._id}>
                    <div className="card card-compact w-56 h-[350px] max-sm:w-full shadow-xl theme_text">
                        <figure className='border container'><img className='h-48' src={offer.image} alt="Shoes" /></figure>
                        <p className='text-[#fff] bg-[#F90101] absolute left-2 px-2
                 rounded-lg mr-2 mt-2'>{offer.price}</p>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">{offer.name}</h2>
                            <p>{offer.details}</p>
                            {/* <button className="btn btn-slide-left px-4 py-0 max-sm:px-2 max-sm:py-1 rounded-full mt-4">Add to Card</button> */}
                        </div>
                    </div>

                </div>)
            }
        </div>
    );
};

export default Cart;