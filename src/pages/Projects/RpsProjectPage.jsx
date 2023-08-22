import ProjectPage from './ProjectPage'
import projectRpsLowResImg from '../../assets/images/rps-low.jpg'
import projectRpsHighResImg from '../../assets/images/rps-high.png'

function RpsProjectPage() {
  let skillList = ['HTML', 'CSS', 'JavaScript', 'Git']
  let altImgList = ['alt 1', 'alt 2', 'alt 3']
  let projectImgs = [projectRpsLowResImg, projectRpsHighResImg]

  return (
    <div>
      <ProjectPage
        title='Rock Paper Scissors Lizard Spock Game'
        list={skillList}
        alt={altImgList}
        imgList={projectImgs}
        link='https://daniel-babin-rps-game.netlify.app/'
      />
    </div>
  )
}
export default RpsProjectPage
