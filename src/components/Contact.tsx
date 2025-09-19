import React from 'react'

type Props = {
  email: string
  phone?: string
  location?: string
}

export function Contact({ email, phone, location }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Email Card */}
      <div className="group relative bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-400/30 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white">Email</h3>
          </div>
          <a 
            href={`mailto:${email}`}
            className="text-blue-300 hover:text-blue-200 transition-colors duration-200 font-mono text-sm break-all"
          >
            {email}
          </a>
          <p className="text-gray-400 text-xs mt-2">Click to send an email</p>
        </div>
      </div>

      {/* Phone Card */}
      {phone && (
        <div className="group relative bg-gradient-to-br from-emerald-900/20 to-cyan-900/20 backdrop-blur-sm border border-emerald-400/30 rounded-lg p-6 hover:border-emerald-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Phone</h3>
            </div>
            <a 
              href={`tel:${phone}`}
              className="text-emerald-300 hover:text-emerald-200 transition-colors duration-200 font-mono text-sm"
            >
              {phone}
            </a>
            <p className="text-gray-400 text-xs mt-2">Click to make a call</p>
          </div>
        </div>
      )}

      {/* Location Card */}
      {location && (
        <div className="group relative bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-400/30 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Location</h3>
            </div>
            <p className="text-purple-300 font-mono text-sm">
              {location}
            </p>
            <p className="text-gray-400 text-xs mt-2">Available for remote work</p>
          </div>
        </div>
      )}

      {/* Contact Form Card */}
      <div className="group relative bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-gray-400/30 rounded-lg p-6 hover:border-gray-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/10 md:col-span-2 lg:col-span-1">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-gray-600/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-500 to-gray-700 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white">Quick Message</h3>
          </div>
          <p className="text-gray-300 text-sm mb-4">
            Ready to collaborate? Send me a message and let's discuss your next project.
          </p>
          <a 
            href={`mailto:${email}?subject=Hello from Portfolio&body=Hi Tanmay,%0D%0A%0D%0AI'd like to discuss a potential collaboration.%0D%0A%0D%0ABest regards,`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-200 text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Send Message
          </a>
        </div>
      </div>
    </div>
  )
}
