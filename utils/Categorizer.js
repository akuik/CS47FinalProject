const {Configuration, OpenAI} = require("openai");
// https://platform.openai.com/docs/models/gpt-3
OPENAI_API_KEY = "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"; // Do not share this with others (supposed to bee secret key)

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAI(configuration);

// outputs eg. ('1', 62) -> (relevancy (0 or 1), tokens used)
export async function categorizeText(text, tags) {
  let prompt = promptParser(text, tags);
  try {
    const response = await openai.complete({
      model: "text-ada-001", // cheapest instructGPT model (im broke)
      prompt: prompt,
      max_tokens: 1,
    });
    // https://platform.openai.com/docs/api-reference/completions/create
    return [response.data.choices[0].text, response.data.usage.total_tokens];
  } catch (error) {
    console.log("OPENAI ERROR:", error);
  }
}

// 2,500,000 tokens per $1, do not abuse
// 2500000/80 = 31250 events per $1
// assuming checking 100 events each time: 31250/100 = 312 app loads
function promptParser(text, tags) {
  // 60-80 tokens per prompt
  return `Is the text relevant to any of the tags? Output 1 or 0.
    Text: ${text}
    Tags: ${tags}
    Output: `;
}
// // average of 200 tokens per prompt, too costly
// return (`Return relevant tags for the following keywords.
// Keywords: CS Social Good Board Meeting Social Impact
// Tags: Philosophy, CS, Piano, Food, Fun, Sustainability
// Output: CS, Sustainability `);
