const vue = new Vue({
    el: '#delay',
    data: {
        datalists: []
    },

    created(){
        axios.get('https://tetsudo.rti-giken.jp/free/delay.json')
        .then(response =>{
            this.datalists = response.data;
        })
        .catch(error =>{
            console.log(error);
        });
    },

});