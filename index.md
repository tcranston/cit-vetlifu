---
layout: homepage

site_slogan_1: "Therapeutic ultrasound" 
site_slogan_2: "An effective treatment for muscle and joint conditions in dogs, cats and horses" 

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



## What is Low Intensity Focused Ultrasound (Therapeutic Ultrasound)?
Low Intesity Focused Ultrasound (LIFU) is a new generation of therapeutic ultrasound. Therapeutic ultrasound has been recognized as an effective treatment for soft tissue injuries for many years. Its benefits are to increase blood flow to tissue thus speeding up the healing process, decrease pain by reducing swelling and to gently massage the area relieving tension and softening scar tissue.

{::nomarkdown}  
<br />
{% for image in page.lifu_images_first %}
 <img src="{{ "/images/"  | prepend: site.baseurl | append: image.src }}" alt="{{ image.title }}" class="margin20 hp-img-circle img-circle">              
{% endfor %}
<br />
<br />
{:/}  

## How does LIFU differ from conventional therapeutic ultrasound?
LIFU is a lower frequency than conventional ultrasound (such as used for scanning babies), which allows the ultrasound beam to penetrate to deeper tissues. It has a pulsed and continuous setting allowing for both a thermal and non-thermal effect. The ultrasound beam is focused which allows for more targeted treatment of deep tissue areas aswell as allowing effective treatment of joint pathologies such as osteoarthritis.

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
