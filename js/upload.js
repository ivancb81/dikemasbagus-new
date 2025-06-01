document.addEventListener("DOMContentLoaded", function () {
    const uploadArea = document.getElementById("uploadArea");
    const fileInput = document.getElementById("fileInput");
    const browseBtn = uploadArea.querySelector(".browse-btn");

    // 1. Handler untuk area upload (kecuali tombol)
    uploadArea.addEventListener("click", function (e) {
        // Hanya trigger jika yang diklik bukan tombol
        if (!browseBtn.contains(e.target)) {
            fileInput.click();
        }
    });

    // 2. Handler khusus untuk tombol
    browseBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        fileInput.click();
    });

    // 3. Drag and drop handlers
    ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
        uploadArea.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ["dragenter", "dragover"].forEach((eventName) => {
        uploadArea.addEventListener(eventName, highlight, false);
    });

    ["dragleave", "drop"].forEach((eventName) => {
        uploadArea.addEventListener(eventName, unhighlight, false);
    });

    function highlight() {
        uploadArea.classList.add("dragover");
    }

    function unhighlight() {
        uploadArea.classList.remove("dragover");
    }

    uploadArea.addEventListener("drop", handleDrop, false);

    function handleDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;

        if (files.length) {
            handleFiles(files);
        }
    }

    // 4. Handle file selection
    fileInput.addEventListener("change", function () {
        if (fileInput.files.length) {
            handleFiles(fileInput.files);
        }
    });

    function handleFiles(files) {
        const file = files[0];
        const fileSize = file.size / 1024 / 1024; // in MB
        const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/plain"];

        // Validasi tipe file
        if (!allowedTypes.includes(file.type)) {
            alert("Jenis file tidak didukung. Silakan unggah file PDF, DOC, DOCX, atau TXT.");
            return;
        }

        // Validasi ukuran file
        if (fileSize > 5) {
            alert("Ukuran file melebihi batas maksimal 5MB.");
            return;
        }

        // Tampilkan notifikasi sukses
        alert(`File "${file.name}" berhasil dipilih!`);

        // Di sini Anda bisa menambahkan kode untuk menampilkan preview
        // atau langsung mengupload file ke server
    }
});
