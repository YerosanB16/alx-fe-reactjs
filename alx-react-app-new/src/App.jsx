
import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'
import WelcomeMessage from './components/WelcomeMessage'
import UserProfile from './components/UserProfile.jsx'
import Counter from './components/Counter.jsx'
function App() {

  return (
    <>
      <Header />
      <MainContent />
      <UserProfile
        name="Yerosen"
        age={30}
        bio="Software Developer"
      />
      <Footer />
      <WelcomeMessage />
      <Counter />

    </>
  )
}

export default App
