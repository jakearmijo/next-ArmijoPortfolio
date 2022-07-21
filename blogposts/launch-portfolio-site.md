---
id: 'launch-portfolio-site'
title: 'How I launched my portfolio site with Google Domains and Netlify'
date: '2022-05-16'
category: "Tutorial"
template: "blog-post"
tags: 'Google Domains, Netlify, Nextjs, Gatsby, DNS, Portfolio Site'
---
## How I launched my portfolio site with Google Domains and Netlify

____________________________________________________________
  
Hello Everyone, I knew I wanted to create my website a little while ago. I looked at different tech options and tried to select which one would be best. I knew **[Next.js](https://nextjs.org/)** and **[Gatsby](https://www.gatsbyjs.com/)** were popular choices so I mainly researched those. After Bootcamp, I did make a full React-based portfolio, but it was large and slow on load time. I knew I could research how to improve this, but I thought I would change the pace and try something new. I was reading about how server-side rendering would be better for load time. I chose Next over Gatsby because I thought it was a bit newer. I enjoyed the Next tutorials while going through them, so I converted the React-based project into a Next.js project.

</br>

When I started to research domains and where to purchase them, I checked GoDaddy first (just because I'm 30 and I've always seen and heard their name) I also stumbled into Google Domains which I quickly leaned towards as the price was even with the range I was seeing and I wanted to have something from a brand I knew. I also came across sites such as  A2, Bluehost, Netlify, or Namecheap. I honestly have no advice as I'm sure if you have made it this far the process is decently simple with any provider you chose. In the end, the final check-out price was $12 for 1 year that I set to reoccurring. There was also an option on there to have a "work" email address. For example, you can choose info@jakearmijo.com or something along those lines. This was an addon for Google Workspace and was $6 per user per month and came with 30GB of cloud storage.

</br>

I watched this **[incredible tutorial](https://explorers.netlify.com/learn/nextjs)** by Cassidoo and I applied it to my site in order to get it up and running with a basic Netlify URL. The process for Netlify to add my custom domain after I had purchased it from google domains is posted below.

### Step By Step How To - Netlify

1. In your Netlify console, navigate to your site and click Domain Settings. Click the green button "Add a custom domain".
2. It will prompt you to provide the name of the domain you have bought. For example **<https://www.jakearmijo.com>**.
3. Verify that you are the owner of the domain.
4. Click "verify".
5. You will be redirected to your domain settings where you will see your domain. You will see that your domain will have a warning, asking you to "check your DNS configuration". Click to Options -> Set Up Netlify DNS.
6. Add domain - Netlify will ask you to re-verify your domain name
7. Add DNS records - The DNS records for your Netlify sites will be configured automatically. I did not have an email account with the domain so I skipped this part.
8. Activate Netlify DNS - Nelify will give you the names of their name savers. Keep them open and head to google domains.

</br>

## Google Domains

### Step By Step How To - Google

  1. Navigate to your domain settings
  2. Click DNS
  3. In the NameServers box, select the option "Use custom nameservers". Before I was able to add the custom domains, it made me disable DNSSEC.
  4. Add the name servers from Netlify to the Google name servers.

</br>

Congrats! Your domain is set up - it may take more time but mine was ready within minutes. That is how [https://www.jakearmijo.com](https://www.jakearmijo.com) was born.

Netlify will also set up the HTTPS certificate via [letsencrypt.org](https://letsencrypt.org/donate/). This process took a little longer but when I awoke in the morning I had the HTTPS before the URL and my site was not receiving a privacy warning.

Cheers,

Jake Armijo **|** Full Stack Software Engineer
</br>

Connect with me on [LinkedIn](https://www.linkedin.com/in/jake-armijo/)

</br>

Schedule a meeting with me on [Calendly](https://calendly.com/armijojake/meeting)
