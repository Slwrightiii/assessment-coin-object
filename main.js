let coin = {
   state: 0,
   
    flip: function() {
        const topOrBottom = Math.round(Math.random())
        this.state = topOrBottom

    },

        //citation:https://stackoverflow.com/questions/45136711/javascript-random-generate-0-or-1-integer

    
        
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        
    
    
    toString: function() {
         if (this.state === 1) {
            return "Heads"
         } else { 
            return "Tails"
         }
        

            
    },
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */

    toHTML: function() {
        let image = document.createElement('img');
        //imageElement.append(image)
        image.id = "id";
        image.className = "class";
        image.src = "./images"
       document.getElementById('body').appendChild(image); 


       if (this.state === 1) {
        return image
     } else { 
        return "./images"
     }


    

        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
     
    }
}; 

function twentyFlips (){
    for( index = 0; index <= 20; index += 1){
        image.append("Result :" + index.tostring())
    }
};

function twentyImages (){

    for( index = 0; index <= 20; index += 1){
        image.append("./images" + index.toHTML())
    }

};