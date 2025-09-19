import React from 'react'

type Subrole = { team: string; bullets: string[] }
type Exp = {
  company: string; role: string; location?: string; period: string;
  bullets?: string[]; subroles?: Subrole[];
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
            {/* Experience Header */}
            <div className="flex items-start gap-3 mb-4">
              <div className={`w-10 h-10 bg-gradient-to-br ${getIconColors(index)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-1">{experience.role}</h3>
                <p className="text-blue-300 font-medium text-sm mb-1">{experience.company}</p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  {experience.location && (
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {experience.location}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {experience.period}
                  </span>
                </div>
              </div>
            </div>

            {/* Experience Details */}
            {experience.subroles ? (
              <div className="space-y-4">
                {experience.subroles.map((subrole, subIndex) => (
                  <div key={subIndex} className="border-l-2 border-white/20 pl-4">
                    <p className="text-sm font-semibold text-white mb-2">{subrole.team}</p>
                    <ul className="space-y-2">
                      {subrole.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="text-sm text-gray-300 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              experience.bullets && (
                <div className="space-y-2">
                  {experience.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </div>
              )
            )}
          </div>
        </article>
      ))}
    </div>
  )
}
