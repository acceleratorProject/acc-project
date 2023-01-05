import { red } from 'kolorist'

const onCancel = (): Error => {
  const msg = `${red('✖')} Operation cancelled`
  throw new Error(msg)
}

export default onCancel
