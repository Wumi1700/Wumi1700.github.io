 window.NOVEL_SYNOPSIS = {
         .page-synopsis {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: calc(100vh - 120px);
            text-align: center;
            padding: 20px 0;
            position: relative;
        }
        .page-synopsis .veil {
            position: fixed;
            inset: 0;
            background: #0a0806;
            z-index: 10000;
            pointer-events: none;
            animation: veilFade 2.8s ease-out forwards;
        }
        @keyframes veilFade {
            0% { opacity: 1; }
            60% { opacity: 1; }
            100% { opacity: 0; display: none; }
        }
        .page-synopsis .stardust {
            position: fixed;
            inset: 0;
            z-index: 9997;
            pointer-events: none;
            overflow: hidden;
        }
        .page-synopsis .stardust span {
            position: absolute;
            width: 3px;
            height: 3px;
            background: var(--gold-light);
            border-radius: 50%;
            box-shadow: 0 0 6px rgba(201, 169, 110, 0.4);
            animation: floatStar linear infinite;
            opacity: 0;
        }
        @keyframes floatStar {
            0% { opacity: 0; transform: translateY(100vh) scale(0.5); }
            10% { opacity: 0.7; }
            90% { opacity: 0.7; }
            100% { opacity: 0; transform: translateY(-10vh) scale(1.2); }
        }
        .page-synopsis .book-title {
            font-family: var(--font-display);
            font-size: 52px;
            font-weight: 700;
            color: var(--gold-light);
            letter-spacing: 8px;
            margin-bottom: 12px;
            text-shadow: 0 0 60px rgba(201, 169, 110, 0.15);
            opacity: 0;
            animation: titleReveal 3.2s ease-out forwards;
            animation-delay: 1.2s;
        }
        @keyframes titleReveal {
            0% { opacity: 0; text-shadow: 0 0 0 rgba(201, 169, 110, 0); letter-spacing: 20px; }
            30% { opacity: 1; text-shadow: 0 0 40px rgba(201, 169, 110, 0.3); letter-spacing: 8px; }
            60% { text-shadow: 0 0 80px rgba(201, 169, 110, 0.15); }
            100% { opacity: 1; text-shadow: 0 0 60px rgba(201, 169, 110, 0.08); letter-spacing: 8px; }
        }
        .page-synopsis .book-sub {
            font-family: var(--font-display);
            font-size: 18px;
            color: var(--gold);
            letter-spacing: 8px;
            margin-bottom: 40px;
            font-weight: 300;
            opacity: 0;
            animation: fadeUp 2s ease-out forwards;
            animation-delay: 2.6s;
        }
        .page-synopsis .book-divider {
            width: 80px;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--gold), transparent);
            margin: 0 auto 40px auto;
            opacity: 0;
            animation: fadeUp 1.8s ease-out forwards;
            animation-delay: 2.8s;
            position: relative;
        }
        .page-synopsis .book-divider::before {
            content: '✦';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: var(--gold);
            font-size: 14px;
            background: var(--parchment-dark);
            padding: 0 16px;
        }
        .page-synopsis .synopsis-text {
            max-width: 680px;
            font-size: 18px;
            line-height: 2;
            color: var(--text-warm);
            letter-spacing: 1px;
            opacity: 0;
            animation: fadeUp 2s ease-out forwards;
            animation-delay: 3.2s;
        }
        .page-synopsis .synopsis-text strong {
            color: var(--gold-light);
            font-weight: 600;
        }
        @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
};
