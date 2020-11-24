    let coin = document.querySelector(".coin");
    let btnInput = document.querySelector(".button-input");
    let btnProgress = document.querySelector(".button-progress");
    let flipCounter = document.querySelector(".flip-counter");
    let resultName = document.querySelector(".coin-info");
    let coinSides = {
        front: {
            name: "Решка",
            path: "../images/frontSide.gif"
        },
        
        back: {
            name: "Орёл",
            path: "../images/backSide.gif"
        }
    };

    btnInput.onclick = () => {
        setTimeout(() => {
            if (Math.ceil(Math.random() * 2) === 1) {
                coin.src = coinSides.front.path;
                resultName.textContent = coinSides.front.name;
            } else {
                coin.src = coinSides.back.path;
                resultName.textContent = coinSides.back.name;
            }
            coin.style.marginBottom = "15px";
        },750)
        
        btnInput.disabled = true;
        
        let progress = 0;
        let progressInterval = setInterval(() => {
            progress += 1;
            btnProgress.style.width = `${progress}px`;
            
            if (progress == 150) {
                clearInterval(progressInterval);
                btnInput.disabled = false;
                btnProgress.style.width = "0px"
            }
        }, 5)
        
    }