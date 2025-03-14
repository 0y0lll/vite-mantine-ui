import { AppShell, Burger, Button, useMantineColorScheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export const Page = () => {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme()
  const [opened, { toggle }] = useDisclosure()

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>
        <h1>Hello World</h1>

        <Button onClick={() => setColorScheme('light')}>Light</Button>
        <Button onClick={() => setColorScheme('dark')}>Dark</Button>
        <Button onClick={clearColorScheme}>Clear</Button>
      </AppShell.Main>
    </AppShell>
  )
}
