import Link from "next/link";
import React from "react";

const AuthLayouts = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 to-slate-500">
      <nav>
        <Link href="/">Home</Link> | <Link href="/auth/login">Login</Link> |{" "}
        <Link href="/auth/register">Register</Link>
      </nav>
      {children}
    </div>
  );
};

export default AuthLayouts;
