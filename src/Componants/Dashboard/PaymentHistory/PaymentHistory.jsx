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
    console.log(payments);
    return (
        <div>
            <div className="flex justify-between bg-[#F02757] text-[#fff] text-lg p-5 mt-10 w-full">
                <h4 className="w-1/12 max-sm:text-sm">Num</h4>
                <h4 className="w-1/3 max-sm:text-sm">Email</h4>
                <h4 className="w-1/6 max-sm:text-sm">Total-Price</h4>
                {/* <div className="flex ">
                   
                </div> */}
                 <h4 className="w-1/4 max-sm:text-sm">Payment-Date</h4>
                    <h4 className="w-1/3 max-sm:text-sm">Transaction-Id</h4>
            </div>

            <div className="">
                {payments.map((product, index) => <div key={product._id}>
                    <div className=" bg-[#F1F3F8] mt-2 max-sm:px-4 py-2 text-[#000] px-5">
                        <div className="flex items-center justify-between">
                            <p className="w-10">{index + 1}</p>
                            <h3 className="max-sm:text-sm lg:w-1/3 max-sm:break-all max-md:break-all">{product.email}</h3>
                            <h3 className="max-sm:text-sm lg:w-1/6 max-sm:break-all max-md:break-all">${product.price}</h3>
                            <div className="flex gap-3">
                                <p className='max-sm:text-sm lg:w-1/3 max-sm:break-all max-md:break-all'>{product.date}</p>
                                <p className='max-sm:text-sm lg:w-1/3 max-sm:break-all max-md:break-all'>{product.transactionId}</p>
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