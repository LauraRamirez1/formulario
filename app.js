var app= new Vue({
    el:'#app',
    data(){
        return{
            name: null,
            email: null,
            subject: null,
            message: null,
            errors: []
        }
    },
    methods: {
        checkForm: function (e) {
            this.errors = [];
            if (!this.name) {
                        this.errors.push('El nombre es obligatorio.');
                    } 
            if (!this.email) {
                        this.errors.push('El correo electrónico es obligatorio.');
                    }
            if (!this.subject) {
                        this.errors.push('El asunto es obligatorio.');
                    }
            if (!this.message) {
                        this.errors.push('El mensaje es obligatorio.');
                    }
            if (!this.errors.length) {
            return true;
            }
            e.preventDefault();
        }
    },
})
