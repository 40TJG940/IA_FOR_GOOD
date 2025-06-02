import React from 'react';

const Button = ({ label, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 ${className}`}
        >
            {label}
        </button>
    );
};

export default Button;