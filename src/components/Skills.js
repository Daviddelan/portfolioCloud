import meter1 from "../assets/img/meter1.svg";
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Our team is comprised of highly skilled developers with extensive expertise in cloud computing. We excel in leveraging cloud technologies to build scalable, efficient, and secure solutions. Our collective experience spans various cloud platforms, enabling us to deliver innovative and customized solutions tailored to meet the unique needs of our clients.</p>
                        <div className="d-flex flex-row align-items-center">
                            <div className="item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '0 auto' }}>
                                <img src={meter1} alt="Image" />
                                <h5>Cloud Solutions</h5>
                            </div>
                            <div className="carousel-text" style={{ marginLeft: '20px' }}>
                                <h4>Why Choose Us?</h4>
                                <p>We bring together a team of talented individuals who are experts in their respective fields. Our approach focuses on delivering results that exceed client expectations, while continuously improving our skills to stay ahead of the industry trends.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
