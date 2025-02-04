// 图片数据（建议通过脚本自动生成）
const images = ["I don't care 我们不在乎.jpg", "一人一票选举.jpeg", "一种英雄气概 一种正直感.jpeg", "万能模板.jpg", "不值得同情的.jpeg", "不用害怕对不对.jpeg", "不能随便谈论宗教问题.webp", "与其说这些笑话可笑 还不如说这些笑话可悲.webp", "专业水准之低 令人汗颜.jpg", "中国是天下最牛的 最富裕的.webp", "中国模式特点是这样的.jpeg", "中国速度和中国标准又震撼了世界.png", "人家不的不佩服他.jpeg", "人家外国人一玩就知道了.jpg", "什么叫搬起石头砸自己的脚.webp", "什么问题都不回避.webp", "他什么都敢说.jpeg", "他们会感到很震撼.jpeg", "他们呼风唤雨的时代已经终结.jpg", "他就是欺软怕硬.jpeg", "他很自信 尽管没有几个人相信他.jpeg", "他要考虑面子 知道吗.jpeg", "他要考虑面子 知道吗.webp", "他里边还有一点心虚.webp", "令人有点回味无穷.jpeg", "任何问题都可以提.webp", "任意滥用成了常态.jpeg", "会带着同情的眼光看他.jpg", "但我这里无意批判这种理论.jpg", "但是我想我们用的手段可以太多了.jpg", "但这是碰都不能碰的话题.jpg", "你不了解中国而妄下论断.jpeg", "你不可能叫醒一个不想醒的人.webp", "你们要自信.png", "你根本吃不消.jpeg", "你的价值观是有不少问题的.jpeg", "使他永远地陷于不义之地.jpg", "做个不痛不痒的发言就过去了.jpg", "做事情非常反复无常.jpeg", "只要你自信 怎么表达都可以.jpeg", "各种梗 各种图纷纷出现.jpeg", "吸大麻都无所谓的.jpeg", "命运就是这样.webp", "和大家一起品鉴.png", "回避这个敏感的话题.webp", "因为我们的人民觉醒了.webp", "坦率地讲我不是特别关心.jpg", "基本上可以做到自主可控.jpeg", "多么的傲慢和愚蠢.webp", "大家都看的非常清楚.webp", "大家都笑了.jpeg", "好在中国人已经习惯了.png", "它设计非常超现代 科幻感.jpeg", "官气太重 套话太多.jpeg", "对 你要自信.webp", "对不起 我们带着同情的眼光看着你.jpg", "将以怎么样的结局收场.webp", "就是我有强大的实力.jpeg", "就这么办 就这么做.jpeg", "已经走在了错误的道路上了.jpg", "开国际玩笑对不对.jpg", "引来大家的欢笑.jpeg", "很荒缪的.jpg", "怀上了没有.png", "总是那么有看头.jpeg", "慌撒大了 自己打自己耳光.webp", "我也喜欢你.png", "我也是被震撼.jpg", "我也是被震撼.webp", "我们会赢的.jpg", "我们手中有一手好牌.jpeg", "我们网民有很多很多创意.jpg", "我们见过的世面太多了.jpg", "我喜欢你.jpeg", "我在见证历史.jpg", "我对这些排名从来不看.jpg", "我就投降.png", "我就表扬他们.jpeg", "我当时忍不住大笑起来.jpeg", "我当时忍不住大笑起来.png", "我想这才是中国人民真正的声音.webp", "我根本不信这个东西.jpeg", "我的观点没有任何变化.webp", "我看了都乐了.jpg", "我看了都乐了.png", "我老说千万不要阻拦他.webp", "我胜出.webp", "我觉得我们完全可以强势一点.webp", "我觉得没有问题的.jpeg", "我觉得还有很多精彩的东西可以做.jpeg", "我觉得这就是一种自信.jpeg", "我觉得这就是一种自信.png", "我说 这太荒缪了让人笑掉大牙.png", "我说你不要敬酒不吃吃罚酒.jpeg", "我说对不起.jpeg", "我说我一个人的预测都比你们预测的准.jpeg", "我说我不做这样的傻事情.jpg", "我说我相信韩国人民的智慧.webp", "我说这叫做严重的 脑残.webp", "我说这是很了不起的成就.jpeg", "我说那对不起.jpeg", "我都乐了.jpg", "我随便 最左的最右的我们都可以沟通.png", "我随便 最左的最右的我我们都可以沟通.jpg", "所以他这个心理太脆弱.jpeg", "所以千万不要小看勇往直前的年轻人.jpg", "所以完全是真的发自内心的自信.jpeg", "所以我们对此可以感到无比的自豪.jpeg", "所以我们对此可以感到无比的自豪.webp", "所以我觉得 美国人需要解放思想.jpg", "所以这个是中国模式厉害的地方.jpg", "日益成为国际笑话.jpg", "是不道德的 不公正的.jpg", "是学养厚.png", "最后后悔的必然是你们.jpeg", "最后说我要和你夫人睡觉.jpeg", "最大的特点就是精彩.jpg", "有意的忽视一些基本的事实.webp", "果然 不出所料.jpg", "果真这次我们的判断全部又应验了.png", "没有什么关系的.jpeg", "没有这样的眼界.webp", "满嘴跑火车.png", "现在一些人恐怕肠子都要悔青了.webp", "现在坦率的说它非常害怕.webp", "现在看来也是正在走向溃败.jpg", "现在逐步变成一种笑话了.jpeg", "生活越来越精彩.jpeg", "用抽象概念忽悠人.jpeg", "看谁经得起这个打击.jpg", "真是一股邪恶的势力.jpeg", "真的 他们真的发自内心的自信.jpg", "真的是有一种强大的优势.jpeg", "空白 竖拇指.jpeg", "空白1.png", "空白2.jpg", "空白2.png", "空白3.jpeg", "简直是一种黑色幽默.jpeg", "结果是害人又害己.webp", "给人的感觉是走火入魔了.webp", "继续展示我们的实力.jpg", "而且更麻烦的是祸不单行.webp", "背后是实力的支撑.jpeg", "脑子坏掉了.jpg", "花架子很多 战斗力很弱.jpeg", "要么不打 要打就要打得痛快.jpg", "要准备吃苦了.jpg", "要有点雄心壮志.jpg", "要给他迎头痛击.jpeg", "让他们继续留在黑暗中吧.jpg", "该出手时一定要出手.jpg", "说实话 能做到这样是不容易的.jpeg", "说震撼就震撼 没有什么好谦虚的.png", "请你现在就道歉.jpg", "谎撒大了 自己打自己耳光.webp", "跟网上这些乌龟王八蛋好好斗争.jpeg", "迄今还没有醒悟.webp", "还会有一些嘴硬的.jpeg", "还在做一个白日梦.webp", "还是太保守 知道吗.jpeg", "还有比这种行为更加卑鄙的吗.jpeg", "还生活在这样一种一个无比美好的彼岸世界 不也挺好的吗.webp", "还需要我们来嘲笑吗.jpeg", "这一切经得起任何国际比较.jpeg", "这个回旋余地大多了.webp", "这个太不给面子了.jpeg", "这个彼岸世界是虚构出来的.jpeg", "这个我觉得蛮可笑的.jpg", "这个效果比党的教育还要好.jpg", "这个盒饭确实比美国中产阶级吃的好.jpeg", "这个真是高手过招.jpeg", "这个美国什么都担忧.jpeg", "这个话尽量不要讲.png", "这个账根本算不清了.jpeg", "这了不得的.jpg", "这几乎是个共识了.jpeg", "这叫选择性失明.webp", "这就是思想解放.jpeg", "这已经形成一个传统了.jpg", "这我叫做令人笑掉大牙的.jpg", "这是少有的精彩.jpeg", "这种好事没你的份.jpeg", "这种话他都敢讲 你知道吗.webp", "这绝对是好事情.png", "这背后就是自信.jpg", "这还需要我们来嘲笑吗.webp", "那会非常之失败.webp", "那又怎么样.jpeg", "都可以谈 有什么不能谈的.jpeg", "都成了天大的笑话.jpg", "都是年轻人在推动这个事业.jpeg", "鼓励他们移民 走的越多越好.jpeg", "鼓掌gif.gif"];

// 初始化随机图片
function showRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = `images/${images[randomIndex]}`;
    document.getElementById('randomImage').src = randomImage;
}

// 搜索功能（带防抖优化）
let searchTimeout;

function performSearch(query) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (!query) {
        showRandomImage();
        return;
    }

    const startTime = performance.now();

    const filtered = images.filter(filename =>
        filename.toLowerCase().includes(query.toLowerCase())
    );

    filtered.forEach(filename => {
        const img = document.createElement('img');
        img.src = `images/${filename}`;
        img.alt = filename;
        img.className = 'img-item';
        img.loading = 'lazy';  // 原生懒加载
        img.style.maxWidth = '100%';
        resultsContainer.appendChild(img);
    });

    console.log(`搜索耗时：${performance.now() - startTime}ms`);
}

// 事件监听
document.getElementById('searchBox').addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        performSearch(e.target.value.trim());
    }, 300);
});

// 预加载核心图片（可选）
window.addEventListener('load', () => {
    showRandomImage();
    // // 预加载前20张缩略图
    // images.slice(0, 20).forEach(filename => {
    //     new Image().src = `images/${filename}`;
    // });
});