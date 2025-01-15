try {
    console.log('Fereh kod yaziyor...');
    const person = { fullname: "Duzlu fistix" };
    console.log(person.fullname);

} catch(error) {
    console.error('Fereh yanlish yapdi', error)
} finally {
    console.log('Code işi bitdi')
}