/* SURFACE ALPHA — 사이트 동작 스크립트 (외부 라이브러리 없음) */
(function () {
  'use strict';

  var CFG = window.SA_CONFIG || { company: {}, form: {}, relatedBrands: { show: false } };
  var C = CFG.company || {};
  var PROJECTS = window.SA_PROJECTS || [];

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function tel(s) { return 'tel:' + String(s || '').replace(/[^0-9+]/g, ''); }

  /* ---------- 회사 정보 반영 ---------- */
  function applyCompany() {
    var phoneA = $('[data-company="phoneLink"]');
    if (phoneA && C.phone) { phoneA.textContent = C.phone; phoneA.href = tel(C.phone); }
    var mobA = $('[data-company="mobileLink"]');
    if (mobA && C.mobile) { mobA.textContent = C.mobile; mobA.href = tel(C.mobile); }
    var addr = $('[data-company="address"]');
    if (addr && C.address) addr.textContent = C.address;
    var ret = $('[data-company="retention"]');
    if (ret && C.retention) ret.textContent = C.retention;
    if (C.email) {
      var row = $('[data-company-row="email"]');
      var em = $('[data-company="email"]');
      if (row && em) { em.textContent = C.email; row.hidden = false; }
    }

    var info = $('#bizInfo');
    if (info) {
      var rows = [
        ['상호', (C.nameEn || '') + (C.nameKo ? ' / ' + C.nameKo : '')],
        ['대표자', C.ceo],
        ['사업자등록번호', C.bizNumber],
        ['주소', C.address],
        ['대표전화', C.phone],
        ['휴대전화', C.mobile],
        ['이메일', C.email]
      ];
      info.innerHTML = rows.filter(function (r) { return r[1]; }).map(function (r) {
        return '<div><dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd></div>';
      }).join('');
    }

    var rb = CFG.relatedBrands;
    var box = $('#relatedBrands');
    if (box && rb && rb.show && rb.items && rb.items.length) {
      box.innerHTML = '<p class="rb-title">Related Brands</p><p class="rb-note">' + esc(rb.note) + '</p><ul>' +
        rb.items.map(function (b) {
          var name = b.url ? '<a href="' + esc(b.url) + '" target="_blank" rel="noopener">' + esc(b.name) + '</a>' : esc(b.name);
          return '<li><strong>' + name + '</strong><span>' + esc(b.desc) + '</span></li>';
        }).join('') + '</ul>';
    }
    var y = $('#year'); if (y) y.textContent = new Date().getFullYear();
  }

  /* ---------- 헤더 / 모바일 메뉴 ---------- */
  function initHeader() {
    var header = $('#siteHeader');
    var toggle = $('#navToggle');
    var nav = $('#gnb');
    function onScroll() { header.classList.toggle('is-scrolled', window.scrollY > 24); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    function close() {
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', '메뉴 열기');
    }
    toggle.addEventListener('click', function () {
      var open = !document.body.classList.contains('nav-open');
      document.body.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    });
    $all('a', nav).forEach(function (a) { a.addEventListener('click', close); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

    // 현재 섹션 메뉴 표시
    if ('IntersectionObserver' in window) {
      var links = {};
      $all('a', nav).forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting && links[en.target.id]) {
            $all('a', nav).forEach(function (a) { a.classList.remove('is-active'); });
            links[en.target.id].classList.add('is-active');
          }
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      ['company', 'business', 'projects', 'technology', 'contact'].forEach(function (id) {
        var el = document.getElementById(id); if (el) io.observe(el);
      });
    }
  }

  /* ---------- 프로젝트 ---------- */
  function coverHTML(p, cls) {
    var src = (p.photos && p.photos[0] && p.photos[0].src) || p.beforeAfter && p.beforeAfter.after;
    if (src) {
      return '<img class="' + cls + '" src="' + esc(src) + '" alt="' + esc(p.title) + ' 현장 사진" loading="lazy" decoding="async">';
    }
    return '<div class="' + cls + ' photo-pending" role="img" aria-label="현장 사진 준비중">' +
      '<span class="pending-mat">' + esc(p.material) + '</span>' +
      '<span class="pending-label">현장 사진 준비중</span></div>';
  }

  function renderProjects() {
    var grid = $('#projectGrid');
    if (!grid) return;
    grid.innerHTML = PROJECTS.map(function (p, i) {
      var no = String(i + 1).padStart(2, '0');
      return '<article class="project-card">' +
        '<div class="project-media">' + coverHTML(p, 'project-cover') + '</div>' +
        '<div class="project-body">' +
          '<p class="project-cat"><span>CASE ' + no + '</span>' + esc(p.category) + '</p>' +
          '<h3>' + esc(p.title) + '</h3>' +
          '<p class="project-summary">' + esc(p.summary) + '</p>' +
          (p.highlight ? '<p class="project-highlight">' + esc(p.highlight) + '</p>' : '') +
          '<dl class="project-meta">' +
            '<div><dt>소재</dt><dd>' + esc(p.material) + '</dd></div>' +
            '<div><dt>장소</dt><dd>' + esc(p.siteType) + '</dd></div>' +
            '<div><dt>규모</dt><dd>' + esc(p.scale) + '</dd></div>' +
          '</dl>' +
          '<button class="project-more" type="button" data-project="' + esc(p.id) + '">프로젝트 상세 보기 <span aria-hidden="true">→</span></button>' +
        '</div>' +
      '</article>';
    }).join('');

    $all('[data-project]', grid).forEach(function (b) {
      b.addEventListener('click', function () { openProject(b.getAttribute('data-project')); });
    });
  }

  var modal, lastFocus;
  function openProject(id) {
    var p = PROJECTS.filter(function (x) { return x.id === id; })[0];
    if (!p || !modal) return;
    lastFocus = document.activeElement;
    var ba = p.beforeAfter || {};
    var hasBA = ba.before && ba.after;
    var photos = p.photos || [];

    var html = '<header class="modal-head">' +
      '<p class="project-cat">' + esc(p.category) + '</p>' +
      '<h2 id="modalTitle">' + esc(p.title) + '</h2>' +
      '<p class="modal-summary">' + esc(p.summary) + '</p></header>';

    html += '<dl class="modal-meta">' +
      '<div><dt>시공 대상 소재</dt><dd>' + esc(p.material) + '</dd></div>' +
      '<div><dt>시공 장소 유형</dt><dd>' + esc(p.siteType) + '</dd></div>' +
      '<div><dt>규모</dt><dd>' + esc(p.scale) + '</dd></div>' +
      (p.client ? '<div><dt>고객사</dt><dd>' + esc(p.client) + '</dd></div>' : '') +
      '</dl>';

    if (hasBA) {
      html += '<figure class="ba" style="--pos:50%">' +
        '<img src="' + esc(ba.before) + '" alt="시공 전" class="ba-img">' +
        '<img src="' + esc(ba.after) + '" alt="시공 후" class="ba-img ba-after">' +
        '<span class="ba-tag ba-tag-l">BEFORE</span><span class="ba-tag ba-tag-r">AFTER</span>' +
        '<span class="ba-line" aria-hidden="true"></span>' +
        '<input class="ba-range" type="range" min="0" max="100" value="50" aria-label="시공 전후 비교">' +
        '<figcaption>슬라이더를 움직여 시공 전후를 비교해 보세요.</figcaption></figure>';
    }

    if (p.story && p.story.length) {
      html += '<div class="project-story">' +
        '<div class="project-story-intro">' +
          '<p class="project-story-kicker">PROJECT SUMMARY · ' + esc(p.scale) + '</p>' +
          '<p class="project-story-quote">' + esc(p.highlight || p.summary) + '</p>' +
        '</div>' +
        p.story.map(function (phase, i) {
          var no = String(i + 1).padStart(2, '0');
          return '<section class="project-story-phase">' +
            '<div class="project-story-heading"><span class="project-story-no">' + no + '</span><div>' +
              '<h3>' + esc(phase.title) + '</h3><p>' + esc(phase.description) + '</p>' +
            '</div></div>' +
            '<div class="project-story-gallery' + (p.naturalImages ? ' project-story-gallery-natural' : '') + '">' + (phase.photos || []).map(function (ph) {
              return '<figure><img src="' + esc(ph.src) + '" alt="' + esc(ph.caption || phase.title) + '" loading="lazy" decoding="async">' +
                (ph.caption ? '<figcaption>' + esc(ph.caption) + '</figcaption>' : '') + '</figure>';
            }).join('') + '</div>' +
          '</section>';
        }).join('') +
        '</div>';
    } else {
      html += '<div class="modal-body">' +
        '<section><h3>현장 과제</h3><p>' + esc(p.challenge) + '</p></section>' +
        '<section><h3>적용 솔루션</h3><p>' + esc(p.solution) + '</p></section>' +
        '<section><h3>시공 과정</h3><ol class="modal-steps">' +
          (p.process || []).map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ol></section>' +
        '<section><h3>완료 결과</h3><p>' + esc(p.result) + '</p></section>' +
        '</div>';

      if (photos.length) {
        html += '<div class="modal-gallery">' + photos.map(function (ph) {
          return '<figure><img src="' + esc(ph.src) + '" alt="' + esc(ph.caption || p.title) + '" loading="lazy" decoding="async">' +
            (ph.caption ? '<figcaption>' + esc(ph.caption) + '</figcaption>' : '') + '</figure>';
        }).join('') + '</div>';
      } else if (!hasBA) {
        html += '<p class="modal-photo-note">현장 사진은 정리 후 게시할 예정입니다. 시공 사진이 필요하시면 견적문의 시 요청해 주세요.</p>';
      }
    }

    html += '<div class="modal-cta"><p>비슷한 현장의 시공을 검토 중이신가요?</p>' +
      '<a class="btn btn-primary" href="#contact" data-close>이 사례로 견적 문의하기</a></div>';

    $('#modalContent').innerHTML = html;

    var range = $('.ba-range', modal);
    if (range) range.addEventListener('input', function () {
      range.parentNode.style.setProperty('--pos', range.value + '%');
    });
    $all('[data-close]', modal).forEach(function (a) {
      a.addEventListener('click', function () {
        var sel = $('#f-message');
        if (sel && !sel.value) sel.value = '[참고 사례: ' + p.title + ']\n';
        closeProject();
      });
    });

    if (typeof modal.showModal === 'function') modal.showModal(); else modal.setAttribute('open', '');
    document.body.classList.add('modal-open');
    modal.scrollTop = 0;
    $('#modalClose').focus();
  }
  function closeProject() {
    if (!modal) return;
    if (typeof modal.close === 'function' && modal.open) modal.close(); else modal.removeAttribute('open');
    document.body.classList.remove('modal-open');
    if (lastFocus) lastFocus.focus();
  }
  function initModal() {
    modal = $('#projectModal');
    if (!modal) return;
    $('#modalClose').addEventListener('click', closeProject);
    modal.addEventListener('click', function (e) { if (e.target === modal) closeProject(); });
    modal.addEventListener('close', function () { document.body.classList.remove('modal-open'); });
  }

  /* ---------- 견적문의 ---------- */
  function initForm() {
    var form = $('#quoteForm');
    if (!form) return;
    var F = CFG.form || {};
    var maxFiles = F.maxFiles || 5;
    var maxBytes = (F.maxTotalMB || 10) * 1024 * 1024;
    var SB = CFG.supabase || {};
    var sbClient = null;
    if (SB.url && SB.publishableKey && window.supabase && typeof window.supabase.createClient === 'function') {
      sbClient = window.supabase.createClient(SB.url, SB.publishableKey, {
        auth: { persistSession: false, autoRefreshToken: false }
      });
    }
    var mode = sbClient ? 'supabase' : F.endpoint ? 'endpoint' : (C.email ? 'mailto' : 'offline');
    var notice = $('#formModeNotice');
    var status = $('#formStatus');
    var fileInput = $('#f-files');
    var fileList = $('#fileList');
    var fileHelp = $('#fileHelp');
    var submitBtn = $('#submitBtn');
    var copyBtn = $('#copyBtn');

    var phoneText = (C.phone || '') + (C.mobile ? ' / ' + C.mobile : '');
    if (mode === 'supabase' || mode === 'endpoint') {
      notice.hidden = true;
    } else if (mode === 'mailto') {
      notice.innerHTML = '<strong>메일 작성 방식으로 접수됩니다.</strong> ‘견적 문의하기’를 누르면 입력하신 내용이 담긴 메일 창이 열립니다. 메일을 보내셔야 접수가 완료됩니다.';
      fileHelp.textContent = '이 방식에서는 사진이 자동으로 첨부되지 않습니다. 열린 메일 창에 사진을 직접 첨부해 주세요.';
      submitBtn.textContent = '메일로 문의 작성하기';
    } else {
      notice.innerHTML = '<strong>온라인 접수 준비 중입니다.</strong> 현재 이 양식은 서피스알파로 직접 전송되지 않습니다. 내용을 작성한 뒤 ‘문의 내용 복사’를 눌러 문자나 메일로 보내 주시거나, 전화(' + esc(phoneText) + ')로 문의해 주세요.';
      fileHelp.textContent = '사진은 문자 또는 메일로 보내실 때 함께 첨부해 주세요.';
      submitBtn.hidden = true;
      copyBtn.hidden = false;
      copyBtn.classList.remove('btn-outline'); copyBtn.classList.add('btn-primary');
    }

    fileInput.addEventListener('change', function () {
      var files = Array.prototype.slice.call(fileInput.files || []);
      var total = files.reduce(function (s, f) { return s + f.size; }, 0);
      fileList.innerHTML = files.map(function (f) {
        return '<li>' + esc(f.name) + ' <span>' + (f.size / 1024 / 1024).toFixed(1) + 'MB</span></li>';
      }).join('');
      var err = '';
      if (files.length > maxFiles) err = '사진은 최대 ' + maxFiles + '장까지 첨부할 수 있습니다.';
      else if (total > maxBytes) err = '첨부 사진의 총 용량이 ' + (F.maxTotalMB || 10) + 'MB를 넘습니다. 사진 수를 줄여 주세요.';
      fileInput.setCustomValidity(err);
      if (err) showStatus('error', err);
      else clearStatus();
    });

    function showStatus(type, msg) { status.className = 'form-status is-' + type; status.innerHTML = msg; }
    function clearStatus() { status.className = 'form-status'; status.textContent = ''; }

    function validate() {
      var firstBad = null;
      $all('input, select, textarea', form).forEach(function (el) {
        var field = el.closest('.field') || el.closest('.consent');
        var ok = el.checkValidity();
        if (field) field.classList.toggle('is-invalid', !ok);
        if (!ok && !firstBad) firstBad = el;
      });
      if (firstBad) {
        firstBad.focus();
        var msg = firstBad.type === 'checkbox' ? '개인정보 수집·이용에 동의해 주세요.'
          : firstBad.type === 'file' ? firstBad.validationMessage
          : firstBad.type === 'email' && firstBad.value ? '이메일 주소 형식을 확인해 주세요.'
          : '필수 항목(*)을 입력해 주세요.';
        showStatus('error', msg);
        return false;
      }
      return true;
    }

    function summaryText() {
      var lines = ['[SURFACE ALPHA 견적문의]'];
      $all('input:not([type=file]):not([type=checkbox]):not(#f-website), select, textarea', form).forEach(function (el) {
        if (el.value) lines.push(el.name + ': ' + el.value);
      });
      var n = (fileInput.files || []).length;
      if (n) lines.push('현장사진: ' + n + '장 (별도 첨부)');
      return lines.join('\n');
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validate()) return;

      if (mode === 'supabase') {
        // 숨김 필드가 채워졌다면 자동 스팸으로 보고 저장하지 않음
        if ($('#f-website').value) { showStatus('success', '<strong>문의가 접수되었습니다.</strong>'); form.reset(); return; }
        submitBtn.disabled = true;
        submitBtn.textContent = '전송 중…';
        showStatus('info', '문의를 전송하고 있습니다. 사진이 있으면 업로드에 시간이 조금 걸릴 수 있습니다.');
        submitToSupabase()
          .then(function () {
            form.reset(); fileList.innerHTML = '';
            showStatus('success', '<strong>문의가 접수되었습니다.</strong> 영업일 기준으로 확인 후 연락드리겠습니다.');
          })
          .catch(function (err) {
            if (window.console) console.error('[견적문의 전송 실패]', err);
            showStatus('error', '전송하지 못했습니다. 잠시 후 다시 시도하시거나, 전화(' + esc(phoneText) + ')로 문의해 주세요.');
          })
          .then(function () { submitBtn.disabled = false; submitBtn.textContent = '견적 문의하기'; });
      } else if (mode === 'endpoint') {
        submitBtn.disabled = true;
        submitBtn.textContent = '전송 중…';
        showStatus('info', '문의를 전송하고 있습니다.');
        fetch(F.endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
          .then(function (res) {
            if (!res.ok) throw new Error('HTTP ' + res.status);
            form.reset(); fileList.innerHTML = '';
            showStatus('success', '<strong>문의가 접수되었습니다.</strong> 영업일 기준으로 확인 후 연락드리겠습니다.');
          })
          .catch(function () {
            showStatus('error', '전송하지 못했습니다. 네트워크 상태를 확인하고 다시 시도하시거나, 전화(' + esc(phoneText) + ')로 문의해 주세요.');
          })
          .then(function () { submitBtn.disabled = false; submitBtn.textContent = '견적 문의하기'; });
      } else if (mode === 'mailto') {
        var subject = '[견적문의] ' + $('#f-company').value + ' / ' + $('#f-material').value;
        window.location.href = 'mailto:' + C.email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(summaryText());
        showStatus('info', '메일 창이 열렸다면 사진을 첨부한 뒤 <strong>메일을 보내야 접수가 완료</strong>됩니다. 메일 창이 열리지 않으면 ' + esc(C.email) + ' 으로 직접 보내 주시거나 전화로 문의해 주세요.');
      }
    });

    function uid() {
      if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
      return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10);
    }
    function safeName(name) {
      var ext = (String(name).match(/\.([a-z0-9]{1,5})$/i) || [, 'jpg'])[1].toLowerCase();
      return ext;
    }

    /* 1) 사진을 Storage 에 업로드 → 2) 문의 내용을 테이블에 저장
       (공개 키로는 '저장'만 가능하고 '조회'는 불가능하도록 schema.sql 에서 권한을 설정합니다) */
    function submitToSupabase() {
      var folder = 'inquiries/' + new Date().toISOString().slice(0, 7) + '/' + uid();
      var files = Array.prototype.slice.call(fileInput.files || []);
      var uploads = files.map(function (file, i) {
        var path = folder + '/' + String(i + 1).padStart(2, '0') + '.' + safeName(file.name);
        return sbClient.storage.from(SB.bucket).upload(path, file, {
          contentType: file.type || 'image/jpeg', upsert: false
        }).then(function (res) {
          if (res.error) throw res.error;
          return path;
        });
      });
      return Promise.all(uploads).then(function (paths) {
        var row = {
          company: $('#f-company').value.trim(),
          contact_name: $('#f-name').value.trim(),
          phone: $('#f-phone').value.trim(),
          email: $('#f-email').value.trim(),
          material: $('#f-material').value,
          location: $('#f-location').value.trim() || null,
          scale: $('#f-scale').value.trim() || null,
          message: $('#f-message').value.trim(),
          photo_paths: paths,
          consent: $('#f-consent').checked,
          page_url: location.protocol === 'file:' ? 'local-file' : location.href.slice(0, 300),
          user_agent: navigator.userAgent.slice(0, 300)
        };
        return sbClient.from(SB.table).insert(row).then(function (res) {
          if (res.error) throw res.error;
        });
      });
    }

    copyBtn.addEventListener('click', function () {
      if (!validate()) return;
      var text = summaryText();
      function done() {
        showStatus('info', '문의 내용이 복사되었습니다. <strong>아직 접수된 것은 아닙니다.</strong> 문자(' + esc(C.mobile || '') + ')나 메일에 붙여넣어 보내 주시거나 전화로 문의해 주세요.');
      }
      function fallback() {
        var ta = document.createElement('textarea');
        ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); done(); }
        catch (err) { showStatus('error', '자동 복사가 되지 않았습니다. 입력한 내용을 직접 복사해 보내 주세요.'); }
        document.body.removeChild(ta);
      }
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, fallback);
      else fallback();
    });

    $all('input, select, textarea', form).forEach(function (el) {
      el.addEventListener('input', function () {
        var field = el.closest('.field') || el.closest('.consent');
        if (field && el.checkValidity()) field.classList.remove('is-invalid');
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyCompany();
    initHeader();
    renderProjects();
    initModal();
    initForm();
    var m = /^#(project-\d+)$/.exec(location.hash);
    if (m) openProject(m[1]);
  });
})();
