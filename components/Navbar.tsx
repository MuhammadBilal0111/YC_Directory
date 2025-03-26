import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

async function Navbar() {
  const session = await auth();
  return (
    <header className="px-5 py-3 bg-white shadow sm font-work-sans">
      <nav className="flex flex-between items-center">
        <div className="flex items-center gap-5 text-black">
          <Link href="/">
            <Image src="/logo.png" width={144} height={30} alt="Logo" />
          </Link>
          <div className="flex items-center gap-5">
            {session && session?.user ? (
              <>
                <Link href={"/startup/create"}>
                  <span className="max-sm:hidden">Create</span>
                  <BadgePlus className="size-6 sm:hidden block text-red-500" />
                </Link>
                <form
                  action={async () => {
                    "use server";
                    await signOut({ redirectTo: "/" });
                  }}
                >
                  <button type="submit">
                    <span className="max-sm:hidden">LogOut</span>
                    <LogOut className="size-6 sm:hidden block text-red-500" />
                  </button>
                </form>
                <Link href={`/user/${session?.user?.id}`}>
                  <span>{session?.user?.name}</span>
                  <Avatar className="size-10">
                    <AvatarImage
                      src={session?.user?.image || ""}
                      alt={session?.user?.name || ""}
                    />
                    <AvatarFallback>
                      {session?.user?.name.charAt(0) || "AV"}
                    </AvatarFallback>
                  </Avatar>
                </Link>
              </>
            ) : (
              <>
                <form
                  action={async () => {
                    "use server";
                    await signIn("github"); // submit the form to the server
                  }}
                >
                  <button type="submit">Login</button>
                </form>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
