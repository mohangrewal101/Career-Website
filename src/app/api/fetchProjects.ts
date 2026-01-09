// This API route fetches dynamic projects from GitHub

import type { NextApiRequest, NextApiResponse } from "next";
import { fetchPortfolioRepos, fetchPortfolioMetadata } from "../../../lib/github";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const repos = await fetchPortfolioRepos();

        // For each tagged repo, fetch its portfolio.json metadata
        const metadataPromises = repos.map(async (repo) => {
            const metadata = await fetchPortfolioMetadata(repo.name);
            if (metadata && typeof metadata === "object") {
                return {
                    ...metadata,
                    github: repo.html_url,
                    stars: repo.stargazers_count
                };
            }
            return null;
        });

        const dynamicProjects = (await Promise.all(metadataPromises)).filter(Boolean);

        res.status(200).json(dynamicProjects);
    } catch (err) {
        console.error("Error fetching projects:", err);
        res.status(500).json({ error: "Failed to fetch projects" });
    }
}
