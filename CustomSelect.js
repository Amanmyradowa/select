/**
 *
 * @class
 *
 * @description Custom select dropdown
 *
 * @return { CustomSelect }
 */

class CustomSelect {
  /**
   * @private
   *
   * @type { Object }
   * */
  _options = {
    data: [],
  };

  /**
   * @private
   *
   * @type { HTMLElement }
   * */
  _element;

  /**
   * @private
   *
   * @type { HTMLElement }
   * */
  _header;

  /**
   * @private
   *
   * @type { HTMLElement }
   * */
  _inner;

  /**
   * @private
   *
   * @type { HTMLElement }
   * */
  _result;

  /**
   * @private
   *
   * @type { HTMLElement }
   * */
  _input;

  /**
   * @private
   *
   * @type { HTMLElement }
   * */
  _link;

  /**
   * @private
   *
   * @type { array }
   * */
  _items = [];

  /**
   * @private
   *
   * @type { Boolean }
   * */
  _isActive = false;

  /**
   * @constructor
   *
   * @param { string } selector
   *
   * @param { Object } options
   * */

  constructor(selectors = "", options = {}) {
    this._options = Object.assign(this._options, options);

    this._element = document.querySelector(selectors);

    this._header = this._element.querySelector("[data-custom-select-header]");

    this._inner = this._element.querySelector(".custom-select__content");

    this._result = this._header.querySelector("[data-custom-select-result]");

    this._input = this._element.querySelector("[data-custom-select-input]");

    this._link = this._element.querySelector(".cutom-select__list-link");
  }

  /**
   * @public
   *
   * @method
   *
   * @description initializes the event listeners for the input
   * */
  initialization() {
    this._input.addEventListener("input", this.inputHandler.bind(this));

    this._header.addEventListener("click", this.clickHandler.bind(this));
  }

  /**
   *
   * @public
   *
   * @method
   *
   * @description handles the input event.
   *
   * @param { InputEvent }
   * */
  inputHandler(event) {
    const newData = [];

    const data = this._options.data;
    
    const value = event.target.value.toUpperCase();

    for (let i = 0; i < data.length; i++)
    {
      if (data[i].title.toUpperCase().includes(value))
      {
        this.pushData(newData, i)
      }
    }
    this.createItems(newData);
  }

  /**
   *
   * @public
   *
   * @method
   *
   * @param { newData, i }
   * 
   * @description newData pushing
   * */
  pushData(newData, i)
  {
    newData.push(this._options.data[i]);
  }

  /**
   *
   * @public
   *
   * @method
   *
   * @description Handler for header node click, release input after closing
   * */
  clickHandler() {
    // Handler for header node click
    this._inner.classList.toggle("active");

    // release input after closing
    this._input.value = "";
  }

  /**
   *
   * @public
   *
   * @method
   *
   * @description creates new items based on a list of data.
   *
   * @param { Array }
   * */
  createItems(arr) {
    const elements = document.createDocumentFragment();

    for (let i = 0; i < arr.length; i++)
    {
      const li = document.createElement("li");

      li.className = "custom-select__list-item";

      li.setAttribute("data-custom-select-item", "");

      const a = document.createElement("a");
      
      a.href = "#";

      a.className = "cutom-select__list-link";

      a.textContent = arr[i].title;

      li.appendChild(a);
      
      elements.appendChild(li);
    }
    this.setFindedElements(elements);
  }



  /**
   *
   * @public
   *
   * @method
   *
   * @description This function sets the found elements.
   *
   * @param { Element }
   * */
  setFindedElements(findedElem) {
    const ulLists = document.querySelectorAll(".custom-select__list li");
    
    const ul = document.querySelector(".custom-select__list");

    ulLists.forEach((li) => {
      ul.removeChild(li);
    });
    ul.appendChild(findedElem);
  }
}