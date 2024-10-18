  // import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './index.css' 
import React from 'react';



function App1() {
  return (
    <div className="border">
    <div className="form-container">
      <div className="form-header">
        <div className="logo">
        </div>
        <h1>FORMULIR PENDAFTARAN</h1>
      </div>
      <form className="registration-form">
        <div className="form-group" style={{ marginTop: '25px' }}>
        <label  >Nama Lengkap</label>
        <input type="text" name="nama_lengkap"/>
        </div>
        <div className="form-group">
          <label>Tanggal Lahir</label>
          <input type="date" name="tanggal_lahir" />
        </div>
        <div className="form-group">
          <label>Jenis Kelamin</label>
          <select name="jenis_kelamin">
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
        </div>
        <div className="form-group">
          <label>Kelas</label>
          <input type="text" name="kelas" />
        </div>
        <div className="form-group">
          <label>Alamat</label>
          <input type="text" name="alamat" />
        </div>
        <div className="form-group">
          <label>Nama Orang Tua</label>
          <input type="text" name="nama_orang_tua" />
        </div>
        <div className="form-group">
          <label>Pekerjaan Orang Tua</label>
          <input type="text" name="pekerjaan_orang_tua" />
        </div>
        <div className="form-group">
          <label>No. Telepon Orang Tua</label>
          <input type="tel" name="telepon_orang_tua" />
        </div>
        <div className="form-group">
          <label>Program Kursus</label>
          <input type="text" name="program_kursus" />
        </div>
        <div className="form-group">
          <label>Hari Kursus</label>
          <div className="checkbox-group">
            <label>
              <input type="radio" name="hari_kursus" value="Senin & Kamis" /> Senin & Kamis
            </label>
            <label>
              <input type="radio" name="hari_kursus" value="Selasa & Jumat" /> Selasa & Jumat
            </label>
            <label>
              <input type="radio" name="hari_kursus" value="Rabu & Sabtu" /> Rabu & Sabtu
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Waktu Kursus</label>
          <div className="checkbox-group">
            <label>
              <input type="radio" name="waktu_kursus" value="14.00 – 15.30" /> 14.00 – 15.30
            </label>
            <label>
              <input type="radio" name="waktu_kursus" value="16.00 – 17.30" /> 16.00 – 17.30
            </label>
            <label>
              <input type="radio" name="waktu_kursus" value="19.00 – 20.30" /> 19.00 – 20.30
            </label>
          </div>
        </div>
        <div className="form-signature">
          <div>
            <label>Mengetahui,</label>
          </div>
          <div>
            <label>Orang Tua/Wali:</label>
            <input type="text" name="orang_tua_wali" />
          </div>
          <div>
            <label>Calon Siswa:</label>
            <input type="text" name="calon_siswa" />
          </div>
        </div>
      </form>
      <div className="footer">
        <p>Jl. Duta Daan 117, Banjar, Jawa Barat 47433</p>
        <p>0123456789 | halo@situssupercanggih.co.id</p>
      </div>
    </div>
    </div>
  );
}

export default App1;