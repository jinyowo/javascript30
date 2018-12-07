class RangeControl {
    constructor() {
        this._init();
        this._attachEvent();
    }

    _init() {
        this._inputContainer = document.querySelector('.controls');
    }

    _attachEvent() {
        this._inputContainer.addEventListener('input', this._onInputChange.bind(this));
    }

    _onInputChange(e) {
        const subfix = e.target.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + subfix);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new RangeControl();
});
