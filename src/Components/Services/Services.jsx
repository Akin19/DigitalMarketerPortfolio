import "./Services.css";
import { FaCheck } from "react-icons/fa6";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="services_head">
            <h3>Digital Marketing</h3>
          </div>

          <ul className="service_list">
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                Blog posts, articles, infographics, videos, and social media
                content.
              </p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Topic research, keyword mapping, and SEO content planning.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                Improving existing content to rank better and increase
                engagement.
              </p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                Sharing content across relevant platforms to maximize reach.
              </p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Improving layout, content, and CTAs for higher conversions.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Testing variations to see what works best.</p>
            </li>
            {/* <li>
              <FaCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>
        {/* UI/UX ends here */}

        <article className="service">
          <div className="services_head">
            <h3>Social Media Marketting</h3>
          </div>

          <ul className="service_list">
            <li>
              <FaCheck className="service_list-icon" />
              <p>Account setup.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>profile optimization.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Regular posting, Audience research </p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Content calendar and engagement strategies..</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Ad creation and targeting</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                Campaign optimization on platforms like Facebook, Instagram, and
                LinkedIn.
              </p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Search ads, display ads, and retargeting.</p>
            </li>
          </ul>
        </article>

        {/* web design ends here */}

        <article className="service">
          <div className="services_head">
            <h3>SEO</h3>
          </div>

          <ul className="service_list">
            <li>
              <FaCheck className="service_list-icon" />
              <p>On-Page SEO.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Off-Page SEO.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Technical SEO.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Local SEO.</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                Keyword optimization, meta tags, headers, image optimization,
                internal linking..
              </p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                Link-building strategy, guest posting, and backlink analysis.
              </p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>
                Website speed optimization, mobile-friendliness, crawlability,
                indexation.
              </p>
            </li>
          </ul>
        </article>

        {/* Content writing ends here */}
      </div>
    </section>
  );
};

export default Services;
