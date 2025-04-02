import { useState, useRef, useEffect, RefObject } from 'react';
// import QYH from './Collaborators/QYH/PersonalProfile';
import ProductShowcase from './Collaborators/ZMZ/ProductShowcase';
import HLS from './Collaborators/HLS/head';

type SectionRefs = {
  [key: string]: RefObject<HTMLDivElement | null>;
};

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
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

  // 同步 isDarkMode 状态到 document.documentElement
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const scrollToSection = (ref: RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newTheme = !prevMode ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return !prevMode;
    });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''} ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <nav className="fixed w-full z-50 transition-all duration-300 bg-white shadow">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => scrollToSection(sectionRefs.home)}
                className="px-4 py-2.5 font-semibold text-gray-800 hover:text-gray-900 transition-all hover:bg-gray-100 backdrop-blur-sm transform hover:scale-105 active:scale-95"
              >
                首页
              </button>
              <button
                onClick={() => scrollToSection(sectionRefs.menu)}
                className="px-4 py-2.5 font-semibold text-gray-800 hover:text-gray-900 transition-all hover:bg-gray-100 backdrop-blur-sm transform hover:scale-105 active:scale-95"
              >
                菜单
              </button>
              <button
                onClick={() => scrollToSection(sectionRefs.about)}
                className="px-4 py-2.5 font-semibold text-gray-800 hover:text-gray-900 transition-all hover:bg-gray-100 backdrop-blur-sm transform hover:scale-105 active:scale-95"
              >
                简介
              </button>
              <button
                onClick={() => scrollToSection(sectionRefs.contact)}
                className="px-4 py-2.5 font-semibold text-gray-800 hover:text-gray-900 transition-all hover:bg-gray-100 backdrop-blur-sm transform hover:scale-105 active:scale-95"
              >
                联系
              </button>
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="px-4 py-2.5 font-semibold text-gray-800 hover:text-gray-900 transition-all hover:bg-gray-100 backdrop-blur-sm transform hover:scale-105 active:scale-95"
                >
                  更多
                  <svg className="w-4 h-4 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`absolute right-0 mt-2 w-48 origin-top-right rounded transition-all duration-300 ${
                    isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 invisible'
                  } bg-white`}
                >
                  <button
                    onClick={() => {
                      scrollToSection(sectionRefs.more1);
                      setIsDropdownOpen(false);
                    }}
                    className="block w-full px-4 py-3 text-sm text-gray-800 text-left transition-colors hover:bg-gray-100"
                  >
                    更多1
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection(sectionRefs.more2);
                      setIsDropdownOpen(false);
                    }}
                    className="block w-full px-4 py-3 text-sm text-gray-800 text-left transition-colors hover:bg-gray-100"
                  >
                    更多2
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection(sectionRefs.more3);
                      setIsDropdownOpen(false);
                    }}
                    className="block w-full px-4 py-3 text-sm text-gray-800 text-left transition-colors hover:bg-gray-100"
                  >
                    更多3
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded backdrop-blur-sm transition-all transform hover:scale-110 bg-gray-200 hover:bg-gray-300 text-gray-800"
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
                  className="pl-10 pr-4 py-2.5 rounded backdrop-blur-sm transition-all w-48 bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 focus:border-blue-400"
                />
                <svg
                  className="w-5 h-5 absolute left-3 top-3 text-gray-500"
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
        <div className="pt-20">
  {/* 首页 Section */}
  <div ref={sectionRefs.home} className="h-screen flex items-center justify-center">
    <HLS></HLS>
  </div>

  {/* 菜单 Section */}
  <div ref={sectionRefs.menu} className="h-screen  flex items-center justify-center">
    <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-300">这里是菜单内容</h2>
  </div>

  {/* 简介 Section */}
  <div ref={sectionRefs.about} className="h-screen   flex items-center justify-center">
    <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">关于我们的简介</h2>
  </div>

  {/* 联系 Section */}
  <div ref={sectionRefs.contact} className="h-screen flex items-center justify-center">
    <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-300">联系我们</h2>
  </div>

  {/* 更多1 Section */}
  <div ref={sectionRefs.more1} className="h-screen   flex items-center justify-center">
    <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">更多内容 1</h2>
  </div>

  {/* 更多2 Section */}
  <div ref={sectionRefs.more2} className="h-screen bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
    <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-300">
      <ProductShowcase onClose={() => console.log('Product showcase closed')} />
    </h2>
  </div>

  {/* 更多3 Section */}
  <div ref={sectionRefs.more3} className="h-screen   flex items-center justify-center">
    <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">更多内容 3</h2>
  </div>
</div>
      </div>
    </div>
  );
}