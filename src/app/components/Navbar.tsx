import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-8 px-10">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full border-4 border-white"></div>
        <h1 className="text-white text-2xl font-bold">LOGO</h1>
      </div>

      <ul className="hidden md:flex items-center gap-12 text-white">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>

      <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search"
          className="outline-none"
        />
      </div>
    </nav>
  );
}
