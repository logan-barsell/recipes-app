export const decimalToFraction = d => {
    function gcd(a, b) {
        return (b) ? gcd(b, a % b) : a;
    }

    if (d == parseInt(d)) {
        return parseInt(d)
    }
    else {
        let int = false;
        if (d > 1) {
            int = Math.floor(d);
            d = d - Math.floor(d);
            d = d.toFixed(3);
        }
        let top = d.toString().includes(".") ? d.toString().replace(/\d+[.]/, '') : 0;
        let bottom = Math.pow(10, top.toString().replace('-','').length);
        if (d >= 1) {
            top = +top + (Math.floor(d) * bottom);
        }
        else if (d <= -1) {
            top = +top + (Math.ceil(d) * bottom);
        }
        const x = Math.abs(gcd(top, bottom));
        let fraction = (top / x) + '/' + (bottom / x);
        if(fraction === '333/1000'){ fraction = '1/3'};
        if(fraction === '333/500'){ fraction = '2/3'};
        return int ? int + ' ' + fraction : fraction;
    }
};