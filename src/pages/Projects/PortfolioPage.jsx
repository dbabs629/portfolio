import ProjectPage from './ProjectPage'
import portfolio_small_01 from '../../assets/images/portfolio-01.PNG'
import portfolio_small_02 from '../../assets/images/portfolio-02.PNG'
import portfolio_small_03 from '../../assets/images/portfolio-03.PNG'
import portfolio_small_04 from '../../assets/images/portfolio-04.PNG'
import portfolio_small_05 from '../../assets/images/portfolio-05.PNG'
import portfolio_small_06 from '../../assets/images/portfolio-06.PNG'
import portfolio_small_07 from '../../assets/images/portfolio-07.PNG'
import portfolio_small_08 from '../../assets/images/portfolio-08.PNG'
import portfolio_small_09 from '../../assets/images/portfolio-09.PNG'
import portfolio_01 from '../../assets/images/portfolio-01.PNG'
import portfolio_02 from '../../assets/images/portfolio-02.PNG'
import portfolio_03 from '../../assets/images/portfolio-03.PNG'
import portfolio_04 from '../../assets/images/portfolio-04.PNG'
import portfolio_05 from '../../assets/images/portfolio-05.PNG'
import portfolio_06 from '../../assets/images/portfolio-06.PNG'
import portfolio_07 from '../../assets/images/portfolio-07.PNG'
import portfolio_08 from '../../assets/images/portfolio-08.PNG'
import portfolio_09 from '../../assets/images/portfolio-09.PNG'

export default function PortfolioPage() {
  let projectLowResImgs = [
    portfolio_small_01,
    portfolio_small_02,
    portfolio_small_03,
    portfolio_small_04,
    portfolio_small_05,
    portfolio_small_06,
    portfolio_small_07,
    portfolio_small_08,
    portfolio_small_09,
  ]
  let projectHighResImgs = [
    portfolio_01,
    portfolio_02,
    portfolio_03,
    portfolio_04,
    portfolio_05,
    portfolio_06,
    portfolio_07,
    portfolio_08,
    portfolio_09,
  ]
  let altImgList = ['alt 1', 'alt 2', 'alt 3']
  let skillList = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'TailwindCSS',
    'NPM',
    'Git',
  ]
  let textList = [
    'I made my portfolio website to showcase my work and knowledge in software development. I graduated from Humber College with a diploma in Web Design and Interactive Media. I learned  about Web Design, User Experience, Front-end & Back-end Development. I chose Tailwindcss and React because it’s fast to develop a project from scratch by creating reusable React components and using Tailwindcss’ utility classes. ',
    'I chose to host my projects with Netlify because of the continuous deployment feature, each time I make changes to my code and push to Github, Netlify will update the production build and redeploy the project. The other benefit to Netlify is that it provides free hosting for small personal projects. I am working on I am currently working on a Family Tree app with React, Node.js, Typescript and Firebase.',
  ]

  return (
    <ProjectPage
      demoLink='https://daniel-babin-portfolio.netlify.app/'
      codeLink='https://github.com/dbabs629/portfolio'
      title='Portfolio Website'
      projectHighResImgs={projectHighResImgs}
      projectLowResImgs={projectLowResImgs}
      projectImgs={projectHighResImgs}
      altImgList={altImgList}
      skillList={skillList}
      textList={textList}
    />
  )
}
