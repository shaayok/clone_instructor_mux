import React, { useState } from 'react';
import styles from './CreateStudent.module.css';

export default function CreateStudent({
  isCreateStudentOpen,
  setisCreateStudentOpen
}) {

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setemail] = useState(null);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const onClose = () => {
    setisCreateStudentOpen(false);
  }

  const handleSubmit = async (e) => {
    alert('hhhhhhh');
    e.preventDefault();
    if (formData?.firstName === '') {
      setError('Please enter first name.');
    }
    if (formData?.lastName === '') {
      setError('Please enter last name.');
    }
    if (formData?.email === '') {
      setError('Please enter email.');
    }
    console.log("formDataformDataformData", formData);
    // setError('');
    if (error === '') {
      try {
        // await login({ email, password });
        // navigate('/instructor/dashboard', { replace: true });
      } catch (e) {
        // console.log(e);
        // setError('Ongeldige gebruikersnaam of wachtwoord.');
      }
    }
    else {

    }

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>

        {isCreateStudentOpen === true && (<h2>{isCreateStudentOpen ? 'Student aanmaken' : ''}</h2>)}


      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div className={styles.lessonInfo}>
            {error && <div className={styles.error}>{error}</div>}
            <label>
              <strong>Voornaam</strong>
              <input
                type="text"
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>

          </div>
          <div className={styles.lessonInfo}>
            <label>
              <strong>Achternaam</strong>
              <input
                type="text"
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                required
              /></label>
          </div>

          <div className={styles.lessonInfo}>
            <label>
              <strong>E-mail</strong>
              <input
                value={formData.email}
                name='email'
                type="email"
                onChange={handleChange}
                required
              /></label>
          </div>
        </div>


        <div className={styles.actions}>
          <button type="button" onClick={onClose}>Annuleren</button> &nbsp;
          <button type="submit">Verzenden</button>
        </div>
      </form>

    </div>
  );
}
