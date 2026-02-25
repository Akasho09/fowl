import { Octokit } from '@octokit/rest';
import { RequestError } from "@octokit/request-error";

export interface Issue {
  title: string;
  state: 'open' | 'closed';
  createdAt: string;
  url: string;
}

type GitHubIssue = {
  title: string;
  state: 'open' | 'closed';
  created_at: string;
  html_url: string;
};

interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string | null;
  location: string | null;
  bio: string | null;
  blog?: string | null;
  email?: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at?: string;
  starred_url? : string;
  repos_url : string
}

const token = process.env.GIT_TOKEN;

const octokit = new Octokit({
      auth: token || undefined, 
});

export async function getUser(username: string): Promise<GitHubUser | null> {

  try {
    const { data } = await octokit.users.getByUsername({ username });

return {
      login: data.login,
      name: data.name || data.login,
      avatar_url: data.avatar_url,
      html_url: data.html_url,
      bio: data.bio,
      followers: data.followers,
      following: data.following,
      public_repos: data.public_repos,
      location: data.location,
      company: data.company,
      starred_url : data.starred_url ,
      repos_url : data.repos_url ,
    };
  } catch (err) {
    console.error("Error fetching GitHub user:", err);
    return null;
  }
}

export async function getIssues(repo: string): Promise<Issue[] | null> {
  try {
    const response = await octokit.request('GET /repos/{owner}/{repo}/issues', {
      owner: 'Akasho09',
      repo : repo,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });

    if (!Array.isArray(response.data)) {
      console.warn("Unexpected response structure from GitHub API.");
      return null;
    }

    const returnData: Issue[] = (response.data as GitHubIssue[]).map((d) => ({
      title: d.title,
      state: d.state,
      createdAt: new Date(d.created_at).toLocaleDateString(),
      url: d.html_url,
    }));

    return returnData;
  } catch (error) {
    const error1 = error as RequestError;
    // Log error details for debugging
    if (error1.status === 404) {
      console.error(`Repository "${repo}" not found.`);
    } else if (error1.status === 403) {
      console.error("API rate limit exceeded or access forbidden.");
    } else {
      console.error("An error occurred while fetching issues:", error1.message);
    }

    return null;
  }
}