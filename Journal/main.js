(function (window) {
    var button = document.getElementById('entryInputButton');

    button.onclick = function (ev) {
        ev.preventDefault();
        var inputBox = document.getElementById('entryInputText');
        var entriesBox = document.getElementById('entriesContainer');
        if (inputBox.value !== "") {
            var entryBox = getElementWithClass('div', 'col-12 shadow w-100 m-1');
            var entryBoxInnerBox = getElementWithClass('div', 'row');
            var dateEntry = getElementWithClass('div', 'col-3 bg-secondary p-3')
            var dataEntry = getElementWithClass('div', 'col-9 p-3');
            entryBoxInnerBox.appendChild(dateEntry);
            entryBoxInnerBox.appendChild(dataEntry);
            entryBox.appendChild(entryBoxInnerBox);
            dateEntry.innerText = getTimeEntry();
            dataEntry.innerText = inputBox.value;
            entriesBox.prepend(entryBox);
            inputBox.value = "";
        }
    };

    function getTimeEntry() {
        var result = '';
        var date = new Date();
        result += date.toDateString().split(" ", 3).join(" ") + "\n" + date.toLocaleTimeString().split(" ").map(function (element, index) {
            if (index === 0)
                element = element.split(":", 2).join(":");
            return element;
        }).join(" ");
        return result;
    }

    function getElementWithClass(tag, classes) {
        var element = document.createElement(tag);
        classes.split(" ").forEach(function (value) {
            element.classList.add(value);
        })
        return element;
    }
})(window);