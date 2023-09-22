import ProjectPage from './ProjectPage'
import projectPorfolioLowResImg from '../../assets/images/portfolio-low-1.jpg'
import projectPorfolioHighResImg from '../../assets/images/portfolio-high-2.PNG'

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
  let projectLowResImgs = [projectPorfolioLowResImg]
  let projectHighResImgs = [projectPorfolioHighResImg]

  return (
    <div>
      <ProjectPage
        title='Portfolio Website'
        list={skillList}
        alt={altImgList}
        lowResImgList={projectLowResImgs}
        highResImgList={projectHighResImgs}
        link='https://daniel-babin-portfolio.netlify.app/'
        textList={textList}
      />
    </div>
  )
}
export default PortfolioProjectPage
