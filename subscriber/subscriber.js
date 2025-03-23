"use strict";
// Baza publikatora zawiera metody pozwalajace na:
// Subskrypcje
// UnSub
// Metode powiadomienia
class EvenManager {
    listeners = new Map();
    subscribe(eventType, listener) {
        this.listeners.set(eventType, listener);
    }
    unSubscribe(eventType, listener) {
        this.listeners.delete(listener);
    }
    notify(eventType, data) {
        const listener = this.listeners.get(eventType);
        if (listener) {
            listener(data);
        }
    }
}
class Editor {
    events;
    eventName = '';
    constructor(eventsManager) {
        this.events = eventsManager;
    }
    openStatus(name) {
        this.eventName = name;
        this.events.notify("open", this.eventName);
    }
    closeStatus() {
        this.events.notify("close", this.eventName);
    }
}
class LoggingListener {
    log;
    message;
    constructor(log, message) {
        this.log = log;
        this.message = message;
    }
    update(name) {
        return name;
    }
}
class EmailAlertListener {
    email;
    message;
    constructor(email, message) {
        this.email = email;
        this.message = message;
    }
    update(name) {
        return name;
    }
}
