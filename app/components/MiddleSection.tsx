import React, { useState } from 'react';

const BusinessFormWithRecommendations = () => {
    const [businessName, setBusinessName] = useState('');
    const [description, setDescription] = useState('');
    const [problem, setProblem] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [recommendations, setRecommendations] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = { businessName, description, problem, additionalInfo };
        console.log("Form Data Submitted:", formData);

        try {
            const response = await fetch('../api/assistants/threads/[threadId]/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log("API Response Data:", data);

            if (data.recommendations) {
                setRecommendations(data.recommendations.split('\n'));
                console.log("Recommendations State Updated:", data.recommendations.split('\n'));
            } else {
                console.error("No recommendations in response");
            }
        } catch (error) {
            console.error("Error fetching recommendations:", error);
        }
    };

    return (
        <div className="p-4 flex">
            <div className="w-1/2">
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
            <div className="w-1/2 p-4 border-l border-gray-300 h-full overflow-y-auto">
                <h3 className="mb-4">Recommendations</h3>
                <div className="space-y-2">
                    {recommendations.map((rec, index) => (
                        <div key={index} className="border-b border-gray-200 pb-2">
                            {rec}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BusinessFormWithRecommendations;
