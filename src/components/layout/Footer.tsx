import React from "react";
import { Link } from "react-router-dom";

// Official X (Twitter) logo SVG
const IconX = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 1200 1227" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="backdrop-blur-md bg-white/5 dark:bg-white/5 text-zinc-700 dark:text-white/80 border-t border-zinc-200 dark:border-white/20">
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "NucleasAI",
          "url": "https://nucleasai.com",
          "logo": "https://nucleasai.com/og-image.png",
          "sameAs": [
            "https://twitter.com/nucleasai",
            "https://linkedin.com/company/nucleasai"
          ]
        }
      `}</script>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                NucleasAI
              </span>
            </div>
            <p className="text-zinc-600 dark:text-gray-400 text-sm mb-4">
              Next-generation Customer Data Platform for modern businesses.
            </p>
          </div>

          {/* Platform (was Product) */}
          <div>
            <h3 className="text-zinc-900 dark:text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="/#product" className="text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white text-sm" aria-label="Product">Product</a></li>
              <li><a href="/#solutions" className="text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white text-sm" aria-label="Platform Solutions">Solutions</a></li>
              <li className="text-zinc-600 dark:text-gray-400 text-sm">Blog</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-zinc-900 dark:text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/#about" className="text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white text-sm" aria-label="About NucleasAI">About</a></li>
              <li><a href="/#contact" className="text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white text-sm" aria-label="Contact NucleasAI">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-zinc-900 dark:text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white text-sm" aria-label="Terms of Service">Terms of Service</a></li>
              <li><a href="#" className="text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white text-sm" aria-label="Privacy Policy">Privacy Policy</a></li>
              <li><a href="#" className="text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white text-sm" aria-label="Cookie Policy">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-200 dark:border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-600 dark:text-gray-400 text-sm">
              © 2025 NucleasAI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://linkedin.com/company/nucleasai" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white" aria-label="LinkedIn">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://twitter.com/nucleasai" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white" aria-label="X (Twitter)">
                <span className="sr-only">X (Twitter)</span>
                <IconX className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
