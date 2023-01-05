import cloneTemplate from '../../commons/clone.js'
import question from '../../commons/question.js'

import { REACTSTATE } from '../../commons/states.js'

const initialTesting = async () => {
  const testingResponse = await question({
    type: 'select',
    name: 'testing',
    message: 'Select Test:',
    choices: [
      { title: 'Vitest', value: 'vitest' },
      { title: 'Cypress', value: 'cypress' },
      { title: 'Vitest-Cypress', value: 'vitest-cypress' },
      { title: 'none', value: 'none' }
    ]
  })
  if (testingResponse?.testing) {
    REACTSTATE.testing = testingResponse.testing
    await cloneTemplate()
  }
}

export default initialTesting
