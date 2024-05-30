import PropTypes from "prop-types";
const HomePageTitle = ({Heading}) => {
    return (
        <div className="text-center mt-10 mb-14">
               <h1 className="text-3xl max-sm:text-sm font-bold mt-14 text-[#000]">{Heading}</h1>
               <p className='w-1/4 mx-auto border-t-2 border-[#000] mt-4'></p>
        </div>
    );
};
HomePageTitle.propTypes = {
    Heading: PropTypes.string
};
export default HomePageTitle;