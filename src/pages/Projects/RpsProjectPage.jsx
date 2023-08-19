import ProjectPage from './ProjectPage'
import lowResProjectImg from '../../assets/images/ryunosuke-kikuno-Okf1gMEj9To-unsplash-lowres.jpg'
import highResProjectImg from '../../assets/images/ryunosuke-kikuno-Okf1gMEj9To-unsplash.jpg'

function RpsProjectPage() {
  let skillList = ['HTML', 'CSS', 'JavaScript', 'Git']
  let altImgList = ['alt 1', 'alt 2', 'alt 3']
  let projectImgs = [lowResProjectImg, highResProjectImg]

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
