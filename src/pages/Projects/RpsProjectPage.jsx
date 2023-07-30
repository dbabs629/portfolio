import Nav from '../../components/nav/Nav'
import ProjectPage from '../../components/ProjectPage'

function RpsProjectPage() {
  let skillList = ['HTML', 'CSS', 'JavaScript', 'Git']

  return (
    <div>
      <Nav page='/' />
      <ProjectPage
        title='Rock Paper Scissors Lizard Spock Game'
        list={skillList}
      />
    </div>
  )
}
export default RpsProjectPage
