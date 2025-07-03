'use client';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full py-4 px-8 z-50 flex justify-end bg-[#fef6e4] shadow-md">
      <ul className="flex gap-12 text-[#333] font-semibold">
        <li className="flex items-center gap-2 text-xl">
          <span>🔍</span>
          <a href="#about">About</a>
        </li>
        <li className="flex items-center gap-2 text-xl">
          <span>💼</span>
          <a href="#services">Services</a>
        </li>
        <li className="flex items-center gap-2 text-xl">
          <span>❓</span>
          <a href="#faq">FAQ</a>
        </li>
        <li className="flex items-center gap-2 text-xl">
          <span>✉️</span>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}






