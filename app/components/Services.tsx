import {
    BarChart,
    BookOpen,
    CheckSquare,
    Edit,
    FileText,
  } from "lucide-react";
  import ServiceCard from "./ServiceCard";
  
  const Services = () => {
    return (
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FileText className="h-12 w-12 text-primary" />}
              title="Synopsis & Research Proposal Writing"
              description="Your research journey begins with a winning proposal. Our team crafts impactful, well-structured, and persuasive proposals that align with your university’s requirements, ensuring instant approval and recognition."
              link="/services/synopsis-writing"
            />
            <ServiceCard
              icon={<BookOpen className="h-12 w-12 text-primary" />}
              title="Thesis & Dissertation Writing"
              description="Writing a high-quality, publication-ready thesis is no easy task. Our experts provide step-by-step guidance to develop a structured, meticulously researched, and compelling dissertation that meets the highest academic standards."
              link="/services/thesis-writing"
            />
            <ServiceCard
              icon={<FileText className="h-12 w-12 text-primary" />}
              title="Journal Paper Writing & Publication"
              description="Want to publish in top-tier journals like Scopus, IEEE, Elsevier, or Springer? Our researchers craft high-impact research papers that meet strict editorial standards, significantly increasing your chances of quick acceptance and publication."
              link="/services/journal-publication"
            />
            <ServiceCard
              icon={<BarChart className="h-12 w-12 text-primary" />}
              title="Advanced Data Analysis"
              description="Numbers tell a story—our data analysts make sure yours is accurate, insightful, and impactful. Using AI-driven analytics, Python, MATLAB, SPSS & R, we extract meaningful insights from your data to support your research with solid evidence."
              link="/services/data-analysis"
            />
            <ServiceCard
              icon={<Edit className="h-12 w-12 text-primary" />}
              title="Research Editing & Proofreading"
              description="A minor error can cost you a journal rejection. Our expert editors meticulously refine your work, ensuring clarity, coherence, and adherence to academic standards, making it publication-ready and error-free."
              link="/services/editing-proofreading"
            />
            <ServiceCard
              icon={<CheckSquare className="h-12 w-12 text-primary" />}
              title="Plagiarism Checking & Removal"
              description="Originality is non-negotiable. We utilize Turnitin, Grammarly, and AI-powered tools to detect and eliminate plagiarism, ensuring your work meets the highest academic integrity standards with a 100% originality guarantee."
              link="/services/plagiarism-checking"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  