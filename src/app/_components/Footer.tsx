import { GraduationCap } from "lucide-react";
import Link from "next/link";

export default function Footer(){
    return <footer className="bg-primary text-white py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <Link href="/" className="flex items-center space-x-2 justify-center md:justify-start">
            <GraduationCap className="h-8 w-8 text-secondary" />
            <div>
              <span className="text-xl font-bold block">Nirvaan Elite</span>
              <span className="text-sm text-gray-400">Research Solutions</span>
            </div>
          </Link>
        </div>
        <div className="flex space-x-6">
          <Link href="#" className="hover:text-gray-400" aria-label="Privacy Policy">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-gray-400" aria-label="Terms of Service">
            Terms of Service
          </Link>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Nirvaan Elite Research Solutions. All rights reserved.
      </div>
    </div>
    </footer>
}