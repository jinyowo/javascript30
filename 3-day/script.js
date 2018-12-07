class RangeControl {
    constructor() {
        this._init();
        this._attachEvent();
        this._setDefaultOption();
    }

    _init() {
        this._colorTitle = document.querySelector('h1 .js');
        this._img = document.querySelector('.main-img');
        this._spacingInput = document.querySelector('input.spacing');
        this._blurInput = document.querySelector('input.blur');
        this._colorInput = document.querySelector('input.color');

        this._spacingSizing = this._spacingInput.getAttribute('data-sizing');
        this._blurSizing = this._blurInput.getAttribute('data-sizing');
    }

    _setDefaultOption() {
        this._setSpacing();
        this._setBlur();
        this._setColor();
    }

    _attachEvent() {
        this._spacingInput.addEventListener('input', this._onInputSpacing.bind(this));
        this._blurInput.addEventListener('input', this._onInputBlur.bind(this));
        this._colorInput.addEventListener('input', this._onInputColor.bind(this));
    }

    _onInputSpacing(e) {
        if (e.target !== this._spacingInput) return;

        this._setSpacing();
    }

    _onInputBlur(e) {
        if (e.target !== this._blurInput) return;

        this._setBlur();
    }

    _onInputColor(e) {
        if (e.target !== this._colorInput) return;

        this._setColor();
    }

    _setSpacing() {
        this._img.style.padding = `${this._spacingInput.value}${this._spacingSizing}`;
    }

    _setBlur() {
        this._img.style.filter = `blur(${this._blurInput.value}${this._blurSizing})`;
    }

    _setColor() {
        this._colorTitle.style.color = this._colorInput.value;
        this._img.style.backgroundColor = this._colorInput.value;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new RangeControl();
});
