import ProjectPage from './ProjectPage'
import projectRpsLowResImg from '../../assets/images/rps-low-1.jpg'
import projectRpsHighResImg from '../../assets/images/rps-high-2.png'
import projectRpsWinImg from '../../assets/images/rps-win-3.PNG'
import projectRpsLoseImg from '../../assets/images/rps-lose-4.PNG'
import projectRpsTieImg from '../../assets/images/rps-tie-5.PNG'
import projectRpsRulesImg from '../../assets/images/rps-rules-6.PNG'
import projectRpsVideoImg from '../../assets/images/rps-rules-video-7.PNG'

function RpsProjectPage() {
  let skillList = ['HTML', 'CSS', 'JavaScript', 'Git']
  let altImgList = ['alt 1', 'alt 2', 'alt 3', 'alt 4', 'alt 5', 'alt 6']
  let projectLowResImgs = [projectRpsLowResImg]
  let projectHighResImgs = [projectRpsHighResImg]
  let textList = [
    '1/6 Rock Paper Scissors is a code challenege on Frontend Mentor website that shows designs of a project and I coded the project myself. The web app is responsive and coded using vanilla Javascript and CSS. Originally the game was Rock, Paper, Scissors and only featured the rules diagram image. Instead I added a couple of things to the game making it Rock, Paper, Scissors, Lizard, Spock and I embedded a video from Youtube from the TV Show <i>The Big Bang Theory</i> which explains the rules of the game. The user has five options to choose from and once the user clicks on one, the computer uses the Math.Random method to pick a random option. I used if statements to check the win/tie/lose conditions and the score increases when the user wins, decreases when the computer wins and remains the same if they tie.',
    '2/6 If the user wins, a message is displayed that says you win and the score increases by one. The user can hit the play again button to continue and the options are displayed again with the new score.',
    '3/6 If the user loses, a message is displayed that says you lose and the score decreases by one unless the score is already at zero. The user can hit the play again button to continue and the options are displayed again with the new score or score remains at zero.',
    '4/6 If the user and computer tie, a message is displayed that says you tie and the score remains the same. The user can hit the play again button to continue and the options are displayed again with the same score',
    '5/6 The Rules button at the bottom right corner will make a modal pop up and display a diagram that explains the rules of the game. The user can click anywhere on the page or the X on the top right corner to close the modal.',
    '6/6 When the modal is open, the user can click a link that opens an embedded Youtube video link that explains the rules of the game and is where I got the idea to add more options to the game. The user can click anywhere outside of the modal or the X on the top right corner to close the video.',
  ]
  let imgArray = [
    projectRpsHighResImg,
    projectRpsWinImg,
    projectRpsLoseImg,
    projectRpsTieImg,
    projectRpsRulesImg,
    projectRpsVideoImg,
  ]

  return (
    <div>
      <ProjectPage
        title='Rock Paper Scissors Lizard Spock Game'
        list={skillList}
        alt={altImgList}
        lowResImgList={projectLowResImgs}
        highResImgList={projectHighResImgs}
        imgArray={imgArray}
        link='https://daniel-babin-rps-game.netlify.app/'
        textList={textList}
      />
    </div>
  )
}
export default RpsProjectPage
