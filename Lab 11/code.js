function Calculation(){
    // Получаем значения из полей ввода
    var n = document.getElementsByName("number_n")[0].value;
    var m = document.getElementsByName("number_m")[0].value;

    // Проверяем валидность введенных данных
    if(!/^[0-9]+$/.test(n) || !/^[0-9]+$/.test(m) || m < 1 || n < 1){
        // Выводим сообщение об ошибке, если данные неверные
        alert("Пожалуйста, убедитесь, что вы вводите только натуральные числа во все поля.");
    }else if(n > 0 && m > 0){
        // Вычисляем НОК и выводим результат
        var multiple = n * m/ gcd(n, m);
        document.getElementById("multiple").textContent = "НОК = " + multiple;
    }
}

function gcd(a, b) {
    // Находим наибольший общий делитель (НОД) по алгоритму Эвклида
    while (b != 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
