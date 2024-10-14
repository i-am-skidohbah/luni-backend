import React, { useState, useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import DbProduct from "../components/dashboard_product";
import DbCustomers from "../components/dashboard_customers";
import DbDisplay from "../components/dashboard_display";



function Dashbaord() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);

    }, []);

    const getTimeOfDay = () => {
        const hours = time.getHours();
        if (hours >= 0 && hours < 12) {
            return 'Morning';
        } else if (hours >= 12 && hours < 18) {
            return 'Afternoon';
        } else {
            return 'Evening';
        }
    };




    return (
        <div className="">
            <h3>Dashbaord</h3>
            <h5>Hello, Good {getTimeOfDay()}</h5>
            <h2>Current Time: {time.toLocaleTimeString()}</h2>

            <br />
            <DbDisplay />
            <br />


            <DbProduct />

            <br />

            <DbCustomers />

        </div>
    );
}


export default Dashbaord;