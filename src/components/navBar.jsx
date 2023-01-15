import React from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link href="/" className="navbar-brand">
        Goals
      </Link>

      <div>
        <Link
          href="/editUser"
          className="btn btn-outline-dark m-2"
          role="button"
        >
          My account
        </Link>
        <button className="btn btn-primary" onClick={signOut}>
          Sign out
        </button>
      </div>
    </nav>
  );
}
