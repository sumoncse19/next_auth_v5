import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h2>It&apos;s from dashboard layout</h2>
      <Link href="/dashboard">Dashboard</Link> |{" "}
      <Link href="/dashboard/settings">Settings</Link> |{" "}
      <Link href="/dashboard/users">User</Link> |{" "}
      <Link href="/login">Auth</Link> <div>{children}</div>
      <Button>
        <Link href="/">Go to home</Link>
      </Button>
    </div>
  );
};

export default DashboardLayout;
