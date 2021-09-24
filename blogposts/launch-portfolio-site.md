---
id: 'launch-portfolio-site'
title: 'How I launched my portfolio site with Google Domains and Netlify'
date: '2021-05-16'
category: "Tutorial"
template: "blog-post"
tags: 'Google Domains, Netlify, Nextjs, Gatsby, DNS, Portfolio Site'
---
## How I launched my portfolio site with Google Domains and Netlify
____________________________________________________________

Hello Everyone, A little while ago I knew I wanted to create my website. I looked at a bunch of different tech options and tried to figure out which one would be best. I knew Next.js and Gatsby were popular choices so I mainly researched those. After Bootcamp, I did make a full React-based portfolio but it was very large and slow on load time. I knew I could research how to improve this but I thought I would change the pace and try something new. I was reading about how server-side rendering would be better for load time. I chose Next over Gatsby just because I thought it was a tad bit newer and I enjoyed the tutorials while I was going through them. So I converted the React-based project into a Next.js project and now I am using that going forward.

When I started to research domains and where to purchase them. I checked GoDaddy first (just because I'm 30 and I've always seen and heard their name) I also stumbled into Google Domains which I quickly leaned towards as the price was even with the range I was seeing and I wanted to have something from a brand I knew. I also came across sites such as  A2, Bluehost, Netlify, or Namecheap. I honestly have no advice as I'm sure if you have made it this far the process is decently simple with any provider you chose. In the end, the final check-out price was $12 for 1 year that I set to reoccurring. There was also an option on there to have a "work" email address. For example, you can choose info@jakearmijo.com or something along those lines. This was added for Google Workspace and was $6 per user per month and came with 30GB of cloud storage. I thought about it for our family pictures cause my wife has been searching for a cloud option to store all of our pictures on. If anyone has any good experiences with any cloud-based photo storage such as google photos or amazon photos or anything please DM on LinkedIn

<div class="border">
  <img
      class="border"
      alt="Netlify"
      title="Netlify"
      src="/images/netlify-logo.png"
      data-canonical-src="/images/netlify-logo.png"
    />
</div>
<p>
I had already been toying with Netlify and my vanilla React portfolio before this transition. I watched an <strong><a href='https://explorers.netlify.com/learn/nextjs' target='_blank'>incredible tutorial</a></strong> by Cassidoo and I applied it to my site in order to get it up and running with a basic Netlify URL. The process for Netlify to add my custom domain after I had purchased it from google domains is as follows
</p>
</br>
  <div class="list">
    <ol>
      <p class="listItem">1.) In your Netlify console, navigate to your site and click Domain Settings. Click the green button "Add custom domain".</p>
      <p class="listItem">2.) It will prompt you to provide the name of the domain you have bought. For example <strong>http://www.jakearmijo.com</strong>.</p>
      <p class="listItem">3.) Verify that you are the owner of the domain. </p>
      <p class="listItem">4.) Click "verify".</p>
      <p class="listItem">5.) You will be redirected to your domain settings where you will see your domain. You will see that your domain will have a warning, to ask you to "check your DNS configuration". Click to Options -> Set Up Netlify DNS.</p>
      <p class="listItem">6.) Add domain - Netlify will ask you to re-verify your domain name</p>
      <p class="listItem">7.) Add DNS records - The DNS records for your Netlify sites will be configured automatically. I did not have an email account with the domain so I skipped this part.</p>
      <p class="listItem">8.) Activate Netlify DNS - Nelify will give you names of their name savers. Keep them open and head to google domains.</p>
    </ol>
  </div>
  <div class="border">
    <img
      class="border"
      alt="Google Domains"
      title="Google Domains"
      src="/images/google-domains-logo.png"
      data-canonical-src="/images/google-domains-logo.png"
    />
  </div>
</br>

### Google Domains
<ol>
  <p className='listItem'>1.) Navigate to your domain settings</p>
  <p className='listItem'>2.) Click DNS
  <p className='listItem'>3.) In the NameServers box, select the option "Use custom nameservers". Before I was able to add the custom domains, it made me disable DNSSEC.
  <p className='listItem'>4.) Add the name servers from Netlify to the Google name servers.
</ol>

</br>

Congrats! Your domain is set up - it may take more time but mine was ready within minuets. <a href='http://www.jakearmijo.com'>http://www.jakearmijo.com</a> was born.


Netlify will also set up the HTTPS certificate via https://letsencrypt.org/donate/. This process took a little longer but when I awoke in the morning I had the HTTPS before the URL and my site was not receiving the privacy warning. 


Cheers,

Jake Armijo <bold>|</bold> Full Stack Software Engineer
Armijojake@yahoo.com
Connect with me on <a href='https://www.linkedin.com/in/jake-armijo/'>LinkedIn</a>
Schedule a meeting with me on <a href='https://calendly.com/armijojake/meeting'>Calendly</a>

