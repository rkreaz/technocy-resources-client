import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllCategory = () => {
    const axiosPublic = useAxiosPublic();
    const { data: allCategory = [], refetch} = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/category`)
            return res.data;
        }
    })
    return [allCategory, refetch]
};

export default useAllCategory;