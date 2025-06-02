import React from 'react';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-green-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-green-600">404 - Page Not Found</h1>
                <p className="mt-4 text-lg text-gray-700">Sorry, the page you are looking for does not exist.</p>
                <a href="/" className="mt-6 inline-block px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
                    Go to Home
                </a>
            </div>
        </div>
    );
};

export default NotFound;