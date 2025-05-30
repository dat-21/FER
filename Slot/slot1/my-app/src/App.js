import React, { useEffect, useRef, useState } from 'react';
import './App.css';

const GenerateDashboard = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const dropdownRefs = useRef([]);

  const handleDropdownToggle = (index) => {
    setOpenDropdownIndex(prev => (prev === index ? null : index));
  };

  const handleClickOutside = (e) => {
    if (
      dropdownRefs.current.every(ref => ref && !ref.contains(e.target))
    ) {
      setOpenDropdownIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const jobsData = [
    { title: 'UI/UX Designer', status: 'active', apps: 798 },
    { title: 'Senior UX Designer', status: 'active', apps: 185 },
    { title: 'Technical Support Specialist', status: 'active', apps: 556 },
    { title: 'Junior Graphic Designer', status: 'active', apps: 583 },
    { title: 'Front End Developer', status: 'expired', apps: 740 },
  ];

  return (
    <div className="dashboard-container min-h-screen flex flex-col">
      <header className="bg-gray-100 p-4 border-b border-gray-300">
        {/* Navigation */}
      </header>

      <div className="flex flex-1">
        <aside className="w-64 bg-gray-50 p-4 border-r border-gray-300">
          {/* Sidebar */}
        </aside>

        <main className="flex-1 p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl">MyJob</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Post A Jobs</button>
          </div>

          <div className="flex space-x-4 mb-4">
            <div className="bg-gray-200 p-4 text-center flex-1 rounded">
              <h2 className="text-2xl">589</h2>
              <p className="text-gray-600">Open Jobs</p>
            </div>
            <div className="bg-gray-200 p-4 text-center flex-1 rounded">
              <h2 className="text-2xl">2,517</h2>
              <p className="text-gray-600">Saved Candidates</p>
            </div>
          </div>

          <div className="jobs-section">
            <h3 className="text-xl mb-2">Recently Posted Jobs</h3>
            <table className="w-full border-collapse">
              <tbody>
                {jobsData.map((job, index) => (
                  <tr key={job.title}>
                    <td className="p-2 border-b border-gray-300">{job.title}</td>
                    <td className="p-2 border-b border-gray-300">
                      <span
                        className={`px-2 py-1 rounded-full ${
                          job.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {job.status === 'active' ? 'Active' : 'Expire'}
                      </span>
                    </td>
                    <td className="p-2 border-b border-gray-300">{job.apps} Applications</td>
                    <td className="p-2 border-b border-gray-300 relative">
                      <button
                        className="bg-blue-600 text-white px-2 py-1 rounded"
                        onClick={() => handleDropdownToggle(index)}
                      >
                        View Applications
                      </button>

                      {openDropdownIndex === index && (
                        <div
                          ref={el => (dropdownRefs.current[index] = el)}
                          className="dropdown absolute bg-white border border-gray-300 rounded p-2 z-10 shadow-lg"
                          style={{ top: '40px', right: '0' }}
                        >
                          <div className="p-1 hover:bg-gray-100 cursor-pointer">Promote Job</div>
                          <div className="p-1 hover:bg-gray-100 cursor-pointer">View Detail</div>
                          <div className="p-1 hover:bg-gray-100 cursor-pointer">Mark as expired</div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      <footer className="bg-gray-100 p-2 border-t border-gray-300 text-center">
        <p>© 2024 MyJob - Job Portal All rights Reserved</p>
      </footer>
    </div>
  );
};

export default GenerateDashboard;
