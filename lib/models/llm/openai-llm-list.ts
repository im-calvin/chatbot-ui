import { LLM } from "@/types"

const OPENAI_PLATORM_LINK = "https://platform.openai.com/docs/overview"

// OpenAI Models (UPDATED 4/9/24) -----------------------------

// GPT-4 Turbo (UPDATED 4/9/24)
const GPT4Turbo: LLM = {
  modelId: "gpt-4-turbo",
  modelName: "GPT-4 Turbo",
  provider: "openai",
  hostedId: "gpt-4-turbo",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: false // TODO change to true when "expected an object, but got a string instead" bug fixed
}

// GPT-4 Turbo Preview (UPDATED 1/25/24)
const GPT4TurboPreview: LLM = {
  modelId: "gpt-4-turbo-preview",
  modelName: "GPT-4 Turbo Preview",
  provider: "openai",
  hostedId: "gpt-4-turbo-preview",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: false
}

// GPT-4 Vision (UPDATED 12/18/23)
const GPT4Vision: LLM = {
  modelId: "gpt-4-vision-preview",
  modelName: "GPT-4 Vision",
  provider: "openai",
  hostedId: "gpt-4-vision-preview",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true
}

// GPT-4 (UPDATED 1/29/24)
const GPT4: LLM = {
  modelId: "gpt-4",
  modelName: "GPT-4",
  provider: "openai",
  hostedId: "gpt-4",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: false
}

// GPT-3.5 Turbo (UPDATED 1/25/24)
const GPT3_5Turbo: LLM = {
  modelId: "gpt-3.5-turbo",
  modelName: "GPT-3.5 Turbo",
  provider: "openai",
  hostedId: "gpt-3.5-turbo",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: false
}

export const OPENAI_LLM_LIST: LLM[] = [
  GPT4Turbo,
  GPT4TurboPreview,
  GPT4Vision,
  GPT4,
  GPT3_5Turbo
]
