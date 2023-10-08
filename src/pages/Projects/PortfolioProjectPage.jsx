import ProjectPage from './ProjectPage'
import projectLowResImg from '../../assets/images/portfolio-low-1.jpg'
import projectHighResImg from '../../assets/images/portfolio-high-2.PNG'

function PortfolioProjectPage() {
  let skillList = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'TailwindCSS',
    'NPM',
    'Git',
  ]
  let altImgList = ['alt 1', 'alt 2', 'alt 3']
  let textList = ['Text 1', 'Text 2', 'Text 3', 'Text 4', 'Text 5', 'Text 6']
  let projectLowResImgs = [projectLowResImg]
  let projectHighResImgs = [projectHighResImg]

  return (
    <ProjectPage
      link='https://daniel-babin-portfolio.netlify.app/'
      title='Portfolio Website'
      altImgList={altImgList}
      projectHighResImgs={projectHighResImgs}
      projectImgs={projectHighResImgs}
      projectLowResImgs={projectLowResImgs}
      skillList={skillList}
      textList={textList}
    />
  )
}
export default PortfolioProjectPage
