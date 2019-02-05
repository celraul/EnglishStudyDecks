import { Injectable } from '@angular/core';
import { MESSAGES } from '../messages/messages.conts';

@Injectable()
export class MessageService {

    constructor() { }

    getByKey(key: string): string {
        return (<any>MESSAGES)[key];
    }
}