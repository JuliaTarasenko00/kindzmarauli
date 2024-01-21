import { useCallback, useEffect, useState } from 'react';

export const useModal = () => {
  const [open, setOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setOpen(!open);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  return {
    toggleModal,
    open,
  };
};
