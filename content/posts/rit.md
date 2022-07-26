---
title: "Research at RIT"
date: 2022-07-26T11:11:05-04:00
author: Abhijan
# image: "/images/Abhijan Wasti.jpg"
draft: false
socialShare: false
toc: false
markup:
  goldmark:
    rendered:
      unsafe: false

---

# Research at RIT : Improving Eye Tracing for Better Gaze Estimation

In simple terms, eye tracking is the process of measuring eye movements to find out what someone is looking at. Secondary questions, such as how long did they look at something, or where exactly in the object are they looking at (for example, if someone is looking at a car, figuring out whether they are looking at the wheels, the front door, the trunk, etc of the car) cann also be answered. If we are able to reliably predict where someone is looking at any moment, we can then perform interesting experiments to see how they think. This is called **gaze estimation**. That's one of the reason why it has extensively been used in consumer studies and marketing.

However, the process of eye tracking can get tedious. Since a small movement of the eye can mean a large distance in the real world, accurate and precise eye tracking is essential for any meaningful insight. Even more, if we want to perform any real-time application, it can be even more difficult. One of the best analytical method for eye tracking is detailed in the paper by Lech Swirski and Neil Dodgson at the University of Cambridge (2013) titled [A fully-automatic, temporal approach to single camera, glint-free
3D eye model fitting](https://www.cl.cam.ac.uk/research/rainbow/projects/eyemodelfit/files/Swirski,%20Dodgson%20-%202013%20-%20A%20fully-automatic,%20temporal%20approach%20to%20single%20camera,%20glint-free%203D%20eye%20model%20fitting.pdf). However, this method can be inaccurate at times and can not deliver real-time performance.

To combat this, [RIT-Eyes](https://arxiv.org/abs/2006.03642) and [RITnet](https://arxiv.org/abs/1910.00694) were developed. RIT-Eyes is a rendering pipeline that takes in eye tracking data and renders out near-eye images that can then be use for eye-tracking applications. RITnet is real-time semantic segmentation of the eye for gaze tracking. The idea is to generate a dataset using the RIT-Eyes pipeline and use this dataset to train the RITnet network.

The initial result showed impressive result, however, there were much more improvements that could be made. As an RA, I'm working on improving the RIT-Eyes pipeline and using results to produce better renderings for training. Some of the newer features that we are working on:
- **Support for binocular system**: Initially, the RIT-Eyes pipeline only had support for monocular system i.e. one eye. In the newer version, we are working on developing the binocular system i.e. two eyes.
- **Aesthetic improvement**: The initial paper had a limited number of 3D models and textures that it could work with. In the newer version, we are working on a "universal" head model that can encompass different head and eye structrues.