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
      
    </div>
  );
}
