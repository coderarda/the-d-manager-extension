'use strict';

import { Message, MsgDestination } from "./shared";

console.log("Content script waiting for downloads!");
const socket = new WebSocket("ws://127.0.0.1:3001");

document.addEventListener("click", (ev) => {
    if (ev.target instanceof HTMLAnchorElement) {
        ev.preventDefault();
        const href = ev.target.href;
        chrome.runtime.onMessage.addListener((msg: Message, sender, sendResponse) => {
            if (msg.destination == MsgDestination.SERVICE) {
                console.log(msg.payload);
            }
            socket.send(href);
            sendResponse(href);
        })
    }
});
