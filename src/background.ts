"use strict";

type DownloadURLObj = {
    url: string,
};

chrome.downloads.onDeterminingFilename.addListener(async (item) => {
  chrome.downloads.erase({ id: item.id });
  const urlObj: DownloadURLObj = { url: item.finalUrl };
  const resp = await fetch("http://localhost:4000/url", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(urlObj),
  });
  console.log(await resp.json());
});
