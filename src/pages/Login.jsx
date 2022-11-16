import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const { logIn} = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await logIn(email, password);
            navigate('/')
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    }
  return (
    <>
        <div className='w-full h-screen'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f669a8f4-de1e-49d7-bb56-c9bd1f4a9069/fbe6b535-b521-4096-929b-5bf1d6a7f700/NG-en-20221031-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" className='hidden sm:block absolute w-full h-full object-cover' />
            <div className=" bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
            <div className="fixed w-full px-4 py-24 z-50">
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold'>Sign In</h1>
                        {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null}
                        <form className='w-full flex flex-col py-4' onSubmit={handleSubmit}>
                            <input 
                                className='p-3 my-2 bg-gray-700 rounded' 
                                type="email" placeholder='Email' 
                                autoComplete='email'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input 
                                className='p-3 my-2 bg-gray-700 rounded' 
                                type="password" 
                                placeholder='Password' 
                                autoComplete='current-password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                            <div className='flex justify-between items-center text-sm text-gray-600'>
                                <p><input className='mr-2' type="checkbox" />Remember me</p>
                                <p>Need Help?</p>
                            </div>
                            <p className='py-8'>
                                <span className='text-gray-600'>New to Movieflix?</span> {' '}
                                <Link to='/login'>Sign Up</Link> 
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login