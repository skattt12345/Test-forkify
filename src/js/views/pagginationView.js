import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PagginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const gotoPage = +btn.dataset.goto;
      handler(gotoPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      +this._data.results.length / this._data.resultsPerPage
    );

    if (curPage === 1 && numPages > 1) {
      return `
      <button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
      <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>${curPage + 1}</span>
  </button>`;
    }
    if (curPage === numPages && numPages > 1) {
      return `
      <button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>${curPage - 1}</span>
    </button>
    `;
    }
    if (curPage < numPages) {
      return `
      <button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>${curPage - 1}</span>
  </button>
      <button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
      <span>${curPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button> 
      `;
    }
    return '';
    fds;
  }
}

export default new PagginationView();
