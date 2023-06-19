import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Register = () => {

    const { providerLogin, createUser,loading } = useContext(AuthContext);
    if(loading){
      return <div className='text-white'>loading</div>
    }
    const googleProvider = new GoogleAuthProvider();
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(firstName, lastName, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
            })
            .catch(error => console.error(error))
    }
    const handleGoogleSignIn = () => {
        return providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }
    return (

        <div className='min-h-screen flex justify-center items-center'>
            <div className="hero w-[400px]  min-h-[600px]  bg-white rounded-md">
                <div className="card  w-full  ">
                    <div className="card-body  flex justify-center items-center">
                        <div>
                            <h1 className='text-center text-3xl font-semibold'>Register</h1>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input type="text" name='firstName' required placeholder="first name" className="input input-bordered w-64" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text" name='lastName' required placeholder="last name" className="input input-bordered w-64" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="email" className="input input-bordered w-64" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" required name='password' placeholder="password" className="input input-bordered w-64" />
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary px-10">Register</button>
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <div>
                            <button onClick={handleGoogleSignIn} className='btn btn-accent px-14'>Login with google</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Register;