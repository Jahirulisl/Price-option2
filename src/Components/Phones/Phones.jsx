import axios from "axios";
import { useEffect, useState } from "react";


const Phones = () => {
    const [phones,setPhones]=useState([]);

    useEffect( () =>{

        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res =>res.json())
        // .then(data=>setPhones(data.data))
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
      });


    },[])

    
    return (
        <div>
            <h2 className="text-5xl">phones:{phones.length}</h2>
        </div>
    );
};

export default Phones;