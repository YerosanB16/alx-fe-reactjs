// src/App.jsx
import Search from "./components/Search";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center pt-6">
        GitHub User Search (Advanced)
      </h1>
      <Search />
    </div>
  );
}
