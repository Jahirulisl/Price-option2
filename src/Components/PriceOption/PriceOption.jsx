import Features from '../Features/Features';
import propTypes from 'prop-types';

const PriceOption = ({option}) => {
    const{name,price,features} = option;
    return (
        <div className='flex flex-col bg-blue-300 rounded-lg p-2 '>
            <h2 className='text-center'>
                <span className='text-2xl '>{price}</span>
                <span className='text-1xl'>/mon</span>
            </h2>
            <h4 className='text-3xl font-bold text-center'>{name}</h4>
            <div className='pl-6 flex-grow'>
               {
                features.map((feature,index) => <Features key={index} feature={feature}></Features>)
              }
            </div>
            <button className='mt-12 bg-green-600 w-full py-4 rounded-lg font-bold hover:bg-yellow-800 text-white'>Bay Now</button>
           

        </div>
    );
};
PriceOption.propTypes ={
    option:propTypes.object
}
export default PriceOption;
