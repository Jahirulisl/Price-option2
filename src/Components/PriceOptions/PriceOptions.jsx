// import React from 'react';
 import PriceOption from '../PriceOption/PriceOption';
const PriceOptions = () => {
    const priceOptions = [
        
         { id: 1, name: "Basic", "price": 29.99, features: ["Access to gym during staffed hours", "Use of cardio and weight machines", "Locker room access", "1 free personal training session"] },
         { id: 2, name: "Standard", price: 49.99, features: ["24/7 gym access", "Unlimited use of cardio and weight machines", "Access to all group classes", "Locker room with showers", "2 free personal training sessions"] },
         { id: 3, name: "Premium", price: 79.99, features: ["24/7 gym access", "Unlimited use of cardio and weight machines", "Access to all group classes", "Locker room with showers and sauna", "5 free personal training sessions", "Access to premium equipment"] },
         { id: 4, name: "VIP", price: 99.99, features: ["24/7 gym access", "Unlimited use of cardio and weight machines", "All group and specialty classes included", "Private locker room with spa amenities", "10 free personal training sessions", "Access to exclusive VIP lounge", "Dedicated personal trainer"] },
         { id: 5, name: "Couples Membership", price: 89.99, features: ["24/7 gym access for two members", "Access to group classes", "2 personal training sessions per month", "Locker room with sauna", "Discounts on massages and wellness services"] },
         { id: 6, name: "Family Plan", price: 129.99, features: ["24/7 gym access for up to 4 family members", "Unlimited use of gym equipment", "Access to family-friendly classes", "Child care included during workouts", "Locker room access with family facilities"] },
         { id: 7, name: "Student Membership", price: 19.99, features: ["Access to gym during staffed hours", "Discounted group classes", "Access to cardio and weight machines", "Locker room access", "1 free fitness assessment"] },
         { id: 8, name: "Senior Membership", price: 24.99, features: ["Access to gym during staffed hours", "Low-impact and senior-friendly classes", "Access to cardio and weight machines", "Locker room access", "Monthly wellness check-ins"] },
         { id: 9, name: "Corporate Membership", price: 69.99, features: ["24/7 gym access", "Access to all group classes", "Corporate wellness seminars", "Discounted rates for employees", "Locker room with showers and sauna", "4 free personal training sessions"] },
         
      ];
      
    return (
        <div>
            <h2>Best price in bangladesh</h2>
         <div className='grid md:grid-cols-3 gap-6 border mx-4 '>
              {
              priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
              }
         </div>
           
        </div>
    
    );
};

export default PriceOptions;