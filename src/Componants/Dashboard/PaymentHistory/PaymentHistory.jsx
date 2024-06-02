import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <div className="text-center mt-10 pb-10">
                <h1 className="text-3xl max-md:text-2xl max-sm:text-xl  font-bold text-[#F02757]">My Order Products</h1>
                <p className='w-1/2 mx-auto border-t-2 border-[#F02757] mt-4'></p>
            </div>

            <div className="flex justify-between bg-[#F02757] text-[#fff] text-lg p-5 w-full">
                <h4 className="w-1/12 max-sm:text-sm">Num</h4>
                <h4 className="w-1/3 max-sm:text-sm ml-5">Email</h4>
                <h4 className="w-1/3 max-sm:text-sm">Total-Price</h4>

                <div className="flex gap-5 w-full">
                    <h4 className="w-1/3 max-sm:text-sm">Payment-Date</h4>
                    <h4 className="w-1/2 max-sm:text-sm">Transaction-Id</h4>
                    <h4 className="w-1/12 max-sm:text-sm mr-3">Status</h4>
                </div>

            </div>

            <div className="">
                {payments.map((product, index) => <div key={product._id}>
                    <div className=" bg-[#F1F3F8] mt-2 max-sm:px-4 py-2 text-[#000] px-5">
                        <div className="flex items-center justify-between">
                            <p className="w-10">{index + 1}</p>
                            <h3 className="text-sm max-sm:text-sm lg:w-1/3 max-sm:break-all max-md:break-all">{product.email}</h3>
                            <h3 className=" text-sm max-sm:text-sm lg:w-1/3 max-sm:break-all max-md:break-all ml-8 text-[#473dd7] font-semibold">${product.price}</h3>

                            <div className="flex gap-10 w-full">
                                <p className='text-sm max-sm:text-sm lg:w-1/2 max-sm:break-all max-md:break-all'>{product.date}</p>
                                <p className='text-sm max-sm:text-sm lg:w-1/2 max-sm:break-all max-md:break-all'>{product.transactionId}</p>
                                <p className='text-sm max-sm:text-sm lg:w-1/2 max-sm:break-all max-md:break-all text-[#473dd7] font-semibold'>{product.status}</p>
                            </div>

                        </div>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default PaymentHistory;