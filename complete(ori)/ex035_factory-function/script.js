function createH1(text) {
    function element() {
        const h1Element = document.createElement('h1');
        h1Element.innerText = text;
    }
    const obj = {
        text: text,
        element
    }
    return obj;
}

const primeiraH1 = createH1('Sou a primeira H1');
const segundaH1 = createH1('Sou a segunda H1')

console.log(primeiraH1);
console.log(segundaH1);

// Exercícios / Exemplo real de Factory Function

function $$(selectedElements) {
    const elements = document.querySelectorAll(selectedElements);
    
    function hide() {
        elements.forEach(element => {
            element.style.display = 'none';
        });
        return $$(selectedElements);
    }

    function show() {
        elements.forEach(element => {
            element.style.display = 'initial';
        });
        return $$(selectedElements);
    }

    function on(onEvent, callback) {
        elements.forEach(element => {
            element.addEventListener(onEvent, callback);
        });
        return $$(selectedElements);
    }

    function addClass(className) {
        elements.forEach(element => {
            element.classList.add(className);
        });
        return $$(selectedElements);
    }

    function removeClass(className) {
        elements.forEach(element => {
            element.classList.remove(className);
        });
        return $$(selectedElements);
    }

    return {
        elements,
        hide,
        show,
        on,
        addClass,
        removeClass,
    }
}

const btns = $$('button');
console.log(btns.hide().elements);
console.log(btns.show().elements);

function handleClick(event) {
    console.log(event.target);
    btns.addClass('ativo');
}

btns.on('click', handleClick)
