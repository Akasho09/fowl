import octokit from "./octo";  

export const getRepos = async () => {
  const response = await octokit.rest.repos.listForUser({
    username: "Akasho09",
    sort: "updated",
    direction: "desc",
  });

  return response.data; // return only repos data
};




