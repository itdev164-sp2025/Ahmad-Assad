import React from 'react';
import mainHeadingImage from './images/react.png';
import { Search } from 'styled-icons/feather';

const images = {
  mainHeadingImage,
};

const icons = {
  Search,
};

export const space = [0, 4, 8, 16, 32, 64]

export const colors = {
  gray: ['#f8f9fa', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#6c757d', '#495057', '#343a40', '#212529'],
}

export const variants = {
  iconButton: {
    primary: {
      color: colors.gray[8],
      backgroundColor: colors.gray[2],
    },
    contrast: {
      color: colors.gray[0],
      backgroundColor: colors.gray[7],
    },
  },
  header: {
    primary: {
      color: colors.gray[0],
      backgroundColor: colors.gray[8],
    },
  },
}

export const theme = {
  space,
  colors,
  variants,
}

export default {
  ...theme,
  images,
  icons,
};