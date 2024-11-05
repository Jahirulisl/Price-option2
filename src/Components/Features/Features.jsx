import propTypes from 'prop-types';
// import {AiFillCheckCircle} from "react-icons/ai";
const Features = ({feature})=> {
    return (


        
        <div>
           <p className='flex items-center m-4'>{feature}</p>
        </div>
    );
};

Features.propTypes ={
    feature:propTypes.string
}
export default Features; 