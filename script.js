const students = [
    { code: 126, name: 'محمد محسن صالح' },
    { code: 127, name: 'زياد طارق علي' },
    { code: 128, name: 'رأفت نزار صالح' },
    { code: 129, name: 'زينب عبدالقهار جمعة' },
    { code: 130, name: 'عباس عمر احمد' },
    { code: 132, name: 'شهد اركان محمد' },
    { code: 133, name: 'له نيا ايوب محمد' },
    { code: 134, name: 'حنان نوري عباس' },
    { code: 138, name: 'هدى كامل خلف' },
    { code: 139, name: 'منى بشتوان كامل' },
    { code: 140, name: 'صفا عبدالكريم محمد' },
    { code: 141, name: 'زينب عادل جمعة' },
    { code: 142, name: 'أخلاص ادهم مهدي' },
    { code: 143, name: 'جنان محمود ظاهر' },
    { code: 144, name: 'سجاد يشار عبدالواحد' },
    { code: 145, name: 'اسماء أميد خورشيد' },
    { code: 146, name: 'نورجان علي نجف' },
    { code: 147, name: 'ميديا غازي شكور' },
];

function populateStudentTable() {
    const tableBody = document.getElementById('studentTableBody');
    students.forEach(student => {
        const row = document.createElement('tr');
        const codeCell = document.createElement('td');
        const nameCell = document.createElement('td');

        codeCell.textContent = student.code;
        nameCell.textContent = student.name;

        row.appendChild(codeCell);
        row.appendChild(nameCell);
        tableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', populateStudentTable);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

