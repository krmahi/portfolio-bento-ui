import "../styles/Education.css";

function Education() {
  return (
    <div className="experience-hero">
      <div className="title">Education</div>
      <div className="work-blocks edu-blocks">
        {/* block 1 */}
        <div className="block-1 block-color">
          <div className="block-title edu-span">
            GLBITM <span>07/2024</span>
          </div>
          <div className="block-sub-title">Computer Science</div>
          <div className="block-sub-title edu-sub-title">
            Delhi NCR, INDIA | 8.3 cgpa
          </div>
          <div id="eblock" className="block-sub-title ebold upperpadding">
            Course curriculum
          </div>
          <div id="eblock" className="categories">
            <span>DSA</span>
            <span>DBMS</span>
            <span>DSTL</span>
            <span>OS</span>
            <span>Automata</span>
            <span>literature</span>
            <span>System Design</span>
            <span>Web Technologies</span>
          </div>
        </div>

        {/* block 2 */}
        <div className="block-1 block-color">
          <div className="block-title edu-span">
            Army public school <span>03/2020</span>
          </div>
          <div className="block-sub-title">Science, INTERMEDIATE</div>
          <div className="block-sub-title edu-sub-title">
            Prayagraj, INDIA | 89%
          </div>
          <div className="block-sub-title ebold upperpadding">
            Course curriculum
          </div>
          <div id="eblock" className="categories">
            <span>Physics</span>
            <span>Chemistry</span>
            <span>Maths</span>
            <span>English</span>
            <span>Infortmation Technology</span>
            <span>Physical Education</span>
          </div>
        </div>

        {/* block 3 */}
        <div className="block-1 block-color">
          <div className="block-title edu-span">
            Army public school <span>03/2018</span>
          </div>
          <div className="block-sub-title">Hign School</div>
          <div className="block-sub-title edu-sub-title">
            Prayagraj, INDIA | 87%
          </div>
          <div className="block-sub-title ebold upperpadding">
            Course curriculum
          </div>
          <div id="eblock" className="categories">
            <span>Physics</span>
            <span>Chemistry</span>
            <span>Maths</span>
            <span>English</span>
            <span>Biology</span>
            <span>Economics</span>
            <span>Geography</span>
            <span>History</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
