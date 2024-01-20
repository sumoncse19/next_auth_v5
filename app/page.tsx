import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Poppins, Dancing_Script, Exo_2 } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "./auth/login-button";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["600"],
});
const exo = Exo_2({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 to-slate-500">
      <div className="text-center space-y-4">
        <h1
          className={cn(
            "text-6xl font-semibold text-sky-700 drop-shadow-lg",
            dancing.className
          )}
        >
          🔑 Auth!
        </h1>
        <p className={cn("text-sky-900 text-4xl", exo.className)}>
          A simple authentication with Next!
        </p>
        <div>
          <LoginButton>
            <Button size="lg" variant="custom">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
