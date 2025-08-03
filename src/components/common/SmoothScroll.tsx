let isScrolling = false;

export const smoothScrollTo = (targetId: string, offset: number = 100) => {
  // Prevent multiple rapid clicks
  if (isScrolling) return;

  const element = document.getElementById(targetId);
  if (element) {
    isScrolling = true;

    const targetPosition = element.offsetTop - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // 1 second
    let start: number | null = null;

    function animation(currentTime: number) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        // Reset scrolling flag when animation completes
        setTimeout(() => {
          isScrolling = false;
        }, 100);
      }
    }

    function ease(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }
};

let isOpeningGmail = false;

export const openGmail = (email: string, subject: string, body: string) => {
  // Prevent multiple rapid clicks
  if (isOpeningGmail) return;

  isOpeningGmail = true;
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(gmailLink, "_blank");

  // Reset flag after a short delay
  setTimeout(() => {
    isOpeningGmail = false;
  }, 500);
};
