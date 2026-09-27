import React,{useState,useContext,useEffect} from "react";
import API from "../services/api-service";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
// import {TokenContext} from '../index';
export default function Auth(){
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [isLoginView,setIsLoginView]=useState(true);

    const [token,setToken] = useCookies("mr-token");
    const navigate = useNavigate();
    
    useEffect(()=>{
        // console.log('token',token['mr-token']);
        if(token['mr-token']) navigate('/movies');
        
    },[token])
    
    const loginUser=()=>{
        const getToken =async ()=>{
            const resp=await API.loginUser({username,password});
            if(resp) {
                setToken("mr-token",resp.token);
                navigate('/movies');
            }

        }
        getToken();
    }
    const registerUser=()=>{
        const register =async ()=>{
            const resp=await API.registerUser({username,password});
            if(resp) loginUser();
            

        }
        register();
    }


//     const loginUser = async () => {
//     try {
//         const resp = await API.loginUser({ username, password });

//         if (resp && resp.token) {
//             setToken("mr-token", resp.token, {
//                 path: "/",
//                 domain: "localhost"
//             });
//             navigate("/movies");
//         }
//     } catch (error) {
//         console.error("Login failed:", error);
//     }
// };

//     const registerUser = async () => {
//     try {
//         const resp = await API.registerUser({ username, password });

//         if (resp) {
//             await loginUser();
//         }
//     } catch (error) {
//         console.error("Registration failed:", error);
//     }
// };
    return(
        <div className="p-12">
            {isLoginView?<h1>Login</h1>:<h1>Register</h1>}
            <div className="grid grid-cols-2 gap-2 text-gray-500">
                <label htmlFor='username'>Username</label>
                <input id='username' type='text' placeholder="Username" value={username}
                onChange={(evt)=>setUsername(evt.target.value)}/>
                
                <label htmlFor='password'>Password</label>
                <input id='password' type='password' placeholder="Password" value={password}
                onChange={(evt)=>setPassword(evt.target.value)}/>
                {isLoginView?
                <button onClick={()=>loginUser()}>Login</button>:
                <button onClick={()=>registerUser()}>Register</button>}

                
                        
            </div>
            {isLoginView?
                <p onClick={()=>setIsLoginView(false)}>you dont have an account?Register here</p>:
                <p onClick={()=>setIsLoginView(true)}>already have an account?Login here</p>}
        </div>
)
}