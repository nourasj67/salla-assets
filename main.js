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
(function() {
    'use strict';
 
    const icons = {
        'واتساب': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style="display:inline-block;vertical-align:middle;margin-left:6px;flex-shrink:0;" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
        'هاتف': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style="display:inline-block;vertical-align:middle;margin-left:6px;flex-shrink:0;" fill="#1e7ba6"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`,
        'تلقرام': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style="display:inline-block;vertical-align:middle;margin-left:6px;flex-shrink:0;" fill="#229ED9"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`,
        'إيميل': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style="display:inline-block;vertical-align:middle;margin-left:6px;flex-shrink:0;" fill="#e74c3c"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`
    };
 
    // ─── تعديل: تحديث الرقم الجديد هنا فقط ───────────────────────
    const NEW_PHONE = '966543423630';
    // ──────────────────────────────────────────────────────────────
 
    const menuItemIds = {
        '2063698619': 'واتساب',
        '1237953022': 'هاتف',   // الـ ID القديم — مُبقى للتوافق
        '570846204':  'تلقرام',
        '650889349':  'إيميل'
    };
 
    const CONTACT_MENU_IDS = {
        phone: '1237953022',    // الـ ID القديم — الكود يبحث أيضاً بالـ aria-label كبديل
        email: '650889349'
    };
 
    const CONTACT_FALLBACKS = {
        email: 'sales@barmajah.net',
        phone: NEW_PHONE
    };
 
    const CONTACT_HREFS = {
        email: 'mailto:' + CONTACT_FALLBACKS.email,
        phone: 'tel:+' + NEW_PHONE
    };
 
    const CONTACT_LABELS = {
        email: 'إيميل',
        phone: 'هاتف'
    };
 
    function normalizeEmailHref(rawValue) {
        const value = (rawValue || '').trim();
        const emailMatch = value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
        const email = emailMatch ? emailMatch[0] : CONTACT_FALLBACKS.email;
        return email ? 'mailto:' + email : '';
    }
 
    function normalizeTelHref(rawValue) {
        const value = (rawValue || '').trim();
        const start = value.toLowerCase().indexOf('tel:');
        const source = start >= 0 ? value.slice(start + 4) : value;
        const digits = source.replace(/[^\d+]/g, '');
        const phone = digits || CONTACT_FALLBACKS.phone;
        return phone ? 'tel:+' + phone.replace(/^\+/, '') : '';
    }
 
    function forceContactLinks() {
        // بالـ ID المعروف
        const phoneItemById = document.getElementById(CONTACT_MENU_IDS.phone);
        if (phoneItemById) {
            const phoneLink = phoneItemById.querySelector('a');
            if (phoneLink) {
                phoneLink.setAttribute('href', CONTACT_HREFS.phone);
                phoneLink.setAttribute('target', '_self');
            }
        }
 
        const emailItemById = document.getElementById(CONTACT_MENU_IDS.email);
        if (emailItemById) {
            const emailLink = emailItemById.querySelector('a');
            if (emailLink) {
                emailLink.setAttribute('href', CONTACT_HREFS.email);
                emailLink.setAttribute('target', '_self');
            }
        }
 
        // بالـ aria-label — يعمل حتى لو تغيّر الـ ID بعد إعادة إضافة العنصر في سلة
        document.querySelectorAll('a[aria-label="' + CONTACT_LABELS.phone + '"]').forEach(function(link) {
            link.setAttribute('href', CONTACT_HREFS.phone);
            link.setAttribute('target', '_self');
        });
 
        document.querySelectorAll('a[aria-label="' + CONTACT_LABELS.email + '"]').forEach(function(link) {
            link.setAttribute('href', CONTACT_HREFS.email);
            link.setAttribute('target', '_self');
        });
 
        // بحث إضافي: أي رابط tel: يحتوي على الرقم القديم → استبدله بالجديد
        document.querySelectorAll('a[href^="tel:"]').forEach(function(link) {
            const href = link.getAttribute('href') || '';
            if (href.includes('567078988')) {
                link.setAttribute('href', CONTACT_HREFS.phone);
            }
        });
    }
 
    function installContactClickGuard() {
        if (document.body.dataset.contactGuardBound) return;
 
        document.body.addEventListener('click', function(e) {
            const clickedLink = e.target.closest('a');
            if (!clickedLink) return;
 
            const clickedLabel = (clickedLink.getAttribute('aria-label') || '').trim();
            if (clickedLabel === CONTACT_LABELS.email) {
                clickedLink.setAttribute('href', CONTACT_HREFS.email);
                clickedLink.setAttribute('target', '_self');
                return;
            }
 
            if (clickedLabel === CONTACT_LABELS.phone) {
                clickedLink.setAttribute('href', CONTACT_HREFS.phone);
                clickedLink.setAttribute('target', '_self');
                return;
            }
 
            const emailItem = document.getElementById(CONTACT_MENU_IDS.email);
            if (emailItem && emailItem.contains(clickedLink)) {
                const emailHref = CONTACT_HREFS.email || normalizeEmailHref(clickedLink.getAttribute('href'));
                if (!emailHref) return;
                clickedLink.setAttribute('href', emailHref);
                clickedLink.setAttribute('target', '_self');
                return;
            }
 
            const phoneItem = document.getElementById(CONTACT_MENU_IDS.phone);
            if (phoneItem && phoneItem.contains(clickedLink)) {
                const phoneHref = CONTACT_HREFS.phone || normalizeTelHref(clickedLink.getAttribute('href'));
                if (!phoneHref) return;
                clickedLink.setAttribute('href', phoneHref);
                clickedLink.setAttribute('target', '_self');
            }
        }, true);
 
        document.body.addEventListener('pointerdown', function(e) {
            const clickedLink = e.target.closest('a');
            if (!clickedLink) return;
 
            const clickedLabel = (clickedLink.getAttribute('aria-label') || '').trim();
            if (clickedLabel === CONTACT_LABELS.email) {
                clickedLink.setAttribute('href', CONTACT_HREFS.email);
                clickedLink.setAttribute('target', '_self');
            }
 
            if (clickedLabel === CONTACT_LABELS.phone) {
                clickedLink.setAttribute('href', CONTACT_HREFS.phone);
                clickedLink.setAttribute('target', '_self');
            }
        }, true);
 
        document.body.dataset.contactGuardBound = '1';
    }
 
    function injectMenuIcons() {
        // المنهج 1: البحث بالـ aria-label على أي [data-menu-item]
        document.querySelectorAll('[data-menu-item] a[aria-label]').forEach(function(link) {
            const label = link.getAttribute('aria-label');
            if (!icons[label]) return;
            const span = link.querySelector('span');
            if (!span || link.querySelector('.menu-icon-injected')) return;
            const iconEl = document.createElement('span');
            iconEl.className = 'menu-icon-injected';
            iconEl.innerHTML = icons[label];
            iconEl.style.cssText = 'display:inline-flex;align-items:center;';
            span.style.cssText = 'display:inline-flex;align-items:center;gap:6px;';
            span.insertBefore(iconEl, span.firstChild);
        });
 
        // المنهج 2: بحث أوسع — أي <a> يحمل aria-label من قائمة الأيقونات
        // (يعمل حتى بدون data-menu-item، ويغطي حالة تغيّر الـ ID)
        document.querySelectorAll('a[aria-label]').forEach(function(link) {
            const label = link.getAttribute('aria-label');
            if (!icons[label]) return;
            if (link.querySelector('.menu-icon-injected')) return;
            const span = link.querySelector('span');
            if (!span) return;
            const iconEl = document.createElement('span');
            iconEl.className = 'menu-icon-injected';
            iconEl.innerHTML = icons[label];
            iconEl.style.cssText = 'display:inline-flex;align-items:center;';
            span.style.cssText = 'display:inline-flex;align-items:center;gap:6px;';
            span.insertBefore(iconEl, span.firstChild);
        });
 
        // المنهج 3: بالـ ID كاحتياطي
        Object.entries(menuItemIds).forEach(function([id, label]) {
            const li = document.getElementById(id);
            if (!li) return;
            const link = li.querySelector('a[aria-label]');
            if (!link || link.querySelector('.menu-icon-injected')) return;
            const span = link.querySelector('span');
            if (!span) return;
            const iconEl = document.createElement('span');
            iconEl.className = 'menu-icon-injected';
            iconEl.innerHTML = icons[label];
            iconEl.style.cssText = 'display:inline-flex;align-items:center;';
            span.style.cssText = 'display:inline-flex;align-items:center;gap:6px;';
            span.insertBefore(iconEl, span.firstChild);
        });
 
        forceContactLinks();
    }
 
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            injectMenuIcons();
            installContactClickGuard();
        });
    } else {
        injectMenuIcons();
        installContactClickGuard();
    }
 
    // إعادة المحاولة لتغطية الرندر المتأخر
    setTimeout(injectMenuIcons, 500);
    setTimeout(injectMenuIcons, 1500);
    setTimeout(injectMenuIcons, 3000);
    setInterval(forceContactLinks, 1000);
 
    // MutationObserver لرصد أي تغيير في DOM بعد التحميل
    const observer = new MutationObserver(function() {
        injectMenuIcons();
    });
    observer.observe(document.body, { childList: true, subtree: true });
})();
 
