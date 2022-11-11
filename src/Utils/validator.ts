// import React, {useState} from 'react';

export const validName = name => {
  // import these in validator.js
  const fullName = String(name).trim().toLowerCase();
  const fullname_test = fullName.length < 6;
  if (fullname_test) {
    setState(prev => ({ ...prev, fullNameTestFail: true }));
    return;
  } else {
    setState(prev => ({ ...prev, fullNameTestFail: false }));
  }
};

export const validEmail = emailId => {
  const email = String(emailId).trim().toLowerCase();
  const pattern =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var email_test = pattern.test(email); // true , false
  if (email_test === false) {
    setState(prev => ({ ...prev, emailTestFail: true }));
    return;
  }
  if (email_test) {
    setState(prev => ({ ...prev, emailTestFail: false }));
  }
};

export const validPassword = pass => {
  const password = String(pass).trim();
  if (password.length >= 6) {
    setState(prev => ({ ...prev, passwordTestFail: false }));
  } else {
    setState(prev => ({ ...prev, passwordTestFail: true }));
    return;
  }
};
