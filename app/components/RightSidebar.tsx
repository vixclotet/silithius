import React from 'react';

const RightSidebar = ({ recommendations }) => {
    return (
        <div className="p-4 border-l border-gray-300 h-full overflow-y-auto">
            <h3 className="mb-4">Recommendations</h3>
            <div className="space-y-2">
                {recommendations.map((rec, index) => (
                    <div key={index} className="border-b border-gray-200 pb-2">
                        {rec}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RightSidebar;
