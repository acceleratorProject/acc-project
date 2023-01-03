import question from '../../commons/question.js'

import { REACTSTATE } from '../../commons/states.js'
import initialTesting from './testing.js'

const initialCode = async () => {
  const codeResponse = await question({
    type: 'select',
    name: 'code',
    message: 'Select Code:',
    choices: [
      { title: 'Custom Hooks', value: 'customHooks' },
      { title: 'Components UI', value: 'componentsUi' },
      { title: 'all', value: 'all' },
      { title: 'none', value: 'none' }
    ]
  })
  if (codeResponse?.code) {
    REACTSTATE.code = codeResponse.code
    await initialTesting()
  }
}

export default initialCode
