import degit from 'degit'
import { GLOBALSTATE, REACTSTATE } from './states.js'

const cloneTemplate = async (): Promise<void> => {
  if (REACTSTATE) {
    console.log(REACTSTATE)
    const downloader = degit(
      `acceleratorProject/templates-react/${REACTSTATE?.variant}/acc-${
        REACTSTATE?.styles
      }${REACTSTATE.testing !== 'none' ? '-' + REACTSTATE?.testing : ''}${
        REACTSTATE?.theme ? '-theme' : ''
      }`,
      {
        force: true
      }
    )
    downloader.clone(GLOBALSTATE.projectName).then(() => {
      console.log(`Repositorio descargado en ${GLOBALSTATE.projectName}`)
    })
  }
}

export default cloneTemplate
