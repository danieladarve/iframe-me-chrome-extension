try {
    const runtimeID = chrome.runtime.id;
    self.dd = importScripts(`chrome-extension://${runtimeID}/js/worker/modules.js`);
    self.ee = importScripts(`chrome-extension://${runtimeID}/js/worker/index.js`);
} catch (e) {
    console.log('Error loading modules:', e);
    console.error(e)
}