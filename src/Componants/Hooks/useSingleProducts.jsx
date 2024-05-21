import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const  useSingleProducts = (id) => {
    const axiosPublic = useAxiosPublic();
    const {data: singleProduct =[], isPending: loadingSingleProduct} = useQuery({
        queryKey: ['singleProduct'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/products/${id}`)
            return res.data;
        }
    })
    return [singleProduct, loadingSingleProduct]
};

export default useSingleProducts;