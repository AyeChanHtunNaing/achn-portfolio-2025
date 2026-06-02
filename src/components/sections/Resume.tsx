
import { Briefcase, GraduationCap, Code, Database, Cloud, Smartphone, Github, Award, Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useEffect, useState } from 'react';

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
    <div className="relative mb-4 last:mb-0">
      <div className="group flex flex-col gap-2 rounded-xl border border-transparent p-4 transition-all duration-300 md:hover:border-white/5 md:hover:bg-slate-800/30 md:hover:shadow-lg md:flex-row md:items-start md:gap-8">
        <div className="md:w-1/4 pt-1">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
            {period}
          </span>
        </div>
        
        <div className="md:w-3/4">
          <h3 className="text-base font-semibold text-slate-200 group-hover:text-emerald-300 transition-colors duration-200 break-words">
            {title}{" "}
            <span className="text-slate-500 font-normal">·</span>{" "}
            <span className="text-slate-300 group-hover:text-emerald-200 transition-colors duration-200">
              {organization}
            </span>
          </h3>
          
          <ul className="mt-3 space-y-2 list-none text-[13px] leading-relaxed text-slate-400">
            {description.split('\n').map((bullet, idx) => {
              const cleanBullet = bullet.trim().replace(/^[•\-\*]\s*/, '');
              if (!cleanBullet) return null;
              return (
                <li key={idx} className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-slate-500">
                  {cleanBullet}
                </li>
              );
            })}
          </ul>
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
    <Card className="border border-white/5 bg-slate-900/40 overflow-hidden rounded-xl transition-all duration-300 hover:border-emerald-300/10 hover:bg-slate-900/60 shadow-md">
      <CardContent className="p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="rounded-lg bg-white/5 p-2 text-slate-400">
            {icon}
          </div>
          <h4 className="text-[15px] font-semibold text-slate-200">{title}</h4>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] font-mono font-medium text-emerald-300"
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('resume');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.8) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const experience = [
    {
      title: "Software Engineer",
      organization: "PI Insurance Technology Singapore Pte. Ltd | Singapore",
      period: "04/2024 – Present",
      description: "• Contributed to the development and maintenance of a multi-system insurance platform supporting customer, policy, billing, and claims workflows including FNOL, claim history management, policy inquiries, and billing receipt lookup.\n" +
        "• Worked on the Financial Management System (FMS) for PN2, improving financial control by automating processes such as insurance claim tracking, client billing, vendor payments, receivable monitoring, and financial reporting.\n" +
        "• Participated in the BMW/MINI Warranty Service Center system for extended warranty and used-car warranty operations, supporting dealer workflows for warranty claims, repair approvals, and reimbursements.\n" +
        "• Collaborated with cross-functional teams to enhance system features and ensure smooth integration between operational, financial, and warranty management systems."
    },
    {
      title: "Programmer",
      organization: "DIR-ACE Technology | Yangon, Myanmar (Burma)",
      period: "08/2022 – 03/2024",
      description: "• Successfully supported three Japanese offshore outsourcing projects for the DIR Financial Platform Department, ensuring effective communication, coordination, and timely project delivery.\n" +
        "• Developed a Chrome Extension for the DIR Securities Systems Department to automate file downloads, improving operational efficiency and reducing manual workload.\n" +
        "• Designed and implemented a Project Management System during an internship (Aug 2022 – Dec 2022), contributing to system development from planning to implementation.\n" +
        "• Demonstrated the ability to work effectively in fast-paced and high-pressure environments, consistently delivering tasks on time with a strong commitment to quality and reliability."
    },
    {
      title: "Project Supervisor",
      organization: "ACE Inspiration LTD | Yangon, Myanmar",
      period: "2023 - 2023",
      description: "• Managed multiple projects from initiation to completion, adhering to the Software Development Life Cycle (SDLC) to deliver high-quality outcomes.\n" +
        "• Mentored team members in Java, Spring Boot, Bootstrap, MySQL, and Git, fostering skill development and enhancing team productivity.\n" +
        "• Monitored team progress, promptly resolved issues, and ensured project goals were achieved on time and within scope."
    },
    {
      title: "Junior Programmer",
      organization: "Technomation | Yangon, Myanmar (Burma)",
      period: "01/2021 – 04/2021",
      description: "• Developed dynamic websites using PHP and Yii2 framework.\n" +
        "• Implemented backend logic and ensured robust data validation and error handling."
    },
    {
      title: "Programmer (Part time)",
      organization: "Wish Me Inc | Remote",
      period: "2020 - 2021",
      description: "• Developed and maintained a customized birthday wish website service, overseeing the full Software Development Life Cycle (SDLC).\n" +
        "• Participated as a backend developer using JSP, JavaEE, and MySQL in version 1.0.\n" +
        "• Contributed as a Flutter developer in version 1.1."
    }
  ];

  const education = [
    {
      title: "B.Sc(Hons)Computing",
      organization: "University of Greenwich | London, United Kingdom",
      period: "03/2024 – 07/2025",
      description: "• Specialized in Requirements Management, Human-Computer Interaction and Design, Mobile Design and Development, and Enterprise Web Software Development\n" +
        "• Passed with Upper Second Class Honours"
    },
    {
      title: "Level 5 Diploma in Computing (L5DC)",
      organization: "NCC Education | London, United Kingdom",
      period: "03/2023 – 02/2024",
      description: "• Specialized in Dynamic Websites, Information System Analysis, Agile Development, Database Development and Design, and Network Security and Cryptography\n" +
        "• Passed with 3 Distinctions and 1 Merit"
    },
    {
      title: "Diploma in Cloud Computing",
      organization: "Northern Council for Further Education (NCFE) | London, United Kingdom",
      period: "2020 - 2021",
      description: "• Specialized in Fundamental Cloud Computing and Amazon Web Services"
    },
    {
      title: "Third Year (Computer Science)",
      organization: "University of Computer Studies, Yangon | Yangon, Myanmar (Burma)",
      period: "12/2017 – 03/2020",
      description: "• Dropped out due to COVID-19 and current political situation\n" +
        "• Specialized in Software Engineering , Java Programming, Database Management Systems, Data Structure & Algorithms and Web Programming"
    }
  ];

  // Organized skill categories
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java (Core Java)", "JavaScript / TypeScript", "Python"],
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "Frontend Development",
      skills: ["Tailwind CSS", "React JS", "Shadcn"],
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "Backend",
      skills: ["Spring Boot", "Spring Core", "Spring MVC"],
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "State Management",
      skills: ["Tanstack query", "RTK query", "Zustand", "Redux-toolkit"],
      icon: <Star className="w-5 h-5" />
    },
    {
      title: "Database",
      skills: ["MySQL", "PostgreSQL", "AWS DynamoDB", "Prisma ORM", "Oracle SQL"],
      icon: <Database className="w-5 h-5" />
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker"],
      icon: <Cloud className="w-5 h-5" />
    },
    {
      title: "Scripting",
      skills: ["Bash scripting"],
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "Dev Tools",
      skills: ["CI/ CD basics", "Git", "Linux", "Maven", "JUnit", "Cypress", "Vitest"],
      icon: <Github className="w-5 h-5" />
    },
    {
      title: "Mobile",
      skills: ["Flutter"],
      icon: <Smartphone className="w-5 h-5" />
    }
  ];

  return (
    <section id="resume" className="section-container">
      <div
        className={`section-heading-row transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <span className="section-eyebrow">02. Resume</span>
        <div className="section-rule" />
      </div>
      <div
        className={`mb-14 max-w-3xl transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
        style={{ transitionDelay: '100ms' }}
      >
        <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">Experience, education, and technical skills</h2>
        <p className="mt-3 text-slate-400">
          A summary of my professional background, academic training, and the technologies I use to build production-ready software.
        </p>
      </div>
        
        <div className="space-y-16">
          {/* Work Experience Section */}
          <Collapsible 
            open={expandedSection === "experience"} 
            onOpenChange={() => setExpandedSection(expandedSection === "experience" ? "" : "experience")}
            className="w-full"
          >
            <div className="mb-10 flex flex-wrap gap-4 items-baseline">
              <CollapsibleTrigger className="flex items-center gap-2 text-2xl font-bold text-slate-100 transition-opacity hover:opacity-80">
                <Award className="w-6 h-6" /> 
                Work Experience
              </CollapsibleTrigger>
              <div className="flex-1 self-center border-t border-white/10"></div>
            </div>
            
            <CollapsibleContent className="animate-accordion-down">
              <div>
                {experience.map((item, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${180 + index * 90}ms` }}
                  >
                    <ResumeItem {...item} />
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          {/* Education Section */}
          <div className="w-full">
            <div className="mb-10 flex flex-wrap gap-4 items-baseline">
              <h3 className="flex items-center gap-2 text-2xl font-bold text-slate-100">
                <GraduationCap className="w-6 h-6" />
                Education
              </h3>
              <div className="flex-1 self-center border-t border-white/10"></div>
            </div>
            
            <div>
              {education.map((item, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${300 + index * 90}ms` }}
                >
                  <ResumeItem {...item} isEducation={true} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Skills Section with improved design */}
        <div className="mt-20">
          <div className="mb-10 flex flex-wrap gap-4 items-baseline">
            <h3 className="flex items-center gap-2 text-2xl font-bold text-slate-100">
              <Star className="w-6 h-6" />
              Skills
            </h3>
            <div className="flex-1 self-center border-t border-white/10"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${520 + index * 70}ms` }}
              >
                <SkillCategory 
                  title={category.title} 
                  skills={category.skills} 
                  icon={category.icon}
                />
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default Resume;
