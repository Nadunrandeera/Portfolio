import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold">Nadun Randeera</p>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/Nadunrandeera" className="text-gray-400 hover:text-white">
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/nadunrandeera/"
              className="text-gray-400 hover:text-white"
            >
              <Linkedin size={24} />
            </a>
            <a href="nadunrandeera@gmail.com" className="text-gray-400 hover:text-white">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nadun Randeera . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
