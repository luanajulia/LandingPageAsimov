// src/components/Companies.jsx
import AmazonLogo from '../assets/logos/amazon.svg';
import DribbbleLogo from '../assets/logos/dribbble.svg';
import HubSpotLogo from '../assets/logos/hubspot.svg';
import NotionLogo from '../assets/logos/notion.svg';
import NetflixLogo from '../assets/logos/netflix.svg';
import ZoomLogo from '../assets/logos/zoom.svg';

export default function Companies() {
  const companyLogos = [
    { name: "Amazon", logo: AmazonLogo },
    { name: "Dribbble", logo: DribbbleLogo },
    { name: "HubSpot", logo: HubSpotLogo },
    { name: "Notion", logo: NotionLogo },
    { name: "Netflix", logo: NetflixLogo },
    { name: "Zoom", logo: ZoomLogo },
  ];

  return (
    <section className="py-12 border-y border-gray-100 mb-16">
      <div className="flex flex-wrap justify-between items-center gap-8 md:gap-12 opacity-70">
        {companyLogos.map((company, index) => (
          <img key={index} src={company.logo} alt={`${company.name} logo`} className="h-8 w-auto grayscale hover:grayscale-0 transition" />
        ))}
      </div>
    </section>
  );
}