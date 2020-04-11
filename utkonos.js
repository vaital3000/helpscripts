function startUtkonosOrder(targetDay, autoOrder = true) {
    const interval = setInterval(()=>{
        const daysContainers = Array.from(document.getElementsByClassName("day_interval_container"))
        if (daysContainers.findIndex(x=>x.className !== "day_interval_container inactive") !== -1){
            const selectedDay = document.getElementsByClassName('day future active chosen');
            if (selectedDay.innerText === targetDay){
                Array.from(document.getElementsByClassName('interval'))
                    .find(x=>x.className === 'interval')
                    .click()
                if (autoOrder) {
                    Array.from(document.getElementsByClassName('el_form btn btn_orange'))
                        .find(x => x.innerHTML === 'Перейти к оплате').click();
                }
            }
            const audio = new Audio('http://mz13.ru/win31.mp3');
            audio.play();
            clearInterval(interval)
        } else {
            Array.from(document.getElementsByClassName("address_receipt_item")).find(x=>x.innerText.startsWith("Москва")).click()
            Array.from(document.getElementsByClassName("address_receipt_item")).find(x=>x.innerText.startsWith("Московская")).click()
        }
    }, 10000)
}
