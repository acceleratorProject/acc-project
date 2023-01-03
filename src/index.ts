import question from './commons/question.js'
import { GLOBALSTATE, REACTSTATE } from './commons/states.js'

import initialExpress from './express/index.js'
import initialReact from './reactjs/index.js'
import initialVanilla from './vanilla/index.js'
;(async function () {
  try {
    const createProjectResponse = await question({
      type: 'text',
      name: 'projectName',
      message: 'Project name:',
      initial: 'my-project'
    })
    GLOBALSTATE.projectName = createProjectResponse?.projectName
    if (createProjectResponse?.projectName) {
      const frameworkResponse = await question({
        type: 'select',
        name: 'framework',
        message: 'Select framework:',
        choices: [
          { title: 'React', value: 'react' },
          { title: 'Vanilla', value: 'vanilla' },
          { title: 'Express', value: 'express' }
        ]
      })

      if (frameworkResponse) {
        const variantResponse = await question({
          type: 'select',
          name: 'variant',
          message: 'Select variant:',
          choices: [
            { title: 'Typescript', value: 'ts' },
            { title: 'Javascript', value: 'js' }
          ]
        })

        // create state -> variant language JS or TS
        if (frameworkResponse.framework === 'react') {
          REACTSTATE.variant = variantResponse?.variant
          await initialReact()
        }
        frameworkResponse.framework === 'vanilla' &&
          initialVanilla(variantResponse?.variant)
        frameworkResponse.framework === 'express' && initialExpress()
      }
    }
  } catch (error) {
    console.error(error)
  }
})().catch((e) => console.error(e))
