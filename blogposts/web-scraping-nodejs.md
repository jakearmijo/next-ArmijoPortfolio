---
title: 'Web Scraping and how to utilize reduce and map inside chrome dev tool'
date: '2021-04-30'
category: "Tutorial"
template: "blog-post"
tags: 'Google Dev Tools, Reduce, Map, Nodejs, Web Scraping'
---

This is **WEB SCRAPING AND HOW TO USE REDUCE AND MAP INSIDE CONSOLE** take the data and **WRITE TO A CSV FILE.**.

You can use Nodejs for this work, Useful for including:

- Website URLS
- E-commerce product listings
- Betting Odds?
- Fun and Creativity

You should ask yourself: "Could a script take less time with more results then doing this **by ahnd** ?" If the answer is yes, then you should write a query selector and utilize map and reduce to grab all the results.

On the other hand, sometime it is much easier to just grab the few results that are listed. Scripts are **not** always a good idea if you cannot make the quick and have them achieve lots of results.

In these cases above, you can use **Node Scripts**. It will be faster, but doing it the long way will always be available. Or you can skip everything and just spend around $500 USD to buy the domains or data you want from a site that already has been doing this for years.

**2 EXAMPLES ->** 1 reduce 1 map 
 - MAP -> https://www.featuredcustomers.com/vendor/woocommerce/case-studies/all	-> can add in the .com to query and show that as well
Code -> 
Array.from(document.querySelectorAll('div.logo img'))
    .map(({title, innerHTML} ) => ({ URL: "https://" + title + ".com".split(" ").join(), name: title, source: 'https://www.featuredcustomers.com/vendor/woocommerce/case-studies'} ))

 - REDUCE -> https://www.silksoftware.com/work/
Code -> 
Array.from(document.querySelectorAll('.content-center'))
    .reduce((previous, element) => {
    console.log("element", element)
      const { href } = element.querySelectorAll('a')
      const { innerText } = element.querySelectorAll('.category')
      return [
        ...previous,
          { url: undefined, name: innerHTML, source: 'https://netalico.com/', provider:innerText }
        ]
    }, [])

**NOTES** —> —> —>  