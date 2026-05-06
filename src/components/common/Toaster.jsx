import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/useToast';

const toastVariants = {
  initial: { opacity: 0, y: 50, scale: 0.9 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

const ToastItem = ({ toast }) => {
  const { removeToast } = useToast();
  const { id, type, message } = toast;

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-500" />,
    error: <AlertCircle className="w-5 h-5 text-red-500" />,
    warning: <AlertTriangle className="w-5 h-5 text-amber-500" />,
    info: <Info className="w-5 h-5 text-blue-500" />,
  };

  const borderColors = {
    success: 'border-l-green-500',
    error: 'border-l-red-500',
    warning: 'border-l-amber-500',
    info: 'border-l-blue-500',
  };

  return (
    <motion.div
      layout
      variants={toastVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      className={`relative flex items-center w-full max-w-sm p-4 mb-3 overflow-hidden bg-white border-l-4 rounded shadow-lg pointer-events-auto ${borderColors[type]}`}
      role="alert"
    >
      <div className="flex-shrink-0 mr-3">
        {icons[type]}
      </div>
      <div className="flex-1 mr-2">
        <p className="text-sm font-medium text-gray-900">
          {message}
        </p>
      </div>
      <button
        onClick={() => removeToast(id)}
        className="flex-shrink-0 text-gray-400 transition-colors hover:text-gray-600 focus:outline-none"
        aria-label="Close"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

const Toaster = () => {
  const { toasts } = useToast();

  return (
    <div className="fixed bottom-0 right-0 z-50 flex flex-col items-end p-4 pointer-events-none sm:p-6">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Toaster;
