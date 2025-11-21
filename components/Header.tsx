import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream-50/95 backdrop-blur-sm border-b border-teal-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 to-amber-700/10 rounded-full blur-md group-hover:blur-lg transition-all"></div>
              <div className="relative bg-gradient-to-br from-white to-cream-50 rounded-full p-1.5 ring-2 ring-teal-600/20 group-hover:ring-teal-600/40 transition-all shadow-lg">
                <Image
                  src="/tags-logo-header.png"
                  alt="TAGS Logo"
                  width={60}
                  height={60}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                  priority
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="text-2xl font-bold text-teal-600 letterpress tracking-wide">TAGS</div>
              <div className="text-xs text-amber-700 font-semibold -mt-1 tracking-wider">
                TEXTILE ANALYSIS
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#demo" className="text-navy-700 hover:text-teal-600 transition-colors font-medium">
              Demo
            </a>
            <a href="#features" className="text-navy-700 hover:text-teal-600 transition-colors font-medium">
              Features
            </a>
            <a href="#pricing" className="text-navy-700 hover:text-teal-600 transition-colors font-medium">
              Pricing
            </a>
            <a href="#contact" className="text-navy-700 hover:text-teal-600 transition-colors font-medium">
              Contact
            </a>
            <a 
              href="#apply" 
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Apply for Pilot
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
