'use client'
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'

enum PROJECT_TAG {
  ALL = 'All',
  MOBILE = 'Mobile',
  WEB = 'Web',
  BACK = 'Backend',
}

const projectsData = [
  {
    id: 0,
    title: 'Solyd App',
    description:
      'No aplicativo Solyd, você poderá começar com os conceitos básicos de segurança cibernética e desenvolver suas habilidades em qualquer lugar com os tutoriais deste aplicativo.',
    image: '/images/projects/0.png',
    tag: ['All', 'Mobile'],
    gitUrl: '/',
    previewUrl:
      'https://play.google.com/store/apps/details?id=com.mindz.solyd&hl=pt_BR',
  },
  {
    id: 1,
    title: 'Cartão de Todos App',
    description:
      'The Cartão de Todos card is the biggest discount card in Brazil. With it, you have access to health, education, leisure and even earn cashback and lots of discounts on your purchases!',
    image: '/images/projects/1.png',
    tag: ['All', 'Mobile'],
    gitUrl: '/',
    previewUrl:
      'https://play.google.com/store/apps/details?id=com.cartaodetodoswalletapp&hl=pt_BR&gl=US&pli=1',
  },
  {
    id: 2,
    title: 'SemParar App',
    description:
      'SuperApp has more than 20 services for your daily life with solutions for you, your car, Insurance, Shop and much more!',
    image: '/images/projects/2.png',
    tag: ['All', 'Mobile'],
    gitUrl: '/',
    previewUrl:
      'https://play.google.com/store/apps/details?id=com.semparar.semparar.minhaconta2018&hl=pt_BR&gl=US',
  },
  {
    id: 3,
    title: 'Assai App',
    description:
      'The app brings exclusive discounts, content, offer newspapers and a digital wallet, in addition to being a customer relationship channel and placing orders with Assaí Atacadista.',
    image: '/images/projects/3.png',
    tag: ['All', 'Mobile'],
    gitUrl: '/',
    previewUrl:
      'https://play.google.com/store/apps/details?id=com.assai.app&hl=pt_BR&gl=US',
  },
  {
    id: 4,
    title: 'GamePlay App',
    description:
      'Application to help you connect and organize fun and play with friends. Create groups to play your favorite games with your friends with this App that has Discord authentication.',
    image: '/images/projects/4.png',
    tag: ['Mobile'],
    gitUrl: 'https://github.com/YuriVini/GamePlayApp',
    previewUrl: '/',
  },
  {
    id: 5,
    title: 'GoFinance App',
    description:
      'Application to control your finances, seeing graphics with OAuth (Google and Apple Authentication)',
    image: '/images/projects/5.png',
    tag: ['Mobile'],
    gitUrl: 'https://github.com/YuriVini/gofinances',
    previewUrl: '/',
  },
  {
    id: 6,
    title: 'Stream.Data App',
    description: 'App to see data from Twitch api based in your Twitch User.',
    image: '/images/projects/6.png',
    tag: ['Mobile'],
    gitUrl: 'https://github.com/YuriVini/stream-data-challenge',
    previewUrl: '/',
  },
  {
    id: 7,
    title: 'Be The Hero',
    description:
      '"Be the Hero" its a project that you may put a problem that needs to be solved. You just need to register your company and the problem. And someone will take the task and solve it.',
    image: '/images/projects/7.png',
    tag: ['All', 'Web', 'Backend'],
    gitUrl: 'https://github.com/YuriVini/SemanaOmniStack11',
    previewUrl: '/',
  },
  {
    id: 8,
    title: 'Proffy',
    description:
      'Proffy is a Web and Mobile application designed to help connect students and teachers. Therefore, this application offers teachers the possibility of registering classes, being able to add information such as the subject, cost and schedule and students the possibility of searching for registered classes',
    image: '/images/projects/8.png',
    tag: ['All', 'Web', 'Backend'],
    gitUrl: 'https://github.com/YuriVini/Proffy',
    previewUrl: '/',
  },
  {
    id: 9,
    title: 'AMA - Ask Me Anything',
    description:
      'AMA is a Web and Mobile application designed to help people in their questions. Therefore, this application offers users the possibility of registering a room, being able to add questions, reactions and mark as answered.',
    image: '/images/projects/10.png',
    tag: ['All', 'Web', 'Backend'],
    gitUrl: 'https://github.com/YuriVini/ask-me-anything',
    previewUrl: '/',
  },
]

const ProjectsSection = () => {
  const [tag, setTag] = useState<PROJECT_TAG>(PROJECT_TAG.ALL)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleTagChange = (newTag: PROJECT_TAG) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  )

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <section id='projects'>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        Some of Projects
      </h2>
      <div className='text-white flex flex-wrap justify-center items-center gap-2 py-6'>
        <ProjectTag
          name={PROJECT_TAG.ALL}
          onClick={handleTagChange}
          isSelected={tag === PROJECT_TAG.ALL}
        />
        <ProjectTag
          name={PROJECT_TAG.WEB}
          onClick={handleTagChange}
          isSelected={tag === PROJECT_TAG.WEB}
        />
        <ProjectTag
          name={PROJECT_TAG.MOBILE}
          onClick={handleTagChange}
          isSelected={tag === PROJECT_TAG.MOBILE}
        />
        <ProjectTag
          name={PROJECT_TAG.BACK}
          onClick={handleTagChange}
          isSelected={tag === PROJECT_TAG.BACK}
        />
      </div>
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project?.id}
            variants={cardVariants}
            initial='initial'
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsSection
