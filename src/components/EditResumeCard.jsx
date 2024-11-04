import { useState } from "react";
import Button from "./Button";
import MainHeading from "./headingComponenets/MainHeading";
import TwoLinesSpace from "./Lines/TwoLinesSpace";
import { FaAngleDown } from "react-icons/fa";
import Input from "./Input";

export default function EditResumeCard({
  onDownload,
  passChange,
  resumeData,
  setResumeData,
}) {
  const [skillList, setSkillList] = useState([]);
  const [experienceList, setexperienceList] = useState([]);
  const [educationList, setEducationList] = useState([]);
  const placeholderDate = new Date(2001, 6, 27).toISOString().split("T")[0];
  const EdnStartDate = new Date(2019, 6, 27).toISOString().split("T")[0];
  const EdnEndDate = new Date(2023, 4, 27).toISOString().split("T")[0];

  //For handling the displaying of respective component on toggling button
  const [titleButtonDisplay, setTitleButtonDisplay] = useState(false);
  const [detailsSectionDisplay, setDetailsSectionDisplay] = useState(false);
  const [skillsSectionDisplay, setskillsSectionDisplay] = useState(false);
  const [experienceSectionDisplay, setexperienceSectionDisplay] =
    useState(false);
  const [educationSectionDisplay, seteducationSectionDisplay] = useState(false);

  const handleSkills = () => {
    const skill = resumeData.skill;
    const rating = parseInt(resumeData.rating, 10);

    if (skill && rating >= 1 && rating <= 5) {
      const newSkillList = [...skillList, { skill, rating }];
      setSkillList(newSkillList);
      setResumeData({ ...resumeData, skills: newSkillList });
      passChange({ target: { name: "skill", value: "" } });
      passChange({ target: { name: "rating", value: "" } });
    } else {
      alert(
        "Your have missed Adding skills  OR Please Select a valid rating from 1 to 5"
      );
    }
  };

  const handleExperienceClick = () => {
    const role = resumeData.role;
    const orgName = resumeData.orgName;
    const description = resumeData.description;
    const employmentStartDate = new Date(resumeData.EmploymentStartDate);
    const employmentEndDate = new Date(resumeData.EmploymentEndDate);

    if (
      role &&
      orgName &&
      description &&
      employmentEndDate &&
      employmentStartDate
    ) {
      const newExperienceList = [
        ...experienceList,
        { role, orgName, description, employmentStartDate, employmentEndDate },
      ];
      setexperienceList(newExperienceList);
      setResumeData({ ...resumeData, experienceList: newExperienceList });
      passChange({ target: { name: "role", value: "" } });
      passChange({ target: { name: "orgName", value: "" } });
      passChange({ target: { name: "description", value: "" } });
      passChange({
        target: { name: "EmploymentStartDate", value: placeholderDate },
      });
      passChange({
        target: { name: "EmploymentEndDate", value: placeholderDate },
      });
    } else {
      alert("please check-in all the fields");
    }
  };

  const handleEducationClick = () => {
    const degree = resumeData.DegreeName;
    const instituteName = resumeData.InstituteName;
    const educationStartDate = new Date(resumeData.EducationStartDate);
    const educationEndDate = new Date(resumeData.EducationEndDate);
    const grade = resumeData.Grade;

    if (
      degree &&
      instituteName &&
      educationStartDate &&
      educationEndDate &&
      grade
    ) {
      const newEducation = [
        ...educationList,
        { degree, instituteName, educationStartDate, educationEndDate, grade },
      ];
      setEducationList(newEducation);
      setResumeData({ ...resumeData, educationList: newEducation });
      passChange({ target: { name: "DegreeName", value: "" } });
      passChange({ target: { name: "InstituteName", value: "" } });
      passChange({
        target: { name: "EducationStartDate", value: EdnStartDate },
      });
      passChange({ target: { name: "EducationEndDate", value: EdnEndDate } });
      passChange({ target: { name: "Grade", value: "" } });
    } else {
      alert("Please complete all the education fields");
    }
  };

  const toggleClick = () => {
    setTitleButtonDisplay((prev) => !prev);
    setDetailsSectionDisplay((prev) => {
      prev == true ? !prev : null;
    });
    setskillsSectionDisplay((prev) => {
      prev == true ? !prev : null;
    });
    setexperienceSectionDisplay((prev) => {
      prev == true ? !prev : null;
    });
    seteducationSectionDisplay((prev) => {
      prev == true ? !prev : null;
    });
  };

  const toogleDetailsClick = () => {
    setDetailsSectionDisplay((prev) => !prev);

    setTitleButtonDisplay((prev) => {
      prev == true ? !prev : null;
    });
    setskillsSectionDisplay((prev) => {
      prev == true ? !prev : null;
    });
    setexperienceSectionDisplay((prev) => {
      prev == true ? !prev : null;
    });
    seteducationSectionDisplay((prev) => {
      prev == true ? !prev : null;
    });
  };

  const toggleskillsClick = () => {
    setskillsSectionDisplay((prev) => !prev);

    setTitleButtonDisplay((prev) => {
      prev == true ? !prev : null;
    });
    setDetailsSectionDisplay((prev) => {
      prev == true ? !prev : null;
    });
    setexperienceSectionDisplay((prev) => {
      prev == true ? !prev : null;
    });
    seteducationSectionDisplay((prev) => {
      prev == true ? !prev : null;
    });
  };

  const toggleClickExperienceClick = () => {
    setexperienceSectionDisplay((prev) => !prev);
    seteducationSectionDisplay((prev) => {
      prev == true ? !prev : null;
    });
    setTitleButtonDisplay((prev) => {
      prev == true ? !prev : null;
    });
    setDetailsSectionDisplay((prev) => {
      prev == true ? !prev : null;
    });
    setskillsSectionDisplay((prev) => {
      prev == true ? !prev : null;
    });
  };

  const toggleEducationClick = () => {
    seteducationSectionDisplay((prev) => !prev);
    setTitleButtonDisplay((prev) => {
      prev == true ? !prev : null;
    });
    setDetailsSectionDisplay((prev) => {
      prev == true ? !prev : null;
    });
    setskillsSectionDisplay((prev) => {
      prev == true ? !prev : null;
    });
    setexperienceSectionDisplay((prev) => {
      prev == true ? !prev : null;
    });
  };

  return (
    <div className="edit-card">
      <div className="edit-resume-card">
        <div className="title">
          <div className="header-and-button">
            <u>
              <MainHeading value={"Title Details"} />
            </u>
            <FaAngleDown onClick={toggleClick} />
          </div>
          {titleButtonDisplay && (
            <div>
              <Input
                name="FullName"
                handleChange={passChange}
                value={resumeData.FullName || ""}
              />
              <Input
                name="Title"
                handleChange={passChange}
                value={resumeData.Title || ""}
              />
              <Input
                name="profile"
                handleChange={passChange}
                value={resumeData.profile || ""}
              />
            </div>
          )}
        </div>
        <TwoLinesSpace />
        <div className=".employment-history-and-skills">
          <div className="details">
            <div className="header-and-button">
              <u>
                <MainHeading value={"Details"} />
              </u>
              <FaAngleDown
                style={{ fontSize: "20px" }}
                onClick={toogleDetailsClick}
              />
            </div>

            {detailsSectionDisplay && (
              <div className="dtls">
                <Input
                  name="LinkedIn"
                  handleChange={passChange}
                  value={resumeData.LinkedIn || ""}
                />
                <Input
                  name="GitHub"
                  handleChange={passChange}
                  value={resumeData.GitHub || ""}
                />
                <Input
                  name="address"
                  handleChange={passChange}
                  value={resumeData.address || ""}
                />
                <Input
                  name="mobileNumber"
                  type="number"
                  handleChange={passChange}
                  value={resumeData.mobileNumber || ""}
                />
                <Input
                  name="email"
                  handleChange={passChange}
                  value={resumeData.email || ""}
                />
              </div>
            )}
          </div>
          <TwoLinesSpace />
          <div className="skills-card">
            <div className="header-and-button">
              <u>
                <MainHeading value={"Skills"} />
              </u>
              <FaAngleDown
                style={{ fontSize: "20px" }}
                onClick={toggleskillsClick}
              />
            </div>
            {skillsSectionDisplay && (
              <div className="skills">
                <Input
                  name="skill"
                  handleChange={passChange}
                  value={resumeData.skill || ""}
                />
                <Input
                  name="rating"
                  handleChange={passChange}
                  value={resumeData.rating || ""}
                />
                <Button onClick={handleSkills} value={"Add Skill"} />
              </div>
            )}
          </div>
          <TwoLinesSpace />
          <div className="employment-history">
            <div className="header-and-button">
              <u>
                <MainHeading value={"Experience"} />
              </u>
              <FaAngleDown
                style={{ fontSize: "20px" }}
                onClick={toggleClickExperienceClick}
              />
            </div>
            {experienceSectionDisplay && (
              <div>
                <Input
                  name="role"
                  handleChange={passChange}
                  value={resumeData.role || ""}
                />
                <Input
                  name="orgName"
                  handleChange={passChange}
                  value={resumeData.orgName || ""}
                />
                <Input
                  name="description"
                  handleChange={passChange}
                  value={resumeData.description || ""}
                />

                <Input
                  type="Date"
                  name="EmploymentStartDate"
                  handleChange={passChange}
                  value={resumeData.EmploymentStartDate || placeholderDate}
                />
                <Input
                  type="Date"
                  name="EmploymentEndDate"
                  handleChange={passChange}
                  value={resumeData.EmploymentEndDate || placeholderDate}
                />
                <Button
                  onClick={handleExperienceClick}
                  value={"Add Experience"}
                />
                <TwoLinesSpace />
              </div>
            )}
          </div>
        </div>
        <div className="education-history">
          <div className="header-and-button">
            <u>
              <MainHeading value={"Education"} />
            </u>
            <FaAngleDown
              style={{ fontSize: "20px" }}
              onClick={toggleEducationClick}
            />
          </div>
          {educationSectionDisplay && (
            <div>
              <Input
                name="DegreeName"
                handleChange={passChange}
                value={resumeData.DegreeName || ""}
              />
              <Input
                name="InstituteName"
                handleChange={passChange}
                value={resumeData.InstituteName || ""}
              />
              <Input
                type="Date"
                name="EducationStartDate"
                handleChange={passChange}
                value={resumeData.EducationStartDate || placeholderDate}
              />
              <Input
                type="Date"
                name="EducationEndDate"
                handleChange={passChange}
                value={resumeData.EducationEndDate || placeholderDate}
              />
              <Input
                name="Grade"
                handleChange={passChange}
                value={resumeData.Grade || ""}
              />
              <Button onClick={handleEducationClick} value={"Add Education"} />
            </div>
          )}
        </div>

        <div className="button">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onDownload();
            }}
          >
            Save Your Resume
          </a>
          <p className="top">Filename : Resume.pdf</p>
          <p className="bottom">Size: 10kb</p>
        </div>
      </div>
    </div>
  );
}
