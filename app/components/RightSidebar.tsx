// components/RightSidebar.tsx
import React from 'react';

const RightSidebar = ({ recommendations }) => {
    return (
        <div className="p-4 border-l border-gray-300">
            <h3 className="mb-4">Recommendations</h3>
            <ul className="space-y-2">
                {recommendations.map((rec, index) => (
                    <li key={index} className="border-b border-gray-200 pb-2">
                        {rec}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RightSidebar;
