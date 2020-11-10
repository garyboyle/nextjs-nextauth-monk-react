import React from "react";
import { signOut } from "next-auth/client";

export default function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Goals
      </a>

      <button className="btn btn-primary" onClick={signOut}>
        Sign out
      </button>
    </nav>
  );
}
