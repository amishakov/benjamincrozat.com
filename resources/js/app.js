import 'highlight.js/styles/github-dark.css'
import hljs from 'highlight.js/lib/core'
import bash from 'highlight.js/lib/languages/bash'
import diff from 'highlight.js/lib/languages/diff'
import html from 'highlight.js/lib/languages/html'
import javascript from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'
import php from 'highlight.js/lib/languages/php'
import sql from 'highlight.js/lib/languages/sql'
import yaml from 'highlight.js/lib/languages/yaml'
import.meta.glob([
    '../img/**',
    '../svg/logo.svg',
])

hljs.registerLanguage('bash', bash)
hljs.registerLanguage('diff', diff)
hljs.registerLanguage('html', html)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('json', json)
hljs.registerLanguage('php', php)
hljs.registerLanguage('sql', sql)
hljs.registerLanguage('yaml', yaml)

window.hljs = hljs
