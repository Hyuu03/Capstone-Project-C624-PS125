function decodeToken(token) {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Invalid token:', error);
      return null;
    }
  }
  
  function isTokenExpired(token) {
    const decoded = decodeToken(token);
    if (!decoded || !decoded.exp) {
      console.log('Token tidak valid atau tidak memiliki waktu kadaluarsa.');
      return true; // Menganggap token kadaluarsa jika tidak valid
    }
    const currentTime = Math.floor(Date.now() / 1000);
    return decoded.exp < currentTime;
  }
  
  function validateToken(token) {
    if (!token) {
      console.log('Token tidak ditemukan.');
      return false;
    }
  
    if (isTokenExpired(token)) {
      console.log('Token sudah kadaluarsa.');
      return false;
    }
  
    console.log('Token masih valid.');
    return true;
  }
  
  export { decodeToken, isTokenExpired, validateToken };
  