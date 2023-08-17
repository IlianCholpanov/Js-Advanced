function attachEventsListeners() {
    const RATIOS = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }

    function convert(value, unit) {
        const inDays = value / RATIOS[unit];

        return {
            days: inDays,
            hours: inDays * RATIOS.hours,
            minutes: inDays * RATIOS.minutes,
            seconds: inDays * RATIOS.seconds,
        };
    }

    let daysElement = document.getElementById('days');
    let hoursElement = document.getElementById('hours');
    let minutesElement = document.getElementById('minutes');
    let secondsElement = document.getElementById('seconds');

    document.querySelector("main").addEventListener('click', onConvert);

    function onConvert(e) {
        if (e.target.tagName === 'INPUT' && e.target.type === 'button') {
            const input = e.target.parentElement.querySelector('input[type = "text"]');

            const inputValue = Number(input.value);
            const time = convert(inputValue, input.id);

            daysElement.value = time.days;
            hoursElement.value = time.hours;
            minutesElement.value = time.minutes;
            secondsElement.value = time.seconds;
        }
    }
}