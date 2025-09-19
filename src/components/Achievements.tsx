import React from 'react'
export function Achievements({ items }: { items: string[] }) {
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
      {items.map((achievement, index) => (
        <div key={index} className={`group relative bg-gradient-to-br ${getGradientColors(index)} backdrop-blur-sm border ${getBorderColors(index)} rounded-lg p-6 hover:${getHoverBorders(index)} transition-all duration-300 hover:shadow-lg ${getShadowColors(index)}`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${getGradientColors(index).replace('/20', '/5')} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
          
          <div className="relative z-10">
            {/* Achievement Header */}
            <div className="flex items-start gap-3 mb-4">
              <div className={`w-10 h-10 bg-gradient-to-br ${getIconColors(index)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 mb-2 font-mono tracking-wider">ACHIEVEMENT #{String(index + 1).padStart(2, '0')}</p>
              </div>
            </div>

            {/* Achievement Content */}
            <p className="text-gray-300 text-sm leading-relaxed">{achievement}</p>

            {/* Achievement Badge */}
            <div className="mt-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-green-300 font-mono">VERIFIED</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
