---
id: 'web-scraping-nodejs'
title: 'Web Scraping and how to utilize reduce and map inside chrome dev tool'
date: '2021-04-30'
category: "Tutorial"
template: "blog-post"
tags: 'Google Dev Tools, Reduce, Map, Nodejs, Web Scraping'
---

## WIP - Web Scraping and how to use reduce and map inside google dev tools console

Let's say I needed to pull specific information off of a webpage. I could utilize web scraping. Web scraping, web harvesting, or web data extraction is [data scraping](https://www.cloudflare.com/learning/bots/what-is-data-scraping/) used for extracting information from websites. Although it can be used for a wide variety of things (some good and some not good) some useful examples include:

- Website URLs
- Product Prices (Personal use only)
- Betting Odds?
- Market research
- Fun and Creativity

You should ask yourself: "Could a [script](https://realpython.com/python-web-scraping-practical-introduction/) take less time with more results than doing this **by hand** ?" If the answer is yes, then you should write a [script](https://realpython.com/python-web-scraping-practical-introduction/) to achieve this.

Although it is not as advanced as a full web scraping [script](https://realpython.com/python-web-scraping-practical-introduction/) a simple [query selector](https://www.w3schools.com/jsref/met_document_queryselector.asp) is a very powerful tool. Paired with a [reduce](https://www.w3schools.com/jsref/jsref_reduce.asp#:~:text=The%20reduce()%20method%20executes,not%20change%20the%20original%20array.) and a [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) and you have the power to grab a bunch of useful targeted information off a webpage.

On the other hand, sometimes it is much easier to just grab the few results that are listed with the ole copy-paste. Selectors are **not** always a good idea if you cannot find them quickly and have them achieve lots of results.

In the below examples, I will showcase how to use a **CSS selector** to grab info off a webpage. In these examples, it could be faster to use this technique, but doing it the long way (copy-paste each item) will always be available.

In the examples we are going to be imagining we are trying to grab a bunch of different [eCommerce](https://sell.amazon.com/learn/what-is-ecommerce) websites to save for a later date. In a later section we might export all these results to a CSV file, but for now, will just be copying and pasting them into a separate .csv we will open up in a new vs code window.
  
  1. Open Chrome and navigate to [featuredcustomers.com](https://www.featuredcustomers.com/vendor/woocommerce/case-studies/all). This is the website we will be grabbing all of our URLs from.

### MAP EXAMPLE -> can add in the .com to query and show that as well

```Java[script](https://realpython.com/python-web-scraping-practical-introduction/)
Array.from(document.querySelectorAll('.caseStudy-card-heading > a'))
    .map(({title, innerHTML} ) => ({ URL: "https://" + title + ".com"
    .split(" ")
    .join(), name: title, source: 'https://www.bigcommerce.com/case-study/'}))`
```

### REDUCE -> [Example we site to scrap](https://www.silksoftware.com/work/)

```Java[script](https://realpython.com/python-web-scraping-practical-introduction/)
Array.from(document.querySelectorAll('.content-center')).reduce((previous, element) => {
    console.log("element", element)
    const { href } = element.querySelectorAll('a')
    const { innerText } = element.querySelectorAll('.category')
      return [...previous,{ url: undefined, name: innerHTML, source: 'https://netalico.com/', provider:innerText }]}, [])`
```

#### NOTES

Or you can skip everything and just spend around $500 USD to buy the information or data you want from a site that already has been doing this for years.

</br>

[Jake Armijo](https://www.jakearmijo.com/) **|** Full Stack Software Engineer
</br>

Connect with me on [LinkedIn](https://www.linkedin.com/in/jake-armijo/)

</br>

Schedule a meeting with me on [Calendly](https://calendly.com/armijojake/meeting)
