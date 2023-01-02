import question from './src/commons/question.js'
import { REACTSTATE, GLOBALSTATE } from './src/commons/states.js'

import initialExpress from './src/express/index.js';
import initialReact from './src/reactjs/index.js'
import initialVanilla from './src/vanilla/index.js';

(async function () {
  try {
    const createProjectResponse = await question({
      type: 'text',
      name: 'projectName',
      message: 'Project name:',
      initial: 'my-project'
    });
    GLOBALSTATE.projectName = createProjectResponse.projectName
    if (createProjectResponse.projectName) {
      const frameworkResponse = await question({
        type: 'select',
        name: 'framework',
        message: 'Select framework:',
        choices: [
          { title: 'React', value: 'react' },
          { title: 'Vanilla', value: 'vanilla' },
          { title: 'Express', value: 'express' },
        ]
      })

      if (frameworkResponse) {
        const variantResponse = await question({
          type: 'select',
          name: 'variant',
          message: 'Select variant:',
          choices: [
            { title: 'Typescript', value: 'ts' },
            { title: 'Javascript', value: 'js' },
          ]
        })

        // create state -> variant language JS or TS
        if (frameworkResponse.framework === 'react') {
          REACTSTATE.variant = variantResponse.variant
          initialReact(variantResponse.variant)
        }
        frameworkResponse.framework === 'vanilla' && initialVanilla(variantResponse.variant)
        frameworkResponse.framework === 'express' && initialExpress(variantResponse.variant)

      }
    }
  } catch (error) {
    console.error(error)
  }


})();