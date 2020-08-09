import React from "react"
import { ThemeProvider } from "styled-components"
import Theme from "./src/styles/theme"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>{element}</ThemeProvider>
)
