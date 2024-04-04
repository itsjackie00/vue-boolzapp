import {contacts} from './data.js';

const {createApp} = Vue;

createApp({
    data () {
        return {
            contacts: contacts,
            activeContactId: 1,
            messageText:'',
            
        }
    },
    methods: {
        setActiveContact(id) {
            this.activeContactId = id
        },
        
    },
    computed: {
        activeContact() {
            return this.contacts.find((el) => el.id ===
                this.activeContactId);
            }
        },
    mounted() {
        console.log(this.contacts);
    }
}).mount('#app') 