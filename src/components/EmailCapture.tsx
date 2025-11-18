import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface EmailCaptureProps {
  onSubmit: (email: string) => void;
}

const EmailCapture: React.FC<EmailCaptureProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (emailValue: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailValue);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(validateEmail(value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      onSubmit(email);
    }
  };

  const styles = {
    container: {
      width: '100%',
    },
    title: {
      fontSize: '28px',
      fontWeight: 500,
      color: '#0A0A0A',
      marginBottom: '12px',
      lineHeight: '1.3',
      textAlign: 'center' as const,
    },
    subtitle: {
      fontSize: '16px',
      color: '#6B7280',
      marginBottom: '32px',
      lineHeight: '1.5',
      textAlign: 'center' as const,
    },
    form: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '16px',
    },
    input: {
      width: '100%',
      padding: '16px',
      borderRadius: '8px',
      border: '2px solid #E5E7EB',
      fontSize: '16px',
      fontFamily: 'inherit',
      color: '#0A0A0A',
      transition: 'all 0.2s ease',
      boxSizing: 'border-box' as const,
    },
    inputFocus: {
      borderColor: '#2A66FF',
      outline: 'none',
    },
    button: {
      padding: '16px 24px',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      fontFamily: 'inherit',
      border: 'none',
      backgroundColor: '#2A66FF',
      color: '#FFFFFF',
    },
    buttonDisabled: {
      backgroundColor: '#E5E7EB',
      color: '#9CA3AF',
      cursor: 'not-allowed',
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h1 style={styles.title}>Where should we send your full scalability report?</h1>
      <p style={styles.subtitle}>We'll email you a PDF with your results.</p>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="your.email@example.com"
          style={styles.input}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = '#2A66FF';
            e.currentTarget.style.outline = 'none';
          }}
          onBlur={(e) => {
            if (!isValid && email) {
              e.currentTarget.style.borderColor = '#EF4444';
            } else {
              e.currentTarget.style.borderColor = '#E5E7EB';
            }
          }}
          autoFocus
        />
        <button
          type="submit"
          style={{
            ...styles.button,
            ...(isValid ? {} : styles.buttonDisabled),
          }}
          disabled={!isValid}
          onMouseEnter={(e) => {
            if (isValid) {
              e.currentTarget.style.backgroundColor = '#1E4ED8';
            }
          }}
          onMouseLeave={(e) => {
            if (isValid) {
              e.currentTarget.style.backgroundColor = '#2A66FF';
            }
          }}
        >
          Generate My Report
        </button>
      </form>
    </motion.div>
  );
};

export default EmailCapture;

