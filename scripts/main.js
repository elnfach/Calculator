var currentTheme = "light";
var is_brackets = false;
var is_set = true;

function clear_all()
{
    document.getElementById("result").value = "";
}

function display(value)
{
    document.getElementById("result").value += value;
}

function calculate()
{
    document.getElementById("error").innerText = "";
    try {
        var result = eval(document.getElementById("result").value);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("error").innerText = "Ошибка: " + error.message || "Неизвестная ошибка";
    }
}

function point()
{
    var result = document.getElementById("result").value;
    if (!result.includes(".")) {
        document.getElementById("result").value += ".";
    }
}

function brackets()
{
    var result = document.getElementById("result").value;
    if (!is_brackets) {
        is_brackets = true;
        result += "(";
    } else {
        is_brackets = false;
        result += ")";
    }
    document.getElementById("result").value = result;
}

function backspace()
{
    var result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
}