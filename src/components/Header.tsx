import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">Portfolio</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <a
              href="https://github.com/Nadunrandeera"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/nadunrandeera/"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="nadunrandeera@gmail.com"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X size={24} className="text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu size={24} className="text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              About
            </a>
            <a
              href="#skills"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;