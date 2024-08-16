'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const AnimatedNumbers = dynamic(
  () => {
    return import('react-animated-numbers')
  },
  { ssr: false }
)

const achievementsList = [
  {
    id: 0,
    metric: 'Projects',
    value: '30',
    postfix: '+',
  },
  {
    id: 1,
    prefix: '~',
    metric: 'App Users',
    value: '1000000,000',
  },
  {
    id: 2,
    metric: 'Certificates',
    value: '10',
    postfix: '+',
  },
  {
    id: 3,
    metric: 'Years',
    value: '5',
  },
]

const AchievementsSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
      <div className='sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between'>
        {achievementsList.map((achievement) => {
          return (
            <div
              key={achievement.id}
              className='flex flex-col items-center justify-center mx-4 my-4 sm:my-0'
            >
              <h2 className='text-white text-4xl font-bold flex flex-row'>
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  locale='en-US'
                  animateToNumber={parseInt(achievement.value)}
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    }
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className='text-[#ADB7BE] text-base'>{achievement.metric}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AchievementsSection