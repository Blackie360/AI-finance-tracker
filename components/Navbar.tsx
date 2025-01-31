"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, LayoutDashboard } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/solutions" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard");
    }
  }, [isSignedIn, router]);

  return (
    <nav className="border-b top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image src="/logo.png" alt="logo" width={40} height={40} />
              <span className="text-3xl font-bold text-purple-600">YooBudget</span>
            </Link>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  pathname === item.href
                    ? "border-b-2 border-blue-500 text-gray-900"
                    : "text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden sm:flex sm:items-center space-x-4">
            <SignedIn>
              <Link href="/dashboard" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                <LayoutDashboard className="w-5 h-5" />
                <span>Dashboard</span>
              </Link>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <Button variant="outline">Sign In</Button>
              </SignInButton>
            </SignedOut>
          </div>
          <div className="flex items-center sm:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`px-3 py-2 rounded-md text-base font-medium ${
                        pathname === item.href
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <SignedIn>
                    <Link href="/dashboard" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                      <LayoutDashboard className="w-5 h-5" />
                      <span>Dashboard</span>
                    </Link>
                    <UserButton afterSignOutUrl="/" />
                  </SignedIn>
                  <SignedOut>
                    <SignInButton>
                      <Button variant="outline" className="w-full">Sign In</Button>
                    </SignInButton>
                  </SignedOut>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
