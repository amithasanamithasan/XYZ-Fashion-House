
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";


const Login = () => {
  const {singInUsers}= useContext(AuthContext);

  const  handelformlogin = e =>{


   e.preventDefault();
   
    const email =e.target.email.value;
    const password=e.target.password.value;
    console.log(email,password);
   singInUsers(email,password)
   .then(result=>{
    console.log(result.user);
    })   
.catch(error=>{
  console.log(error);
})
  }


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
        <div className="text-center ">
          <p className="font-light text-cyan-600 font-serif"> Are you new users? please got to register page</p><Link to="/register"> 
          <button className="underline-offset-4  btn-link font-bold text-2xl"> register</button>
       
          </Link>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
    );
};

export default Login;