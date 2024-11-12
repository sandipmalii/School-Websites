var person={
    firstName:'Alan', 
    lastName:'Walker', 
    age:23, 
    nationality:'Norwegian',
    fullName:function(){
        return person.firstName+" "+person.lastName;
      }
};
console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());
console.log(person.age);
console.log(person.nationality);
