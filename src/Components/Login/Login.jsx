
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const {singInUsers,singInWithGoogle}= useContext(AuthContext);
//useNavigate go to rediract shop =>or any pages
  const navigate = useNavigate();


  const [success, setSuccess] = useState();
  
  

  const  handelformlogin = e =>{


   e.preventDefault();
   
    const email =e.target.email.value;
    const password=e.target.password.value;

    console.log(email,password);
   singInUsers(email,password)
   .then(result=>{
    console.log(result.user);
    // reset email and password  login page
    e.target.reset();
    setSuccess( result.user);
    alert('LOGIN SUCCESSFULLY')
        toast("USER LOG_IN SUCCESSFULLY")
    // create login page got to shop page useNavigate
    navigate('/shop');

    })   
.catch(error=>{
  console.log(error);
})
   
}
  const  handelGoogle=()=>{
    singInWithGoogle()
    .then(result=>{
      console.log(result.user)
    })
     .catch(error=>{
    console.log(error)
    })
   }


  // const handleGoogleLogin = async () => {
  //   setError(null);  // Clear previous error

  //   try {
  //     const result = await singinWithgoogle();
  //     console.log(result.user);
  //     setSuccess("User logged in successfully");
  //     navigate('/shop');
  //   } catch (error) {
  //     console.log(error.message);
  //     setError(error.message);
  //   }



    return (
        <div className="card-body">

      
        <div className="hero  min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handelformlogin} className="card-body">
    
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered"  />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <button className="btn btn-primary ">Login</button>
        <ToastContainer />
      </form>
      <div className="text-center ">
          <p className="font-light text-cyan-600 font-serif">
             Are you new users? please got to register page</p>
          <Link to="/register"> 
          <button className="underline-offset-4  btn-link font-bold text-2xl"> register</button>
       
          </Link>
          <p ><button onClick={handelGoogle} className="btn btn-ghost">Google</button></p>
        </div>
       
      {
        success && <p className="text-1xl font-serif text-lime-800 text-center" >USER LOG_IN SUCCESSFULLY</p>
      }
       
    </div>
  </div>
</div>
</div>
    );
};

export default Login;