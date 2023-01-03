interface ReactState {
  variant: string
  styles: string
  theme: boolean
  code: string
  testing: string
}

interface GlobalState {
  projectName: string
}

export const GLOBALSTATE: GlobalState = {
  projectName: ''
}

export const VanillaState = {}

export const ExpressState = {}

export const REACTSTATE: ReactState = {
  variant: '',
  styles: '',
  theme: false,
  code: '',
  testing: ''
}
