import { useState } from 'react';
import {register} from '../api/register.api';


const Register = ()=>
{

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    
    const HandleRegister = async () =>
    {
        console.log('Registration Detail',name,email,phone);

       let response = await register(
            {
                name:name,
                email:email,
                phone:phone
            }
        );

        console.log('Response Is ',response, ' and status code is ', response.status);
    }

    return (
        <div className="register">
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" />
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="text" placeholder="Email" />
            <input value={phone} onChange={(e)=> setPhone(e.target.value)} type="phone" placeholder="Phone Number" />
            <button className="submitBtn" onClick={HandleRegister}>Submit</button>
        </div>
    );
}
export default Register;