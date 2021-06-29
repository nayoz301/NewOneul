import { useState, useEffect } from 'react';

export default function Modal() {
  const [values, setValues] = useState({
    nickname: '',
    email: '',
    password: '',
    password2: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };



  return { handleChange, handleSubmit, values, setValues };
};
