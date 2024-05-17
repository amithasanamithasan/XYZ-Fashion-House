import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {


  const {createUser}= useContext(AuthContext);
  // console.log(createUser);  



const handelformRegister=e=>{

 
    const name= e.target.name.value;
    const email= e.target.email.value;
    const password=e.target.password.value;
    console.log(name,email,password);
// create User register useing usecontext

createUser(email,password)
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
      <h1 className="text-5xl font-bold">Register now!</h1>
     
    </div>
    <div className="card shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handelformRegister} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered"  />
        </div>
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
          <p className="font-light text-cyan-600 font-serif">
             You have already account? please got to Log in page</p>

          <Link to="/login"> 
          <button className="underline-offset-4  btn-link font-bold text-2xl">LOG-IN</button>
       
          </Link>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
    );
};

export default Register;