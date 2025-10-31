'use client';
import { useEffect, useState } from 'react';
import ThreeTexts from '@/components/mainpage/threeText';
import LeetCodeStats from "@/components/LeetCodeStats";
// import GitHubPortfolio from '@/components/git';

type LeetCodeProfile = {
  username: string;
  profile: {
    realName: string;
    ranking: number;
    countryName: string;
  };
  submitStats: {
    acSubmissionNum: {
      difficulty: string;
      count: number;
      submissions: number;
    }[];
  };
};

export default function Page() {
  const [profile, setProfile] = useState<LeetCodeProfile | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch('/api/leetcode?username=aakashbwd');
      const data = await res.json();
      setProfile(data);
    };

    fetchProfile();
  }, []);

  const totalSolved = profile?.submitStats?.acSubmissionNum?.find(d => d.difficulty === 'All')?.count || 0;
  const easySolved = profile?.submitStats?.acSubmissionNum?.find(d => d.difficulty === 'Easy')?.count || 0;
  const mediumSolved = profile?.submitStats?.acSubmissionNum?.find(d => d.difficulty === 'Medium')?.count || 0;
  const hardSolved = profile?.submitStats?.acSubmissionNum?.find(d => d.difficulty === 'Hard')?.count || 0;

  return (
    <div className="h-screen flex overflow-y-auto">
    <div className="h-screen border-r w-[92vw] md:w-[20rem]">
      <ThreeTexts
        t1="LeetCode Profile:"
        t2={
          profile
            ? `Username: ${profile.username}, Rank: ${profile.profile?.ranking}`
            : 'Loading...'
        }
        t3={
          profile
            ? ` \n Problems Solved: ${totalSolved} (E: ${easySolved}, M: ${mediumSolved}, H: ${hardSolved})`
            : ''
        }
        t4={<div>
        <LeetCodeStats 
        solved={totalSolved}
        total={3647}
        easySolved={easySolved}
        easyTotal={890}
        mediumSolved={mediumSolved}
        mediumTotal={1897}
        hardSolved={hardSolved}
        hardTotal={860}
        attempting={13}>
        </LeetCodeStats></div>
          }
      />
    </div>
    <div className="h-screen border-r w-[92vw] md:w-[20rem]">

      <ThreeTexts t1="CodeForces , GFGs etc :" t2="" />
    </div>
    </div>
  );
}
