---
layout: ../layouts/Page.astro
title: Now
prompt: $ cat now.md
intro: What I'm into at the moment. Inspired by nownownow.com.
updated: 2026-11-10
#
# HOW TO EDIT
# Images live in src/assets/ (now/ and favorites/). Drop a new one in, then point
# `image:` at it, e.g. `image: now/new-book.jpg`. Leave `image` off and the item
# shows as a plain text tag instead.
#   label: small tag above the title (Now only), e.g. "reading"
#   note:  muted line under the title, e.g. the author
#   alt:   optional; defaults to "Cover of <title>" (or "<title> logo" for logos)
#
# The `now` list shows here and on the home page.
now:
  - label: reading
    title: As You Wake, Break the Shell
    note: Becky Chambers
    image: now/as-you-wake-break-the-shell.jpg
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
