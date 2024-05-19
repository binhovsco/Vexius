const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        vexius: {
          primary: '#f97316',
          secondary: '#0ea5e9',
          accent: '#22d3ee',
          neutral: '#ff00ff',
          'base-100': '#111827',
          info: '#0000ff',
          success: '#00ff00',
          warning: '#facc15',
          error: '#ff0000',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
