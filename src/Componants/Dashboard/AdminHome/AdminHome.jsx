import { FaDollarSign, FaUsers } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { LiaCarSideSolid } from "react-icons/lia";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import './adminHome.css'

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,  PieChart, Pie, Legend } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink',];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


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

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats');
            return res.data;
        }
    });
    console.log(chartData);
    const categoryData = chartData.map(data => {
        return {name: data.category, value: data.totalQuantity}
    })
    console.log(categoryData);

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <div className="bg-[#F1F3F8] lg:p-10">
            <h1 className="text-3xl font-medium text-[#F02757]">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h1>
            <div className="">

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10">

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

                <div className="flex justify-between items-center">
                    <div className="w-1/2">
                        <BarChart
                            width={500}
                            height={300}
                            data={chartData}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Bar dataKey="totalQuantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % 9]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </div>

                    <div>
                        
                            <PieChart width={400} height={400}>
                                <Pie
                                    data={categoryData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Legend></Legend>
                            </PieChart>
                     
                    </div>
                </div>
            </div>
        </div >
    );
};

AdminHome.propTypes = {
    fill: PropTypes.object,
    x: PropTypes.object,
    y: PropTypes.object,
    width: PropTypes.object,
    height: PropTypes.object
};
export default AdminHome;