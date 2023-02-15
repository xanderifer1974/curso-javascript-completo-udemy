(function(){

    const trs = document.querySelectorAll("tbody tr")

    let x = 0
    let media = 0

    while(trs[x]){
        console.log(trs[x])

        const tds = trs[x].querySelectorAll("td")
        console.log(tds)
        media = avarege(
            parseFloat(tds[1].textContent),
            parseFloat(tds[2].textContent),
            parseFloat(tds[3].textContent),
            parseFloat(tds[4].textContent)
        )
        x++

        tds[5].textContent = media.toFixed(2)
    }

})()