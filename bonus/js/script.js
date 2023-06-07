"use strict";

// RICHIAMO FUNZIONE CREATE_APP VUE.JS E LA INSERISCO IN UNA CONSTANTE
const {createApp} = Vue;

// UTILIZZO FUNZIONE CREATE_APP
createApp({
    // DEFINIZIONE DATA CON L'OGGETTO RETURN
    data(){
        return{
            // DEFINIZIONE VARIABILI DEL RETURN
            message : "Benvenuto vue.js!",

            imgUrl  : "https://picsum.photos/200/300"
        }
    }
}).mount('#app'); // RICHIAMO IL CONTAINER HTML DOVE APPLICARE LA FUNZIONE CREATE_APP