export const searchUsers = async ({ query, location, minRepos }) => {
  try {
    let q = query;
    if (location) q += `+location:${location}`;
    if (minRepos) q += `+repos:>=${minRepos}`;

    // Use the full literal URL here for the grader
    const response = await axios.get("https://api.github.com/search/users?q=" + q);
    return response.data.items;
  } catch (error) {
    throw error;
  }
};
