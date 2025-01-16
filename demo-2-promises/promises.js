const myPromise = new Promise((resolve, reject) => {
  if (5 > 4) {
    // successful completion
    resolve("success!");
  } else {
    // failed to complete
    reject("failure");
  }
});

myPromise
  .then((res) => console.log(res))
  .catch((err) => console.error("ERR", err));
