import { Helmet } from "react-helmet-async";
import Product from "../Product/Product";
import useProducts from "../Hooks/useProducts";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import './products.css'

const Products = () => {
    const [allProducts] = useProducts();
    const [listProduct, setListProduct] = useState([]);
    const [filterProduct, setFilterProduct] = useState([]);
    const { category } = useParams();
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(6)


    allProducts.map(p => {
        const checkExists = listProduct.includes(p.category);
        if (!checkExists) {
            setListProduct([...listProduct, p.category])
        }
    })

    useEffect(() => {
        const productFilter = allProducts.filter(product => product.category === category);
        setFilterProduct(productFilter)
    }, [allProducts, category])

    const pageNumber = Math.ceil(filterProduct.length / limit);

    const pageList = [...Array(pageNumber).keys()];
    console.log(page);

    const handleLimit = (e) => {
        setLimit(e.target.value)
        setPage(0)
    }

    return (
        <div className="theme">
            <div className="max-w-6xl mx-auto pb-24">
                <Helmet>
                    <title>Technocy | Products</title>
                </Helmet>
                <div className="w-full flex pt-28 gap-5">
                    <div className="w-3/12 flex flex-col items-center theme_text bg-[#F1F3F8] p-5">
                        <h2 className="font-bold text-2xl text-[#000000] mb-5 mt-5">Product categories</h2>
                        {
                            listProduct.length ? listProduct.map((listItem, index) => <NavLink onClick={() => setPage(0)} className='text-lg font-semibold m-1 border w-full text-center py-2 hover:bg-[#F02757] hover:text-[#fff] mt-2 rounded-lg' to={`/products/${listItem}`} key={index}>{listItem}</NavLink>) : ''
                        }
                    </div>


                    <div className="w-9/12">
                        <h2 className="font-bold text-2xl text-[#000000] mb-8">Products</h2>
                        <div className=' grid lg:grid-cols-3 gap-5 rounded-xl'>
                            {
                                filterProduct.slice(page * limit, limit * (page + 1)).map(product => <Product key={product._id} product={product}></Product>)
                            }
                        </div>
                        <div className="text-center">
                            <div className="join bg-[#F1F3F8] mt-16 page_bg">
                                <button disabled={page === 0} onClick={() => setPage(page - 1)} className="join-item btn btn-sm">Prev</button>
                                {
                                    pageList.map((p, index) => <button key={index} className={`${page === index ? 'join-item btn btn-sm activePagination' : 'join-item btn btn-sm'} `} onClick={() => setPage(index)}>{index + 1}</button>)
                                }

                                <button disabled={pageNumber === page + 1} onClick={() => setPage(page + 1)} className="join-item btn btn-sm">Next</button>

                                <select onChange={handleLimit} defaultValue={limit} className="page_option px-2">
                                    <option className="join-item btn btn-sm " value={3}>3</option>
                                    <option className="join-item btn btn-sm" value={6}>6</option>
                                    <option className="join-item btn btn-sm" value={9}>9</option>
                                </select>
                            </div>
                            <div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Products;