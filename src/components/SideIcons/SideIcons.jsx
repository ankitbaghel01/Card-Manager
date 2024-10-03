
import React, { useState } from 'react'
import { Camera, Calendar, MessageCircle,MessagesSquare, Bell,EthernetPort, Users,Network,Paperclip, Smile, AtSign,LogOut, Hash, Home, Search, Star, Plus, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';



const SideIcons = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  return (
    <div>
        <div className="w-full  overscroll-x-none md:w-16 md:h-screen bg-gray-900 p-2 flex md:flex-col items-center justify-between md:justify-start md:space-y-4 fixed bottom-0 md:relative md:bottom-auto">

<div className="relative inline-block group flex items-center">
  <Link
    to="/" // Replace '/target-page' with the path you want to navigate to
    className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-500 cursor-pointer"
  >
     <Home size={24}  className="text-white hover:text-gray-300" />
      </Link>
  <div className="absolute hidden group-hover:block bg-white text-black text-xs rounded shadow p-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out left-full top-1/2 transform -translate-x-2 -translate-y-1/2">
   Home
  </div>
</div>

<div className="relative inline-block group flex items-center">
  <Link
    to="/networklogs" // Replace '/target-page' with the path you want to navigate to
    className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-500 cursor-pointer"
  >
    <Network size={24} className="text-white hover:text-gray-300" />
  </Link>
  <div className="absolute hidden group-hover:block bg-white text-black text-xs rounded shadow p-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out left-full top-1/2 transform -translate-x-2 -translate-y-1/2">
  Network logs
  </div>
</div>



<div className="relative inline-block group flex items-center">
  <Link
    to="/ports" // Replace '/target-page' with the path you want to navigate to
    className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-500 cursor-pointer"
  >
    <EthernetPort size={24} className="text-white hover:text-gray-300" />
  </Link>
  <div className="absolute hidden group-hover:block bg-white text-black text-xs rounded shadow p-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out left-full top-1/2 transform -translate-x-2 -translate-y-1/2">
 Ports
  </div>
</div>




<div className="relative inline-block group flex items-center">
  <Link
    to="/alert" // Replace '/target-page' with the path you want to navigate to
    className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-500 cursor-pointer"
  >
    <Bell size={24} className="text-white hover:text-gray-300" />
  </Link>
  <div className="absolute hidden group-hover:block bg-white text-black text-xs rounded shadow p-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out left-full top-1/2 transform -translate-x-2 -translate-y-1/2">
 Alert
  </div>
</div>
{/* <div className="relative inline-block group flex items-center">
  <Link
    to="/logout" // Replace '/target-page' with the path you want to navigate to
    className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-500 cursor-pointer"
  >
    <LogOut size={24} className="text-white hover:text-gray-300" />
  </Link>
  <div className="absolute hidden group-hover:block bg-white text-black text-xs rounded shadow p-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out left-full top-1/2 transform -translate-x-2 -translate-y-1/2">
  sign out
  </div>
</div> */}





  {/* Profile Image - Positioned at the bottom */}
  {/* <div className="w-8 h-8 border border-white-500 rounded-full flex items-center justify-center hover:bg-blue-500 md:mt-auto md:mb-4">
          <img className="w-6 h-6 rounded-full object-cover" src="logo192.png" alt="profile" />
        </div> */}


</div>
    </div>
  )
}

export default SideIcons