import { useState, useRef, useEffect, RefObject } from 'react';
import QYH from './Collaborators/QYH/PersonalProfile';
import HLS from './Collaborators/HLS/head';

type SectionRefs = {
  [key: string]: RefObject<HTMLDivElement | null>;
};

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => 
    localStorage.getItem('theme') === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
  const [searchTerm, setSearchTerm] = useState('');

  const sectionRefs: SectionRefs = {
    home: useRef<HTMLDivElement>(null),
    menu: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
    more1: useRef<HTMLDivElement>(null),
    more2: useRef<HTMLDivElement>(null),
    more3: useRef<HTMLDivElement>(null),
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDarkMode]);

  const scrollToSection = (ref: RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <nav className={`fixed w-full z-50 transition-all duration-300 shadow ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              {['home', 'menu', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(sectionRefs[section])}
                  className={`px-4 py-2.5 font-semibold transition-all backdrop-blur-sm transform hover:scale-105 active:scale-95 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-gray-100 hover:bg-gray-700' 
                      : 'text-gray-800 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {{
                    home: '首页',
                    menu: '菜单',
                    about: '简介',
                    contact: '联系'
                  }[section]}
                </button>
              ))}
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`px-4 py-2.5 font-semibold transition-all backdrop-blur-sm transform hover:scale-105 active:scale-95 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-gray-100 hover:bg-gray-700' 
                      : 'text-gray-800 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  更多
                  <svg className="w-4 h-4 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`absolute right-0 mt-2 w-48 origin-top-right rounded transition-all duration-300 ${
                    isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 invisible'
                  } ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}
                >
                  {['more1', 'more2', 'more3'].map((section, index) => (
                    <button
                      key={section}
                      onClick={() => {
                        scrollToSection(sectionRefs[section]);
                        setIsDropdownOpen(false);
                      }}
                      className={`block w-full px-4 py-3 text-sm text-left transition-colors ${
                        isDarkMode
                          ? 'text-gray-200 hover:bg-gray-600'
                          : 'text-gray-800 hover:bg-gray-100'
                      }`}
                    >
                      更多{index + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded backdrop-blur-sm transition-all transform hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' 
                    : 'bg-gray-200 hover:bg-gray-300 text-blue-600'
                }`}
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                    />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>
              <div className="relative">
                <input
                  type="text"
                  placeholder="搜索..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`pl-10 pr-4 py-2.5 rounded backdrop-blur-sm transition-all w-48 border ${
                    isDarkMode
                      ? 'bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400 focus:border-blue-500'
                      : 'bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500 focus:border-blue-400'
                  }`}
                />
                <svg
                  className={`w-5 h-5 absolute left-3 top-3 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="pt-20">
        {/* Sections */}
        <div ref={sectionRefs.home} className="h-screen w-screen flex items-center justify-center">
          <div className={`text-3xl font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <HLS />
          </div>
        </div>

        <div ref={sectionRefs.menu} className="h-screen flex items-center justify-center">
          <h2 className={`text-3xl font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            这里是菜单内容
          </h2>
        </div>

        <div ref={sectionRefs.about} className="h-screen flex items-center justify-center">
          <h2 className={`text-3xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            关于我们的简介
          </h2>
        </div>

        <div ref={sectionRefs.contact} className="h-screen flex items-center justify-center">
          <h2 className={`text-3xl font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            联系我们
          </h2>
        </div>

        {[1, 2, 3].map((num) => (
          <div 
            key={num}
            ref={sectionRefs[`more${num}`]}
            className={`h-screen flex items-center justify-center ${num === 2 ? (isDarkMode ? 'bg-gray-800' : 'bg-gray-100') : ''}`}
          >
            <h2 className={`text-3xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
              更多内容 {num}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}