import { NavLink } from "react-router-dom";
import img1 from './images/model.png';

const Header = () => {
  const navlinks = <>
  <li><NavLink to ="/home"> Home</NavLink></li>
   <li><NavLink to="/shop">Shop</NavLink></li>
   <li><NavLink to="/contact">Contact</NavLink></li>
   <li><NavLink to="/login">Login</NavLink></li>
   <li><NavLink to="/register">Register</NavLink></li>
  </>


   return (
    <header className="bg-amber-200 py-1 border-r-orange-600 rounded-lg  ">
       <div>
        <nav className="p-3 rounded-lg ">
<div className="navbar bg-slate-80 hover:[#00000] bg-pink-400 rounded-lg ">
   <div className=" flex-1 ">
     <div className="dropdown ">
       
       <ul  className="menu menu-sm dropdown-content mt-3  p-2 
       text-base  shadow bg-base-100 rounded-box w-52">
       
  {navlinks}
         
       </ul>

     </div>
    <p className="btn btn-accent border-t-pink-600 normal-case 
    text-xl md:text-1xl lg:text-4xl text-fuchsia-600">XYZ Fashion House</p>
   </div>
   <div className="navbar-center hidden lg:flex">
     <ul className="menu text-base menu-horizontal px-1">
        {navlinks}

      
     </ul>
   </div>
  
     
     <div className="dropdown  menu-dropdown-toggle dropdown-end ">
       <label  className="btn btn-accent ">
         <div className="w-60 ">
         <button className="btn btn-link ">PLease Log_in and Register</button>
         </div>
       </label>
       <ul className="menu menu-sm dropdown-content mt-3  p-2 shadow-sky-700  ">
         <li>
           <a className="justify-between">
             Profile
             <span className="badge">New</span>
           </a>
         </li>
         <li><a>Register</a></li>
         <li><a>Login</a></li>
         <li><a>Logout</a></li>
       </ul>
     </div>
   </div>


</nav>



<div className="flex flex-col md:flex-row justify-between items-center  p-11">
            <div className="space-y-3 ">
                <h1 className=" text-7xl uppercase p-6" >
                    <span className="text-[#FABE4C]">Be the Penguins</span>of Winter
                </h1>
                <p className="p-7 text-2xl font-serif text-green-700">Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry.</p>
       <button className=" py-4 px-6 bg-gradient-to-r
        from-green-400 to-blue-500 hover:from-pink-500
         hover:to-yellow-500 rounded-xl uppercase
          text-white font-medium">
                       
         BUY NOW</button>
  </div>
          
    </div>
   </div>
      <div className=" top-10 px-96"    >
                <div className=" text-center  ">
                <img src={img1} alt="" />
                </div>
                </div>
       </header>
   );
};

export default Header;