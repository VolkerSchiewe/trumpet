export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('../service-worker.ts')
      .then(() => {
        console.log("Service Worker registered.");
      });
  } else {
    console.error('Not able to register service worker')
  }
}