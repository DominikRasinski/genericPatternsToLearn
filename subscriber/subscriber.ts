// Baza publikatora zawiera metody pozwalajace na:
// Subskrypcje
// UnSub
// Metode powiadomienia
class EvenManager {
    private listeners: Map<string, any> = new Map();

    subscribe(eventType: string, listener: any) {
        this.listeners.set(eventType, listener);
    }

    unSubscribe(eventType: string, listener: any) {
        this.listeners.delete(listener);
    }

    notify(eventType: string, data: any) {
        const listener = this.listeners.get(eventType);
        if(listener) {
            listener(data);
        }
    }
}

class Editor {
    events: EvenManager;
    private eventName: string = '';

    constructor(eventsManager: EvenManager) {
        this.events = eventsManager;
    }

    openStatus(name: string) {
        this.eventName = name;
        this.events.notify("open", this.eventName);
    }

    closeStatus() {
        this.events.notify("close", this.eventName);
    }

}

interface EventListener {
    update(name: string): string;
}

class LoggingListener {
    private log: string;
    private message: string;

    constructor(log: string, message: string) {
        this.log = log;
        this.message = message;
    }

    update(name: string): string {
        return name
    }
}

class EmailAlertListener {
    private email: string;
    private message: string;

    constructor(email: string, message: string) {
        this.email = email;
        this.message = message;
    }

    update(name: string): string {
        return name
    }
}