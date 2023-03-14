import {Configuration, OpenAIApi} from "openai";
import "react-native-url-polyfill/auto";
// https://platform.openai.com/docs/models/gpt-3
OPENAI_API_KEY = "ADD API KEY HERE";

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// outputs eg. ('1', 62) -> (relevancy (0 or 1), tokens used)
async function CategorizeText(text, tags) {
  let prompt = promptParser(text, tags);
  try {
    const response = await openai.createCompletion({
      model: "text-ada-001", // cheapest instructGPT model (im broke)
      prompt: prompt,
      // max_tokens: 1,
    });
    // https://platform.openai.com/docs/api-reference/completions/create
    return [response.data.choices[0].text, response.data.usage.total_tokens];
  } catch (error) {
    console.log("OPENAI ERROR:", error);
  }
}
export {CategorizeText};

// 2,500,000 tokens per $1
// 2500000/80 = 31250 events per $1
// assuming checking 100 events each time: 31250/100 = 312 app loads
function promptParser(text, tags) {
  // 60-80 tokens per prompt
  return `Output 1 if any tags are strongly relevant to the text, else 0.
  Text: Cybersecurity Club Meeting
  Tags: CS, Piano, Food
  Output: 1

  Text: Cybersecurity Club Meeting:
  Tags: Piano, Food, Sustainability
  Output: 0

  Text: Lang Lang Concert Recital
  Tags: Piano, Food, Sustainability
  Output: 1

  Text: ${text}
  Tags: ${tags}
  Output:`;
}
