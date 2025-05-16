function onInstalledReason(data)
{
    if (data.reason === chrome.runtime.OnInstalledReason.INSTALL) {
        var url = `https://chrome.google.com/webstore/detail/${chrome.runtime.id}/support`;
        chrome.runtime.setUninstallURL(url);
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