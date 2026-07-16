[My Atom feed](https://simonwillison.net/atom/everything/ "My Atom feed")

# Simon Willison’s Weblog

On [open-source 303](https://simonwillison.net/tags/open-source/) [zig 10](https://simonwillison.net/tags/zig/) [openai 417](https://simonwillison.net/tags/openai/) [llm-release 198](https://simonwillison.net/tags/llm-release/) [ai 2005](https://simonwillison.net/tags/ai/) [...](https://simonwillison.net/tags/)

**Sponsored by:** [MongoDB](https://fandf.co/4cNOQZL) — Join MongoDB.local London 2026 on 7 May to learn how teams move AI from prototype to production.


## [Entries](https://simonwillison.net/entries/) [Links](https://simonwillison.net/blogmarks/) [Quotes](https://simonwillison.net/quotations/) [Notes](https://simonwillison.net/notes/) [Guides](https://simonwillison.net/guides/) [Elsewhere](https://simonwillison.net/elsewhere/)

### May 6, 2026

### [Live blog: Code w/ Claude 2026](https://simonwillison.net/2026/May/6/code-w-claude-2026/)

I’m at Anthropic’s Code w/ Claude event today. Here’s my live blog of the morning keynote sessions.

[3:58 pm](https://simonwillison.net/2026/May/6/code-w-claude-2026/ "Permalink for \"Live blog: Code w/ Claude 2026\"") / [ai](https://simonwillison.net/tags/ai/), [generative-ai](https://simonwillison.net/tags/generative-ai/), [llms](https://simonwillison.net/tags/llms/), [anthropic](https://simonwillison.net/tags/anthropic/), [claude](https://simonwillison.net/tags/claude/), [claude-code](https://simonwillison.net/tags/claude-code/), [live-blog](https://simonwillison.net/tags/live-blog/)

### [Vibe coding and agentic engineering are getting closer than I’d like](https://simonwillison.net/2026/May/6/vibe-coding-and-agentic-engineering/)

I recently talked with Joseph Ruscio about AI coding tools for Heavybit’s High Leverage podcast: [Ep. #9, The AI Coding Paradigm Shift with Simon Willison](https://www.heavybit.com/library/podcasts/high-leverage/ep-9-the-ai-coding-paradigm-shift-with-simon-willison). Here are some of my highlights, including my disturbing realization that vibe coding and agentic engineering have started to converge in my own work.

\[... [1,542 words](https://simonwillison.net/2026/May/6/vibe-coding-and-agentic-engineering/)\]

[2:24 pm](https://simonwillison.net/2026/May/6/vibe-coding-and-agentic-engineering/ "Permalink for \"Vibe coding and agentic engineering are getting closer than I'd like\"") / [ai](https://simonwillison.net/tags/ai/), [generative-ai](https://simonwillison.net/tags/generative-ai/), [llms](https://simonwillison.net/tags/llms/), [podcast-appearances](https://simonwillison.net/tags/podcast-appearances/), [vibe-coding](https://simonwillison.net/tags/vibe-coding/), [coding-agents](https://simonwillison.net/tags/coding-agents/), [agentic-engineering](https://simonwillison.net/tags/agentic-engineering/)

### May 5, 2026

Release[datasette-referrer-policy 0.1](https://github.com/datasette/datasette-referrer-policy/releases/tag/0.1)

The OpenStreetMap tiles on the Datasette [global-power-plants demo](https://datasette.io/global-power-plants/global-power-plants) weren't displaying correctly. This turned out to be caused by two bugs.

The first is that the CAPTCHA [I added](https://github.com/simonw/datasette-turnstile) to that site a few weeks ago was triggering for the `.json` fetch requests used by the map plugin, and since those weren't HTML the user was not being asked to solve them. Here's [the fix](https://github.com/simonw/datasette.io/commit/23a1c8596b75b2094db46035a3b4280109fb3df3).

The second was that OpenStreetMap quite reasonably [block tile requests](https://wiki.openstreetmap.org/wiki/Referer) from sites that use a `Referrer-Policy: no-referrer` header.

Datasette does this by default, and I didn't want to change that default on people without warning - so I had Codex + GPT-5.5 [build me](https://gisthost.github.io/?402f2f23ee3dbfa251bf0d216e0224f7) a new plugin to help set that header to another value.

[5th May 2026, 11:44 pm](https://simonwillison.net/2026/May/5/datasette-referrer-policy/) · [openstreetmap](https://simonwillison.net/tags/openstreetmap/), [http](https://simonwillison.net/tags/http/), [datasette](https://simonwillison.net/tags/datasette/)

**[Our AI started a cafe in Stockholm](https://andonlabs.com/blog/ai-cafe-stockholm)**
( [via](https://news.ycombinator.com/item?id=48028289 "Hacker News"))
Andon Labs previously [started an AI-run retail store](https://andonlabs.com/blog/andon-market-launch) in San Francisco. Now they're running a similar experiment in Stockholm, Sweden, only this time it's a cafe.

These experiments are interesting, and often throw out amusing anecdotes:

> During the first week of inventory, Mona ordered 120 eggs even though the café has no stove. When the staff told her they couldn’t cook them, she suggested using the high-speed oven, until they pointed out the eggs would likely explode. She also tried to solve the problem of fresh tomatoes being spoiled too fast by ordering 22.5 kg of canned tomatoes for the fresh sandwiches. The baristas eventually started a “Hall of Shame”, a shelf visible to customers with all the weird things Mona ordered, including 6,000 napkins, 3,000 nitrile gloves, 9L coconut milk, and industrial-sized trash bags.

Where they lose their shine is when these AI managers start wasting the time of human beings who have _not_ opted into the experiment:

> She also successfully applied for an outdoor seating permit through the Police e-service, which didn’t require BankID. Her first submission included a sketch she had generated herself, despite having never seen the street outside the café. Unsurprisingly, the Police sent it back for revision. \[...\]
>
> When she makes a mistake, she often sends multiple emails to suppliers with the subject “EMERGENCY” to cancel or change the order.

I don't think it's ethical to run experiments like this that affect real-world systems and steal time from people.

I'm reminded of the incident last year where the AI Village experiment [infuriated Rob Pike](https://simonwillison.net/2025/Dec/26/slop-acts-of-kindness/) by sending him unsolicited gratitude emails as an "act of kindness". That was just an unwanted email - asking suppliers to correct mistakes that were made without a human-in-the-loop or wasting police time with slop diagrams feels a whole lot worse to me.

I think experiments like this need to keep their own human operators in-the-loop for outbound actions that affect other people.

[#](https://simonwillison.net/2026/May/5/our-ai-started-a-cafe-in-stockholm/) [10:14 pm](https://simonwillison.net/2026/May/5/our-ai-started-a-cafe-in-stockholm/)
/ [ai](https://simonwillison.net/tags/ai/), [generative-ai](https://simonwillison.net/tags/generative-ai/), [llms](https://simonwillison.net/tags/llms/), [ai-agents](https://simonwillison.net/tags/ai-agents/), [ai-ethics](https://simonwillison.net/tags/ai-ethics/)

Release[datasette-llm 0.1a7](https://github.com/datasette/datasette-llm/releases/tag/0.1a7)

> - Mechanism for [configuring default options](https://github.com/datasette/datasette-llm/blob/main/README.md#configuration) for specific models.

Part of Datasette's evolving support mechanism for plugins that use LLMs. It's now possible to configure a model with default options, e.g. to say all [enrichment](https://github.com/datasette/datasette-enrichments-llm) operations should use a specific model with temperature set to 0.5.

[5th May 2026, 1:56 am](https://simonwillison.net/2026/May/5/datasette-llm/) · [llm](https://simonwillison.net/tags/llm/), [datasette](https://simonwillison.net/tags/datasette/)

Release[llm-echo 0.5a0](https://github.com/simonw/llm-echo/releases/tag/0.5a0)

> - New `-o thinking 1` option to help test against [LLM 0.32a0](https://llm.datasette.io/en/latest/changelog.html#a0-2026-04-28) and higher.

This plugin provides a fake model called "echo" for LLM which doesn't run an LLM at all - it's useful for writing automated tests. You can now do this:

```
uvx --with llm==0.32a1 --with llm-echo==0.5a0 llm -m echo hi -o thinking 1
```

This will fake a reasoning block to standard error before returning JSON echoing the prompt.

[5th May 2026, 1:31 am](https://simonwillison.net/2026/May/5/llm-echo/) · [llm](https://simonwillison.net/tags/llm/)

> So it’s well known that Y Combinator owns _some_ stake in OpenAI. But how big is that stake? This seems like devilishly difficult information to obtain. I asked around and a little birdie who knows several OpenAI investors came back with an answer: Y Combinator owns about 0.6 percent of OpenAI. At OpenAI’s current [$852 billion valuation](https://openai.com/index/accelerating-the-next-phase-ai/), that’s worth over $5 billion.

— [John Gruber](https://daringfireball.net/2026/05/y_combinators_stake_in_openai), Y Combinator’s Stake in OpenAI

[#](https://simonwillison.net/2026/May/5/john-gruber/) [12:46 am](https://simonwillison.net/2026/May/5/john-gruber/)
/ [openai](https://simonwillison.net/tags/openai/), [y-combinator](https://simonwillison.net/tags/y-combinator/), [ai](https://simonwillison.net/tags/ai/), [john-gruber](https://simonwillison.net/tags/john-gruber/)

### May 4, 2026

**[Granite 4.1 3B SVG Pelican Gallery](https://simonw.github.io/granite-4.1-3b-gguf-pelicans/)**.
IBM released their [Granite 4.1 family](https://research.ibm.com/blog/granite-4-1-ai-foundation-models) of LLMs a few days ago. They're Apache 2.0 licensed and come in 3B, 8B and 30B sizes.

[Granite 4.1 LLMs: How They’re Built](https://huggingface.co/blog/ibm-granite/granite-4-1) by Granite team member Yousaf Shah describes the training process in detail.

Unsloth released the [unsloth/granite-4.1-3b-GGUF](https://huggingface.co/unsloth/granite-4.1-3b-GGUF) collection of GGUF encoded quantized variants of the 3B model - 21 different model files ranging in size from 1.2GB to 6.34GB.

All 21 of those Unsloth files add up to 51.3GB, which inspired me to finally try an experiment I've been wanting to run for ages: prompting "Generate an SVG of a pelican riding a bicycle" against different sized quantized variants of the same model to see what the results would look like.

Honestly, [the results](https://simonw.github.io/granite-4.1-3b-gguf-pelicans/) are less interesting than I expected. There's no distinguishable pattern relating quality to size - they're all pretty terrible!

![Six different SVG images from models ranging in size from 1.67GB to 1.2GB. They are almost all an abstract collection of shapes - weirdly the smallest model had the best version of a bicycle, while the largest one had something that looked a tiny bit like a pelican.](https://static.simonwillison.net/static/2026/granite-3B-pelicans.jpg)

I'll likely try this again in the future with a model that's better at drawing pelicans.

[#](https://simonwillison.net/2026/May/4/granite-41-3b-svg-pelican-gallery/) [11:49 pm](https://simonwillison.net/2026/May/4/granite-41-3b-svg-pelican-gallery/)
/ [ibm](https://simonwillison.net/tags/ibm/), [ai](https://simonwillison.net/tags/ai/), [generative-ai](https://simonwillison.net/tags/generative-ai/), [llms](https://simonwillison.net/tags/llms/), [pelican-riding-a-bicycle](https://simonwillison.net/tags/pelican-riding-a-bicycle/), [llm-release](https://simonwillison.net/tags/llm-release/)

> \[...\] Between 2000 and 2024, farmers sold in total a Colorado-sized chunk of land all on their own, 77 times all land on data center property in 2028, and grew more food than ever on what was left. None of this caused any problems for US food access.
>
> And then, in the middle of all this, a farmer in Loudoun County sells a few acres of mediocre hay field to a hyperscaler for ten times its agricultural value, and the response is that we’re running out of farmland.

— [Andy Masley](https://blog.andymasley.com/p/data-center-land-use-issues-are-fake), pushing back against the "land use" argument against data center construction

[#](https://simonwillison.net/2026/May/4/andy-masley/) [10:51 pm](https://simonwillison.net/2026/May/4/andy-masley/)
/ [ai-ethics](https://simonwillison.net/tags/ai-ethics/), [ai](https://simonwillison.net/tags/ai/), [generative-ai](https://simonwillison.net/tags/generative-ai/), [andy-masley](https://simonwillison.net/tags/andy-masley/)

I just sent out the April edition of my [sponsors-only monthly newsletter](https://github.com/sponsors/simonw/). If you are a sponsor (or if you start a sponsorship now) you can [access it here](https://github.com/simonw-private/monthly/blob/main/2026-04-april.md).

In this month's newsletter:

- Opus 4.7 and GPT-5.5, both with price increases
- Claude Mythos and LLM security research
- ChatGPT Images 2.0
- More model releases
- Other highlights from my blog
- What I'm using, April 2026 edition

Here's [a copy of the March newsletter](https://github.com/simonw/monthly-newsletter-archive/blob/main/2026-03-march.md) as a preview of what you'll get. Pay $10/month to stay a month ahead of the free copy!

[#](https://simonwillison.net/2026/May/4/april-newsletter/) [10:38 pm](https://simonwillison.net/2026/May/4/april-newsletter/)
/ [newsletter](https://simonwillison.net/tags/newsletter/)

Research[TRE Python binding — ReDoS robustness demo](https://github.com/simonw/research/tree/main/tre-python-binding#readme)

If it's [good enough for antirez](https://simonwillison.net/2026/May/4/redis-array/) to add to Redis I figured Ville Laurikari's [TRE](https://github.com/laurikari/tre/) regular expression engine was worth exploring in a little more detail.

I had Claude Code build an experimental Python binding (it used `ctypes`) and try some malicious regular expression attacks against the library. TRE handles those much better than Python's standard library implementation, thanks mainly to the lack of support for backtracking.

[4th May 2026, 5:52 pm](https://simonwillison.net/2026/May/4/tre-python-binding/) · [security](https://simonwillison.net/tags/security/), [python](https://simonwillison.net/tags/python/), [regular-expressions](https://simonwillison.net/tags/regular-expressions/), [c](https://simonwillison.net/tags/c/), [ctypes](https://simonwillison.net/tags/ctypes/)

Tool[Redis Array Playground](https://tools.simonwillison.net/redis-array)

Salvatore Sanfilippo submitted [a PR](https://github.com/redis/redis/pull/15162) adding a new data type - arrays - to Redis.

The new commands are `ARCOUNT`, `ARDEL`, `ARDELRANGE`, `ARGET`, `ARGETRANGE`, `ARGREP`, `ARINFO`, `ARINSERT`, `ARLASTITEMS`, `ARLEN`, `ARMGET`, `ARMSET`, `ARNEXT`, `AROP`, `ARRING`, `ARSCAN`, `ARSEEK`, `ARSET`.

The implementation is currently available in a branch, so I [had Claude Code for web](https://github.com/simonw/tools/pull/277)
build this interactive playground for trying out the new commands in a WASM-compiled build of a subset of Redis running in the browser.

![Screenshot of a Redis command builder UI. Left sidebar shows commands ARSCAN, ARSEEK, ARSET. Main panel has a "predicate oneof" section with a MATCH dropdown and value CHERRY, plus a "+ add another" button. Below is "options (optional) oneof" with checkboxes: AND (checked), OR (unchecked), LIMIT (checked, value 10), WITHVALUES (checked), NOCASE (checked). COMMAND section shows: ARGREP myarr - + MATCH CHERRY AND LIMIT 10 WITHVALUES NOCASE. A red "Run command" button is below. REPLY section shows "(no reply yet)".](https://static.simonwillison.net/static/2026/redis-array-explorer-card.jpg)

The most interesting new command is `ARGREP` which can run a server-side grep against a range of values in the array using the newly vendored [TRE regex library](https://github.com/laurikari/tre/).

Salvatore wrote more about the AI-assisted development process for the array type in [Redis array type: short story of a long development](https://antirez.com/news/164).

[4th May 2026, 3:53 pm](https://simonwillison.net/2026/May/4/redis-array/) · [salvatore-sanfilippo](https://simonwillison.net/tags/salvatore-sanfilippo/), [webassembly](https://simonwillison.net/tags/webassembly/), [generative-ai](https://simonwillison.net/tags/generative-ai/), [agentic-engineering](https://simonwillison.net/tags/agentic-engineering/), [ai](https://simonwillison.net/tags/ai/), [redis](https://simonwillison.net/tags/redis/), [llms](https://simonwillison.net/tags/llms/), [regular-expressions](https://simonwillison.net/tags/regular-expressions/), [c](https://simonwillison.net/tags/c/)

### May 3, 2026

Sighting[9:13 AM](https://www.inaturalist.org/observations/357953160)— Tree Swallow

[![Tree Swallow](https://static.inaturalist.org/photos/652930542/small.jpg)](https://static.inaturalist.org/photos/652930542/large.jpg) [Tree Swallow](https://www.inaturalist.org/observations/357953160 "View observation on iNaturalist")[![Tree Swallow](https://static.inaturalist.org/photos/652930689/small.jpg)](https://static.inaturalist.org/photos/652930689/large.jpg) [Tree Swallow](https://www.inaturalist.org/observations/357953160 "View observation on iNaturalist")

[3rd May 2026](https://simonwillison.net/2026/May/3/sighting-212/)

> We used an automatic classifier which judged sycophancy by looking at whether Claude showed a willingness to push back, maintain positions when challenged, give praise proportional to the merit of ideas, and speak frankly regardless of what a person wants to hear. Most of the time in these situations, Claude expressed no sycophancy—only 9% of conversations included sycophantic behavior (Figure 2). But two domains were exceptions: we saw sycophantic behavior in 38% of conversations focused on spirituality, and 25% of conversations on relationships.

— [Anthropic](https://www.anthropic.com/research/claude-personal-guidance), How people ask Claude for personal guidance

[#](https://simonwillison.net/2026/May/3/anthropic/) [3:13 pm](https://simonwillison.net/2026/May/3/anthropic/)
/ [ai-ethics](https://simonwillison.net/tags/ai-ethics/), [anthropic](https://simonwillison.net/tags/anthropic/), [claude](https://simonwillison.net/tags/claude/), [ai-personality](https://simonwillison.net/tags/ai-personality/), [generative-ai](https://simonwillison.net/tags/generative-ai/), [ai](https://simonwillison.net/tags/ai/), [llms](https://simonwillison.net/tags/llms/), [sycophancy](https://simonwillison.net/tags/sycophancy/)

### May 2, 2026

Sighting[1:42 PM – 5:58 PM](https://www.inaturalist.org/observations/357691599)— Gray Fox, Osprey, Brewer's Blackbird

[![Gray Fox](https://static.inaturalist.org/photos/652423277/small.jpg)](https://static.inaturalist.org/photos/652423277/large.jpg) [Gray Fox](https://www.inaturalist.org/observations/357691599 "View observation on iNaturalist")[![Osprey](https://static.inaturalist.org/photos/652489094/small.jpg)](https://static.inaturalist.org/photos/652489094/large.jpg) [Osprey](https://www.inaturalist.org/observations/357724478 "View observation on iNaturalist")[![Brewer's Blackbird](https://static.inaturalist.org/photos/652521152/small.jpg)](https://static.inaturalist.org/photos/652521152/large.jpg) [Brewer's Blackbird](https://www.inaturalist.org/observations/357740731 "View observation on iNaturalist")

[2nd May 2026](https://simonwillison.net/2026/May/2/sighting-211/)

**[/elsewhere/sightings/](https://simonwillison.net/elsewhere/sighting/)**.
I have a new camera (a Canon R6 Mark II) so I'm taking a lot more photos of birds. I share my best wildlife photos on [iNaturalist](https://www.inaturalist.org/), and based on yesterday's [successful prototype](https://simonwillison.net/2026/May/1/inat-sightings/) I decided to add those to my blog.

![Screenshot of a "Sightings" webpage with a search bar and RSS icon, showing "Filters: Sorted by date" and "208 results page 1 / 7 next » last »»". First entry: SIGHTING 7:51 PM — Acorn Woodpecker, with two photos labeled "Acorn Woodpecker" of black and white woodpeckers with red caps on tree branches, dated 2nd May 2026. Second entry: SIGHTING 10:08 AM – 11:17 AM — Acorn Woodpecker, Western Fence Lizard, Osprey, with three photos labeled "Acorn Woodpecker" (bird on bare branches against blue sky), "Wester..." (lizard on tree bark), and "Osprey" (nest on a utility pole), dated 1st May 2026. Third entry: SIGHTING 11:11 AM — White-crowned Sparrow, with a photo labeled "White-crowned Sparrow" of a sparrow with black and white striped head singing with open beak, dated 30th Apr 2026.](https://static.simonwillison.net/static/2026/beats-sightings.jpeg)

I built this feature on my phone using Claude Code for web, as an extension of my [beats system](https://simonwillison.net/2026/Feb/20/beats/) for syndicating external content. Here's [the PR](https://github.com/simonw/simonwillisonblog/pull/668) and prompt.

As with my other forms of incoming syndicated content sightings show up on the homepage, the date archive pages, and in site search results.

I back-populated over a decade of iNaturalist sightings, which means you that if you [search for lemur](https://simonwillison.net/search/?q=lemur) you'll see my lemur photos from Madagascar in 2019!

[#](https://simonwillison.net/2026/May/2/sightings/) [5:26 pm](https://simonwillison.net/2026/May/2/sightings/)
/ [blogging](https://simonwillison.net/tags/blogging/), [photography](https://simonwillison.net/tags/photography/), [wildlife](https://simonwillison.net/tags/wildlife/), [ai](https://simonwillison.net/tags/ai/), [inaturalist](https://simonwillison.net/tags/inaturalist/), [generative-ai](https://simonwillison.net/tags/generative-ai/), [llms](https://simonwillison.net/tags/llms/), [ai-assisted-programming](https://simonwillison.net/tags/ai-assisted-programming/), [claude-code](https://simonwillison.net/tags/claude-code/)

Sighting[7:51 PM](https://www.inaturalist.org/observations/357392870)— Acorn Woodpecker

[![Acorn Woodpecker](https://static.inaturalist.org/photos/651853337/small.jpg)](https://static.inaturalist.org/photos/651853337/large.jpg) [Acorn Woodpecker](https://www.inaturalist.org/observations/357392870 "View observation on iNaturalist")[![Acorn Woodpecker](https://static.inaturalist.org/photos/651853732/small.jpg)](https://static.inaturalist.org/photos/651853732/large.jpg) [Acorn Woodpecker](https://www.inaturalist.org/observations/357392870 "View observation on iNaturalist")

[2nd May 2026](https://simonwillison.net/2026/May/2/sighting-210/)

### May 1, 2026

[![A white crowned sparrow singing](https://static.inaturalist.org/photos/651590396/small.jpg)](https://tools.simonwillison.net/inat-sightings)

Tool[iNaturalist Sightings](https://tools.simonwillison.net/inat-sightings)

I wanted to see my [iNaturalist](https://www.inaturalist.org/) observations - across two separate accounts - grouped by when they occurred. I'm camping this weekend so I built this entirely on my phone using Claude Code for web.

I started by building an [inaturalist-clumper](https://github.com/simonw/inaturalist-clumper) Python CLI for fetching and "clumping" observations - by default clumps use observations within 2 hours and 5km of each other.

Then I setup [simonw/inaturalist-clumps](https://github.com/simonw/inaturalist-clumps) as a [Git scraping](https://simonwillison.net/series/git-scraping/) repository to run that tool and record the result to [clumps.json](https://github.com/simonw/inaturalist-clumps/blob/main/clumps.json).

That JSON file is hosted on GitHub, which means it can be fetched by JavaScript using CORS.

Finally I ran this prompt against my [simonw/tools](https://github.com/simonw/tools) repo:

> `Build inat-sightings.html - an app that does a fetch() against https://raw.githubusercontent.com/simonw/inaturalist-clumps/refs/heads/main/clumps.json and then displays all of the observations on one page using the https://static.inaturalist.org/photos/538073008/small.jpg small.jpg URLs for the thumbnails - with loading=lazy - but when a thumbnail is clicked showing the large.jpg in an HTML modal. Both small and large should include the common species names if available`

[1st May 2026, 7:35 pm](https://simonwillison.net/2026/May/1/inat-sightings/) · [tools](https://simonwillison.net/tags/tools/), [claude-code](https://simonwillison.net/tags/claude-code/), [inaturalist](https://simonwillison.net/tags/inaturalist/), [generative-ai](https://simonwillison.net/tags/generative-ai/), [ai](https://simonwillison.net/tags/ai/), [llms](https://simonwillison.net/tags/llms/)

Sighting[7:39 AM – 11:17 AM](https://www.inaturalist.org/observations/357695606)— Eurasian Collared-Dove, Acorn Woodpecker, Western Fence Lizard, Osprey

[![Eurasian Collared-Dove](https://static.inaturalist.org/photos/652432218/small.jpg)](https://static.inaturalist.org/photos/652432218/large.jpg) [Eurasian Collared-Dove](https://www.inaturalist.org/observations/357695606 "View observation on iNaturalist")[![Acorn Woodpecker](https://static.inaturalist.org/photos/651551356/small.jpg)](https://static.inaturalist.org/photos/651551356/large.jpg) [Acorn Woodpecker](https://www.inaturalist.org/observations/357242864 "View observation on iNaturalist")[![Western Fence Lizard](https://static.inaturalist.org/photos/651553391/small.jpg)](https://static.inaturalist.org/photos/651553391/large.jpg) [Western Fence Lizard](https://www.inaturalist.org/observations/357243456 "View observation on iNaturalist")[![Osprey](https://static.inaturalist.org/photos/651551722/small.jpg)](https://static.inaturalist.org/photos/651551722/large.jpg) [Osprey](https://www.inaturalist.org/observations/357243285 "View observation on iNaturalist")

[1st May 2026](https://simonwillison.net/2026/May/1/sighting-209/)

### April 30, 2026

**[Codex CLI 0.128.0 adds /goal](https://github.com/openai/codex/releases/tag/rust-v0.128.0)**
( [via](https://twitter.com/fcoury/status/2049917871799636201 "@fcoury"))
The latest version of OpenAI's Codex CLI coding agent adds their own version of the [Ralph loop](https://ghuntley.com/ralph/): you can now set a `/goal` and Codex will keep on looping until it evaluates that the goal has been completed... or the configured token budget has been exhausted.

It looks like the feature is mainly implemented though the [goals/continuation.md](https://github.com/openai/codex/blob/6014b6679ffbd92eeddffa3ad7b4402be6a7fefe/codex-rs/core/templates/goals/continuation.md) and [goals/budget\_limit.md](https://github.com/openai/codex/blob/6014b6679ffbd92eeddffa3ad7b4402be6a7fefe/codex-rs/core/templates/goals/budget_limit.md) prompts, which are automatically injected at the end of a turn.

[#](https://simonwillison.net/2026/Apr/30/codex-goals/) [11:23 pm](https://simonwillison.net/2026/Apr/30/codex-goals/)
/ [ai](https://simonwillison.net/tags/ai/), [openai](https://simonwillison.net/tags/openai/), [prompt-engineering](https://simonwillison.net/tags/prompt-engineering/), [generative-ai](https://simonwillison.net/tags/generative-ai/), [llms](https://simonwillison.net/tags/llms/), [coding-agents](https://simonwillison.net/tags/coding-agents/), [system-prompts](https://simonwillison.net/tags/system-prompts/), [codex-cli](https://simonwillison.net/tags/codex-cli/), [agentic-engineering](https://simonwillison.net/tags/agentic-engineering/)

**[Our evaluation of OpenAI’s GPT-5.5 cyber capabilities](https://www.aisi.gov.uk/blog/our-evaluation-of-openais-gpt-5-5-cyber-capabilities)**.
The UK's AI Security Institute [previously evaluated Claude Mythos](https://www.aisi.gov.uk/blog/our-evaluation-of-claude-mythos-previews-cyber-capabilities): now they've evaluated GPT-5.5 for finding security vulnerability and found it to be comparable to Mythos, but unlike Mythos it's generally available right now.

[#](https://simonwillison.net/2026/Apr/30/gpt-55-cyber-capabilities/) [11:03 pm](https://simonwillison.net/2026/Apr/30/gpt-55-cyber-capabilities/)
/ [ai](https://simonwillison.net/tags/ai/), [openai](https://simonwillison.net/tags/openai/), [generative-ai](https://simonwillison.net/tags/generative-ai/), [llms](https://simonwillison.net/tags/llms/), [anthropic](https://simonwillison.net/tags/anthropic/), [claude](https://simonwillison.net/tags/claude/), [ai-security-research](https://simonwillison.net/tags/ai-security-research/), [gpt](https://simonwillison.net/tags/gpt/)

> It's a common misconception that we can't tell who is using LLM and who is not. I'm sure we didn't catch 100% of LLM-assisted PRs over the past few months, but the kind of mistakes humans make are fundamentally different than LLM hallucinations, making them easy to spot. Furthermore, people who come from the world of agentic coding have a certain _digital smell_ that is not obvious to them but is obvious to those who abstain. It's like when a smoker walks into the room, everybody who doesn't smoke instantly knows it.
>
> I'm not telling you not to smoke, but I am telling you not to smoke in my house.

— [Andrew Kelley](https://lobste.rs/s/ifcyr1/contributor_poker_zig_s_ai_ban#c_cbtxub), Creator of Zig

[#](https://simonwillison.net/2026/Apr/30/andrew-kelley/) [9:24 pm](https://simonwillison.net/2026/Apr/30/andrew-kelley/)
/ [zig](https://simonwillison.net/tags/zig/), [llms](https://simonwillison.net/tags/llms/), [ai](https://simonwillison.net/tags/ai/), [generative-ai](https://simonwillison.net/tags/generative-ai/)

**[We need RSS for sharing abundant vibe-coded apps](https://interconnected.org/home/2026/04/29/syndicating-vibes)**.
Matt Webb:

> I would love an RSS web feed for all those various tools and apps pages, each item with an “Install” button. (But install to where?)
>
> The lesson here is that when vibe-coding accelerates app development, apps become more personal, more situated, and more frequent. Shipping a tool or a micro-app is less like launching a website and more like posting on a blog.

This inspired me to [have Claude](https://github.com/simonw/simonwillisonblog/pull/665) add an Atom feed (and icon) to my [/elsewhere/tools/](https://simonwillison.net/elsewhere/tool/) page, which itself is populated by content from my [tools.simonwillison.net](https://tools.simonwillison.net/) site.

[#](https://simonwillison.net/2026/Apr/30/rss-vibe-coded-apps/) [6:38 pm](https://simonwillison.net/2026/Apr/30/rss-vibe-coded-apps/)
/ [atom](https://simonwillison.net/tags/atom/), [matt-webb](https://simonwillison.net/tags/matt-webb/), [rss](https://simonwillison.net/tags/rss/), [ai](https://simonwillison.net/tags/ai/), [vibe-coding](https://simonwillison.net/tags/vibe-coding/)

Sighting[11:11 AM](https://www.inaturalist.org/observations/357246538)— White-crowned Sparrow

[![White-crowned Sparrow](https://static.inaturalist.org/photos/651590396/small.jpg)](https://static.inaturalist.org/photos/651590396/large.jpg) [White-crowned Sparrow](https://www.inaturalist.org/observations/357246538 "View observation on iNaturalist")

[30th Apr 2026](https://simonwillison.net/2026/Apr/30/sighting-208/)

[Zig](https://ziglang.org/) has one of the most stringent [anti-LLM policies](https://ziglang.org/code-of-conduct/) of any major open source project:

> No LLMs for issues.
>
> No LLMs for pull requests.
>
> No LLMs for comments on the bug tracker, including translation. English is encouraged, but not required. You are welcome to post in your native language and rely on others to have their own translation tools of choice to interpret your words.

The most prominent project written in Zig may be the [Bun](https://bun.com/) JavaScript runtime, which was [acquired by Anthropic](https://bun.com/blog/bun-joins-anthropic) in December 2025 and, unsurprisingly, makes heavy use of AI assistance.

Bun operates its own fork of Zig, and recently [achieved a 4x performance improvement](https://x.com/bunjavascript/status/2048427636414923250) on Bun compile after adding "parallel semantic analysis and multiple codegen units to the llvm backend". Here's [that code](https://github.com/oven-sh/zig/compare/upgrade-0.15.2%E2%80%A6upgrade-0.15.2-fast). But [@bunjavascript says](https://twitter.com/bunjavascript/status/2048428104893542781):

> We do not currently plan to upstream this, as Zig has a strict ban on LLM-authored contributions.

(Update: here's [a Zig core contributor](https://ziggit.dev/t/bun-s-zig-fork-got-4x-faster-compilation-times/15183/19) providing details on why they wouldn't accept that particular patch independent of the LLM issue - parallel semantic analysis is a long planned feature but has implications "for the Zig language itself".)

In [Contributor Poker and Zig's AI Ban](https://kristoff.it/blog/contributor-poker-and-ai/) ( [via Lobste.rs](https://lobste.rs/s/ifcyr1/contributor_poker_zig_s_ai_ban)) Zig Software Foundation VP of Community Loris Cro explains the rationale for this strict ban. It's the best articulation I've seen yet for a blanket ban on LLM-assisted contributions:

> In successful open source projects you eventually reach a point where you start getting more PRs than what you’re capable of processing. Given what I mentioned so far, it would make sense to stop accepting imperfect PRs in order to maximize ROI from your work, but that’s not what we do in the Zig project. Instead, **we try our best to help new contributors to get their work in, even if they need some help getting there**. We don’t do this just because it’s the “right” thing to do, but also **because it’s the smart thing to do**.

Zig values contributors over their contributions. Each contributor represents an investment by the Zig core team - the primary goal of reviewing and accepting PRs isn't to land new code, it's to help grow new contributors who can become trusted and prolific over time.

LLM assistance breaks that completely. It doesn't matter if the LLM helps you submit a _perfect_ PR to Zig - the time the Zig team spends reviewing your work does nothing to help them add new, confident, trustworthy contributors to their overall project.

Loris explains the name here:

> The reason I call it “contributor poker” is because, just like people say about the actual card game, “you play the person, not the cards”. In contributor poker, you bet on the contributor, not on the contents of their first PR.

This makes a lot of sense to me. It relates to an idea I've seen circulating elsewhere: if a PR was mostly written by an LLM, why should a project maintainer spend time reviewing and discussing that PR as opposed to firing up their own LLM to solve the same problem?

[#](https://simonwillison.net/2026/Apr/30/zig-anti-ai/) [1:24 am](https://simonwillison.net/2026/Apr/30/zig-anti-ai/)
/ [anthropic](https://simonwillison.net/tags/anthropic/), [zig](https://simonwillison.net/tags/zig/), [ai](https://simonwillison.net/tags/ai/), [llms](https://simonwillison.net/tags/llms/), [ai-ethics](https://simonwillison.net/tags/ai-ethics/), [open-source](https://simonwillison.net/tags/open-source/), [javascript](https://simonwillison.net/tags/javascript/), [ai-assisted-programming](https://simonwillison.net/tags/ai-assisted-programming/), [generative-ai](https://simonwillison.net/tags/generative-ai/), [bun](https://simonwillison.net/tags/bun/)

### April 29, 2026

Release[llm 0.32a1](https://github.com/simonw/llm/releases/tag/0.32a1)

> - Fixed a bug in 0.32a0 where tool-calling conversations were not correctly reinflated from SQLite. [#1426](https://github.com/simonw/llm/issues/1426)

[29th Apr 2026, 11:52 pm](https://simonwillison.net/2026/Apr/29/llm-3/) · [llm](https://simonwillison.net/tags/llm/)

### [LLM 0.32a0 is a major backwards-compatible refactor](https://simonwillison.net/2026/Apr/29/llm/)

[![Visit LLM 0.32a0  is a major backwards-compatible refactor](https://static.simonwillison.net/static/2026/llm-032a0-card.jpg)](https://simonwillison.net/2026/Apr/29/llm/)

I just released [LLM 0.32a0](https://llm.datasette.io/en/latest/changelog.html#a0-2026-04-28), an alpha release of my [LLM](https://llm.datasette.io/) Python library and CLI tool for accessing LLMs, with some consequential changes that I’ve been working towards for quite a while.

\[... [1,874 words](https://simonwillison.net/2026/Apr/29/llm/)\]

[7:01 pm](https://simonwillison.net/2026/Apr/29/llm/ "Permalink for \"LLM 0.32a0  is a major backwards-compatible refactor\"") / [projects](https://simonwillison.net/tags/projects/), [python](https://simonwillison.net/tags/python/), [ai](https://simonwillison.net/tags/ai/), [annotated-release-notes](https://simonwillison.net/tags/annotated-release-notes/), [generative-ai](https://simonwillison.net/tags/generative-ai/), [llms](https://simonwillison.net/tags/llms/), [llm](https://simonwillison.net/tags/llm/)

Release[llm 0.32a0](https://github.com/simonw/llm/releases/tag/0.32a0)

See [the annotated release notes](https://simonwillison.net/2026/Apr/29/llm/).

[29th Apr 2026, 6:57 pm](https://simonwillison.net/2026/Apr/29/llm-2/) · [llm](https://simonwillison.net/tags/llm/)

### April 28, 2026

> `Never talk about goblins, gremlins, raccoons, trolls, ogres, pigeons, or other animals or creatures unless it is absolutely and unambiguously relevant to the user's query.`

— [OpenAI Codex base\_instructions](https://github.com/openai/codex/blob/66b0781502be5de3b1909525c987643b9e5e407d/codex-rs/models-manager/models.json#L55), for GPT-5.5

[#](https://simonwillison.net/2026/Apr/28/openai-codex/) [10:02 pm](https://simonwillison.net/2026/Apr/28/openai-codex/)
/ [openai](https://simonwillison.net/tags/openai/), [ai](https://simonwillison.net/tags/ai/), [llms](https://simonwillison.net/tags/llms/), [system-prompts](https://simonwillison.net/tags/system-prompts/), [prompt-engineering](https://simonwillison.net/tags/prompt-engineering/), [codex-cli](https://simonwillison.net/tags/codex-cli/), [generative-ai](https://simonwillison.net/tags/generative-ai/), [gpt](https://simonwillison.net/tags/gpt/)

> Five months in, I think I've decided that I don't want to vibecode — I want professionally managed software companies to use AI coding assistance to make more/better/cheaper software products that they sell to me for money.

— [Matthew Yglesias](https://twitter.com/mattyglesias/status/2049105745132585161)

[#](https://simonwillison.net/2026/Apr/28/matthew-yglesias/) [1:25 pm](https://simonwillison.net/2026/Apr/28/matthew-yglesias/)
/ [agentic-engineering](https://simonwillison.net/tags/agentic-engineering/), [vibe-coding](https://simonwillison.net/tags/vibe-coding/), [ai-assisted-programming](https://simonwillison.net/tags/ai-assisted-programming/), [ai](https://simonwillison.net/tags/ai/)

**[What’s new in pip 26.1—lockfiles and dependency cooldowns!](https://ichard26.github.io/blog/2026/04/whats-new-in-pip-26.1/)**
( [via](https://lobste.rs/s/w2oiaq/what_s_new_pip_26_1_lockfiles_dependency "Lobste.rs"))
Richard Si describes an excellent set of upgrades to Python's default `pip` tool for installing dependencies.

This version drops support for Python 3.9 - fair enough, since it's been EOL [since October](https://devguide.python.org/versions/). macOS still ships with `python3` as a default Python 3.9, so I tried out the new Python version against Python 3.14 like this:

```
uv python install 3.14
mkdir /tmp/experiment
cd /tmp/experiment
python3.14 -m venv venv
source venv/bin/activate
pip install -U pip
pip --version
```

This confirmed I had `pip 26.1` \- then I tried out the new lock files:

```
pip lock datasette llm
```

This installs Datasette and LLM and all of their dependencies and writes the whole lot to a 519 line `pylock.toml` file - [here's the result](https://gist.github.com/simonw/ff52c33f4d3a381b8e53c6a3aa0213f8).

The new release also supports dependency cooldowns, [discussed here previously](https://simonwillison.net/2026/Mar/24/package-managers-need-to-cool-down/), via the new `--uploaded-prior-to PXD` option where X is a number of days. The format is `P-number-of-days-D`, following [ISO duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations) but only supporting days.

I shipped a new release of LLM, version 0.31, [three days ago](https://simonwillison.net/2026/Apr/24/llm/). Here's how to use the new `--uploaded-prior-to P4D` option to ask for a version that is at least 4 days old.

```
pip install llm --uploaded-prior-to P4D
venv/bin/llm --version
```

This gave me version 0.30.

[#](https://simonwillison.net/2026/Apr/28/pip-261/) [5:23 am](https://simonwillison.net/2026/Apr/28/pip-261/)
/ [packaging](https://simonwillison.net/tags/packaging/), [pip](https://simonwillison.net/tags/pip/), [python](https://simonwillison.net/tags/python/), [security](https://simonwillison.net/tags/security/), [supply-chain](https://simonwillison.net/tags/supply-chain/)

**[Introducing talkie: a 13B vintage language model from 1930](https://talkie-lm.com/introducing-talkie)**
( [via](https://news.ycombinator.com/item?id=47927903 "Hacker News"))
New project from [Nick Levine](https://nlevine.org/), [David Duvenaud](http://www.cs.toronto.edu/~duvenaud/), and [Alec Radford](https://en.wikipedia.org/wiki/Alec_Radford) (of GPT, GPT-2, Whisper fame).

[talkie-1930-13b-base](https://huggingface.co/talkie-lm/talkie-1930-13b-base) (53.1 GB) is a "13B language model trained on 260B tokens of historical pre-1931 English text".

[talkie-1930-13b-it](https://huggingface.co/talkie-lm/talkie-1930-13b-it) (26.6 GB) is a checkpoint "finetuned using a novel dataset of instruction-response pairs extracted from pre-1931 reference works", designed to power a chat interface. You can [try that out here](https://talkie-lm.com/chat).

Both models are Apache 2.0 licensed. Since the training data for the base model is entirely out of copyright (the USA copyright cutoff date is currently January 1, 1931), I'm hoping they later decide to release the training data as well.

_Update_ on that: [Nick Levine on Twitter](https://twitter.com/status_effects/status/2049065134014726301):

> Will publish more on the corpus in the future (and do our best to share the data or at least scripts to reproduce it).

Their report suggests some fascinating research objectives for this class of model, including:

- How good are these models at predicting the future? "we calculated the surprisingness of short descriptions of historical events to a 13B model trained on pre-1931 text"
- Can these models invent things that are past their knowledge cutoffs? "As Demis Hassabis has asked, could a model trained up to 1911 independently discover General Relativity, as Einstein did in 1915?"
- Can they be taught to program? "Figure 3 (left-hand side) shows an early example of such a test, measuring how well models trained on pre-1931 text can, when given a few demonstration examples of [Python programs](https://github.com/openai/human-eval), write new correct programs."

I have a long-running interest in what I call "vegan models" - LLMs that are trained entirely on licensed or out-of-copyright data. I think the base model here qualifies, but the chat model isn't entirely pure due to the reliance on non-vegan models to help with the fine-tuning - emphasis mine:

> First, we generated instruction-response pairs from historical texts with regular structure, such as etiquette manuals, letter-writing manuals, cookbooks, dictionaries, encyclopedias, and poetry and fable collections (see Figure 7), and fine-tuned our base model on them using a simple chat format.
>
> Next, to improve instruction-following abilities, we generated synthetic prompts covering different types of tasks, such as summarizing documents, responding to direct information requests, and continuing multi-turn conversations coherently. We then ran online direct preference optimization on rollouts generated from these prompts, **using Claude Sonnet 4.6 as a judge**. \[...\]
>
> Finally, we did another round of supervised fine-tuning, this time on rejection-sampled **multi-turn synthetic chats between Claude Opus 4.6 and talkie**, to smooth out persistent rough edges in its conversational abilities.

A major challenge in training talkie was avoiding accidental contamination, either from post-1931 text that snuck into the training corpus or from the fine-tuning assistance from modern LLMs introducing anachronistic knowledge to the chat model.

I recently [wrote about Mr. Chatterbox](https://simonwillison.net/2026/Mar/30/mr-chatterbox/), a similar vintage language model project which also had to turn to modern LLMs to create synthetic conversations to help train the chat model.

The talkie team aspire to eventually move beyond this limitation:

> While we have tried to post-train talkie free from modern influence, reinforcement learning with AI feedback inevitably shapes talkie’s behavior anachronistically. (The 7B version of talkie emerged from RL speaking in listicles.) As we scale up, we hope to be able to use our vintage base models themselves as judges to enable a fully bootstrapped era-appropriate post-training pipeline.

I couldn't resist hitting the talkie demo with my classic test prompt:

> `Generate an SVG of a pelican riding a bicycle`

It replied:

> An SVG of a pelican riding a bicycle was generated in 1860. The pelican was represented as perched on the saddle, with its long bill pointed forward, and its legs astride the handles. The idea was suggested by the fact that pelicans are sometimes seen fishing on horseback, on the banks of the Rhine.

[#](https://simonwillison.net/2026/Apr/28/talkie/) [2:47 am](https://simonwillison.net/2026/Apr/28/talkie/)
/ [ai](https://simonwillison.net/tags/ai/), [generative-ai](https://simonwillison.net/tags/generative-ai/), [local-llms](https://simonwillison.net/tags/local-llms/), [llms](https://simonwillison.net/tags/llms/), [training-data](https://simonwillison.net/tags/training-data/), [ai-ethics](https://simonwillison.net/tags/ai-ethics/), [llm-release](https://simonwillison.net/tags/llm-release/)

### April 27, 2026

**[microsoft/VibeVoice](https://github.com/microsoft/VibeVoice)**.
VibeVoice is Microsoft's Whisper-style audio model for speech-to-text, MIT licensed and with speaker diarization built into the model.

Microsoft released it on January 21st, 2026 but I hadn't tried it until today. Here's a one-liner to run it on a Mac with `uv`, [mlx-audio](https://github.com/Blaizzy/mlx-audio) (by Prince Canuma) and the 5.71GB [mlx-community/VibeVoice-ASR-4bit](https://huggingface.co/mlx-community/VibeVoice-ASR-4bit) MLX conversion of the [17.3GB VibeVoice-ASR](https://huggingface.co/microsoft/VibeVoice-ASR/tree/main) model, in this case against a downloaded copy of my recent [podcast appearance with Lenny Rachitsky](https://simonwillison.net/2026/Apr/2/lennys-podcast/):

```
uv run --with mlx-audio mlx_audio.stt.generate \
  --model mlx-community/VibeVoice-ASR-4bit \
  --audio lenny.mp3 --output-path lenny \
  --format json --verbose --max-tokens 32768
```

![Screenshot of a macOS terminal running an mlx-audio speech-to-text command using the VibeVoice-ASR-4bit model on lenny.mp3, showing download progress, a warning that audio duration (99.8 min) exceeds the 59 min maximum so it's trimming, encoding/prefilling/generating progress bars, then a Transcription section with JSON segments of speakers discussing AI coding agents, followed by stats: Processing time 524.79 seconds, Prompt 26615 tokens at 50.718 tokens-per-sec, Generation 20248 tokens at 38.585 tokens-per-sec, Peak memory 30.44 GB.](https://static.simonwillison.net/static/2026/vibevoice-terminal.jpg)

The tool reported back:

```
Processing time: 524.79 seconds
Prompt: 26615 tokens, 50.718 tokens-per-sec
Generation: 20248 tokens, 38.585 tokens-per-sec
Peak memory: 30.44 GB
```

So that's 8 minutes 45 seconds for an hour of audio (running on a 128GB M5 Max MacBook Pro).

I've tested it against `.wav` and `.mp3` files and they both worked fine.

If you omit `--max-tokens` it defaults to 8192, which is enough for about 25 minutes of audio. I discovered that through trial-and-error and quadrupled it to guarantee I'd get the full hour.

That command reported using 30.44GB of RAM at peak, but in Activity Monitor I observed 61.5GB of usage during the prefill stage and around 18GB during the generating phase.

Here's [the resulting JSON](https://gist.github.com/simonw/d2c716c008b3ba395785f865c6387b6f). The key structure looks like this:

```
{
  "text": "And an open question for me is how many other knowledge work fields are actually prone to these agent loops?",
  "start": 13.85,
  "end": 19.5,
  "duration": 5.65,
  "speaker_id": 0
},
{
  "text": "Now that we have this power, people almost underestimate what they can do with it.",
  "start": 19.5,
  "end": 22.78,
  "duration": 3.280000000000001,
  "speaker_id": 1
},
{
  "text": "Today, probably 95% of the code that I produce, I didn't type it myself. I write so much of my code on my phone. It's wild.",
  "start": 22.78,
  "end": 30.0,
  "duration": 7.219999999999999,
  "speaker_id": 0
}
```

Since that's an array of objects we can [open it in Datasette Lite](https://lite.datasette.io/?json=https://gist.github.com/simonw/d2c716c008b3ba395785f865c6387b6f#/data/raw?_facet=speaker_id), making it easier to browse.

Amusingly that Datasette Lite view shows three speakers - it identified Lenny and me for the conversation, and then a separate Lenny for the voice he used for the additional intro and the sponsor reads!

VibeVoice can only handle up to an hour of audio, so running the above command transcribed just the first hour of the podcast. To transcribe more than that you'd need to split the audio, ideally with a minute or so of overlap so you can avoid errors from partially transcribed words at the split point. You'd also need to then line up the identified speaker IDs across the multiple segments.

[#](https://simonwillison.net/2026/Apr/27/vibevoice/) [11:46 pm](https://simonwillison.net/2026/Apr/27/vibevoice/)
/ [microsoft](https://simonwillison.net/tags/microsoft/), [python](https://simonwillison.net/tags/python/), [datasette-lite](https://simonwillison.net/tags/datasette-lite/), [uv](https://simonwillison.net/tags/uv/), [mlx](https://simonwillison.net/tags/mlx/), [prince-canuma](https://simonwillison.net/tags/prince-canuma/), [speech-to-text](https://simonwillison.net/tags/speech-to-text/)

### [Tracking the history of the now-deceased OpenAI Microsoft AGI clause](https://simonwillison.net/2026/Apr/27/now-deceased-agi-clause/)

For many years, Microsoft and OpenAI’s relationship has included a weird clause saying that, should AGI be achieved, Microsoft’s commercial IP rights to OpenAI’s technology would be null and void. That clause appeared to end today. I decided to try and track its expression over time on [openai.com](https://openai.com/).

\[... [691 words](https://simonwillison.net/2026/Apr/27/now-deceased-agi-clause/)\]

[6:38 pm](https://simonwillison.net/2026/Apr/27/now-deceased-agi-clause/ "Permalink for \"Tracking the history of the now-deceased OpenAI Microsoft AGI clause\"") / [computer-history](https://simonwillison.net/tags/computer-history/), [microsoft](https://simonwillison.net/tags/microsoft/), [ai](https://simonwillison.net/tags/ai/), [openai](https://simonwillison.net/tags/openai/)

**[Speech translation in Google Meet is now rolling out to mobile devices](https://workspaceupdates.googleblog.com/2026/04/speech-translation-in-google-meet-is-now-rolling-out-to-mobile-devices.html)**.
I just encountered this feature via a "try this out now" prompt in a Google Meet meeting. It kind-of worked!

This is Google's implementation of the ultimate sci-fi translation app, where two people can talk to each other in two separate languages and Meet translates from one to the other and - with a short delay - repeats the text in your preferred language, with a rough imitation of the original speaker's voice.

It can only handle English, Spanish, French, German, Portuguese, and Italian at the moment. It's also still very alpha - I ran it successfully between two laptops running web browsers, but then when I tried between an iPhone and an iPad it didn't seem to work.

[#](https://simonwillison.net/2026/Apr/27/speech-translation-in-google-meet-is-now-rolling-out-to-mobile-d/) [5:37 pm](https://simonwillison.net/2026/Apr/27/speech-translation-in-google-meet-is-now-rolling-out-to-mobile-d/)
/ [google](https://simonwillison.net/tags/google/), [translation](https://simonwillison.net/tags/translation/)

### April 25, 2026

Sighting[12:33 PM](https://www.inaturalist.org/observations/357420022)— California Brown Pelican

[![California Brown Pelican](https://static.inaturalist.org/photos/651908477/small.jpg)](https://static.inaturalist.org/photos/651908477/large.jpg) [California Brown Pelican](https://www.inaturalist.org/observations/357420022 "View observation on iNaturalist")[![California Brown Pelican](https://static.inaturalist.org/photos/651908548/small.jpg)](https://static.inaturalist.org/photos/651908548/large.jpg) [California Brown Pelican](https://www.inaturalist.org/observations/357420022 "View observation on iNaturalist")

[25th Apr 2026](https://simonwillison.net/2026/Apr/25/sighting-207/)

## Highlights

- [Live blog: Code w/ Claude 2026](https://simonwillison.net/2026/May/6/code-w-claude-2026/) \- May 6, 2026
- [Vibe coding and agentic engineering are getting closer than I'd like](https://simonwillison.net/2026/May/6/vibe-coding-and-agentic-engineering/) \- May 6, 2026
- [LLM 0.32a0 is a major backwards-compatible refactor](https://simonwillison.net/2026/Apr/29/llm/) \- April 29, 2026
- [Tracking the history of the now-deceased OpenAI Microsoft AGI clause](https://simonwillison.net/2026/Apr/27/now-deceased-agi-clause/) \- April 27, 2026
- [DeepSeek V4 - almost on the frontier, a fraction of the price](https://simonwillison.net/2026/Apr/24/deepseek-v4/) \- April 24, 2026
- [Extract PDF text in your browser with LiteParse for the web](https://simonwillison.net/2026/Apr/23/liteparse-for-the-web/) \- April 23, 2026
- [A pelican for GPT-5.5 via the semi-official Codex backdoor API](https://simonwillison.net/2026/Apr/23/gpt-5-5/) \- April 23, 2026
- [Is Claude Code going to cost $100/month? Probably not - it's all very confusing](https://simonwillison.net/2026/Apr/22/claude-code-confusion/) \- April 22, 2026
- [Where's the raccoon with the ham radio? (ChatGPT Images 2.0)](https://simonwillison.net/2026/Apr/21/gpt-image-2/) \- April 21, 2026
- [Changes in the system prompt between Claude Opus 4.6 and 4.7](https://simonwillison.net/2026/Apr/18/opus-system-prompt/) \- April 18, 2026
- [Join us at PyCon US 2026 in Long Beach - we have new AI and security tracks this year](https://simonwillison.net/2026/Apr/17/pycon-us-2026/) \- April 17, 2026
- [Qwen3.6-35B-A3B on my laptop drew me a better pelican than Claude Opus 4.7](https://simonwillison.net/2026/Apr/16/qwen-beats-opus/) \- April 16, 2026
- [Meta's new model is Muse Spark, and meta.ai chat has some interesting tools](https://simonwillison.net/2026/Apr/8/muse-spark/) \- April 8, 2026
- [Anthropic's Project Glasswing - restricting Claude Mythos to security researchers - sounds necessary to me](https://simonwillison.net/2026/Apr/7/project-glasswing/) \- April 7, 2026
- [The Axios supply chain attack used individually targeted social engineering](https://simonwillison.net/2026/Apr/3/supply-chain-social-engineering/) \- April 3, 2026
- [Highlights from my conversation about agentic engineering on Lenny's Podcast](https://simonwillison.net/2026/Apr/2/lennys-podcast/) \- April 2, 2026
- [Mr. Chatterbox is a (weak) Victorian-era ethically trained model you can run on your own computer](https://simonwillison.net/2026/Mar/30/mr-chatterbox/) \- March 30, 2026
- [Vibe coding SwiftUI apps is a lot of fun](https://simonwillison.net/2026/Mar/27/vibe-coding-swiftui/) \- March 27, 2026
- [Experimenting with Starlette 1.0 with Claude skills](https://simonwillison.net/2026/Mar/22/starlette/) \- March 22, 2026
- [Profiling Hacker News users based on their comments](https://simonwillison.net/2026/Mar/21/profiling-hacker-news-users/) \- March 21, 2026
- [Thoughts on OpenAI acquiring Astral and uv/ruff/ty](https://simonwillison.net/2026/Mar/19/openai-acquiring-astral/) \- March 19, 2026
- [GPT-5.4 mini and GPT-5.4 nano, which can describe 76,000 photos for $52](https://simonwillison.net/2026/Mar/17/mini-and-nano/) \- March 17, 2026
- [My fireside chat about agentic engineering at the Pragmatic Summit](https://simonwillison.net/2026/Mar/14/pragmatic-summit/) \- March 14, 2026
- [Perhaps not Boring Technology after all](https://simonwillison.net/2026/Mar/9/not-so-boring/) \- March 9, 2026
- [Can coding agents relicense open source through a “clean room” implementation of code?](https://simonwillison.net/2026/Mar/5/chardet/) \- March 5, 2026
- [Something is afoot in the land of Qwen](https://simonwillison.net/2026/Mar/4/qwen/) \- March 4, 2026
- [I vibe coded my dream macOS presentation app](https://simonwillison.net/2026/Feb/25/present/) \- Feb. 25, 2026
- [Writing about Agentic Engineering Patterns](https://simonwillison.net/2026/Feb/23/agentic-engineering-patterns/) \- Feb. 23, 2026
- [Adding TILs, releases, museums, tools and research to my blog](https://simonwillison.net/2026/Feb/20/beats/) \- Feb. 20, 2026
- [Two new Showboat tools: Chartroom and datasette-showboat](https://simonwillison.net/2026/Feb/17/chartroom-and-datasette-showboat/) \- Feb. 17, 2026
- [Deep Blue](https://simonwillison.net/2026/Feb/15/deep-blue/) \- Feb. 15, 2026
- [The evolution of OpenAI's mission statement](https://simonwillison.net/2026/Feb/13/openai-mission-statement/) \- Feb. 13, 2026
- [Introducing Showboat and Rodney, so agents can demo what they’ve built](https://simonwillison.net/2026/Feb/10/showboat-and-rodney/) \- Feb. 10, 2026
- [How StrongDM's AI team build serious software without even looking at the code](https://simonwillison.net/2026/Feb/7/software-factory/) \- Feb. 7, 2026
- [Running Pydantic's Monty Rust sandboxed Python subset in WebAssembly](https://simonwillison.net/2026/Feb/6/pydantic-monty/) \- Feb. 6, 2026
- [Distributing Go binaries like sqlite-scanner through PyPI using go-to-wheel](https://simonwillison.net/2026/Feb/4/distributing-go-binaries/) \- Feb. 4, 2026
- [Moltbook is the most interesting place on the internet right now](https://simonwillison.net/2026/Jan/30/moltbook/) \- Jan. 30, 2026
- [Adding dynamic features to an aggressively cached website](https://simonwillison.net/2026/Jan/28/dynamic-features-static-site/) \- Jan. 28, 2026
- [ChatGPT Containers can now run bash, pip/npm install packages, and download files](https://simonwillison.net/2026/Jan/26/chatgpt-containers/) \- Jan. 26, 2026
- [Wilson Lin on FastRender: a browser built by thousands of parallel agents](https://simonwillison.net/2026/Jan/23/fastrender/) \- Jan. 23, 2026

### Monthly briefing

Sponsor me for **$10/month** and get a curated email digest of the month's most important LLM developments.


Pay me to send you less!


[Sponsor & subscribe](https://github.com/sponsors/simonw/)

- [Disclosures](https://simonwillison.net/about/#disclosures)
- [Colophon](https://simonwillison.net/about/#about-site)
- ©
- [2002](https://simonwillison.net/2002/)
- [2003](https://simonwillison.net/2003/)
- [2004](https://simonwillison.net/2004/)
- [2005](https://simonwillison.net/2005/)
- [2006](https://simonwillison.net/2006/)
- [2007](https://simonwillison.net/2007/)
- [2008](https://simonwillison.net/2008/)
- [2009](https://simonwillison.net/2009/)
- [2010](https://simonwillison.net/2010/)
- [2011](https://simonwillison.net/2011/)
- [2012](https://simonwillison.net/2012/)
- [2013](https://simonwillison.net/2013/)
- [2014](https://simonwillison.net/2014/)
- [2015](https://simonwillison.net/2015/)
- [2016](https://simonwillison.net/2016/)
- [2017](https://simonwillison.net/2017/)
- [2018](https://simonwillison.net/2018/)
- [2019](https://simonwillison.net/2019/)
- [2020](https://simonwillison.net/2020/)
- [2021](https://simonwillison.net/2021/)
- [2022](https://simonwillison.net/2022/)
- [2023](https://simonwillison.net/2023/)
- [2024](https://simonwillison.net/2024/)
- [2025](https://simonwillison.net/2025/)
- [2026](https://simonwillison.net/2026/)