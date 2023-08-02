'use strict';

import { Message, MessageType, MsgDestination } from "./shared";

chrome.runtime.onMessage.addListener((msg: Message, sender, sendResponse) => {
    if (msg.destination == MsgDestination.BACKGROUND) {
        console.log(msg.payload.message);
        chrome.runtime.sendMessage<Message, string>({
            type: MessageType.LINK,
            destination: MsgDestination.POPUP,
            payload: msg.payload,
        }, (resp) => {
            console.log(resp);
        });
        sendResponse("Message received!");
    }
})


