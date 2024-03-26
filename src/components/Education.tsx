import "../styles/Education.css";

function Education() {
  return (
    <div className="experience-hero">
      <div className="title">Education</div>
      <div className="work-blocks">
        <div className="block-1 block-color">
          <div className="block-title edu-span">
            GLBITM <span>07/2024</span>
          </div>
          <div className="block-sub-title">Computer Science</div>
          <div className="block-sub-title edu-sub-title">
            Delhi NCR, INDIA | 8.26 cgpa
          </div>
        </div>
        <div className="block-1 block-color">
          <div className="block-title edu-span">
            Army public school <span>03/2020</span>
          </div>
          <div className="block-sub-title">Science, INTERMEDIATE</div>
        </div>
        <div className="block-1 block-color">
          <div className="block-title edu-span">
            Army public school <span>03/2018</span>
          </div>
          <div className="block-sub-title">Hign School</div>
        </div>
      </div>
    </div>
  );
}

export default Education;
