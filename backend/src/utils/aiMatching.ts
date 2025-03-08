import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

export async function matchUserToJob(userProfile: string, jobDescription: string): Promise<number> {
  const prompt = `Rate the match between the user profile and job description from 0 to 100:\n\nUser Profile: ${userProfile}\n\nJob Description: ${jobDescription}`;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    max_tokens: 10,
  });
  const matchScore = parseInt(response.data.choices[0].text.trim(), 10);
  return isNaN(matchScore) ? 0 : matchScore;
}