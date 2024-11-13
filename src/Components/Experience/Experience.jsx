import "./Experience.css";
import { FaCheckCircle } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        {/* Frontend starts here */}
        <div className="experience_frontend">
          <h3>Digital Marketing</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>Content Marketing</h4>
                <small className="text-light">Intermediet</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>Facebok ads</h4>
                <small className="text-light">Intermediet</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>PPC Advertising</h4>
                <small className="text-light">Intermediet</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>Email Marketing</h4>
                <small className="text-light">Intermediet</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>Insta ad</h4>
                <small className="text-light">Intermediet</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>Google Ad</h4>
                <small className="text-light">Intermediet</small>
              </div>
            </article>
          </div>
        </div>

        {/* Backend start here */}
        <div className="experience_backend">
          <h3>SEO</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>Keyword Research</h4>
                <small className="text-light">Intermediet</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>On-Page SEO</h4>
                <small className="text-light">Intermediet</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>Technical SEO</h4>
                <small className="text-light">Intermediet</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>Content Optimization</h4>
                <small className="text-light">Intermediet</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>Off-Page SEO</h4>
                <small className="text-light">Intermediet</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details_icon" />
              <div>
                <h4>SEO Tools</h4>
                <small className="text-light">Intermediet</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
