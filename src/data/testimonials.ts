export type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
  tags: string[];
};

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Zay Maung Maung Myint (Ethan)',
    role: 'Lead Software Engineer',
    company: 'PI Insurance Technology',
    text: 'I worked with Aye Chan on the BMW project, where she consistently demonstrated strong technical skills and a high level of professionalism. She delivered quality work, communicated effectively, and took ownership of her responsibilities. Her contribution was valuable to the team, and I would confidently recommend her as a software engineer.',
    avatar: '/avatars/avatar-boy.svg',
    tags: ['BMW Project', 'Professionalism', 'Technical Skills'],
  },
  {
    id: 2,
    name: 'Khun Aung Paing',
    role: 'Software Engineer',
    company: 'PI Insurance Technology',
    text: 'I highly recommend Aye Chan for her excellent work on the BMW project. She is hardworking, communicate clearly, and always solve problems quickly and effectively. Her positive attitude and strong technical skills make her great team player and a valuable part of the project.',
    avatar: '/avatars/avatar-boy.svg',
    tags: ['Problem Solving', 'Team Player', 'Communication'],
  },
  {
    id: 3,
    name: 'Nyein Ei San',
    role: 'Senior Programmer',
    company: 'DAT (Daiwa Institute of Research Group)',
    text: 'Aye Chan is an outstanding professional with a strong work ethic and a knack for learning quickly. With a solid background in computer science, she excels as a programmer, demonstrating her ability to work under pressure while maintaining excellent social skills. Aye Chan is known for working hard and smart, constantly seeking to expand her knowledge and skills, making her a lifelong learner in the field.',
    avatar: '/avatars/avatar-girl.svg',
    tags: ['Work Ethic', 'Fast Learner', 'Computer Science'],
  },
  {
    id: 4,
    name: 'Win Myint Kyaw',
    role: 'Java Developer',
    company: 'DAT (Daiwa Institute of Research Group)',
    text: "I highly recommend Ama Aye Chan for her exceptional programming skills and mentorship abilities. She excels in attention to detail, meeting deadlines, and thriving under pressure. Aye Chan's logical thinking, coupled with her excellent communication skills, make her an invaluable asset to any team.",
    avatar: '/avatars/avatar-boy.svg',
    tags: ['Mentorship', 'Attention to Detail', 'Logical Thinking'],
  },
];
