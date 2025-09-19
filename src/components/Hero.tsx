import React from 'react'

type Props = {
  name: string
  title: string
  tagline: string
  links: { label: string; href: string }[]
}

export function Hero({ name, title, tagline, links }: Props) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 dark:from-black dark:via-slate-900 dark:to-blue-900" />
      
      {/* Neural Network Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-pulse" />
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating AI/ML Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Neural Network Nodes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-pulse ai-node-1" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse ai-node-2" />
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-cyan-400 rounded-full animate-pulse ai-node-3" />
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-emerald-400 rounded-full animate-pulse ai-node-4" />
        
        {/* Data Flow Particles */}
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full animate-ping data-particle-1" />
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-ping data-particle-2" />
        <div className="absolute bottom-1/2 left-2/3 w-1 h-1 bg-purple-300 rounded-full animate-ping data-particle-3" />
        
        {/* Large Orbital Elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl animate-spin-slow-reverse" />
      </div>

      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6">
        {/* Sci-fi UI Elements */}
        <div className="mb-8 relative">
          {/* Corner Brackets */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-blue-400 opacity-60" />
          <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-blue-400 opacity-60" />
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-blue-400 opacity-60" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-blue-400 opacity-60" />
          
          {/* Main Title with Glitch Effect */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-white mb-4 ai-title whitespace-nowrap overflow-hidden">
            <span className="block relative">
              {name}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent opacity-50 blur-sm">
                {name}
              </span>
            </span>
          </h1>
          
          {/* Status Line */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-blue-300 font-mono tracking-wider">SYSTEM_ONLINE</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Enhanced Subtitle */}
        <div className="mb-16">
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-blue-200 mb-4 tracking-wide">
            {title}
          </p>
          <p className="text-base md:text-lg text-gray-400 font-mono">
            {tagline} • AI_ML_ENGINEER • 2024
          </p>
        </div>

        {/* Sci-fi Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={`
                group relative px-8 py-4 font-medium text-base transition-all duration-300
                ${index === 0 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 shadow-lg hover:shadow-xl border border-blue-400/50' 
                  : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 shadow-sm hover:shadow-md'
                }
                rounded-none border-2 font-mono tracking-wider
              `}
            >
              <span className="relative z-10">{link.label.toUpperCase()}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </a>
          ))}
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-blue-300 font-mono tracking-wider">SCROLL</span>
            <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
