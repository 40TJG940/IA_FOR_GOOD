import React from 'react';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">About Our Ecological Campaign</h1>
            <p className="mb-4">
                Our campaign is dedicated to raising awareness about ecological issues and promoting sustainable practices. We believe that every individual can make a difference in protecting our planet.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Our Objectives</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Educate the community about environmental challenges.</li>
                <li>Encourage sustainable living practices.</li>
                <li>Promote local initiatives focused on conservation.</li>
                <li>Engage with stakeholders to drive policy changes.</li>
            </ul>
            <p>
                Join us in our mission to create a healthier planet for future generations. Together, we can make a significant impact!
            </p>
        </div>
    );
};

export default About;