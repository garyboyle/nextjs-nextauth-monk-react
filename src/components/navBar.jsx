import React from "react";
import { signOut } from "next-auth/client";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">Goals</a>
      </Link>

      <div>
        <Link href="/editUser">
          <a className="btn btn-outline-dark m-2" role="button">
            My account
          </a>
        </Link>
        <button className="btn btn-primary" onClick={signOut}>
          Sign out
        </button>
      </div>
    </nav>
  );
}
