// This module fetches GitHub repositories and their metadata for the website portfolio.

import fetch from "node-fetch";

const GITHUB_API = "https://api.github.com";
const GITHUB_USERNAME = process.env.GITHUB_USERNAME
const PORTFOLIO_TAG = "portfolio";      // only repos with this tag will be fetched

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function fetchPortfolioRepos() {
    const res = await fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}/repos?per_page=100`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github.mercy-preview+json" 
        }
    });

    if (!res.ok) {
        console.error("GitHub API error:", res.statusText);
        return [];
    }

    const repos = await res.json() as any[];

    // Filter repos that have the `portfolio` topic
    const portfolioRepos = repos.filter((repo: any) =>
        repo.topics.includes(PORTFOLIO_TAG)
    );

    return portfolioRepos;
}

export async function fetchPortfolioMetadata(repoName: string) {
    const res = await fetch(
        `${GITHUB_API}/repos/${GITHUB_USERNAME}/${repoName}/contents/portfolio.json`,
        {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
                Accept: "application/vnd.github.v3.raw"
            }
        }
    );

    if (!res.ok) {
        console.warn(`No portfolio.json found for ${repoName}`);
        return null;
    }

    const metadata = await res.json();
    return metadata;
}
