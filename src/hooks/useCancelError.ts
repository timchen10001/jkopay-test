export const useCancelError = (handleCancelError: (e: any) => void) => {
  window.addEventListener("submit", handleCancelError);
};
