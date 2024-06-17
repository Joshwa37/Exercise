const person=[{name : "spoong",
               age:21,
               hobbies:"cook",  },
              {name: "patrick",
               age:45,
               hobbies:"fun", 
              }];
console.log(person[0].name);
console.log(person[1].name);
console.log(person[0].age);
console.log(person[1].age);
for(let person1 in person){
    console.log(person[person1].name);
}

