function sumFunc()
{
    var sum = 0;
    // get form elements
    var bills = document.getElementById('bills').valueAsNumber;
    var media = document.getElementById('media').valueAsNumber;
    var spend = document.getElementById('spend').valueAsNumber;
    var team = document.getElementById('team').valueAsNumber;

    // sum of form elements
    sum = bills + media + spend + team;

    // unlimited rewards sum
    let unlimited = document.getElementById('unlimited');
    unlimited.innerText = "$" + sum * 1.1;
    document.getElementById("base2").style.width = "110px";

    // lifetime rewards sum
    let lifetime = document.getElementById('lifetime');
    lifetime.innerText = "$" + sum * 1.2;
    document.getElementById("base3").style.width = "120px";

    return sum;
}

function brandFunc() {
    var brex = document.getElementById('brex');
    var stripe = document.getElementById('stripe');
    var amex = document.getElementById('amex');

    let brandName = document.getElementById('brand-name');
    let brandSum = document.getElementById('brand-sum');

    brex.onclick = () => {
        brandName.innerHTML = brex.innerHTML;
        brandSum.innerHTML = "$" + sumFunc() * 0.3;
        document.getElementById("base1").style.display = "block";
        document.getElementById("base1").style.width = "30px";
    }
    
    stripe.onclick = () => {
        brandName.innerHTML = stripe.innerHTML;
        brandSum.innerHTML = "$" + sumFunc() * 2.9;
        document.getElementById("base1").style.display = "block";
        document.getElementById("base1").style.width = "290px";
    }
    
    amex.onclick = () => {
        brandName.innerHTML = amex.innerHTML;
        brandSum.innerHTML = "$" + sumFunc() * 1.3;
        document.getElementById("base1").style.display = "block";
        document.getElementById("base1").style.width = "130px";
    }
}