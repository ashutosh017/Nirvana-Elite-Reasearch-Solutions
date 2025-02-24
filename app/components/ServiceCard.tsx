'use client'

// import { redirect } from "next/navigation";

 const ServiceCard =({
    icon,
    title,
    description,
  }: {
    icon: React.ReactNode;
    title: string;
    description: string;
    link?:string
  }) =>{
    return (
      <button onClick={()=>{
        // redirect(link)
        // redirect("/services")
      }} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </button>
    );
  }

  export default ServiceCard