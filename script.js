document.getElementById('absensiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const kelas = document.getElementById('kelas').value;
    const tanggal = document.getElementById('tanggal').value;
    
    const listItem = document.createElement('li');
    listItem.textContent = `Nama: ${nama}, Kelas: ${kelas}, Tanggal: ${tanggal}`;
    
    document.getElementById('listAbsensi').appendChild(listItem);
    
    // Reset form
    document.getElementById('absensiForm').reset();
});
