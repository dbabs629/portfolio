import ProjectPage from './ProjectPage'
import projectLowResImg from '../../assets/images/portfolio-01.PNG'
import projectHighResImg from '../../assets/images/portfolio-01.PNG'

function PortfolioProjectPage() {
  let projectLowResImgs = [projectLowResImg]
  let projectHighResImgs = [projectHighResImg]
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
  let textList = ['Text 1', 'Text 2', 'Text 3', 'Text 4', 'Text 5', 'Text 6']

  return (
    <ProjectPage
      link='https://daniel-babin-portfolio.netlify.app/'
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
export default PortfolioProjectPage
