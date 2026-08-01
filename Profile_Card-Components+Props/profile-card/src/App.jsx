import './App.css'
import ProfileCard from './components/ProfileCard/ProfileCard.jsx'
import profile from './data/profile.js'

function App() {

  return (
    <>
      <ProfileCard profile={profile}/>
    </>
  )
}

export default App
