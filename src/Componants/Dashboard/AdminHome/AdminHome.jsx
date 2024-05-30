import { FaDollarSign, FaUsers } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { LiaCarSideSolid } from "react-icons/lia";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = [] } = useQuery({
        queryKey: ['admin-home-page'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-home-page');
            return res.data;
        }
    });
    
    return (
        <div>
            <h1 className="text-3xl mt-10 font-medium">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h1>
            <div className="">

                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 mt-10">
                    
                    <div className="flex items-center gap-3 justify-center bg-gradient-to-r from-[#8E008E] to-[#F02757] text-white px-5 py-4">
                        <div className="">
                            <FaDollarSign className="w-12 h-12"></FaDollarSign>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold">${stats.totalEarning}</h2>
                            <p className="text-xl font-normal">Revenue</p>
                        </div>

                    </div>

                    <div className="flex items-center gap-3 justify-center bg-gradient-to-r from-[#FF8E00] to-[#F02757] text-white px-5 py-4">
                        <div className="">
                            <FaUsers className="w-12 h-12"></FaUsers>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold">{stats.myUsers}</h2>
                            <div className="text-xl font-normal">Customers</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 justify-center bg-gradient-to-r from-[#FFFF00] to-[#F02757] text-white px-5 py-4">
                        <div className="">
                            <GrUserManager className="w-12 h-12"></GrUserManager>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold">{stats.allProducts}</h2>
                            <div className="text-xl font-normal">Products</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 justify-center bg-gradient-to-r from-[#008E00] to-[#F02757] text-white px-5 py-4">
                        <div className="">
                            <LiaCarSideSolid className="w-12 h-12"></LiaCarSideSolid>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold">{stats.allOrders}</h2>
                            <div className="text-xl font-normal">Orders</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 justify-center bg-gradient-to-r from-[#00C0C0] to-[#F02757] text-white px-5 py-4">
                        <div className="">
                            <GrUserManager className="w-12 h-12"></GrUserManager>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold">{stats.productReviews}</h2>
                            <div className="text-xl font-normal">Reviews</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 justify-center bg-gradient-to-r from-[#400098] to-[#F02757] text-white px-5 py-4">
                        <div className="">
                            <GrUserManager className="w-12 h-12"></GrUserManager>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold">{stats.categories}</h2>
                            <div className="text-xl font-normal">Category</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminHome;