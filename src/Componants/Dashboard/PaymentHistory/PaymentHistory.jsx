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
                <h4 className="w-1/12">Num</h4>
                <h4 className="w-1/3">Email</h4>
                <h4 className="w-1/6">Total-Price</h4>
                {/* <div className="flex ">
                   
                </div> */}
                 <h4 className="w-1/4">Payment-Date</h4>
                    <h4 className="w-1/3">Transaction-Id</h4>
            </div>

            <div>
                {payments.map((product, index) => <div key={product._id}>
                    <div className=" bg-[#F1F3F8] mt-2 px-8 max-sm:px-4 py-2 text-[#000]">
                        <div className="flex items-center justify-between">
                            <p className="w-10">{index + 1}</p>
                            <h3 className="max-sm:text-sm w-1/3">{product.email}</h3>
                            <h3 className="max-sm:text-sm w-1/6">${product.price}</h3>
                            <div className="flex gap-3">
                                <p className=' w-1/2'>{product.date}</p>
                                <p className='w-1/2'>{product.transactionId}</p>
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