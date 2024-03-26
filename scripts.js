function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Update clock element with current time
  const clockElement = document.getElementById("clock");
  clockElement.textContent = `${hours}:${minutes}:${seconds}`;

  // Calculate countdown to next prayer
  // This is simplified; you would actually compare current time to prayer times
  const countdownElement = document.getElementById("countdown");
  countdownElement.textContent = `(-00:36:54)`;
}

// Call updateClock every second
setInterval(updateClock, 1000);

// Initial call to display the time right away
updateClock();

// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker.register("/sw.js").then(
//       (registration) => {
//         console.log(
//           "ServiceWorker registration successful with scope: ",
//           registration.scope
//         );
//       },
//       (err) => {
//         console.log("ServiceWorker registration failed: ", err);
//       }
//     );
//   });
// }
