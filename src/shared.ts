export enum MessageType {
    STATUS = 0,
    LINK = 1,
}

export enum MsgDestination {
    POPUP = 0,
    BACKGROUND, 
    SERVICE,
}

export type Message = {
    type: MessageType,
    destination: MsgDestination,
    payload: {
        message: string,
    },
};
