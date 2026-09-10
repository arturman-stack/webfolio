const DEFAULT_CSS_VARIABLES = {
  '--primary-100': '#f0f4f9',
  '--primary-200': '#dde5ee',
  '--primary-300': '#cbd6e3',
  '--primary-400': '#b8c6d8',
  '--primary-500': '#a5b7cd',
  '--primary-600': '#8099b8',
  '--primary-700': '#5a7aa2',
  '--primary-800': '#355c8c',
  '--primary-900': '#2a4a70',
  '--primary-1000': '#203754',
  '--primary-1100': '#152538',
  '--primary-1200': '#0b121c',
  '--secondary': '#ffffff',
  '--secondary-hover': '#dcdcdc',
  '--third': '#f5f5f5',
  '--third-hover': '#999999',
  '--turquoise-100': '#eefafa',
  '--turquoise-200': '#ccf2f3',
  '--turquoise-300': '#73d0bf',
  '--turquoise-400': '#56d4d6',
  '--teal-100': '#e7f7f4',
  '--teal-200': '#b9e7df',
  '--teal-300': '#73d0bf',
  '--teal-400': '#15b094',
  '--orange-100': '#fff0eb',
  '--orange-200': '#ffd2c3',
  '--orange-300': '#ffa688',
  '--orange-400': '#ff6a38',
  '--magenta-100': '#fbe7f2',
  '--magenta-200': '#f3bada',
  '--magenta-300': '#e874b5',
  '--magenta-400': '#d81884',
  '--purple-100': '#f3e9f3',
  '--purple-200': '#ddbfdd',
  '--purple-300': '#bc80bc',
  '--purple-400': '#8f2b8f',
  '--violet-100': '#ecedf4',
  '--violet-200': '#c8cadf',
  '--violet-300': '#9195bf',
  '--violet-400': '#474e95',
  '--color-100': '#ffffff',
  '--color-200': '#f5f5f5',
  '--color-300': '#dcdcdc',
  '--color-400': '#bfbfbf',
  '--color-500': '#999999',
  '--color-600': '#747474',
  '--color-700': '#454545',
  '--color-900': '#1a1a1a',
  '--primary-link': '#004d99',
  '--primary-link-hover': '#000040',
  '--primary-link-visited': '#800080',
  '--primary-focus': '#bd13b8',
  '--primary-positive': '#358000',
  '--primary-negative': '#cc0000',
  '--success': '#358000',
  '--warning': '#febb30',
  '--error': '#cc0000',
  '--info': '#1b86c3',
  '--success-light': '#eeffe2',
  '--warning-light': '#ffeecc',
  '--error-light': '#ffe0e0',
  '--info-light': '#e2f2fb',
};

export default function TemplateStyles({ template }) {
  const templateVars = template?.css_variables ?? {};

  const mergedVariables = Object.entries(DEFAULT_CSS_VARIABLES)
    .map(([key, defaultValue]) => `${key}: ${templateVars[key] ?? defaultValue};`)
    .join('\n  ');

  const extraVariables = Object.entries(templateVars)
    .filter(([key]) => !(key in DEFAULT_CSS_VARIABLES))
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n  ');

  const css = `:root {\n  ${mergedVariables}${extraVariables ? '\n  ' + extraVariables : ''}\n}`;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
