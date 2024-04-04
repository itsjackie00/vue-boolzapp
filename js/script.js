import { contacts } from './data.js';

const dt = luxon.DateTime;

const { createApp } = Vue;

createApp({
    data() {
        return {
            contacts: contacts,
            activeContactId: 1,
            messageText: '',
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
            this.activeConctact.messages.push(newMessage);
        },
        sendMessage() {
            const newMessage = this.createMessage(this.messageText,'sent');
            this.activeConctact.messages.push(this.createMessage(this.messageText, 'sent'));
            this.messageText = '';
            setTimeout(() => {
                const newMessage = this.createMessage('ok', 'received');
                this.activeConctact.messages.push(this.createMessage('ok', 'received'));
            })
        }
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