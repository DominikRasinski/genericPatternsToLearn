// Baza publikatora
class EvenManager {
    private listeners: Map<string, any> = new Map();

    subscribe(eventType: string, listener: any) {
        this.listeners.set(eventType, listener);
    }

    unSubscribe(eventType: string, listener: any) {
        this.listeners.delete(listener);
    }

    notify(eventType: string, data: any) {
        {
        // musi przejść po dostępnych zdarzeniach w mapie i je zaktualizować
        }
    }
}