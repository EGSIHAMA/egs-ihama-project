import React from "react";
import Image from "next/image";

const isValidUrl = (url: string): boolean => {
  try {
    const parsedUrl = new URL(url);
    const allowedDomains = ["egsihama.com", "via.placeholder.com"];
    return (
      (parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:") &&
      allowedDomains.includes(parsedUrl.hostname)
    );
  } catch {
    return false;
  }
};

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      id: 1,
      image: "/about-image.jpg", // Local image
      text: "Project 1",
      link: "https://example.com/project1",
    },
    {
      id: 2,
      image: "/about-image.jpg", // Local image
      text: "Project 2",
      link: "https://example.com/project2",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300", // External image
      text: "Project 3",
      link: "https://example.com/project3",
    },
    {
      id: 4,
      image: "/about-image.jpg", // Local image
      text: "Project 4",
      link: "https://example.com/project4",
    },
  ];

  return (
    <section className="portfolio my-20">
      <div className="portfolio-slider">
        {portfolioItems.map((item) => {
          const isValid = isValidUrl(item.image);

          return (
            <div key={item.id} className="portfolio-item portfolio-image portfolio-text">
              <a
                href={isValid ? item.link : "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-item"
              >
                <div className="portfolio-image">
                  <Image
                    src={item.image}
                    alt={item.text}
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
                <div className="portfolio-text">
                  <h3>{item.text}</h3>
                  <p>Everything about the project will be here</p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;