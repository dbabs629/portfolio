import { useRef } from 'react'
import Heading from '../../components/Heading'
import SkillList from '../../components/SkillList'
import Slider from '../../components/Slider'
import rpsLowResImg from '../../assets/images/rps-low-1.jpg'
import rpsHighResImg from '../../assets/images/rps-high-2.png'
import rpsWinImg from '../../assets/images/rps-win-3.PNG'
import rpsLoseImg from '../../assets/images/rps-lose-4.PNG'
import rpsTieImg from '../../assets/images/rps-tie-5.PNG'
import rpsRulesImg from '../../assets/images/rps-rules-6.PNG'
import rpsVideoImg from '../../assets/images/rps-rules-video-7.PNG'
import useObserver from '../../components/useObserver'

function RpsProjectPage() {
  let skillList = ['HTML', 'CSS', 'JavaScript', 'Git']
  let altImgList = ['alt 1', 'alt 2', 'alt 3', 'alt 4', 'alt 5', 'alt 6']
  let textList = [
    'Rock Paper Scissors is a code challenge from Frontend Mentor website that shows designs of a project and I coded the project myself. The web app is responsive and I built it using vanilla Javascript, CSS and HTML. I built the bonus design making it Rock, Paper, Scissors, Lizard, Spock and embbeded a video from Youtube from the TV Show The Big Bang Theory that explains the rules of the game.',
    'The user has five options to choose from and once the user clicks on one, the computer uses the Math.Random method to pick a random option. I used if statements to check the win/tie/lose conditions and the score increases when the user wins, decreases when the computer wins and remains the same if they tie. ',
    'The Rules button at the bottom right corner will make a modal pop up and display a diagram that explains the rules of the game. The user can click anywhere on the page or the X on the top right corner to close the modal. ',
    'When the modal is open, the user can click a link that opens an embedded Youtube video link that explains the rules of the game. The user can click anywhere outside of the modal or the X on the top right corner to close the video. ',
    'I ran into some UI issues, I had to know how they made the button options look 3D and I figured out that I could use two circles and shadow to create the 3D effect on the button options.',
  ]
  let projectLowResImgs = [
    rpsLowResImg,
    rpsLowResImg,
    rpsLowResImg,
    rpsLowResImg,
    rpsLowResImg,
    rpsLowResImg,
  ]
  let projectHighResImgs = [
    rpsHighResImg,
    rpsWinImg,
    rpsLoseImg,
    rpsTieImg,
    rpsRulesImg,
    rpsVideoImg,
  ]

  const projectRef = useRef()
  useObserver(projectRef)

  return (
    <article
      ref={projectRef}
      className='mx-auto flex w-4/5 max-w-full flex-col items-center space-y-8 lg:w-4/5 lg:max-w-[1050px]'>
      <div className='mx-auto w-full pt-32'>
        <Heading title='Rock Paper Scissors Game' />
      </div>
      <div className='w-full'>
        <Slider
          imgHighResList={projectHighResImgs}
          imgLowResList={projectLowResImgs}
          alt={altImgList}
          link='https://daniel-babin-rps-game.netlify.app/'
        />
      </div>
      <div className='hide hide-left mx-auto sm:w-4/5'>
        <SkillList list={skillList} />
      </div>
      {/* <div className='hide hide-right w-4/5 space-y-6 text-sm text-primary lg:text-lg'>
        {textList.map((item) => (
          <p>{item}</p>
        ))}
      </div> */}
    </article>
  )
}
export default RpsProjectPage
