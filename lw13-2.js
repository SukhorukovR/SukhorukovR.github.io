// Ожидание загрузки документа перед выполнением скрипта
$(document).ready(function() {
    // Для каждого элемента с классом 'catWord'
    $('.catWord').each(function() {
        // Получение исходного текста
        let originalText = $(this).html();
        // Карта замены слов
        let map = {
            'кот': './img/catMouse.jpg' // Замена слова 'кот' на изображение
        };

        // Функция замены слов в тексте
        const replace = (text, map) => {
            return text.replace(new RegExp(Object.keys(map).join('|'), 'gi'), function(matched) {
                return '<img src="' + map[matched.toLowerCase()] + '" alt="' + matched + '" style="max-width: 5%; height: auto;" />';
            });
        };

        // Обработчик события "mouseenter" для элемента
        $(this).mouseenter(function() {
            // Замена текста на изображения при наведении мыши
            $(this).html(replace(originalText, map));
        });

        // Обработчик события "mouseleave" для элемента
        $(this).mouseleave(function() {
            // Возврат исходного текста при выходе мыши
            $(this).html(originalText);
        });
    });
});
