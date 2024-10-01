// ฟังก์ชันสำหรับเปลี่ยนหน้า
function navigateTo(url) {
    document.body.classList.add('fade-out'); // เพิ่มคลาส fade-out
    setTimeout(function() {
        window.location.href = url; // เปลี่ยนหน้า
    }, 500); // เวลาสำหรับ fade-out
}

// การตั้งค่าจำนวนสมาชิกต่อหน้า
let membersPerPage; // จำนวนสมาชิกที่จะแสดงในแต่ละหน้า
let currentPage = 0; // หน้าเริ่มต้น
const gridItems = document.querySelectorAll('.grid-item');
const totalPages = Math.ceil((gridItems.length - 6) / 4) + 1; // คำนวณหน้าทั้งหมด

// ฟังก์ชันสำหรับอัปเดตการแสดงสมาชิก
function updateGrid() {
    if (currentPage === 0) {
        membersPerPage = 6; // หน้าแรกแสดง 6 คน
    } else {
        membersPerPage = 8; // หน้าถัดไปแสดง 8 คน
    }

    const startIndex = currentPage === 0 ? 0 : 6 + (currentPage - 1) * 8;
    const endIndex = startIndex + membersPerPage;

    gridItems.forEach((item, index) => {
        item.style.display = (index >= startIndex && index < endIndex) ? 'block' : 'none';
    });

    // อัปเดตการแสดงปุ่ม
    document.getElementById('prevBtn').style.display = currentPage === 0 ? 'none' : 'inline-block';
    document.getElementById('nextBtn').style.display = currentPage === totalPages - 1 ? 'none' : 'inline-block';
}

// การตั้งค่าอีเวนต์สำหรับปุ่มถัดไป
document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentPage < totalPages - 1) {
        currentPage++;
        updateGrid();
    }
});

// การตั้งค่าอีเวนต์สำหรับปุ่มก่อนหน้า
document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updateGrid();
    }
});

// เริ่มต้นการแสดงสมาชิก
updateGrid();
