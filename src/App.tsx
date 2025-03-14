import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { emotionTransform, MantineEmotionProvider } from '@mantine/emotion'
import { Page } from './page'
import { theme } from './theme'

export default function App() {
  return (
    <>
      <ColorSchemeScript defaultColorScheme="auto" />
      <MantineProvider theme={theme} stylesTransform={emotionTransform} defaultColorScheme="auto">
        <MantineEmotionProvider>
          <Page />
        </MantineEmotionProvider>
      </MantineProvider>
    </>
  )
}
