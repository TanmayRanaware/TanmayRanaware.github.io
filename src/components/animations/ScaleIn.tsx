import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface ScaleInProps {
  children: React.ReactNode
  initialScale?: number
  finalScale?: number
  duration?: number
  delay?: number
  className?: string
}

export const ScaleIn: React.FC<ScaleInProps> = ({
  children,
  initialScale = 0.8,
  finalScale = 1.0,
  duration = 0.6,
  delay = 0,
  className = ''
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div
      ref={ref}
      initial={{ 
        scale: initialScale, 
        opacity: 0 
      }}
      animate={inView ? { 
        scale: finalScale, 
        opacity: 1 
      } : { 
        scale: initialScale, 
        opacity: 0 
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

