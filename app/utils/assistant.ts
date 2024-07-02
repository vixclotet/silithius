// New (i.e., OpenAI NodeJS SDK v4)
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const assistant = {
    async generateRecommendations(prompt: string) {
        const response = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 150,
        });
        return response.choices[0].message.content;
    }
};
