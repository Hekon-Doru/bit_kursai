import { v4 } from 'uuid';

export default class LS {

    static key;

    static storageInit(settings) {
        this.key = settings.key;
    }

    static read() {
        const storedData = localStorage.getItem(this.key);
        if (null === storedData) {
            return [];
        }
        return JSON.parse(storedData);
    }

    static write(data) {
        localStorage.setItem(this.key, JSON.stringify(data));
    }

    static store(data) {
        this.write([...this.read(), { ...data, id: v4() }]);
    }

    static destroy(id) {
        this.write(this.read().filter(f => f.id != id));
    }

    static update(id, data) {
        this.write(this.read().map(f => f.id == id ? { ...f, ...data, id } : f));
    }
}