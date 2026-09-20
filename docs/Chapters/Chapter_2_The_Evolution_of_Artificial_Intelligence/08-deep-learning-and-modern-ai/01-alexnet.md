# AlexNet

<div class="chapter-intro" markdown>

**2012 · Deep learning makes a leap in image recognition**

AlexNet's result in the ImageNet competition showed how well a large neural network could learn to recognize objects in photographs.

[← Timeline](../index.md){ .chapter-back title="Back to chapter timeline" }

</div>

## What is it?

**AlexNet** is a deep **convolutional neural network** for classifying images into one of **1,000 categories**. It was developed by [Alex Krizhevsky](#alex-krizhevsky){ data-open-details }, [Ilya Sutskever](#ilya-sutskever){ data-open-details }, and [Geoffrey Hinton](#geoffrey-hinton){ data-open-details }. Earlier convolutional networks already existed; AlexNet showed what a larger network could do with more training images and computing power.

## How does it work?

An image enters the network as pixels. AlexNet's layers learn visual patterns, starting with simple features such as edges and textures and combining them into more useful clues. Its final layers use those clues to predict a category. During training, labeled **ImageNet** photos show the network the correct answer, and [backpropagation](../05-neural-networks-return/02-backpropagation.md) adjusts its weights when the prediction is wrong.

AlexNet was larger than earlier image-recognition networks and trained on many more labeled images. **Graphics processing units (GPUs)** made the heavy calculations practical.

## Key insights

**Scale changed what neural networks could achieve.** AlexNet combined a deep network, a large labeled dataset, and GPU computation. Its winning system had a **15.3% top-five error rate** in the 2012 ImageNet challenge, compared with **26.2%** for the runner-up. “Top-five error” means the correct label was missing from the model's five highest-ranked guesses.

[Neural networks become practical again](00-neural-networks-become-practical.md) explains how data, compute, and training improvements came together.

<div class="organizer-grid">
  <details class="organizer-card" id="alex-krizhevsky">
    <summary>Alex Krizhevsky</summary>
    <img src="https://images.squarespace-cdn.com/content/v1/62ec2bc76a27db7b37a2b32f/57e2e8eb-4148-449c-ae2a-629f74228c6f/people-in-ai-alex-krizhevsky-2500.jpg" alt="Portrait of Alex Krizhevsky" loading="lazy">
    <div class="organizer-card-body">
      <p>Alex Krizhevsky is a computer scientist who developed and trained the network that became known as AlexNet. His work helped establish deep learning as a leading approach to image recognition.</p>
      <p class="organizer-credit">Photo: <a href="https://www.artificial-intelligence.blog/people-in-ai/alex-krizhevsky">People in AI</a>. Biography: <a href="https://computerhistory.org/blog/chm-releases-alexnet-source-code/">Computer History Museum</a>.</p>
    </div>
  </details>
  <details class="organizer-card" id="ilya-sutskever">
    <summary>Ilya Sutskever</summary>
    <img src="https://localist-images.azureedge.net/photos/42901272386641/huge/5fafe1a7e651b5f1c3a43a7ea401eb5b59ae9ec9.jpg" alt="Portrait of Ilya Sutskever" loading="lazy">
    <div class="organizer-card-body">
      <p>Ilya Sutskever is a computer scientist and a coauthor of the AlexNet paper. He has worked on deep neural networks for vision and language.</p>
      <p class="organizer-credit">Photo and biography: <a href="https://events.stanford.edu/event/ilya_sutskever_openai_entrepreneurial_thought_leader_speaker_series_etl">Stanford University</a>.</p>
    </div>
  </details>
  <details class="organizer-card" id="geoffrey-hinton">
    <summary>Geoffrey Hinton</summary>
    <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Geoffrey_Hinton_in_2026.jpg?width=500" alt="Portrait of Geoffrey Hinton" loading="lazy">
    <div class="organizer-card-body">
      <p>Geoffrey Hinton is a computer scientist whose research helped revive neural networks. He coauthored the AlexNet paper and earlier work on backpropagation.</p>
      <p class="organizer-credit">Photo: <a href="https://commons.wikimedia.org/wiki/File:Geoffrey_Hinton_in_2026.jpg">Wikimedia Commons</a>. Biography: <a href="https://www.nobelprize.org/prizes/physics/2024/hinton/facts/">NobelPrize.org</a>.</p>
    </div>
  </details>
</div>

**References:** [TUM, *AI in Society - Foundations of AI and Data Science*, Chapter 2](https://www.gov.sot.tum.de/fileadmin/w00bzh/rds/_my_direct_uploads/AI_in_Society-Foundations_of_AI_and_Data_Science_01.pdf); [Original AlexNet paper (2012)](https://papers.nips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html); [ImageNet challenge 2012 results](https://www.image-net.org/challenges/LSVRC/2012/results.html); [Computer History Museum on AlexNet](https://computerhistory.org/blog/chm-releases-alexnet-source-code/).
