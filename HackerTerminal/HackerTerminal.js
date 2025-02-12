let blinkinterval
async function blink(val) {
    let dot = "";
    blinkinterval = setInterval(() => {
        if (dot.length < 3) {
            dot += "."
        }
        else {
            dot = ""
        }
        val.innerText = val.innerText.split(".")[0] + dot;
    }, 1000);

}
async function getdata() {
    let data1 = document.querySelector(".boxes1")
    let data2 = document.querySelector(".boxes2")
    let data3 = document.querySelector(".boxes3")
    let data4 = document.querySelector(".boxes4")
    let data5 = document.querySelector(".boxes5")
    let data6 = document.querySelector(".boxes6")


    let names = "You'r_System_Hacked_Succesfully..."
    for (let i = 0; i < names.length; i++) {
        setTimeout(() => {
            data6.innerText += names[i];
        }, 80 * i);
    }
    // await blink(data6);
    setTimeout(() => {
        clearInterval(blinkinterval);

        data1.innerText = "Initializing hacking";
        blink(data1);
        setTimeout(() => {
            clearInterval(blinkinterval);
            data1.innertext = "Initializing hacking"

            data2.innerText = "Reading your files";
            blink(data2);
            setTimeout(() => {
                clearInterval(blinkinterval);
                data1.innertext = "Reading your files"

                data3.innerText = "Password files detected";
                blink(data3);
                setTimeout(() => {
                    clearInterval(blinkinterval);
                    data1.innertext = "Password files detected"

                    data4.innerText = "Sending all passwords and personal files to the server";
                    blink(data4);
                    setTimeout(() => {
                        clearInterval(blinkinterval);
                        data1.innertext = "Sending all passwords and personal files to the server"

                        data5.innerText = "Cleaning up";
                        blink(data5);
                        setTimeout(() => {
                            clearInterval(blinkinterval);
                            data1.innertext = "Cleaning up"

                        }, 3000);
                    }, 3000);
                }, 3000);
            }, 3000);
        }, 3000);
    }, 3000);

}

getdata()





