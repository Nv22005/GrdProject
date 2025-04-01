import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { ChevronRight, Video } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <div className="hero-section w-full min-h-screen bg-gradient-to-bl from-blue-300 via-blue-600 to-blue-500 text-white">
        <div className="w-full flex flex-col items-center justify-center py-10 max-w-4xl mx-auto">
          <div className="flex flex-col mt-5 items-center text-center">
            <h1 className="text-6xl font-extrabold">
              <p>Discover your future with our</p>
              <p>
                <span className="bg-gradient-to-r from-blue-200 via-teal-300 to-blue-200 bg-clip-text text-transparent animate-pulse">
                  AI-Enhanced
                </span>
                {" "} Resume Builder
              </p>
            </h1>
            <p className="block text-lg mt-3 font-medium text-blue-200">
              Craft stunning resumes with futuristic design using our free builder and share your profile with a unique link.
            </p>
            <br />
            <div className="flex items-center gap-4">
              <Button className="h-12 px-8 text-base font-medium bg-gradient-to-r from-blue-700 to-blue-500 text-white hover:opacity-90" asChild>
                <RegisterLink>Get Started</RegisterLink>
              </Button>
              <Button
                variant="outline"
                className="h-12 px-8 border-2 border-blue-400 text-blue-300 hover:border-blue-200 hover:text-white"
                asChild
              >
                <a className="flex items-center gap-2">
                  <Video size="20px" />
                  Watch Video
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full h-[400px] bg-gradient-to-r from-blue-500 to-blue-900 rounded-full blur-3xl opacity-50 z-0" />
          <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-xl shadow-2xl bg-blue-950 border border-blue-500">
            <div className="relative w-full h-full rounded-md">
              <Image
                src="/images/board-img.png"
                alt="App dashboard"
                fill
                className="object-cover w-full h-full rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
