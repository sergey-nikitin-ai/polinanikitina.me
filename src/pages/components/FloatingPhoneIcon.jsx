import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const FloatingPhoneIcon = () => {
  const { siteConfig } = useDocusaurusContext();
  const phoneNumber = siteConfig.customFields.phoneNumber;

  return (
    <a
      href={`tel:${phoneNumber}`}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#25d366',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
        zIndex: 1000,
        textDecoration: 'none',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="white"
        viewBox="0 0 24 24"
      >
        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.29 21 3 13.71 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.26 2.67.76 3.88a1 1 0 01-.21 1.11l-2.43 2.43z"/>
      </svg>
    </a>
  );
};

export default FloatingPhoneIcon;
