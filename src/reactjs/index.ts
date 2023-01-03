import question from '../commons/question.js'

import { REACTSTATE } from '../commons/states.js'

import initialTheme from './paths/theme.js'

const initialReact = async () => {
  const stylesResponse = await question({
    type: 'select',
    name: 'styles',
    message: 'Select Styles:',
    choices: [
      { title: 'CSS', value: 'css' },
      { title: 'Tailwind', value: 'tailwind' },
      { title: 'ChakraUI', value: 'chakra' },
      { title: 'MUI', value: 'mui' },
      { title: 'Styled-Components', value: 'styledComponents' },
      { title: 'Emotion', value: 'emotion' }
    ]
  })
  if (stylesResponse?.styles) {
    REACTSTATE.styles = stylesResponse.styles
    await initialTheme()
  }
}

export default initialReact
