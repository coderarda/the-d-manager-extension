export enum MessageType {
    STATUS = 0,
    LINK = 1,
}

export type DownloadURLObj = {
    url: string,
    title: string,
    filesize: number,
};

export enum MsgDestination {
    POPUP = 0,
    BACKGROUND, 
    SERVICE,
}

export type Message = {
    type: MessageType,
    destination: MsgDestination,
    payload: {
        message: DownloadURLObj,
    },
};

export type MsgResponse = {
    status: "success" | "error",
    
}
