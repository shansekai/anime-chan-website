import Typography from 'typography'
import githubTheme from 'typography-theme-github'

const Github = {
  ...githubTheme,
  baseFontSize: '18px',
  headerWeight: 800,
  overrideThemeStyles: ({ rhythm }) => ({
    'h2,h3': {
      marginTop: rhythm(1.5),
    },
    'h1,h2': {
      borderBottom: 'none',
    },
  }),
}

const typography = new Typography(Github)

export default typography
