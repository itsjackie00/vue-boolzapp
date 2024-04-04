import { contacts } from './data.js';

const dt = luxon.DateTime;

const { createApp } = Vue;

createApp({
    data() {
        return {
            contacts: contacts,
            activeContactId: 1,
            messageText: '',
            letters: '',
        }
    },
    methods: {
        setActiveContact(id) {
            this.activeContactId = id
        },
        createMessage() {
            const newMessage = {
                date: dt.now().setLocale('it').toFormat('dd/MM/yyyy HH:mm'),
                message: this.messageText,
                status: 'sent'
            }
            this.activeContact.messages.push(newMessage);
            this.messageText = '';
            setTimeout(() => {
                const newMessage = {
                    date: dt.now().setLocale('it').toFormat('dd/MM/yyyy HH:mm'),
                    message: 'ok',
                    status: 'received'
                }
                this.activeContact.messages.push(newMessage)
            }, 1000);
        },        
        filterConctacts() {
            let array = this.contacts.filter((el) => el.name.toLowerCase().includes(this.letters));
            console.log(array); 
            return(array);//this.contacts.find((el) => el.name.includes(this.letters));

        },
        //create a function for on click toggle down menu and show menu
        toggleDropdown(index) {
            
        }
    },
    computed: {
        activeContact() {
            return this.contacts.find((el) => el.id ===
                this.activeContactId);
        },



        formattedTime() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            return `${hours}:${minutes}`;
        },
    },
    mounted() {
        console.log(this.contacts);
        console.log(this.letters);
    }
}).mount('#app') 