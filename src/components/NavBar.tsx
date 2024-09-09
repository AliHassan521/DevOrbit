// import {
//   Navbar,
//   NavbarBrand,
//   NavbarMenuToggle,
//   NavbarMenu,
//   NavbarMenuItem,
//   NavbarContent,
//   NavbarItem,
//   Link,
//   Button,
// } from "@nextui-org/react";

// import { Logo } from "./Logo";

// export default function NavBar() {
//   const menuItems = [
//     "Profile",
//     "Dashboard",
//     "Activity",
//     "Analytics",
//     "System",
//     "Deployments",
//     "My Settings",
//     "Team Settings",
//     "Help & Feedback",
//     "Log Out",
//   ];

//   return (
//     <Navbar disableAnimation isBordered>
//       <NavbarContent className="sm:hidden" justify="start">
//         <NavbarMenuToggle />
//       </NavbarContent>

//       <NavbarContent className="sm:hidden pr-3" justify="center">
//         <NavbarBrand>
//           <Logo />
//           <p className="font-bold text-inherit">DevOrbit</p>
//         </NavbarBrand>
//       </NavbarContent>

//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//         <NavbarBrand>
//           <Logo />
//           <p className="font-bold text-inherit">DevOrbit</p>
//         </NavbarBrand>
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Features
//           </Link>
//         </NavbarItem>
//         <NavbarItem isActive>
//           <Link href="#" aria-current="page" color="warning">
//             Customers
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Integrations
//           </Link>
//         </NavbarItem>
//       </NavbarContent>

//       <NavbarContent justify="end">
//         <NavbarItem className="hidden lg:flex">
//           <Link href="#">Login</Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Button as={Link} color="warning" href="#" variant="flat">
//             Sign Up
//           </Button>
//         </NavbarItem>
//       </NavbarContent>

//       <NavbarMenu>
//         {menuItems.map((item, index) => (
//           <NavbarMenuItem key={`${item}-${index}`}>
//             <Link
//               className="w-full"
//               color={
//                 index === 2
//                   ? "warning"
//                   : index === menuItems.length - 1
//                   ? "danger"
//                   : "foreground"
//               }
//               href="#"
//               size="lg"
//             >
//               {item}
//             </Link>
//           </NavbarMenuItem>
//         ))}
//       </NavbarMenu>
//     </Navbar>
//   );
// }

import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white mt-6 ml-8 mr-8 shadow-lg rounded-full px-3 py-3 border-2">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          {/* Replace this with your actual logo */}
          <img src={logo} alt="Logo" className="mr-3 w-10 h-10 rounded-full" />
          <span className="text-black text-2xl font-extrabold tracking-wide">
            DevOrbit
          </span>
        </div>

        {/* Hamburger Menu (for mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Links (visible on desktop) */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-black">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Blog
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu (only visible when toggled on mobile) */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 rounded-lg space-y-2 mt-2 p-4">
          <a href="#" className="block text-gray-700 hover:text-black">
            Home
          </a>
          <a href="#" className="block text-gray-700 hover:text-black">
            Blog
          </a>
          <a href="#" className="block text-gray-700 hover:text-black">
            About
          </a>
          <a href="#" className="block text-gray-700 hover:text-black">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
