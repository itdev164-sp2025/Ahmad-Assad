import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Box, Flex } from 'rebass'
import { lightTheme, darkTheme } from '../theme'
import TaskList from '../components/TaskList'
import Notes from '../components/Notes'
import HabitTracker from '../components/HabitTracker'
import ThemeToggle from '../components/ThemeToggle'

const IndexPage = () => {
  const [theme, setTheme] = useState('light')
  const currentTheme = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={currentTheme}>
      <Box
        bg={currentTheme.colors.background}
        color={currentTheme.colors.text}
        minHeight="100vh"
        p={3}
      >
        <Flex flexDirection="column" alignItems="center">
          <h1>Productivity Dashboard</h1>
          <ThemeToggle toggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
          <TaskList />
          <Notes />
          <HabitTracker />
        </Flex>
      </Box>
    </ThemeProvider>
  )
}

export default IndexPage