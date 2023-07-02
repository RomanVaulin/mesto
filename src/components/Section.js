export default class Section {
    constructor(renderer, containerSelector) {
        this._container = document.querySelector(containerSelector);
        // this._initialCards = items;
        this.renderer = renderer;
    }

    addCardsFromArray(dataCard) {
        dataCard.forEach(element => {
            this.renderer(element)
        });
    }

    addItem(domElement) {
        this._container.prepend(domElement);
    }

    addItemAppend(domElement) {
        this._container.append(domElement);
    }
}