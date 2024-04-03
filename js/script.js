import {contacts} from './data.js';

const {createApp} = Vue;

createApp({
    data () {
        return {
            contacts: contacts,
            activeIndex: 0,
            backgroundColor: '',
            hoverIndex: -1,
            activeIndex: -1,
            
        }
    },
    methods: {
        toggleDone(id) {
            const contact = this.contacts.find((el) => {
                return el.id === id;
            });
            console.log('ciao');
        },
        handleMouseOver(index) {
            this.hoverIndex = index;
            this.backgroundColor = 'grey';
        },
        handleClick(index) {
            this.activeIndex = index;
          this.backgroundColor = 'lightcoral'; 
        }
    },
    computed: {
        
    },
    mounted() {
        console.log(this.contacts);
    }
}).mount('#app') 