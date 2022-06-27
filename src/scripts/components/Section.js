export default class Section {
    constructor({ data, renderer }, containerSelector) {
        this._renderedItems = data;
        this._renderer = renderer;
        this._container = containerSelector;
    }

    addItem(item) {
        this._container.prepend(item);
    }

    renderItems() {
        for (let i = this._renderedItems.length - 1; i >= 0; i = i - 1) {
            this._renderer(this._renderedItems[i]);
        }
    }
}