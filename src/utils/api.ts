export const apiSend = () =>
  new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Send success!");
      } else {
        reject("Error: Send failed.");
      }
    }, 3000);
  });
