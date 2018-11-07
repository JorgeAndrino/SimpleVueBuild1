const vm = new Vue({
    el : "#app",

    data : {
        welcomeMessage : "Our First Vue app!",

        anothermessage : "yay! you can haz vue!",

        

        targetURL : "http://vuejs.org",

        anchorOff : false,

        hazVue : true,

        deliciousFruit : [
            {name: "apples", flavour: "tasty!"},
            {name: "oranges", flavour: "sweet!"},
            {name: "pineapples", flavour: "tangy!"}
        ]
    },

    methods : {
        logFruit(e) {
            console.log(e.currentTarget);
        },

        changeText() {
            debugger;
            this.anothermessage = "change this from a function call";
        }
    }

});

const vm2 = new Vue({
    el : "#footer",

    data : {
        footermessage : "this is footer",
    }
})