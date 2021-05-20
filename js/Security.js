class Security {

    constructor(){

        // Add code to create the input and button elements
        this.button1.mousePressed(() => {
            if(system. authenticate(accessCode1, this.access1.value())){
            this.button1.hide();
            this.access1.hide();
            score++;
            }
        });


    }

    display(){

        // Add code to make the buttons function as expected
        this.access1 = createButton("Code1")
        this.access1.position(100, 90);
        this.access1.style('background', 'white')

        this.button1 = createButton("Check")
        this.button1.position(100, 120);
        this.button1.style('background', 'lightgrey')



    }
}