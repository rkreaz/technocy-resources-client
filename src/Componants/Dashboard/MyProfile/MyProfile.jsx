import useAuth from "../../Hooks/useAuth";

const MyProfile = () => {
    const { user } = useAuth();
    console.log(user);
    return (
        <div>
            <h1 className="text-4xl mt-10 ml-6 font-bold text-center text-[#F02757]">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h1>

            <div className="flex  items-center justify-around mt-10 bg-[#F1F3F8]">
                <div className="avatar w-1/3  py-20 rounded-lg">
                    <div className="w-40 ring ring-[#F02757] mx-auto">
                        <img src={user?.photoURL} />
                    </div>
                </div>

                <div className="space-y-5">
                    <h1 className="text-3xl font-semibold">{user?.displayName}</h1>
                    <p className="text-lg font-medium">{user?.email}</p>
                    <p className="text-lg font-medium">{user?.metadata?.creationTime}</p>
                    <p className="text-lg font-medium">{user?.metadata?.lastSignInTime}</p>

                </div>

            </div>
        </div>
    );
};

export default MyProfile;