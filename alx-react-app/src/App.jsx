
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
<<<<<<< HEAD
      <UserProfile
        name="Yerosen"
        age={30}
        bio="Software Developer"
=======
      <UserProfile 
        name="Alice"
        age="25"
        bio="Loves hiking and photography" 
>>>>>>> 1bd9da50323c6495f0d34de3213f4334ebaac714
      />
      <Footer />
      <WelcomeMessage />

    </>
  )
}

export default App
