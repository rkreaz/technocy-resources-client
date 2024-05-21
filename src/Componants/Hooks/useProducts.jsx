import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = (limit, page) => {
    const axiosPublic = useAxiosPublic();
    const {data: allProducts =[], isPending: loadingAllProduct, refetch} = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/products?limit=${limit}&page=${page}`)
            return res.data;
        }
    })
    return [allProducts, loadingAllProduct, refetch]
};

export default useProducts;