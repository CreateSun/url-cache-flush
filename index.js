const fetchStatic = (chunkUrl) => {
  if (!chunkUrl) {
    return Promise.reject("Invalid URL");
  }
  return new Promise((resolve) => {
    fetch(`${chunkUrl}`, {
      method: "GET",
      headers: {
        "Cache-Control": "no-cache",
      },
    })
      .then(() => {
        resolve({ status: true });
      })
      .catch((error) => {
        resolve({ status: false, error });
      });
  });
};


module.exports = fetchStatic;