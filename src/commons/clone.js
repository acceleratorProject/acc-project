
import { REACTSTATE, GLOBALSTATE } from './states.js'
import degit from 'degit';

const cloneTemplate = async () => {
  if (REACTSTATE) {
    const downloader = degit('acceleratorProject/components', {
      force: true
    });
    downloader.clone(GLOBALSTATE.projectName).then(() => {
      console.log(`Repositorio descargado en ${GLOBALSTATE.projectName}`);
    });
  }
}


export default cloneTemplate