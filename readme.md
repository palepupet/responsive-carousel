
# RESPONSIVE CAROUSEL

## Description

Simple responsive carousel to show some of your pics.

## Installation

    npm i simple-responsive-carousel

## Usage

    import carrousselPerso from 'simple-responsive-carousel';

Carousel with **automatic** scroll :

    let carrousselPerso = new Carroussel({
        "name": "carroussel",
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

    let carrousselPerso = new Carroussel({
        "name": "carroussel",
        "type": "manual",
        "image": [
            "./img/img1.jpg",
            "./img/img2.jpg",
            "./img/img3.jpg",
            "./img/img4.jpg",
        ],
    });

| Name  | Value(s)           | Require | Type   | Desc                                                                           |
|-------|--------------------|---------|--------|--------------------------------------------------------------------------------|
| name  | carouselDivId      | yes     | string | The name of the div ID where the carousel will be show                         |
| type  | automatic / manual | yes     | string | The type of the carousel. Automatic = automatic scroll. Manual = manual scroll |
| timer | 1500 / ""          | no      | number | The time, in millisecond, between each image                                   |
| image | pathImg1, pathImg2 | yes     | string | The array with all your relative path, absolute path or url of your images     |

>If timer is not defined in automatic mode, timer will be set to 2000ms

## Example

![alt text](https://raw.githubusercontent.com/palepupet/simple-responsive-carousel/master/example/carousel-example.JPG "Example of Carousel")
