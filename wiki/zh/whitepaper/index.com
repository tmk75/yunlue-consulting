<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>智析蓝本 - 外部对标知识萃取报告 & 白皮书</title>
  <link rel="stylesheet" href="style.css" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Open+Sans&display=swap" rel="stylesheet">
  <script src="script.js" defer></script>
</head>
<body>
  <div class="container">
    <!-- Header -->
    <header class="header">
      <h1>智析蓝本</h1>
      <p class="subtitle">外部对标知识萃取报告 · 2024</p>
    </header>

    <!-- Tabs Navigation -->
    <nav class="tabs">
      <button class="tab active" data-tab="overview">报告概览</button>
      <button class="tab" data-tab="extraction">知识萃取方法</button>
      <button class="tab" data-tab="benchmarking">外部对标分析</button>
      <button class="tab" data-tab="whitepaper">白皮书全文</button>
      <button class="tab" data-tab="case-studies">案例研究</button>
      <button class="tab" data-tab="download">下载与资源</button>
    </nav>

    <!-- Tab Content -->
    <main class="content">

      <!-- Tab 1: 概览 -->
      <section id="overview" class="tab-content active">
        <h2>报告概览</h2>
        <p class="intro">
          本报告系统梳理了全球领先企业在战略、组织、技术等维度的实践案例，通过知识萃取与跨行业对标，提炼出可复制的创新范式与管理机制。
        </p>

        <div class="insight-cards">
          <div class="card">
            <div class="icon">🔍</div>
            <h3>深度对标</h3>
            <p>覆盖科技、制造、金融等6大行业，精选12家标杆企业。</p>
          </div>
          <div class="card">
            <div class="icon">📊</div>
            <h3>数据驱动</h3>
            <p>基于NLP与认知图谱，结构化萃取3,000+条关键知识。</p>
          </div>
          <div class="card">
            <div class="icon">💡</div>
            <h3>可落地</h3>
            <p>提供5大实施路径建议，助力组织知识进化。</p>
          </div>
        </div>

        <div class="quick-links">
          <a href="#" class="btn" onclick="switchTab('whitepaper'); return false;">阅读白皮书</a>
          <a href="#" class="btn" onclick="switchTab('case-studies'); return false;">查看案例</a>
        </div>
      </section>

      <!-- Tab 2: 知识萃取方法 -->
      <section id="extraction" class="tab-content">
        <h2>知识萃取方法</h2>
        <p>我们采用“四阶五维”方法论，系统化从外部实践中提炼可迁移知识。</p>

        <div class="methodology">
          <img src="https://via.placeholder.com/800x300?text=方法论流程图" alt="知识萃取流程" class="method-img" />
        </div>

        <div class="tools">
          <h3>关键技术工具</h3>
          <ul>
            <li><strong>NLP文本分析</strong>：自动提取文档中的关键决策逻辑</li>
            <li><strong>认知图谱</strong>：构建“问题-机制-结果”知识网络</li>
            <li><strong>专家访谈模板</strong>：结构化捕捉隐性知识</li>
          </ul>
        </div>

        <div class="tip-box">
          <p>💡 提示：避免“表面对标”，应深入分析“背后的机制与决策逻辑”</p>
        </div>
      </section>

      <!-- Tab 3: 外部对标分析 -->
      <section id="benchmarking" class="tab-content">
        <h2>外部对标分析</h2>
        <p>基于创新能力与执行效率两个维度，对8家全球领先企业进行雷达评估。</p>

        <div class="chart">
          <img src="https://via.placeholder.com/700x400?text=对标雷达图" alt="对标雷达图" />
        </div>

        <table class="comparison-table">
          <thead>
            <tr>
              <th>维度</th>
              <th>科技企业A</th>
              <th>制造企业B</th>
              <th>金融企业C</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>决策机制</td>
              <td>高敏捷</td>
              <td>层级制</td>
              <td>混合型</td>
            </tr>
            <tr>
              <td>知识共享文化</td>
              <td>强</td>
              <td>中</td>
              <td>弱</td>
            </tr>
            <tr>
              <td>试错容忍度</td>
              <td>高</td>
              <td>低</td>
              <td>中</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- Tab 4: 白皮书全文 -->
      <section id="whitepaper" class="tab-content">
        <h2>《知识驱动的组织进化》白皮书</h2>
        <p class="intro">本白皮书系统阐述知识萃取理论、方法与实践路径，共四章。</p>

        <div class="toc">
          <h3>目录</h3>
          <ol>
            <li><a href="#ch1">第一章：背景与意义</a></li>
            <li><a href="#ch2">第二章：方法论体系</a></li>
            <li><a href="#ch3">第三章：实证分析</a></li>
            <li><a href="#ch4">第四章：实施路径建议</a></li>
          </ol>
        </div>

        <div class="whitepaper-content">
          <h3 id="ch1">第一章：背景与意义</h3>
          <p>在数字化转型加速的背景下，组织的知识积累与迁移能力成为核心竞争力……</p>

          <h3 id="ch2">第二章：方法论体系</h3>
          <p>我们提出“四阶五维”知识萃取模型：采集 → 清洗 → 识别 → 建模 → 验证……</p>

          <h3 id="ch3">第三章：实证分析</h3>
          <p>通过对12家企业的案例分析，发现跨行业知识迁移存在三大障碍……</p>

          <h3 id="ch4">第四章：实施路径建议</h3>
          <p>建议企业建立“知识中台”，推动知识资产化、流程化、智能化……</p>
        </div>
      </section>

      <!-- Tab 5: 案例研究 -->
      <section id="case-studies" class="tab-content">
        <h2>案例研究</h2>
        <div class="case-cards">
          <div class="case-card">
            <h3>科技行业：AI公司知识管理创新</h3>
            <p><strong>挑战：</strong>研发知识分散，新人上手慢</p>
            <p><strong>借鉴：</strong>医疗行业“病例归档”机制</p>
            <p><strong>成果：</strong>知识复用率提升42%</p>
          </div>
          <div class="case-card">
            <h3>制造业：敏捷开发转型</h3>
            <p><strong>挑战：</strong>传统流程僵化</p>
            <p><strong>借鉴：</strong>丰田生产系统 + 互联网敏捷</p>
            <p><strong>成果：</strong>产品迭代周期缩短30%</p>
          </div>
          <div class="case-card">
            <h3>金融行业：风控模型升级</h3>
            <p><strong>挑战：</strong>欺诈识别滞后</p>
            <p><strong>借鉴：</strong>电商平台实时反欺诈机制</p>
            <p><strong>成果：</strong>误判率下降25%</p>
          </div>
        </div>
      </section>

      <!-- Tab 6: 下载与资源 -->
      <section id="download" class="tab-content">
        <h2>下载与资源</h2>
        <p>获取完整资料包，助力组织知识升级。</p>

        <div class="downloads">
          <a href="#" class="download-item">
            📥 <strong>白皮书全文（PDF）</strong><br>
            <small>高清版，含图表与附录</small>
          </a>
          <a href="#" class="download-item">
            📊 <strong>汇报精华版（PPT）</strong><br>
            <small>15页，适合内部分享</small>
          </a>
          <a href="#" class="download-item">
            📈 <strong>对标数据表（Excel）</strong><br>
            <small>原始数据与评分逻辑</small>
          </a>
          <a href="#" class="download-item">
            🧰 <strong>方法论工具包（ZIP）</strong><br>
            <small>含模板、问卷、流程图</small>
          </a>
        </div>

        <div class="subscribe">
          <h3>订阅更新</h3>
          <p>获取后续行业对标报告与知识管理工具。</p>
          <input type="email" placeholder="请输入邮箱" />
          <button class="btn">订阅</button>
        </div>

        <div class="links">
          <a href="#">知识管理平台介绍</a> | 
          <a href="#">联系我们</a> | 
          <a href="#">合作咨询</a>
        </div>
      </section>

    </main>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2024 智析研究院. 保留所有权利。</p>
    </footer>
  </div>
</body>
</html>
