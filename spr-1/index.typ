#import "@preview/cheq:0.3.0": checklist

#import "content.typ": content

#set page(margin: auto, paper: "a4")

#let lang = "pl"

#set text(lang: lang, size: 12pt)

#let t = content.at(lang)

#align(center)[
  #text(weight: "bold", size: 1.5em)[
    #t.title
  ]

  #v(1em)

  #text(weight: "bold", size: 1.2em)[
    #t.project
  ]

  #v(3em)

  *#t.author*: Yaroslav Zubakha \
  *#t.date*: #datetime.today().display() \
  *#t.course*: #t.course_name
]

#pagebreak()

= #t.wcag_title

== #t.perceivable

#show: checklist

#for (i, item) in t.perceivable_items.enumerate() [
  - [#if t.perceivable_checked.at(i) [x] else [ ]] #item
]

== #t.operable

#for (i, item) in t.operable_items.enumerate() [
  - [#if t.operable_checked.at(i) [x] else [ ]] #item
]

== #t.understandable
#for (i, item) in t.understandable_items.enumerate() [
  - [#if t.understandable_checked.at(i) [x] else [ ]] #item
]

== #t.robust
#for (i, item) in t.robust_items.enumerate() [
  - [#if t.robust_checked.at(i) [x] else [ ]] #item
]

#v(2em)

= #t.issues_title

== #t.issue1_title
#t.issue1_problem
#t.issue1_impact
#t.issue1_solution

== #t.issue2_title
#t.issue2_problem
#t.issue2_impact

== #t.issue3_title
#t.issue3_problem
#t.issue3_impact

#v(2em)

= #t.strengths_title

#for item in t.strengths_items [
  - #item
]

#v(2em)

= #t.conclusions_title

#t.conclusions_text
