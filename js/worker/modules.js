function createMenu()
{
    chrome.contextMenus.removeAll();
    chrome.contextMenus.create({
        id: "gemini",
        title: "Gemini",
        contexts: ["all"]
    })
}

function onInstalledReason(data)
{
    if (data.reason === chrome.runtime.OnInstalledReason.INSTALL) {
        var url = `https://chrome.google.com/webstore/detail/${chrome.runtime.id}/support`;
        chrome.runtime.setUninstallURL(url);
    }

    createMenu()
}

function contextMenuClick(info, tab)
{
    if (info.menuItemId === "gemini") {
        // Handle the click event for the Gemini context menu
        console.log("Gemini context menu clicked");
        chrome.sidePanel
            .open({ windowId: tab.windowId })
            .then(() => {
                console.log("Side panel opened");
            })
    }
}

function onMessage(message, sender)
{
    (async () => {
        if (message.type === 'open_side_panel') {
            await chrome.sidePanel.open({ windowId: sender.tab.windowId });
        }
    })();
}