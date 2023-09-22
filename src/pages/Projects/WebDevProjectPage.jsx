import ProjectPage from './ProjectPage'
import projectWebdevLowResImg from '../../assets/images/webdev-mocksite-low-1.jpg'
import projectWebdevHighResImg from '../../assets/images/webdev-mocksite-high-2.png'

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
  let projectImgs = [projectWebdevLowResImg, projectWebdevHighResImg]

  return (
    <div>
      <ProjectPage
        title='Webdev Mocksite Landing Page'
        list={skillList}
        alt={altImgList}
        imgList={projectImgs}
        link='https://daniel-babin-mock-landing-page.netlify.app/'
      />
    </div>
  )
}
export default WebDevProjectPage
