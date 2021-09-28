import { useMemo } from "react"

import { adaptV4Theme } from '@mui/material/styles';

import createTheme from "./create-theme"

const useTheme = () =>
  useMemo(() => createTheme(), [])

export default useTheme
