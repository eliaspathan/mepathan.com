import React from 'react';
import { Github } from 'lucide-react';
import { socialLinks } from '../data/mockData';

const Hero: React.FC = () => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'GitHub': return <Github className="h-5 w-5" />;
      default: return <Github className="h-5 w-5" />;
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3">
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></span>
                <span className="text-sm text-gray-600">Building software, ideas, and polished interfaces</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold font-heading text-gray-900 leading-tight">
                  Hey, I'm{' '}
                  <span className="text-gradient">mepathan</span>
                </h1>

                <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl leading-relaxed">
                  A software engineer and builder focused on turning ideas into clean, useful digital experiences.
                  I share product experiments, frontend work, and practical engineering notes from the real world.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-6">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-gray-700">Connect:</span>
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-white hover:bg-gray-50 rounded-full shadow-sm border border-gray-200 text-gray-600 hover:text-primary-600 transition-all duration-200 transform hover:scale-110"
                      title={social.name}
                    >
                      {getSocialIcon(social.icon)}
                    </a>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <blockquote className="text-center lg:text-left">
                    <p className="text-lg font-medium text-gray-900 mb-2">
                      “Believe in Data Democracy”
                    </p>
                  </blockquote>
                </div>

                <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-6 text-white">
                  <div className="text-center lg:text-left">
                    <h3 className="text-lg font-semibold mb-2">Latest focus</h3>
                    <p className="text-primary-100 text-sm mb-3">
                      Frontend engineering, product thinking, and building with clarity.
                    </p>
                    <button className="inline-flex items-center text-sm font-medium text-white hover:text-primary-100 transition-colors">
                      View projects →
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-2">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">6</div>
                  <div className="text-sm text-gray-600">Repos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-600">5</div>
                  <div className="text-sm text-gray-600">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">20</div>
                  <div className="text-sm text-gray-600">Following</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">Open</div>
                  <div className="text-sm text-gray-600">To build</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg overflow-hidden">
                  <img
                    src="https://avatars.githubusercontent.com/u/10150231?v=4"
                    alt="mepathan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-3">
                  mepathan
                </h3>
                <p className="text-gray-600 mb-6">
                  Product-minded developer sharing code, experiments, and thoughtful product ideas.
                </p>
                <div className="flex justify-center space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-primary-100 rounded-xl text-gray-600 hover:text-primary-600 transition-all duration-200 transform hover:scale-110"
                    >
                      {getSocialIcon(social.icon)}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Building the next useful thing
                  </h3>
                  <p className="text-gray-300">
                    Interested in useful products, UX clarity, and software that feels as thoughtful as it is practical.
                  </p>
                </div>

                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  />
                  <button className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg">
                    Connect
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    No spam, only useful updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
