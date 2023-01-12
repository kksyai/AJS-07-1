export default class Validator {
  constructor(name){
   function validateUserName(charName){
    if(charName.match(/([^-\w])|(\d{4,})|(^[_\d-])|([_\d-]$)/g)){
        throw new Error('Name not allowed');
      }
    return charName;
    }
  this.name = validateUserName(name);
  }
}


// Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9);
// Имя не должно содержать подряд более трёх цифр, 
// а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.