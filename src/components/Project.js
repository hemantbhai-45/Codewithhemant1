import React, { useState } from 'react';

function Project() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [editingId, setEditingId] = useState(null);

  // 🔒 Admin check (true = show edit/delete options)
  const isAdmin = true; // Set to false to hide admin controls

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert('Please enter project title');
    if (!description.trim()) return alert('Please enter project description');
    if (!githubLink.trim()) return alert('Please enter GitHub link');
    if (!pdfFile && editingId === null) return alert('Please upload a PDF file');

    if (editingId) {
      // Editing project
      setProjects((prev) =>
        prev.map((proj) =>
          proj.id === editingId
            ? {
                ...proj,
                title,
                description,
                githubLink,
                pdfURL: pdfFile ? URL.createObjectURL(pdfFile) : proj.pdfURL,
                pdfName: pdfFile ? pdfFile.name : proj.pdfName,
              }
            : proj
        )
      );
      setEditingId(null);
    } else {
      // Adding new project
      const newProject = {
        id: Date.now(),
        title,
        description,
        githubLink,
        pdfURL: URL.createObjectURL(pdfFile),
        pdfName: pdfFile.name,
      };
      setProjects([...projects, newProject]);
    }

    // Reset form
    setTitle('');
    setDescription('');
    setGithubLink('');
    setPdfFile(null);
  };

  const handleEdit = (project) => {
    setEditingId(project.id);
    setTitle(project.title);
    setDescription(project.description);
    setGithubLink(project.githubLink);
    setPdfFile(null);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this project?');
    if (confirmDelete) {
      setProjects(projects.filter((proj) => proj.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-blue-200 p-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">{editingId ? "Edit Project" : "Add Your Project"}</h2>

      {/* Add/Edit Form */}
      <form
        onSubmit={handleAddProject}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg"
      >
        <div className="mb-4">
          <label className="block font-semibold mb-1 text-gray-700">Project Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter title"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1 text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Project description"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1 text-gray-700">GitHub Link</label>
          <input
            type="text"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="https://github.com/user/repo"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1 text-gray-700">Upload PDF</label>
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setPdfFile(e.target.files[0])}
            className="w-full"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 transition"
        >
          {editingId ? "Update Project" : "Add Project"}
        </button>
      </form>

      {/* Projects List */}
      <div className="mt-10 w-full max-w-lg">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Your Projects</h3>

        {projects.length === 0 ? (
          <p className="text-gray-600">No projects added yet.</p>
        ) : (
          projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-4 rounded-md shadow mb-4 border-l-4 border-green-500"
            >
              <h4 className="font-bold text-lg text-green-700">{project.title}</h4>
              <p className="text-gray-700">{project.description}</p>

              <div className="mt-2">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium mr-4"
                >
                  🔗 GitHub
                </a>

                <a
                  href={project.pdfURL}
                  download={project.pdfName}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:underline font-medium"
                >
                  📄 Download PDF
                </a>
              </div>

              {isAdmin && (
                <div className="mt-3 space-x-4">
                  <button
                    onClick={() => handleEdit(project)}
                    className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    🗑️ Delete
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Project;
