import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface SlideInProps {
  children: React.ReactNode
  direction?: 'left' | 'right' | 'up' | 'down'
  distance?: number
  duration?: number
  delay?: number
  className?: string
}

export const SlideIn: React.FC<SlideInProps> = ({
  children,
  direction = 'left',
  distance = 50,
  duration = 0.6,
  delay = 0,
  className = ''
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const getInitialTransform = () => {
    switch (direction) {
      case 'left':
        return { x: -distance, opacity: 0 }
      case 'right':
        return { x: distance, opacity: 0 }
      case 'up':
        return { y: -distance, opacity: 0 }
      case 'down':
        return { y: distance, opacity: 0 }
      default:
        return { x: -distance, opacity: 0 }
    }
  }

  const getAnimateTransform = () => {
    return { x: 0, y: 0, opacity: 1 }
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitialTransform()}
      animate={inView ? getAnimateTransform() : getInitialTransform()}
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
