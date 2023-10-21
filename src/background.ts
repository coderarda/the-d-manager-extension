"use strict";

import type { DownloadURLObj, MsgResponse } from "./shared";

chrome.downloads.onDeterminingFilename.addListener(async (item) => {
  chrome.downloads.erase({ id: item.id });
  const urlObj: DownloadURLObj = { url: item.finalUrl, filesize: item.fileSize, title: item.filename };
  const resp = await fetch("http://localhost:4000/url", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(urlObj),
  });
  chrome.runtime.sendMessage<DownloadURLObj, MsgResponse>(urlObj, (res) => {
    res.status == "error" 
    ? console.log("Error occurred while sending.") 
    : console.log("Sent successfully!");
  });
  console.log(await resp.json());
});
