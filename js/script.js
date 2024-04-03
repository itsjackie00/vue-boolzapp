import {contacts} from './data.js';

const {createApp} = Vue;

createApp({
    data () {
        return {
            contacts: contacts,
        }
    },
    methods: {
        toggleDone(id) {
            const contact = this.contacts.find((el) => {
                return el.id === id;
            });
        }
    },
    computed: {
        
    },
    mounted() {
        console.log(this.contacts);
    }
}).mount('#app') 