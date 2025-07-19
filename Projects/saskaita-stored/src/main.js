import Frame from './Frame';
import LS from './LS';

export default class Main extends LS {


    static init() {
        this.storageInit({
            key: 'niceArt'
        });

        if (document.querySelector('[data-create]')) {
            this.initCreate();
        } else if (document.querySelector('[data-read]')) {
            this.initRead();
        } else if (document.querySelector('[data-delete]')) {
            this.initDelete();
        } else if (document.querySelector('[data-edit]')) {
            this.initEdit();
        } else if (document.querySelector('[data-show]')) {
            this.initShow();
        }
    }

    static initShow() {
        const frames = this.read();
        const id = window.location.hash.slice(1); // id paemimas is hastago
        const frameToShow = frames.find(f => f.id == id);
        if (!frameToShow) {
            window.location.href = 'read.html'; // puslapio redirectas
        }
        const f = document.querySelector('[data-frame]');
        const frame = new Frame(24, frameToShow.frame, f, 'view');
        frame.addBorders('transparent', 1);
    }


    static initDelete() {
        const frames = this.read();
        const id = window.location.hash.slice(1); // id paemimas is hastago
        const frame = frames.find(f => f.id == id);
        if (!frame) {
            window.location.href = 'read.html'; // puslapio redirectas
        }
        document.querySelector('[data-art-title]').innerText = frame.title;
        const destroyButton = document.querySelector('[data-destroy]');

        destroyButton.addEventListener('click', _ => {
            this.destroy(frame.id);
            window.location.href = 'read.html';
        });
    }


    static initRead() {
        const frames = this.read();
        const template = document.querySelector('template');
        const listEl = document.querySelector('[data-list]');

        frames.forEach(activeFrame => {
            const clone = template.content.cloneNode(true);
            clone.querySelector('[data-title]').textContent = activeFrame.title;
            clone.querySelector('[data-edit]').setAttribute('href', 'edit.html#' + activeFrame.id);
            clone.querySelector('[data-delete]').setAttribute('href', 'delete.html#' + activeFrame.id);
            clone.querySelector('[data-show]').setAttribute('href', 'show.html#' + activeFrame.id);

            const f = clone.querySelector('[data-frame]');
            const frame = new Frame(4, activeFrame.frame, f, 'view');
            frame.addBorders('gray', 1);

            listEl.appendChild(clone);
        });
    }

    static initEdit() {
        const frames = this.read();
        const id = window.location.hash.slice(1); // id paemimas is hastago
        const frameToEdit = frames.find(f => f.id == id);
        if (!frameToEdit) {
            window.location.href = 'read.html'; // puslapio redirectas
        }

        const f = document.querySelector('[data-edit-frame]');
        const colorInput = document.querySelector('[type="color"]');
        const titleInput = document.querySelector('input[data-title]');
        const saveButton = document.querySelector('button[data-save]');
        const clear = document.querySelector('button[data-clear]');

        titleInput.value = frameToEdit.title;
        const frame = new Frame(10, frameToEdit.frame, f, 'edit');
        frame.addBorders('gray', 1);
        frame.setActiveColor(colorInput.value);

        colorInput.addEventListener('change', e => {
            frame.setActiveColor(e.target.value);
        });

        clear.addEventListener('click', _ => {
            frame.reset();
        });

        saveButton.addEventListener('click', _ => {
            this.update(frameToEdit.id, {
                frame: frame.export(),
                title: titleInput.value
            });
            window.location.href = 'read.html';
        });
    }


    static initCreate() {
        const f = document.querySelector('[data-create-frame]');
        const colorInput = document.querySelector('[type="color"]');
        const titleInput = document.querySelector('input[data-title]');
        const saveButton = document.querySelector('button[data-save]');
        const clear = document.querySelector('button[data-clear]');
        const aiButton = document.querySelector('button[data-ai]');

        const frame = new Frame(10, 20, f, 'create');
        frame.addBorders('gray', 1);
        frame.setActiveColor(colorInput.value);

        colorInput.addEventListener('change', e => {
            frame.setActiveColor(e.target.value);
        });

        clear.addEventListener('click', _ => {
            frame.reset();
        });

        aiButton.addEventListener('click', _ => {
            frame.ai();
        });

        saveButton.addEventListener('click', _ => {
            this.store({
                frame: frame.export(),
                title: titleInput.value
            });
            colorInput.value = '#000000';
            frame.reset();
            titleInput.value = '';
        });
    }
}