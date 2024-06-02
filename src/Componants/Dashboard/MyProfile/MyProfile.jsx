import useAuth from "../../Hooks/useAuth";

const MyProfile = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1 className="lg:text-4xl max-sm:text-xl lg:mt-10 max-sm:mt-5 ml-6 font-bold text-center text-[#F02757] ">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h1>

            <div className="flex  items-center justify-around mt-10 bg-[#F1F3F8] px-5">
                <div className="lg:space-y-5 max-sm:space-y-2">
                    <h1 className="lg:text-3xl max-sm:text-xl font-semibold">{user?.displayName}</h1>
                    <p className="lg:text-lg font-medium">{user?.email}</p>
                    <p className="lg:text-lg font-medium">{user?.metadata?.creationTime}</p>
                    <p className="lg:text-lg font-medium">{user?.metadata?.lastSignInTime}</p>

                </div>
                <div className="avatar w-1/3  py-20 rounded-lg">
                    <div className="lg:w-40 ring ring-[#F02757] mx-auto">
                        <img src={user?.photoURL} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;