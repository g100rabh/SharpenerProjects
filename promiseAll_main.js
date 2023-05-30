// const posts = [{title: 'POST1'}];
// //Do not touch this function
// var currentDate = new Date();
// function printPost() {
//     posts.forEach((post) => {
//         console.log(post.title)
//     })
// }
// function create2ndPost() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({title: 'POST2'});
//             currentDate = new Date();
//             resolve()
//         }, 3000, console.log(`Last user Activity: ${currentDate}`))
//     }) 
// }
// //Do not touch this function
// function create3rdPost() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({title: 'POST3'});
//             resolve();
//         }, 2000, console.log(`Last user Activity: ${currentDate}`))
//     }) 
// }
// function updateLastUserActivityTime() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             currentDate = new Date();
//             let time = currentDate.getTime();
//             console.log(`updateLastUserActivityTime: ${time}`)
//             resolve()
//         }, 1000)
//     })
// }

// //Do not touch this function
// function deletePost(){
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             if(posts.length > 0){
//                 const poppedElement  = posts.pop();
//                 resolve(poppedElement);
//             } else {
//                 reject("ERROR: ARRAY IS EMPTY")
//             }
//         }, 1000)
//     })
// }

// create2ndPost()
//     .then(updateLastUserActivityTime)
//     .then(create3rdPost)
//     .then(updateLastUserActivityTime)
//     .then(deletePost)
//     .then(printPost);

const posts = [{title: 'POST1'}];
const currentDate = new Date();
function printPost() {
    return new Promise( (resolve, reject)  => {
        resolve(posts.forEach((post) => {
            console.log(post.title)})
    )})
}
function create2ndPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST2'});
            resolve(new Date())
        }, 3000, console.log(`Last user Activity: ${currentDate}`))
    }) 
}

function updateLastUserActivityTime() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const currentDate = new Date();
            let time = currentDate.getTime();
            resolve(time)
        }, 1000)
    })
}

function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
    })
}

Promise.all([create2ndPost(),updateLastUserActivityTime(),deletePost(),updateLastUserActivityTime()])
    .then((res) => { 
        console.log(res)
    })
    .then(printPost);

