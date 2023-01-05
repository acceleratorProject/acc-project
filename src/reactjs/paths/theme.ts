import question from '../../commons/question.js'

import { REACTSTATE } from '../../commons/states.js'

import initialCode from './code.js'
import innitialTesting from './testing.js'

const initialTheme = async () => {
  if (REACTSTATE.styles !== 'css' && REACTSTATE.styles !== 'tailwind') {
    const tehemeResponse = await question({
      type: 'confirm',
      name: 'theme',
      message: 'Custom theme:'
    })
    if (tehemeResponse?.theme) {
      REACTSTATE.theme = true
      await initialCode()
    } else {
      await innitialTesting()
    }
  } else {
    await innitialTesting()
  }
}

export default initialTheme
