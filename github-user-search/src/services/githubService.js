// src/services/githubService.js
import axios from "axios";

// For advanced search
export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    let query = username || "";

    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );

    return response.data.items; // list of users
  } catch (error) {
    throw error;
  }
};
