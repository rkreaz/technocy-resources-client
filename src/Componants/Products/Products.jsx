import { Helmet } from "react-helmet-async";
import Product from "../Product/Product";
import Category from "../Category/Category";
import useProducts from "../Hooks/useProducts";

const Products = () => {
    const [allProducts] = useProducts();
    // const [allProducts, setAllProducts] = useState([]);
    // useEffect(() => {
    //     fetch('/products.json')
    //         .then(res => res.json())
    //         .then(data => setAllProducts(data))
    // }, [])
    return (
        <div className="theme">
            <div className="max-w-6xl mx-auto">
                <Helmet>
                    <title>Technocy | Products</title>
                </Helmet>
                <div className="w-full flex pt-20">
                    <div className="w-3/12 text-center pt-20 border theme_text">
                          <Category></Category>
                    </div>

                    <div className='w-9/12 grid lg:grid-cols-3 gap-5  p-5 rounded-xl'>
                        {
                            allProducts.map(product => <Product key={product._id} product={product}></Product>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;