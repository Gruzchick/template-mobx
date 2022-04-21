module.exports = {
  presets: [
    '@babel/preset-typescript',
    '@babel/preset-react',
    [
      '@emotion/babel-preset-css-prop',
      {
        labelFormat: '__[dirname]__-[local]',
        sourceMap: true,
      },
    ],
  ],
  plugins: [
    'react-hot-loader/babel',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
    [
      '@emotion',
      {
        autoLabel: 'dev-only',
        importMap: {
          '@mui/system': {
            styled: {
              canonicalImport: ['@emotion/styled', 'default'],
              styledBaseImport: ['@mui/system', 'styled'],
            },
          },
          '@mui/material/styles': {
            styled: {
              canonicalImport: ['@emotion/styled', 'default'],
              styledBaseImport: ['@mui/material/styles', 'styled'],
            },
          },
        },
      },
    ],
  ],
};
