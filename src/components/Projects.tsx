import React from 'react'
export type Project = { title: string; description: string; tech: string[]; links?: { label: string; href: string }[] }

export function Projects({ items }: { items: Project[] }) {
  const getGradientColors = (index: number) => {
    const gradients = [
      'from-blue-900/20 to-purple-900/20',
      'from-emerald-900/20 to-cyan-900/20',
      'from-purple-900/20 to-pink-900/20',
      'from-orange-900/20 to-red-900/20',
      'from-indigo-900/20 to-blue-900/20',
      'from-teal-900/20 to-green-900/20'
    ]
    return gradients[index % gradients.length]
  }

  const getBorderColors = (index: number) => {
    const borders = [
      'border-blue-400/30',
      'border-emerald-400/30',
      'border-purple-400/30',
      'border-orange-400/30',
      'border-indigo-400/30',
      'border-teal-400/30'
    ]
    return borders[index % borders.length]
  }

  const getHoverBorders = (index: number) => {
    const hoverBorders = [
      'hover:border-blue-400/50',
      'hover:border-emerald-400/50',
      'hover:border-purple-400/50',
      'hover:border-orange-400/50',
      'hover:border-indigo-400/50',
      'hover:border-teal-400/50'
    ]
    return hoverBorders[index % hoverBorders.length]
  }

  const getShadowColors = (index: number) => {
    const shadows = [
      'hover:shadow-blue-500/10',
      'hover:shadow-emerald-500/10',
      'hover:shadow-purple-500/10',
      'hover:shadow-orange-500/10',
      'hover:shadow-indigo-500/10',
      'hover:shadow-teal-500/10'
    ]
    return shadows[index % shadows.length]
  }

  const getIconColors = (index: number) => {
    const icons = [
      'from-blue-500 to-purple-600',
      'from-emerald-500 to-cyan-600',
      'from-purple-500 to-pink-600',
      'from-orange-500 to-red-600',
      'from-indigo-500 to-blue-600',
      'from-teal-500 to-green-600'
    ]
    return icons[index % icons.length]
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((project, index) => (
        <article key={index} className={`group relative bg-gradient-to-br ${getGradientColors(index)} backdrop-blur-sm border ${getBorderColors(index)} rounded-lg p-6 hover:${getHoverBorders(index)} transition-all duration-300 hover:shadow-lg ${getShadowColors(index)}`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${getGradientColors(index).replace('/20', '/5')} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
          
          <div className="relative z-10">
            {/* Project Header */}
            <div className="flex items-start gap-3 mb-4">
              <div className={`w-10 h-10 bg-gradient-to-br ${getIconColors(index)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
              </div>
            </div>

            {/* Project Description */}
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

            {/* Tech Stack */}
            <div className="mb-4">
              <p className="text-xs text-gray-400 mb-2 font-mono tracking-wider">TECH STACK</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 bg-white/10 backdrop-blur-sm text-xs text-blue-300 rounded border border-white/20 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            {project.links && project.links.length > 0 && (
              <div className="flex gap-3">
                {project.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs rounded hover:from-blue-500 hover:to-purple-500 transition-all duration-200 font-medium"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}
