---
layout: post
title: Update on Jekyll updates (meta)
tags: geek programming jekyll
categories: geek programming
eye_catch: https://visualhunt.com/photos/m/7/technologe-screens-monitors.jpg
---

Although I haven't posted much recently (sorry, got a couple of ideas I want to write about, but I'm taking ages to do it), I have been making some tweaks to the website. I really like Jekyll for this sort of development, it's extremely flexible in the design and development stages but as it outputs static pages the site itself is lightening fast.

Although I took an available theme, I've made a few modifications and I wanted to document a few of them.

I've linked to the main commit responsible for each feature below, although there may have been more than one commit to actually get it right! :wink:

1. I [added the category pages](https://github.com/twinklebob/twinklebob.github.io/commit/b2b37321ecad4a0c48aa32be23b092c10764b201), linked from the site header, with a little help from [Christian Specht](https://christianspecht.de/2014/10/25/separate-pages-per-tag-category-with-jekyll-without-plugins/).
1. I modified the link to [point to the about page](https://github.com/twinklebob/twinklebob.github.io/commit/fceedbfe5a26ee2edba99f83badadb4930e13190) when on the homepage. Why waste a perfectly good link?
1. I also added a Twitter widget, to add some live content to the site, when I haven't updated for a while. I [made that dynamic](https://github.com/twinklebob/twinklebob.github.io/commit/39505c6c30135a73fa7054240d4b790d73493de9), so if I change my Twitter handle I only have to change it once for the site.
1. I then [re-ordered the social icons](https://github.com/twinklebob/twinklebob.github.io/commit/bcd993e8dbbc79905ea893680227acfa786c0fcc), I made the alphabetical in the _config.yml_ file and just sorted them into a more logical order in the _icons.html_ include file and adding title attributes. I also added an icon for Goodreads, although Font Awesome doesn't have an official icon.
1. I [added Twitter card meta data](https://github.com/twinklebob/twinklebob.github.io/commit/08d1066f31856cfc5bd36917e8b96f88ffdd8c50) to the default template to match the OpenGraph data that was already there.
1. Last but not least I [added Medium-style "time to read"](https://github.com/twinklebob/twinklebob.github.io/commit/b6f144c8ccab2f280e088b4eca99b40e489ea8e6) to the header of each post with a little help from [Carlos Becker](https://carlosbecker.com/posts/jekyll-reading-time-without-plugins/) which I think looks great.

Photo via [VisualHunt.com](https://visualhunt.com/re/bd3be1)