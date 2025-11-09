import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="flex items-center justify-center mb-10"><h2 className="text-3xl font-bold">My Projects</h2></div>
        <div className="showcaselayout">
            <div ref={rydeRef} className="first-project-wrapper">
              <a href="https://smilelytics.netlify.app/" target="_blank" rel="noopener noreferrer">
              <div className="image-wrapper">
                <img src="/images/project1.png" alt="Ryde App Interface" />
              </div>
              <div className="text-content">
                <h2>SmileLytics.AI</h2>
                <p className="text-white-50 md:text-xl">
                  AI-powered Dental Clinic Assistant that streamlines clinic operations and enhances patient engagement
                </p>
              </div>
              </a>
            </div>
          

          <div className="project-list-wrapper overflow-hidden">
           <a href="https://foodpoint24.netlify.app/main" target="_blank" rel="noopener noreferrer">
              <div className="project" ref={libraryRef}>
                <div className="image-wrapper bg-[#FFEFDB]">
                  <img
                    src="/images/project2.png"
                    alt="Food Point"
                  />
                </div>
                <h2>Food Point - A food delivery app</h2>
              </div>
            </a>

            <a href="https://dwarkaorthodontics.com/" target="_blank" rel="noopener noreferrer">
              <div className="project" ref={ycDirectoryRef}>
                <div className="image-wrapper bg-[#FFE7EB]">
                  <img src="/images/project3.png" alt="Dwarka Orthodontics" />
                </div>
                <h2>Dwarka Orthodontics - Dental Products E-Commerce</h2>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
