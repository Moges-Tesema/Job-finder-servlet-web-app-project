import React from "react";
import axios from "axios";
import { useState } from "react";

const [employees, setEmployees] = useState([]);
const Employees = () =>  () => {

    useEffect(() => {
        const fetchEmployees = async () => {
            try {    
                const response = await axios.get('http://localhost:5000/api/employees');
                setEmployees(response.data);
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        };

        fetchEmployees();
    }, []);

}
employees();
export default employees;
