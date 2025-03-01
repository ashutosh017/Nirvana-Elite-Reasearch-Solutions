// import { GraduationCap } from "lucide-react";
// import Link from "next/link";

// export default function Footer(){
//     return <footer className="bg-primary text-white py-8">
//     <div className="container mx-auto px-4">
//       <div className="flex flex-col md:flex-row justify-between items-center">
//         <div className="mb-6 md:mb-0 text-center md:text-left">
//           <Link href="/" className="flex items-center space-x-2 justify-center md:justify-start">
//             <GraduationCap className="h-8 w-8 text-secondary" />
//             <div>
//               <span className="text-xl font-bold block">Nirvana Elite</span>
//               <span className="text-sm text-gray-400">Research Solutions</span>
//             </div>
//           </Link>
//         </div>
//         <div className="flex space-x-6">
//           <Link href="#" className="hover:text-gray-400" aria-label="Privacy Policy">
//             Privacy Policy
//           </Link>
//           <Link href="#" className="hover:text-gray-400" aria-label="Terms of Service">
//             Terms of Service
//           </Link>
//         </div>
//       </div>
//       <div className="mt-8 text-center text-sm text-gray-400">
//         © {new Date().getFullYear()} Nirvana Elite Research Solutions. All rights reserved.
//       </div>
//     </div>
//     </footer>
// }

export default function Footer() {
  return (
    <footer className="bg-black  text-white py-12 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Nirvana Elite Research Solutions</h3>
          <p className="text-gray-400">
            Empowering scholars and researchers with premium academic assistance services.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Services", "About Us", "FAQs", "Contact"].map((link) => (
              <li key={link}>
                <a href={`/${link.toLowerCase().split(" ")[0]}`} className="text-gray-400 hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: info@nirvaanaelite.com</li>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Address: 123 Academic Avenue, Research City</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Nirvaana Elite Research Solutions. All rights reserved.</p>
      </div>
    </footer>
  )
}

