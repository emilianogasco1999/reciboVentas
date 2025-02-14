import { useEffect } from "react";

const useBootstrapValidation = () => {
  useEffect(() => {
    const forms = document.querySelectorAll('.needs-validation');

    const handleSubmit = (event) => {
      const form = event.target;
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    };

    forms.forEach(form => form.addEventListener('submit', handleSubmit));

    return () => {
      forms.forEach(form => form.removeEventListener('submit', handleSubmit));
    };
  }, []);
};

export default useBootstrapValidation
