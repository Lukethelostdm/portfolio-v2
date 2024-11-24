---
title: "Creating an art gallery"
date: "2024-11-23"
author: "Luke"
tag: "React"
img: "/post-images/gallery.png"
---

**Overview**

*Project Difficulty 3/5*

This is a look at the technologies used to create an art gallery website for a freelance artist. I will also feature the ups and down I faced while working on this site, and the lessons I learned along the way.

**Concept**

As all my projects with clients start, I went to Figma where I created a simple wireframe of the website with the client to make sure we both had a clear outline and guide for what was to be created. The client wanted a simple website with a few sections: a home page, a dedicated gallery page, which featured a masonic style display of the images, a contact page, and a blog page. The client also wanted a simple and clean design that would be easy to navigate and would allow the user to easily find the information they were looking for. The site also had to be eye catching and interesting so that people would want to stay and explore the site and hire the artist.

**Process**

The process of creating the website was a bit more complicated than I had anticipated. I started by creating a simple header and footer component that would be used throughout the site. I then created a home page component that featured a hero section for the home page. The hero section displays a few select images from the client, as well as a few of their own blog pieces. Below the hero section is a call to action that links to the contact page. The home page also features a few testimonials from previous clients. 

The gallery page was a bit more complicated to create. The client wanted a masonic style display of the images, which I had to figure out how to create. I ended up trialling a few different ways of doing this with Tailwind, which is the CSS framework I was using for this project. I ended up using a few different column sections, with padding and gaps. This allowed me to create a grid that looked like a masonic display while keeping the code simple and clean. The images are then uploaded and pulled down from Cloudinary, which is the image hosting service I was using for this project. The images are then displayed on the page. Cloudinary itself was fairly simple and straight forward to learn, all it took was adding the relevant API keys, targeting the correct folder and adding the images. The client is also very satisfied with how easy and effortless it is.

The contact page. I do not know why, but this page was the most complicated to create. I think it was because I was trying to make it too complicated. I ended up using a form component from React Hook Form, which is a library that makes it easy to create forms in React. I also used a few different validation rules to make sure the form was filled out correctly. The form then sends an email to the client when it is submitted as well as to the artist. 

The blog page was fairly simple to create. I ended up choosing to do it as a Markdown file at the clients request, which made it easy to create and edit. I also used a few different libraries to make it easy to display the blog posts. The blog posts are then displayed on the page in a grid, with a few different sections for different types of posts. The client is also very happy with how easy it is to add new blog posts and for users to see what each post contains with the correct tags.

**Conclusion**

This project was fun overall, and I learned a lot from it. I took a deep dive into React, Tailwind, Next JS and feel like I have come out the stronger and better for it. I also learned a lot about the 
importance of planning and testing, as well as the importance of having a clear vision and understanding of what the client wants. I also learned that sometimes the simplest solutions are the best, and that sometimes it is better to keep things simple and not overcomplicate things. However that's a mistake i'll likely keep making, as it's a hard habit to break. Overall, I am very happy with how the website turned out and I think it is a great example of what can be achieved with the right tools and a clear vision.

**What's next?**

Well so far this year, I have been working hard on always taking my skills to the next level. I have no idea how I would actually rank myself on this scale, but I am always seeking to learn and improve. I don't really ever stop and I want to keep pushing myself to be the best I can be. I am always looking for new challenges and new projects to work on.

So , what's next? My next deep dive with be in databases. I have been putting it off for a while now, but I think it's time to take the plunge and learn more about databases. I have heard great things about MongoDB and I am excited to learn more about it. I am also excited to learn more about SQL and how to use it to create databases. I am also looking forward to learning more about how to use databases in React and how to connect them to my applications. I know a lot about some of them, nothing about others so it's time to change that, update my knowledge and take my skills to the next level. I am excited to see what the future holds and I am looking forward to the challenges and opportunities that come with it.

Bye for now!