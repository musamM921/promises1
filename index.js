// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1 
//     if (a == 2) {
//        resolve('success')
//     } else {
//         reject('failed')
//     }

const { rejects } = require("assert")

// })

// p.then((message) => {
//     console.log('This is in the then ' + message);
// }).catch((message) => {
//     console.log('this is in catch ' + message);
// })

function watchTutorialCallback(callback, errorCallback) {
    let userLeft = true
    let userWatchingCatMeme = false
  
    if (userLeft) {
      errorCallback({
        name: 'User Left', 
        message: ':('
      })
    } else if (userWatchingCatMeme) {
      errorCallback({
        name: 'User Watching Cat Meme',
        message: 'WebDevSimplified < Cat' 
      })
    } else {
      callback('Thumbs up and Subscribe')
    }
  }
  
  function watchTutorialPromise() {
    return new Promise ((resolve, reject) => {
        if (userLeft) {
            reject({
              name: 'User Left', 
              message: ':('
            })
          } else if (userWatchingCatMeme) {
            reject({
              name: 'User Watching Cat Meme',
              message: 'WebDevSimplified < Cat' 
            })
          } else {
            resolve('Thumbs up and Subscribe')
          }
    })
  }
  
 watchTutorialPromise().then((message) => {
    console.log('succsses' + message);
 }).catch((error)=> {
    console.log(error.name + ' ' + error.message);
 })