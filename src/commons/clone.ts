import degit from 'degit'
import { GLOBALSTATE, REACTSTATE } from './states.js'

const cloneTemplate = async (): Promise<void> => {
  if (REACTSTATE) {
    const downloader = degit('acceleratorProject/components', {
      force: true
    })
    downloader.clone(GLOBALSTATE.projectName).then(() => {
      console.log(`Repositorio descargado en ${GLOBALSTATE.projectName}`)
    })
  }
}

export default cloneTemplate
