import ProjectPage from './ProjectPage'
import projectLowResImg from '../../assets/images/webdev-mocksite.PNG'
import projectHighResImg from '../../assets/images/webdev-mocksite.PNG'

function WebDevProjectPage() {
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
  let projectImgs = [projectLowResImg, projectHighResImg]

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
export default WebDevProjectPage
