export const validateEmail = (email) => {
    // Regular expression pattern for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
export const validatePassword = (password) => {
    const passwordRegex = /^.{6,}$/;
    return passwordRegex.test(password);
  }
  