import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })
    const handleMakeAdmin = (user) => {
        console.log(user);
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleDeleteUsers = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#F02757",
            cancelButtonColor: "#3D6ED7",
            confirmButtonText: "Yes, delete!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div >
            <div className="text-center mt-10 pb-10">
                <h1 className="text-3xl max-md:text-2xl max-sm:text-xl  font-bold text-[#F02757]">All Users</h1>
                <p className='w-1/2 mx-auto border-t-2 border-[#F02757] mt-4'></p>
            </div>
            <div className="flex justify-around bg-[#F02757] text-[#fff] text-lg p-5 w-full">
                <h4 className="w-1/12  max-sm:text-sm">Num</h4>
                <h4 className="w-1/3  max-sm:text-sm">Name</h4>
                <h4 className=" w-1/3  max-sm:text-sm">Email</h4>
                <h4 className="w-1/6 max-sm:text-sm">Role</h4>
                <h4 className=" max-sm:text-sm">Delete</h4>
            </div>

            {
                users.map((user, index) => <div key={user._id}>
                    <div className=" bg-[#F1F3F8] mt-2 px-8 max-sm:px-4 py-4  text-[#000]">
                        <div className="flex items-center justify-around">
                            <p className="w-1/12">{index + 1}</p>
                            <h3 className="max-sm:text-sm w-1/3">{user.name}</h3>
                            <h3 className="max-sm:text-sm w-1/3">{user.email}</h3>

                            <div className="w-1/6">
                                {
                                    user.role === 'admin' ? 'Admin' :

                                        <p onClick={() => handleMakeAdmin(user)} className='text-[#473dd7]  max-sm:text-xs font-bold cursor-pointer'>Make Admin</p>
                                }
                            </div>

                            <p onClick={() => handleDeleteUsers(user._id)} className='bg-[#F02757] p-2 rounded-lg'><RiDeleteBinLine className=' text-[#fff]  max-sm:text-xs'></RiDeleteBinLine></p>

                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AllUsers;