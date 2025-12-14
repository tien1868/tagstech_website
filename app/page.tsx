'use client';

// Force rebuild for deployment cache clearing
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
                className="w-14 h-14 drop-shadow-lg group-hover:scale-105 transition-all"
                style={{
                  filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 12px rgba(166, 124, 82, 0.25))'
                }}
              />
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white letterpress">TAGS</div>
                <div className="text-xs text-[#A67C52] font-semibold tracking-wide uppercase">
                  Textile Analysis & Garment Scanning
                </div>
              </div>
            </a>
            <div className="flex items-center gap-6">
              <a
                href="https://youtube.com/shorts/So2ND4Sds3o?si=myLIkKS0QYTUImUt"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-block text-white/90 hover:text-white font-semibold transition-colors"
              >
                Watch Demo
              </a>
              <a
                href="#pitch"
                className="hidden md:inline-block text-white/90 hover:text-white font-semibold transition-colors"
              >
                Pitch Deck
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
            <div className="mb-8 inline-block relative group">
              {/* Subtle glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#A67C52]/20 via-transparent to-[#F5F1E8]/20 blur-3xl scale-150 group-hover:scale-175 transition-all duration-500"></div>

              {/* Logo with embossed effect */}
              <img
                src="/tags-logo-header.png"
                alt="TAGS Logo"
                className="w-32 h-32 md:w-40 md:h-40 mx-auto relative transform group-hover:scale-105 transition-all duration-500"
                style={{
                  filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 24px rgba(166, 124, 82, 0.3)) drop-shadow(0 -2px 8px rgba(255, 255, 255, 0.1))'
                }}
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 letterpress tracking-wide">
              Process Garments in 20 Seconds, Not 3 Minutes
            </h1>

            <p className="text-xl md:text-2xl mb-10 text-white/90 font-light">
              AI-powered textile analysis for second hand clothing stores. 9x faster than manual processing.
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
                href="https://youtube.com/shorts/So2ND4Sds3o?si=myLIkKS0QYTUImUt"
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
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-[#F5F1E8] canvas-texture">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#2C5F5D] letterpress">
              See TAGS In Action
            </h2>
            <p className="text-xl text-gray-700">
              Watch how we process garments in 20 seconds
            </p>
          </div>

          <div className="relative w-full max-w-md mx-auto group">
            {/* Vintage Film Frame Effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#2C5F5D] via-[#1F2937] to-[#A67C52] rounded-2xl opacity-80 blur-sm"></div>
            <div className="relative bg-[#1F2937] rounded-xl p-3 shadow-2xl">
              {/* Film Perforations */}
              <div className="absolute -left-2 top-0 bottom-0 w-4 flex flex-col justify-around">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-[#F5F1E8] rounded-sm opacity-60"></div>
                ))}
              </div>
              <div className="absolute -right-2 top-0 bottom-0 w-4 flex flex-col justify-around">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-[#F5F1E8] rounded-sm opacity-60"></div>
                ))}
              </div>

              {/* Video Container */}
              <div className="relative distressed-border rounded-lg overflow-hidden bg-black shadow-inner">
                {/* Vintage Label */}
                <div className="absolute top-2 left-2 z-10 bg-[#A67C52] text-white px-3 py-1 rounded text-xs font-bold tracking-wider shadow-lg distressed-border opacity-90">
                  LIVE DEMO
                </div>

                <div className="relative w-full" style={{ paddingTop: '177.78%', maxHeight: '600px' }}>
                  <iframe
                    src="https://www.youtube.com/embed/So2ND4Sds3o"
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Film Reel Bottom */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                <div className="w-8 h-8 rounded-full bg-[#A67C52] border-2 border-[#F5F1E8] shadow-lg"></div>
                <div className="w-8 h-8 rounded-full bg-[#A67C52] border-2 border-[#F5F1E8] shadow-lg"></div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://youtube.com/shorts/So2ND4Sds3o?si=myLIkKS0QYTUImUt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#2C5F5D] hover:text-[#A67C52] transition-colors font-semibold"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              View on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Pitch Deck Section */}
      <section id="pitch" className="py-20 bg-gradient-to-br from-[#2C5F5D] via-[#234a48] to-[#1F2937] text-white canvas-texture relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#A67C52]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F5F1E8]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 letterpress">
              Investor Materials
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Learn more about the TAGS opportunity and our vision for the future of resale
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 distressed-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#A67C52]/20 rounded-full blur-2xl"></div>
            
            <div className="relative">
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold mb-2 letterpress">TAGS Technologies Pitch Deck</h3>
                <p className="text-white/80 text-lg">
                  The $188B secondhand market is growing 3x faster than traditional retail
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                {[
                  { value: '9x', label: 'Faster Processing' },
                  { value: '95%', label: 'Brand Accuracy' },
                  { value: '10K+', label: 'Brands Recognized' },
                  { value: '$188B', label: 'Market Size' }
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="text-3xl md:text-4xl font-bold text-[#A67C52] mb-1">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/TAGS-Pitch-Deck.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#A67C52] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#8d6943] transition-all shadow-lg hover:shadow-2xl min-w-[240px] distressed-border hover-lift"
                  style={{ borderColor: 'rgba(255,255,255,0.2)' }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Pitch Deck
                </a>
                <a
                  href="mailto:robert@tagstech.app?subject=TAGS Investment Inquiry"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/60 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all min-w-[240px] hover-lift"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact for Investment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo" className="py-20 bg-white relative overflow-hidden">
        {/* Corner logo accents */}
        <div className="absolute top-10 right-10 w-32 h-32 opacity-[0.02] pointer-events-none rotate-12">
          <img src="/tags-logo-header.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-10 left-10 w-32 h-32 opacity-[0.02] pointer-events-none -rotate-12">
          <img src="/tags-logo-header.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-5xl md:text-6xl text-center mb-16 text-[#2C5F5D] letterpress">
            More Features Coming Soon
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
      <section className="py-20 bg-[#F5F1E8] canvas-texture relative overflow-hidden">
        {/* Subtle logo watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-[0.03] pointer-events-none">
          <img src="/tags-logo-header.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-5xl md:text-6xl text-center mb-16 text-[#2C5F5D] letterpress">
            The Bottleneck Killing Second Hand Clothing Stores
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
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative logo accent - top right */}
        <div className="absolute -top-12 -right-12 w-64 h-64 opacity-[0.02] pointer-events-none rotate-12">
          <img src="/tags-logo-header.png" alt="" className="w-full h-full object-contain" />
        </div>
        {/* Decorative logo accent - bottom left */}
        <div className="absolute -bottom-12 -left-12 w-64 h-64 opacity-[0.02] pointer-events-none -rotate-12">
          <img src="/tags-logo-header.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
      <section className="py-20 bg-[#2C5F5D] text-white canvas-texture relative overflow-hidden">
        {/* Logo watermark with brand color tint */}
        <div className="absolute top-1/4 right-12 w-80 h-80 opacity-[0.03] pointer-events-none">
          <img src="/tags-logo-header.png" alt="" className="w-full h-full object-contain" style={{ filter: 'brightness(1.2)' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
      <section id="pilot" className="py-20 bg-[#F5F1E8] canvas-texture relative overflow-hidden">
        {/* Subtle background logo pattern */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32">
            <img src="/tags-logo-header.png" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute top-20 right-20 w-24 h-24 rotate-45">
            <img src="/tags-logo-header.png" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 -rotate-12">
            <img src="/tags-logo-header.png" alt="" className="w-full h-full object-contain" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Centered logo watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 opacity-[0.02] pointer-events-none">
          <img src="/tags-logo-header.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
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
      <section className="py-20 bg-[#2C5F5D] text-white canvas-texture relative overflow-hidden">
        {/* Subtle logo background pattern */}
        <div className="absolute top-10 left-10 w-48 h-48 opacity-[0.02] pointer-events-none -rotate-12">
          <img src="/tags-logo-header.png" alt="" className="w-full h-full object-contain" style={{ filter: 'brightness(1.3)' }} />
        </div>
        <div className="absolute bottom-10 right-10 w-48 h-48 opacity-[0.02] pointer-events-none rotate-12">
          <img src="/tags-logo-header.png" alt="" className="w-full h-full object-contain" style={{ filter: 'brightness(1.3)' }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
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
      <footer className="bg-[#1F2937] text-white py-12 canvas-texture relative overflow-hidden">
        {/* Large background logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.015] pointer-events-none">
          <img src="/tags-logo-header.png" alt="" className="w-full h-full object-contain" style={{ filter: 'brightness(1.2)' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4 relative group">
                <div className="absolute inset-0 bg-[#A67C52]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img
                  src="/tags-logo-footer.png"
                  alt="TAGS Logo"
                  className="w-24 h-24 relative drop-shadow-lg group-hover:scale-105 transition-transform"
                  style={{
                    filter: 'drop-shadow(0 4px 8px rgba(166, 124, 82, 0.3))'
                  }}
                />
              </div>
              <p className="text-white/70 text-sm font-semibold tracking-wide">
                Textile Analysis & Garment Scanning
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-3">Company</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#pilot" className="hover:text-white">Pilot Program</a></li>
                <li><a href="#pitch" className="hover:text-white">Pitch Deck</a></li>
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
      font-family: 'Playfair Display', Georgia, serif;
    }
    
    /* Letterpress effect */
    .letterpress {
      text-shadow: 
        0 1px 0 rgba(255,255,255,0.1),
        0 -1px 0 rgba(0,0,0,0.3);
    }
    
    /* Canvas texture overlay */
    .canvas-texture {
      position: relative;
    }
    .canvas-texture::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
      opacity: 0.03;
      pointer-events: none;
    }
    
    /* Distressed border */
    .distressed-border {
      border: 3px solid rgba(166, 124, 82, 0.3);
      box-shadow: 
        inset 0 0 20px rgba(0,0,0,0.05),
        0 4px 20px rgba(0,0,0,0.1);
    }
    
    /* Hover lift effect */
    .hover-lift {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .hover-lift:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 40px rgba(0,0,0,0.15);
    }
    
    /* Navigation */
    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      background: rgba(44, 95, 93, 0.95);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    
    .nav-inner {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 80px;
    }
    
    .nav-logo {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      color: white;
    }
    
    .nav-logo img {
      width: 56px;
      height: 56px;
      filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));
      transition: transform 0.3s ease;
    }
    
    .nav-logo:hover img {
      transform: scale(1.05);
    }
    
    .nav-logo-text {
      display: none;
    }
    
    @media (min-width: 640px) {
      .nav-logo-text {
        display: block;
      }
    }
    
    .nav-logo-title {
      font-size: 1.25rem;
      font-weight: 700;
      font-family: 'Playfair Display', serif;
    }
    
    .nav-logo-subtitle {
      font-size: 0.7rem;
      color: var(--copper);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    
    .nav-links {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }
    
    .nav-link {
      color: rgba(255,255,255,0.9);
      text-decoration: none;
      font-weight: 600;
      transition: color 0.2s;
      display: none;
    }
    
    @media (min-width: 768px) {
      .nav-link {
        display: inline-block;
      }
    }
    
    .nav-link:hover {
      color: white;
    }
    
    .btn {
      display: inline-block;
      padding: 0.625rem 1.5rem;
      border-radius: 8px;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.3s ease;
      text-align: center;
    }
    
    .btn-primary {
      background: var(--copper);
      color: white;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }
    
    .btn-primary:hover {
      background: var(--copper-dark);
      box-shadow: 0 6px 20px rgba(0,0,0,0.25);
    }
    
    .btn-secondary {
      background: rgba(255,255,255,0.1);
      color: white;
      border: 2px solid rgba(255,255,255,0.6);
    }
    
    .btn-secondary:hover {
      background: rgba(255,255,255,0.2);
    }
    
    .btn-lg {
      padding: 1rem 2rem;
      font-size: 1.125rem;
      min-width: 240px;
    }
    
    /* Hero Section */
    .hero {
      background: var(--teal);
      color: white;
      padding: 8rem 1.5rem 6rem;
      position: relative;
      overflow: hidden;
    }
    
    @media (min-width: 768px) {
      .hero {
        padding: 10rem 1.5rem 8rem;
      }
    }
    
    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background: repeating-linear-gradient(
        90deg,
        transparent,
        transparent 50px,
        rgba(255,255,255,0.03) 50px,
        rgba(255,255,255,0.03) 51px
      );
      pointer-events: none;
    }
    
    .hero-inner {
      max-width: 900px;
      margin: 0 auto;
      text-align: center;
      position: relative;
    }
    
    .hero-logo {
      width: 128px;
      height: 128px;
      margin: 0 auto 2rem;
      filter: 
        drop-shadow(0 8px 16px rgba(0,0,0,0.4))
        drop-shadow(0 0 24px rgba(166,124,82,0.3));
      transition: transform 0.5s ease;
    }
    
    @media (min-width: 768px) {
      .hero-logo {
        width: 160px;
        height: 160px;
      }
    }
    
    .hero-logo:hover {
      transform: scale(1.05);
    }
    
    .hero h1 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      line-height: 1.1;
    }
    
    @media (min-width: 768px) {
      .hero h1 {
        font-size: 4rem;
      }
    }
    
    .hero-subtitle {
      font-size: 1.25rem;
      opacity: 0.9;
      margin-bottom: 2.5rem;
      font-weight: 300;
    }
    
    @media (min-width: 768px) {
      .hero-subtitle {
        font-size: 1.5rem;
      }
    }
    
    .hero-buttons {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
    }
    
    @media (min-width: 640px) {
      .hero-buttons {
        flex-direction: row;
        justify-content: center;
      }
    }
    
    /* Section styles */
    section {
      padding: 5rem 1.5rem;
    }
    
    .section-inner {
      max-width: 1280px;
      margin: 0 auto;
    }
    
    .section-title {
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 1rem;
      color: var(--teal);
    }
    
    @media (min-width: 768px) {
      .section-title {
        font-size: 3.5rem;
      }
    }
    
    .section-subtitle {
      text-align: center;
      font-size: 1.25rem;
      color: #666;
      margin-bottom: 3rem;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }
    
    /* Demo Section */
    .demo-section {
      background: white;
      position: relative;
      overflow: hidden;
    }
    
    .demo-grid {
      display: grid;
      gap: 2rem;
    }
    
    @media (min-width: 768px) {
      .demo-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    
    .demo-card {
      background: var(--cream);
      border-radius: 12px;
      overflow: hidden;
    }
    
    .demo-card-video {
      background: linear-gradient(135deg, var(--teal), var(--teal-dark));
      padding: 1rem;
      min-height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .demo-card-content {
      padding: 1.5rem;
      background: white;
    }
    
    .demo-card h3 {
      font-size: 1.5rem;
      color: var(--teal);
      margin-bottom: 0.5rem;
    }
    
    .demo-card p {
      color: #666;
    }
    
    /* Pitch Deck Section */
    .pitch-section {
      background: linear-gradient(135deg, var(--teal) 0%, var(--teal-dark) 100%);
      color: white;
      position: relative;
      overflow: hidden;
    }
    
    .pitch-section::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(166,124,82,0.1) 0%, transparent 70%);
      pointer-events: none;
    }
    
    .pitch-section .section-title {
      color: white;
    }
    
    .pitch-section .section-subtitle {
      color: rgba(255,255,255,0.85);
    }
    
    .pitch-card {
      max-width: 700px;
      margin: 0 auto;
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      padding: 3rem;
      text-align: center;
      border: 1px solid rgba(255,255,255,0.2);
      position: relative;
    }
    
    .pitch-card h3 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    
    .pitch-highlights {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      margin: 2rem 0;
      text-align: left;
    }
    
    @media (min-width: 640px) {
      .pitch-highlights {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    
    .pitch-stat {
      text-align: center;
    }
    
    .pitch-stat-value {
      font-size: 2rem;
      font-weight: 700;
      color: var(--copper);
      display: block;
      font-family: 'Playfair Display', serif;
    }
    
    .pitch-stat-label {
      font-size: 0.875rem;
      opacity: 0.9;
    }
    
    .pitch-buttons {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 2rem;
    }
    
    @media (min-width: 640px) {
      .pitch-buttons {
        flex-direction: row;
        justify-content: center;
      }
    }
    
    /* Problem Section */
    .problem-section {
      background: var(--cream);
      position: relative;
    }
    
    .problem-grid {
      display: grid;
      gap: 2rem;
      max-width: 1000px;
      margin: 0 auto;
    }
    
    @media (min-width: 768px) {
      .problem-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    
    .problem-card {
      text-align: center;
      padding: 2rem;
      background: white;
      border-radius: 12px;
    }
    
    .problem-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 1.5rem;
      background: linear-gradient(135deg, var(--teal), var(--teal-dark));
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.5rem;
      box-shadow: 0 8px 24px rgba(44,95,93,0.3);
    }
    
    .problem-card h3 {
      font-size: 1.75rem;
      color: var(--teal);
      margin-bottom: 1rem;
    }
    
    .problem-card p {
      color: #666;
      font-size: 1.125rem;
    }
    
    /* Solution Section */
    .solution-section {
      background: white;
    }
    
    .solution-grid {
      display: grid;
      gap: 1.5rem;
    }
    
    @media (min-width: 768px) {
      .solution-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (min-width: 1024px) {
      .solution-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    
    .solution-card {
      padding: 1.5rem;
      background: var(--cream);
      border-radius: 12px;
      position: relative;
      overflow: hidden;
    }
    
    .solution-card::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100px;
      height: 100px;
      background: var(--copper);
      opacity: 0.05;
      border-radius: 50%;
      transform: translate(50%, -50%);
      transition: opacity 0.3s;
    }
    
    .solution-card:hover::before {
      opacity: 0.1;
    }
    
    .solution-icon {
      width: 64px;
      height: 64px;
      background: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      margin-bottom: 1rem;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      border: 2px solid rgba(166,124,82,0.2);
    }
    
    .solution-card h3 {
      font-size: 1.5rem;
      color: var(--teal);
      margin-bottom: 0.5rem;
    }
    
    .solution-card p {
      color: #666;
    }
    
    /* How It Works */
    .how-section {
      background: var(--teal);
      color: white;
    }
    
    .how-section .section-title {
      color: white;
    }
    
    .how-steps {
      max-width: 800px;
      margin: 0 auto;
    }
    
    .how-step {
      display: flex;
      gap: 1.5rem;
      margin-bottom: 2rem;
      align-items: flex-start;
    }
    
    .how-step-number {
      flex-shrink: 0;
      width: 64px;
      height: 64px;
      background: var(--copper);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.75rem;
      font-weight: 700;
      box-shadow: 0 8px 24px rgba(0,0,0,0.2);
      border: 4px solid rgba(255,255,255,0.1);
      font-family: 'Playfair Display', serif;
      transition: transform 0.3s ease;
    }
    
    .how-step:hover .how-step-number {
      transform: scale(1.1);
    }
    
    .how-step-content {
      padding-top: 0.5rem;
    }
    
    .how-step h3 {
      font-size: 1.75rem;
      margin-bottom: 0.5rem;
    }
    
    .how-step p {
      opacity: 0.9;
      font-size: 1.125rem;
    }
    
    /* Pilot Section */
    .pilot-section {
      background: var(--cream);
    }
    
    .pilot-card {
      max-width: 480px;
      margin: 0 auto;
      background: white;
      border-radius: 12px;
      padding: 2.5rem;
      box-shadow: 0 20px 60px rgba(0,0,0,0.1);
    }
    
    .pilot-header {
      text-align: center;
      margin-bottom: 1.5rem;
    }
    
    .pilot-header h3 {
      font-size: 2rem;
      color: var(--teal);
      margin-bottom: 0.5rem;
    }
    
    .pilot-header p {
      color: #666;
      font-size: 1.125rem;
    }
    
    .pilot-benefits {
      margin-bottom: 2rem;
    }
    
    .pilot-benefit {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      margin-bottom: 1rem;
    }
    
    .pilot-benefit span:first-child {
      font-size: 1.5rem;
    }
    
    .pilot-benefit span:last-child {
      font-size: 1.125rem;
      padding-top: 0.25rem;
    }
    
    .pilot-form input {
      width: 100%;
      padding: 0.875rem 1rem;
      border: 2px solid #ddd;
      border-radius: 8px;
      font-size: 1rem;
      margin-bottom: 1rem;
      transition: border-color 0.2s;
    }
    
    .pilot-form input:focus {
      outline: none;
      border-color: var(--teal);
    }
    
    .pilot-form button {
      width: 100%;
      padding: 1rem;
      background: var(--copper);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1.25rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(166,124,82,0.3);
    }
    
    .pilot-form button:hover {
      background: var(--copper-dark);
      box-shadow: 0 8px 24px rgba(166,124,82,0.4);
      transform: translateY(-2px);
    }
    
    /* Social Section */
    .social-section {
      background: white;
      text-align: center;
    }
    
    .social-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--teal);
      font-size: 1.5rem;
      font-weight: 700;
      text-decoration: none;
      transition: color 0.2s;
    }
    
    .social-link:hover {
      color: var(--copper);
    }
    
    .social-link svg {
      width: 32px;
      height: 32px;
    }
    
    /* Final CTA */
    .cta-section {
      background: var(--teal);
      color: white;
      text-align: center;
    }
    
    .cta-section .section-title {
      color: white;
      margin-bottom: 2rem;
    }
    
    .cta-buttons {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      justify-content: center;
      align-items: center;
      margin-bottom: 2rem;
    }
    
    @media (min-width: 640px) {
      .cta-buttons {
        flex-direction: row;
      }
    }
    
    .cta-email {
      font-size: 1.25rem;
    }
    
    .cta-email a {
      color: rgba(255,255,255,0.9);
      text-decoration: none;
    }
    
    .cta-email a:hover {
      color: white;
    }
    
    /* Footer */
    footer {
      background: var(--charcoal);
      color: white;
      padding: 4rem 1.5rem 2rem;
    }
    
    .footer-inner {
      max-width: 1280px;
      margin: 0 auto;
    }
    
    .footer-grid {
      display: grid;
      gap: 2rem;
      margin-bottom: 2rem;
    }
    
    @media (min-width: 768px) {
      .footer-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    
    .footer-logo img {
      width: 96px;
      height: 96px;
      margin-bottom: 1rem;
      filter: drop-shadow(0 4px 8px rgba(166,124,82,0.3));
    }
    
    .footer-logo p {
      color: rgba(255,255,255,0.7);
      font-size: 0.875rem;
      font-weight: 600;
      letter-spacing: 0.05em;
    }
    
    .footer-col h4 {
      font-weight: 700;
      margin-bottom: 0.75rem;
      font-family: 'Source Sans 3', sans-serif;
    }
    
    .footer-col ul {
      list-style: none;
    }
    
    .footer-col li {
      margin-bottom: 0.5rem;
    }
    
    .footer-col a {
      color: rgba(255,255,255,0.7);
      text-decoration: none;
      transition: color 0.2s;
    }
    
    .footer-col a:hover {
      color: white;
    }
    
    .footer-bottom {
      border-top: 1px solid rgba(255,255,255,0.2);
      padding-top: 2rem;
      text-align: center;
      color: rgba(255,255,255,0.6);
      font-size: 0.875rem;
    }
    
    /* Instagram embed styling */
    .instagram-media {
      background: white !important;
      border-radius: 12px !important;
      margin: 0 auto !important;
      max-width: 100% !important;
      min-width: 280px !important;
      width: 100% !important;
    }
    
    /* Animations */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animate-in {
      animation: fadeInUp 0.6s ease forwards;
    }
    
    .delay-1 { animation-delay: 0.1s; }
    .delay-2 { animation-delay: 0.2s; }
    .delay-3 { animation-delay: 0.3s; }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav>
    <div class="nav-inner">
      <a href="/" class="nav-logo">
        <img src="/tags-logo-header.png" alt="TAGS Logo" onerror="this.style.display='none'">
        <div class="nav-logo-text">
          <div class="nav-logo-title letterpress">TAGS</div>
          <div class="nav-logo-subtitle">Textile Analysis & Garment Scanning</div>
        </div>
      </a>
      <div class="nav-links">
        <a href="#demo" class="nav-link">Watch Demo</a>
        <a href="#pitch" class="nav-link">Pitch Deck</a>
        <a href="#pilot" class="btn btn-primary distressed-border">Apply Now</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero canvas-texture">
    <div class="hero-inner">
      <img src="/tags-logo-header.png" alt="TAGS Logo" class="hero-logo" onerror="this.style.display='none'">
      <h1 class="letterpress">Process Garments in 20 Seconds, Not 3 Minutes</h1>
      <p class="hero-subtitle">AI-powered textile analysis for secondhand clothing stores. 9x faster than manual processing.</p>
      <div class="hero-buttons">
        <a href="#pilot" class="btn btn-primary btn-lg distressed-border hover-lift">Apply for Pilot Program</a>
        <a href="#demo" class="btn btn-secondary btn-lg hover-lift">Watch Demo</a>
      </div>
    </div>
  </section>

  <!-- Demo Section -->
  <section id="demo" class="demo-section">
    <div class="section-inner">
      <h2 class="section-title letterpress">See TAGS In Action</h2>
      <p class="section-subtitle">Watch how we process garments in 20 seconds with AI-powered analysis</p>
      
      <div class="demo-grid">
        <div class="demo-card distressed-border hover-lift">
          <div class="demo-card-video">
            <blockquote 
              class="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/reel/DRddzdJDpvu/"
              data-instgrm-version="14">
              <a href="https://www.instagram.com/reel/DRddzdJDpvu/" target="_blank" rel="noopener noreferrer" style="color: white; text-decoration: underline;">
                View on Instagram →
              </a>
            </blockquote>
          </div>
          <div class="demo-card-content">
            <h3 class="letterpress">Full Analysis Demo</h3>
            <p>Complete workflow from scan to save</p>
          </div>
        </div>

        <div class="demo-card distressed-border hover-lift">
          <div class="demo-card-video">
            <blockquote 
              class="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/reel/DRdqSQMDkH0/"
              data-instgrm-version="14">
              <a href="https://www.instagram.com/reel/DRdqSQMDkH0/" target="_blank" rel="noopener noreferrer" style="color: white; text-decoration: underline;">
                View on Instagram →
              </a>
            </blockquote>
          </div>
          <div class="demo-card-content">
            <h3 class="letterpress">Measurement Feature</h3>
            <p>Pit-to-pit measurements in seconds</p>
          </div>
        </div>

        <div class="demo-card distressed-border hover-lift">
          <div class="demo-card-video">
            <blockquote 
              class="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/reel/DRLLa0hjl0W/"
              data-instgrm-version="14">
              <a href="https://www.instagram.com/reel/DRLLa0hjl0W/" target="_blank" rel="noopener noreferrer" style="color: white; text-decoration: underline;">
                View on Instagram →
              </a>
            </blockquote>
          </div>
          <div class="demo-card-content">
            <h3 class="letterpress">Pricing Intelligence</h3>
            <p>Real-time market data integration</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Pitch Deck Section -->
  <section id="pitch" class="pitch-section canvas-texture">
    <div class="section-inner">
      <h2 class="section-title letterpress">Investor Materials</h2>
      <p class="section-subtitle">Learn more about the TAGS opportunity and our vision for the future of resale</p>
      
      <div class="pitch-card distressed-border">
        <h3 class="letterpress">TAGS Technologies Pitch Deck</h3>
        <p style="opacity: 0.9; margin-bottom: 1.5rem;">The $188B secondhand market is growing 3x faster than traditional retail. TAGS is positioned to capture this opportunity.</p>
        
        <div class="pitch-highlights">
          <div class="pitch-stat">
            <span class="pitch-stat-value">9x</span>
            <span class="pitch-stat-label">Faster Processing</span>
          </div>
          <div class="pitch-stat">
            <span class="pitch-stat-value">95%</span>
            <span class="pitch-stat-label">Brand Accuracy</span>
          </div>
          <div class="pitch-stat">
            <span class="pitch-stat-value">10K+</span>
            <span class="pitch-stat-label">Brands Recognized</span>
          </div>
          <div class="pitch-stat">
            <span class="pitch-stat-value">$188B</span>
            <span class="pitch-stat-label">Market Size</span>
          </div>
        </div>
        
        <div class="pitch-buttons">
          <a href="/pitch-deck.pdf" class="btn btn-primary btn-lg hover-lift" target="_blank">
            📄 View Pitch Deck
          </a>
          <a href="mailto:robert@tagstech.app?subject=TAGS Investment Inquiry" class="btn btn-secondary btn-lg hover-lift">
            📧 Contact for Investment
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Problem Section -->
  <section class="problem-section canvas-texture">
    <div class="section-inner">
      <h2 class="section-title letterpress">The Bottleneck Killing Secondhand Clothing Stores</h2>
      
      <div class="problem-grid">
        <div class="problem-card distressed-border hover-lift">
          <div class="problem-icon">⏱️</div>
          <h3 class="letterpress">Manual Tagging</h3>
          <p>3-5 minutes per garment draining productivity</p>
        </div>
        
        <div class="problem-card distressed-border hover-lift">
          <div class="problem-icon">💸</div>
          <h3 class="letterpress">Labor Costs</h3>
          <p>Hundreds per month wasted on repetitive tasks</p>
        </div>
        
        <div class="problem-card distressed-border hover-lift">
          <div class="problem-icon">📉</div>
          <h3 class="letterpress">Limited Capacity</h3>
          <p>Can't process enough inventory to scale</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Solution Section -->
  <section class="solution-section">
    <div class="section-inner">
      <h2 class="section-title letterpress">TAGS: Intelligence That Pays For Itself</h2>
      <p class="section-subtitle">Transform your garment processing with AI that understands textiles as well as your best employee</p>
      
      <div class="solution-grid">
        <div class="solution-card distressed-border hover-lift">
          <div class="solution-icon">🏷️</div>
          <h3 class="letterpress">Brand Detection</h3>
          <p>95% accuracy on 10,000+ brands</p>
        </div>
        
        <div class="solution-card distressed-border hover-lift">
          <div class="solution-icon">⚧️</div>
          <h3 class="letterpress">Gender Classification</h3>
          <p>Multi-signal hierarchical analysis</p>
        </div>
        
        <div class="solution-card distressed-border hover-lift">
          <div class="solution-icon">📏</div>
          <h3 class="letterpress">Smart Measurements</h3>
          <p>Pit-to-pit when tags are missing</p>
        </div>
        
        <div class="solution-card distressed-border hover-lift">
          <div class="solution-icon">💰</div>
          <h3 class="letterpress">Market Pricing</h3>
          <p>Real-time eBay data + brand intelligence</p>
        </div>
        
        <div class="solution-card distressed-border hover-lift">
          <div class="solution-icon">⚡</div>
          <h3 class="letterpress">20-Second Processing</h3>
          <p>9x faster than manual</p>
        </div>
        
        <div class="solution-card distressed-border hover-lift">
          <div class="solution-icon">📊</div>
          <h3 class="letterpress">Learning System</h3>
          <p>Improves from every correction</p>
        </div>
      </div>
    </div>
  </section>

  <!-- How It Works -->
  <section class="how-section canvas-texture">
    <div class="section-inner">
      <h2 class="section-title letterpress">How It Works</h2>
      
      <div class="how-steps">
        <div class="how-step">
          <div class="how-step-number">1</div>
          <div class="how-step-content">
            <h3 class="letterpress">Place garment on camera</h3>
            <p>Position tag and garment in designated areas</p>
          </div>
        </div>
        
        <div class="how-step">
          <div class="how-step-number">2</div>
          <div class="how-step-content">
            <h3 class="letterpress">Click "Analyze"</h3>
            <p>AI processes tag + garment simultaneously</p>
          </div>
        </div>
        
        <div class="how-step">
          <div class="how-step-number">3</div>
          <div class="how-step-content">
            <h3 class="letterpress">Review results</h3>
            <p>95% accurate – edit if needed</p>
          </div>
        </div>
        
        <div class="how-step">
          <div class="how-step-number">4</div>
          <div class="how-step-content">
            <h3 class="letterpress">Save to inventory</h3>
            <p>Export to POS or print label</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Pilot Section -->
  <section id="pilot" class="pilot-section canvas-texture">
    <div class="section-inner">
      <h2 class="section-title letterpress">Limited Pilot Spots Available</h2>
      <p class="section-subtitle">First 10 stores get exclusive early access pricing</p>
      
      <div class="pilot-card distressed-border hover-lift">
        <div class="pilot-header">
          <h3>PILOT PROGRAM</h3>
          <p>(First 10 Stores)</p>
        </div>
        
        <div class="pilot-benefits">
          <div class="pilot-benefit">
            <span>✅</span>
            <span>FREE for 30 days</span>
          </div>
          <div class="pilot-benefit">
            <span>✅</span>
            <span>50% revenue share Mo 2-7</span>
          </div>
          <div class="pilot-benefit">
            <span>✅</span>
            <span>Full training + support</span>
          </div>
        </div>
        
        <form class="pilot-form" onsubmit="event.preventDefault(); alert('Application submitted! We\'ll contact you within 24 hours.'); this.reset();">
          <input type="text" placeholder="Store Name" required>
          <input type="text" placeholder="Location (City, State)" required>
          <input type="number" placeholder="Current Monthly Volume" required>
          <input type="email" placeholder="Contact Email" required>
          <input type="tel" placeholder="Phone (optional)">
          <button type="submit">Apply Now</button>
        </form>
      </div>
    </div>
  </section>

  <!-- Social Section -->
  <section class="social-section">
    <div class="section-inner">
      <h2 class="section-title letterpress" style="font-size: 2rem;">Pilot Programs Starting Spring 2026</h2>
      <p class="section-subtitle" style="margin-bottom: 1.5rem;">Follow our journey on Instagram</p>
      <a href="https://instagram.com/tagstech" target="_blank" rel="noopener noreferrer" class="social-link">
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
        @tagstech
      </a>
    </div>
  </section>

  <!-- Final CTA -->
  <section class="cta-section canvas-texture">
    <div class="section-inner">
      <h2 class="section-title letterpress">Ready to 9x Your Processing Speed?</h2>
      
      <div class="cta-buttons">
        <a href="#pilot" class="btn btn-primary btn-lg distressed-border hover-lift">Apply for Pilot Program</a>
        <a href="mailto:robert@tagstech.app" class="btn btn-secondary btn-lg hover-lift">Schedule Demo Call</a>
      </div>
      
      <p class="cta-email">
        <a href="mailto:robert@tagstech.app">robert@tagstech.app</a>
      </p>
    </div>
  </section>

  <!-- Footer -->
  <footer class="canvas-texture">
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-logo">
          <img src="/tags-logo-footer.png" alt="TAGS Logo" onerror="this.style.display='none'">
          <p>Textile Analysis & Garment Scanning</p>
        </div>
        
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#pilot">Pilot Program</a></li>
            <li><a href="#pitch">Pitch Deck</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:robert@tagstech.app">robert@tagstech.app</a></li>
            <li><a href="https://instagram.com/tagstech" target="_blank">@tagstech</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        © 2025 Tags Technologies LLC. Patent Pending. All rights reserved.
      </div>
    </div>
  </footer>

  <!-- Instagram Embed Script -->
  <script async src="//www.instagram.com/embed.js"></script>
  <script>
    // Re-process Instagram embeds when ready
    window.addEventListener('load', function() {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    });
  </script>

</body>
</html>
                style={{
                  filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 12px rgba(166, 124, 82, 0.25))'
                }}
              />
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white letterpress">TAGS</div>
                <div className="text-xs text-[#A67C52] font-semibold tracking-wide uppercase">
                  Textile Analysis & Garment Scanning
                </div>
              </div>
            </a>
            <div className="flex items-center gap-6">
              <a
                href="#demo"
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
            <div className="mb-8 inline-block relative group">
              {/* Subtle glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#A67C52]/20 via-transparent to-[#F5F1E8]/20 blur-3xl scale-150 group-hover:scale-175 transition-all duration-500"></div>

              {/* Logo with embossed effect */}
              <img
                src="/tags-logo-header.png"
                alt="TAGS Logo"
                className="w-32 h-32 md:w-40 md:h-40 mx-auto relative transform group-hover:scale-105 transition-all duration-500"
                style={{
                  filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 24px rgba(166, 124, 82, 0.3)) drop-shadow(0 -2px 8px rgba(255, 255, 255, 0.1))'
                }}
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 letterpress tracking-wide">
              Process Garments in 20 Seconds, Not 3 Minutes
            </h1>

            <p className="text-xl md:text-2xl mb-10 text-white/90 font-light">
              AI-powered textile analysis for second hand clothing stores. 9x faster than manual processing.
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
                href="#demo"
                className="inline-block bg-white/10 backdrop-blur-sm border-2 border-white/60 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all min-w-[240px] text-center hover-lift"
              >
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section with Embedded Instagram Reels */}
      <section id="demo" className="py-20 bg-white relative overflow-hidden">
        {/* Corner logo accents */}
        <div className="absolute top-10 right-10 w-32 h-32 opacity-[0.02] pointer-events-none rotate-12">
          <img src="/tags-logo-header.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-10 left-10 w-32 h-32 opacity-[0.02] pointer-events-none -rotate-12">
          <img src="/tags-logo-header.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-5xl md:text-6xl text-center mb-6 text-[#2C5F5D] letterpress">
            See TAGS In Action
          </h2>
          <p className="text-center text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Watch how we process garments in 20 seconds with AI-powered analysis
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Full Analysis Demo - Embedded */}
            <div className="distressed-border rounded-lg overflow-hidden bg-[#F5F1E8] hover-lift vintage-stamp">
              <div className="bg-gradient-to-br from-[#2C5F5D] to-[#234a48] p-4 flex items-center justify-center min-h-[400px]">
                <blockquote 
                  className="instagram-media" 
                  data-instgrm-permalink="https://www.instagram.com/reel/DRddzdJDpvu/"
                  data-instgrm-version="14"
                  style={{ 
                    background: '#FFF', 
                    border: 0, 
                    borderRadius: '12px', 
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
                    margin: '0 auto',
                    maxWidth: '100%',
                    minWidth: '280px',
                    padding: 0,
                    width: '100%'
                  }}
                >
                  <a href="https://www.instagram.com/reel/DRddzdJDpvu/" target="_blank" rel="noopener noreferrer">
                    View on Instagram
                  </a>
                </blockquote>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold mb-2 text-[#2C5F5D] letterpress">Full Analysis Demo</h3>
                <p className="text-gray-700">Complete workflow from scan to save</p>
              </div>
            </div>

            {/* Measurement Feature - Embedded */}
            <div className="distressed-border rounded-lg overflow-hidden bg-[#F5F1E8] hover-lift vintage-stamp">
              <div className="bg-gradient-to-br from-[#2C5F5D] to-[#234a48] p-4 flex items-center justify-center min-h-[400px]">
                <blockquote 
                  className="instagram-media" 
                  data-instgrm-permalink="https://www.instagram.com/reel/DRdqSQMDkH0/"
                  data-instgrm-version="14"
                  style={{ 
                    background: '#FFF', 
                    border: 0, 
                    borderRadius: '12px', 
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
                    margin: '0 auto',
                    maxWidth: '100%',
                    minWidth: '280px',
                    padding: 0,
                    width: '100%'
                  }}
                >
                  <a href="https://www.instagram.com/reel/DRdqSQMDkH0/" target="_blank" rel="noopener noreferrer">
                    View on Instagram
                  </a>
                </blockquote>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold mb-2 text-[#2C5F5D] letterpress">Measurement Feature</h3>
                <p className="text-gray-700">Pit-to-pit measurements in seconds</p>
              </div>
            </div>

            {/* Pricing Intelligence - Embedded */}
            <div className="distressed-border rounded-lg overflow-hidden bg-[#F5F1E8] hover-lift vintage-stamp">
              <div className="bg-gradient-to-br from-[#2C5F5D] to-[#234a48] p-4 flex items-center justify-center min-h-[400px]">
                <blockquote 
                  className="instagram-media" 
                  data-instgrm-permalink="https://www.instagram.com/reel/DRLLa0hjl0W/"
                  data-instgrm-version="14"
                  style={{ 
                    background: '#FFF', 
                    border: 0, 
                    borderRadius: '12px', 
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
                    margin: '0 auto',
                    maxWidth: '100%',
                    minWidth: '280px',
                    padding: 0,
                    width: '100%'
                  }}
                >
                  <a href="https://www.instagram.com/reel/DRLLa0hjl0W/" target="_blank" rel="noopener noreferrer">
                    View on Instagram
                  </a>
                </blockquote>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold mb-2 text-[#2C5F5D] letterpress">Pricing Intelligence</h3>
                <p className="text-gray-700">Real-time market data integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-[#F5F1E8] canvas-texture relative overflow-hidden">
        {/* Subtle logo watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-[0.03] pointer-events-none">
          <img src="/tags-logo-header.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-5xl md:text-6xl text-center mb-16 text-[#2C5F5D] letterpress">
            The Bottleneck Killing Second Hand Clothing Stores
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
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative logo accent - top right */}
        <div className="absolute -top-12 -right-12 w-64 h-64 opacity-[0.02] pointer-events-none rotate-12">
          <img src="/tags-logo-header.png" alt="" className="w-full h-full object-contain" />
        </div>
        {/* Decorative logo accent - bottom left */}
        <div className="absolute -bottom-12 -left-12 w-64 h-64 opacity-[0.02] pointer-events-none -rotate-12">
          <img src="/tags-logo-header.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
      <section className="py-20 bg-[#2C5F5D] text-white canvas-texture relative overflow-hidden">
        {/* Logo watermark with brand color tint */}
        <div className="absolute top-1/4 right-12 w-80 h-80 opacity-[0.03] pointer-events-none">
          <img src="/tags-logo-header.png" alt="" className="w-full h-full object-contain" style={{ filter: 'brightness(1.2)' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
      <section id="pilot" className="py-20 bg-[#F5F1E8] canvas-texture relative overflow-hidden">
        {/* Subtle background logo pattern */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32">
            <img src="/tags-logo-header.png" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute top-20 right-20 w-24 h-24 rotate-45">
            <img src="/tags-logo-header.png" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 -rotate-12">
            <img src="/tags-logo-header.png" alt="" className="w-full h-full object-contain" />
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Centered logo watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 opacity-[0.02] pointer-events-none">
          <img src="/tags-logo-header.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
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
      <section className="py-20 bg-[#2C5F5D] text-white canvas-texture relative overflow-hidden">
        {/* Subtle logo background pattern */}
        <div className="absolute top-10 left-10 w-48 h-48 opacity-[0.02] pointer-events-none -rotate-12">
          <img src="/tags-logo-header.png" alt="" className="w-full h-full object-contain" style={{ filter: 'brightness(1.3)' }} />
        </div>
        <div className="absolute bottom-10 right-10 w-48 h-48 opacity-[0.02] pointer-events-none rotate-12">
          <img src="/tags-logo-header.png" alt="" className="w-full h-full object-contain" style={{ filter: 'brightness(1.3)' }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
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
      <footer className="bg-[#1F2937] text-white py-12 canvas-texture relative overflow-hidden">
        {/* Large background logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.015] pointer-events-none">
          <img src="/tags-logo-header.png" alt="" className="w-full h-full object-contain" style={{ filter: 'brightness(1.2)' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4 relative group">
                <div className="absolute inset-0 bg-[#A67C52]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img
                  src="/tags-logo-footer.png"
                  alt="TAGS Logo"
                  className="w-24 h-24 relative drop-shadow-lg group-hover:scale-105 transition-transform"
                  style={{
                    filter: 'drop-shadow(0 4px 8px rgba(166, 124, 82, 0.3))'
                  }}
                />
              </div>
              <p className="text-white/70 text-sm font-semibold tracking-wide">
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
