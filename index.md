---
layout: homepage

site_slogan_1: "Therapeutic ultrasound" 
site_slogan_2: "Relieving pain and increasing mobility in your dog, horse or cat." 

lifu_images_first:
  - title: LIFU Machine
    src: LIFU-1.jpg
  - title: LIFU treating dog
    src: LIFU-2.jpg
  - title: LIFU diagram
    src: LIFU-3.jpg

lifu_images_second:
  - title: Horse jumping
    src: horse.jpg
  - title: Dog bounding
    src: dog.jpg
  - title: Cat leaping
    src: cat.jpg

treatable_list_title: Conditions where treatment has been beneficial
treatable_list_left:
  - item: Muscle strains
  - item: Soft tissue scarring
  - item: Oedema
  - item: Elbow/Hip dysplasia
  - item: Treatment of muscular pain
  - item: Post orthopaedic surgery
treatable_list_right:
  - item: Tendon injuries
  - item: Bursitis
  - item: Osteoarthritis
  - item: Improve joint mobility
  - item: Treatment of bone pain
---



## What is Low Intensity Focused Ultrasound?
Low Intesity Focused Ultrasound (LIFU) is a new generation of therapeutic ultrasound. Therapeutic ultrasound has been recognized as an effective treatment for soft tissue injuries for many years. Its benefits are decrease pain by reducing swelling and the inflammatory response, increase blood flow to the affected site, thereby speeding up the healing process and to gently massage the area relieving tension and softening scar tissue.


{::nomarkdown}  
<br />
{% for image in page.lifu_images_first %}
 <img src="{{ "/images/"  | prepend: site.baseurl | append: image.src }}" alt="{{ image.title }}" class="margin20 hp-img-circle img-circle">              
{% endfor %}
<br />
<br />
{:/}  

## How does LIFU differ from conventional therapeutic ultrasound?
LIFU is a revolutionary technology that emits low frequency, focused ultrasound waves. A lower frequency than conventional therapeutic ultrasound allows the ultrasound waves to penetrate deeper. Focussing the waves, in contrast to scattered waves emitted by conventional machines, allows for more precise treatment of a problem area. Focussing the waves also allows for therapeutic levels to be reached actually within a joint. Thus LIFU not only helps with pain and inflammation within a joint caused by conditions such as osteoarthritis, but also with the associated muscular compensations that accompany such conditions.

{::nomarkdown}  
<br />
<br />
{:/}  

## Decidated to improving quality of life for your best friend.

This treatment has been pioneered by medical professionals and is now being brought into the veterinary field by verterinary professionals. A lot of research has gone into this technology and more is being done. So you can have peace of mind that your beloved companion is in safe hands.

{::nomarkdown}  
<br />
{% for image in page.lifu_images_second %}
 <img src="{{ "/images/"  | prepend: site.baseurl | append: image.src }}" alt="{{ image.title }}" class="margin20 hp-img-circle img-circle">              
{% endfor %}
<br />
{:/}  
