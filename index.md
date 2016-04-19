---
layout: homepage

site_slogan_1: "Therapeutic ultrasound" 
site_slogan_2: "An effective treatment for muscle and joint conditions in dogs, cats and horses" 

lifu_images:
  - title: LIFU Machine
    src: LIFU-1.jpg
  - title: LIFU treating dog
    src: LIFU-2.jpg
  - title: LIFU diagram
    src: LIFU-3.jpg

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

mini_img_1: horse.jpg
mini_img_2: dog.jpg
mini_img_3: cat.jpg
---

## What is Therapeutic Ultrasound?
Therapeutic ultrasound has been recognized as an effective treatment for soft tissue injuries for many years. Its benefits are to increase blood flow to tissue thus speeding up the healing process, decrease pain by reducing swelling and to gently massage the area relieving tension and softening scar tissue.  

{::nomarkdown}  
<br />
{% for image in page.lifu_images %}
 <img src="{{ "/images/"  | prepend: site.baseurl | append: image.src }}" alt="{{ image.title }}" class="margin20 hp-img-circle img-circle">              
{% endfor %}
<br />
<br />
{:/}  

## How does Low Intensity Focused Ultrasound differ from conventional ultrasound?
Low Intensity Focused Ultrasound (LIFU) is a lower frequency than conventional ultrasound, which allows the ultrasound beam to penetrate to deeper tissues. It has a pulsed and continuous setting allowing for both a thermal and non-thermal effect. The ultrasound beam is focused which allows for more targeted treatment of deep tissue areas and also effective treatment of joint pathologies such as osteoarthritis.
