import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const {login} = useContext(AuthContext);

    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';
    const handleSubmit=(event)=>{
           event.preventDefault();
           const form=event.target;
           const email=form.email.value;
           const password=form.password.value;
           login(email,password)
           .then(result => {
            const user = result.user;
            console.log(user)
            form.reset();
            navigate(from,{replace:true});
            
        })
        .catch(error => console.error(error))

    }
    return (
        <div>
             <div className='min-h-screen flex justify-center items-center'>
           <div className="hero w-[400px]  min-h-[600px]  bg-white rounded-md">
            <div className="card  w-full  ">
                <div className="card-body  flex justify-center items-center">
                    <div>
                        <h1 className='text-center text-3xl font-semibold'>Login</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered w-64" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered w-64" />
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary px-10">Login</button>
                    </div>
                    </form>
                </div>
            </div>

        </div>
       </div>

        </div>
    );
};

export default Login;