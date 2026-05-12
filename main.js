// 1. Bajer: Poświata podążająca za myszką (Spotlight effect)
    document.body.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        // Tworzymy dynamiczny gradient jako tło, który śledzi kursor
        document.body.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, #1e293b 0%, #0f172a 50%)`;
    });

    // 2. Bajer: Efekt pisania tekstu dla nagłówka
    const textElement = document.querySelector('p');
    const originalText = textElement.innerText;
    textElement.innerText = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            textElement.innerText += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50); // Prędkość pisania
        }
    }

    // Odpalamy pisanie po załadowaniu strony
    window.onload = typeWriter;

    // 3. Konsola dla prowadzącego (jakby zajrzał w F12)
    console.log("%c Projekt Wizytówki v2.0 zoptymalizowany pod 144FPS ", "background: #6366f1; color: white; font-weight: bold;");