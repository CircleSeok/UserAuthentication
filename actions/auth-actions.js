'use server';

import { createUser } from '@/lib/user';

export async function signup(prevState, formData) {
  const email = formData.get('email');
  const password = formData.get('password');

  let errors = {};

  if (!email.includes('@')) {
    errors.email = 'Please enter a calid email address.';
  }

  if (password.trim().length < 8) {
    errors.password = 'Password must be at least 8 characters long.';
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors: errors,
    };
  }

  //store it in the database (create a new user)
  createUser(email, password);
}
