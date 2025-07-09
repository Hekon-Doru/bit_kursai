import Frame from "./Frame";
import LS from "./LS";

export default class Main extends LS {



  static init() {

    this.storateInit({
      key: 'niceArt'
    });

    if (document.querySelector('[data-create]')) {
      this.initCreate();
    }
    
  }

  static initCreate() {
    const f = document.querySelector('[data-create-frame]');
    const colorInput = document.querySelector('[type="color"]');
    
    const titleInput = document.querySelector('input[data-title]');
    
    const saveButton = document.querySelector('button[data-save]');
    const clear = document.querySelector('button[data-clear]');

    const frame = new Frame(10, 20, f, 'create');

    console.log(frame);

    frame.addBorders('gray', 1);
    frame.setActiveColor(colorInput.value);

    colorInput.addEventListener('change', e => {
      frame.setActiveColor(e.target.value);
    });

    clear.addEventListener('click', _ => {
      frame.reset();
    });

    saveButton.addEventListener('click', _ => {
      this.store({
        frame,
        title: titleInput.value
      });
    });

   
  }


}