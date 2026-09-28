import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const useFetch =(url)=>{
    const API_URL = 'http://127.0.0.1:8000';

    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(null);
    const [error,setError]=useState(null);
    const [cookie] = useCookies("mr-token");

    
    useEffect(()=>{
        const fetchData = async() =>{
            setLoading(true);
            setError(null);

            await new Promise(resolve =>setTimeout(resolve,3000));
            try{
                const response = await fetch(
            `${API_URL}${url}`,
                {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Token ${cookie['mr-token']} `,
                        }                    }
                );

                console.log('Status:', response.status);

                if (!response.ok) {
                    throw new Error('Error getting data')
                }
                const result = await response.json();
                setData(result);


            }catch(err){
                setError(err.message)
            }finally{
                setLoading(false);
            }
            
        
            }
        fetchData();
    }, [url]);
        
    return {data,loading,error}
}
export default useFetch;


