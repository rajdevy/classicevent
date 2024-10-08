import React, { useState, useEffect } from 'react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// TypingEffect component for each line with delay
const TypingEffect = ({ text, typingSpeed, isOpen }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let timeout;
    if (isOpen && text) {
      // Reset text before typing
      setDisplayedText('');
      let currentCharIndex = 0; // Start with the first character (index 0)

      const displayNextCharacter = () => {
        if (currentCharIndex < text.length) {
          setDisplayedText((prev) => prev + text.charAt(currentCharIndex));
          currentCharIndex += 1; // Move to the next character
          timeout = setTimeout(displayNextCharacter, typingSpeed);
        }
      };

      displayNextCharacter(); // Start typing immediately after opening
    } else {
      // Reset when closed
      setDisplayedText('');
    }

    return () => clearTimeout(timeout);
  }, [isOpen, text, typingSpeed]);

  return <span>{displayedText}</span>;
};

// CustomAccordion Component
export default function CustomAccordion() {
  const accordionData = [
    {
      title: 'Banking, Financial Services and Insurance',
      icon: AccountBalanceIcon,
      content: [
        'Expertise in secure and efficient software for the BFSI sector.',
        'Financial transactions management solutions.',
        'Risk assessment systems for informed decision-making.',
        'Customer relationship management (CRM) solutions.',
        'Regulatory compliance solutions to meet industry standards.',
      ],
    },
    {
      title: 'E-Gov & E-Com',
      icon: ShoppingCartIcon,
      content: [
        'Secure e-commerce transaction management systems.',
        'Government and public sector digital solutions.',
        'Custom applications for e-government initiatives.',
        'Scalable platforms for online marketplaces.',
      ],
    },
    {
      title: 'Hospitality',
      icon: LocalHotelIcon,
      content: [
        'Integrated property management systems (PMS).',
        'Guest service management software solutions.',
        'Custom applications for reservations and bookings.',
        'Scalable platforms for hospitality operations.',
      ],
    },
    {
      title: 'Healthcare',
      icon: MedicalServicesIcon,
      content: [
        'Healthcare data management and analytics solutions.',
        'Custom electronic health record (EHR) systems.',
        'Telemedicine platforms for remote healthcare.',
        'Patient engagement and care coordination tools.',
      ],
    },
  ];

  const [expanded, setExpanded] = useState(null); // No accordion is open by default

  // Handle mouse enter to open the section
  const handleMouseEnter = (index) => {
    setExpanded(index);
  };

  // Handle mouse leave to close the section
  const handleMouseLeave = () => {
    setExpanded(null);
  };

  return (
    <div className="bg-gray-900 py-10">
      <h2 className="text-center text-3xl text-white font-bold mb-6">Industries We Deal With</h2>
      <div className="flex justify-center">
        {/* Left Side Sections */}
        <div className="w-1/2 flex flex-col gap-4 bg-red-200 p-5"> {/* Added gap here */}
          {accordionData.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className={`bg-gray-800 transition-all duration-300 p-4 border border-gray-600 cursor-pointer ${
                expanded === index ? 'h-auto' : 'h-16'
              }`}
              onMouseEnter={() => handleMouseEnter(index)} // Open section on hover
              onMouseLeave={handleMouseLeave} // Close section on mouse leave
            >
              <div className="flex items-center text-white">
                <item.icon className="mr-2 text-yellow-400" />
                <span className="font-bold">{item.title}</span>
                <ExpandMoreIcon
                  className={`ml-auto transition-transform duration-300 ${expanded === index ? 'rotate-180' : ''
                    }`} // Arrow rotation animation
                />
              </div>
              <div className={`mt-2 overflow-hidden ${expanded === index ? 'block' : 'hidden'}`}>
                <ul className="text-gray-300">
                  {item.content.map((line, lineIndex) => (
                    <li key={lineIndex} className="mb-2">
                      <TypingEffect
                        text={line}
                        typingSpeed={50} // Speed of typing each character (in milliseconds)
                        isOpen={expanded === index} // Typing effect triggers only if section is open
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side Sections */}
        <div className="w-1/2 flex flex-col gap-4 bg-red-200 p-5"> {/* Added gap here */}
          {accordionData.slice(2).map((item, index) => (
            <div
              key={index}
              className={`bg-gray-800 transition-all duration-300 p-4 border border-gray-600 cursor-pointer ${
                expanded === index + 2 ? 'h-auto' : 'h-16'
              }`} // Adjusted index for the right side
              onMouseEnter={() => handleMouseEnter(index + 2)} // Open section on hover
              onMouseLeave={handleMouseLeave} // Close section on mouse leave
            >
              <div className="flex items-center text-white">
                <item.icon className="mr-2 text-yellow-400" />
                <span className="font-bold">{item.title}</span>
                <ExpandMoreIcon
                  className={`ml-auto transition-transform duration-300 ${expanded === index + 2 ? 'rotate-180' : ''
                    }`} // Arrow rotation animation
                />
              </div>
              <div className={`mt-2 overflow-hidden ${expanded === index + 2 ? 'block' : 'hidden'}`}>
                <ul className="text-gray-300">
                  {item.content.map((line, lineIndex) => (
                    <li key={lineIndex} className="mb-2">
                      <TypingEffect
                        text={line}
                        typingSpeed={50} // Speed of typing each character (in milliseconds)
                        isOpen={expanded === index + 2} // Typing effect triggers only if section is open
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
