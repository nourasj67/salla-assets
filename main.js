// Preloader
(function() {
    'use strict';
 
    const PRELOADER_IMG = 'https://cdn.files.salla.network/theme/159337454/3dfabcde-b447-483b-ad4f-a1cd49780262.webp';
 
    const style = document.createElement('style');
    style.textContent = `
        #barmja-preloader {
            position: fixed;
            inset: 0;
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 999999;
            transition: opacity 0.5s ease, visibility 0.5s ease;
        }
        #barmja-preloader.hide {
            opacity: 0;
            visibility: hidden;
        }
        #barmja-preloader img {
            width: 140px;
            height: auto;
            animation: barmja-pulse 1.2s ease-in-out infinite;
        }
        @keyframes barmja-pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50%       { transform: scale(0.92); opacity: 0.7; }
        }
    `;
    document.head.appendChild(style);
 
    const preloader = document.createElement('div');
    preloader.id = 'barmja-preloader';
    preloader.innerHTML = `<img src="${PRELOADER_IMG}" alt="loading" />`;
    document.body ? document.body.prepend(preloader) : document.addEventListener('DOMContentLoaded', () => document.body.prepend(preloader));
 
    function hidePreloader() {
        preloader.classList.add('hide');
        setTimeout(() => preloader.remove(), 520);
    }
 
    if (document.readyState === 'complete') {
        hidePreloader();
    } else {
        window.addEventListener('load', hidePreloader);
        // Safety fallback
        setTimeout(hidePreloader, 5000);
    }
})();

