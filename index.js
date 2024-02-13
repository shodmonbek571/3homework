// Musiqalar ro'yhatini saqlash uchun ishlatiladigon obyektga shablon yasash uchun class yarating. Ushbu classda musiqaninng bir qancha ma'lumotlari 
// mavjud bo'lsin. Har bir musiqada quyidagi    xususiiyatlar bo'lishi kerak 

// 1. nomi 
// 2. avtor
// 3. turi
// 4. ishlab chiqarilgan yili 
// 5. kimlar tomonidan kuylangan (massiv holatida)
// 6. vaqti (sekundlarda)
// 7. id 

// Ushbu class yordamida sikl dan foydalanib massiv yaratadigon funksiya yozing. Ushbu funksiyaning argumentiga qanday son kiritilsa shuncha musiqa kiritishi
// va barcha musiqalardan iborat yangi massiv hosil qilishi kerak (bunda massivning har bit element obyektni yasash uchun yuqoriagi klass dan foydalaniladi).

// yana shunday funksiya yaratingki yuqoridagi funksiya yordamida yasalgan musiqalar ro'yxatidan nomi takrorlanganlarini o'chirib tashlasin

// Ushbu topshiriqni bajarishda quyidagi mavzulardan foydalanish shart

//  1. Set
//  2. destructuring
//  3. class




class Musiqa {
    constructor(nomi, avtor, turi, ishlabChiqarilganYili, kuylanganKimsalar, vaqti, id) {
        this.nomi = nomi;
        this.avtor = avtor;
        this.turi = turi;
        this.ishlabChiqarilganYili = ishlabChiqarilganYili;
        this.kuylanganKimsalar = kuylanganKimsalar;
        this.vaqti = vaqti;
        this.id = id;
    }
}

const musiqalar = [
    new Musiqa("Yor-yor", "Sevara Nazarhanova", "Pop", 2018, ["Nilufar Usmonova", "Dildora Niyozova"], 240, 1),
    new Musiqa("Qizil koylak", "Hamdam Sobirov", "Jazz", 2023, ["Emily", "Jaloliddin Ahmadaliyev"], 180, 2),
    new Musiqa("Tuproq bolasan", "Jaloliddin Ahmadaliyev", "Jazz", 2021, ["Jasur Umirov", "Doston Ergashev"], 210, 3),
    new Musiqa("Ota Onam hoji qilaman", "Ulugbek Rahmatullayev", "Folk", 2015, ["Hamdan Sobirov", "Mirjalol Ne'matov"], 190, 4)
];

const removeNames = musiqalar => {
    const nomlarSet = new Set();
    const musiqalarYangi = musiqalar.filter(musiqa => {
        if (nomlarSet.has(musiqa.nomi)) {
            return false;
        }
        nomlarSet.add(musiqa.nomi);
        return true;
    });
    return musiqalarYangi;
};

const musiqalarJami = removeNames(musiqalar);
console.log(musiqalarJami);