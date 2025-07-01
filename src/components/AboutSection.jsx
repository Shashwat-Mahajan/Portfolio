import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const AboutSection = () => {
  return (
    <div>
      <section id="about" className="pu-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="sapce-y-6">
              <h3 className="">Passionate Web Developer</h3>
              <p className="text-muted-foreground">
                Full-stack developer skilled in React, Node.js, MongoDB, and
                Tailwind CSS, with experience building responsive and
                user-friendly web applications. Strong understanding of data
                structures and algorithms, combined with a focus on clean UI
                design and smooth animations using tools like GSAP. Comfortable
                working across the stack — from developing REST APIs to managing
                state and deploying full-fledged applications
              </p>

              <p className="text-muted-foreground">
                Passionate about exploring emerging technologies including AI,
                Machine Learning, IoT, and Quantum Computing. Continuously
                learning through real-world projects and side experiments that
                challenge both logic and creativity. Open to internships,
                collaborations, and opportunities that allow me to contribute,
                grow, and solve impactful problems.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contatct" className="cosmic-button">
                  {" "}
                  Get in Touch{" "}
                </a>
                <a
                  href="#contatct"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  {" "}
                  Download Resume{" "}
                </a>
              </div>
            </div>
            <div className="grid grid-col-1 gap-6">
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg"> Web Development</h4>
                    <p className="text-muted-foreground">
                      Creating responsive websites and web applications with
                      modern frameworks.
                    </p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg"> UI/UX Design</h4>
                    <p className="text-muted-foreground">
                      Designing intutive user interfaces and seamless user
                      experiences.
                    </p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg"> Project Management</h4>
                    <p className="text-muted-foreground">
                      Leading projects from conception to completeion with agile methedologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
