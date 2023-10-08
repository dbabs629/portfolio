import ProjectPage from './ProjectPage'
import projectWebdevLowResImg from '../../assets/images/webdev-mocksite-small-01.png'
import projectWebdevHighResImg from '../../assets/images/webdev-mocksite-01.PNG'

function WebDevProjectPage() {
  let projectLowResImgs = [projectWebdevLowResImg]
  let projectHighResImgs = [projectWebdevHighResImg]
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
    'text 1',
    'text 2',
    'text 3',
    'text 4',
    'text 5',
    'text 6',
    'text 7',
    'text 8',
  ]

  return (
    <>
      <ProjectPage
        link='https://daniel-babin-mock-landing-page.netlify.app/'
        title='Rock Paper Scissors Game'
        projectHighResImgs={projectHighResImgs}
        projectLowResImgs={projectLowResImgs}
        altImgList={altImgList}
        skillList={skillList}
        textList={textList}
      />
    </>
  )
}
export default WebDevProjectPage
