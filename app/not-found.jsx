import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-100">
      <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
        <Image
          src="/404.png" 
          alt="404 Error"
          width={500}
          height={500}
          className="w-full h-auto"
          priority
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mt-6">404</h1>
      <h2 className="text-lg md:text-2xl font-semibold text-gray-700 mt-2">
        Page Not Found
      </h2>
      <p className="text-gray-500 mt-4 px-6 md:px-12">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="mt-6">
        <Button className="px-6 py-2 text-lg font-semibold rounded-md shadow-md bg-blue-600 text-white hover:bg-blue-700 transition">
          Return Home
        </Button>
      </Link>
    </div>
  );
}
