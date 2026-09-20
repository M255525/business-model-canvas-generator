/* ==========================================================================
   商業模式圖產生器 — 共用資料檔
   分類關鍵字比對（沿用 new-product-strategy-studio 的六桶分類法）、
   九宮格規則式模板庫（零 API 金鑰即可用）、5 組內建範例。
   佔位符：{{PRODUCT}}=產品名稱 {{TARGET}}=目標客群 {{PAIN}}=痛點/需求
   ========================================================================== */
(function (global) {
  'use strict';

  var CATEGORY_LABELS = {
    healthTech: '健康科技',
    foodBeverage: '餐飲食品',
    saasSoftware: '軟體服務',
    homeAppliance: '生活家電',
    eduContent: '教育內容',
    general: '一般消費'
  };

  var CATEGORY_KEYWORDS = {
    healthTech: ['健康', '醫療', '血壓', '血糖', '睡眠', '運動', '健身', '穿戴', '照護', '保健', '心率', '體脂', '復健', '量測'],
    foodBeverage: ['餐飲', '咖啡', '茶', '飲料', '食品', '餐廳', '外送', '食材', '烘焙', '小吃', '火鍋', '甜點', '訂閱盒', '農產', '料理'],
    saasSoftware: ['軟體', '系統', '平台', 'saas', 'app', '應用程式', '雲端', '管理系統', '排班', 'crm', 'erp', 'api', '數位工具', '網站'],
    homeAppliance: ['家電', '家用', '居家', '清潔', '除濕', '空氣', '廚房', '家具', '智慧家庭', '收納', '照明', '循環扇'],
    eduContent: ['教育', '課程', '學習', '教學', '兒童', '培訓', '線上課', '補習', '技能', '考試', '親子', '營隊']
  };

  function classifyCategory(category, pain) {
    var text = (String(category || '') + ' ' + String(pain || '')).toLowerCase();
    var keys = Object.keys(CATEGORY_KEYWORDS);
    for (var i = 0; i < keys.length; i++) {
      var list = CATEGORY_KEYWORDS[keys[i]];
      for (var j = 0; j < list.length; j++) {
        if (text.indexOf(list[j].toLowerCase()) !== -1) return keys[i];
      }
    }
    return 'general';
  }

  var BLOCK_KEYS = ['partners', 'activities', 'resources', 'value', 'relationships', 'channels', 'segments', 'cost', 'revenue'];
  var BLOCK_LABELS = {
    partners: '關鍵合作夥伴 Key Partners',
    activities: '關鍵活動 Key Activities',
    resources: '關鍵資源 Key Resources',
    value: '價值主張 Value Propositions',
    relationships: '顧客關係 Customer Relationships',
    channels: '通路 Channels',
    segments: '客戶群體 Customer Segments',
    cost: '成本結構 Cost Structure',
    revenue: '收益流 Revenue Streams'
  };

  var BMC_TEMPLATES = {
    healthTech: {
      partners: [
        '與醫療院所、健檢中心或保險公司合作，取得專業背書並拓展{{TARGET}}的接觸管道。',
        '與穿戴裝置或感測元件供應商建立長期採購關係，確保{{PRODUCT}}的硬體品質與成本穩定。'
      ],
      activities: [
        '持續進行數據演算法優化與使用者驗證，確保{{PRODUCT}}對{{PAIN}}的量測或改善效果具說服力。',
        '經營衛教內容與社群，教育{{TARGET}}正確使用{{PRODUCT}}並建立信任感。'
      ],
      resources: [
        '累積的健康數據資料庫與演算法模型，是{{PRODUCT}}最核心且難以複製的資產。',
        '具備醫療或運動科學背景的專業團隊，支撐{{PRODUCT}}的可信度。'
      ],
      value: [
        '{{PRODUCT}}讓{{TARGET}}能主動掌握自身健康狀況，及早發現並改善{{PAIN}}，而不必等到症狀惡化才就醫。',
        '相較於傳統做法，{{PRODUCT}}把原本需要專業設備或門診才能取得的數據，變成{{TARGET}}日常就能取得的資訊。'
      ],
      relationships: [
        '透過App推播提醒與個人化健康報告，與{{TARGET}}建立長期陪伴式的關係。',
        '建立線上社群或教練諮詢管道，讓{{TARGET}}在使用過程中持續獲得專業支持。'
      ],
      channels: [
        '官方App／官網直營銷售，搭配健康講座或健檢通路做實體曝光。',
        '與藥局、健身房或企業員工福利平台合作分銷。'
      ],
      segments: [
        '重視預防醫學、願意主動投資自身健康管理的{{TARGET}}。',
        '因{{PAIN}}而長期尋求改善方案、但對傳統醫療流程感到不便的族群。'
      ],
      cost: [
        '研發與驗證是前期最大的固定成本，須攤提到足夠的用戶規模才能打平。',
        '硬體製造、雲端數據儲存與客服支援是主要的變動成本。'
      ],
      revenue: [
        '硬體銷售加上月費訂閱制（數據分析、教練諮詢等加值服務）的雙軌收入模式。',
        '與企業或保險公司簽訂B2B2C合作方案，依用戶數或成效計費。'
      ]
    },
    foodBeverage: {
      partners: [
        '與在地食材供應商或小農建立直採合作，確保{{PRODUCT}}的品質與故事性。',
        '與外送平台或聯名品牌合作，擴大{{TARGET}}的觸及範圍。'
      ],
      activities: [
        '穩定的品質控管與出餐流程標準化，確保{{PRODUCT}}的口味一致。',
        '社群內容經營與新品開發，維持{{TARGET}}對品牌的新鮮感。'
      ],
      resources: [
        '獨家配方或製程工藝，是{{PRODUCT}}難以被競品複製的核心資產。',
        '具辨識度的品牌形象與門市／通路據點。'
      ],
      value: [
        '{{PRODUCT}}用穩定的品質與便利的取得方式，解決{{TARGET}}在{{PAIN}}上的煩惱，不需要自己花時間準備。',
        '用有溫度的品牌故事，讓{{TARGET}}的消費不只是填飽肚子，也是一種認同與享受。'
      ],
      relationships: [
        '透過會員集點與社群互動，培養{{TARGET}}的重複消費習慣。',
        '第一線人員的親切服務，建立{{TARGET}}對品牌的信任與黏著度。'
      ],
      channels: [
        '實體門市搭配外送平台，兼顧內用與外帶外送的{{TARGET}}需求。',
        '電商官網或團購通路銷售常溫/冷凍商品，突破商圈地域限制。'
      ],
      segments: [
        '在意{{PAIN}}、重視飲食品質與便利性的{{TARGET}}。',
        '願意為特殊飲食需求（健康/在地/客製）額外付費的族群。'
      ],
      cost: [
        '食材成本與店租人事是最大宗的固定與變動成本。',
        '行銷推廣與外送平台抽成，會直接壓縮單筆訂單的毛利率。'
      ],
      revenue: [
        '主力產品銷售收入，搭配加購商品（飲品/配料）提高客單價。',
        '訂閱制餐盒或會員方案，創造穩定的重複性收入。'
      ]
    },
    saasSoftware: {
      partners: [
        '與系統整合商或產業顧問合作，加速{{PRODUCT}}導入{{TARGET}}既有的工作流程。',
        '與雲端服務供應商建立合作關係，確保系統穩定與成本可控。'
      ],
      activities: [
        '持續的產品開發與版本迭代，確保{{PRODUCT}}能跟上{{TARGET}}不斷變化的需求。',
        '客戶成功與技術支援團隊的日常維運，降低{{TARGET}}導入後的流失率。'
      ],
      resources: [
        '核心程式碼與系統架構，是{{PRODUCT}}最主要的技術資產。',
        '累積的客戶使用數據與產業know-how，用於持續優化產品。'
      ],
      value: [
        '{{PRODUCT}}把{{TARGET}}原本仰賴人工、容易出錯的{{PAIN}}流程自動化，省下大量時間與人力成本。',
        '透過單一平台整合原本分散的多個工具，讓{{TARGET}}的資訊不再各自為政。'
      ],
      relationships: [
        '提供導入教育訓練與專屬客戶成功經理，陪{{TARGET}}走過導入初期的適應期。',
        '透過使用者社群與定期功能更新說明會，維持{{TARGET}}對產品的參與感。'
      ],
      channels: [
        '官網自助試用註冊，搭配業務團隊主動開發大型{{TARGET}}客戶。',
        '透過產業展會與內容行銷（部落格/案例分享）建立自然流量。'
      ],
      segments: [
        '正被{{PAIN}}困擾、且有數位轉型預算的中小型{{TARGET}}。',
        '已有類似系統但對現有方案不滿意、正在評估替換的企業用戶。'
      ],
      cost: [
        '研發人力是最大宗的固定成本，雲端主機費用則隨用戶量增加而變動。',
        '業務與客戶成功團隊的人事成本，是維持低流失率的必要投資。'
      ],
      revenue: [
        '依用戶數或功能模組分級的月費／年費訂閱制（SaaS標準商業模式）。',
        '導入建置費加上後續維護費的一次性＋持續性混合收費模式。'
      ]
    },
    homeAppliance: {
      partners: [
        '與家電通路商或電商平台建立穩定的上架與促銷合作。',
        '與代工廠（ODM/OEM）合作，確保{{PRODUCT}}的產能與品質穩定。'
      ],
      activities: [
        '產品設計與品質檢驗，確保{{PRODUCT}}耐用且符合{{TARGET}}的使用習慣。',
        '售後維修與客服體系的維運，降低{{TARGET}}的購買疑慮。'
      ],
      resources: [
        '產品的外觀設計與品牌信譽，是{{PRODUCT}}的差異化資產。',
        '穩定的供應鏈與庫存管理能力，避免缺貨或滯銷。'
      ],
      value: [
        '{{PRODUCT}}用更省力、更省時的方式，解決{{TARGET}}在居家生活中{{PAIN}}的困擾。',
        '兼顧美感與機能的設計，讓{{PRODUCT}}不只是工具，也是{{TARGET}}居家空間的一部分。'
      ],
      relationships: [
        '提供保固與到府維修服務，讓{{TARGET}}購買後仍感受到被照顧。',
        '透過開箱評測與社群口碑，建立{{TARGET}}對品牌的信任。'
      ],
      channels: [
        '電商平台搭配實體通路曝光，觸及不同購物習慣的{{TARGET}}。',
        '與居家生活類KOL合作評測，帶動口碑擴散。'
      ],
      segments: [
        '因{{PAIN}}而想改善居家生活品質、願意為便利性付費的{{TARGET}}。',
        '注重居家美感與空間規劃、追求生活品味的消費者。'
      ],
      cost: [
        '製造與原物料成本是最大宗的變動成本，會隨匯率與原料價格波動。',
        '倉儲物流與電商平台的上架/廣告費用，是主要的通路成本。'
      ],
      revenue: [
        '一次性商品銷售收入為主，可搭配保固延長或耗材配件的加購收入。',
        '針對企業採購或B2B通路提供批發價，開拓零售以外的收入來源。'
      ]
    },
    eduContent: {
      partners: [
        '與講師、內容創作者或出版社合作，豐富{{PRODUCT}}的課程內容庫。',
        '與學校、企業或補習班建立通路合作，批量觸及{{TARGET}}。'
      ],
      activities: [
        '課程內容的持續產製與更新，確保{{PRODUCT}}的教材對{{TARGET}}保持吸引力。',
        '學習成效追蹤與客服陪伴，提升{{TARGET}}的完課率與續訂意願。'
      ],
      resources: [
        '累積的課程內容庫與講師陣容，是{{PRODUCT}}最核心的資產。',
        '學習平台系統與學員數據，用於持續優化教學體驗。'
      ],
      value: [
        '{{PRODUCT}}用更彈性、更有效率的學習方式，幫助{{TARGET}}克服{{PAIN}}，不必受限於傳統課程的時間與地點。',
        '透過分級課程與實作練習，讓{{TARGET}}從入門到進階都能找到合適的學習路徑。'
      ],
      relationships: [
        '提供助教陪伴或學習社群，降低{{TARGET}}自學容易半途而廢的問題。',
        '定期學習成果回饋與證書認證，維持{{TARGET}}的學習動機。'
      ],
      channels: [
        '官網或學習平台直接銷售課程，搭配社群媒體內容行銷導流。',
        '與企業合作導入內訓課程，或透過教育補助方案觸及{{TARGET}}。'
      ],
      segments: [
        '因{{PAIN}}而想提升特定技能、但時間有限的{{TARGET}}。',
        '重視自我成長、願意持續投資學習的終身學習者。'
      ],
      cost: [
        '課程內容製作與講師費用是主要的前期固定成本。',
        '平台維運與行銷推廣費用，是取得新學員的主要變動成本。'
      ],
      revenue: [
        '單堂課程或課程包的一次性銷售收入。',
        '訂閱制學習平台，讓{{TARGET}}持續付費取得新內容與服務。'
      ]
    },
    general: {
      partners: [
        '與上下游供應商或通路夥伴建立長期合作關係，確保{{PRODUCT}}穩定供應。',
        '與異業品牌合作行銷，共同拓展{{TARGET}}的觸及範圍。'
      ],
      activities: [
        '產品／服務品質的持續優化，確保{{PRODUCT}}能穩定解決{{TARGET}}的{{PAIN}}。',
        '品牌行銷與顧客關係維護，建立{{TARGET}}對品牌的認知與信任。'
      ],
      resources: [
        '品牌信譽與顧客口碑，是{{PRODUCT}}最重要的無形資產。',
        '穩定的營運團隊與供應鏈管理能力。'
      ],
      value: [
        '{{PRODUCT}}用更直接有效的方式，幫{{TARGET}}解決{{PAIN}}，省下摸索與嘗試錯誤的成本。',
        '相較於市場既有選項，{{PRODUCT}}在品質與服務體驗上提供更高的性價比。'
      ],
      relationships: [
        '透過客服與售後服務，建立{{TARGET}}對品牌的長期信任。',
        '會員制度與定期互動，維持{{TARGET}}的回購率。'
      ],
      channels: [
        '線上電商搭配實體通路曝光，觸及不同購物習慣的{{TARGET}}。',
        '口碑推薦與社群媒體行銷，擴大自然觸及。'
      ],
      segments: [
        '正被{{PAIN}}困擾、正在尋找解決方案的{{TARGET}}。',
        '對品質與服務有一定要求、願意為此付費的消費族群。'
      ],
      cost: [
        '營運與人事成本是主要的固定支出。',
        '行銷推廣與通路費用，會隨業務規模增加而變動。'
      ],
      revenue: [
        '商品或服務銷售的直接收入。',
        '加值服務或會員方案帶來的附加收入。'
      ]
    }
  };

  var PRESETS = [
    {label:'智慧血壓手錶', productName:'智慧血壓手錶', category:'健康科技穿戴裝置', target:'40歲以上關注血壓的上班族與長輩', pain:'量血壓要用傳統壓脈帶、不方便隨時量測且忘記記錄'},
    {label:'社區烘焙訂閱盒', productName:'社區手作烘焙訂閱盒', category:'餐飲食品訂閱', target:'重視食材品質的雙薪家庭', pain:'想吃到新鮮手作烘焙但沒時間自己做也不知道去哪買'},
    {label:'排班管理SaaS', productName:'中小企業排班管理系統', category:'軟體服務SaaS平台', target:'零售與餐飲業的中小企業店長', pain:'用Excel和LINE群組排班常常出錯、換班溝通混亂'},
    {label:'除濕循環扇', productName:'除濕循環扇', category:'生活家電居家', target:'租屋族與潮濕地區的小家庭', pain:'房間濕氣重、衣服曬不乾，但除濕機太貴太占空間'},
    {label:'兒童程式設計課', productName:'兒童程式設計線上課', category:'教育內容線上課程', target:'國小中高年級學生的家長', pain:'想讓孩子學程式設計但不知道怎麼選、擔心枯燥學不下去'},
  ];

  global.BMC_DATA = {
    CATEGORY_LABELS: CATEGORY_LABELS,
    CATEGORY_KEYWORDS: CATEGORY_KEYWORDS,
    classifyCategory: classifyCategory,
    BLOCK_KEYS: BLOCK_KEYS,
    BLOCK_LABELS: BLOCK_LABELS,
    BMC_TEMPLATES: BMC_TEMPLATES,
    PRESETS: PRESETS
  };
})(window);
