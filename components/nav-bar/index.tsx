import React from "react";
import { ExternalLink } from "lucide-react";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <div className="shadow-md w-full sticky top-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-500 z-[9999]">
      <div className="w-full flex items-center justify-center h-auto bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
        {/* Optional placeholder for banners or announcements */}
      </div>
      <div className="w-full mx-auto max-w-7xl p-4 px-6 flex items-center justify-between text-white">
        <div className="flex items-center flex-1 gap-9">
          <div>
            <h5 className="font-extrabold text-lg bg-gradient-to-r from-teal-300 to-blue-200 bg-clip-text text-transparent">
              CVbuild.ai
            </h5>
          </div>

          <div className="hidden lg:flex">
            <ul className="flex items-center gap-6 text-sm font-medium">
              <li>
                <Link href="#" className="hover:text-teal-300">
                  AI Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-300">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-300">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <LoginLink>
            <Button
              variant="outline"
              className="border-2 border-blue-300 text-blue-200 hover:bg-blue-700 hover:text-white"
            >
              Sign In
            </Button>
          </LoginLink>
          <RegisterLink>
            <Button className="bg-gradient-to-r from-teal-400 to-blue-500 text-white font-medium hover:opacity-90">
              Get Started
            </Button>
          </RegisterLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
