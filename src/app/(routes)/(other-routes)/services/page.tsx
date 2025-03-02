import { FC } from "react";
import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Research Proposal Development",
    description: "Get Your Proposal Accepted Without Revisions! We provide compelling problem statements, clearly defined methodologies, proper structuring, formatting, referencing, and proposals tailored for funding applications & academic approvals.",
  },
  {
    title: "Thesis & Dissertation Assistance",
    description: "From Concept to Completion – A Complete Research Solution! We offer customized writing & structuring, comprehensive literature review, in-depth data analysis, and revisions based on supervisor feedback.",
  },
  {
    title: "Journal Paper Writing & Publication Support",
    description: "Publish in Scopus, SCI, Elsevier, Springer & More! Our services include manuscript drafting, journal selection, reviewer comment handling, plagiarism-free writing, and citation optimization.",
  },
  {
    title: "Data Analysis & Statistical Support",
    description: "Accurate Data. Powerful Insights. Stronger Research. Our experts assist with SPSS, R, Python, MATLAB, NVivo, AMOS, STATA, descriptive & inferential statistical analysis, hypothesis testing, and graphical/tabular data representation.",
  },
  {
    title: "Proofreading, Editing & Plagiarism Removal",
    description: "Polish Your Work to Perfection! We provide grammar correction, academic tone enhancement, plagiarism removal, Turnitin verification, and compliance with journal guidelines.",
  },
  {
    title: "PhD Consultation & Mentorship",
    description: "Personalized Guidance for Your Doctoral Success! Our mentorship covers research framework development, theoretical model formulation, proposal defense guidance, and ongoing PhD support.",
  },
  {
    title: "Conference Paper Writing & Presentation Support",
    description: "Make an Impact at International Conferences! Get high-quality conference paper writing, presentation slide preparation, speech scripting, and abstract submission support.",
  },
  {
    title: "Systematic Literature Review & Meta-Analysis",
    description: "Build a Strong Research Foundation with an In-Depth Review! We identify research gaps, conduct critical analysis, provide structured content, and perform meta-analysis & bibliometric analysis.",
  },
  {
    title: "Research Implementation & Code Development",
    description: "Practical Solutions for Technical & Computational Research! We assist with algorithm development, machine learning models, big data research, IoT, blockchain, and cybersecurity projects.",
  },
];

const ServicesPage: FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 py-12 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Background 3D Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-300 blur-3xl opacity-30 -z-10"></div>
      
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Our Premium Research Assistance Services
      </h1>
      <p className="text-center text-lg text-gray-600 mb-12">
        Empowering Scholars, Elevating Research, Ensuring Success
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl relative"
          >
            <div className="flex items-center mb-4">
              <CheckCircle className="text-primary text-2xl mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
            </div>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
