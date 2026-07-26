/*
 * 应用维护约定
 * 1. 分类、项目名称和官方源码入口由 data/taxonomy.js 提供。
 * 2. 卡片文案与项目档案分别由 data/card-descriptions.js、data/project-profiles.js 提供。
 * 3. UI：从 projectIndex 开始，负责导航、卡片和详情页渲染。
 * 发布前请验证：首页、搜索、分类切换、项目详情和外链。
 */
const {sections,cardDescriptions,projectProfiles}=window.OpenNumericalData;
const projectDetails=window.OpenNumericalData.projectDetails||{};
if(!sections||!cardDescriptions||!projectProfiles)throw new Error('项目数据未加载。');
const sidebarCategoryCount=document.querySelector('#sidebar-category-count');
if(sidebarCategoryCount)sidebarCategoryCount.textContent=sections.length+' 个一级方向';
async function loadCardDescriptions(){return cardDescriptions}
const detailContent={
  intro:[
    "采用图文并茂的形式，最上面是一个图片，用最丰富的方式介绍这个开源程序的特点。",
    "图片下面是关于这个开源代码的文字介绍，主要语言/平台、项目解决什么、面向谁、核心特色是什么、历史沿革、开发者和特色、当前成熟度如何。"
  ],
  source:[
    "源代码地址是最重要的，要突出显示，要直接给出，让读者以最快、最简单的方式获取到代码。",
    "在源代码地址的基础上，给出与当前开源项目相关的社区网站，只要是有关的都给出。"
  ],
  scope:[
    "代码能够解决什么问题，代码包含哪些功能，适用于什么结构，能够解决结构的什么问题等等，特别是现在的研究者主要用这个开源程序解决什么问题。",
    "这部分只介绍这个代码能解决什么问题，不详细介绍怎么解决的。"
  ],
  theory:[
    "这部分要非常详细的介绍这个开源代码中的理论构成，方便读者判断有没有自己要学习的东西。",
    "要详细介绍一整个计算流程中，所有计算步骤都包含哪些理论功能。"
  ],
  references:"罗列有关当前开源程序的著名论文，涵盖该软件的核心理论基础、主要算法实现以及应用验证等方面的学术研究成果。每篇论文都应提供完整的引用格式、作者信息、摘要要点，并标注其在项目中的具体作用或贡献。对于重要的基础理论文献，还需简要介绍其对该程序理论架构的影响和意义。"
};
function profileFor(project,item){const known=projectProfiles[project.name];if(known)return {...known,verified:true};return {summary:'面向“'+item.title+'”场景的开源数值仿真与科学计算项目。',language:'多语言',platform:'跨平台',method:item.title,verified:false}}
function cardSummary(project,profile,item){const capability=profile.method||item.title;return cardDescriptions[project.name]||profile.summary||project.name+' 是面向'+capability+'的开源项目，可用于'+item.title+'相关的建模、数值计算与结果分析。'}
const nav=document.querySelector('#nav'),main=document.querySelector('#main'),projectIndex=document.querySelector('#project-index');
let active=0,query="",currentItem=0,expandedIndex=null;
let filters={language:'',platform:'',method:'',detail:'all'};
let isDetailView=false;
const esc=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
const slug=s=>encodeURIComponent(s);
const allProjects=(()=>{const map=new Map();sections.forEach(section=>section.items.forEach(item=>item.projects.forEach(project=>{const key=project.name.toLowerCase();if(!map.has(key))map.set(key,{...project,placements:[]});map.get(key).placements.push({sectionId:section.id,sectionTitle:section.title,itemTitle:item.title,description:"该方向汇集可获取源码的相关数值仿真项目。"})})));return [...map.values()]})();
const indexAlphabet=['#',...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const indexedProjects=[...allProjects].sort((a,b)=>a.name.localeCompare(b.name,'en',{sensitivity:'base'}));
let projectIndexQuery='',indexDragging=false,indexedProjectTarget=null,lastDraggedLetter='';
const projectInitial=project=>/^[A-Za-z]/.test(project.name)?project.name.charAt(0).toUpperCase():'#';
function indexedProjectLocation(project){const placement=project.placements[0];if(!placement)return null;const sectionIndex=sections.findIndex(section=>section.id===placement.sectionId);if(sectionIndex<0)return null;const itemIndex=sections[sectionIndex].items.findIndex(item=>item.title===placement.itemTitle);return itemIndex<0?null:{sectionIndex,itemIndex}}
function markIndexedProject(project){const index=indexedProjects.indexOf(project);projectIndex.querySelectorAll('.index-item').forEach(item=>item.classList.toggle('active',Number(item.dataset.projectIndex)===index))}
function focusIndexedProject(project){const location=indexedProjectLocation(project);if(!location)return;indexedProjectTarget={name:project.name,sectionId:sections[location.sectionIndex].id,itemTitle:sections[location.sectionIndex].items[location.itemIndex].title};active=location.sectionIndex;currentItem=location.itemIndex;expandedIndex=active;query='';filters={language:'',platform:'',method:'',detail:'all'};history.replaceState(null,'','#category='+active);drawNav();renderCategory();markIndexedProject(project);requestAnimationFrame(()=>document.querySelector('.project-card.is-index-target')?.scrollIntoView({behavior:'smooth',block:'center',inline:'nearest'}))}
function openIndexedProjectDetail(project){location.hash='#project='+slug(project.name)}
function setIndexLetter(letter){const letterIndex=Math.max(0,indexAlphabet.indexOf(letter)),rail=projectIndex.querySelector('.index-letter-list');if(rail)rail.style.setProperty('--active-letter-top',(letterIndex/indexAlphabet.length)*100+'%');projectIndex.querySelectorAll('.index-letter').forEach(button=>button.classList.toggle('active',button.dataset.letter===letter))}
function jumpIndexToLetter(letter,behavior='auto'){const list=projectIndex.querySelector('.index-list'),group=projectIndex.querySelector('.index-group[data-letter="'+letter+'"]');if(!list||!group)return;setIndexLetter(letter);list.scrollTo({top:group.offsetTop,behavior})}
function syncIndexLetterFromScroll(){if(indexDragging)return;const list=projectIndex.querySelector('.index-list');if(!list)return;const groups=[...projectIndex.querySelectorAll('.index-group')];let current=groups[0];groups.forEach(group=>{if(group.offsetTop<=list.scrollTop+8)current=group});if(current)setIndexLetter(current.dataset.letter)}
function letterAtPointer(event,letterList,available){const rect=letterList.getBoundingClientRect(),ratio=Math.max(0,Math.min(.999999,(event.clientY-rect.top)/rect.height)),index=Math.floor(ratio*indexAlphabet.length);if(available.has(indexAlphabet[index]))return indexAlphabet[index];for(let distance=1;distance<indexAlphabet.length;distance++){const before=index-distance,after=index+distance;if(before>=0&&available.has(indexAlphabet[before]))return indexAlphabet[before];if(after<indexAlphabet.length&&available.has(indexAlphabet[after]))return indexAlphabet[after]}return null}
function renderProjectIndex(){
  const normalized=projectIndexQuery.trim().toLowerCase();
  const projects=indexedProjects.filter(project=>!normalized||project.name.toLowerCase().includes(normalized));
  const groups=indexAlphabet.map(letter=>({letter,projects:projects.filter(project=>projectInitial(project)===letter)})).filter(group=>group.projects.length);
  const available=new Set(groups.map(group=>group.letter));
  projectIndex.innerHTML='<div class="index-title"><strong>全部项目</strong><span>'+projects.length+' / '+indexedProjects.length+'</span></div>'+
    '<input class="index-search" type="search" value="'+esc(projectIndexQuery)+'" placeholder="搜索全部开源项目…" aria-label="搜索全部开源项目">'+
    '<div class="index-list">'+(groups.length?groups.map(group=>'<section class="index-group" data-letter="'+group.letter+'"><h3>'+group.letter+'</h3>'+group.projects.map(project=>'<button class="index-item" type="button" data-project-index="'+indexedProjects.indexOf(project)+'" title="单击直接跳转详情页" aria-label="'+esc(project.name)+'，单击直接跳转详情页"><span class="index-item-label">'+esc(project.name)+'</span><span class="index-jump-hint" role="tooltip">单击直接跳转详情页</span></button>').join('')+'</section>').join(''):'<div class="index-empty">没有匹配的开源项目</div>')+'</div>'+
    '<div class="index-rail" aria-label="项目首字母索引"><div class="index-letter-list">'+indexAlphabet.map(letter=>'<button class="index-letter" type="button" data-letter="'+letter+'" '+(available.has(letter)?'':'disabled')+'>'+letter+'</button>').join('')+'<span class="index-thumb"></span></div></div>';
  const input=projectIndex.querySelector('.index-search');
  input.addEventListener('input',event=>{projectIndexQuery=event.target.value;renderProjectIndex();const nextInput=projectIndex.querySelector('.index-search');nextInput.focus();nextInput.setSelectionRange(projectIndexQuery.length,projectIndexQuery.length)});
  projectIndex.querySelectorAll('.index-item').forEach(button=>{
    const project=indexedProjects[Number(button.dataset.projectIndex)];
    button.addEventListener('click',()=>openIndexedProjectDetail(project));
  });
  projectIndex.querySelectorAll('.index-letter:not(:disabled)').forEach(button=>{button.addEventListener('mouseenter',()=>{if(!indexDragging)jumpIndexToLetter(button.dataset.letter)});button.addEventListener('click',()=>jumpIndexToLetter(button.dataset.letter,'smooth'))});
  const list=projectIndex.querySelector('.index-list'),rail=projectIndex.querySelector('.index-rail'),letterList=projectIndex.querySelector('.index-letter-list');
  list.addEventListener('scroll',syncIndexLetterFromScroll,{passive:true});
  const dragToPointer=event=>{const letter=letterAtPointer(event,letterList,available);if(!letter||letter===lastDraggedLetter)return;lastDraggedLetter=letter;jumpIndexToLetter(letter)};
  const finishDrag=event=>{if(event?.pointerId!==undefined&&rail.hasPointerCapture(event.pointerId))rail.releasePointerCapture(event.pointerId);indexDragging=false;lastDraggedLetter='';rail.classList.remove('is-dragging')};
  rail.addEventListener('pointerdown',event=>{indexDragging=true;lastDraggedLetter='';rail.classList.add('is-dragging');rail.setPointerCapture(event.pointerId);dragToPointer(event)});
  rail.addEventListener('pointermove',event=>{if(indexDragging)dragToPointer(event)});
  rail.addEventListener('pointerup',finishDrag);rail.addEventListener('pointercancel',finishDrag);
  projectIndex.addEventListener('mousemove',event=>{const rect=projectIndex.getBoundingClientRect();projectIndex.classList.toggle('rail-revealed',event.clientX>=rect.right-34)});
  projectIndex.addEventListener('mouseleave',()=>{if(!indexDragging)projectIndex.classList.remove('rail-revealed')});
  if(groups.length)setIndexLetter(groups[0].letter);
}
const accent=id=>["#2864dd","#1e9d89","#8a5ae0","#e47628","#c84672","#2689a6","#6071d8","#22965b","#bc6f31"][(id-1)%9];
function projectCard(project,item,section){const profile=profileFor(project,item),summary=cardSummary(project,profile,item),isIndexTarget=indexedProjectTarget&&indexedProjectTarget.name===project.name&&indexedProjectTarget.sectionId===section.id&&indexedProjectTarget.itemTitle===item.title,tags=[profile.language,profile.platform,profile.method];return '<article class="project-card '+(isIndexTarget?'is-index-target':'')+'" style="--card-accent:'+accent(section.id)+'"><div class="card-top"><h3 class="project-title"><a href="#project='+slug(project.name)+'">'+esc(project.name)+'</a></h3></div><div class="tags">'+tags.map(tag=>'<span class="tag" title="'+esc(tag)+'">'+esc(tag)+'</span>').join('')+'</div><p class="card-summary">'+esc(summary)+'</p><div class="card-actions"><a class="detail-link" href="#project='+slug(project.name)+'">查看项目详情</a><a class="card-source" href="'+esc(project.url)+'" target="_blank" rel="noopener noreferrer" title="直达项目源代码">直达源代码</a></div></article>'}
function tagGap(tags){return Number.parseFloat(getComputedStyle(tags).columnGap)||0}
function tagOuterWidth(tag){const style=getComputedStyle(tag);return Math.ceil(tag.scrollWidth+(Number.parseFloat(style.borderLeftWidth)||0)+(Number.parseFloat(style.borderRightWidth)||0))}
function clearTagFlyout(tags){tags.querySelector('.tag-flyout')?.remove();tags.classList.remove('has-flyout')}
function showTagFlyout(tags,tag){const flyout=document.createElement('span');flyout.className='tag-flyout';flyout.textContent=tag.textContent;tags.append(flyout);tags.classList.add('has-flyout')}
function expandProjectTag(tag){if(!tag.classList.contains('is-truncated'))return false;const tags=tag.parentElement,tagList=[...tags.querySelectorAll('.tag')],peers=tagList.filter(current=>current!==tag),rowWidth=tags.clientWidth;if(rowWidth<=0)return false;clearTagFlyout(tags);tags.classList.remove('has-collapsed-peers');tagList.forEach(current=>current.classList.remove('is-collapsed'));const preferredPeerWidth=Math.max(32,Math.min(44,Math.floor(rowWidth*.18))),normalWidth=Math.max(0,rowWidth-tagGap(tags)*(tagList.length-1)-preferredPeerWidth*peers.length);tagList.forEach(current=>{if(current===tag){current.style.flex='0 0 '+normalWidth+'px';current.style.maxWidth=normalWidth+'px';current.classList.add('is-expanded');current.removeAttribute('title')}else{current.style.flex='0 0 '+preferredPeerWidth+'px';current.style.maxWidth=preferredPeerWidth+'px';current.classList.remove('is-expanded')}});const stillTruncated=tag.scrollWidth>tag.clientWidth+1;if(stillTruncated){tags.classList.add('has-collapsed-peers');peers.forEach(current=>{current.classList.add('is-collapsed');current.style.flex='0 0 0px';current.style.maxWidth='0px'});const fullWidth=Math.min(tagOuterWidth(tag),rowWidth);tag.style.flex='0 0 '+fullWidth+'px';tag.style.maxWidth=fullWidth+'px';if(tag.scrollWidth>tag.clientWidth+1)showTagFlyout(tags,tag)}tags.activeTag=tag;return true}
function tagFromPointerEvent(tags,event){const target=event.target instanceof Element?event.target.closest('.tag'):null;return target&&target.parentElement===tags?target:null}
function arrangeTagContainer(tags){const tagList=[...tags.querySelectorAll('.tag')];if(!tagList.length)return;tags.activeTag=null;clearTagFlyout(tags);tags.classList.remove('has-collapsed-peers');tagList.forEach(tag=>{tag.classList.remove('is-truncated','is-expanded','is-collapsed');tag.style.flex='0 1 auto';tag.style.maxWidth='100%';tag.removeAttribute('title')});if(!tags.dataset.tagBound){tags.dataset.tagBound='true';tags.addEventListener('pointerover',event=>{if(tags.activeTag)return;const tag=tagFromPointerEvent(tags,event);if(tag?.classList.contains('is-truncated'))expandProjectTag(tag)});tags.addEventListener('pointermove',event=>{const tag=tagFromPointerEvent(tags,event);if(!tag||tag===tags.activeTag)return;if(tag.classList.contains('is-truncated'))expandProjectTag(tag);else if(tags.activeTag)arrangeTagContainer(tags)});tags.addEventListener('pointerleave',()=>arrangeTagContainer(tags))}const available=Math.floor(tags.clientWidth-tagGap(tags)*(tagList.length-1));if(available<=0)return;tagList.forEach(tag=>{const truncated=tag.scrollWidth>tag.clientWidth+1;tag.classList.toggle('is-truncated',truncated);if(truncated)tag.title=tag.textContent})}
function arrangeProjectTags(scope=main){scope.querySelectorAll('.project-card .tags').forEach(arrangeTagContainer)}
let tagLayoutFrame=0;function scheduleProjectTagLayout(){cancelAnimationFrame(tagLayoutFrame);tagLayoutFrame=requestAnimationFrame(()=>{tagLayoutFrame=0;arrangeProjectTags(main)})}window.addEventListener('resize',scheduleProjectTagLayout)
function renderDetail(name){
  const project=allProjects.find(p=>p.name.toLowerCase()===name.toLowerCase());
  if(!project){renderCategory();return}
  isDetailView=true;
  const placement=project.placements[0];
  const section=sections.find(s=>s.id===placement.sectionId);
  const item=section&&section.items.find(x=>x.title===placement.itemTitle);
  const profile=profileFor(project,item||{title:placement.itemTitle});
  const facts=[['主要语言',profile.language],['运行平台',profile.platform],['方法 / 方向',profile.method]];
  const categories=project.placements.map(x=>'<li><strong>'+esc(x.sectionTitle)+' · '+esc(x.itemTitle)+'</strong><br>'+esc(x.description)+'</li>').join('');
  const detailRecord=projectDetails[project.name];
  const source=detailRecord?.details?.sourceEcology;
  const hasVerifiedSource=source?.status==='verified';
  const verifiedLinks=hasVerifiedSource?source.links.map(link=>'<a class="detail-source-link" href="'+esc(link.url)+'" target="_blank" rel="noopener noreferrer"><small>'+esc(link.label)+'</small><span>'+esc(link.url)+'</span></a>').join(''):'';
  const sourceFacts=hasVerifiedSource?[['许可证',source.license],['安装与依赖',source.installation],['社区入口',source.community],['生态与扩展',source.ecosystem],['维护状态',source.maintenance]].filter(([,value])=>value).map(([label,value])=>'<li><strong>'+esc(label)+'：</strong>'+esc(value)+'</li>').join(''):'';
  const isPilot=Boolean(detailRecord);
  const introCopy=isPilot?'该项目已完成“源码与社区”资料迁移；项目概览、适用范围、理论架构与论文将按核验状态逐区块补充。':detailContent.intro[0];
  const introSecond=isPilot?'本页只展示已建立来源记录的项目专属信息；未完成核验的字段不会以推测内容替代。':detailContent.intro[1];
  const sourceCopy=hasVerifiedSource?source.summary:detailContent.source[0];
  const scopeCopy=isPilot?'项目所属技术路线已在下方列出；项目专属应用范围仍待依据官方案例、教程和论文补充。':detailContent.scope[0];
  const theoryCopy=isPilot?'理论架构资料尚待检索与核验；完成前不展示通用示例来替代该项目的真实能力边界。':detailContent.theory[0];
  const referencesCopy=isPilot?'参考论文资料尚待检索与核验；后续将按完整引用、摘要要点与项目关系录入。':detailContent.references;
  const migrationNote=hasVerifiedSource?(detailRecord.migration?.reviewStatus==='needs_editor_review'?'本页资料已根据现有核验记录自动迁入，发布前仍建议编辑复核；最近资料日期为 '+esc(detailRecord.updatedAt)+'。':'已核验的源码生态资料更新于 '+esc(detailRecord.updatedAt)+'。'):'当前页面仅提供源码入口；项目专属资料仍待迁移与核验。';
  const modal=!isPilot?'<div class="detail-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="detail-modal-title"><div class="detail-modal"><button class="detail-modal-close" type="button" aria-label="关闭提示窗口">×</button><p class="detail-modal-kicker">DETAIL PAGE NOTICE</p><h2 id="detail-modal-title">该项目详情页仍在完善中</h2><p>当前页面已完成基本页面架构，并使用模板内容进行了占位填充。项目专属的介绍、社区信息、理论细节与参考文献将持续补充。</p><div class="detail-modal-note">关闭此提示后，可正常使用详情页中的所有功能。</div></div></div>':'';
  main.innerHTML='<section class="detail-scroll" aria-label="项目详情"><article class="project-detail">'+
    '<header class="project-detail-hero"><p class="detail-kicker">OPEN NUMERICAL SIMULATION · PROJECT PROFILE</p><h1>'+esc(project.name)+'</h1><p class="detail-hero-copy">'+esc(profile.summary)+'</p><div class="detail-facts">'+facts.map(f=>'<span><strong>'+esc(f[0])+'：</strong>'+esc(f[1])+'</span>').join('')+'</div><div class="detail-actions"><a class="button" href="'+esc(project.url)+'" target="_blank" rel="noopener noreferrer">访问源代码 ↗</a><button class="button ghost" type="button" data-detail-target="detail-source">查看源码与社区</button></div></header>'+
    '<nav class="detail-anchor-nav" aria-label="详情目录"><button type="button" data-detail-target="detail-intro">01 项目简介</button><button type="button" data-detail-target="detail-source">02 源代码以及社区文化</button><button type="button" data-detail-target="detail-scope">03 适用范围</button><button type="button" data-detail-target="detail-theory">04 理论架构</button><button type="button" data-detail-target="detail-references">05 参考论文</button></nav>'+
    '<div class="detail-content">'+
      '<section class="detail-section" id="detail-intro"><div class="detail-section-no">01</div><div><h2>项目简介</h2><p>'+esc(introCopy)+'</p><p>'+esc(introSecond)+'</p><div class="detail-meta-grid">'+facts.map(f=>'<div><small>'+esc(f[0])+'</small><strong>'+esc(f[1])+'</strong></div>').join('')+'</div></div></section>'+
      '<section class="detail-section" id="detail-source"><div class="detail-section-no">02</div><div><h2>源代码以及社区文化</h2><p>'+esc(sourceCopy)+'</p>'+(hasVerifiedSource?verifiedLinks:'<a class="detail-source-link" href="'+esc(project.url)+'" target="_blank" rel="noopener noreferrer"><small>SOURCE CODE</small><span>'+esc(project.url)+'</span></a>')+(sourceFacts?'<ul class="detail-list">'+sourceFacts+'</ul>':'')+'<div class="detail-highlight">'+migrationNote+'</div></div></section>'+
      '<section class="detail-section" id="detail-scope"><div class="detail-section-no">03</div><div><h2>适用范围</h2><p>'+esc(scopeCopy)+'</p><ul class="detail-list">'+categories+'</ul></div></section>'+
      '<section class="detail-section" id="detail-theory"><div class="detail-section-no">04</div><div><h2>理论架构</h2><p>'+esc(theoryCopy)+'</p></div></section>'+
      '<section class="detail-section" id="detail-references"><div class="detail-section-no">05</div><div><h2>参考论文</h2><p>'+esc(referencesCopy)+'</p></div></section>'+
    '</div><p class="detail-footer">'+(isPilot?'本项目已接入结构化详情资料；其余区块将按来源与核验状态持续更新。':'详情栏目依据《二级页面-项目详情》文档生成；当前为统一的内容模板演示。')+'</p></article>'+modal+'</section>';
  main.querySelectorAll('[data-detail-target]').forEach(button=>button.addEventListener('click',()=>{
    main.querySelector('#'+button.dataset.detailTarget)?.scrollIntoView({behavior:'smooth',block:'start'});
  }));
  main.querySelector('.detail-modal-close')?.addEventListener('click',()=>{
    main.querySelector('.detail-modal-backdrop').remove();
  });
}
function setExpanded(index){expandedIndex=index;nav.querySelectorAll('.tree-node').forEach((node,i)=>{node.classList.toggle('expanded',i===index);node.classList.toggle('active-parent',i===active);node.classList.toggle('is-muted',i!==active)})}
function syncTree(){setExpanded(active)}
function activateCategory(index){if(active===index&&!isDetailView){setExpanded(index);return}active=index;currentItem=0;query='';filters={language:'',platform:'',method:'',detail:'all'};expandedIndex=index;history.replaceState(null,'','#category='+active);drawNav();renderCategory()}
function drawNav(){nav.innerHTML=sections.map((section,sectionIndex)=>'<section class="tree-node" data-section="'+sectionIndex+'"><button class="tree-primary" type="button" aria-current="'+(sectionIndex===active?'page':'false')+'"><span>'+esc(section.title)+'</span></button></section>').join('');nav.querySelectorAll('.tree-node').forEach((node,index)=>{const button=node.querySelector('.tree-primary');node.addEventListener('mouseenter',()=>{if(!isDetailView)activateCategory(index)});button.addEventListener('focus',()=>setExpanded(index));button.addEventListener('click',()=>activateCategory(index))});setExpanded(active)}
function route(){let hash='';try{hash=decodeURIComponent(location.hash.slice(1))}catch{}if(hash.startsWith('project=')){renderDetail(hash.slice(8));return}if(hash.startsWith('category=')){const index=Number(hash.slice(9));if(Number.isInteger(index)&&sections[index]){active=index;currentItem=0}}drawNav();renderCategory()}
/* Center panel: the project list is now the sole scrollable content.  Keep the
   selection state, but do not render a separate fixed secondary-direction panel. */
function updateContext(){
  document.querySelectorAll('.group').forEach(group=>{
    group.classList.toggle('is-current',Number(group.dataset.item)===currentItem);
  });
}
function renderCategory(){
  isDetailView=false;
  const section=sections[active];
  if(!section.items[currentItem])currentItem=0;
  const categoryProfiles=section.items.flatMap(item=>item.projects.map(project=>profileFor(project,item)));
  const optionValues=key=>[...new Set(categoryProfiles.map(profile=>profile[key]).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'zh-CN'));
  const optionMarkup=(values,current,label)=>'<option value="">'+label+'</option>'+values.map(value=>'<option value="'+esc(value)+'" '+(current===value?'selected':'')+'>'+esc(value)+'</option>').join('');
  const normalized=query.trim().toLowerCase();
  const matches=(project,item)=>{
    const profile=profileFor(project,item);
    const detailState=projectDetails[project.name]?.details?.sourceEcology?.status==='verified'?'verified':'pending';
    const searchable=[project.name,item.title,profile.summary,profile.language,profile.platform,profile.method].join(' ').toLowerCase();
    return (!normalized||searchable.includes(normalized))&&(!filters.language||profile.language===filters.language)&&(!filters.platform||profile.platform===filters.platform)&&(!filters.method||profile.method===filters.method)&&(filters.detail==='all'||filters.detail===detailState);
  };
  const items=section.items.map((item,itemIndex)=>({...item,itemIndex,projects:item.projects.filter(project=>matches(project,item))})).filter(item=>item.projects.length);
  const visibleCount=items.reduce((count,item)=>count+item.projects.length,0);
  const filterBar='<section class="category-filters" aria-label="项目筛选"><div class="category-filter-head"><strong>在左边栏对应的项目分类下筛选</strong><span>'+visibleCount+' / '+section.items.reduce((count,item)=>count+item.projects.length,0)+' 个项目</span></div><div class="category-filter-controls"><input class="category-search" type="search" value="'+esc(query)+'" placeholder="搜索项目、方法、语言或平台…" aria-label="搜索当前分类项目"><select data-filter="language" aria-label="按主要语言筛选">'+optionMarkup(optionValues('language'),filters.language,'全部语言')+'</select><select data-filter="platform" aria-label="按运行平台筛选">'+optionMarkup(optionValues('platform'),filters.platform,'全部平台')+'</select><select data-filter="method" aria-label="按方法筛选">'+optionMarkup(optionValues('method'),filters.method,'全部方法')+'</select><select data-filter="detail" aria-label="按详情资料状态筛选"><option value="all" '+(filters.detail==='all'?'selected':'')+'>全部资料状态</option><option value="verified" '+(filters.detail==='verified'?'selected':'')+'>已迁入详情资料</option><option value="pending" '+(filters.detail==='pending'?'selected':'')+'>待迁入详情资料</option></select><button class="category-filter-clear" type="button">清除筛选</button></div></section>';
  main.innerHTML=filterBar+'<section class="project-scroll" aria-label="项目列表">'+(items.length?'<section class="content">'+items.map(item=>
    '<section class="group '+(item.itemIndex===currentItem?'is-current':'')+'" id="group-'+active+'-'+item.itemIndex+'" data-item="'+item.itemIndex+'">'+
      '<div class="group-head"><div class="group-marker"><div><h2>'+esc(item.title)+'</h2></div></div><span class="group-count">'+item.projects.length+' 个项目</span></div>'+
      '<div class="project-grid">'+item.projects.map(project=>projectCard(project,item,section)).join('')+'</div>'+
    '</section>'
  ).join('')+'</section>':'<div class="empty">没有找到符合当前筛选条件的项目。</div>')+'</section>';
  const search=main.querySelector('.category-search');
  search.addEventListener('input',event=>{query=event.target.value;renderCategory();const next=main.querySelector('.category-search');next.focus();next.setSelectionRange(query.length,query.length)});
  main.querySelectorAll('[data-filter]').forEach(control=>control.addEventListener('change',event=>{filters[event.target.dataset.filter]=event.target.value;renderCategory()}));
  main.querySelector('.category-filter-clear').addEventListener('click',()=>{query='';filters={language:'',platform:'',method:'',detail:'all'};renderCategory()});
  document.querySelectorAll('.group').forEach(group=>group.addEventListener('mouseenter',()=>{
    currentItem=Number(group.dataset.item);
    syncTree();
    updateContext();
  }));
  updateContext();
  scheduleProjectTagLayout();
}
window.addEventListener("hashchange",route);loadCardDescriptions().then(()=>{route();renderProjectIndex()}).catch(()=>{route();renderProjectIndex()});
