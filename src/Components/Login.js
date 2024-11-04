import React, {useState} from 'react';
import Header from './Header';

const Login = () => {

    const [isSignInForm, setSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm);
    }

  return (
    <div className="overflow-auto bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/IN-en-20241028-TRIFECTA-perspective_bce9a321-39cb-4cce-8ba6-02dab4c72e53_medium.jpg')] h-screen flex flex-col items-center justify-start">
      <Header />
      <div className="flex items-center justify-center">
        <div className="bg-[rgba(0,0,0,0.7)] px-10 py-16 rounded w-[450px] text-white flex flex-col items-start justify-center gap-6">
          <h1 className="text-3xl text-white font-bold w-full">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
          <form className="flex flex-col gap-5 w-full bg-[rgba(0,0,0,0.7)]">
          {!isSignInForm && <input
              type="text"
              placeholder="Enter Full Name.."
              className="px-6 py-4 rounded bg-[rgba(0,0,0,0.7)] border-gray-500 border"
            />}
            <input
              type="text"
              placeholder="Enter email.."
              className="px-6 py-4 rounded bg-[rgba(0,0,0,0.7)] border-gray-500 border"
            />
            <input
              type="password"
              placeholder="Enter password.."
              className="px-6 py-4 rounded bg-[rgba(0,0,0,0.7)] border-gray-500 border"
            />
            <button type="submit" className="bg-red-500 px-3 py-2 rounded">
                {isSignInForm ? 'Sign In' : 'Sign Up'}
            </button>
            {/* Adjust this section to center "OR" */}
            <p className="text-xl text-gray-500 text-center">OR</p>
            <button className="px-3 py-2 rounded bg-[rgba(128,128,128,0.4)]">
              Use a Sign-in Code
            </button>
            <p className="text-xl text-white text-center">Forget Password?</p>
            <div className='flex gap-2'>
                <input type='checkbox' className='text-xl'/>
                <p className="text-xl text-white text-center">Remember Me</p>
            </div>
            {isSignInForm ? 
                <div className='flex gap-2'>
                    <span className='text-xl text-gray-500'>New to Netflix?</span>
                    <p className="text-xl text-white text-center cursor-pointer" onClick={toggleSignInForm}>Sign Up Now</p> 
                </div>
             :  <div className='flex gap-2'>
                    <span className='text-xl text-gray-500'>Already Registered?</span>
                    <p className="text-xl text-white text-center cursor-pointer" onClick={toggleSignInForm}>Sign In Now..</p> 
                </div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
