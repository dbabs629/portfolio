import ProjectPage from './ProjectPage'
import webdev_small_01 from '../../assets/images/webdev-mocksite-small-01.png'
import webdev_small_02 from '../../assets/images/webdev-mocksite-small-02.png'
import webdev_small_03 from '../../assets/images/webdev-mocksite-small-03.png'
import webdev_small_04 from '../../assets/images/webdev-mocksite-small-04.png'
import webdev_small_05 from '../../assets/images/webdev-mocksite-small-05.png'
import webdev_small_06 from '../../assets/images/webdev-mocksite-small-06.png'
import webdev_small_07 from '../../assets/images/webdev-mocksite-small-07.png'
import webdev_small_08 from '../../assets/images/webdev-mocksite-small-08.png'
import webdev_small_09 from '../../assets/images/webdev-mocksite-small-09.png'
import webdev_small_10 from '../../assets/images/webdev-mocksite-small-10.png'
import webdev_small_11 from '../../assets/images/webdev-mocksite-small-11.png'
import webdev_small_12 from '../../assets/images/webdev-mocksite-small-12.png'
import webdev_small_13 from '../../assets/images/webdev-mocksite-small-13.png'

import webdev_01 from '../../assets/images/webdev-mocksite-01.PNG'
import webdev_02 from '../../assets/images/webdev-mocksite-02.PNG'
import webdev_03 from '../../assets/images/webdev-mocksite-03.PNG'
import webdev_04 from '../../assets/images/webdev-mocksite-04.PNG'
import webdev_05 from '../../assets/images/webdev-mocksite-05.PNG'
import webdev_06 from '../../assets/images/webdev-mocksite-06.PNG'
import webdev_07 from '../../assets/images/webdev-mocksite-07.PNG'
import webdev_08 from '../../assets/images/webdev-mocksite-08.PNG'
import webdev_09 from '../../assets/images/webdev-mocksite-09.PNG'
import webdev_10 from '../../assets/images/webdev-mocksite-10.PNG'
import webdev_11 from '../../assets/images/webdev-mocksite-11.PNG'
import webdev_12 from '../../assets/images/webdev-mocksite-12.PNG'
import webdev_13 from '../../assets/images/webdev-mocksite-13.PNG'

function WebDevProjectPage() {
  let projectLowResImgs = [
    webdev_small_01,
    webdev_small_02,
    webdev_small_03,
    webdev_small_04,
    webdev_small_05,
    webdev_small_06,
    webdev_small_07,
    webdev_small_08,
    webdev_small_09,
    webdev_small_10,
    webdev_small_11,
    webdev_small_12,
    webdev_small_13,
  ]
  let projectHighResImgs = [
    webdev_01,
    webdev_02,
    webdev_03,
    webdev_04,
    webdev_05,
    webdev_06,
    webdev_07,
    webdev_08,
    webdev_09,
    webdev_10,
    webdev_11,
    webdev_12,
    webdev_13,
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
