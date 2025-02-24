import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 -translate-x-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Magic Kids AI"
                width={130}
                height={35}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/iletisim" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-full border border-[#FF4D6B] text-sm">
              İletişim
            </Link>
            <Link href="/iletisim" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-full border border-[#FF4D6B] text-sm">
              İletişim
            </Link>
            <Link href="/iletisim" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-full border border-[#FF4D6B] text-sm">
              İletişim
            </Link>
            <Link href="/iletisim" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-full border border-[#FF4D6B] text-sm">
              İletişim
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/giris" className="text-gray-600 hover:text-gray-900">
              Giriş Yap
            </Link>
            <Link href="/iletisim" className="bg-[#FF4D6B] text-white px-4 py-2 rounded-full flex items-center space-x-2">
              <span>İletişim</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FF4D6B]">
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 