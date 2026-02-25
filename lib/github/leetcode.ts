type AcEntry = {
  difficulty: string;
  count: number;
  submissions: number;
};

type LeetCodeProfile = {
  username: string;
  profile: {
    realName: string;
    ranking: number;
    countryName: string;
  };
  submitStats: {
    acSubmissionNum: AcEntry[];
  };
};

export async function getLeetCodeProfile(): Promise<LeetCodeProfile | null> {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
      "http://localhost:3000";

    const res = await fetch(
      `${baseUrl}/api/leetcode?username=aakashbwd`,
      {
        next: { revalidate: 36000 }, // ✅ 10 hour ISR
      }
    );

    if (!res.ok) return null;

    return res.json();
  } catch (error) {
    console.error("Error fetching LeetCode profile:", error);
    return null;
  }
}

export function find(
  profile: LeetCodeProfile | null,
  difficulty: string
) {
  return (
    profile?.submitStats?.acSubmissionNum?.find(
      (d) => d.difficulty === difficulty
    )?.count ?? 0
  );
}