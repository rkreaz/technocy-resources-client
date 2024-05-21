import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSingleCategory = (category) => {
    const axiosPublic = useAxiosPublic();
    const { data: singleCategory = [], isPending: isLoading, refetch } = useQuery({
        queryKey: ['singleCategory'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/products/category/${category}`)
            return res.data;
        }
    })
    return [singleCategory, isLoading, refetch]
};

export default useSingleCategory;