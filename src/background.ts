"use strict";

import type { DownloadURLObj, MsgResponse } from "./shared";

chrome.downloads.onDeterminingFilename.addListener((item) => {
    chrome.downloads.erase({ id: item.id });
    const urlObj: DownloadURLObj = {
        id: 0,
        url: item.finalUrl, 
        filesize: item.fileSize, 
        title: item.filename, 
    };
    fetch("http://localhost:4000", { method: "POST", body: JSON.stringify(urlObj) }).then((res) => console.log(res));
    chrome.runtime.sendMessage<DownloadURLObj, MsgResponse>(urlObj, (res) => {
        res.status == "error"
            ? console.log("Error occurred while sending.")
            : console.log("Sent successfully!");
    });
});
