window.addEventListener("load", init);

function init() {
    let form = document.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      let output = document.querySelector('output');
      let firstNum = document.querySelector('#first-num').value;
      let secondNum = document.querySelector('#second-num').value;
      let operator = document.querySelector('#operator').value;
      try {
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
      } catch (err) {
        if (err instanceof ReferenceError) {
            throw new Error("Make sure inputs are numerical values.");
        }
        console.error(err);
      } finally {
        console.log("Ready for next operation to execute")
      }
    });

    let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

    // Start your code here
    // You may move this JS to another file if you wish
    let selectedText = '';

    for (let errBtn of errorBtns) {
      errBtn.addEventListener("click", () => {
        selectedText = errBtn.textContent;
        respondToSelection(selectedText);
      })
    }
}

function respondToSelection(text) {
    try { console.log(x); }
    catch (err) {
        switch(text) {
            case "Console Log":
                console.log(err);
                break;
            case "Console Error":
                console.error(err);
                break;
            case "Console Count":
                console.count(err);
                break;
            case "Console Warn":
                console.warn(err);
                break;
            case "Console Assert":
                const x = 1;
                const y = 2;
                const reason = 'x is expected to be equal to y';
                console.assert(x == y, {x, y, reason});
                break;
            case "Console Clear":
                console.clear();
                break;
            case "Console Dir":
                console.dir(document.head);
                break;
            case "Console dirxml":
                console.dirxml(document);
                break;
            case "Console Group Start":
                console.group('1');
                break;
            case "Console Group End":
                console.groupEnd('1');
                break;
            case "Console Table":
                console.table([
                    {
                        department: 'math',
                        number: '140',
                    },
                    {
                        department: 'cse',
                        number: '140',
                    },
                    {
                        department: 'cse',
                        number: '140L',
                    }
                ]);
                break;
            case "Start Timer":
                console.time();
                break;
            case "End Timer":
                console.timeEnd();
                break;
            case "Console Trace":
                console.trace();
                break;
            case "Trigger a Global Error":
                try {
                    throw new TypeError("This is your doing.");
                } catch (err) {
                    console.error(err);
                }
                break;
            default:
                console.error("No selection!");
        }
    }
}