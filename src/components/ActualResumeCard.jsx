import { forwardRef } from "react";
import "../styles/styles.css";
import SubHeading from "./headingComponenets/SubHeading";
import LargeLine from "./Lines/LargeLine";
import SmallLine from "./Lines/SmallLine";
import BoldSubHeading from "./headingComponenets/BoldSubHeading";
import TwoLinesSpace from "./Lines/TwoLinesSpace";
import SvgDisplay from "./SvgDisplay";
import MainHeading from "./headingComponenets/MainHeading";

const ActualResumeCard = forwardRef(({ resumeData }, ref) => {
  console.log(resumeData);
  return (
    <div className="main-resume" id="main-resume" ref={ref}>
      <div className="title-card">
        <div className="full-name">
          {resumeData.FullName || "Nikhil Nambula"}
        </div>
        <div className="title">{resumeData.Title || "Software Developer"}</div>
      </div>
      <div className="resume-division">
        <div className="resume-left-part">
          <div className="details-and-skill-resume">
            <SubHeading value={"DETAILS"} />
            <SmallLine />
            <BoldSubHeading value={"Likedin"} />
            <div style={{ fontSize: "12.7px" }}>
              {resumeData.LinkedIn ||
                "linkedin.com/in/nikhil-sai-nambula-262588203"}
            </div>
            <TwoLinesSpace />
            <BoldSubHeading value={"GitHub"} />
            <div style={{ fontSize: "12.7px" }}>
              {resumeData.GitHub || "github.com/Nikhil-sai-nambula"}
            </div>
            <TwoLinesSpace />
            <BoldSubHeading value={"Address"} />
            <div style={{ fontSize: "12.7px" }}>
              {resumeData.address ||
                "Some where under the sky and above the land"}
            </div>
            <TwoLinesSpace />
            <BoldSubHeading value={"Phone"} />
            <div style={{ fontSize: "12.7px" }}>
              {resumeData.mobileNumber || "63050-5XXXX"}
            </div>
            <TwoLinesSpace />
            <BoldSubHeading value={"Email"} />
            <div style={{ fontSize: "12.7px" }}>
              {resumeData.email || "nambula.nikhilsai@gmail.com"}
            </div>
            <TwoLinesSpace />
            <SubHeading value={"SKILLS"} />
            <SmallLine />
            <div className="skills-card-resume">
              {resumeData.skills.length > 0
                ? resumeData.skills.map((item, index) => (
                    <div className="skill-name" key={index}>
                      {item.skill}
                      <SvgDisplay rating={item.rating} />
                    </div>
                  ))
                : "Enter Your Skills"}
            </div>
          </div>
        </div>
        <div className="resume-right-part">
          <div className="profile-summary">
            <SubHeading value={"PROFILE"} />
            <LargeLine />
            {resumeData.profile ||
              "Dynamic and results-driven software developer with extensive experience in Java and Spring Boot, specializing in RESTful API development and scalable enterprise solutions. Proficient in designing and implementing robust applications, with a strong focus on industry standards and best practices. Adept at collaborating within cross-functional teams to deliver high-quality software on time. Currently engaged in full-stack projects, demonstrating expertise in both backend and frontend development."}
          </div>
          <div className="employment-history-resume">
            <SubHeading value={"EMPLOYMENT HISTORY"} />
            <LargeLine />
            <div className="emp-history">
              {resumeData &&
              resumeData.experienceList &&
              resumeData.experienceList.length > 0
                ? resumeData.experienceList.map((experience, index) => (
                    <div className="indv-experience" key={index}>
                      <div className="role-date-resume">
                        <MainHeading
                          fontWeight={600}
                          fontSize={"16px"}
                          value={experience.role}
                        />
                        {experience.employmentStartDate
                          ? new Date(
                              experience.employmentStartDate
                            ).toLocaleDateString()
                          : "29-06-2023"}
                        {" - "}
                        {experience.employmentEndDate
                          ? new Date(
                              experience.employmentEndDate
                            ).toLocaleDateString()
                          : "Present"}
                      </div>
                      <SubHeading
                        fontWeight={500}
                        fontSize={"14px"}
                        value={experience.orgName}
                      />
                      <div className="emp-summary" />
                      {experience.description}
                      <TwoLinesSpace />
                    </div>
                  ))
                : "Enter Your Previous Employment Details"}
            </div>
          </div>
          <TwoLinesSpace />
          <div className="education Details">
            <MainHeading value={"Education Details"} />
            <LargeLine />
            <div className="education-history">
              {resumeData &&
              resumeData.educationList &&
              resumeData.educationList.length > 0
                ? resumeData.educationList.map((education, index) => (
                    <div key={index} className="ind-education">
                      <div className="education-date">
                        <SubHeading value={education.degree} />
                        {education.educationStartDate
                          ? new Date(
                              education.educationStartDate
                            ).toLocaleDateString()
                          : "2019-07-30"}
                        {" - "}

                        {education.educationEndDate
                          ? new Date(
                              education.educationEndDate
                            ).toLocaleDateString()
                          : "2023-04-30"}
                      </div>
                      <BoldSubHeading
                        fontWeight="400"
                        fontSize="13px"
                        value={education.instituteName}
                      />
                      <div>{education.grade}</div>
                      <TwoLinesSpace />
                    </div>
                  ))
                : "Enter Your Education Detail"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ActualResumeCard;
