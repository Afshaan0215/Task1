function specialChars(str) {
const sc = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
return sc.test(str);
}

console.log(specialChars('Afshaan@')); 