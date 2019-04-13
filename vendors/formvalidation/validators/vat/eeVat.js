export default function eeVat(value) {
    let v = value;
    if (/^EE[0-9]{9}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{9}$/.test(v)) {
        return false;
    }
    let sum = 0;
    const weight = [3, 7, 1, 3, 7, 1, 3, 7, 1];
    for (let i = 0; i < 9; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    return sum % 10 === 0;
}