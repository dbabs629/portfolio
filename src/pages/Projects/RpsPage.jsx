import rps_small_01 from '../../assets/images/rps-small-01.png'
import rps_small_02 from '../../assets/images/rps-small-02.png'
import rps_small_03 from '../../assets/images/rps-small-03.png'
import rps_small_04 from '../../assets/images/rps-small-04.png'
import rps_small_05 from '../../assets/images/rps-small-05.png'
import rps_small_06 from '../../assets/images/rps-small-06.png'

import rps_01 from '../../assets/images/rps-01.png'
import rps_02 from '../../assets/images/rps-02.PNG'
import rps_03 from '../../assets/images/rps-03.PNG'
import rps_04 from '../../assets/images/rps-04.PNG'
import rps_05 from '../../assets/images/rps-05.PNG'
import rps_06 from '../../assets/images/rps-06.PNG'
import ProjectPage from './ProjectPage'

export default function RpsPage() {
  let projectLowResImgs = [
    rps_small_01,
    rps_small_02,
    rps_small_03,
    rps_small_04,
    rps_small_05,
    rps_small_06,
  ]
  let projectHighResImgs = [rps_01, rps_02, rps_03, rps_04, rps_05, rps_06]
  let altImgList = ['alt 1', 'alt 2', 'alt 3', 'alt 4', 'alt 5', 'alt 6']
  let skillList = ['HTML', 'CSS', 'JavaScript', 'Git']
  let textList = [
    'Rock Paper Scissors is a code challenge from Frontend Mentor website that shows designs of a project and I coded the project myself. The web app is responsive and I built it using vanilla Javascript, CSS and HTML. I built the bonus design making it Rock, Paper, Scissors, Lizard, Spock and embbeded a video from Youtube from the TV Show The Big Bang Theory that explains the rules of the game.',
    'The user has five options to choose from and once the user clicks on one, the computer uses the Math.Random method to pick a random option. I used if statements to check the win/tie/lose conditions and the score increases when the user wins, decreases when the computer wins and remains the same if they tie. ',
    'The Rules button at the bottom right corner will make a modal pop up and display a diagram that explains the rules of the game. The user can click anywhere on the page or the X on the top right corner to close the modal. ',
    'When the modal is open, the user can click a link that opens an embedded Youtube video link that explains the rules of the game. The user can click anywhere outside of the modal or the X on the top right corner to close the video. ',
    'I ran into some UI issues, I had to know how they made the button options look 3D and I figured out that I could use two circles and shadow to create the 3D effect on the button options.',
  ]

  return (
    <>
      <ProjectPage
        link='https://daniel-babin-rps-game.netlify.app/'
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
