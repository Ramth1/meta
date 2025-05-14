// components/Footer.tsx
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              <div className='flex flex-row gap-2 items-center'>
                <img src='https://www.metalogic.com.np/metalogo.png' className="w-15 h-10"/ >
                MetaLogic
              </div>
            </h3>
            <p className="text-sm">Software Private Limited</p>
            <div className="space-y-2">
              <p className="text-sm">Saptakhel, Lalitpur (Head office)</p>
              <a href="tel:+9779851333599" className="block hover:text-blue-400 transition-colors">
                +977 9851333599
              </a>
              <a href="mailto:info@metalogic.com.np" className="block hover:text-blue-400 transition-colors">
                info@metalogic.com.np
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              {['Feedback', 'Partnership', 'Terms and Conditions'].map((item) => (
                <li key={item}>
                  <a href="/" className="hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              {[
                'Custom Software Development',
                'Web Development',
                'Mobile App Development',
                'Cloud Computing Services',
                'Quality Assurance and Testing',
                'UI/UX Designing',
                'Maintenance and Support',
                'Dev Ops',
                'Biochemical Solutions'
              ].map((service) => (
                <li key={service}>
                  <a href="/services" className="hover:text-blue-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Join & Social */}
          <div className="space-y-4">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Join</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/careers" className="hover:text-blue-400 transition-colors">
                    Careers at MetalLogic
                  </a>
                </li>
                <li>
                  <a href="/internships" className="hover:text-blue-400 transition-colors">
                    Internships
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4 pt-4">
              <h4 className="text-lg font-semibold text-white">Social Medias</h4>
              <div className="flex space-x-4">
                {[
                  { Icon: FaFacebook, link: 'https://facebook.com' },
                  { Icon: FaLinkedin, link: 'https://linkedin.com' },
                  { Icon: FaTwitter, link: 'https://twitter.com' },
                  { Icon: FaInstagram, link: 'https://instagram.com' }
                ].map(({ Icon, link }, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-blue-400 transition-colors"
                    aria-label="Social media link"
                  >
                    <Icon/>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">
            Copyright © 2024 MetalLogic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;