// Listen for the extension install
chrome.runtime.onInstalled.addListener(onInstalledReason);
// Listen for context menu click
chrome.contextMenus.onClicked.addListener(contextMenuClick);
chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch(console.error);
chrome.runtime.onMessage.addListener(onMessage)