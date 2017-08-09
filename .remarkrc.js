'use strict';

var unified = require('unified');
var english = require('retext-english');

var retextSettings = {
  plugins: [
    [require('retext-sentence-spacing'), {preferred: 1}],
    [require('retext-quotes'), {preferred: 'smart'}],
    require('retext-diacritics'),
    require('retext-redundant-acronyms'),
    require('retext-repeated-words'),
    require('retext-indefinite-article'),
    require('retext-contractions')
  ]
};

exports.settings = {
  bullet: '*',
  emphasis: '*',
  strong: '*',
  fence: '`',
  rule: '-',
  ruleSpaces: false,
  ruleRepetition: 3,
  gfm: true,
  yaml: true,
  footnotes: true,
  listItemIndent: '1',
  commonmark: false,
  pedantic: false,
  entities: false,
  fences: true,
  spacedTable: true
};

exports.plugins = [
  [require('remark-retext'), unified().use(english).use(retextSettings)],
  require('remark-preset-lint-recommended'),
  require('remark-preset-lint-consistent'),
  require('remark-preset-lint-markdown-style-guide'),
  require('remark-lint-code'),
  require('remark-lint-no-empty-sections'),
  require('remark-squeeze-paragraphs'),
  require('remark-inline-links'),
  [require('remark-heading-gap'), 2],
  [require('remark-lint-maximum-line-length'), false],
  [require('remark-lint-list-item-indent'), 'space'],
  [require('remark-lint-no-shortcut-reference-link'), false],
  [require('remark-lint-no-shortcut-reference-image'), false],
  [require('remark-frontmatter'), 'yaml'],
  [require('remark-lint-list-item-spacing'), false],
  [require('remark-lint-maximum-heading-length'), false],
  [require('remark-lint-ordered-list-marker-value'), false],
  [require('remark-validate-links'), false],
  [require('remark-lint-unordered-list-marker-style'), '*'],
  [require('remark-lint-first-heading-level'), false],
  [
    'remark-textr',
    {
      options: {
        locale: 'en-us'
      },
      plugins: [
        'typographic-apostrophes',
        'typographic-quotes',
        'typographic-apostrophes-for-possessive-plurals',
        'typographic-arrows',
        'typographic-copyright',
        'typographic-ellipses',
        'typographic-em-dashes',
        'typographic-en-dashes',
        'typographic-math-symbols',
        'typographic-registered-trademark',
        'typographic-single-spaces',
        'typographic-trademark'
      ]
    }
  ]
];
