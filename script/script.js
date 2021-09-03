let default_price = Number(document.getElementById("price").innerText);
document.getElementById("price").innerText = default_price.toLocaleString();

// 추가된 옵셔 재추가 금지용 변수 생성
let opt1_occur = 0;
let opt2_occur = 0;
let opt3_occur = 0;

function fnAddProduct() {
    let currOption = document.getElementById("extraOption").value;
    let optName = "";
    let optPrice = 0;

    if(currOption == 1 && opt1_occur == 0) {
        opt1_occur = 1;
        // 옵션 값
        optName = "원두상태(홀빈)";
        optPrice = 25000;
        createOption(optName, optPrice)
        // 계산
        calTotal(optPrice)
    } else if(currOption == 2 && opt2_occur == 0) {
        opt2_occur = 1;
        // 옵션 값
        optName = "더치커피용분쇄";
        optPrice = 27000;
        createOption(optName, optPrice)
        // 계산
        calTotal(optPrice)
    } else if(currOption == 3 && opt3_occur == 0) {
        opt3_occur = 1;
        // 옵션 값
        optName = "드립커피용분쇄";
        optPrice = 29000;
        createOption(optName, optPrice)
        // 계산
        calTotal(optPrice)
    }
    
}

function createOption(optName, optPrice) {
    let temp_html = "<tr>"
    + "<td class=\"option_name\">" + optName + "</td>"
    + "<td class=\"option_count\">"
            + "<input type=\"text\" value=\"1\" min=\"1\" max=\"20\">"
            + "<button type=\"button\" class=\"counter\" onclick=\"addNum()\">∧</button>"
            + "<button type=\"button\" class=\"counter\" onclick=\"subNum()\">∨</button>"
    + "</td>"
    + "<td class=\"option_price\">" + optPrice.toLocaleString() + "원</td>"
    + "<td><button type=\"button\" class=\"deleOptBtn\">x</button></td>"
                    + "</tr>"
    document.getElementById("addProduct").innerHTML += temp_html;
}

function calTotal(optPrice) {
    let currTotal = document.getElementById("totalSum").innerHTML;
    currTotal = currTotal.replace(/\,/g, '');
    let calcedTotal = Number(currTotal) + optPrice;
    document.getElementById("totalSum").innerHTML = calcedTotal.toLocaleString();
}
