import UserContext from './UserContext';
import UserProfile from './components/UserProfile';

function App() {
  const userData = { 
    name: "Jane Doe", 
    age: 25, 
    bio: "I love coding and traveling." 
  };

  return (
    <UserContext.Provider value={userData}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
