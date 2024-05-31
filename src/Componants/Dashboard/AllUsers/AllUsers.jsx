import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
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
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
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
            {/* <h1 className="text-3xl">Admin All Users: {users.length}</h1> */}

            <div className="flex justify-around bg-[#F02757] text-[#fff] text-lg p-5 mt-10 w-full">
                <h4 className="w-1/12  max-sm:text-sm">Num</h4>
                <h4 className="w-1/5  max-sm:text-sm">Name</h4>
                <h4 className=" w-2/6  max-sm:text-sm">Email</h4>
                <h4 className="  max-sm:text-sm">Role</h4>
                <h4 className=" max-sm:text-sm">Delete</h4>
            </div>

            {
                users.map((user, index) => <div key={user._id}>
                    <div className=" bg-[#F1F3F8] mt-2 px-8 max-sm:px-4 py-4  text-[#000]">
                        <div className="flex items-center justify-around">
                            <p className="w-1/12">{index + 1}</p>
                            <h3 className="max-sm:text-sm w-1/4">{user.name}</h3>
                            <h3 className="max-sm:text-sm w-1/2">{user.email}</h3>

                           {
                            user.role === 'admin' ? 'Admin' :  <p onClick={() => handleMakeAdmin(user)} className='bg-[#3D6ED7] p-2 rounded-lg  max-sm:text- max-sm:text-xs'>  <FaUsers className=' text-[#fff]  max-sm:text-xs'></FaUsers></p>
                           }

                            <p onClick={() => handleDeleteUsers(user._id)} className='bg-[#F02757] p-2 rounded-lg '>  <RiDeleteBinLine className=' text-[#fff]  max-sm:text-xs'></RiDeleteBinLine></p>

                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AllUsers;