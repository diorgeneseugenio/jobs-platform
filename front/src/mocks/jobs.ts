import { Job } from '../types/job';

export const mockedJobs: Job[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Google',
    location: 'Mountain View, CA',
    description:
      'We are looking for a Senior Software Engineer to join our team. You will be responsible for developing new features and maintaining existing ones. You will work closely with other engineers, product managers, and designers to deliver high-quality software. The ideal candidate will have a strong background in computer science and experience with web development. You should be comfortable working in a fast-paced environment and be able to learn new technologies quickly. If you are passionate about building great software and want to work on products that are used by millions of people, we would love to hear from you.',
    tags: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS', 'SQL'],
  },
  {
    title: 'Product Manager',
    company: 'Facebook',
    location: 'Menlo Park, CA',
    description:
      'We are looking for a Product Manager to join our team. You will be responsible for defining the product strategy and roadmap, working with cross-functional teams to bring new products to market, and analyzing user feedback to make data-driven decisions. The ideal candidate will have experience in product management, a strong technical background, and excellent communication skills. If you are passionate about building products that people love and want to work on products that are used by billions of people, we would love to hear from you.',
    tags: [
      'Product Management',
      'User Experience',
      'Data Analysis',
      'Communication',
    ],
  },
  {
    title: 'Data Scientist',
    company: 'Amazon',
    location: 'Seattle, WA',
    description:
      'We are looking for a Data Scientist to join our team. You will be responsible for analyzing large data sets, building predictive models, and developing algorithms to optimize business processes. You will work closely with other data scientists, engineers, and business stakeholders to identify opportunities for data-driven insights. The ideal candidate will have a strong background in statistics, machine learning, and programming. If you are passionate about using data to drive business decisions and want to work on products that are used by millions of people, we would love to hear from you.',
    tags: ['Data Analysis', 'Machine Learning', 'Statistics', 'Python', 'SQL'],
  },
];
