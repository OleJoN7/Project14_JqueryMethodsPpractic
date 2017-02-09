$(document).ready(function () {
    var addRemoveClass = $('.addremove-block button');
    addRemoveClass.on('click', function () {
        $(this).addClass('addRemoveClass');
        $(this).siblings().removeClass('addRemoveClass');
    });

    // ------------------------------------------------

    var toggleClass = $('.toggle-block button');
    toggleClass.on('click', function () {
        $(this).toggleClass('toggleClass');
    });

    // Получение аттрибута------------------------------------------------

    var getAttr = $('.getattr-block button');
    getAttr.on('click', function () {
        console.log(( $(this).attr('title')));
        alert($(this).attr('title'));
    });

    // Добавление Attr----------------------------------------------

    var setAttr = $('.setattr-block button');
    setAttr.click(function () {
        $(this).attr('title', 'settingAttribute');
        alert('Set title Attribute');
        console.log($(this).attr('title'));
    });

    // Alert-------------------------------------------

    var alertButton = $('.alert-block button');
    alertButton.on('click', function () {
        alert('Works perfect');
    });

    // Триггер выстреливает(вызывет) обработчик--------------------------------------

    var triggerAlert = $('.trigger-block button');
    triggerAlert.on('click', function () {
        alertButton.trigger("click");
    });

    // Клон кнопки с указанием лимита и условием----(используется .clone(true) для того чтобы клонированные элементы были кликабельны и реагировали на команды);

    var cloneButton = $('.clone-block button');
    var limit = 3;
    cloneButton.on('click', function () {
        var cloneElement = $('.clone-block .btn');
        if (cloneElement.length < limit) {
            $(this).clone(true).text('cloneThis:cloned').appendTo('.clone-block');
        }
        else if (cloneElement.length == limit) {
            $(this).siblings().remove();
            $(this).text('cloneThis');
        }
    });

    // Ближайший элемент родитель------------------------------------------------

    $('.closestElement-block button').on('click', function () {
        console.log($(this).parent());
        alert('showing closest parent in console');
    });

    // .each() циклом c помощью Array.push()собран массив текста кнопок---------------------------
    $('.cicle-block .btn').on('click', function () {
        var myarray = [];
        $('.btn').each(function (index) {
            myarray.push(index + ':' + $(this).text());
        });
        console.log(myarray);
    });

    // Cобран массив с помощью .map() и .get() без цикла -- 2ой вариант-------------------------------

    // $('.cicle-block .btn').on('click', function() {
    //     var texts = $(".btn").map(function(i, el) {
    //         return el.innerHTML;
    //     }).get();
    //     console.log(texts);
    // });

    // Найти кнопку и вывести в консоль-----------------------------------------------


    $('.findMe-block button').on('click', function () {
        $(this).filter();
        console.log($(this));
    });

    // Fade---------------------------------------------------

    $('.fadeInText-block button').on('click', function () {
        $('.hidden').fadeToggle(1000);
    });

    // Данные об элементе-------------------------------------------------------------

    $('.dataAbout-block button').on('click', function () {

        var btn_height = $(this).height();

        var btn_width = $(this).width();

        var btn_position_top = $(this).offset().top;

        var btn_position_left = $(this).offset().left;

        $(this).each(function () {
            $.each(this.attributes, function () {
                console.log(this.value);
            });
        });

        var parent = $(this).parent();

        var next = $(this).next();

        var previous = $(this).prev();

        var text = $(this).text();

        console.log(btn_height + ',' + btn_width + ',' + btn_position_top + ',' + btn_position_left + '.' + parent + ',' + next + ',' + JSON.stringify(previous) + ',' + text);  // ?? вывести не объект а его содержимое

    });

    // Form--------------------------------------------------------------------

    //.change() ------------------------

    $('.change-input,.select-block').on('change', function () {
        $(this).css("background-color", "#D6D6FF");
        console.log(this.value);
    });


    // $('.select-block').on('change', function () {
    //     $('.select-block option').each(function () {
    //         if ($(this).is(':checked')) {
    //             $('.select-block option:checked').css("background-color", "#D6D6FF");
    //         }
    //     });
    //  });     // ---- работает для каждого ???


// .submit()---------------------------------------------
    $('.main-form').submit(function (event) {
        if ($('.main-form .change-input:first').val() === "correct") {
            $('span').text('correct...').show();
            return;
        }
        else if ($('.main-form .change-input:first').val() === '') {
            $('span').text('alomost but still Not valid!').show().fadeOut(2000);
            event.preventDefault();
        }
        else {
            $("span").text(' Not valid! ').show().fadeOut(1000);

            event.preventDefault();
        }


        $('.field-list input[type=text]').each(function () {
            console.log($(this).attr('name') + " = " + this.value);
        });
        $('.field-list select').each(function () {
            console.log($(this).attr('name') + " = " + $(this).val());
        });
        $('.field-list input[type=radio]').each(function () {     //$('.field-list input[type=radio]:checked')--вариант2
            if ($(this).is(':checked')) {
                console.log($(this).attr('name') + " = " + this.value);
            }
        });
        $('.field-list input[type=checkbox]:checked').each(function () {
            console.log($(this).attr('name') + " = " + $(this).val());
        });
    });

    // при изменении одного поля - дублировать значение в другое поле-----------------

    $('.field-list input[type=text]').bind('keyup change', function () {   // .bind() связывает события (events)
        var data = $(this).val();
        $('.field-list input[type=text]').val(data);
    });

    // keydown(),keyup(),keypress() - нажатие и удержание,отпускание клавиши------------------------------------

    $('#username').keydown(function () {
        $(this).css("border-color", "blue");
    });

    $('#username').keyup(function () {
        $(this).css("border-color", "transparent");
    });

    $('#usersurname').on('keypress', function () {
        $(this).css("background", "lightgreen");

    });


}); //конец  .ready()

