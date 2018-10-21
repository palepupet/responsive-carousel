class Carroussel {


    constructor(divIdName, {type, timer, image}) {

        this.divIdName = divIdName;
        this.type = type;
        this.timer = timer;
        this.image = image;
        

        this.pImage = null;
        this.divId = null;
        this.imgImage = null;
        this.divShape = null;

        this.indexImage = 0;
    }


    validtionRessource() {

        if(typeof this.divIdName !== "string") {
            throw "divIdName must be to type : string";

        } else if(this.divIdName.length <= 0) {
            throw "divIdName must contain at least 1 character";
        }


        if(typeof this.type !== "string") {
            throw "type must be to type : string";

        } else if(this.type !== "manual" && this.type !== "automatic") {
            throw "type must be equal to 'manual' or 'automatic'";
        }


        if(this.type === "automatic") {

            if(this.timer === undefined || this.timer === null) {
                this.timer = 2000;

            } else if(typeof this.timer !== "number") {
                throw "timer must be to type : number";
            }

        } else {
            this.timer = null;
        }


        if(typeof this.image !== "object") {
            throw "image must be to type : array"

        } else if(this.image.length <= 0) {
            throw "image must contain at least 1 image";
        }

    }


    createDiv(tabImage, timer, type, interval) {
        
        // Get div by its id
        this.divId = document.querySelector("#" + this.divIdName);

        // Create p & img elements to put div inside
        this.pImage = document.createElement("p");
        this.pImage.setAttribute("id", "carroussel__p");

        this.imgImage = document.createElement("img");
        this.imgImage.setAttribute("id", "carroussel__img");
        this.imgImage.setAttribute("src", this.image[0]);

        // Inset into ...
        this.pImage.appendChild(this.imgImage);
        this.divId.appendChild(this.pImage);
        
        // Create carroussel shapes
        this.divShape = document.createElement("div");
        this.divShape.setAttribute("id", "carroussel__shape");

        var obj = this;
        for(let i=0; i<this.image.length; i++) {

            let spanShape = document.createElement("span");
            spanShape.setAttribute("class", "carroussel__shape shape" + i);
            spanShape.onclick = function() { 
                Carroussel.changeImage(i, tabImage, obj);
            };

            this.divShape.appendChild(spanShape);
        }

        // Insert into...
        this.pImage.appendChild(this.divShape);

        this.applyStyle();
    }


    applyStyle() {

        // p element style
        this.pImage.style.textAlign = "center";
        this.pImage.style.width = "100%";
        this.pImage.style.height = "100%";
        this.pImage.style.position = "relative";

        // img element style
        this.imgImage.style.height = "auto";
        this.imgImage.style.width = "100%";

        // div shape element style
        this.divShape.style.height = "20px";
        this.divShape.style.position = "absolute";
        this.divShape.style.width = "100%";
        this.divShape.style.bottom = "5px";
        this.divShape.style.display = "flex";
        this.divShape.style.justifyContent = "center";

        // span shape element style
        let allSpanShape = document.querySelector("#carroussel__shape").children;
        
        for(let i=0; i<allSpanShape.length; i++) {
            allSpanShape[i].style.width = "15px";
            allSpanShape[i].style.height = "15px";
            allSpanShape[i].style.backgroundColor = "#ffffff63";
            allSpanShape[i].style.position = "relative";
            allSpanShape[i].style.margin = "auto 5px";
            allSpanShape[i].style.content = '';
            allSpanShape[i].style.display = "inline-block";
            allSpanShape[i].style.borderRadius = "7.5px";
            allSpanShape[i].style.cursor = "pointer";
        }

        document.querySelector(".shape0").setAttribute("id", "shapeSelected");
        document.querySelector("#shapeSelected").style.backgroundColor = "#FFF";

    }

    
    static changeImage(numImage, tabImage, obj) {
        // update Image
        let imgImage = document.querySelector("#carroussel__img");
        imgImage.setAttribute("src", tabImage[numImage]);

        // remove #shapeSelected and add new color
        let oldRoundShape = document.querySelector("#shapeSelected");
        oldRoundShape.removeAttribute("id");
        oldRoundShape.style.backgroundColor = "#ffffff63";

        // add new color to the new shape and #shapeSelected
        let allSpanShape = document.querySelector("#carroussel__shape").children;
        allSpanShape[numImage].style.backgroundColor = "#FFF";
        allSpanShape[numImage].setAttribute("id", "shapeSelected");

        // clear setInterval and make another one to update imageIndex
        if( (!isNaN(obj.timer)) && (obj.type === "automatic") ) {
            clearInterval(obj.interval);
            obj.lunchTimer(numImage)
        }
        
    }


    lunchTimer(imageDepart) {
        var that = this;
        let index = imageDepart;

        this.interval = setInterval(function() {

            index++;
            if(index > that.image.length -1) {
                index = 0;
            }

            // change image
            that.imgImage.setAttribute("src", that.image[index]);

            // change color and shapeSelected
            let oldRoundShape = document.querySelector("#shapeSelected");
            oldRoundShape.removeAttribute("id");
            oldRoundShape.style.backgroundColor = "#ffffff63";

            let allSpanShape = document.querySelector("#carroussel__shape").children;
            allSpanShape[index].style.backgroundColor = "#FFF";
            allSpanShape[index].setAttribute("id", "shapeSelected");
       
            // clear setInterval and recall fonction lunchTimer
            clearInterval(that.interval);
            that.lunchTimer(index);

        }, this.timer);
    }


    createCarroussel() {

        this.validtionRessource();

        this.createDiv(this.image, this.indexImage, this.timer, this.type);

        // If we have an automatic carroussel
        if( (!isNaN(this.timer)) && (this.type === "automatic") ) {
            this.lunchTimer(this.indexImage);
        }
    }

}