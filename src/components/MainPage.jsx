import html2canvas from "html2canvas";
import ActualResumeCard from "./ActualResumeCard";
import EditResumeCard from "./EditResumeCard";
import jsPDF from "jspdf";
import { useRef, useState } from "react";

export default function MainPage() {
  const resumeRef = useRef();

  const placeholderDate = new Date(2001, 6, 31).toISOString().split("T")[0];
  const EdnStartDate = new Date(2019, 6, 31).toISOString().split("T")[0];
  const EdnEndDate = new Date(2023, 4, 31).toISOString().split("T")[0];
  const sasiStartDate = new Date(2017, 6, 31).toISOString().split("T")[0];
  const sasiEndDate = new Date(2019, 5, 31).toISOString().split("T")[0];
  const jnvStartDate = new Date(2015, 6, 31).toISOString().split("T")[0];
  const jnvEndDate = new Date(2017, 5, 31).toISOString().split("T")[0];

  const [resumeData, setResumeData] = useState({
    skills: [
      { skill: "Problem Solving", rating: 5 },
      { skill: "Java", rating: 5 },
      { skill: "Spring Framework", rating: 4 },
      { skill: "SQL", rating: 4 },
      { skill: "React", rating: 3 },
    ],
    experienceList: [
      {
        role: "Systems Engineer",
        orgName: "TCS",
        description:
          "Developed scalable RESTful APIs using Java and Spring Boot for enterprise applications, collaborating with cross-functional teams to design efficient backend architecture and ensure high-quality, well-tested software delivery.",
        EmploymentStartDate: placeholderDate,
        EmploymentEndDate: placeholderDate,
      },
      {
        role: "Software Developer",
        orgName: "Google",
        description:
          "Designed and maintained robust microservices with Java and Spring Boot, leveraging cloud technologies and DevOps tools for scalable,resilient deployments. Collaborated with teams to enhance backend performance and ensure smooth cloud-based integration across enterprise systems.",
        EmploymentStartDate: placeholderDate,
        EmploymentEndDate: placeholderDate,
      },
      {
        role: "Software Developer",
        orgName: "Amazon",
        description:
          "Integrated cloud solutions and DevOps automation to enhance scalability, reliability, and CI/CD. Optimized backend systems for seamless data flow, ensuring efficient deployment and high performance across distributed, cloud-native applications.",
        EmploymentStartDate: placeholderDate,
        EmploymentEndDate: placeholderDate,
      },
    ],
    educationList: [
      {
        degree: "Bachelor of Technology",
        instituteName: "SRKR Engineering College",
        educationStartDate: EdnStartDate,
        educationEndDate: EdnEndDate,
        grade: "8.00",
      },
      {
        degree: "Board of Secondary Education",
        instituteName: "Sasi Junior College",
        educationStartDate: sasiStartDate,
        educationEndDate: sasiEndDate,
        grade: "10.00",
      },
      {
        degree: "High School",
        instituteName: "Jawahar Navodaya Vidyalaya",
        educationStartDate: jnvStartDate,
        educationEndDate: jnvEndDate,
        grade: "9.2",
      },
    ],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleDownload = () => {
    // const report = new jsPDF("portrait", "pt", "a4");
    // report.html(document.querySelector("#main-resume")).then(() => {
    //   report.save("report.pdf");
    // });
    const element = resumeRef.current;
    html2canvas(element, { scale: 2 }).then((canvas) => {
      const imageData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imageData, "PNG", 0, 0, 210, 297);
      pdf.save("Resume.pdf");
    });

    // const pdf = new jsPDF("p", "pt", "a4"); // A4 in points (595 x 842)

    // // First, measure the element's height to determine if scaling is necessary
    // const element = resumeRef.current;
    // const elementHeight = element.offsetHeight; // height in pixels
    // const pdfHeight = 842; // A4 height in points

    // // Calculate the scale factor if the content is taller than A4 height
    // const scale = elementHeight > pdfHeight ? pdfHeight / elementHeight : 1;

    // pdf.html(element, {
    //   callback: function (doc) {
    //     doc.save("Resume.pdf");
    //   },
    //   x: 10,
    //   y: 10,
    //   html2canvas: {
    //     scale: scale, // Scale down if content is too tall for A4
    //   },
    //   width: 575, // Content width, considering a 10pt margin
    //   windowWidth: element.scrollWidth,
    // });
  };

  return (
    <div className="main-card">
      <EditResumeCard
        passChange={handleInputChange}
        onDownload={handleDownload}
        resumeData={resumeData}
        setResumeData={setResumeData}
      />
      <ActualResumeCard ref={resumeRef} resumeData={resumeData} />
    </div>
  );
}
