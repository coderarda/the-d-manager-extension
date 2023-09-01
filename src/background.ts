'use strict';
import axios from "axios";

chrome.downloads.onCreated.addListener((it) => {
    axios.post("localhost:4000/url", it.finalUrl)
    .then((res) => res.data)
    .then((data) => console.log(data));
    chrome.downloads.erase(
        {
            id: it.id,
        }
    );
});

