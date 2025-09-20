import axios from "axios";

const BASE_URL = "https://api.github.com";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Advanced search function
export const searchUsers = async ({ query, location, minRepos }) => {
  try {
    let q = query;
    if (location) q += `+location:${location}`;
    if (minRepos) q += `+repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}/search/users?q=${q}`);
    return response.data.items; // array of users
  } catch (error) {
    throw error;
  }
};
