import React, { useState } from "react";
import { fetchUserData, searchUsers } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      let result;
      if (location || minRepos) {
        result = await searchUsers({ query: username, location, minRepos });
        setUsers(result);
      } else {
        const user = await fetchUserData(username);
        setUsers([user]);
      }
    } catch (err) {
      setError("Looks like we can't find the user");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repos (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="mt-4 flex flex-col gap-4">
        {users.map((user) => (
          <div key={user.id} className="flex items-center gap-4 border p-2 rounded">
            <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
            <div>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-600"
              >
                {user.login}
              </a>
              {user.location && <p>Location: {user.location}</p>}
              {user.public_repos !== undefined && <p>Repos: {user.public_repos}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
