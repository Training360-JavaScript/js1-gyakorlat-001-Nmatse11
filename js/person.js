let personDataLog = ({firstname = 'John', lastname = 'Doe', age = 33}) =>
'My name is ' + firstname + ' ' + lastname + ". I'am " + age +' years old.'

//console.log(personDataLog('Pál', 'Kovács', 22));
//console.log(personDataLog({age:22}));
//console.log(personDataLog({firstName: 'Thomas'}));
console.log(personDataLog({}));

