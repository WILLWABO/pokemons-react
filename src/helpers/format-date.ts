// import Moment from 'moment';

// ATTENTION AUX COTES QUI ENTOURENT LE SYMBOLE $...

export const formatDate = (date: Date = new Date()): string =>{
    return `${date.getDate()}/${date.getMonth() +1}/${date.getFullYear()}`;
    // return Moment(date).format("DD/MM/YYYY");
  }

//cette fonction permet un affichage plus sympatique de la date. elle prend en 
//paramètre une date qui est une chaine de caractère et retourne une date
// date.getMonth compte les dates à partir de 0 (donc décembre = 11)
// Moment gère cet affichage aussi bien que la méthode précédente
