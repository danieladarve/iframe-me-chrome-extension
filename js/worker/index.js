chrome.runtime.onInstalled.addListener(onInstalledReason);
chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch(console.error);
chrome.runtime.onMessage.addListener(onMessage)