import React from "react";
import { signOut } from "next-auth/client";

export default function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Goals
      </a>

      <div>
        <a className="btn btn-outline-dark m-2" href="/editUser" role="button">
          My account
        </a>
        <button className="btn btn-primary" onClick={signOut}>
          Sign out
        </button>
      </div>
    </nav>
  );
}
