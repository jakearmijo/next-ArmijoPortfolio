---
title: 'How I launched my portfolio site with Google Domains and Netlify'
date: '2021-05-16'
category: "Tutorial"
template: "blog-post"
tags: 'Google Domains, Netlify, Nextjs, Gatsby, DNS, Portfolio Site'
---
<Tag isPill size="large" hue="red">WELCOME!</Tag>

<br/>
<br/>

## How I launched my portfolio site with Google Domains and Netlify
____________________________________________________________

<p>
Hello Everyone, A little while ago I knew I wanted to create my website. I looked at a bunch of different tech options and tried to figure out which one would be best. I knew Next.js and Gatsby were popular choices so I mainly researched those. After Bootcamp, I did make a full React-based portfolio but it was very large and slow on load time. I knew I could research how to improve this but I thought I would change the pace and try something new. I was reading about how server-side rendering would be better for load time. I chose Next over Gatsby just because I thought it was a tad bit newer and I enjoyed the tutorials while I was going through them. So I converted the React-based project into a Next.js project and now I am using that going forward.
</p>
<p>
When I started to research domains and where to purchase them. I checked GoDaddy first (just because I'm 30 and I've always seen and heard their name) I also stumbled into Google Domains which I quickly leaned towards as the price was even with the range I was seeing and I wanted to have something from a brand I knew. I also came across sites such as  A2, Bluehost, Netlify, or Namecheap. I honestly have no advice as I'm sure if you have made it this far the process is decently simple with any provider you chose. In the end, the final check-out price was $12 for 1 year that I set to reoccurring. There was also an option on there to have a "work" email address. For example, you can choose info@jakearmijo.com or something along those lines. This was added for Google Workspace and was $6 per user per month and came with 30GB of cloud storage. I thought about it for our family pictures cause my wife has been searching for a cloud option to store all of our pictures on. If anyone has any good experiences with any cloud-based photo storage such as google photos or amazon photos or anything please DM on LinkedIn
</p>
<div>
  <img
    class="border mobile"
    width="100%"
    alt="filler"
    title="filler"
    src="http://www.fillmurray.com/460/300"
    data-canonical-src="/images/ffillerrrrrr.png"
  />
</div>
<p>
I had already been toying with Netlify and my vanilla React portfolio before this transition. I watched an <a href='https://explorers.netlify.com/learn/nextjs' target='_blank'>incredible tutorial</a> by Cassidoo and I applied it to my site in order to get it up and running with a basic Netlify URL. The process for Netlify to add my custom domain after I had purchased it from google domains is as follows
</p>
</br>

#### Netlify

<div class="columns">
  <div class="full">
    <ol>
      <li> In your Netlify console, navigate to your site and click Domain Settings. Click the green button "Add custom domain".</li>
      <li> It will prompt you to provide the name of the domain you have bought. For example http://www.jakearmijo.com.</li>
      <li> Verify that you are the owner of the domain. </li>
      <li> Click "verify".</li>
      <li> You will be redirected to your domain settings where you will see your domain. You will see that your domain will have a warning, to ask you to "check your DNS configuration". Click to Options -> Set Up Netlify DNS.</li>
      <li> Add domain - Netlify will ask you to re-verify your domain name</li>
      <li> Add DNS records - The DNS records for your Netlify sites will be configured automatically. I did not have an email account with the domain so I skipped this part.</li>
      <li> Activate Netlify DNS - Nelify will give you names of their name savers. Keep them open and head to google domains.</li>
    </ol>
  </div>
  <div class="third right">
    <img
      class="border"
      width="80%"
      alt="Tester"
      title="Tester"
      src="http://www.fillmurray.com/g/155/300"
      data-canonical-src="/images/tester.png"
    />
  </div>
</div>

</br>

#### Google Domains
<ol>
  <li>Navigate to your domain settings</li>
  <li>Click DNS
  <li>In the NameServers box, select the option "Use custom nameservers". Before I was able to add the custom domains, it made me disable DNSSEC.
  <li>Add the name servers from Netlify to the Google name servers.
</ol>

</br>

Congrats! Your domain is set up - it may take more time but mine was ready within minuets. <a href='http://www.jakearmijo.com'>http://www.jakearmijo.com</a> was born.


Netlify will also set up the HTTPS certificate via https://letsencrypt.org/donate/. This process took a little longer but when I awoke in the morning I had the HTTPS before the URL and my site was not receiving the privacy warning. 


Cheers,

Jake Armijo <bold>|</bold> Full Stack Software Engineer
Armijojake@yahoo.com
Connect with me on <a href='https://www.linkedin.com/in/jake-armijo/'>LinkedIn</a>
Schedule a meeting with me on <a href='https://calendly.com/armijojake/meeting'>Calendly</a>

