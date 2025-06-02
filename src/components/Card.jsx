import React from 'react';

const Card = ({ title, content, image }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            {image && <img className="w-full h-48 object-cover" src={image} alt={title} />}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{content}</p>
            </div>
        </div>
    );
};

export default Card;