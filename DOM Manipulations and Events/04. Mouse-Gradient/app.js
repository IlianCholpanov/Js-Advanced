function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultDivElement = document.getElementById('result');

    const gradientMousemoveHandler = (e) => {
        let percent = Math.trunc((e.offsetX / e.target.offsetWidth) * 100);
        resultDivElement.textContent = `${percent}%`;
    }

    function gradientOut(event) {
        document.getElementById('result').textContent = "";
    }

    gradientElement.addEventListener('mousemove', gradientMousemoveHandler);
    gradientElement.addEventListener('mouseout', gradientOut);

}