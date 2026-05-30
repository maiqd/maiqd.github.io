# Learn Page Templates

Replace `{slug}`, `{title}`, `{description}`, `{videoId}`, `{videoTitle}`, `{authorLine}`, `{navContentLabel}`.

## `src/learn/{slug}/index.njk`

```yaml
---
layout: learn-article.njk
title: {title} · Learn · Mai QD
description: {description}
permalink: /learn/{slug}/index.html
bodyClass: learn-page learn-article learn-article--wide
ambientBlobs: true
navAriaLabel: Learn and page sections
navLinks:
  - id: overview-sec
    label: Overview
  - id: video-sec
    label: Video
  - id: content-sec
    label: {navContentLabel}
  - id: quiz-sec
    label: Quiz
  - id: study-sec
    label: Study
scriptsInclude: article-scripts/{slug}.njk
---
{% include "article-bodies/{slug}.njk" %}
```

Add `mermaid: true` only when body contains mermaid diagrams.

## `src/_data/learnArticles.json` entry

```json
{
  "title": "{title}",
  "href": "/learn/{slug}/",
  "blurb": "{one-line summary of notes + quiz/flashcards}"
}
```

Insert into `articles` array (newest first or match hub order preference).

## Body skeleton — `article-bodies/{slug}.njk`

```html
<header id="overview-sec" class="learn-section">
    <h1>{Heading with <em>emphasis</em>}</h1>
    <div class="subtitle">{one-line hook}</div>
    <div class="author-tag">{authorLine}</div>
</header>

<main class="layout-grid layout-grid--stacked">

    <section id="content-sec" class="learn-section learn-section--primary">
        <div id="video-sec" class="video-wrapper learn-section">
            <div class="video-container">
                <iframe id="yt-player"
                    src="https://www.youtube.com/embed/{videoId}?enablejsapi=1"
                    title="{videoTitle}"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
            <div class="video-caption">Source video — study notes and quiz below</div>
        </div>

        <div class="organic-card card-span organic-card--content">
            <div class="tab-btn-group" role="tablist">
                <button class="tab-btn active" role="tab" aria-selected="true" onclick="switchTab('tab1')">Tab 1</button>
                <button class="tab-btn" role="tab" aria-selected="false" onclick="switchTab('tab2')">Tab 2</button>
            </div>

            <div id="tab-tab1" class="tab-content active" role="tabpanel">
                <h2 class="section-title"><!-- svg --></h2>
                <ul class="bullet-list"><li>...</li></ul>
            </div>

            <div id="tab-tab2" class="tab-content" role="tabpanel">
                <h2 class="section-title"><!-- svg --></h2>
                <ul class="bullet-list"><li>...</li></ul>
            </div>
        </div>
    </section>

    <section id="quiz-sec" class="learn-section learn-section--block" aria-labelledby="quiz-heading">
        <h2 id="quiz-heading" class="learn-block-title">Quick recall quiz</h2>
        <div class="organic-card card-span organic-card--content">
            <div id="quiz-card">
                <div id="quiz-container">
                    <div class="quiz-intro">
                        <div class="quiz-title">Quick recall</div>
                        <p style="text-align: center; color: var(--muted-foreground); margin: 0;">N questions on …</p>
                        <div class="divider"></div>
                    </div>

                    <div class="question-box active" id="q-0">
                        <span class="question-num">Question 1 of N</span>
                        <div class="question-text">…</div>
                        <div class="options-list" role="radiogroup">
                            <div class="option-item" tabindex="0" onclick="selectOption(0, 0)"><div class="radio-circle"></div><span>…</span></div>
                            <div class="option-item" tabindex="0" onclick="selectOption(0, 1)"><div class="radio-circle"></div><span>…</span></div>
                        </div>
                    </div>
                    <!-- q-1 … q-N-1 -->

                    <div id="feedback-panel" class="quiz-feedback">…</div>
                    <div class="btn-row">…</div>
                </div>

                <div id="results-container" class="results-box">…</div>
            </div>
        </div>
    </section>

    <section id="study-sec" class="learn-section learn-section--block" aria-labelledby="study-heading">
        <h2 id="study-heading" class="learn-block-title">Study tools</h2>
        <div class="organic-card card-span organic-card--content">
            <h3 class="section-title">Flashcards</h3>
            <div class="flashcard-grid">
                <button type="button" class="flashcard" onclick="toggleFlashcard(this)" onkeydown="flashcardKey(event, this)">
                    <div class="flashcard__inner">
                        <div class="flashcard__face flashcard__face--front">
                            <span class="flashcard__label">Term</span>
                            <span class="flashcard__term">…</span>
                        </div>
                        <div class="flashcard__face flashcard__face--back">
                            <span class="flashcard__label">Definition</span>
                            <p style="margin: 0;">…</p>
                        </div>
                    </div>
                </button>
            </div>

            <h3 class="section-title" style="margin-top: 2.5rem;">Reflection</h3>
            <ol class="reflection-list">
                <li><strong>Topic:</strong> Question text. Optional guidance paragraph.</li>
            </ol>
        </div>
    </section>

</main>

<footer>
    <div class="footer-content">
        <p>Study notes derived from <a href="https://www.youtube.com/watch?v={videoId}" style="color: var(--primary);">…</a>.</p>
    </div>
</footer>
</div>
```

## Script skeleton — `article-scripts/{slug}.njk`

Copy full script from `src/_includes/article-scripts/openclaw-use-cases.njk` and replace only `quizData` array.

```javascript
const quizData = [
  { correctIndex: 0, explanation: "…" },
];
```

`correctIndex` is zero-based option position in the matching `#q-N` block.

## MC question mapping example

Markdown:
```
**1. Which org built Hermes Agent?**
* A) OpenAI
* B) Nous Research
* **Correct Answer:** B
```

HTML options in order A=0, B=1 → `correctIndex: 1`

Direct-answer markdown:
```
**1. Which org built Hermes Agent?**
* **Answer:** Nous Research
```

Rewrite as MC with Nous Research as one option + 3 plausible distractors.
