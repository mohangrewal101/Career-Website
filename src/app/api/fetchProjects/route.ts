import { fetchPortfolioRepos, fetchPortfolioMetadata } from "../../../../lib/github";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const repos = await fetchPortfolioRepos();
    const metadataPromises = repos.map(async (repo) => {
      const metadata = await fetchPortfolioMetadata(repo.name);
      if (metadata && typeof metadata === "object") {
        return {
          ...metadata,
          github: repo.html_url,
          stars: repo.stargazers_count,
        };
      }
      return null;
    });

    const dynamicProjects = (await Promise.all(metadataPromises)).filter(Boolean);
    return NextResponse.json(dynamicProjects);
  } catch (err) {
    console.error("Error fetching projects:", err);
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
  }
}
