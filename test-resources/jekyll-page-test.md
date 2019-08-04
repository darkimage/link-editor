---
layout : single
title: Resources
permalink: /resources/
toc: true
toc_sticky: true
toc_label: "My Table of Contents"
toc_icon: "bookmark"
---

## A Collection of Useful Resources

> Hope u enjoy learning

This section is a collective collection of useful resources for people to find, divided by meaningful sections and each with a quick proper explanation.<br>
Collective meaning you can help increase this collection with your own links: to know how, you can take a look at [this section here](/how-to-contribute/).<br>
The resources you can find span a moltitude of arguments, but are mostly focused on Game Developement (you might find something else though, like webdev and general programming).

With each resource there will be a quick little explanation, just to know what that resource is about.

Every resource has also been categorized with a tag, saying the median level of knowledge required and/or the difficulty understanding/implementing/using said resource.<br>
These are very subjective thoughts so don't be scared to check them anyway.









## C++

> Because there are never enough c++ resources

<a class="btn disabled btn--success btn--small">Beginner</a> [Learn C++][learn c++]<br>
Obviusly you need to learn C++, so here's a good website for this.


<a class="btn disabled btn--danger btn--small">Expert</a> [C++ Best Practices][cpp-best]<br>
After you've "learned" how to code in C++, you definitely need to know what to do and what to **not** do: this document is exactly what you need.

<a class="btn disabled btn--warning btn--small">Intermediate</a> [C++ FAQ][cpp-faq]<br>
let's face it, C++ is hard, and you might have tons of questions to which you don't know the answer. Surely someone had your same problem and could solve it, right? *Right?*

<a class="btn disabled btn--danger btn--small">Expert</a> [C++11/14/17/20 Cheatsheet][cpp-cheatsheet]<br>
Since every release adds stuff, you need to know what was added, so here's a collection with explanation of the latest introductions to the language, starting from C++11.







## Game Engines

> Look at what people did right, and what people did wrong. Then do them from scratch cause "I wanna learn"


<a class="btn disabled btn--warning">Intermediate</a> [Creating a tools pipeline for Horizon Zero Dawn][hzd-engine-tools]<br>
Horizon Zero Dawn is an amazing game, and since they use a custom engine they have to have their own tools. This is the team's talk about those tools.<br>
**fun fact**:*this blog is inspired exactly by their blog, even though it's really different.*


<a class="btn disabled btn--success">Beginner</a> [Musings on cross-platform graphics engine architectures - Pt.1][musings]<br>
This is a blog post talking about engine architecture, mainly about what the goals should be and how to reach them. There's also a [Part 2][musings-pt2] talking about MultiThreading, so check that out too.<br>
The autor said he would do also a part 3 and 4, but they never came out, unfortunately.

<a class="btn disabled btn--success">Beginner</a> [An Analysis of Minecraft-like Engines][minecraft-engine-analysis]<br>
This is a blogpost talking about the common features of Minecraft-like Engines, *aka Voxel Engines*. You can also find some ways to optimize yours, with benchmarks too!

<a class="btn disabled btn--success">Beginner</a> [Modern Game Engine Architectures][modern-game-engine]<br>
This is a quick little post about the main engine architecture (*or at least, the one everyone talks about*). There's also a little tour on Functional Reactive Programming, if you're interested.

<a class="btn disabled btn--warning">Intermediate</a> [Nomad Game Engine][nomad game engine]<br>
This is a little engine, called Nomad. In this blog the author *should have* talked about his engine, but since this blog got abandoned it's just a collection of 8 Articles, mainly centered around ECS. I think this is still a good thing, since I believe this to be the **best** resource about ECS, going from how it works, divind deep into the implementation.

<a class="btn disabled btn--warning">Intermediate</a> [Component Based Engine Design][component-based-engine]<br>
"Component Based Engine" is just another name for the same architecture, the ECS, or Entity-Component-System.<br>
    Again, this is a really good resource on that.

