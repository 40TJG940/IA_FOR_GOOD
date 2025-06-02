import React from 'react';

const Campaign = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Ecological Awareness Campaign</h1>
            <p className="mb-4">
                Join us in our mission to promote ecological awareness and sustainability. Our campaign focuses on educating the community about the importance of protecting our environment and taking action to reduce our carbon footprint.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Our Goals</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Raise awareness about climate change and its impacts.</li>
                <li>Encourage sustainable practices in daily life.</li>
                <li>Promote local conservation efforts and initiatives.</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-2">Get Involved</h2>
            <p>
                We invite you to participate in our upcoming events and workshops. Together, we can make a difference!
            </p>
        </div>
    );
};

export default Campaign;