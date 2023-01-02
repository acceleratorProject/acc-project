import prompts from 'prompts'

// object structure: message - type - name - choices(?) 
const question = async (config) => {
  if (config.type === 'select') return await prompts({ ...config })
  if (config.type === 'text') return await prompts({ ...config })
  if (config.type === 'confirm') return await prompts({ ...config })
}

export default question