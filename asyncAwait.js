console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));

    const addButter = new Promise((resolve, reject) => resolve('butter'));

    const getColdDrinks = new Promise((resolve, reject) => resolve('cold drink'));

    let ticket = await promiseWifeBringingTicks;
    
    // console.log(`wife: i have the ${ticket}`);
    // console.log('husband: we should go in');
    // console.log('wife: no i am hungry');

    // let popcorn = await getPopcorn;

    // console.log(`husband: i got some ${popcorn}`);
    // console.log('husband: we should go in');
    // console.log('wife: I need butter on my popcorn');

    // let butter = await addButter;

    // console.log(`husband: i got some ${butter} on popcorn`);
    // console.log('husband: anything else');
    // console.log(`wife: I need some cold drinks also `);

    // let coldDrink = await getColdDrinks;

    // console.log(`husband: i got your favourite ${coldDrink}`);
    // console.log(`wife: let's go now we are getting late`);
    
    let [popcorn, butter, coldDrink] = await Promise.all([getPopcorn, addButter, getColdDrinks]);

    console.log(`${popcorn}, ${butter}, ${coldDrink}`);
    return ticket;
}
 
preMovie().then((m) => console.log(m));

console.log('person3: shows ticket');
console.log('person4: shows ticket');
