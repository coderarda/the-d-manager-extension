'use strict';

chrome.downloads.onCreated.addListener((it) => {
    fetch("localhost:4000/url", { method: "POST", body: it.finalUrl })
    .then((res) => res.json())
    .then((val) => console.log(val));
    chrome.downloads.erase(
        {
            id: it.id,
        }
    );
});

