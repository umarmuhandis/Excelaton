import {$} from '../../core/dom';

const resize = (e, $this) => {
  const isColResize = e.target.dataset.resize === 'col';
  const isRowResize = e.target.dataset.resize === 'row';

  if (e.target.dataset.resize) {
    const $resizer = $(e.target);
    const $resizerLine = $resizer.querySelector('.resize__line');
    const $parent = $resizer.closest('[data-resizable]');
    const coords = $parent.getCoords();
    const tableCoords = $parent.closest('.table').getCoords();

    let cells;
    let finalWidth;
    let finalHeight;

    if (isColResize) {
      $resizerLine.css({height: `${tableCoords.height - tableCoords.top}px`})
      const colIndex = $parent.dataset.colIndex;
      console.log($this);
      cells = $this.$root
          .querySelectorAll(`div[data-cell-index="${colIndex}"]`);
    }

    if (isRowResize) {
      $resizerLine.css({width: `${tableCoords.width}px`});
    }


    document.onmousemove = (event) => {
      if (isColResize) {
        const delta = event.pageX - coords.right;
        $resizer.css({right: `${-delta}px`});
        finalWidth = coords.width + delta;
      }

      if (isRowResize) {
        const delta = event.clientY - coords.bottom;
        $resizer.css({bottom: `${-delta}px`});
        finalHeight = coords.height + delta;
      }
    }

    document.onmouseup = () => {
      if (isColResize) {
        cells.forEach((cell) => cell.style.width = `${finalWidth}px`);
        $parent.css({width: `${finalWidth}px`});
        $resizer.css({right: '0'});
        $resizerLine.css({height: '0'});
      }

      if (isRowResize) {
        $parent.css({height: `${finalHeight}px`});
        $resizer.css({bottom: '0'});
        $resizerLine.css({width: '0'});
      }

      document.onmousemove = null;
      document.onmouseup = null;
    }
  }
}

export default resize;
