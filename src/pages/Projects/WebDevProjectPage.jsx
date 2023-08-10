import Nav from '../../components/nav/Nav'
import ProjectPage from '../../components/ProjectPage'

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

  return (
    <div>
      <Nav page='/' />
      <ProjectPage
        title='Web Development Company Landing Page'
        list={skillList}
      />
    </div>
  )
}
export default WebDevProjectPage
