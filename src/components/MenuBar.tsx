export default function MenuBar() {
  return (
    <div className="navbar shadow-md rounded-lg min-h-0 py-0 fixed  glass text-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content glass rounded-box z-[1] mt-3 w-52 p-2 shadow font-medium"
          >
            <li>
              <a className="py-2">HOME</a>
            </li>
            <li>
              <details>
                <summary className="py-2">BLOG</summary>
                <ul className="p-2">
                  <li>
                    <a className="py-2">Submenu 1</a>
                  </li>
                  <li>
                    <a className="py-2">Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a className="py-2">CHAT</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src="https://p.ipic.vip/w7awov.png" className="w-8" />
          Mewtopia
        </a>
      </div>
      <div className="navbar-center hidden sm:flex">
        <ul className="menu menu-horizontal px-1 text-md font-medium">
          <li>
            <a>HOME</a>
          </li>
          <li>
            <a>BLOG</a>
          </li>
          <li>
            <a>CHAT</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-error indicator-item"></span>
          </div>
        </button>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="" src="https://p.ipic.vip/b9i1kp.jpg" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm bg-transparent glass dropdown-content bg-white/20 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between py-2 text-lg">
                Profile
                <span className="badge bg-error border-none font-bold text-xs text-white shadow-sm ring-2 ring-white">
                  NEW
                </span>
              </a>
            </li>
            <li>
              <a className="py-2 text-lg">Settings</a>
            </li>
            <li>
              <a className="py-2 text-lg">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
