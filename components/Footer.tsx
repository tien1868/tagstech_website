import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-cream-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image 
                src="/tags-logo-footer.png" 
                alt="TAGS Logo" 
                width={50} 
                height={50}
                className="w-12 h-12"
              />
              <div>
                <div className="text-xl font-bold text-cream-50">TAGS</div>
                <div className="text-xs text-brown-500 font-semibold">
                  TEXTILE ANALYSIS & GARMENT SCANNING
                </div>
              </div>
            </Link>
            <p className="text-cream-100/80 max-w-md mb-4">
              AI-powered garment processing for thrift stores and consignment shops. 
              Process garments 30x faster with 95% accuracy.
            </p>
            <p className="text-sm text-cream-100/60">
              © 2025 Tags Technologies LLC. Patent Pending.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-cream-50 font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#demo" className="text-cream-100/80 hover:text-teal-400 transition-colors">
                  Watch Demo
                </a>
              </li>
              <li>
                <a href="#features" className="text-cream-100/80 hover:text-teal-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-cream-100/80 hover:text-teal-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#apply" className="text-cream-100/80 hover:text-teal-400 transition-colors">
                  Apply for Pilot
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-cream-50 font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:robert@tagstech.app" 
                  className="text-cream-100/80 hover:text-teal-400 transition-colors flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>robert@tagstech.app</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/tagstech" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-100/80 hover:text-teal-400 transition-colors flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>@tagstech</span>
                </a>
              </li>
              <li className="text-cream-100/60 text-sm pt-2">
                New York, NY
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream-100/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-cream-100/60">
              Built with ❤️ for thrift stores everywhere
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-cream-100/60 hover:text-cream-100 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-cream-100/60 hover:text-cream-100 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
