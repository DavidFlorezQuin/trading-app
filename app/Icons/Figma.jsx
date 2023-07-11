import * as React from "react"
const SvgComponent = (props) => (
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"

{...props}
><g fill="none"



><rect width="256" height="256" fill="#242938" rx="60"/><g clip-path="url(#skillIconsFigmaDark0)"><path fill="#0ACF83" d="M94.347 228c18.4 0 33.333-14.933 33.333-33.333v-33.334H94.347c-18.4 0-33.334 14.934-33.334 33.334c0 18.4 14.934 33.333 33.334 33.333Z"/><path fill="#A259FF" d="M61.013 128c0-18.4 14.934-33.333 33.334-33.333h33.333v66.666H94.347c-18.4 0-33.334-14.933-33.334-33.333Z"/><path fill="#F24E1E" d="M61.013 61.333C61.013 42.933 75.947 28 94.347 28h33.333v66.667H94.347c-18.4 0-33.334-14.934-33.334-33.334Z"/><path fill="#FF7262" d="M127.68 28h33.333c18.4 0 33.334 14.933 33.334 33.333s-14.934 33.334-33.334 33.334H127.68V28Z"/><path fill="#1ABCFE" d="M194.347 128c0 18.4-14.934 33.333-33.334 33.333c-18.4 0-33.333-14.933-33.333-33.333s14.933-33.333 33.333-33.333S194.347 109.6 194.347 128Z"/></g><defs><clipPath id="skillIconsFigmaDark0"><path fill="#fff" d="M61 28h133.36v200H61z"/></clipPath></defs></g></svg>
)
export { SvgComponent as Figma }
