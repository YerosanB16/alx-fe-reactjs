import axios from "axios";

// Basic search by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Advanced search with query, location, minRepos
export const searchUsers = async ({ query, location, minRepos }) => {
  try {
    let q = query;
    if (location) q += `+location:${location}`;
    if (minRepos) q += `+repos:>=${minRepos}`;

    const response = await axios.get("https://api.github.com/search/users?q=" + q);
    return response.data.items;
  } catch (error) {
    throw error;
  }
};
