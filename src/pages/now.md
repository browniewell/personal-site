---
layout: ../layouts/Page.astro
title: Now
prompt: $ cat now.md
intro: What I'm into at the moment.
updated: 2026-11-16
# The "read this year" book stack comes from src/data/reading.yaml.
bookStack: true
#
# HOW TO EDIT
# Images live in src/assets/ (now/ and favorites/). Drop a new one in, then point
# `image:` at it, e.g. `image: now/new-book.jpg`. Leave `image` off and the item
# shows as a plain text tag instead.
#   label: small tag above the title (Now only), e.g. "reading"
#   note:  muted line under the title, e.g. the author
#   alt:   optional; defaults to "Cover of <title>" (or "<title> logo" for logos)
#   ledge: true on a favorites group stands the covers on a shelf, no captions
#
# The `now` list shows here and on the home page. A "reading" book that's also in
# src/data/reading.yaml (finished) is left out automatically.
now:
  - label: reading
    title: A Parade of Horribles
    note: Matt Dinniman
    image: now/a-parade-of-horribles.jpg
  - label: listening to
    title: BILMURI
    note: American Motor Sports
    image: now/bilmuri-american-motor-sports.jpg
    alt: Cover of the BILMURI album American Motor Sports
  - label: watching
    title: New Girl
    image: now/new-girl.jpg
#
# Favorites: one group per heading. Set `logos: true` for logo-style images.
favorites:
  - group: Books
    ledge: true
    items:
      - title: The House in the Cerulean Sea
        note: TJ Klune
        image: favorites/books/the-house-in-the-cerulean-sea.jpg
      - title: The Way of Kings
        note: Brandon Sanderson
        image: favorites/books/the-way-of-kings.jpg
      - title: Tomorrow, and Tomorrow, and Tomorrow
        note: Gabrielle Zevin
        image: favorites/books/tomorrow-and-tomorrow-and-tomorrow.jpg
      - title: The Long Way to a Small, Angry Planet
        note: Becky Chambers
        image: favorites/books/the-long-way-to-a-small-angry-planet.jpg
      - title: Demon Copperhead
        note: Barbara Kingsolver
        image: favorites/books/demon-copperhead.jpg
  - group: Games
    items:
      - title: Overwatch
        image: favorites/overwatch.jpg
  - group: Authors
    items:
      - title: Becky Chambers
      - title: TJ Klune
      - title: Will Wight
      - title: Brandon Sanderson
  - group: Shows
    items:
      - title: The Office
        image: favorites/the-office.jpg
      - title: Survivor
        image: favorites/survivor.jpg
  - group: Teams
    logos: true
    items:
      - title: Minnesota Lynx
        note: WNBA
        image: favorites/minnesota-lynx.png
      - title: Dallas Wings
        note: WNBA
        image: favorites/dallas-wings.png
      - title: Boston Bruins
        note: NHL
        image: favorites/boston-bruins.png
      - title: Brighton & Hove Albion
        note: Premier League
        image: favorites/brighton-hove-albion.png
---
