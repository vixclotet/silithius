import { useState, useRef } from 'react';

const ChatComponent = ({ messages, handleSubmit, inputDisabled, styles }) => {
    const [businessName, setBusinessName] = useState('');
    const [description, setDescription] = useState('');
    const [problem, setProblem] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const messagesEndRef = useRef(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const answer = `Your business "${businessName}" is described as "${description}". It solves the problem of "${problem}" and targets the following audience: "${additionalInfo}".`;
        handleSubmit(answer);
        // Clear the form inputs if needed
        setBusinessName('');
        setDescription('');
        setProblem('');
        setAdditionalInfo('');
    };

    return (
        <div className={styles.chatContainer}>
            <div className={styles.messages}>
                {messages.map((msg, index) => (
                    <Message key={index} role={msg.role} text={msg.text} />
                ))}
                <div ref={messagesEndRef} />
            </div>
            <form
                onSubmit={handleFormSubmit}
                className={`${styles.inputForm} ${styles.clearfix} flex flex-col space-y-4`}
            >
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
                <button
                    type="submit"
                    className={styles.button}
                    disabled={inputDisabled}
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default ChatComponent;
