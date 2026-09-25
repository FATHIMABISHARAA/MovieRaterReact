import React,{useState} from "react";
import API from "../services/api-service";
export default function Auth(){
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const loginUser=()=>{
        const getToken =async ()=>{
            const resp=await API.loginUser({username,password});
            if(resp) console.log(resp.token);
            

        }
        getToken();
    }
    return(
        <div className="grid grid-cols-2 gap-2 text-gray-500">
            <label htmlFor='username'>Username</label>
            <input id='username' type='text' placeholder="Username" value={username}
            onChange={(evt)=>setUsername(evt.target.value)}/>
            
            <label htmlFor='password'>Password</label>
            <input id='password' type='password' placeholder="Password" value={password}
            onChange={(evt)=>setPassword(evt.target.value)}/>
            
            <button onClick={()=>loginUser()}>Login</button>

            
                    
        </div>
)
}