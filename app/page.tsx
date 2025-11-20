'use client';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2C5F5D]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="flex items-center gap-3 group">
              <img
                src="/tags-logo-header.png"
                alt="TAGS Logo"
                className="w-14 h-14 drop-shadow-lg group-hover:scale-105 transition-transform"
              />
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white letterpress">TAGS</div>
                <div className="text-xs text-[#A67C52] font-semibold tracking-wide">
                  TEXTILE ANALYSIS & GARMENT SCANNING
                </div>
              </div>
            </a>
            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/reel/DRLLa0hjl0W/?utm_source=ig_web_copy_link&igsh=Z2k2dDViamFnY2tt"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-block text-white/90 hover:text-white font-semibold transition-colors"
              >
                Watch Demo
              </a>
              <a
                href="#pilot"
                className="inline-block bg-[#A67C52] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-[#8d6943] transition-all shadow-lg hover:shadow-xl distressed-border"
                style={{ borderColor: 'rgba(255,255,255,0.2)' }}
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="canvas-texture relative bg-[#2C5F5D] text-white overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.03) 50px, rgba(255,255,255,0.03) 51px)'
          }}/>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 inline-block vintage-stamp">
              <img
                src="/tags-logo-header.png"
                alt="TAGS Logo"
                className="w-32 h-32 md:w-40 md:h-40 mx-auto drop-shadow-2xl"
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 letterpress tracking-wide">
              Process Thrift Store Garments in 20 Seconds, Not 3 Minutes
            </h1>

            <p className="text-xl md:text-2xl mb-10 text-white/90 font-light">
              AI-powered textile analysis for consignment stores. 9x faster than manual processing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#pilot"
                className="inline-block bg-[#A67C52] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#8d6943] transition-all shadow-lg hover:shadow-2xl min-w-[240px] text-center distressed-border hover-lift"
                style={{ borderColor: 'rgba(255,255,255,0.2)' }}
              >
                Apply for Pilot Program
              </a>
              <a
                href="https://www.instagram.com/reel/DRLLa0hjl0W/?utm_source=ig_web_copy_link&igsh=Z2k2dDViamFnY2tt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white/10 backdrop-blur-sm border-2 border-white/60 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all min-w-[240px] text-center hover-lift"
              >
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Demo Video - Embedded */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-[#F5F1E8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#2C5F5D] letterpress">
              See TAGS In Action
            </h2>
            <p className="text-xl text-gray-700">
              Watch how we process garments in 20 seconds
            </p>
          </div>

          <div className="relative w-full max-w-3xl mx-auto distressed-border rounded-xl overflow-hidden shadow-2xl hover-lift vintage-stamp bg-white">
            <div className="relative w-full" style={{ paddingTop: '177.78%' }}>
              <iframe
                src="https://www.instagram.com/reel/DRLLa0hjl0W/embed"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                allow="encrypted-media"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/reel/DRLLa0hjl0W/?utm_source=ig_web_copy_link&igsh=Z2k2dDViamFnY2tt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#2C5F5D] hover:text-[#A67C52] transition-colors font-semibold"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              View on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl text-center mb-16 text-[#2C5F5D] letterpress">
            See TAGS In Action
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Full Analysis Demo', desc: 'Complete workflow from scan to save' },
              { title: 'Measurement Feature', desc: 'Pit-to-pit measurements in seconds' },
              { title: 'Pricing Intelligence', desc: 'Real-time market data integration' }
            ].map((video, i) => (
              <div key={i} className="distressed-border rounded-lg overflow-hidden bg-[#F5F1E8] hover-lift vintage-stamp">
                <div className="aspect-video bg-gradient-to-br from-[#2C5F5D] to-[#234a48] flex items-center justify-center relative">
                  <div className="absolute inset-0 opacity-10 canvas-texture"></div>
                  <div className="text-center relative z-10">
                    <div className="w-20 h-20 mx-auto mb-4 bg-[#A67C52] rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-white/80 text-sm font-semibold">Video Coming Soon</p>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-bold mb-2 text-[#2C5F5D] letterpress">{video.title}</h3>
                  <p className="text-gray-700">{video.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-[#F5F1E8] canvas-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl text-center mb-16 text-[#2C5F5D] letterpress">
            The Bottleneck Killing Consignment Stores
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: '⏱️', title: 'Manual Tagging', desc: '3-5 minutes per garment draining productivity' },
              { icon: '💸', title: 'Labor Costs', desc: 'Hundreds per month wasted on repetitive tasks' },
              { icon: '📉', title: 'Limited Capacity', desc: "Can't process enough inventory to scale" }
            ].map((problem, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-lg distressed-border hover-lift vintage-stamp">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#2C5F5D] to-[#234a48] rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-4xl">{problem.icon}</div>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-[#2C5F5D] letterpress">{problem.title}</h3>
                <p className="text-gray-700 text-lg">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl text-center mb-6 text-[#2C5F5D] letterpress">
            TAGS: Intelligence That Pays For Itself
          </h2>
          <p className="text-center text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Transform your garment processing with AI that understands textiles as well as your best employee
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🏷️', title: 'Brand Detection', desc: '95% accuracy on 10,000+ brands' },
              { icon: '⚧️', title: 'Gender Classification', desc: 'Multi-signal hierarchical analysis' },
              { icon: '📏', title: 'Smart Measurements', desc: 'Pit-to-pit when tags are missing' },
              { icon: '💰', title: 'Market Pricing', desc: 'Real-time eBay data + brand intelligence' },
              { icon: '⚡', title: '20-Second Processing', desc: '9x faster than manual' },
              { icon: '📊', title: 'Learning System', desc: 'Improves from every correction' }
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-[#F5F1E8] rounded-lg distressed-border hover-lift vintage-stamp relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#A67C52] opacity-5 rounded-full -mr-12 -mt-12 group-hover:opacity-10 transition-opacity"></div>
                <div className="w-16 h-16 mb-4 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-[#A67C52]/20">
                  <div className="text-3xl">{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-[#2C5F5D] letterpress relative">{feature.title}</h3>
                <p className="text-gray-700 relative">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#2C5F5D] text-white canvas-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl text-center mb-16 letterpress">
            How It Works
          </h2>

          <div className="max-w-4xl mx-auto">
            {[
              { step: 1, title: 'Place garment on camera', desc: 'Position tag and garment in designated areas' },
              { step: 2, title: 'Click "Analyze"', desc: 'AI processes tag + garment simultaneously' },
              { step: 3, title: 'Review results', desc: '95% accurate - edit if needed' },
              { step: 4, title: 'Save to inventory', desc: 'Export to POS or print label' }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 mb-8 items-start group">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#A67C52] flex items-center justify-center text-3xl font-bold shadow-xl border-4 border-white/10 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-3xl font-bold mb-2 letterpress">{item.title}</h3>
                  <p className="text-white/90 text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot Program */}
      <section id="pilot" className="py-20 bg-[#F5F1E8] canvas-texture">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl text-center mb-6 text-[#2C5F5D] letterpress">
            Limited Pilot Spots Available
          </h2>
          <p className="text-center text-xl text-gray-700 mb-12">
            First 10 stores get exclusive early access pricing
          </p>

          <div className="max-w-md mx-auto bg-white rounded-lg p-8 distressed-border hover-lift vintage-stamp shadow-2xl" style={{
            backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)',
          }}>
            <div className="text-center mb-6">
              <h3 className="text-4xl font-bold mb-2 text-[#2C5F5D]">PILOT PROGRAM</h3>
              <p className="text-xl text-gray-600">(First 10 Stores)</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                'FREE for 30 days',
                '50% revenue share Mo 2-7',
                'Full training + support'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <span className="text-lg pt-1">{item}</span>
                </div>
              ))}
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Application submitted! We\'ll contact you within 24 hours.'); }}>
              <input
                type="text"
                placeholder="Store Name"
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#2C5F5D] focus:outline-none"
              />
              <input
                type="text"
                placeholder="Location (City, State)"
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#2C5F5D] focus:outline-none"
              />
              <input
                type="number"
                placeholder="Current Monthly Volume"
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#2C5F5D] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Contact Email"
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#2C5F5D] focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone (optional)"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#2C5F5D] focus:outline-none"
              />

              <button
                type="submit"
                className="w-full bg-[#A67C52] text-white py-4 rounded-lg font-bold text-xl hover:bg-[#8d6943] transition-all shadow-lg hover:shadow-xl distressed-border hover-lift"
                style={{ borderColor: 'rgba(255,255,255,0.2)' }}
              >
                Apply Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-[#2C5F5D] letterpress">
            Pilot Programs Starting Spring 2026
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Follow our journey on Instagram
          </p>
          <a
            href="https://instagram.com/tagstech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#2C5F5D] text-2xl font-bold hover:text-[#A67C52] transition-colors"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @tagstech
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#2C5F5D] text-white canvas-texture">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl mb-8 letterpress">
            Ready to 9x Your Processing Speed?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#pilot"
              className="inline-block bg-[#A67C52] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#8d6943] transition-all shadow-lg hover:shadow-2xl min-w-[240px] distressed-border hover-lift"
              style={{ borderColor: 'rgba(255,255,255,0.2)' }}
            >
              Apply for Pilot Program
            </a>
            <a
              href="mailto:robert@tagstech.app"
              className="inline-block bg-white/10 backdrop-blur-sm border-2 border-white/60 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all min-w-[240px] hover-lift"
            >
              Schedule Demo Call
            </a>
          </div>

          <p className="text-xl">
            <a href="mailto:robert@tagstech.app" className="text-white/90 hover:text-white">
              robert@tagstech.app
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F2937] text-white py-12 canvas-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <img
                  src="/tags-logo-footer.png"
                  alt="TAGS Logo"
                  className="w-24 h-24"
                />
              </div>
              <p className="text-white/70 text-sm">
                Textile Analysis & Garment Scanning
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-3">Company</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#pilot" className="hover:text-white">Pilot Program</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3">Contact</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="mailto:robert@tagstech.app" className="hover:text-white">robert@tagstech.app</a></li>
                <li><a href="https://instagram.com/tagstech" target="_blank" rel="noopener noreferrer" className="hover:text-white">@tagstech</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3">Legal</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
            © 2025 Tags Technologies LLC. Patent Pending. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
