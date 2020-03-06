function setParam() {

    if (circleSize.value == '' && inpColor.value == '') {

        circle.style.background = 'black';
        circle.style.width = '150px';
        circle.style.height = '150px';
        circle.style.borderRadius = '75px';

    } else if (circleSize.value == '') {

        circle.style.background = inpColor.value;
        circle.style.width = '150px';
        circle.style.height = '150px';
        circle.style.borderRadius = '75px';

    } else if (inpColor.value == '') {

        circle.style.background = 'white';
        circle.style.width = circleSize.value + 'px';
        circle.style.height = circleSize.value + 'px';
        circle.style.borderRadius = circleSize.value / 2 + 'px';

    } else {

        circle.style.background = inpColor.value;
        circle.style.width = circleSize.value + 'px';
        circle.style.height = circleSize.value + 'px';
        circle.style.borderRadius = circleSize.value / 2 + 'px';

    }
}

change.onclick = setParam;
