interface ReactState {
  variant: 'js' | 'ts'
  styles: 'css' | 'styledComponents' | 'tailwind' | 'emotion' | 'mui' | 'chakra'
  theme: boolean
  code: 'customHooks' | 'componentsUi' | 'all' | 'none'
  testing: 'vitest' | 'cypress' | 'vitest-cypress' | 'none'
}

interface GlobalState {
  projectName: string
}

export const REACTSTATE: ReactState = {
  variant: 'js',
  styles: 'css',
  theme: false,
  code: 'none',
  testing: 'none'
}
export const VanillaState = {}

export const ExpressState = {}

export const GLOBALSTATE: GlobalState = {
  projectName: ''
}
