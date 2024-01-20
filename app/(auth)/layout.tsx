import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav>This is auth nav</nav>
      <Link href="/dashboard">Dashboard</Link> |{" "}
      <Link href="/login">Login</Link> |{" "}
      <Link href="/register">Register</Link>
      {children}
    </div>
  );
};

export default AuthLayout;
