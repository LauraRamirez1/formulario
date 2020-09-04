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
        sendInformation(){
            let data = {
                "to": "contacto@altera.cl",
                "from": this.email,
                "sender":this.name,
                "subject": this.subject,
                "msg": this.message
            }
            axios
                .post('https://sender.alteracloud.com/send',data)
                .then((response)=>{
                    console.log(response);
                    this.email="";
                    this.name="";
                    this.subject="";
                    this.message="";
                })
                .catch((error)=>console.log(error))
        },
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
            if (this.name.length <6 || this.email.length <6 || this.subject.length <6  || this.message.length <6) {
                        this.errors.push('Sus datos deben tener como  mínimo 5 caracteres');
                    }
            if (!this.errors.length) {
            return true;
            }
            e.preventDefault();
            sendInformation();
        }
    },
})
