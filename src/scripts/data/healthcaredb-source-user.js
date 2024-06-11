import CONFIG from "../globals/config";

class TheHealthcareSourceUser {
    static async register(name, email, password, confPassword) {
        if (password !== confPassword) {
            return alert("Password dan Konfirmasi Password tidak sama");
        }

        try {
            const response = await fetch(`${CONFIG.BASE_URL}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    confpassword: confPassword, // Sesuaikan dengan key yang diharapkan di backend
                }),
            });

            const responseJson = await response.json();

            if (!response.ok) {
                throw new Error(responseJson.msg || 'Registrasi gagal');
            }

            return responseJson;
        } catch (error) {
            alert(error.message);
            return null;
        }
    }

    static async login(email, password) {
        try {
            const response = await fetch(`${CONFIG.BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const responseJson = await response.json();

            if (!response.ok) {
                throw new Error(responseJson.msg || 'Login gagal');
            }

            localStorage.setItem('accessToken', responseJson.accessToken);

            return responseJson;
        } catch (error) {
            alert(error.message);
            return null;
        }
    }
    static async refreshToken() {
        try {
            const response = await fetch(`${CONFIG.BASE_URL}/token`, {
                method: 'GET',
                credentials: 'include', // This includes cookies in the request
            });

            const responseJson = await response.json();

            if (!response.ok) {
                throw new Error(responseJson.msg || 'Failed to refresh token');
            }

            localStorage.setItem('accessToken', responseJson.accessToken);

            return responseJson.accessToken;
        } catch (error) {
            console.error(error);
            // Handle the error or redirect to login
        }
    }
    static async logout() {
        try {
            const accessToken = localStorage.getItem('accessToken');
            if (!accessToken) {
                throw new Error('Token akses tidak ditemukan');
            }
            localStorage.removeItem('accessToken');
        } catch (error) {
            console.log(error.message);
            return null;
        }
    }
    
    static async getUser() {
        try {
            const accessToken = localStorage.getItem('accessToken');
            if (!accessToken) throw new Error('User is not authenticated');

            const response = await fetch(`${CONFIG.BASE_URL}/users`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            });

            const responseJson = await response.json();

            if (!response.ok) {
                throw new Error(responseJson.msg || 'Gagal mendapatkan data pengguna');
            }

            return responseJson;
        } catch (error) {
            // alert(error.message);
            return null;
        }
    }
}

export default TheHealthcareSourceUser;