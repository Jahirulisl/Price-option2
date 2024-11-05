import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';
import { Audio } from 'react-loader-spinner';



const Phones = () => {
    const [phones,setPhones]=useState([]);
    const [loading,setLoading] =useState(true);
    useEffect( () =>{


      // fetch sistem lode data 

        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res =>res.json())
        // .then(data=>setPhones(data.data))

        // axios sestem lode data 
      axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')

      .then(data => {
        const phoneData = data.data.data;
        const phonesWithFakeData = phoneData.map(phone =>{
           const obj ={
            name:phone.phone_name,
            price:parseInt(phone.slug.split('_')[1])
           }
        })
        console.log(phonesWithFakeData);
        setPhones(phonesWithFakeData);
        setLoading(false);
      });


    },[])

    
    return (

       
        <div className="bg-gray-300">

   {loading &&<Audio
   height="80"
   width="80"
   radius="9"
   color="green"
   ariaLabel="three-dots-loading"
   wrapperStyle
   wrapperClass
  />}
            <h2 className="text-5xl">phones:{phones.length}</h2>

           <BarChart width={1200} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d7" />
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>



        </div>
    );
};

export default Phones;