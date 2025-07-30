// Validasi NIK - hanya angka, tepat 16 digit
export const validateNIK = (value) => {
    const cleanValue = value.replace(/\D/g, ''); // Hapus semua non-digit
    return cleanValue.slice(0, 16); // Maksimal 16 digit
};

// Validasi nomor HP - hanya angka, format Indonesia
export const validatePhoneNumber = (value) => {
    let cleanValue = value.replace(/\D/g, ''); // Hapus semua non-digit
    
    // Jika dimulai dengan 62, biarkan
    if (cleanValue.startsWith('62')) {
        return cleanValue.slice(0, 15); // Maksimal 15 digit untuk format +62
    }
    
    // Jika dimulai dengan 0, biarkan
    if (cleanValue.startsWith('0')) {
        return cleanValue.slice(0, 13); // Maksimal 13 digit untuk format 08xx
    }
    
    // Jika tidak dimulai dengan 0 atau 62, tambahkan 0
    if (cleanValue.length > 0 && !cleanValue.startsWith('0') && !cleanValue.startsWith('62')) {
        cleanValue = '0' + cleanValue;
    }
    
    return cleanValue.slice(0, 13);
};

// Validasi email - harus ada @ dan format yang benar
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Format display nomor HP
export const formatPhoneDisplay = (value) => {
    const cleanValue = value.replace(/\D/g, '');
    if (cleanValue.startsWith('62')) {
        return '+' + cleanValue;
    }
    return cleanValue;
};

// Validasi panjang NIK
export const isValidNIK = (nik) => {
    return /^\d{16}$/.test(nik);
};

// Validasi nomor HP Indonesia
export const isValidPhoneNumber = (phone) => {
    const cleanPhone = phone.replace(/\D/g, '');
    return /^(0\d{9,12}|62\d{9,13})$/.test(cleanPhone);
};
