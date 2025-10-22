import { Link, NavLink, useNavigate } from "react-router";
import { MoonLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useContext } from "react";
import logo from "../assets/img/firebase-logo.png";
import MyLinkComp from "./MyLinkComp";
import WrapperComp from "./WrapperComp";
import AuthContext from "../context/AuthContext";

const HeaderComp = () => {
  const navigate = useNavigate();
  const { loggedInUser, setLoggedInUser, doSignOut, pageIsLoading } =
    useContext(AuthContext);
  // console.log(loggedInUser);

  const handleUserSignOut = () => {
    // signOut(fbaseAuth) //went to context
    doSignOut()
      .then(() => {
        toast.success("User signed off.");
        setLoggedInUser(null);
        navigate("/signin");
      })
      .catch((error) => {
        toast.error(
          `Sign out attempt failed! ${error.code} - ${error.message}.`
        );
      });
  };

  return (
    <div className="bg-slate-100f py-2 border-b border-b-slate-300">
      <WrapperComp className="flex justify-between items-center">
        <figure>
          <img src={logo} className="w-18 h-18" />
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

          {loggedInUser && (
            <li>
              <MyLinkComp to={"/profile"}>Profile</MyLinkComp>
            </li>
          )}
        </ul>

        {pageIsLoading ? (
          <MoonLoader color="#6b3fd8" size={36} />
        ) : loggedInUser ? (
          <div className="space-y-3 text-center">
            <div className="dropdown dropdown-hover dropdown-end">
              <div tabIndex={0} role="button" className="m-1 btn btn-link">
                <img
                  src={
                    loggedInUser?.photoURL ||
                    "https://i.ibb.co/1GsJNNFs/App-Error.png"
                  }
                  className="mx-auto rounded-full w-12 h-12"
                  alt="User's Photo"
                />
              </div>
              <div
                tabIndex="-1"
                className="z-1 bg-base-100 shadow-md p-2 rounded-box w-52 dropdown-content menu"
              >
                <h2 className="font-semibold text-xl">
                  {loggedInUser?.displayName || "Display name not found"}
                </h2>
                <p className="mb-4">{loggedInUser?.email}</p>

                <button onClick={handleUserSignOut} className="my-btn">
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        ) : (
          <button className="bg-purple-500 px-4 py-2 rounded-md font-semibold text-white cursor-pointer">
            <Link to={"/signin"}>Sign in</Link>
          </button>
        )}
      </WrapperComp>
    </div>
  );
};

export default HeaderComp;
