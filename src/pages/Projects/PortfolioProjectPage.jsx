import ProjectPage from './ProjectPage'
import projectPorfolioLowResImg from '../../assets/images/portfolio-low.jpg'
import projectPorfolioHighResImg from '../../assets/images/portfolio-high.PNG'

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
  let projectImgs = [projectPorfolioLowResImg, projectPorfolioHighResImg]

  return (
    <div>
      <ProjectPage
        title='Rock Paper Scissors Lizard Spock Game'
        list={skillList}
        alt={altImgList}
        imgList={projectImgs}
        link='https://daniel-babin-mock-landing-page.netlify.app/'
      />
    </div>
  )
}
export default PortfolioProjectPage
