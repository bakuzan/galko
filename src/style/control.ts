import { css } from 'lit-element';

export default css`
  .glk-control {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
  .glk-control--checkbox {
    display: flex;
    min-height: 35px;
    max-height: 45px;
    flex: 1;
    margin-top: 10px;
  }
  .glk-control__label {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 0 1;
    padding: 2px;
    padding-left: 25px;
    cursor: pointer;
  }
  .glk-checkbox {
    /* For screenreader */
    border: 0;
    /*clip: rect(0 0 0 0);*/
    height: 1px;
    margin: -1px;
    overflow: visible;
    padding: 0;
    position: absolute;
    top: 1px;
    left: 8px;
    width: 1px;
    -webkit-appearance: none;
    /* For screenreader */
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .glk-checkbox::before,
  .glk-checkbox:checked::before {
    color: #000;
    transition: all 0.3s;
    cursor: pointer;
    z-index: 10;
  }
  .glk-checkbox::before {
    content: '\u2610';
    font-size: 2em;
    width: 20px;
    height: 20px;
    margin: 0 5px;
  }
  ,
  .glk-checkbox:disabled::before {
    content: '\u274c';
    color: #666;
    cursor: default;
  }
  .glk-checkbox:checked::before {
    content: '\u2611';
    color: #0f0;
  }
`;
