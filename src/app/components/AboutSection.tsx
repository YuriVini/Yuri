'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

enum TAB_KEYS {
  SKILLS = "skills",
  EDUCATION = "education",
  LANGUAGES = "languages",
} 
  
const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className='list-disc pl-2'>
        <li>React Native</li>
        <li>React</li>
        <li>Typescript</li>
        <li>JavaScript</li>
        <li>Expo</li>
        <li>Redux</li>
        <li>Python</li>
        <li>Django</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className='list-disc pl-2'>
        <li>Bachelor of Information Systems</li>
        <li>University of Feira de Santana, Bahia, Brazil</li>
      </ul>
    ),
  },
  {
    title: 'Languages',
    id: 'languages',
    content: (
      <ul className='list-disc pl-2'>
        <li>Portuguese - Native</li>
        <li>English - B2</li>
      </ul>
    ),
  },
]

const AboutSection = () => {
  const [tab, setTab] = useState<TAB_KEYS>(TAB_KEYS.SKILLS)
  const [_isPending, startTransition] = useTransition()

  const handleTabChange = (id: TAB_KEYS) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className='text-white' id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image
          width={500}
          height={500}
          src='/images/about-image.jpeg'
          alt='desk with computer and coffe'
        />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            I am a Mobile Developer with a passion for creating interactive and
            responsive mobile applications. Throughout my experiences, I developed 
            a lot of technical skills such as React Native, Typescript, JavaScript, React, Redux, 
            SQLite, Expo, Python, Django, HTML, CSS, and Git. Some of soft skill are quick learner, 
            always looking to expand my skill set and team player excited to work with 
            others to create amazing applications.
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton
              active={tab === TAB_KEYS.SKILLS}
              selectTab={() => handleTabChange(TAB_KEYS.SKILLS)}
            >
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton
              active={tab === TAB_KEYS.EDUCATION}
              selectTab={() => handleTabChange(TAB_KEYS.EDUCATION)}
            >
              {' '}
              Education{' '}
            </TabButton>
            <TabButton
              active={tab === TAB_KEYS.LANGUAGES}
              selectTab={() => handleTabChange(TAB_KEYS.LANGUAGES)}
            >
              {' '}
              Languages{' '}
            </TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
