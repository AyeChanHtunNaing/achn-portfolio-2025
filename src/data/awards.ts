export type AwardItem = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  tags: string[];
  credentialLink?: string;
  association?: string;
};

export const awardsData: AwardItem[] = [
  {
    id: 1,
    title: 'GitHub Foundations',
    issuer: 'GitHub',
    date: 'Nov 2024',
    description: 'Certified in foundational Git operations, repository management, GitHub workflows, project tracking, and collaborative software development practices.',
    tags: ['Git & GitHub', 'DevOps', 'Version Control'],
    credentialLink: 'https://www.credly.com/badges/7ccddf0a-83a6-4100-a718-c56993e9c86a',
  },
  {
    id: 2,
    title: '2nd Prize, Quality Control Competition (DAT)',
    issuer: 'DIR ACE Technology Ltd',
    date: 'Nov 2023',
    description: 'While working at DAT, I created a Chrome extension using JavaScript that automates the download process. Unlike previous methods that used VBA, my extension significantly reduced the time it takes to download files. The manual process used to take 6 hours, but with my extension, it now only takes 30 minutes. As a result of this achievement, I was awarded the second prize in the Quality Control Competition in 2023.',
    tags: ['Quality Control', 'Automation', 'Chrome Extension'],
    association: 'DAT (Daiwa Institute of Research Group)',
  },
  {
    id: 3,
    title: 'ADSE National Finalist (Myanmar)',
    issuer: 'ASEAN DATA SCIENCE EXPLORER',
    date: 'Sep 2019',
    description: 'I participated in the analysis of the Sustainable Development Goal (SDG) of Good Health and Well Being as part of the ASEAN Data Science Explorer competition in 2019. I was honored to be selected as one of the top ten finalists in Myanmar for this competition.',
    tags: ['Data Science', 'SDGs', 'National Finalist'],
    association: 'University of Computer Studies, Yangon',
  },
];
