// components/MiddleSection.tsx
import React, { useState } from 'react';

const MiddleSection = ({ onSubmit }) => {
    const [businessName, setBusinessName] = useState('');
    const [description, setDescription] = useState('');
    const [problem, setProblem] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ businessName, description, problem, additionalInfo });
    };

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-2">What is the name of your business?</label>
                    <input
                        type="text"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <label className="block mb-2">Provide a one-sentence description or one-liner of your business:</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <label className="block mb-2">What problem is your business solving?</label>
                    <input
                        type="text"
                        value={problem}
                        onChange={(e) => setProblem(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <label className="block mb-2">Who is your business selling its products to?</label>
                    <input
                        type="text"
                        value={additionalInfo}
                        onChange={(e) => setAdditionalInfo(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default MiddleSection;
