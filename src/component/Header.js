import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";
import Logo from "./Logo";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className="text-gray-100 body-font">
      <div className="container flex flex-row flex-wrap items-center p-5 mx-auto">
        <Logo className="flex-grow" />
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto"></nav>

        <div className="flex items-center gap-2">
          {user && (
            <div className="loggedIn">
              <span className="whitespace-nowrap rounded-full px-2.5 py-0.5 text-sm">
                Hi,
                <span className="text-primary">{user.name}</span>
              </span>

              <button
                onClick={handleLogout}
                className="inline-flex items-center px-3 py-1 mt-4 text-white border border-white rounded hover:bg-primary hover:border-transparent focus:outline-none md:mt-0 select-none"
              >
                Logout
              </button>
            </div>
          )}

          <div className="flex items-center gap-2">
            {!user && (
              <>
                <Link
                  to="/login"
                  className="inline-flex items-center px-3 py-1 mt-4 text-white border-0 rounded bg-secondary focus:outline-none hover:bg-primary md:mt-0 select-none"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center px-3 py-1 mt-4 text-white border border-white rounded hover:bg-primary hover:border-transparent focus:outline-none md:mt-0 select-none"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
