---
layout: post
title: Matching in PHP8
tags: PHP PHP8 programming
category: programming
eye_catch: https://visualhunt.com/photos/m/8/contando-dinheiro-1.jpg
off_site: https://laravel-news.com/match-expression-php-8
---

I'm getting quite excited with each update or announcement I hear about the upcoming PHP version 8. Sometimes I miss announcements, so I'm glad to see other people discussing them too.

Paul at Laravel News shared about the upcoming [Match Expression](https://laravel-news.com/match-expression-php-8) that will be coming with PHP8.

<!--more-->

It solves some common situations where you have to choose between a complicated set of `if/then/else` statements or a `switch` statement, each of which ends up being overcomplicated for what should be the simple task of choosing a value based on another value.

The example given on Laravel News shows just how much more concise the syntax is:

```php
// Before
switch ($this->lexer->lookahead['type']) {
    case Lexer::T_SELECT:
        $statement = $this->SelectStatement();
        break;

    case Lexer::T_UPDATE:
        $statement = $this->UpdateStatement();
        break;

    case Lexer::T_DELETE:
        $statement = $this->DeleteStatement();
        break;

    default:
        $this->syntaxError('SELECT, UPDATE or DELETE');
        break;
}

// After
$statement = match ($this->lexer->lookahead['type']) {
    Lexer::T_SELECT => $this->SelectStatement(),
    Lexer::T_UPDATE => $this->UpdateStatement(),
    Lexer::T_DELETE => $this->DeleteStatement(),
    default => $this->syntaxError('SELECT, UPDATE or DELETE')
};
```

I'm looking forward to using it!

Photo credit:
