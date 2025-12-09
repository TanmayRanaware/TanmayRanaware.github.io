import React from 'react'

type Subrole = { team: string; bullets: string[] }
type Exp = {
  company: string; role: string; location?: string; period: string;
  bullets?: string[]; subroles?: Subrole[]; techStack?: string; image?: string;
}

export function Experience({ items }: { items: Exp[] }) {
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
    <div className="grid md:grid-cols-2 gap-6">
      {items.map((experience, index) => (
        <article key={index} className={`group relative bg-gradient-to-br ${getGradientColors(index)} backdrop-blur-sm border ${getBorderColors(index)} rounded-lg p-6 hover:${getHoverBorders(index)} transition-all duration-300 hover:shadow-lg ${getShadowColors(index)}`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${getGradientColors(index).replace('/20', '/5')} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 bg-gradient-to-br ${getIconColors(index)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">{experience.company}</h3>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