// بداية فورم
(function () {
    'use strict';

    // ─── كشف لغة الصفحة (متوافق مع بقية الكود) ───────────────────
    var isArabic = (document.documentElement.lang || 'ar').toLowerCase().startsWith('ar');
    var currentLang = isArabic ? 'ar' : 'en';

    // ─── نصوص ثنائية اللغة ────────────────────────────────────────
    var T = {
        ar: {
            h1:           'حلول برمجية',
            h2:           'متكاملة لأعمالك',
            cta:          'احصل على نسختك التجريبية الآن',
            tagline:      'مزود معتمد لدى هيئة الزكاة والضريبة والجمارك',
            formTitle:    'احصل على نسختك التجريبية',
            formSub:      'سيتواصل معك فريقنا خلال 24 ساعة لتفعيل نسختك',
            lblName:      'الاسم الكامل',
            phName:       'مثال: محمد العمري',
            lblPhone:     'رقم التواصل',
            phPhone:      '05xxxxxxxx',
            lblBiz:       'نوع النشاط التجاري',
            optDefault:   '— اختر نوع نشاطك التجاري —',
            optR:         '🍽️ مطعم',
            optC:         '☕ مقهى',
            optS:         '🛒 متجر',
            optO:         '🏢 أخرى',
            submit:       'إرسال الطلب ←',
            note:         'بياناتك محفوظة بالكامل ولن تُستخدم إلا للتواصل معك بشأن طلبك',
            alert:        'يرجى تعبئة جميع الحقول',
            successTitle: 'تم إرسال طلبك بنجاح!',
            successSub:   'سيتواصل معك فريق برمجة قريباً على الرقم الذي أدخلته',
            toggleBtn:    'English'
        },
        en: {
            h1:           'Integrated Software',
            h2:           'Solutions for Your Business',
            cta:          'Get Your Free Trial Now',
            tagline:      'Certified provider by ZATCA (Zakat, Tax & Customs Authority)',
            formTitle:    'Get Your Free Trial',
            formSub:      'Our team will contact you within 24 hours to activate your trial',
            lblName:      'Full Name',
            phName:       'e.g. John Smith',
            lblPhone:     'Phone Number',
            phPhone:      '+966 5x xxx xxxx',
            lblBiz:       'Business Type',
            optDefault:   '— Select your business type —',
            optR:         '🍽️ Restaurant',
            optC:         '☕ Café',
            optS:         '🛒 Store',
            optO:         '🏢 Other',
            submit:       'Submit Request →',
            note:         'Your data is fully protected and will only be used to follow up on your request',
            alert:        'Please fill in all fields',
            successTitle: 'Request Sent Successfully!',
            successSub:   'The Barmajah team will contact you shortly on the number you provided',
            toggleBtn:    'العربية'
        }
    };

    var SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzNMF-CMBWDintkJ_WLbvAf5ef-sjbvdFEI4lT64rnumMNNKEfacjp88SUW2vwaVQIE1w/exec';

    // ─── HTML ──────────────────────────────────────────────────────
    var html = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap');

            #brm-wrap * { box-sizing: border-box; margin: 0; padding: 0; }

            #brm-wrap {
                max-width: 960px;
                margin: 0 auto;
                padding: 20px;
            }
            #brm-wrap.ar { direction: rtl; font-family: 'Tajawal', sans-serif; }
            #brm-wrap.en { direction: ltr; font-family: 'Plus Jakarta Sans', sans-serif; }

            /* Lang toggle */
            .brm-lang-toggle {
                display: flex;
                margin-bottom: 10px;
            }
            #brm-wrap.ar  .brm-lang-toggle { justify-content: flex-start; }
            #brm-wrap.en  .brm-lang-toggle { justify-content: flex-end; }
            .brm-lang-btn {
                background: rgba(91,200,247,0.1);
                border: 1px solid rgba(91,200,247,0.3);
                color: #5bc8f7;
                font-family: 'Tajawal','Plus Jakarta Sans',sans-serif;
                font-size: 13px;
                font-weight: 600;
                padding: 6px 16px;
                border-radius: 30px;
                cursor: pointer;
                transition: background 0.2s;
            }
            .brm-lang-btn:hover { background: rgba(91,200,247,0.2); }

            /* Banner */
            .brm-banner {
                position: relative;
                width: 100%;
                border-radius: 20px;
                overflow: hidden;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: linear-gradient(110deg, #0c1b2b 0%, #122336 35%, #0a1e35 65%, #0d2540 100%);
                padding: 38px 50px;
                min-height: 200px;
                transition: transform 0.18s ease, box-shadow 0.18s ease;
            }
            .brm-banner:hover { transform: scale(1.008); box-shadow: 0 10px 40px rgba(0,100,180,0.22); }
            .brm-banner::before {
                content: '';
                position: absolute;
                inset: 0;
                background: radial-gradient(ellipse 60% 80% at 72% 50%, rgba(56,160,230,0.12) 0%, transparent 70%);
                pointer-events: none;
            }
            .brm-banner::after {
                content: '';
                position: absolute;
                inset: 0;
                background-image: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
                background-size: 28px 28px;
                pointer-events: none;
            }

            .brm-text { position: relative; z-index: 1; }
            .brm-text h1 {
                font-size: 42px; font-weight: 800; color: #fff;
                line-height: 1.15; text-shadow: 0 2px 12px rgba(0,0,0,0.4);
            }
            .brm-text h2 {
                font-size: 34px; font-weight: 700; color: #5bc8f7;
                margin-bottom: 24px; text-shadow: 0 2px 12px rgba(0,80,160,0.3);
            }
            .brm-cta-btn {
                display: inline-block;
                background: rgba(160,195,220,0.25);
                border: 2px solid rgba(160,200,230,0.55);
                color: #d6edf8; font-size: 17px; font-weight: 700;
                padding: 13px 32px; border-radius: 50px; cursor: pointer;
                backdrop-filter: blur(4px);
                transition: background 0.2s, color 0.2s, border-color 0.2s;
                font-family: inherit;
            }
            .brm-cta-btn:hover { background: rgba(91,200,247,0.3); border-color: #5bc8f7; color: #fff; }

            .brm-logo-side {
                position: relative; z-index: 1;
                display: flex; flex-direction: column;
                align-items: center; gap: 12px; flex-shrink: 0;
            }
            .brm-tagline { font-size: 11.5px; color: #7ab4cc; text-align: center; max-width: 200px; line-height: 1.5; }

            /* Form panel */
            .brm-form-panel {
                display: none; margin-top: 10px;
                background: linear-gradient(150deg, #0c1b2b 0%, #102338 100%);
                border-radius: 20px; border: 1px solid rgba(91,200,247,0.15);
                padding: 40px 44px;
                animation: brmSlide 0.3s ease;
            }
            .brm-form-panel.open { display: block; }
            @keyframes brmSlide {
                from { opacity: 0; transform: translateY(-12px); }
                to   { opacity: 1; transform: translateY(0); }
            }

            .brm-form-head {
                display: flex; align-items: flex-start;
                justify-content: space-between; margin-bottom: 30px;
            }
            .brm-form-head h3 { font-size: 24px; font-weight: 800; color: #fff; }
            .brm-form-head p  { font-size: 13px; color: #6fa8c0; margin-top: 5px; }

            .brm-close {
                background: rgba(255,255,255,0.07);
                border: 1px solid rgba(255,255,255,0.1);
                color: #6fa8c0; width: 38px; height: 38px;
                border-radius: 50%; font-size: 18px; cursor: pointer;
                display: flex; align-items: center; justify-content: center;
                flex-shrink: 0; transition: background 0.2s, color 0.2s;
            }
            .brm-close:hover { background: rgba(91,200,247,0.15); color: #fff; }

            .brm-divider { height: 1px; background: rgba(91,200,247,0.1); margin: 0 0 28px; }

            .brm-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
            .brm-field { margin-bottom: 18px; }
            .brm-field label {
                display: block; font-size: 13.5px; font-weight: 600;
                color: #8fbfd6; margin-bottom: 8px;
            }
            .brm-field input, .brm-field select {
                width: 100%; padding: 13px 16px;
                background: rgba(255,255,255,0.06);
                border: 1px solid rgba(91,200,247,0.18);
                border-radius: 10px; color: #fff;
                font-size: 15px; font-family: inherit; outline: none;
                transition: border-color 0.2s, background 0.2s;
            }
            #brm-wrap.ar .brm-field input,
            #brm-wrap.ar .brm-field select { direction: rtl; }
            #brm-wrap.en .brm-field input,
            #brm-wrap.en .brm-field select { direction: ltr; }
            .brm-field input::placeholder { color: #3d6a88; }
            .brm-field input:focus, .brm-field select:focus {
                border-color: #5bc8f7; background: rgba(91,200,247,0.07);
            }
            .brm-field select option { background: #102338; color: #fff; }

            .brm-submit {
                width: 100%; padding: 15px; margin-top: 6px;
                background: linear-gradient(135deg, #1460a8 0%, #5bc8f7 100%);
                border: none; border-radius: 12px; color: #fff;
                font-size: 18px; font-weight: 700; font-family: inherit;
                cursor: pointer; transition: opacity 0.2s, transform 0.1s;
            }
            .brm-submit:hover  { opacity: 0.9; }
            .brm-submit:active { transform: scale(0.99); }

            .brm-note {
                font-size: 11.5px; color: #3d6a88;
                text-align: center; margin-top: 14px; line-height: 1.7;
            }

            /* Success */
            .brm-success {
                display: none; text-align: center; padding: 36px 20px;
                background: rgba(91,200,247,0.07); border-radius: 14px;
                border: 1px solid rgba(91,200,247,0.2);
            }
            .brm-check {
                width: 64px; height: 64px;
                background: rgba(91,200,247,0.15); border-radius: 50%;
                display: flex; align-items: center; justify-content: center;
                margin: 0 auto 16px; font-size: 30px;
            }
            .brm-success h4 { color: #5bc8f7; font-size: 22px; font-weight: 700; margin-bottom: 8px; }
            .brm-success p  { color: #6fa8c0; font-size: 14px; }

            @media (max-width: 640px) {
                .brm-banner { flex-direction: column; gap: 24px; padding: 28px 24px; text-align: center; }
                .brm-text h1 { font-size: 28px; }
                .brm-text h2 { font-size: 22px; }
                .brm-row     { grid-template-columns: 1fr; }
                .brm-form-panel { padding: 28px 20px; }
            }
        </style>

        <div id="brm-wrap">

            <div class="brm-lang-toggle">
                <button class="brm-lang-btn" id="brmLangBtn"></button>
            </div>

            <div class="brm-banner" id="brmBanner" role="button" tabindex="0">
                <div class="brm-text">
                    <h1 id="brmH1"></h1>
                    <h2 id="brmH2"></h2>
                    <button class="brm-cta-btn" id="brmCtaBtn"></button>
                </div>
                <div class="brm-logo-side">
                    <img src="https://i.postimg.cc/q7WfYxNf/logo-m.png" alt="Barmajah"
                         style="width:190px;height:auto;display:block;filter:drop-shadow(0 4px 16px rgba(0,0,0,0.4));" />
                    <div class="brm-tagline" id="brmTagline"></div>
                </div>
            </div>

            <div class="brm-form-panel" id="brmPanel">
                <div class="brm-form-head">
                    <div>
                        <h3 id="brmFormTitle"></h3>
                        <p  id="brmFormSub"></p>
                    </div>
                    <button class="brm-close" id="brmCloseBtn">✕</button>
                </div>
                <div class="brm-divider"></div>

                <div id="brmFormContent">
                    <div class="brm-row">
                        <div class="brm-field">
                            <label id="brmLblName" for="brmName"></label>
                            <input type="text" id="brmName" />
                        </div>
                        <div class="brm-field">
                            <label id="brmLblPhone" for="brmPhone"></label>
                            <input type="tel" id="brmPhone" />
                        </div>
                    </div>
                    <div class="brm-field">
                        <label id="brmLblBiz" for="brmBiz"></label>
                        <select id="brmBiz">
                            <option value=""          id="brmOptDefault"></option>
                            <option value="restaurant" id="brmOptR"></option>
                            <option value="cafe"       id="brmOptC"></option>
                            <option value="store"      id="brmOptS"></option>
                            <option value="other"      id="brmOptO"></option>
                        </select>
                    </div>
                    <button class="brm-submit" id="brmSubmitBtn"></button>
                    <p class="brm-note" id="brmNoteText"></p>
                </div>

                <div class="brm-success" id="brmSuccess">
                    <div class="brm-check">✅</div>
                    <h4 id="brmSuccessTitle"></h4>
                    <p  id="brmSuccessSub"></p>
                </div>
            </div>

        </div>
    `;

    // ─── حقن HTML في الصفحة ───────────────────────────────────────
    function injectBanner() {
        var container = document.createElement('div');
        container.innerHTML = html;

        // ابحث عن نفس الـ target section اللي يستخدمها بقية الكود
        var target = document.querySelector('.s-block.s-block--fixed-banner.wide-placeholder');
        if (target) {
            target.insertAdjacentElement('beforebegin', container);
        } else {
            // fallback: ضعه في بداية الـ body
            document.body.prepend(container);
        }

        bindEvents();
        applyLang();
    }

    // ─── ربط الأحداث ──────────────────────────────────────────────
    function bindEvents() {
        document.getElementById('brmBanner').addEventListener('click', toggleForm);
        document.getElementById('brmCtaBtn').addEventListener('click', function (e) {
            e.stopPropagation();
            toggleForm();
        });
        document.getElementById('brmCloseBtn').addEventListener('click', toggleForm);
        document.getElementById('brmSubmitBtn').addEventListener('click', submitForm);
        document.getElementById('brmLangBtn').addEventListener('click', switchLang);
    }

    // ─── تطبيق اللغة ──────────────────────────────────────────────
    function applyLang() {
        var t    = T[currentLang];
        var wrap = document.getElementById('brm-wrap');

        wrap.className = currentLang;

        document.getElementById('brmH1').textContent           = t.h1;
        document.getElementById('brmH2').textContent           = t.h2;
        document.getElementById('brmCtaBtn').textContent       = t.cta;
        document.getElementById('brmTagline').textContent      = t.tagline;
        document.getElementById('brmFormTitle').textContent    = t.formTitle;
        document.getElementById('brmFormSub').textContent      = t.formSub;
        document.getElementById('brmLblName').textContent      = t.lblName;
        document.getElementById('brmName').placeholder         = t.phName;
        document.getElementById('brmLblPhone').textContent     = t.lblPhone;
        document.getElementById('brmPhone').placeholder        = t.phPhone;
        document.getElementById('brmLblBiz').textContent       = t.lblBiz;
        document.getElementById('brmOptDefault').textContent   = t.optDefault;
        document.getElementById('brmOptR').textContent         = t.optR;
        document.getElementById('brmOptC').textContent         = t.optC;
        document.getElementById('brmOptS').textContent         = t.optS;
        document.getElementById('brmOptO').textContent         = t.optO;
        document.getElementById('brmSubmitBtn').textContent    = t.submit;
        document.getElementById('brmNoteText').textContent     = t.note;
        document.getElementById('brmSuccessTitle').textContent = t.successTitle;
        document.getElementById('brmSuccessSub').textContent   = t.successSub;
        document.getElementById('brmLangBtn').textContent      = t.toggleBtn;

        var toggle = document.querySelector('.brm-lang-toggle');
        if (toggle) toggle.style.justifyContent = currentLang === 'ar' ? 'flex-start' : 'flex-end';
    }

    // ─── تبديل اللغة يدوياً ───────────────────────────────────────
    function switchLang() {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        applyLang();
    }

    // ─── فتح/إغلاق الفورم ────────────────────────────────────────
    function toggleForm() {
        var panel = document.getElementById('brmPanel');
        panel.classList.toggle('open');
        if (panel.classList.contains('open')) {
            setTimeout(function () {
                panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 50);
        }
    }

    // ─── إرسال الفورم ────────────────────────────────────────────
    function submitForm() {
        var name  = document.getElementById('brmName').value.trim();
        var phone = document.getElementById('brmPhone').value.trim();
        var biz   = document.getElementById('brmBiz').value;

        if (!name || !phone || !biz) {
            alert(T[currentLang].alert);
            return;
        }

        document.getElementById('brmFormContent').style.display = 'none';
        document.getElementById('brmSuccess').style.display     = 'block';

        fetch(SCRIPT_URL, {
            method:  'POST',
            mode:    'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name:      name,
                phone:     phone,
                business:  biz,
                lang:      currentLang,
                timestamp: new Date().toLocaleString(currentLang === 'ar' ? 'ar-SA' : 'en-US')
            })
        })
        .catch(function (e) { console.warn('Send error:', e); });
    }

    // ─── تشغيل ───────────────────────────────────────────────────
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectBanner);
    } else {
        injectBanner();
    }

})();
// نهاية الفورم

// Fixed Pricing Plans Section for Salla - Al Mo'taman Lite (Perfect Alignment)
(function() {
    'use strict';
 
    // ─── كشف لغة الصفحة ────────────────────────────────────────────
    const isArabic = (document.documentElement.lang || 'ar').toLowerCase().startsWith('ar');
 
    // ─── نصوص ثنائية اللغة ─────────────────────────────────────────
    const t = {
        // شارات
        mostRequested: isArabic ? 'الأكثر طلبًا ⭐' : 'Most Popular ⭐',
        strongest:     isArabic ? 'الأقوى 🔥'       : 'Most Powerful 🔥',
 
        // عناوين الخطط
        basicAr:    'المؤتمن لايت - النسخة الأساسية',
        basicEn:    'AL MO\'TAMAN LITE - BASIC',
        standardAr: 'المؤتمن لايت - النسخة القياسية',
        standardEn: 'AL MO\'TAMAN LITE - STANDARD',
        proAr:      'المؤتمن لايت - النسخة الاحترافية',
        proEn:      'AL MO\'TAMAN LITE - PRO',
 
        // صندوق "جميع ميزات"
        allBasic:        isArabic ? 'جميع ميزات النسخة الأساسية'              : 'All Basic Plan Features',
        allBasicStandard:isArabic ? 'جميع ميزات النسخة الأساسية والقياسية'   : 'All Basic & Standard Plan Features',
 
        // زر الاشتراك
        subscribeNow: isArabic ? 'اشترك الآن' : 'Subscribe Now',
 
        // ميزات النسخة الأساسية
        multiLang:      isArabic ? 'برنامج متعدد اللغات'                                                              : 'Multi-language software',
        touchSupport:   isArabic ? 'يدعم واجهات اللمس'                                                               : 'Supports touch interfaces',
        itemImages:     isArabic ? 'تخصيص صور للأصناف'                                                               : 'Custom item images',
        reports:        isArabic ? 'تقارير متنوعة و مفصلة : ( حسب الفواتير<br/>حسب الأصناف   حسب طرق الدفع )'       : 'Detailed reports: By invoices<br/>By items &nbsp; By payment methods',
        stockMonitor:   isArabic ? 'مراقبة كميات الأصناف'                                                            : 'Item stock monitoring',
        items100:       isArabic ? 'عدد الأصناف : 100 صنف ( مع إمكانية طلب<br/>زيادة عدد الأصناف )'                 : 'Items: 100 items (with option to<br/>increase item count)',
        users2:         isArabic ? 'عدد المستخدمين : 2 ( مع إمكانية طلب<br/>زيادة عدد المستخدمين )'                 : 'Users: 2 (with option to<br/>increase user count)',
        unlimitedInv:   isArabic ? 'عدد الفواتير : غير محدود'                                                        : 'Invoices: Unlimited',
        userPerms:      isArabic ? 'التحكم بصلاحيات المستخدمين'                                                      : 'User permissions control',
        phase1:         isArabic ? 'متوافقة مع معايير الفوترة الإلكترونية<br/>المرحلة الأولى'                        : 'Compliant with e-invoicing standards<br/>Phase 1',
        b2c:            isArabic ? 'يدعم الفواتير الضريبية المبسطة B2C'                                              : 'Supports simplified tax invoices B2C',
        zatca:          isArabic ? 'معتمد من هيئة الزكاة والضريبة والجمارك'                                          : 'Certified by ZATCA',
        price660:       isArabic ? 'السعر 660 ريال فقط سنويًا'                                                       : 'Price: 660 SAR / year only',
 
        // ميزات النسخة القياسية
        items500:       isArabic ? 'عدد الأصناف : 500 صنف ( مع إمكانية طلب<br/>زيادة عدد الأصناف )'                 : 'Items: 500 items (with option to<br/>increase item count)',
        users3:         isArabic ? 'عدد المستخدمين : 3 ( مع إمكانية طلب<br/>زيادة عدد المستخدمين )'                 : 'Users: 3 (with option to<br/>increase user count)',
        phase1and2:     isArabic ? 'متوافق مع معايير الفوترة الإلكترونية<br/>المرحلة الأولى و الثانية'              : 'Compliant with e-invoicing standards<br/>Phase 1 & 2',
        price1000:      isArabic ? 'السعر 1000 ريال فقط سنويًا'                                                      : 'Price: 1000 SAR / year only',
 
        // ميزات النسخة الاحترافية
        fullEinvoice:   isArabic ? 'دعم كامل للفاتورة الإلكترونية<br/>المرحلة الأولى و الثانية'                     : 'Full e-invoice support<br/>Phase 1 & 2',
        users5:         isArabic ? 'عدد المستخدمين : 5 ( مع إمكانية طلب<br/>زيادة عدد المستخدمين )'                 : 'Users: 5 (with option to<br/>increase user count)',
        items1000:      isArabic ? 'عدد الأصناف : 1000 صنف ( مع إمكانية طلب<br/>زيادة عدد الأصناف )'                : 'Items: 1000 items (with option to<br/>increase item count)',
        customerScreen: isArabic ? 'شاشة العميل الرقمية مع عرض الفاتورة<br/>وشرائح دعائية مخصصة'                   : 'Digital customer display with invoice<br/>view and custom promotional slides',
        analyticsRep:   isArabic ? 'تقارير إحصائية وتحليلية ومخططات بيانية<br/>(يومي - أسبوعي - شهري - سنوي)'     : 'Statistical & analytical reports with charts<br/>(Daily - Weekly - Monthly - Yearly)',
        topItems:       isArabic ? 'تحليل أعلى الأصناف والمجموعات مبيعًا'                                           : 'Top-selling items & categories analysis',
        salesVsReturns: isArabic ? 'مقارنة المبيعات مع المرتجعات'                                                   : 'Sales vs. returns comparison',
        peakSales:      isArabic ? 'تحليل ذروة المبيعات (ساعة - يوم - شهر - سنة)'                                  : 'Peak sales analysis (hour - day - month - year)',
        price1200:      isArabic ? 'السعر 1300 ريال فقط سنويًا'                                                      : 'Price: 1300 SAR / year only',
    };
    // ───────────────────────────────────────────────────────────────
 
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPricingPlans);
    } else {
        initPricingPlans();
    }
    
    function initPricingPlans() {
        // Find the target section
        const targetSection = document.querySelector('.s-block.s-block--fixed-banner.wide-placeholder');
        
        if (!targetSection) {
            console.warn('Target section not found');
            return;
        }
        
        // Create pricing plans HTML
        const pricingHTML = `
            <section class="pricing-plans-section" style="padding: 80px 20px; background: linear-gradient(to bottom, #f8f9fa 0%, #e9ecef 100%);">
                <div class="container" style="max-width: 1200px; margin: 0 auto;">
                    
                    <div class="pricing-cards" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; max-width: 950px; margin: 0 auto;">
                        
                        <!-- Basic Plan (Right Side) -->
                        <div class="pricing-card basic-plan" style="background: white; border-radius: 25px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.12); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); display: flex; flex-direction: column; height: 100%;">
                            <div class="card-header" style="background: linear-gradient(135deg, #145a86 0%, #1e7ba6 100%); padding: 30px 25px; text-align: center; color: white;">
                                <h3 style="font-size: 1.4rem; margin: 0; font-weight: 700; line-height: 1.4;">${t.basicAr}</h3>
                                <p style="font-size: 0.95rem; margin: 5px 0 0 0; opacity: 0.95; font-weight: 500;">${t.basicEn}</p>
                            </div>
                            
                            <div class="card-body" style="padding: 35px 25px; flex: 1; display: flex; flex-direction: column;">
                                <ul style="list-style: none; padding: 0; margin: 0;">
                                    <li class="feature-item" style="padding: 14px 12px; border-bottom: 1px solid #e8e8e8; color: #2c3e50; font-size: 1rem; text-align: center; line-height: 1.5; min-height: 50px; display: flex; align-items: center; justify-content: center;">${t.multiLang}</li>
                                    
                                    <li class="feature-item" style="padding: 14px 12px; border-bottom: 1px solid #e8e8e8; color: #2c3e50; font-size: 1rem; text-align: center; line-height: 1.5; min-height: 50px; display: flex; align-items: center; justify-content: center;">${t.touchSupport}</li>
                                    
                                    <li class="feature-item" style="padding: 14px 12px; border-bottom: 1px solid #e8e8e8; color: #2c3e50; font-size: 1rem; text-align: center; line-height: 1.5; min-height: 50px; display: flex; align-items: center; justify-content: center;">${t.itemImages}</li>
                                    
                                    <li class="feature-item" style="padding: 14px 12px; border-bottom: 1px solid #e8e8e8; color: #2c3e50; font-size: 1rem; text-align: center; line-height: 1.5; min-height: 70px; display: flex; align-items: center; justify-content: center;">${t.reports}</li>
                                    
                                    <li class="feature-item" style="padding: 14px 12px; border-bottom: 1px solid #e8e8e8; color: #2c3e50; font-size: 1rem; text-align: center; line-height: 1.5; min-height: 50px; display: flex; align-items: center; justify-content: center;">${t.stockMonitor}</li>
                                    
                                    <li class="feature-item" style="padding: 14px 12px; border-bottom: 1px solid #e8e8e8; color: #2c3e50; font-size: 1rem; text-align: center; line-height: 1.5; min-height: 70px; display: flex; align-items: center; justify-content: center;">${t.items100}</li>
                                    
                                    <li class="feature-item" style="padding: 14px 12px; border-bottom: 1px solid #e8e8e8; color: #2c3e50; font-size: 1rem; text-align: center; line-height: 1.5; min-height: 70px; display: flex; align-items: center; justify-content: center;">${t.users2}</li>
                                    
                                    <li class="feature-item" style="padding: 14px 12px; border-bottom: 1px solid #e8e8e8; color: #2c3e50; font-size: 1rem; text-align: center; line-height: 1.5; min-height: 50px; display: flex; align-items: center; justify-content: center;">${t.unlimitedInv}</li>
                                    
                                    <li class="feature-item" style="padding: 14px 12px; border-bottom: 1px solid #e8e8e8; color: #2c3e50; font-size: 1rem; text-align: center; line-height: 1.5; min-height: 50px; display: flex; align-items: center; justify-content: center;">${t.userPerms}</li>
                                    
                                    <li class="feature-item" style="padding: 14px 12px; border-bottom: 1px solid #e8e8e8; color: #2c3e50; font-size: 1rem; text-align: center; line-height: 1.5; min-height: 70px; display: flex; align-items: center; justify-content: center;">${t.phase1}</li>
                                    
                                    <li class="feature-item" style="padding: 14px 12px; border-bottom: 1px solid #e8e8e8; color: #2c3e50; font-size: 1rem; text-align: center; line-height: 1.5; min-height: 50px; display: flex; align-items: center; justify-content: center;">${t.b2c}</li>
 
                                    <li class="feature-item" style="padding: 14px 12px; border-bottom: 1px solid #e8e8e8; color: #2c3e50; font-size: 1rem; text-align: center; line-height: 1.5; min-height: 50px; display: flex; align-items: center; justify-content: center;">${t.zatca}</li>
 
                                    <li class="feature-item" style="padding: 14px 12px; color: #2c3e50; font-size: 1rem; text-align: center; line-height: 1.5; min-height: 50px; display: flex; align-items: center; justify-content: center; font-weight: bold;">${t.price660}</li>
 
                                </ul>
                            </div>
                            
                            <div class="card-footer" style="background: linear-gradient(135deg, #5dade2 0%, #85c1e9 100%); padding: 30px 25px; text-align: center; margin-top: auto;">
                                <button class="pricing-btn" style="width: 85%; padding: 16px 30px; background: white; color: #1e7ba6; border: none; border-radius: 12px; font-size: 1.2rem; font-weight: 700; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                                    ${t.subscribeNow}
                                </button>
                            </div>
                        </div>
                        
                        <!-- Standard Plan (Left Side) -->
                        <div class="pricing-card standard-plan" style="background: white; border-radius: 25px; overflow: hidden; box-shadow: 0 15px 50px rgba(0,0,0,0.18); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); border: 3px solid #5dade2; display: flex; flex-direction: column; position: relative; height: 100%;">
                            <div class="popular-badge" style="position: absolute; top: 15px; left: 15px; background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%); color: white; padding: 8px 20px; border-radius: 25px; font-size: 0.85rem; font-weight: 700; box-shadow: 0 4px 10px rgba(255,107,107,0.3); z-index: 10;">${t.mostRequested}</div>
                            
                            <div class="card-header" style="background: linear-gradient(135deg, #145a86 0%, #1e7ba6 100%); padding: 55px 25px 30px 25px; text-align: center; color: white;">
                                <h3 style="font-size: 1.4rem; margin: 0; font-weight: 700; line-height: 1.4;">${t.standardAr}</h3>
                                <p style="font-size: 0.95rem; margin: 5px 0 0 0; opacity: 0.95; font-weight: 500;">${t.standardEn}</p>
                            </div>
                            
                            <div class="card-body" style="padding: 35px 25px; flex: 1; display: flex; flex-direction: column;">
                                <div class="all-features-box" style="background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%); padding: 18px 20px; border-radius: 12px; margin-bottom: 25px; text-align: center; border: 2px solid #5dade2; min-height: 50px; display: flex; align-items: center; justify-content: center;">
                                    <p style="margin: 0; color: #145a86; font-size: 1.1rem; font-weight: 700; line-height: 1.4;">${t.allBasic}</p>
                                </div>
                                
                                <ul style="list-style: none; padding: 0; margin: 0;">
                                    <li class="feature-item highlighted" style="padding: 14px 12px; border-bottom: 1px solid #e8e8e8; color: #2c3e50; font-size: 1rem; text-align: center; line-height: 1.5; background: linear-gradient(90deg, transparent 0%, #e3f2fd 100%); min-height: 70px; display: flex; align-items: center; justify-content: center;">${t.items500}</li>
                                    
                                    <li class="feature-item highlighted" style="padding: 14px 12px; border-bottom: 1px solid #e8e8e8; color: #2c3e50; font-size: 1rem; text-align: center; line-height: 1.5; background: linear-gradient(90deg, transparent 0%, #e3f2fd 100%); min-height: 70px; display: flex; align-items: center; justify-content: center;">${t.users3}</li>
                                    
                                    <li class="feature-item highlighted" style="padding: 14px 12px; border-bottom: 1px solid #e8e8e8; color: #2c3e50; font-size: 1rem; text-align: center; line-height: 1.5; background: linear-gradient(90deg, transparent 0%, #e3f2fd 100%); min-height: 70px; display: flex; align-items: center; justify-content: center;">${t.phase1and2}</li>
 
                                    <li class="feature-item highlighted" style="padding: 14px 12px; color: #2c3e50; font-size: 1rem; text-align: center; line-height: 1.5; background: linear-gradient(90deg, transparent 0%, #e3f2fd 100%); min-height: 70px; display: flex; align-items: center; justify-content: center; font-weight: bold;">${t.price1000}</li>
                                    
 
                                    
                                </ul>
                            </div>
                            
                            <div class="card-footer" style="background: linear-gradient(135deg, #5dade2 0%, #85c1e9 100%); padding: 30px 25px; text-align: center; margin-top: auto;">
                                <button class="pricing-btn featured" style="width: 85%; padding: 16px 30px; background: white; color: #1e7ba6; border: none; border-radius: 12px; font-size: 1.2rem; font-weight: 700; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                                    ${t.subscribeNow}
                                </button>
                            </div>
                        </div>
 
                        <!-- === النسخة الاحترافية (مطابقة للقياسية) === -->
                        <div class="pricing-card pro-plan" style="background: white; border-radius: 25px; overflow: hidden; box-shadow: 0 15px 50px rgba(0,0,0,0.18); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); border: 3px solid #f39c12; display: flex; flex-direction: column; position: relative; height: 100%;">
                        
                            <!-- شارة الأقوى -->
                            <div class="popular-badge" style="position: absolute; top: 15px; left: 15px; background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%); color: white; padding: 8px 20px; border-radius: 25px; font-size: 0.85rem; font-weight: 700; box-shadow: 0 4px 10px rgba(243,156,18,0.3); z-index: 10;">
                                ${t.strongest}
                            </div>
                        
                            <!-- الهيدر -->
                            <div class="card-header" style="background: linear-gradient(135deg, #d68910 0%, #f1c40f 100%); padding: 55px 25px 30px 25px; text-align: center; color: white;">
                                <h3 style="font-size: 1.4rem; margin: 0; font-weight: 700; line-height: 1.4;">${t.proAr}</h3>
                                <p style="font-size: 0.95rem; margin: 5px 0 0 0; opacity: 0.95; font-weight: 500;">${t.proEn}</p>
                            </div>
                        
                            <!-- المحتوى -->
                            <div class="card-body" style="padding: 35px 25px; flex: 1; display: flex; flex-direction: column;">
                        
                                <!-- نفس صندوق القياسية -->
                                <div class="all-features-box" style="background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%); padding: 18px 20px; border-radius: 12px; margin-bottom: 25px; text-align: center; border: 2px solid #f39c12; min-height: 50px; display: flex; align-items: center; justify-content: center;">
                                    <p style="margin: 0; color: #b9770e; font-size: 1.1rem; font-weight: 700; line-height: 1.4;">
                                        ${t.allBasicStandard}
                                    </p>
                                </div>
                        
                                <!-- القائمة -->
                                <ul style="list-style: none; padding: 0; margin: 0;">
                        
                                    <li class="feature-item highlighted" style="padding: 14px 12px; border-bottom: 1px solid #e8e8e8; color: #2c3e50; font-size: 1rem; text-align: center; line-height: 1.5; background: linear-gradient(90deg, transparent 0%, #fff3cd 100%); min-height: 70px; display: flex; align-items: center; justify-content: center;">
                                        ${t.fullEinvoice}
                                    </li>
                        
                                    <li class="feature-item highlighted" style="padding: 14px 12px; border-bottom: 1px solid #e8e8e8; color: #2c3e50; font-size: 1rem; text-align: center; line-height: 1.5; background: linear-gradient(90deg, transparent 0%, #fff3cd 100%); min-height: 70px; display: flex; align-items: center; justify-content: center;">
                                        ${t.users5}
                                    </li>
                        
                                    <li class="feature-item highlighted" style="padding: 14px 12px; border-bottom: 1px solid #e8e8e8; color: #2c3e50; font-size: 1rem; text-align: center; line-height: 1.5; background: linear-gradient(90deg, transparent 0%, #fff3cd 100%); min-height: 70px; display: flex; align-items: center; justify-content: center;">
                                        ${t.items1000}
                                    </li>
                        
                                    <li class="feature-item highlighted" style="padding: 14px 12px; border-bottom: 1px solid #e8e8e8; color: #2c3e50; font-size: 1rem; text-align: center; line-height: 1.5; background: linear-gradient(90deg, transparent 0%, #fff3cd 100%); min-height: 70px; display: flex; align-items: center; justify-content: center;">
                                        ${t.customerScreen}
                                    </li>
                        
                                    <li class="feature-item highlighted" style="padding: 14px 12px; border-bottom: 1px solid #e8e8e8; color: #2c3e50; font-size: 1rem; text-align: center; line-height: 1.5; background: linear-gradient(90deg, transparent 0%, #fff3cd 100%); min-height: 70px; display: flex; align-items: center; justify-content: center;">
                                        ${t.analyticsRep}
                                    </li>
                        
                                    <li class="feature-item highlighted" style="padding: 14px 12px; border-bottom: 1px solid #e8e8e8; color: #2c3e50; font-size: 1rem; text-align: center; line-height: 1.5; background: linear-gradient(90deg, transparent 0%, #fff3cd 100%); min-height: 70px; display: flex; align-items: center; justify-content: center;">
                                        ${t.topItems}
                                    </li>
                        
                                    <li class="feature-item highlighted" style="padding: 14px 12px; border-bottom: 1px solid #e8e8e8; color: #2c3e50; font-size: 1rem; text-align: center; line-height: 1.5; background: linear-gradient(90deg, transparent 0%, #fff3cd 100%); min-height: 70px; display: flex; align-items: center; justify-content: center;">
                                        ${t.salesVsReturns}
                                    </li>
                        
                                    <li class="feature-item highlighted" style="padding: 14px 12px; border-bottom: 1px solid #e8e8e8; color: #2c3e50; font-size: 1rem; text-align: center; line-height: 1.5; background: linear-gradient(90deg, transparent 0%, #fff3cd 100%); min-height: 70px; display: flex; align-items: center; justify-content: center;">
                                        ${t.peakSales}
                                    </li>
                        
                                    <li class="feature-item highlighted" style="padding: 14px 12px; color: #2c3e50; font-size: 1rem; text-align: center; line-height: 1.5; background: linear-gradient(90deg, transparent 0%, #fff3cd 100%); min-height: 70px; display: flex; align-items: center; justify-content: center; font-weight: bold;">
                                        ${t.price1200}
                                    </li>
                        
                                </ul>
                            </div>
                        
                            <!-- الفوتر -->
                            <div class="card-footer" style="background: linear-gradient(135deg, #f39c12 0%, #f7dc6f 100%); padding: 30px 25px; text-align: center; margin-top: auto;">
                                <button class="pricing-btn pro-btn" style="width: 85%; padding: 16px 30px; background: white; color: #d68910; border: none; border-radius: 12px; font-size: 1.2rem; font-weight: 700; cursor: pointer;">
                                    ${t.subscribeNow}
                                </button>
                            </div>
                        
                        </div>
                        <!-- === نهاية النسخة الاحترافية === -->
                        
                    </div>
                </div>
            </section>
            
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap');
                
                .pricing-plans-section * {
                    font-family: 'Cairo', 'Segoe UI', Tahoma, sans-serif !important;
                }
                
                .pricing-cards {
                    display: grid !important;
                    grid-auto-rows: 1fr !important;
                }
                
                .pricing-card {
                    position: relative;
                }
                
                .pricing-card:hover {
                    transform: translateY(-10px) !important;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.25) !important;
                }
                
                .feature-item:hover {
                    background: #f8f9fa !important;
                }
                
                .feature-item.highlighted {
                    font-weight: 600;
                    position: relative;
                }
                
                .feature-item.highlighted::before {
                    content: '✓';
                    position: absolute;
                    left: 15px;
                    color: #5dade2;
                    font-weight: bold;
                    font-size: 1.2rem;
                }
                
                .pricing-btn:hover {
                    background: #f0f8ff !important;
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px rgba(0,0,0,0.15) !important;
                }
                
                .pricing-btn:active {
                    transform: translateY(-1px);
                }
                
                .all-features-box {
                    animation: pulse 2s ease-in-out infinite;
                }
                
                @keyframes pulse {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.02);
                    }
                }
                
                .popular-badge {
                    animation: bounce 2s ease-in-out infinite;
                }
                
                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-5px);
                    }
                }
                
                @media (max-width: 900px) {
                    .pricing-cards {
                        grid-template-columns: 1fr !important;
                        gap: 30px !important;
                    }
                    
                    .card-header h3 {
                        font-size: 1.5rem !important;
                    }
                    
                    .card-header p {
                        font-size: 0.9rem !important;
                    }
                    
                    .feature-item {
                        font-size: 0.95rem !important;
                        padding: 12px 10px !important;
                    }
                    
                    .price {
                        font-size: 2.2rem !important;
                    }
                    
                    .pricing-btn {
                        font-size: 1.15rem !important;
                        padding: 15px 25px !important;
                    }
                    
                    .all-features-box p {
                        font-size: 1rem !important;
                    }
                }
                
                @media (max-width: 480px) {
                    .pricing-plans-section {
                        padding: 50px 15px !important;
                    }
                    
                    .card-header {
                        padding: 25px 20px !important;
                    }
                    
                    .card-body {
                        padding: 25px 20px !important;
                    }
                    
                    .card-footer {
                        padding: 25px 20px !important;
                    }
                    
                    .price {
                        font-size: 2rem !important;
                    }
                }
            </style>
        `;
        
        // Insert after the target section
        targetSection.insertAdjacentHTML('afterend', pricingHTML);
        
        // Add click event listeners to buttons
        const basicUrl    = isArabic
            ? 'https://shop.barmajah.net/ar/almotaman-light-basic/p1388465160'
            : 'https://shop.barmajah.net/en/almotaman-light-basic/p1388465160';
        const standardUrl = isArabic
            ? 'https://shop.barmajah.net/ar/almotaman-light-standard/p1348856160'
            : 'https://shop.barmajah.net/en/almotaman-light-standard/p1348856160';
        const proUrl      = isArabic
            ? 'https://shop.barmajah.net/ar/almotaman-light-pro/p1252727701'   // تعديل
            : 'https://shop.barmajah.net/en/almotaman-light-pro/p1252727701';  // تعديل
 
        const pricingButtons = document.querySelectorAll('.pricing-btn');
        pricingButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                let url = basicUrl;
                if (this.classList.contains('featured')) url = standardUrl;
                if (this.classList.contains('pro-btn')) url = proUrl; // تعديل  
                window.location.href = url;
            });
        });
        
        console.log('Perfectly aligned pricing plans section added successfully');
    }
})();
 
// Add icons to Customer Service menu links
// Add icons to Customer Service menu links - Universal Version
(function() {
    'use strict';

    const icons = {
        'whatsapp': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style="display:inline-block;vertical-align:middle;margin-left:6px;flex-shrink:0;" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
        'phone': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style="display:inline-block;vertical-align:middle;margin-left:6px;flex-shrink:0;" fill="#1e7ba6"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`,
        'telegram': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style="display:inline-block;vertical-align:middle;margin-left:6px;flex-shrink:0;" fill="#229ED9"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`,
        'email': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style="display:inline-block;vertical-align:middle;margin-left:6px;flex-shrink:0;" fill="#e74c3c"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`
    };

    const NEW_PHONE = '966543423630';

    // دالة لتحديد نوع الأيقونة بناءً على النص الموجود (عربي أو إنجليزي)
    function getIconType(text) {
        const str = (text || '').toLowerCase();
        if (str.includes('واتساب') || str.includes('whatsapp')) return 'whatsapp';
        if (str.includes('هاتف') || str.includes('phone') || str.includes('اتصل')) return 'phone';
        if (str.includes('تلقرام') || str.includes('telegram')) return 'telegram';
        if (str.includes('إيميل') || str.includes('email') || str.includes('بريد')) return 'email';
        return null;
    }

    function injectMenuIcons() {
        // البحث في جميع الروابط التي قد تكون في قائمة التواصل
        document.querySelectorAll('a[aria-label], [data-menu-item] a').forEach(function(link) {
            if (link.querySelector('.menu-icon-injected')) return;

            const label = link.getAttribute('aria-label') || link.textContent;
            const iconType = getIconType(label);

            if (iconType && icons[iconType]) {
                const span = link.querySelector('span');
                if (span) {
                    const iconEl = document.createElement('span');
                    iconEl.className = 'menu-icon-injected';
                    iconEl.innerHTML = icons[iconType];
                    iconEl.style.cssText = 'display:inline-flex;align-items:center;';
                    
                    span.style.cssText = 'display:inline-flex;align-items:center;gap:6px;';
                    span.insertBefore(iconEl, span.firstChild);
                }
            }
        });
    }

    function forceContactLinks() {
        document.querySelectorAll('a').forEach(function(link) {
            const label = (link.getAttribute('aria-label') || link.textContent || '').toLowerCase();
            
            // تحديث رابط الهاتف
            if (label.includes('هاتف') || label.includes('phone')) {
                link.setAttribute('href', 'tel:+' + NEW_PHONE);
                link.setAttribute('target', '_self');
            }
            // تحديث رابط الإيميل
            if (label.includes('إيميل') || label.includes('email')) {
                link.setAttribute('href', 'mailto:sales@barmajah.net');
                link.setAttribute('target', '_self');
            }
        });
    }

    // التنفيذ عند التحميل
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            injectMenuIcons();
            forceContactLinks();
        });
    } else {
        injectMenuIcons();
        forceContactLinks();
    }

    // مراقبة التغييرات (لضمان العمل عند التنقل بين الصفحات أو اللغات)
    const observer = new MutationObserver(function() {
        injectMenuIcons();
        forceContactLinks();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // زيادة التأكيد لضمان استبدال الروابط
    setInterval(forceContactLinks, 2000);
})();
