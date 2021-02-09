const about = new Vue({
    el: '#about',
    data:{ 
        Age: '',
        birthday: new Date('1998-09-28'),
    },

    created(){
        this.calcAge()
    },

    methods: {
        calcAge: function(){
            var now = new Date();
            var birth = now.getTime()  - this.birthday.getTime();
            console.log(birth)
            var ageDate = new Date(birth);
            console.log(ageDate)
            this.Age = ageDate.getUTCFullYear() -1970;
            
        },
    },
    
});  