<a class="btn disabled btn--success">Beginner</a> [Nick's Voxel Blog: Engine Overview][nick-engine]<br>
    This is blogpost about a Voxel Engine implementation. There are other cool resources on that blog, some of them featured in this collection.

<a class="btn disabled btn--success">Beginner</a> [Writing a Game Engine in 2017][engine-2017]<br>
    This is a blogpost about writing an engine. As it says it's the state of engine creation in 2017, but I believe some, *if not most*, of the things mentioned here still apply, so definitely check it out!


<a class="btn disabled btn--success">Beginner</a> [Blog Entries: a Voxel Project][blog-entries]<br>
    This is a **HUGE** blog mainly about a Voxel Engine, going from basically scratch to a really good Minecraft-like world/engine.

<a class="btn disabled btn--success">Beginner</a> [Scene Graph][scene-graph]<br>
    A tutorial about a specific component of an Engine: Scene Graphs

<a class="btn disabled btn--warning">Intermediate</a> [Raycasting Engine in C++][ray-engine-cpp]<br>
    A raycasting engine in C++




## Data Structures and Algorithms

> Programming is the art of manipulating data through algorithms, so here's a bunch of them!

<a class="btn disabled btn--danger">Expert</a> [Z-order Curves][z-order]<br>
Z-order curves are a "math tool" to fill space (yes, that's their other name: Space Filling Curves).<br>
You can use these to fill an infinite plane in partitions that you can istantly identify, so you can use these to quickly access a chunk of your terrain.<br>
There are many types of Space Filling Curves, and this is just one of them, but the most famoust is definitely the next one:
  
<a class="btn disabled btn--danger">Expert</a> [Hilbert Curves][hilbert-curve]<br>
Again, this is just another type of Space Filling Curve, so you can quickly partition an infinite plane with unique IDs.
    
<a class="btn disabled btn--danger">Expert</a> [Fortune's algorithm - Wikipedia][fortune-wiki]<br>
Fortune's algorithm is an algorithm to quickly create a Voronoi diagram, faster than a simple Naive approach, The general complexity becomes O(n*logn)

<a class="btn disabled btn--danger">Expert</a> [Fortune’s algorithm and implementation][fortune’s algorithm and implementation]<br>
After you've read what Fortune's algorithm is you definitely need an implementation, so here it is.

<a class="btn disabled btn--warning">Intermediate</a> [Fluid Simulation : Unity3D][fluid simulation : unity3d]<br>
Little reddit post about a fluid simulation in Unity3D. You can see in the comments the author saying how it works and giving you a launch point for other resources.

<a class="btn disabled btn--warning">Intermediate</a> [Metaballs and Marching Squares][metaballs and marching squares]<br>
This is a really cool blogpost about how both Metaballs and Marching Squares work. Marching Squares is an algorithm for 2D about mesh creation, but you can also find variations of that for 3D, like Marching Cubes and Marching Tetrahedra. You can find more about those in the next resources.<br>
Metaballs are balls that merge together when close to each other, so they're really useful for fluid simulations

<a class="btn disabled btn--warning">Intermediate</a> [Marching Cubes: Procedural World][marching-cubes]<br>
Here's the most basic version of Marching Squares but in 3D: Marching Cubes.<br>
Little Blogpost about how Marching Cubes Works

<a class="btn disabled btn--warning">Intermediate</a> [Coding Adventure: Marching Cubes][marching-cubes-coding-adventure]<br>
Here's another resource for Marching Cubes, an actual implementation. You can also find the code in the description of this video.

<a class="btn disabled btn--warning">Intermediate</a> [Marching Tetrahedra: Wikipedia][marching-tetrahedra-wiki]<br>
And finally here's another variant of Marching Cubes still for 3D: Marching Tetrahedra

<a class="btn disabled btn--success">Beginner</a> [Algorithm Archive · GitBook][algorithm-archive-gitbook]<br>
This is a currently in developement GitBook Archive of Algorithms. You can also help them build this archive by sending your implementation of an algorithm in a language missing.
    
<a class="btn disabled btn--danger">Expert</a> [Gamasutra: Chris Simpson's Blog - Behavior trees for AI: How they work][gamasutra: chris simpson&#39;s blog - behavior trees for ai: how they work]<br>
This might be the best open resource about Behaviour trees for AI and How they work out there. There's everything from how they work, to adding variations, and code too!
    
<a class="btn disabled btn--danger">Expert</a> [Water erosion on heightmap terrain][water erosion on heightmap terrain]<br>
This is an article about water erosion on terrains, with implementation too!

<a class="btn disabled btn--danger">Expert</a> [Fast Hydraulic Erosion Simulation and Visualization on GPU][latex8.dvi]<br>
This is a Paper on Hydraulic Erosion Simulation, really awesome stuff.

<a class="btn disabled btn--danger">Expert</a> [Interactive Terrain Modeling Using Hydraulic Erosion][hpcg.purdue.edu/bbenes/papers/stava08sca.pdf]<br>
And here's another Paper on Hydraulic Erosion

<a class="btn disabled btn--warning">Intermediate</a> [R-tree - Wikipedia][r-tree - wikipedia]<br>
R-Trees are a data structure useful to optimize finding a position inside an area of useful points.<br>
There are many variations of this data structure, you can find them at the end of the Wikipedia page.

<a class="btn disabled btn--danger">Expert</a> [Nick's Voxel Blog: Dual Contouring with OpenCL][nick-openCL]<br>
Dual Contouring is another way to create terrain. On this blogpost the author gives and explains the code while explaining not only how Dual Contouring works, but also how to fix majour issues with that.

<a class="btn disabled btn--danger">Expert</a> [Nick's Voxel Blog: Dual Contouring][nick-voxel-blog]<br>
Second part of the Dual Contouring, explaining even more stuff.

<a class="btn disabled btn--success">Beginner</a> [Fractals: Useful Beauty][fractals-beauty]<br>
This post talks about what Fractals are and how you could use them.

<a class="btn disabled btn--warning">Intermediate</a> [L-System: Wikipedia][l-system-wiki]<br>
After you know what fractals are here's an algorithm to create plants and vegetation with them

<a class="btn disabled btn--warning">Intermediate</a> [Worley noise][worley-noise]<br>
Worley noise is another type of noise useful in terrain creation. There's also Perlin Noise, but it's the most famous one, so we decided not to include it.

<a class="btn disabled btn--danger">Expert</a> [Wave Function Collapse][wfc-algo]<br>
Wave Function Collapse (aka WFC) is a procedural content creation algorithm really useful for tile-based content creation, since it uses a pattern you specify to crete your tile map.<br>
It's also really cool to look how the map changes.<br>
It's mainly applied for 2D, but you can apply it to 3D too!

<a class="btn disabled btn--danger">Expert</a> [Gamasutra: A Adonaac&#39;s Blog - Procedural Dungeon Generation Algorithm][gamasutra: a adonaac&#39;s blog - procedural dungeon generation algorithm]<br>
An algorithm to procedurally create Dungeons








## Design Patterns and Software Architecture

> Because we made mistakes, then we solved them, and now we don't wanna do them again

<a class="btn disabled btn--warning">Intermediate</a> [Design Patterns][design-patterns]<br>
Ok so, you're building a software, and you have a problem with the architecture of your code. Well, it turns out you're not the first. This is a collection of what are called "Design Patterns", aka solutions to common problems in the architecture of the code. Save this link, it's the best one.

<a class="btn disabled btn--warning">Intermediate</a> [Design Patterns][design patterns]<br>
Here's more Design Patterns, so you have more reference to study.

<a class="btn disabled btn--warning">Intermediate</a> [Game Programming Patterns][game programming patterns]<br>
I mean, we make games, not proper "software", so some of those patterns are not perfect for us, is there something else I can look at? Well absolutely!<br>
Here's a collection of Design Patterns spefic for gamedev with proper explanation.

<a class="btn disabled btn--warning">Intermediate</a> [Refactoring][refactoring-guru]<br>
Ok, now you have a huge software that does the work, but the code is really ugly, how could I improve it? Well, that's called Refactoring, while the bad code is the Smell, here's how to improve it.

<a class="btn disabled btn--warning">Intermediate</a> [Client-Server Architecture][client-server architecture]<br>
Here's an awesome document on how a client-server architecture works, and how to code it.

<a class="btn disabled btn--warning">Intermediate</a> [Model View Controller][model-view-controller]<br>
Here's an article on Wikipedia on what the Model View Controller Pattern is and how does it work.
    




## Data Oriented Design (DOD)

> When fast is not enough

<a class="btn disabled btn--warning">Intermediate</a> [What Every Programmer should know about memory Pt.1][programmers-know-memory]<br>
Ok, if you want to learn how Data Oriented Design works, you first have to learn how memory works, there's no skipping this article. Seriously, read it.

<a class="btn disabled btn--warning">Intermediate</a> [Performance Programming for Game Developers][perf-prog]<br>
Really cool slides about how to improve performance in videogames, from memory management to optimization to multithreading.

<a class="btn disabled btn--danger">Expert</a> [Managing Data Relationships][data-relationships]<br>
Now that you know how memory works, you need to have some learning about how to manipulate it. That's what this article is about.
    
<a class="btn disabled btn--warning">Intermediate</a> [ECS: Entity-Component-System][nomad game engine]<br>
Turns out that if you come from the [Game Engines](#game-engines) section, you already have seen this.<br>
This *should* have been a blog about an engine, but as it stands it's a blog about the ECS Patterns, and it covers **everything**, from what this is to how it works, to how to code it.

    
<a class="btn disabled btn--warning">Intermediate</a> [Understanding ECS][understanding-ecs]<br>
If you're still not sure how ECS works, here's how!
    
<a class="btn disabled btn--danger">Expert</a> [Implementing ECS][implementing-ecs]<br>
And know that you know how it works, let's actually imlpement it!

<a class="btn disabled btn--danger">Expert</a> [Fast ECS][fast-ecs]<br>
Wiki entry on ECS and how to make it *blazingly fast*.

<a class="btn disabled btn--warning">Intermediate</a> [ECS is the future of MMOG Developement Pt.3][mmog-dev]<br>
This is a cool discussion about the state of ECS, and how it works.

<a class="btn disabled btn--danger">Expert</a> [Building a Data-Oriented Entity System Pt.2][dod-ecs-pt2]<br>
Here's another post building ECS. By now you should know everything... just kidding, it's never enough.









## Graphics and Rendering

> Because I have eyes and I want to see stuff

<a class="btn disabled btn--warning">Intermediate</a> [GPU Architectures][gpu-architectures]<br>
Some slides talking about the architecture of the GPU, you definitely need this to start graphics and rendering.<br>
Also check out the book "PBR" on the [Books Section](#books)
    
<a class="btn disabled btn--warning">Intermediate</a> [3D Game Engine Programming][3d-engine-prog]<br>
*Wait, 3D Game Engine Programming? Shouldn't it be on the [Game Engines](#game-engines) section?*<br>
Yeah, I know, it might seem confusing, but it's because that is actually a bad name for a blog. The actual name should have been something like "OpenGL in a 3D Engine".<br>
So yes, this is mainly a collection of OpenGL tutorials directly applied in a 3D Engine.

<a class="btn disabled btn--warning">Intermediate</a> [Open GL][open-gl]<br>
A tutorial about OpenGL

<a class="btn disabled btn--warning">Intermediate</a> [Learn OpenGL][learn-opengl]<br>
Another Tutorial about OpenGL

<a class="btn disabled btn--warning">Intermediate</a> [OpenGL from Zero to Hero][opengl-zero-hero]<br>
An entire Tutorial about OpenGL and how does it work.

<a class="btn disabled btn--warning">Intermediate</a> [Computer Graphics Techniques][graphics-techniques]<br>
Useful Techniques about computer graphics.

<a class="btn disabled btn--danger">Expert</a> [Raymarching Distance Fields][raymarching-df]<br>
An article about Raymarching Distance Fields.

<a class="btn disabled btn--danger">Expert</a> [A way to visualyze mip-map levels][mip-maps]<br>
A way to visualyze mip-map levels, useful for debugging purposes.

<a class="btn disabled btn--danger">Expert</a> [DirectX Tutorials][directx-tuts]<br>
A collection of tutorials about DirectX.

<a class="btn disabled btn--warning">Intermediate</a> [Mode 7 Pt.1][mode-7]<br>
A cool rendering old-school technique called Mode 7.

<a class="btn disabled btn--warning">Intermediate</a> [John Chapman's Graphics Blog][john-chapman]<br>
A blog by John Chapman about Graphics and Rendering.

<a class="btn disabled btn--success">Beginner</a> [Toon Shader][toon-shader]<br>
    An implementation of a Toon Shader for Unity.

<a class="btn disabled btn--warning">Intermediate</a> [My take on shaders: Edge detection image effect – Harry Alisavakis][my take on shaders: edge detection image effect – harry alisavakis]<br>
An implementation of an Edge Detection Shader.

<a class="btn disabled btn--warning">Intermediate</a> [Lode's Computer Graphics Tutorial: Raycasting][lode-tuts]<br>
An article about how does Raycasting Work.

<a class="btn disabled btn--warning">Intermediate</a> [Motore 3D in C++ - Raycasting Pt.1][motore-raycasting]<br>
A 3D C++ implementation of Raycasting
    
**Warning: Italian Ahead!**
{: .notice--danger}

<a class="btn disabled btn--warning">Intermediate</a> [Ray Casting Tutorial Pt.9][raycast-pt9]<br>
Ray Casting: how it works and an implementation.

<a class="btn disabled btn--success">Beginner</a> [Texel Density][texel-density]
What Texel Density is, and how to have an uniform scale on your entire world.



















## Books

> Because we're in a digital world... wait what?

<a class="btn disabled btn--warning">Intermediate</a> [Procedural Content Generation in Games A textbook and an overview of current research][pcg]<br>
THE best single book about Procedural Content Generation.

<a class="btn disabled btn--success">Beginner</a> [Automate the Boring Stuff with Python][automate the boring stuff with python]<br>
An awesome book to automate stuff using Python.
**fun fact:** *we use python too to automate content addition to this page, you can find how in the [how to contribute](/how-to-contribute/) section*

<a class="btn disabled btn--warning">Intermediate</a> [Programming from the ground up][ground-up]<br>
A really cool book about programming, starting from low-level.

<a class="btn disabled btn--warning">Intermediate</a> [PBR][pbr]<br>
An entire book about Physically Based Rendering (aka PBR).

<a class="btn disabled btn--warning">Intermediate</a> [Voxel-Based Terrain for Real-Time Virtual Simulations][voxel-terrain]<br>
A book about a Voxel-Based Terrain, from implementation, to rendering.





## Maths

> Because programming doesn't need maths, but if you use it you make stuff faster

<a class="btn disabled btn--success">Beginner</a> [Better Explained][better-explained]<br>
Cool explanations of maths principles, expecially useful for gamedev.
    
<a class="btn disabled btn--success">Beginner</a> [Maths Is Fun][maths-fun]<br>
More maths, cause it's never enough.

<a class="btn disabled btn--success">Beginner</a> [Math.it][math-it]<br>
Even more.

<a class="btn disabled btn--success">Beginner</a> [Linear Algebra for Game Developers Pt.1][linear-algebra]<br>
Linear Algebra explained easily for game developers

<a class="btn disabled btn--warning">Intermediate</a> [Immersive Linear Algebra][immersive-linear-algebra]<br>
Even more Linear Algebra.

<a class="btn disabled btn--success">Beginner</a> [Understanding Steering Behaviors - Envato Tuts+ Game Development Tutorials][understanding steering behaviors - envato tuts+ game development tutorials]<br>
A collection of AI Behaviours, from how they work to the maths to how to code them

    







## Game Design

> The art of Game Design is really hard, so it's better to start somewhere

<a class="btn disabled btn--success">Beginner</a> [Chekhov&#39;s gun - Wikipedia][chekhov&#39;s gun - wikipedia]<br>
A story-telling principle that every story should follow.
















## Software and Tools

> To make the same stuff, but better and faster

<a class="btn disabled btn--warning">Intermediate</a> [x64dbg][x64dbg]<br>
    A really useful tool to debug your c++ application.

<a class="btn disabled btn--success">Beginner</a> [Online regex tester and debugger: PHP, PCRE, Python, Golang and JavaScript][online regex tester and debugger: php, pcre, python, golang and javascript]<br>
The best interactive website about regex, with documentation too!

<a class="btn disabled btn--success">Beginner</a> [Coolors.co - The super fast color schemes generator][coolors.co - the super fast color schemes generator]<br>
Really cool tool to quickly generate and edit 5-color palettes.







## Webdevve

> Because webdev is a huge mess, so here's where to start

<a class="btn disabled btn--success">Beginner</a> [Design Course's Youtube Channel][design-course-yt]<br>
Awesome Youtube channel about Webdev and UI design.














## Case Study

> People made stuff, either bad or good, so let's look at them!

<a class="btn disabled btn--warning">Intermediate</a> [Minecraft Like Rendering Experiments in OpenGL 4][minecraft-like]<br>
Experiments done in OpenGL 4 to create a Minecraft-Like Rendering.

<a class="btn disabled btn--warning">Intermediate</a> [Depth and Normal Textures (Part 1)][william chyr (part 1)]<br>
How Depth and Normal Textures work in the game Manifold Garden by William Chyr

<a class="btn disabled btn--danger">Expert</a> [Wave - by Oskar Stålberg][wave - by oskar st�lberg]<br>
If you've looked at the WFC algorithm in [Data Structures and Algorithms](#data-structures-and-algorithms), then this is the perfect project to look at to have a better feel on how it works.

<a class="btn disabled btn--warning">Intermediate</a> [Adrian's Project Studies][project-studies]<br>
A collection of graphics case studies.

<a class="btn disabled btn--warning">Intermediate</a> [How we use Box2D with Artemis][artemis-box2d]<br>
How do they use Box2D in the Artemis Game Engine.

<a class="btn disabled btn--warning">Intermediate</a> [3D Cube World Level Generation][3d-world]<br>
A cool tutorial on noise and how to use it to create a voxel terrain.





## Exercises

> To make more practice, cause you need it!

<a class="btn disabled btn--success">Beginner to Expert</a> [100+ Python challenging programming exercises.][python-programming-exercises/100+ python challenging programming exercises.txt at master � zhiwehu/python-programming-exercises]<br>
A lot of coding challenges specific for python, with solutions too.
    
<a class="btn disabled btn--success">Beginner to Expert</a> [120+ interactive Python coding interview challenges.][donnemartin/interactive-coding-challenges: 120+ interactive python coding interview challenges (algorithms and data structures). includes anki flashcards.]<br>
Another big list of python challenges with solutions.

<a class="btn disabled btn--success">Beginner to Expert</a> [ROSALIND Problems][rosalind-problems]<br>
List of Problems to solve with solutions.

<a class="btn disabled btn--success">Beginner to Expert</a> [Archived Problems - Project Euler][archived problems - project euler]<br>
A list of problems to solve to make tons of practice.

<a class="btn disabled btn--success">Beginner to Expert</a> ["I Need Practice Programming": 49 Ideas for Game Clones to Code][python-games-blog]<br>
Big list of ideas of games to clone to learn how to code, or maybe to develop your engine while you work on these.


## Many Other Resources

> Because this list is not enough

<a class="btn disabled btn--warning">Intermediate</a> [PhatCode Articles][phatcode]<br>
A collection on various low-level related articles.

<a class="btn disabled btn--warning">Intermediate</a> [Computer Engineering Reference Books Collection][comp-eng-reference]<br>
A list of books of the various exams you usually do at computer engineering.
    
<a class="btn disabled btn--warning">Intermediate</a> [Computer Engineering University Course Exams][compe-eng-exams]<br>
A complete list of exams and resources of the various courses at Computer Engineering University.<br>
    
**Warning: Italian Ahead!**
{: .notice--danger}

<a class="btn disabled btn--warning">Intermediate</a> [Software Optimization Resources][software-opt]<br>
A list of resources about Software Optimization.

<a class="btn disabled btn--success">Beginner to Expert</a> [My study notes][my study notes]<br>
Study notes of a friend professionally making games.

<a class="btn disabled btn--warning">Intermediate</a> [Welcome - Procedural Content Generation Wiki][welcome - procedural content generation wiki]<br>
An entire Wiki about Procedural Generation

<a class="btn disabled btn--danger">Expert</a> [Compilation of 100+ 3D graphics academic papers][academic-compilation]<br>
Title says it all. A huge list of Graphics Academic Papers.

    




## Other/Uncategorized

> Because I don't know where to put these


<a class="btn disabled btn--warning">Intermediate</a> [HoudiniVex - cgwiki][houdinivex - cgwiki]<br>
Ok, first: what's Houdini?<br>
Houdini is a procedural content creation software, aimed at creating basically everything procedurally, from terrain, to particles, to models, to rigging... **everything**.<br>
The only problem is it's really hard to learn, so here's a wiki to study from.
    
<a class="btn disabled btn--danger">Expert</a> [Entagma: Advanced CG Resources][entagma]<br>
Also here's a "blog" on stuff created in Houdini, with explanation and everything.

<a class="btn disabled btn--success">Beginner to Expert</a> [Lospec - Free tools and resources for people making pixel art, voxel art and more][lospec - free tools and resources for people making pixel art, voxel art and more]<br>
A list of tutorials mainly about Pixel Art.




[comment]: <> (Raccolta dei link)

[perf-prog]: http://www.fragmentbuffer.com/docs/PerformanceProgramming.pdf
[design-course-yt]: https://www.youtube.com/watch?v=_Hp_dI0DzY4
[x64dbg]: https://x64dbg.com/#start
[software-opt]: https://www.agner.org/optimize/
[compe-eng-exams]: http://johnwhite.it/university/
[comp-eng-reference]: https://github.com/mohitsshetty986/Computer-Engineering-Reference-Books
[phatcode]: http://www.phatcode.net/articles.php
[z-order]: https://en.wikipedia.org/wiki/Z-order_curve
[design-patterns]: https://refactoring.guru/design-patterns
[modern-game-engine]: http://blog.nowostawski.org/2015/10/modern-game-engine/
[fast-ecs]: http://entity-systems.wikidot.com/fast-entity-component-system
[understanding-ecs]: https://www.gamedev.net/articles/programming/general-and-gameplay-programming/understanding-component-entity-systems-r3013
[implementing-ecs]: https://www.gamedev.net/articles/programming/general-and-gameplay-programming/implementing-component-entity-systems-r3382
[mmog-dev]: http://t-machine.org/index.php/2007/12/22/entity-systems-are-the-future-of-mmog-development-part-3/
[programmers-know-memory]: https://lwn.net/Articles/250967/
[pbr]: http://www.pbr-book.org/3ed-2018/contents.html
[gpu-architectures]: https://drive.google.com/file/d/12ahbqGXNfY3V-1Gj5cvne2AH4BFWZHGD/view
[graphics-techniques]: http://jcgt.org/read.html
[scene-graph]: https://research.ncl.ac.uk/game/mastersdegree/graphicsforgames/scenegraphs/Tutorial%206%20-%20Scene%20Graphs.pdf
[raymarching-df]: http://9bitscience.blogspot.com/2013/07/raymarching-distance-fields_14.html
[mip-maps]: http://aras-p.info/blog/2011/05/03/a-way-to-visualize-mip-levels/
[directx-tuts]: http://www.directxtutorial.com/Lesson.aspx?lessonid=9-1-3
[mode-7]: https://www.coranac.com/tonc/text/mode7.htm
[opengl-zero-hero]: http://in2gpu.com/opengl-3/
[john-chapman]: http://john-chapman-graphics.blogspot.com/
[minecraft-like]: http://codeflow.org/entries/2010/dec/09/minecraft-like-rendering-experiments-in-opengl-4/
[engine-2017]: https://www.randygaul.net/2017/02/24/writing-a-game-engine-in-2017/
[better-explained]: https://betterexplained.com/
[maths-fun]: https://www.mathsisfun.com/physics/index.html
[math-it]: https://www.math.it/
[linear-algebra]: http://blog.wolfire.com/2009/07/linear-algebra-for-game-developers-part-1/
[understanding steering behaviors - envato tuts+ game development tutorials]: https://gamedevelopment.tutsplus.com/series/understanding-steering-behaviors--gamedev-12732
[chekhov&#39;s gun - wikipedia]: https://en.wikipedia.org/wiki/Chekhov%27s_gun
[coolors.co - the super fast color schemes generator]: https://coolors.co/
[fortune’s algorithm and implementation]: http://blog.ivank.net/fortunes-algorithm-and-implementation.html
[my study notes]: https://encelo.github.io/notes.html
[william chyr (part 1)]: http://williamchyr.com/2013/11/unity-shaders-depth-and-normal-textures/
[toon-shader]: https://boostlog.io/@hassie.walsh71/3d-animation-expression-using-unity-toon-shading-5a71fc3a52b91d9de6d0bdc9
[pcg]: http://pcgbook.com/
[fluid simulation : unity3d]: https://www.reddit.com/r/Unity3D/comments/5w5lf2/fluid_simulation/
[metaballs and marching squares]: http://jamie-wong.com/2014/08/19/metaballs-and-marching-squares/
[gamasutra: a adonaac&#39;s blog - procedural dungeon generation algorithm]: https://www.gamasutra.com/blogs/AAdonaac/20150903/252889/Procedural_Dungeon_Generation_Algorithm.php
[welcome - procedural content generation wiki]: http://pcg.wikidot.com/
[wave - by oskar st�lberg]: http://oskarstalberg.com/game/wave/wave.html
[my take on shaders: edge detection image effect – harry alisavakis]: http://halisavakis.com/my-take-on-shaders-edge-detection-image-effect/
[entagma]: http://www.entagma.com/
[gamasutra: chris simpson&#39;s blog - behavior trees for ai: how they work]: https://www.gamasutra.com/blogs/ChrisSimpson/20140717/221339/Behavior_trees_for_AI_How_they_work.php
[refactoring-guru]: https://refactoring.guru/refactoring
[algorithm-archive-gitbook]: https://www.algorithm-archive.org/
[lospec - free tools and resources for people making pixel art, voxel art and more]: https://lospec.com/
[water erosion on heightmap terrain]: http://ranmantaru.com/blog/2011/10/08/water-erosion-on-heightmap-terrain/
[latex8.dvi]: http://evasion.imag.fr/Publications/2007/MDH07/FastErosion_PG07.pdf
[hpcg.purdue.edu/bbenes/papers/stava08sca.pdf]: http://hpcg.purdue.edu/bbenes/papers/Stava08SCA.pdf
[design patterns]: https://sourcemaking.com/design_patterns
[learn c++]: https://www.learncpp.com/
[houdinivex - cgwiki]: http://www.tokeru.com/cgwiki/?title=HoudiniVex#
[python-programming-exercises/100+ python challenging programming exercises.txt at master � zhiwehu/python-programming-exercises]: https://github.com/zhiwehu/Python-programming-exercises/blob/master/100%2B%20Python%20challenging%20programming%20exercises.txt
[nomad game engine]: https://savas.ca/nomad
[rosalind-problems]: http://rosalind.info/problems/list-view/?location=python-village
[r-tree - wikipedia]: https://en.wikipedia.org/wiki/R-tree
[client-server architecture]: http://www.gabrielgambetta.com/fpm1.html
[online regex tester and debugger: php, pcre, python, golang and javascript]: https://regex101.com/
[donnemartin/interactive-coding-challenges: 120+ interactive python coding interview challenges (algorithms and data structures). includes anki flashcards.]: https://github.com/donnemartin/interactive-coding-challenges
[automate the boring stuff with python]: https://automatetheboringstuff.com/
[archived problems - project euler]: https://projecteuler.net/archives
[game programming patterns]: https://gameprogrammingpatterns.com/
[cpp-best]: https://github.com/lefticus/cppbestpractices
[ground-up]: https://download-mirror.savannah.gnu.org/releases/pgubook/ProgrammingGroundUp-1-0-booksize.pdf
[project-studies]: http://www.adriancourreges.com/projects/
[voxel-terrain]: http://transvoxel.org/Lengyel-VoxelTerrain.pdf
[open-gl]: http://ogldev.atspace.co.uk/
[learn-opengl]: https://learnopengl.com/
[3d-world]: http://accidentalnoise.sourceforge.net/minecraftworlds.html
[nick-voxel-blog]: http://ngildea.blogspot.com/2014/09/dual-contouring-chunked-terrain.html
[nick-openCL]: http://ngildea.blogspot.com/2015/06/dual-contouring-with-opencl.html
[immersive-linear-algebra]: http://immersivemath.com/ila/index.html
[3d-engine-prog]: https://www.3dgep.com/category/graphics-programming/opengl/
[data-relationships]: http://gamesfromwithin.com/managing-data-relationships
[artemis-box2d]: https://blog.gemserk.com/2012/02/02/how-we-use-box2d-with-artemis/
[dod-ecs-pt2]: http://bitsquid.blogspot.com/2014/09/building-data-oriented-entity-system.html
[component-based-engine]: https://www.randygaul.net/2013/05/20/component-based-engine-design/
[musings]: http://www.gijskaerts.com/wordpress/?p=98
[musings-pt2]: http://www.gijskaerts.com/wordpress/?p=112
[academic-compilation]: https://rivten.github.io/2018/08/03/graphics-article-list.html
[fortune-wiki]: https://en.wikipedia.org/wiki/Fortune%27s_algorithm
[fractals-beauty]: http://www.fractal.org/Bewustzijns-Besturings-Model/Fractals-Useful-Beauty.htm
[worley-noise]: https://en.wikipedia.org/wiki/Worley_noise
[ray-engine-cpp]: http://www.drdobbs.com/cpp/a-ray-casting-engine-in-c/184409586?pgno=3
[lode-tuts]: https://lodev.org/cgtutor/raycasting.html
[motore-raycasting]: https://www.gianlucaghettini.net/motore-3d-in-c-raycasting/
[raycast-pt9]: https://permadi.com/1996/05/ray-casting-tutorial-9/
[cpp-faq]: https://isocpp.org/faq
[python-games-blog]: http://inventwithpython.com/blog/2012/02/20/i-need-practice-programming-49-ideas-for-game-clones-to-code/
[blog-entries]: http://www.sea-of-memes.com/summary/blog_parts.html
[marching-cubes]: http://procworld.blogspot.com/2010/11/from-voxels-to-polygons.html
[nick-engine]: http://ngildea.blogspot.com/2015/03/engine-overview.html
[minecraft-engine-analysis]: https://0fps.net/2012/01/14/an-analysis-of-minecraft-like-engines/
[hzd-engine-tools]: https://www.guerrilla-games.com/read/creating-a-tools-pipeline-for-horizon-zero-dawn
[cpp-cheatsheet]: https://github.com/AnthonyCalandra/modern-cpp-features
[wfc-algo]: https://github.com/mxgmn/WaveFunctionCollapse
[hilbert-curve]: https://en.wikipedia.org/wiki/Hilbert_curve
[marching-cubes-coding-adventure]: https://www.youtube.com/watch?v=M3iI2l0ltbE
[marching-tetrahedra-wiki]: https://en.wikipedia.org/wiki/Marching_tetrahedra
[l-system-wiki]: https://en.wikipedia.org/wiki/L-system
[model-view-controller]: https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller
[texel-density]: https://www.artstation.com/artwork/qbOqP