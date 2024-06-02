import PropTypes from "prop-types";

const ViewProduct = ({ viewProduct }) => {
    const {image, price, name, details, category} = viewProduct;
    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className=" btn-sm btn-circle text-sm  absolute right-2 top-2 mt-3 bg-[#F02757] text-[#fff]">✕</button>
                    </form>

                    <div>
                        <div className="card card-compact max-sm:w-full theme_text h-[380px] mt-16">
                            <div className='border container rounded-xl'>
                                <img className="h-36 mx-auto" src={image} alt="Shoes" />
                            </div>

                            <div className="space-y-5 mt-8">
                                <p className="text-2xl font-bold text-[#000] ">Price: <span className="text-[#F02757] font-semibold mt-10">${price}</span></p>

                                <p className="text-2xl font-bold text-[#000] ">Category: <span className="text-[#F02757] font-semibold mt-10">{category}</span></p>

                                <h2 className="text-2xl font-bold text-[#000]">Product Name: <span className="text-[#F02757] font-semibold">{name}</span></h2>

                                <p className="text-lg font-bold text-[#000]">Product Details: <span className=" font-normal text-base">{details}</span></p>
                            </div>
                        </div>
                    </div>

                </div>
            </dialog>
        </div>
    );
};

ViewProduct.propTypes = {
    viewProduct: PropTypes.object,
};

export default ViewProduct;