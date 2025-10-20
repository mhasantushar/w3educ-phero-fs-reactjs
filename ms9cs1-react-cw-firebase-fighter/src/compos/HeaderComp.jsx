import { Link, NavLink } from "react-router";
import logo from "../assets/img/firebase-logo.png";
import WrapperComp from "./WrapperComp";
// import MyLinkComp from "./MyLinkComp";
import { use } from "react";
// import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { ClockLoader } from "react-spinners";
import MyLinkComp from "./MyLinkComp";

const HeaderComp = () => {
  // const result = useContext(AuthContext);
  // const { user, signoutUserFunc, setUser, loading, setLoading } =
  //   use(AuthContext);
  // console.log(user);

  // const handleSignout = () => {
  //   signoutUserFunc()
  //     .then(() => {
  //       toast.success("Signout successful");
  //       setUser(null);
  //     })
  //     .catch((e) => {
  //       toast.error(e.message);
  //     });
  // };

  return (
    <div className="bg-slate-100f py-2 border-b border-b-slate-300">
      <WrapperComp className="flex justify-between items-center">
        <figure>
          <img src={logo} className="w-[55px]" />
        </figure>
        <ul className="flex items-center gap-2">
          {/* <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-purple-500 font-semibold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-purple-500 font-semibold" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "text-purple-500 font-semibold" : ""
              }
            >
              Profile
            </NavLink>
          </li> */}

          <li>
            <MyLinkComp to={"/"}>Home</MyLinkComp>
          </li>
          <li>
            <MyLinkComp to={"/about"}>About</MyLinkComp>
          </li>

          <li>
            <MyLinkComp to={"/profile"}>Profile</MyLinkComp>
          </li>
        </ul>

        <button className="bg-purple-500 px-4 py-2 rounded-md font-semibold text-white cursor-pointer">
          <Link to={"/signin"}>Sign in</Link>
        </button>
      </WrapperComp>
    </div>
  );
};

export default HeaderComp;
