import prompts, { Answers, PromptObject } from 'prompts'

const question = async (
  config: PromptObject
): Promise<Answers<string> | undefined> => {
  if (config.type === 'select') return await prompts({ ...config })
  if (config.type === 'text') return await prompts({ ...config })
  if (config.type === 'confirm') return await prompts({ ...config })
}

export default question
