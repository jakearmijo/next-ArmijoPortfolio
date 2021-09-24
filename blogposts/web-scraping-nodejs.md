---
id: 'web-scraping-nodejs'
title: 'Web Scraping and how to utilize reduce and map inside chrome dev tool'
date: '2021-04-30'
category: "Tutorial"
template: "blog-post"
tags: 'Google Dev Tools, Reduce, Map, Nodejs, Web Scraping'
---
<div class="border">

## *WIP* - Web Scraping and how to use reduce and map inside google dev tools console</h2>

Let say I needed to pull specfific information off of webpage. I could utilize web scraping. Web scraping, web harvesting, or web data extraction is data scraping used for extracting informaion from websites. Although it can be used for a wide variety of things (some good and some not good) some Useful examples include:
<p class="border">
- Website URLS
</br>
- Product Prices (Personal use only)
</br>
- Betting Odds?
</br>
- Market research
</br>
- Fun and Creativity
</p>
</br>

You should ask yourself: "Could a script take less time with more results then doing this **by hand** ?" If the answer is yes, then you should write a script to achieve this. 


Although it is not as advanced as a full web sraping script a simple query selector is a very powerful tool. Paired with a reduce and a map and you have the power to grab a bunch of useful targeted information off a webpage.

On the other hand, sometimes it is much easier to just grab the few results that are listed with the ole copy paste. Selectors are **not** always a good idea if you cannot find them quick and have them achieve lots of results.

In the below examples, I will showcase how to use a **css selector** to grab info off a webpage. In this examples it could be faster to use this technique, but doing it the long way (copy paste each item) will always be available. 
**2 EXAMPLES ->** 1 reduce 1 map 
<div class="border">
  <p>
In these example we are going to be imagining we are trying to grab a bunch of different eCommerce websites to save for a later date. In a later section we might export all these results to a csv file, but for now will jusst be copying and pasting into a seperate .csv we will open up in a new vs code window. 
<p class="listItem">1.) Open Chrome and navigate to <a href='https://www.featuredcustomers.com/vendor/woocommerce/case-studies/all' target='_blank'>featuredcustomers.com</a>. This is the website we will be grabbing all of our URLs from.</p>

- MAP EXAMPLE -> can add in the .com to query and show that as well
  Code -> 
  Array.from(document.querySelectorAll('.caseStudy-card-heading > a')).map(({title, innerHTML} ) => ({ URL: "https://" + title + ".com".split(" ").join(), name: title, source: 'https://www.bigcommerce.com/case-study/'} ))

</p>
  <img
      class="border"
      width="50px"
      height="50px"
      alt="Netlify"
      title="Netlify"
      src='{require("https://download.logo.wine/logo/Netlify/Netlify-Logo.wine.png")}'
      />
</div>

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

Or you can skip everything and just spend around $500 USD to buy the information or data you want from a site that already has been doing this for years.
</div>