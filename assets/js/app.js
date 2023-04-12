/* 
Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const { createApp } = Vue

createApp({
   data() {
      return {
         url: 'https://flynn.boolean.careers/exercises/api/random/mail',
         mails: [],
         complete: false,
         error: null,
      }
   },
   methods: {
      getMails() {
         for (let i = 0; i < 10; i++) {
            axios
               .get(this.url)
               .then(response => {
                  console.log(response);
                  this.mails.push(response.data.response)
                  if (i == 10 - 1) {
                     this.complete = true;
                  }
               }).catch(error => {
                  console.error(error.message);
                  this.error = error.message;
               }) 

               
         }
      }
   },
   mounted() {
      this.getMails();
   }
}).mount('#app');