import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle(
  ({ theme }) => css`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
    ul {
      margin: 0px;
      list-style: none;
    }
    body,
    html {
      height: 100%;
      background: ${theme.colors.bg};
    }
  `,
)

const schema = {
  property: '#ff7d87',
  numeric: '#f08d49',
  string: '#7ec699',
  punctuation: '#abb2bf',
  inline: {
    back: '#1b1f230d',
    color: '#476582',
  },
}

export const prismCSS = css`
  code {
    font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
    line-height: 1.4rem;
    font-size: 0.85rem;
  }
  code[class*='language-'],
  pre[class*='language-'] {
    color: #f5f5f5;
    background: none;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
  }
  /* Code blocks */
  pre[class*='language-'] {
    background: #202329;
    padding: 1em;
    margin: 0.5em 0 1em;
    overflow: auto;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 5px 20px;
  }
  /* Inline code */
  p > code[class*='language-'],
  li > code[class*='language-'] {
    background: ${schema.inline.back};
    color: ${schema.inline.color};
    font-size: 0.85rem;
    padding: 0.25rem 0.5rem;
    border-radius: 3px;
    white-space: normal;
  }
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: slategray;
  }
  .namespace {
    opacity: 0.7;
  }
  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: ${schema.property};
  }
  .token.boolean,
  .token.number {
    color: ${schema.numeric};
  }
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: ${schema.string};
  }
  .token.operator,
  .token.punctuation,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: ${schema.punctuation};
  }
  .token.atrule,
  .token.attr-value,
  .token.function {
    color: #e6db74;
  }
  .token.keyword {
    color: #66d9ef;
  }
  .token.regex,
  .token.important {
    color: #fd971f;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
`

export default GlobalStyles
