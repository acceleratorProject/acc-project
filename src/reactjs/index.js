import question from '../commons/question.js'

import { REACTSTATE } from '../commons/states.js'

import initialTheme from "./paths/theme.js"

const initialReact = async (variant) => {
  const stylesResponse = await question({
    type: 'select',
    name: 'styles',
    message: 'Select Styles:',
    choices: [
      { title: 'CSS', value: 'css' },
      { title: 'Tailwind', value: 'tailwind' },
      { title: 'ChakraUI', value: 'chakraUi' },
      { title: 'MUI', value: 'mui' },
      { title: 'Styled-Components', value: 'styledComponents' },
      { title: 'Emotion', value: 'emotion' },
    ]
  })
  if (stylesResponse.styles) {
    REACTSTATE.styles = stylesResponse.styles
    initialTheme()
  }
}


export default initialReact