const clock = new Vue({
    el: '#clock',
    data:{ 
        date: '',
        time: '',
        week: ['Sun','Mon','Tue','Wen','Thu','Fri','Sat'],
    },

    mounted(){
        setInterval(this.updateTime,1000);
    },

    methods: {
        updateTime: function(){
            let currentTime = new Date();
            this.date = this.zeroPadding(currentTime.getFullYear(),4) + "/" + this.zeroPadding((currentTime.getMonth()+1),2) + "/" 
            + this.zeroPadding(currentTime.getDate(),2) + "(" + this.week[currentTime.getDay()] + ")";
            this.time = this.zeroPadding(currentTime.getHours(),2) + ":" + this.zeroPadding(currentTime.getMinutes(),2) 
            + ":" + this.zeroPadding(currentTime.getSeconds(),2);
        },

        zeroPadding: function(num,len){
            let zero = '';
            for(var i=0;i<len;i++){
                zero += '0';
            }
            return (zero+num).slice(-len);
        }
    },
    
});  