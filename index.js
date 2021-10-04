const cat = {
    name: 'Mukha',
    isMale: false,
    color: 'black and white',
    breed: 'yard',
    age: 2,
    isSlipping: true,
    talk:function(){
        return 'meow';
    },
};

cat.age++;
console.log(cat.talk());
cat.countPaws = 4;
console.log(cat);
console.log(cat.name);
console.log(cat.isMale);
console.log(cat.age);

delete cat.isSlipping;
console.log(cat);