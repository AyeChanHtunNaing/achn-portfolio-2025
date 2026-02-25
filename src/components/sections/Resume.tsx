
import { Briefcase, GraduationCap, Code, Database, Cloud, Smartphone, Github, Award, Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from 'react';

const ResumeItem = ({ 
  title, 
  organization, 
  period, 
  description,
  isEducation = false 
}: { 
  title: string;
  organization: string;
  period: string;
  description: string;
  isEducation?: boolean;
}) => {
  const Icon = isEducation ? GraduationCap : Briefcase;
  
  return (
    <div className="relative mb-12 last:mb-0">
      <div className="glass-panel flex flex-col gap-4 rounded-2xl p-4 sm:p-5 md:flex-row md:items-start md:gap-8">
        <div className="md:w-1/4">
          <div className="glass-accent-soft inline-flex max-w-full items-center gap-2 rounded-full px-3 py-1.5">
            <Icon className="w-4 h-4 text-slate-600" />
            <span className="text-sm font-semibold text-slate-700">{period}</span>
          </div>
        </div>
        
        <div className="md:w-3/4">
          <h3 className="mb-1 text-lg font-semibold text-slate-900 break-words">{title}</h3>
          <div className="mb-3 text-sm font-medium text-slate-600 break-words">{organization}</div>
          <p className="whitespace-pre-line text-sm leading-6 text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

// New component for skill categories with enhanced design
const SkillCategory = ({ 
  title, 
  skills,
  icon
}: { 
  title: string;
  skills: string[];
  icon: React.ReactNode;
}) => {
  return (
    <Card className="glass-panel overflow-hidden rounded-2xl transition-all hover:shadow-md">
      <CardContent className="p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="rounded-xl bg-white/70 p-2 text-slate-700">
            {icon}
          </div>
          <h4 className="text-lg font-semibold text-slate-900">{title}</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="glass-accent-soft rounded-full px-3 py-1 text-sm text-slate-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Resume = () => {
  const [expandedSection, setExpandedSection] = useState<string>("experience");
  
  const experience = [
    {
      "title": "Software Engineer",
      "organization": "PI INSURANCE TECHNOLOGY SINGAPORE PTE. LTD",
      "period": "2024 - Present",
      "description": "Developed and maintained Financial Management System utilizing Spring Boot, Vue.js, and AWS DynamoDB to ensure efficient and scalable performance.\n" +
        "Conducted testing using Cypress, Vitest, and JUnit, ensuring code quality and reliability.\n" +
        "Maintained the core system for BMW Dealers, specializing in managing BMW car warranty policies and processing claims.\n" +
        "Collaborated with cross-functional teams to deliver high-quality software products."
    },
    {
      title: "Programmer",
      organization: "DIR ACE Technology LTD",
      period: "2022 - 2024",
      description: "Successfully managed three Japanese offshore outsourcing projects for the DIR Financial Platform Department, ensuring seamless communication and project delivery.\n" +
          "Developed a Chrome Extension for the DIR Securities Systems Department to enable automated file downloads, improving efficiency and reducing manual tasks.\n" +
          "Designed and implemented a Project Management System during an internship (Aug 2022 to Dec 2022), using Java, Spring Boot, Spring Security, Angular, and Jasper Report, demonstrating hands-on expertise in full-stack development.\n" +
          "Proven ability to excel in high-pressure environments, consistently delivering projects on time with a strong work ethic and dedication to quality."
    },
    {
      title: "Project Supervisor",
      organization: "ACE Inspiration LTD",
      period: "2023 - 2023",
      description: "Managed multiple projects from initiation to completion, adhering to the Software Development Life Cycle (SDLC)to deliver high-quality outcomes.\n" +
          "Mentored team members in Java, Spring Boot, Bootstrap, MySQL, and Git, fostering skill development and enhancing team productivity.\n" +
          "Monitored team progress, promptly resolved issues, and ensured project goals were achieved on time and within scope."
    },
    {
      "title": "Junior Programmer",
      "organization": "Technomation LTD",
      "period": "2021 - 2021",
      "description": "Designed and developed websites as an entry-level programmer using PHP and the Yii2 Framework, demonstrating strong attention to detail and thorough testing.\n" +
        "Maintained clear communication with team members and supervisors to ensure alignment between project objectives and development goals."
    },
    {
      "title": "Programmer (Part time)",
      "organization": "Wish Me Inc",
      "period": "2020 - 2021",
      "description": "Developed and maintained a customized birthday wish website service, overseeing the full Software Development Life Cycle (SDLC).\n" +
        "Participated as a backend developer using JSP, JavaEE, and MySQL in version 1.0.\n" +
        "Contributed as a Flutter developer in version 1.1."
    }
  ];

  const education = [
    {
      title: "Master of Science in Information Technology",
      organization: "University of the People",
      period: "2025 - Current",
      description: "Specialized in Databases, Operating Systems, Algorithms, Software Engineering, Human-Computer Interaction, Artificial Intelligence, Machine Learning, and Cybersecurity"
    },
    {
      title: "BSc (Hons) in Computing",
      organization: "University of Greenwich",
      period: "2023 - 2025",
      description: "Specialized in Requirements Management, Human-Computer Interaction and Design, Mobile Design and Development, and Enterprise Web Software Development"
    },
    {
      title: "Level 5 Diploma in Computing",
      organization: "NCC Education",
      period: "2022 - 2023",
      description: "Specialized in Dynamic Websites, Information System Analysis, Agile Development, Database Development and Design, and Network Security and Cryptography"
    },
    {
      title: "Diploma in Cloud Computing",
      organization: "Northern Council for Further Education (NCFE)",
      period: "2020 - 2021",
      description: "Specialized in Fundamental Cloud Computing and Amazon Web Services"
    },
    {
      title: "Third Year (Computer Science)",
      organization: "University of Computer Studies, Yangon",
      period: "2017 - 2021",
      description: "Dropped out due to COVID-19 and current political situation in Myanmar \n" +
          "Specialized in Software Engineering , Java Programming, Database Management Systems, Data Structure & Algorithms and Web Programming"
    }
  ];

  // Organized skill categories
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "TypeScript", "Python"],
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "Frontend",
      skills: ["Tailwind CSS", "Vue", "React", "Shadcn"],
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "Backend",
      skills: ["Spring Core", "Spring MVC", "Spring Boot"],
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "Mobile",
      skills: ["Flutter"],
      icon: <Smartphone className="w-5 h-5" />
    },
    {
      title: "Database",
      skills: ["MySQL", "Oracle SQL", "AWS DynamoDB", "Prisma ORM", "PostgreSQL"],
      icon: <Database className="w-5 h-5" />
    },
    {
      title: "Cloud",
      skills: ["AWS"],
      icon: <Cloud className="w-5 h-5" />
    },
    {
      title: "State Management",
      skills: ["Tanstack query", "RTK query", "Zustand", "Redux-toolkit"],
      icon: <Star className="w-5 h-5" />
    },
    {
      title: "Version Control",
      skills: ["Git"],
      icon: <Github className="w-5 h-5" />
    }
  ];

  return (
    <section id="resume" className="py-24">
      <div className="section-container">
        <div className="mb-14 flex flex-col gap-4">
          <div className="glass-accent-soft inline-flex self-start rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]">
            Resume
          </div>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Experience, education, and technical skills</h2>
            <p className="mt-3 text-slate-600">
              A summary of my professional background, academic training, and the technologies I use to build production-ready software.
            </p>
          </div>
        </div>
        
        <div className="space-y-16">
          {/* Work Experience Section */}
          <Collapsible 
            open={expandedSection === "experience"} 
            onOpenChange={() => setExpandedSection(expandedSection === "experience" ? "" : "experience")}
            className="w-full"
          >
            <div className="mb-10 flex flex-wrap gap-4 items-baseline">
              <CollapsibleTrigger className="flex items-center gap-2 text-2xl font-bold text-slate-900 transition-opacity hover:opacity-80">
                <Award className="w-6 h-6" /> 
                Work Experience
              </CollapsibleTrigger>
              <div className="flex-1 self-center border-t border-slate-200"></div>
            </div>
            
            <CollapsibleContent className="animate-accordion-down">
              <div>
                {experience.map((item, index) => (
                  <ResumeItem key={index} {...item} />
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          {/* Education Section */}
          <div className="w-full">
            <div className="mb-10 flex flex-wrap gap-4 items-baseline">
              <h3 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
                <GraduationCap className="w-6 h-6" />
                Education
              </h3>
              <div className="flex-1 self-center border-t border-slate-200"></div>
            </div>
            
            <div>
              {education.map((item, index) => (
                <ResumeItem key={index} {...item} isEducation={true} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Skills Section with improved design */}
        <div className="mt-20">
          <div className="mb-10 flex flex-wrap gap-4 items-baseline">
            <h3 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
              <Star className="w-6 h-6" />
              Skills
            </h3>
            <div className="flex-1 self-center border-t border-slate-200"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCategory 
                key={index} 
                title={category.title} 
                skills={category.skills} 
                icon={category.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
