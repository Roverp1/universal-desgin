#import "content.typ": content

#set page(margin: auto, paper: "a4", numbering: "1")
#set heading(numbering: "1.1")


#let lang = "pl"

#set text(size: 12pt, lang: lang)

#let t = content.at(lang)

// Title page
#align(center)[
  #text(weight: "bold", size: 1.5em)[#t.title]

  #v(2em)

  #text(weight: "bold", size: 1.2em)[#t.author]

  #v(1em)

  #t.date

  #v(1em)

  #t.course
]

#pagebreak()

#outline()

#pagebreak()

// Content sections
#for section in t.sections.values() [
  #section
  #v(2em)
]

