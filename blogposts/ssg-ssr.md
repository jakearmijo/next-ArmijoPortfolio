---
title: 'How I launched my portfolio site with Google Domains and Netlify'
date: '2021-04-20'
---

A little while ago I knew I wanted to create my website. I looked at a bunch of different tech options and tried to figure out which one would be best. I knew Next.js and Gatsby were popular choices so I mainly researched those. After Bootcamp, I did make a full React-based portfolio but it was very large and slow on load time. I knew I could research how to improve this but I thought I would change the pace and try something new. I was reading about how server-side rendering would be better for load time. I chose Next over Gatsby just because I thought it was a tad bit newer and I enjoyed the tutorials while I was going through them. So I converted the React-based project into a Next.js project and now I am using that going forward. 

When I started to research domains and where to purchase them. I checked GoDaddy first (just because I'm 30 and I've always seen and heard their name) I also stumbled into Google Domains which I quickly leaned towards as the price was even with the range I was seeing and I wanted to have something from a brand I knew. I also came across sites such as  A2, Bluehost, Netlify, or Namecheap. I honestly have no advice as I'm sure if you have made it this far the process is decently simple with any provider you chose. In the end, the final check-out price was $12 for 1 year that I set to reoccurring. There was also an option on there to have a "work" email address. For example, you can choose info@jakearmijo.com or something along those lines. This was added for Google Workspace and was $6 per user per month and came with 30GB of cloud storage. I thought about it for our family pictures cause my wife has been searching for a cloud option to store all of our pictures on. If anyone has any good experiences with any cloud-based photo storage such as google photos or amazon photos or anything please DM on LinkedIn

I had already been toying with Netlify and my vanilla React portfolio before this transition. I watched an incredible tutorial ( link to - https://explorers.netlify.com/learn/nextjs) by Cassidoo and I applied it to my site to get it up and running and a basic Netlify URL. The process for Netlify to add my custom domain after I had purchased it from google domains is as follows

Netlify
1.) In your Netlify console, navigate to your site and click Domain Settings. Click the green button "Add custom domain".
2.) It will prompt you to provide the name of the domain you have bought. For example http://www.jakearmijo.com.
3.) verify that you are the owner of the domain. 
4.) Click "verify".
5.) You will be redirected to your domain settings where you will see your domain. You will see that your domain will have a warning, to ask you to "check your DNS configuration". Click to Options -> Set Up Netlify DNS.
6a.) Add domain - Netlify will ask you to re-verify your domain name
6b.) Add DNS records - The DNS records for your Netlify sites will be configured automatically. I did not have an email account with the domain so I skipped this part.
6c.) Activate Netlify DNS - Nelify will give you names of their name savers. Keep them open and head to google domains.

Google Domains
1.) Navigate to your domain settings
2.) Click DNS
3.) In the NameServers box, select the option "Use custom nameservers". Before I was able to add the custom domains, it made me disable DNSSEC.
4.) Add the name servers from Netlify to the Google name servers.

Congrats! Your domain is set up - it says it can take up to 48 hours, but in my experience, it's pretty speedy. http://www.jakearmijo.com took 5 minutes to kick in.


Netlify will also set up the HTTPS certificate via https://letsencrypt.org/donate/. This process took a little longer but when I awoke in the morning I had the HTTPS before the URL and my site was not receiving the privacy warning. 


Cheers,
Jake Armijo


We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.