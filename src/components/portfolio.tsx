import React from 'react';

const isValidUrl = (url: string): boolean => {
    try {
        const parsedUrl = new URL(url);
        // Allow only specific domains
        const allowedDomains = ['egsihama.com', 'via.egsihama.com'];
        return (
            (parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:') &&
            allowedDomains.includes(parsedUrl.hostname)
        );
    } catch (error) {
        return false; // Invalid URL
    }
};

const Portfolio: React.FC = () => {
    const portfolioItems = [
        {
            id: 1,
            image: '/about-image.jpg',
            text: 'Project 1',
            link: 'https://example.com/project1',
        },
        {
            id: 2,
            image: '/about-image.jpg',
            text: 'Project 2',
            link: 'https://example.com/project2',
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/300',
            text: 'Project 3',
            link: 'https://example.com/project3',
        },
        {
            id: 4,
            image: '/about-image.jpg',
            text: 'Project 4 ',
            link: 'https://example.com/project4',
        },
    ];

    return (
        <section className="portfolio my-20">
            <div className="portfolio-slider">
                {portfolioItems.map((item) => {
                    // Validate the URL before rendering
                    const isValid = isValidUrl(item.link);

                    return (
                        <div className='portfolio-item portfolio-image portfolio-text'>
                        <a
                            key={item.id}
                            href={isValid ? item.link : '#'} // Use '#' if the URL is invalid
                            target="_blank"
                            rel="noopener noreferrer"
                            className="portfolio-item"
                        >
                            <div className="portfolio-image">
                                <img src={item.image} alt={item.text} />
                            </div>
                            <div className="portfolio-text">
                                <h3>{item.text}</h3>
                                <p>evrythin about the project will be here</p>
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