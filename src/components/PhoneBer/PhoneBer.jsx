import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const PhoneBer = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const loaddedData = data.data.data;
            // console.log(loaddedData);
            const phoneData = loaddedData?.map(phone => {
                const parts = phone.slug.split("-");
                const price = parts[1];
                const phoneInfo = {
                    name: phone.phone_name,
                    price: price
                }
                return phoneInfo;
            })
            setPhones(phoneData);
            console.log(phoneData);
        })
    }, [])

    return (
        <div className='my-8 mx-24'>
            <BarChart width={800} height={300} data={phones} >
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey={"name"} />
                <YAxis />
                <Tooltip />
                <Legend />
            </BarChart>
        </div>
    );
};

export default PhoneBer;