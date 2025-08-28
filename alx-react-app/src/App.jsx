
import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'
import WelcomeMessage from './components/WelcomeMessage'
import UserProfile from './components/UserProfile.jsx'

function App() {

  return (
    <>
      <Header />
      <MainContent />
      <UserProfile 
        name="Alice"
        age="25"
        bio="Loves hiking and photography" 
      />
      <Footer />
      <WelcomeMessage />

    </>
  )
}

export default App
