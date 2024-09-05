import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from "./TimelineItem";
import SkillItem from "./SkillItem";

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
             <TimelineItem 
            title= "FreeCodeCamp Full Stack Web Development Certification"
            date= "2022 - 2024"
            description= "Completed coursework in responsive web design, JavaScript algorithms, front-end libraries, data visualization, APIs, and microservices. Built and deployed several projects, gaining hands-on experience in full-stack development."
            /><TimelineItem 
            title= "Chukwuemeka Odumegwu Ojukwu University."
            date= "2015 - 2021"
            description= "Bachelor of Accounting with a comprehensive understanding of financial management, auditing, and tax principles. Skilled in financial analysis, budgeting, and the use of accounting software. Dedicated to ensuring accuracy and compliance in financial reporting, with a strong attention to detail and a commitment to ethical practices."
            />
            <TimelineItem 
            title= "Festac Senior College, Festac Lagos."
            date= "2007 - 2013"
            description= "Completed secondary school with a strong academic record, developing a solid foundation in mathematics, economics, and business studies. Actively participated in extracurricular activities, honing leadership, teamwork, and communication skills. Prepared for further education and career growth with a well-rounded approach to learning and personal development."
            />
        </ol>
      </div>

      {/* experience section */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
            <TimelineItem 
            title= "New Horizon Computer Learning Centers."
            date= "2023 - Present"
            description= "Worked as an ICT Instructor at New Horizon Computer Learning Centers, delivering in-depth training in software applications, networking fundamentals, and IT certifications. Guided students through hands-on projects, ensuring they developed practical skills and a strong understanding of industry-standard technologies."
            /> 
            <TimelineItem 
            title= "Michlom International secondary school."
            date= "2021 - 2023"
            description= "Taught as an ICT Instructor at Michlom International Secondary School, focusing on computer literacy, Microsoft Office applications, and introductory programming. Engaged students with practical exercises and interactive sessions to build their understanding and proficiency in ICT, while fostering a supportive learning environment."
            />
            <TimelineItem 
            title= "Cognizance computer institute Ict instructor."
            date= "2020 - 2021"
            description= "Served as an ICT Instructor at Cognizance Computer Institute, providing training in computer fundamentals, Microsoft Office Suite, and basic programming. Facilitated hands-on learning experiences, guided students in mastering essential ICT skills, and supported their progress through practical exercises and assessments."
            />
        </ol>
      </div>

      {/* skills section */}
      <div className="skill">
        <h3 className="h3 skills-title">My Skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Web Design" value={80}/>
          <SkillItem title="React" value={70}/>
          <SkillItem title="Database" value={80}/>
          <SkillItem title="TypeScript" value={50}/>
        </ul>
      </div>

    </section>
  );
};

export default Resume;
