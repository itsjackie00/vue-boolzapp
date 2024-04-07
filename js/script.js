import { contacts } from './data.js';
import Picker from './emoji-picker.js';

const dt = luxon.DateTime;

const { createApp } = Vue;

createApp({
    data() {
        return {
            contacts: contacts,
            activeContactId: 1,
            messageText: '',
            letters: '',
            activeMsgIndex: null,
            // showEmoji: false,
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
            //console.log(array);
            return (array);//this.contacts.find((el) => el.name.includes(this.letters));

        },
        //create a function for on click toggle down menu and show menu
        toggleDropdown(index) {
            this.activeMsgIndex = this.activeMsgIndex === index ? null : index;
        },
        getContactsIndex(id) {
            const index = this.contacts.findIndex((el) => el.id === id);
            const msgLastIndex = this.contacts[index].messages.length - 1;
            if (msgLastIndex >= 0) {
                return this.contacts[index].messages[msgLastIndex];
            } else {
                return 'Non ci sono messaggi';
            }
            //return this.contacts[index].messages[msgLastIndex];
        },
        getLastMessage(id) {
            const index = this.contacts.findIndex((el) => el.id === id);
            const msgLastIndex = this.contacts[index].messages.length - 1;
            return this.contacts[index].messages[msgLastIndex].message;
        },
        getLastMsgDate(id) {
            const index = this.contacts.findIndex((el) => el.id === id);
            const msgLastIndex = this.contacts[index].messages.length - 1;
            return this.contacts[index].messages[msgLastIndex].date;
        },
        deletMsg(i) {
            this.activeContact.messages.splice(i, 1);
        },
        
        // onSelectEmoji(emoji) {
        //     console.log(emoji)
        //     this.messageText += emoji.i;
        //     /*
        //       // result
        //       { 
        //           i: "😚", 
        //           n: ["kissing face"], 
        //           r: "1f61a", // with skin tone
        //           t: "neutral", // skin tone
        //           u: "1f61a" // without tone
        //       }
        //       */
        // },
    },
    computed: {
        activeContact() {
            return this.contacts.find((el) => el.id ===
                this.activeContactId);
        },
        lastAcccess() {
            const index = this.activeContact.messages.length - 1;
            return this.activeContact.messages[index].date
        },

    },
    mounted() {
        //console.log(this.contacts);
        //console.log(this.letters);
    }
}).mount('#app') 