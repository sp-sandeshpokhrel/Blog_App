import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

export default function Nav() {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [login, setLogin] = useState(false);
  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("TOKEN");
    if (token !== undefined && token !== null && token.length > 0) {
      setLogin(true);
    }
  }, []);

  const handleSignOut = () => {
    const cookies = new Cookies();
    cookies.remove("TOKEN");
    cookies.remove("ID");
    setLogin(false);
  };

  return (
    <nav className="flex-between w-full mb-4 pt-3">
      <a href="/" className="flex gap-2 flex-center">
        <img
          src="/assets/images/logo.svg"
          alt=""
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="text-2xl font-bold">Blog App</p>
      </a>

      <div className="sm:flex hidden">
        {login ? (
          <div className="flex gap-3 md:gap-5">
            <a href="/createblog" className="black_btn">
              Create New Blog
            </a>
            <button
              type="button"
              onClick={handleSignOut}
              className="outline_btn"
            >
              SignOut
            </button>

            <a href="/profile">
              <img
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              ></img>
            </a>
          </div>
        ) : (
          <>
            <a href="/register">
              <button type="button" className="black_btn mr-4">
                Register
              </button>
            </a>
            <a href="/login">
              <button type="button" id="big-sign" className="black_btn">
                Sign In
              </button>
            </a>
          </>
        )}
      </div>

      <div className="sm:hidden flex relative">
        {login ? (
          <div className="flex">
            <img
              src="/assets/images/logo.svg"
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
              <div className="dropdown z-10">
                <a
                  href="/profile"
                  className="dropdown-link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </a>
                <a
                  href="/createblog"
                  className="dropdown-link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create New Blog
                </a>
                <button
                  type="button"
                  className="black_btn mt-5 w-full"
                  onClick={() => {
                    setToggleDropdown(false);
                    handleSignOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <a href="/login">
              <button type="button" id="small-sign" className="black_btn">
                Sign In
              </button>
            </a>
            <a href="/register">
              <button type="button" className="black_btn">
                Register
              </button>
            </a>
          </>
        )}
      </div>
    </nav>
  );
}
