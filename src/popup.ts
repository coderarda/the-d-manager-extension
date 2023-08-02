'use strict';

import './popup.css';
import { Message, MessageType, MsgDestination } from './shared';

const list = document.getElementById("downloads");

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    tabs.forEach((tab) => {
        chrome.tabs.sendMessage<Message, string>(tab.id, {
            type: MessageType.STATUS,
            destination: MsgDestination.SERVICE,
            payload: {
                message: "Requesting Link..."
            }
        }, (response) => {
            console.log(response);
            const listItem = document.createElement("li");
            listItem.innerHTML = response;
            list.appendChild(listItem);
        });
    })
});
