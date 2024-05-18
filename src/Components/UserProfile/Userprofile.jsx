import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Userprofile = () => {
    const {user} =useContext(AuthContext);

    return (
        <div>
            <h1 className="text-3xl text-amber-600 font-bold">This is my User-Profile Name:
            <br />{user.email}</h1>
        </div>
    );
};

export default Userprofile;