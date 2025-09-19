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
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800" />
      
      {/* Floating geometric shapes for visual interest */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main headline with floating animation */}
        <div className="mb-8 relative">
          {/* Floating accent elements */}
          <div className="absolute -top-8 -left-8 w-4 h-4 bg-blue-500/20 rounded-full animate-pulse apple-floating-accent-1" />
          <div className="absolute -top-4 -right-12 w-3 h-3 bg-purple-500/20 rounded-full animate-pulse apple-floating-accent-2" />
          <div className="absolute -bottom-6 left-1/4 w-2 h-2 bg-emerald-500/20 rounded-full animate-pulse apple-floating-accent-3" />
          <div className="absolute -bottom-4 right-1/3 w-3 h-3 bg-cyan-500/20 rounded-full animate-pulse apple-floating-accent-4" />
          
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-gray-900 dark:text-white mb-4 apple-floating-enhanced whitespace-nowrap overflow-hidden">
            <span className="block">{name}</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Subtitle */}
        <div className="mb-12">
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-600 dark:text-gray-300 mb-2">
            {title}
          </p>
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400">
            {tagline}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={`
                group relative px-8 py-4 rounded-full font-medium text-base transition-all duration-300
                ${index === 0 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl' 
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 shadow-sm hover:shadow-md'
                }
              `}
            >
              <span className="relative z-10">{link.label}</span>
              {index === 0 && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
