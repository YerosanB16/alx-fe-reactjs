// src/App.jsx
import Search from "./components/Search";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-center pt-6">GitHub User Search</h1>
      <Search />
    </div>
  );
}
