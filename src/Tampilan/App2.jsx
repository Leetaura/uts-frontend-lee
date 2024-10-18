import React, { useState } from 'react';

const colors ={
    primary: "#060606",
    background: "#E0E0E0",
    disabled: "#D9D9D9"
}
const App2 = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulasi proses login
        if (email.includes('@') && email.includes('.')) {
            setLoginSuccess(true);
        } else {
            setLoginSuccess(false);
        }
        setShowPopup(true);
    }

    return (
        <div className="border1">
        <div className="w-full  flex items-start">
            <div className="relative w-1/2 h-full flex flex-col">
            
            <div className="relative">
                <img src="https://i.pinimg.com/564x/39/87/be/3987beb4289cf7a45b94e2e2a73aaeb9.jpg" className="w-full h-full object-cover" />
                <div className="absolute top-20  left-5 right-5 p-5 text-white bg-blue-500 bg-opacity-30">
                    <h2 className="text-xl font-bold mb-4">Welcome to Cards Onboarding</h2>
                    <p>CARDS - Kartu Digital. Memungkinkan kita mengelola kartu siswa/santri atau membership lainnya sebagai media informasi dan transaksi close loop. Terintegrasi dengan CAZH Memberships Management dan CAZH Point of Sale (POS)</p>
                </div>
            </div>
            </div>
            <div className="w-1/2 h-full flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4 mt-20">Masuk ke akun anda!</h1>
                <div className="mb-5">
                    <p>Belum punya akun? <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Daftar</a></p>
                </div>
                <form className="w-3/4" onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 float-left">Email</label>
                        <input type="email" name="email" id="email" className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 float-left">Password</label>
                        <input type="password" name="password" id="password" className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="text-sm-4">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 float-right">Lupa Password?</a>
                    </div>
                    <div className="mt-4">
                        <button type="submit" className="w-full py-2 px-4 rounded-md shadow-sm text-sm font-medium text-black bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-blue-500">Login</button>
                    </div>
                </form>
                {showPopup && (
                    <div className={`alert ${loginSuccess ? 'alert-success' : 'alert-danger'}`}>
                        <p>{loginSuccess ? 'Login Berhasil!' : 'Login Gagal! Pastikan email Anda lengkap dan valid.'}</p>
                    </div>
                )}
                </div>
                </div>
                
            </div>
        
    )
}
export default App2;
