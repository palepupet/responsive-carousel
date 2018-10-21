
# RESPONSIVE CAROUSEL

## Description

Simple responsive carousel to show some of your pics.

## Installation

    'npm install responsive-carousel'

## Usage

    const carrousselPerso = require('responsive-carousel');

Carousel with **automatic** scroll :

    carrousselPerso = new Carroussel("carroussel", {
        "type": "automatic",
        "timer": 2000,
        "image": [
            "./img/img1.jpg",
            "./img/img2.jpg",
            "./img/img3.jpg",
            "./img/img4.jpg",
        ],
    });

Carousel with **manual** scroll :

    carrousselPerso = new Carroussel("carroussel", {
        "type": "manual",
        "image": [
            "./img/img1.jpg",
            "./img/img2.jpg",
            "./img/img3.jpg",
            "./img/img4.jpg",
        ],
    });

| Name  | Value 1        | Value 2        | Value 3 | Require | Type   | Desc                                                                           |
|-------|--------------- |----------------|---------|---------|--------|--------------------------------------------------------------------------------|
| type  | automatic      | manual         | X       | yes     | string | The type of the carousel. Automatic = automatic scroll. Manual = manual scroll |
| timer | 1500           | ""             | X       | no      | number | The time, in miliseconde, between each new image's scroll                        |
| image | path to image1 | path to image2 | etc.    | yes     | string | The array with all your relative path, absolute path, url of your images       |

>If timer is not defined in automatic mode, timer will be set to 2000ms
