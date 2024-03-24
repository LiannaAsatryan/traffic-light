$(document).ready(function() {
    let interval;
    let timer = 20;
    let switchCount = 0;
    let stopped = false;
    $('.timer').css('color', 'red');
    $('.red').css('color', 'red');

    function switchLights() {
        if(stopped) {
            return;
        }

        if(switchCount % 3 === 0) {
            $('.timer').css('color', 'red');
            $('#redL').css('backgroundColor', 'red');
            timer = 20;

            setTimeout(function() {
                $('#redL').css('backgroundColor', '');
            }, timer * 1000);

        } else if(switchCount % 3 === 1) {
            $('.timer').css('color', 'yellow');
            $('#yellowL').css('backgroundColor', 'yellow');
            timer = 5;

            setTimeout(function() {
                $('#yellowL').css('backgroundColor', '');
            }, timer * 1000);

        } else if(switchCount % 3 === 2) {
            $('.timer').css('color', '#1fd655');
            $('#greenL').css('backgroundColor', '#1fd655');
            timer = 20;

            setTimeout(function() {
                $('#greenL').css('backgroundColor', '');
            }, timer * 1000);
        }

        $('.timer').text(timer);
        switchCount++;
    }

    $('#startBtn').on('click', function() {
        stopped = false;
        switchCount = 0;
        switchLights();
        timer = 20;

        interval = setInterval(function() {

            timer--;

            if (timer === 0) {
                switchLights();
            }

            $('.timer').text(timer);
        }, 1000);
    });

    $('#stopBtn').on('click', function() {
        stopped = true;
        $('.timer').text('');
        $('#redL').css('backgroundColor', '');
        $('#yellowL').css('backgroundColor', '');
        $('#greenL').css('backgroundColor', '');

        clearInterval(interval);
    });
});
