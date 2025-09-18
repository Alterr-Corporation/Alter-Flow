import React, { useState } from 'react';

// SVG Icons for a cleaner look
const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const CheckSquareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>;
const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>;
const FileTextIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>;
const SettingsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>;

const navItems = [
  { name: 'Dashboard', icon: <HomeIcon /> },
  { name: 'To-Do List', icon: <CheckSquareIcon /> },
  { name: 'Calendar', icon: <CalendarIcon /> },
  { name: 'Notes', icon: <FileTextIcon /> },
];

function App() {
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800">
      {/* Sidebar Navigation */}
      <aside className="w-64 flex flex-col bg-gray-800 text-gray-200">
        <div className="p-6 text-center border-b border-gray-700">
          <h1 className="text-2xl font-bold text-white tracking-wider">Alter-Flow</h1>
          <p className="text-sm text-gray-400 mt-1">Your Life Manager</p>
        </div>
        <nav className="flex-1 mt-6 px-4">
          <ul>
            {navItems.map((item) => (
              <li key={item.name} className="mb-2">
                <a
                  href="#"
                  onClick={() => setActiveItem(item.name)}
                  className={`flex items-center rounded-md p-3 transition-all duration-200 ease-in-out
                    ${activeItem === item.name 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'hover:bg-gray-700 hover:text-white'
                    }`}
                >
                  <span className="mr-4">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-700">
           <a href="#" className="flex items-center rounded-md p-3 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors duration-200">
              <span className="mr-4"><SettingsIcon /></span>
              <span className="font-medium">Settings</span>
           </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-700">Welcome Back!</h2>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center text-blue-600 font-bold">
              U
            </div>
            <span className="ml-3 text-gray-600">User</span>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          <h3 className="text-3xl text-gray-800 font-bold mb-6">{activeItem}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-semibold text-gray-800">Feature Placeholder</h4>
              <p className="mt-2 text-gray-500">
                This is where the content for "{activeItem}" will appear. Start building out your components here!
              </p>
            </div>
             <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-semibold text-gray-800">Quick Stats</h4>
              <p className="mt-2 text-gray-500">
                Display some interesting data or statistics here.
              </p>
            </div>
             <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-semibold text-gray-800">Coming Soon</h4>
              <p className="mt-2 text-gray-500">
                Another card to fill out the layout and make it feel complete.
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
