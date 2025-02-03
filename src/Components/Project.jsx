import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="h-screen bg-white flex flex-col justify-center items-center text-center p-8">
      <h2 className="text-4xl font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        
    
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">Project 1</h3>
          <p className="mt-2">A simple web application.</p>
        </div>

        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">Project 2</h3>
          <p className="mt-2">An interactive UI project.</p>
        </div>

        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">Project 3</h3>
          <p className="mt-2">A full-stack application.</p>
        </div>

      </div>
    </section>
  );
};

export default Projects;
