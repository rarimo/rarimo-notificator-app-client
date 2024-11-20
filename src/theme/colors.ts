import { alpha } from '@mui/material'
import { PaletteOptions } from '@mui/material/styles'

export const lightPalette: PaletteOptions = {
  mode: 'light',
  common: {
    black: '#1A1A1A',
    white: '#FFFFFF',
  },
  primary: {
    darker: '#0E5E45', // Darker green
    dark: '#117A61', // Dark green
    main: '#146854', // Primary green
    light: '#1B8A6C', // Light green
    lighter: '#66B2A3', // Lighter green
    contrastText: '#FFFFFF',
  },
  secondary: {
    darker: '#004D40', // Dark teal
    dark: '#00695C', // Teal
    main: '#00897B', // Teal main
    light: '#4DB6AC', // Light teal
    lighter: '#B2DFDB', // Lighter teal
    contrastText: '#FFFFFF',
  },
  success: {
    darker: '#0B3D2E', // Dark green
    dark: '#146854', // Primary green
    main: '#2E8B57', // Sea Green
    light: '#66CDAA', // Medium Aquamarine
    lighter: '#A8E6CF', // Pale Aquamarine
    contrastText: '#FFFFFF',
  },
  error: {
    darker: '#B71C1C', // Dark red
    dark: '#D32F2F', // Red
    main: '#F44336', // Red main
    light: '#FFCDD2', // Light red
    lighter: '#FFEBEE', // Lighter red
    contrastText: '#FFFFFF',
  },
  warning: {
    darker: '#FF8F00', // Dark orange
    dark: '#FFA000', // Orange
    main: '#FFB300', // Amber
    light: '#FFD54F', // Light amber
    lighter: '#FFF8E1', // Lighter amber
    contrastText: '#000000',
  },
  text: {
    primary: '#0A0A0A', // Dark text
    secondary: alpha('#000000', 0.6),
    placeholder: alpha('#000000', 0.38),
    disabled: alpha('#000000', 0.26),
  },
  action: {
    active: alpha('#000000', 0.12),
    hover: alpha('#000000', 0.08),
    focus: alpha('#000000', 0.24),
    selected: alpha('#000000', 0.16),
    disabled: alpha('#000000', 0.08),
  },
  background: {
    default: '#F0FFF4', // Soft light green
    light: '#FFFFFF',
    paper: '#FFFFFF',
  },
  divider: alpha('#000000', 0.12),
  additional: {
    layerBorder: '#E0E0E0',
    pureBlack: '#000000',
    gradient: 'linear-gradient(90deg, #66B2A3 0%, #146854 100%)',
  },
}

export const darkPalette: PaletteOptions = {
  mode: 'dark',
  common: {
    black: '#121212',
    white: '#EDEDED',
  },
  primary: {
    darker: '#0E5E45', // Darker green
    dark: '#117A61', // Dark green
    main: '#146854', // Primary green
    light: '#1B8A6C', // Light green
    lighter: '#66B2A3', // Lighter green
    contrastText: '#FFFFFF',
  },
  secondary: {
    darker: '#004D40', // Dark teal
    dark: '#00695C', // Teal
    main: '#00897B', // Teal main
    light: '#4DB6AC', // Light teal
    lighter: '#B2DFDB', // Lighter teal
    contrastText: '#FFFFFF',
  },
  success: {
    darker: '#0B3D2E', // Dark green
    dark: '#146854', // Primary green
    main: '#2E8B57', // Sea Green
    light: '#66CDAA', // Medium Aquamarine
    lighter: '#A8E6CF', // Pale Aquamarine
    contrastText: '#FFFFFF',
  },
  error: {
    darker: '#B71C1C', // Dark red
    dark: '#D32F2F', // Red
    main: '#F44336', // Red main
    light: '#FFCDD2', // Light red
    lighter: '#FFEBEE', // Lighter red
    contrastText: '#FFFFFF',
  },
  warning: {
    darker: '#FF8F00', // Dark orange
    dark: '#FFA000', // Orange
    main: '#FFB300', // Amber
    light: '#FFD54F', // Light amber
    lighter: '#FFF8E1', // Lighter amber
    contrastText: '#000000',
  },
  text: {
    primary: '#EDEDED', // Bright white text for dark theme
    secondary: alpha('#FFFFFF', 0.7),
    placeholder: alpha('#FFFFFF', 0.5),
    disabled: alpha('#FFFFFF', 0.3),
  },
  action: {
    active: alpha('#FFFFFF', 0.15),
    hover: alpha('#FFFFFF', 0.1),
    focus: alpha('#FFFFFF', 0.25),
    selected: alpha('#FFFFFF', 0.2),
    disabled: alpha('#FFFFFF', 0.1),
  },
  background: {
    default: '#0F1E14', // Very dark green
    light: '#1E293B',
    paper: '#1E293B',
  },
  divider: alpha('#FFFFFF', 0.1),
  additional: {
    layerBorder: alpha('#FFFFFF', 0.2),
    pureBlack: '#000000',
    gradient: 'linear-gradient(90deg, #146854 0%, #66B2A3 100%)',
  },
}
