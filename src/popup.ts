"use strict";

import "./popup.css";
import type { DownloadURLObj, MsgResponse } from "./shared";

window.onload = () => {
    const list = document.getElementById("downloads-list");
    if (list) {
        const dw = document.createElement("li");
        chrome.runtime.onMessage.addListener((msg: DownloadURLObj, sender, sendResponse: (r: MsgResponse) => void) => {
            dw.textContent = msg.title + " " + msg.url;
            list.appendChild(dw);
            sendResponse({
                status: "success",
            });
        });
    }
};
