/* @Date: Fri Sep 15 2017 16:03:33 GMT+0800 (中国标准时间)

 */
!function (t) {
    function e(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = {exports: {}, id: i, loaded: !1};
        return t[i].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
    }

    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0)
}([function (t, e, n) {
    (function (t) {
        "use strict";
        !function () {
            if (n(2), n(3).init(), 0 !== t.pageInfo.type) {
                var e = n(5);
                e && e.init(t.bd_cnzz), n(6) || (n(8), t.site && -1 === t.site.indexOf("taobao") && -1 === t.site.indexOf("tmall") ? ("iqiyi" == t.site && (t.set_force = !1), n(9).common(function (e) {
                    if (e && e.result instanceof Array) t.set_force = !1; else if (e && e.result) {
                        var i = e.result.address;
                        i.indexOf("北京") > -1 || i.indexOf("上海") > -1 || i.indexOf("广州") > -1 || i.indexOf("深圳") > -1 || i.indexOf("杭州") > -1 ? (t.set_force = !1, t.forbidAd = !0) : i.indexOf("南京") > -1 && (t.set_force = !1)
                    }
                    n(10).init()
                })) : n(10).init())
            }
        }()
    }).call(e, n(1))
}, function (t, e, n) {
    "use strict";
    t.exports = {
        modules: {},
        version: 1505462608255,
        browser: {},
        debug: /gwdebug/.test(window.location.href),
        extend: function (t) {
            for (var e in t) this[e] = t[e]
        }
    }
}, function (t, e, n) {
    (function (t) {
        "use strict";
        var e = "https:" === location.protocol ? "https:" : "http:";
        t.extend({
            crc64: 1,
            server: e + "//hao123.gwdang.com",
            s_server: e + "//cdn.gwdang.com",
            bidtj: "http://dr.w.baidu.com/report",
            u_server: "http://118.144.88.119:8085",
            img_server: "http://f67dfe7ee7e63.cdn.sohucs.com",
            img64_server: "http://645568b71d6b6.cdn.sohucs.com",
            loadImg: e + "//cdn.gwdang.com/template/aug/images/new/120.gif",
            noImg: e + "//cdn.gwdang.com/images/extensions/default_load_image.png",
            bd_cnzz: e + "//s4.cnzz.com/z_stat.php?id=1260905473&web_id=1260905473",
            specialUnion: "http://118.144.88.119:8085/union/go/",
            cssname: "bdext.css",
            union: "union_baidu",
            from_device: "baidu",
            from_device: "",
            show_wishlist: 1,
            set_force: !0,
            extBrand: "bd",
            extName: "bdext",
            ut: "&trans=1",
            subsite_id: "",
            force: [],
            href: window.location ? window.location.href : "",
            gwd_cnzz: ""
        })
    }).call(e, n(1))
}, function (t, e, n) {
    (function (e, n) {
        "use strict";
        var i, o = window.location.href, r = window.location.host, a = {
                "\\.tmall\\.(?:com|hk)": "tmall",
                "yao\\.95095\\.com": "tmall",
                "\\.taobao\\.com": "taobao",
                "\\.jd\\.(?:com|hk)": "360buy",
                "\\.suning\\.com": "suning",
                "www\\.amazon\\.com": "amazon-com",
                "www\\.amazon\\.co\\.uk": "amazon-uk",
                "\\.yhd\\.com": "yihaodian",
                "\\.gome\\.com\\.cn": "gome",
                "\\gomehigo\\.hk": "gome",
                "\\.vip\\.com": "vipshop",
                "\\.dangdang\\.com": "dangdang",
                "\\.mi\\.com": "xiaomi",
                "\\.yougou\\.com": "yougou",
                "\\.newegg\\.cn": "newegg",
                "\\.womai\\.com": "womai",
                "\\.yintai\\.com": "yintai",
                "\\.kaola\\.com": "kaola",
                "\\.vmall\\.com": "vmall",
                "\\.feiniu\\.com": "feiniu",
                "\\jumei\\.com": "jumei",
                "\\jumeiglobal\\.com": "jumeiglobal",
                "\\.lemall\\.com": "lemall",
                "\\.vancl\\.com": "vancl",
                "\\.tuhu\\.com": "tuhu",
                "\\.banggo\\.com": "banggo",
                "\\.ule\\.com": "ule",
                "\\.lifevc\\.com": "lifevc",
                "\\.jiuxian\\.com": "jiuxian",
                "\\.wbiao\\.cn": "wbiao",
                "\\.efotile\\.com": "efotile",
                "\\.ehaier\\.com": "ehaier",
                "\\.staples\\.cn": "staples",
                "\\.j1\\.com": "j1",
                "\\.jianke\\.com": "jianke",
                "\\kede\\.com": "kede",
                "\\lovo\\.com": "lovo",
                "\\.360kad\\.com": "360kad",
                "\\.yohobuy\\.com": "yohobuy",
                "\\.fengqu\\.com": "fengqu",
                "\\.baobeigezi\\.com": "baobeigezi",
                "\\.meici\\.com": "meici",
                "\\.camel\\.com\\.cn": "camel",
                "microsoftstore\\.com\\.cn": "microsoftstore",
                "\\.apple\\.com": "apple",
                "\\.5i5j\\.com": "5i5j",
                "\\.centanet\\.com": "centanet",
                "\\.lianjia\\.com": "lianjia",
                "\\.lianjia\\.com": "lianjia",
                "www\\.kjt\\.com": "kjt",
                "www\\.coocaa\\.com": "coocaa",
                "(?:www|shop)\\.nubia\\.(?:cn|com)": "nubia",
                "www\\.kzj365\\.com": "kzj365",
                "www\\.ymatou\\.com": "ymatou",
                "www\\.metao\\.com": "metao",
                "shop\\.philips\\.com\\.cn": "philips",
                "www\\.tcl\\.com": "tcl",
                "www\\.e-changhong\\.com": "changhong",
                "shop\\.konka\\.com": "konka",
                "shop\\.hisense\\.com": "hisense",
                "www\\.ineigo\\.com": "ineigo",
                "www\\.skg\\.com": "skg",
                "www\\.k-touch\\.cn": "k-touch",
                "(?:www|shop)\\.gionee\\.com": "gionee",
                "(?:www|store)\\.oppo\\.com": "oppo",
                "gfive\\.b2c\\.eqimingxing\\.com": "gfive",
                "shop\\.vivo\\.com\\.cn": "vivo",
                "www\\.grainger\\.cn": "grainger",
                "(?:mall|piao)\\.163\\.com": "wy163",
                "t\\.dianping\\.com": "dianping",
                "\\.nuomi\\.com": "nuomi",
                "\\.meituan\\.com": "meituan",
                "www\\.ebay\\.com": "ebay",
                "item\\.feiniu\\.com": "feiniu",
                "\\.feifei\\.(?:cn|com)": "feifei",
                "\\.guang\\.com": "guang",
                "\\.meilishuo\\.com": "meilishuo",
                "\\.mogujie\\.com": "mogujie",
                "shop\\.coolpad\\.cn": "coolpad",
                "\\.sephora\\.cn": "sephoracps",
                "cn\\d*\\.strawberrynet\\.com": "strawberrynet",
                "\\.yesmywine\\.com": "yesmywine",
                "(\\.)?yiguo\\.com": "yiguo",
                "\\.wanggou\\.com": "wanggou",
                "mall\\.jia\\.com": "jia",
                "weigou\\.baidu\\.com": "baidu-weigou",
                "shop\\.letv\\.com": "lemall",
                "\\.handu\\.com": "handu",
                "(?:www\\.|^)taoshu\\.com": "taoshu",
                "\\.ouku\\.com": "ouku",
                "\\.zm7\\.cn": "zm7",
                "\\.yiwugou\\.com": "yiwugou",
                "\\.zhiwo\\.com": "zhiwo",
                "\\.muyingzhijia\\.com": "muyingzhijia",
                "\\.didamall\\.com": "didamall",
                "\\.xiji.com": "xiji",
                "\\.xijie.com": "xijie",
                "\\.miqi\\.cn": "miqi",
                "\\.zol\\.com(?:$|/|\\?)": "zol",
                "zol\\.com\\.cn": "zol",
                "(\\.)?homevv\\.com": "homevv",
                "\\.paixie\\.net": "paixie",
                "\\.tao3c\\.com": "tao3c",
                "s8\\.taobao\\.com": "s8",
                "\\.newegg(\\.com)?\\.cn": "newegg",
                "\\.redbaby\\.com\\.cn": "redbaby",
                "\\.51buy\\.com": "51buy",
                "\\.yixun\\.com": "51buy",
                "\\.okbuy\\.com": "okbuy",
                "\\.coo8\\.com": "coo8",
                "\\.lusen\\.com": "lusen",
                "\\.gomehigo\\.hk": "gomehigo",
                "\\.leyou\\.com\\.cn": "leyou",
                "\\.shopin\\.net": "shopin",
                "\\.no5\\.com\\.cn": "no5",
                "\\.xiu\\.com": "xiu",
                "\\.mbaobao\\.com": "mbaobao",
                "\\.360kxr\\.com": "360kxr",
                "\\.m6go\\.com": "m6go",
                "\\.gou\\.com": "m6go",
                "\\.99read\\.com": "99read",
                "\\.china-pub\\.com": "china-pub",
                "\\.bookschina\\.com": "bookschina",
                "\\.efeihu\\.com": "efeihu",
                "\\.quwan\\.com": "quwan",
                "\\.k121\\.com": "k121",
                "\\.happigo\\.com": "happigo",
                "\\.gap\\.cn": "gap",
                "\\.binggo\\.com/": "binggo",
                "\\.jxdyf\\.com": "jxdyf",
                "\\.winxuan\\.com": "winxuan",
                "\\.bookuu\\.com": "bookuu",
                "\\.111\\.com\\.cn": "111",
                "\\.sfbest\\.(?:hk|com)": "sfbest",
                "\\.lefeng\\.com": "lefeng",
                "www\\.benlai\\.com": "benlai",
                "(?:\\.|^)letao\\.com": "letao",
                "\\.139shop\\.com": "139shop",
                "(?:\\.|^)zzl365\\.com": "zzl365",
                "\\.tiantian\\.com": "tiantian",
                "\\.taoxie\\.com": "taoxie",
                "\\.gjw\\.com": "gjw",
                "www\\.d1\\.com\\.cn": "d1",
                "\\.ihush\\.com": "ihush",
                "www\\.s\\.cn": "s",
                "\\.(?:moonbasa|korirl|rutisher|suorang|alaves|ing2ing|0-100s|qjherb|monteamor)\\.com": "moonbasa",
                "\\.wangjiu\\.com": "wangjiu",
                "\\.liebo\\.com": "liebo",
                "\\.esprit\\.cn": "esprit",
                "(?:\\.|^)lamiu\\.com": "lamiu",
                "\\.aimer\\.com\\.cn": "aimer",
                "www\\.kadang\\.com": "kadang",
                "www\\.lizi\\.com": "lizi",
                "www\\.metromall\\.cn": "metromall",
                "www\\.pba\\.cn": "pba",
                "\\.shangpin\\.com": "shangpin",
                "\\.handuyishe\\.com": "handuyishe",
                "\\.secoo\\.com": "secoo",
                "(?:vivian|linkmasa|masamaso)\\.(?:com|cn)": "masamaso",
                "www\\.naruko\\.cn": "naruku",
                "www\\.sportica\\.cn": "sportica",
                "(?:\\.|^)xifuquan\\.com": "xifuquan",
                "www\\.milier\\.com": "milier",
                "www\\.nop\\.cn": "nop",
                "\\.lenovo\\.com": "lenovo",
                "shop\\.lenovo\\.com\\.cn": "lenovo",
                "shop\\.lenovomobile\\.com": "lenovo",
                "\\.189\\.cn": "189",
                "\\.hicdma\\.com": "hicdma",
                "\\.e100\\.cn": "e100",
                "store\\.samsung\\.com": "samsung",
                "\\.meizu\\.com": "meizu",
                "\\.958shop\\.com": "958shop",
                "\\.okhqb\\.com": "okhqb",
                "\\.ztedevice\\.com\\.cn": "ztedevice",
                "\\.kuaishubao\\.com": "kuaishubao",
                "\\.lvyoumall\\.com": "lvyoumall",
                "(?:www\\.|^)x\\.com\\.cn": "x",
                "\\.lingshi\\.com": "lingshi",
                "www\\.ctrip\\.com": "ctrip",
                "\\.zuipin\\.cn": "zuipin",
                "www\\.xgbaby\\.com": "bbready",
                "\\.lvmama\\.com": "lvmama",
                "(?:\\.|^)qmango\\.com": "qmango",
                "www\\.228cai\\.com": "228cai",
                "\\.ikjtao\\.com": "ikjtao",
                "www\\.bestkeep\\.cn": "ikjtao",
                "\\.bagtree\\.cn": "bagtree",
                "yichengpin\\.com": "yichengpin",
                "zgzcw\\.com": "zgzcw",
                "www\\.mia\\.com": "miyabaobei",
                "\\.miyabaobei.hk": "miyabaobei",
                "minshengec\\.com": "minshengec",
                "wangfujing\\.com": "wangfujing",
                "\\.qunar\\.com": "qunar",
                "\\.meilele\\.com": "meilele",
                "www\\.55tuan\\.com": "55tuan",
                "jinjianginns\\.com": "jinjianginns",
                "\\.elong\\.com": "elong",
                "podinns\\.com": "podinns",
                "mangocity\\.com": "mangocity",
                "\\.500\\.com": "500",
                "www\\.ly\\.com": "ly",
                "e-lining\\.com": "e-lining",
                "\\.lining\\.com": "lining",
                "\\.koolearn\\.com": "koolearn",
                "\\.springtour\\.com": "springtour",
                "\\.qinqinbaby\\.com": "qinqinbaby",
                "winenice\\.com": "winenice",
                "\\.sasa\\.com": "sasa",
                "(?:\\.|^)5lux\\.com": "5lux",
                "\\.228\\.com\\.cn": "228",
                "\\.rrs\\.com": "rrs",
                "\\.rrsjk.com": "rrs",
                "(?:\\.|^)buy\\.ccb\\.com": "ccb",
                "www\\.amazon\\.co\\.jp": "amazon",
                "www\\.amazon\\.in": "amazon",
                "www\\.amazon\\.fr": "amazon",
                "www\\.amazon\\.de": "amazon",
                "www\\.amazon\\.it": "amazon",
                "www\\.amazon\\.co.uk": "amazon",
                "www\\.amazon\\.nl": "amazon",
                "www\\.amazon\\.es": "amazon",
                "www\\.amazon\\.ca": "amazon",
                "www\\.amazon\\.com\\.mx": "amazon",
                "www\\.amazon\\.com\\.br": "amazon",
                "www\\.amazon\\.com\\.au": "amazon",
                "store\\.logitech\\.com\\.cn": "logitech",
                "\\.boohee\\.com": "boohee",
                "nike\\.com": "nike",
                "\\.lbxcn\\.com": "lbxcn",
                "\\.beibei\\.com": "beibei",
                "\\.6pm\\.com": "6pm",
                "\\.gnc\\.com": "gnc",
                "\\.myhabit\\.com": "myhabit",
                "\\.shopbop\\.com": "shopbop",
                "\\.drugstore\\.com": "drugstore",
                "www\\.walgreens\\.com": "walgreens",
                "sierratradingpost\\.com": "sierratradingpost",
                "\\.jomashop\\.com": "jomashop",
                "\\.ashford\\.com": "ashford",
                "lookfantastic\\.com": "lookfantastic-com",
                "\\.rei\\.com": "rei",
                "\\.iherb\\.com": "iherb",
                "\\.carters\\.com": "carters",
                "www\\.endclothing\\.com": "endclothing",
                "\\.campsaver\\.com": "campsaver",
                "global\\.rakuten\\.com": "rakuten",
                "(?:\\.|^)100yue\\.com": "100yue",
                "www\\.woot\\.com": "woot",
                "www\\.haitaocheng\\.com": "haitaocheng",
                "joesnewbalanceoutlet\\.com": "joesnewbalanceoutlet",
                "\\.finishline\\.com": "finishline",
                "\\.vitacost\\.com": "vitacost",
                "\\.groupon.com": "groupon",
                "\\.supumall\\.com": "supumall",
                "www1\\.macys\\.com": "macys",
                "www\\.moosejaw\\.com": "moosejaw",
                "www\\.jiumei\\.com": "jiumei",
                "(?:\\.|^)chunshuitang\\.com": "chunshuitang",
                "www\\.daling.com": "daling",
                "www\\.oyeah\\.com": "oyeah",
                "www\\.morefood\\.com": "morefood",
                "www\\.yummy77\\.com": "yummy77",
                "www\\.fruitday\\.com": "fruitday",
                "www\\.gilt\\.com": "gilt",
                "www\\.mei\\.com": "mei",
                "\\.vsigo\\.cn": "vsigo",
                "www\\.keede\\.com": "keede",
                "www\\.showjoy\\.com": "showjoy",
                "\\.ocj\\.com\\.cn": "ocj",
                "\\.ocj\\.kr": "ocj",
                "www\\.sundan\\.com": "sundan",
                "www\\.jiae\\.com": "jiae",
                "(?:\\.|^)zazhipu\\.com": "zazhipu",
                "www\\.easeeyes\\.com": "easeeyes",
                "(?:\\.|^)xgdq\\.com": "xgdq",
                "\\.bestcake\\.com": "bestcake",
                "www\\.hua\\.com": "hua",
                "www\\.xtep\\.com\\.cn": "xtep",
                "www\\.zhe800\\.com": "zhe800",
                "www\\.aidai\\.com": "aidai",
                "www\\.bftv\\.com": "bftv",
                "\\.tujia\\.com": "tujia",
                "\\.cosme\\.com": "cosme",
                "www\\.diapers\\.com": "diapers",
                "www\\.windeln\\.de": "windeln",
                "www\\.babyneo\\.de": "babyneo",
                "www\\.escentual\\.com": "escentual",
                "www\\.thewatchery\\.com": "thewatchery",
                "\\.biccamera.com": "biccamera",
                "eshop\\.htc\\.com": "htc",
                "roseonly\\.com\\.cn": "roseonly",
                "\\.rong360.com": "rong360",
                "\\.niwodai.com": "niwodai",
                "www\\.esteelauder.com": "esteelauder",
                "\\.saksfifthavenue.com": "saksfifthavenue",
                "\\.taqu.cn": "taqu",
                "\\.qyer.com": "qyer",
                "\\.axmall\\.com\\.au": "axmall",
                "\\.muji.net": "muji",
                "(?:\\.|^)gmarket.co.kr": "gmarket",
                "english.11st.co.kr": "11st",
                "\\.smartbargains\\.com": "smartbargains",
                "\\.shopping\\.yahoo\\.co\\.jp": "yahooshop",
                "\\.bloomingdales\\.com": "bloomingdales",
                "\\.mikihouse\\.jp": "mikihouse",
                "\\.toysrus\\.co\\.jp": "toysrus",
                "\\.comfortfirst\\.com": "comfortfirst",
                "\\.gymboree\\.com": "gymboree",
                "\\.albeebaby.com": "albeebaby",
                "\\.babymarkt.de": "babymarkt",
                "\\.uggaustralia.co.uk": "uggaustralia",
                "www\\.ugg\\.com": "ugg",
                "neimanmarcus\\.com": "neimanmarcus",
                "www\\.shoebuy.com": "shoebuy",
                "www\\.szul\\.com": "szul",
                "www\\.timex.com": "timex",
                "\\.timex.com": "timex",
                "www\\.kay.com": "kay",
                "\\.ewatches.com": "ewatches",
                "\\.swarovski.com": "swarovski",
                "\\.worldofwatches.com": "worldofwatches",
                "www.danielwellington.com": "danielwellington",
                "\\.beautybay.com": "beautybay",
                "\\.beauty.com": "beauty",
                "www.beautybar.com": "beautybar",
                "skinstore.com": "skinstore",
                "www.laneige.com": "laneige",
                "(?:\\.|^)bose.com": "bose",
                "(?:\\.|^)bestbuy.com": "bestbuy",
                "bhphotovideo.com": "bhphotovideo",
                "(?:\\.|^)sony.jp": "sony",
                "\\.bl\\.com": "bl",
                "(?:\\.|^)you.163.com": "you163",
                "(?:\\.|^)jinjiang.com": "jinjiang",
                "(?:\\.|^)bestinfoods.com": "bestinfoods",
                "(?:\\.|^)jinxiang.com": "jinxiang",
                "(?:\\.|^)guojimami.com": "guojimami",
                "(?:\\.|^)baiyangwang.com": "baiyangwang",
                "\\.aoyou.com": "aoyou",
                "(?:\\.|^)royyoungchemist.com.au": "royyoungchemist",
                "(?:\\.|^)medihealshop.com": "medihealshop",
                "(?:\\.|^)1001pharmacies.com": "1001pharmacies",
                "(?:\\.|^)lookfantastic.cn": "lookfantastic-cn",
                "(?:\\.|^)1\\.163\\.com": "1-163",
                "www\\.kaixinbao.com": "kaixinbao",
                "(?:\\.|^)booking.com": "booking",
                "(?:\\.|^)juanpi.com": "juanpi",
                "(?:\\.|^)pharmacyonline.com": "pharmacyonline",
                "(?:\\.|^)bodyguardapotheke.com": "bodyguardapotheke",
                "(?:\\.|^)purcotton.com": "purcotton",
                "(?:\\.|^)wstx.com": "wstx",
                "www\\.midea\\.com": "midea",
                "mall\\.midea\\.com": "midea",
                "\\.kaluli.com": "kaluli",
                "(?:\\.|^)yunhou\\.com": "yunhou",
                "(?:\\.|^)haituncun\\.com": "haituncun",
                "(?:\\.|^)vmei\\.com": "vmei",
                "(?:\\.|^)jgb\\.cn": "jgb",
                "(?:\\.|^)51din\\.com": "51din",
                "(?:\\.|^)boqii\\.com": "boqii",
                "cn.toursforfun\\.com": "toursforfun",
                "(?:\\.|^)lulutrip\\.com": "lulutrip",
                "(?:\\.|^)spider\\.com\\.cn": "spider",
                "(?:\\.|^)walmart\\.com": "walmart",
                "mall.to8to.com": "to8to",
                "www.opposhop.cn": "opposhop",
                "www.yao123.com": "yao123",
                "www.menglu.com": "menglu",
                "www.guopi.com": "guopi",
                "www.likeface.com": "likeface",
                "www.mallvv.com": "homevv",
                "www.markmall.com": "markmall",
                "www\\.baicheng\\.com": "baicheng",
                "www\\.suanjuzi\\.com": "suanjuzi",
                "\\.jinxiang\\.com": "jinxiang",
                "\\.aomygod\\.com": "aomygod",
                "(?:\\.|^)luolai\\.cn": "luolai",
                "\\.vivo\\.com\\.cn": "vivo",
                "\\.dixintong\\.com": "dixintong",
                "\\.coolpad\\.com": "coolpad",
                "\\.skg\\.com": "skg",
                "vip\\.iqiyi\\.com": "iqiyi",
                "\\aolaigo\\.com": "aolaigo",
                "vip\\.missfresh\\.cn": "missfresh",
                "\\.pushenkuajing\\.com": "pushenkuajing",
                "cn\\.feelunique\\.com": "feelunique",
                "\\.chemistdirect\\.com\\.au": "chemistdirect",
                "\\.netpharmacy\\.co\\.nz": "netpharmacy",
                "\\.pharmacy4less\\.com\\.au": "pharmacy4less",
                "\\.pharmacydirect\\.co\\.nz": "pharmacydirect",
                "\\.amcal\\.com\\.au": "amcal",
                "\\.laredoute\\.cn": "laredoute",
                "cn\\.unserekleineapotheke\\.de": "unserekleineapotheke",
                "\\.erwinmueller\\.com\\.cn": "erwinmueller",
                "\\.kiwidiscovery\\.co\\.nz": "kiwidiscovery",
                "\\.springlane\\.de": "springlane",
                "\\.jako-o\\.com": "jako-o",
                "\\.easytoys\\.cn": "easytoys",
                "\\.tlcpharmacy\\.cn\\.com": "tlcpharmacy",
                "\\.bienmanger\\.cn": "bienmanger",
                "\\.dewaren\\.com": "dewaren",
                "\\.discount-apotheke\\.de": "discount-apotheke",
                "\\.holland-at-home\\.com": "holland-at-home",
                "\\.youyu\\.com": "youyu",
                "\\.kiwistarcare\\.com": "kiwistarcare",
                "\\.lenovomobile\\.com": "lenovomobile",
                "\\.51taouk\\.com": "51taouk",
                "\\.kiehls\\.com": "kiehls",
                "\\.zappos\\.com": "zappos",
                "\\.coach\\.com": "coach",
                "\\.yoox\\.cn": "yoox",
                "\\.11street\\.com\\.cn": "11street",
                "\\.ba\\.de": "ba",
                "www\\.hqhair\\.com": "hqhair",
                "www\\.katespade\\.co\\.uk": "katespade",
                "cn\\.vitafy\\.de": "vitafy",
                "www\\.yoox\\.cn": "yoox",
                "\\.m18\\.com": "m18",
                "comfortfirst\\.com": "comfortfirst",
                "china\\.lotte\\.com": "lotte",
                "\\.carrefour\\.cn": "carrefour",
                "www\\.tea7\\.com": "tea7",
                "\\.zhongjiu.cn": "zhongjiu",
                "\\.puzeyf\\.com": "puzeyf",
                "www\\.kohls\\.com": "kohls",
                "www\\.bodybuilding\\.com": "bodybuilding",
                "\\.nordstrom\\.com": "nordstrom",
                "www\\.costco\\.com": "costco",
                "www\\.target\\.com": "target",
                "www\\.kmart\\.com": "kmart",
                "www\\.overstock\\.com": "overstock",
                "www\\.sears\\.com": "sears",
                "www\\.shoprobam\\.com": "shoprobam",
                "mall\\.goumin\\.com": "goumin",
                "www\\.flyco\\.com": "flyco",
                "www\\.opplestore\\.com": "opplestore",
                "www\\.syshop\\.com": "syshop",
                "www\\.yfdyf\\.com": "yfdyf",
                "ssl\\.hotels\\.cn": "hotels",
                "aihuishou\\.com": "aihuishou",
                "www\\.thebeastshop\\.com": "thebeastshop",
                "www\\.jomooshop\\.com": "jomooshop",
                "www\\.septwolves\\.cn": "septwolves",
                "\\.6\\.cn": "home6",
                "www\\.800pharm\\.com": "800pharm",
                "www\\.ujipin\\.com": "ujipin",
                "pc\\.mmb\\.cn": "mmb",
                "www\\.ihaveu\\.com": "ihaveu",
                "mall\\.ikang\\.com": "ikang",
                "www\\.wyn88\\.com": "wyn88",
                "www\\.mcake\\.com": "mcake",
                "www\\.xmeise\\.com": "xmeise",
                "www\\.lecake\\.com": "lecake",
                "www\\.jd100\\.com": "jd100",
                "www\\.jinghua\\.com": "jinghua",
                "www\\.taohwu\\.com": "taohwu",
                "www\\.zbird\\.com": "zbird",
                "www\\.km1818\\.com": "km1818",
                "www\\.zocai\\.com": "zocai",
                "www\\.taoshu\\.com": "taoshu",
                "www\\.aizhigu\\.com\\.cn": "aizhigu",
                "www\\.tieyou\\.com": "tieyou",
                "www\\.fieldschina\\.com": "fieldschina",
                "www\\.wdmcake\\.cn": "wdmcake",
                "mall\\.lqxshop\\.com": "lqxshop",
                "www\\.usashopcn\\.com": "usashopcn",
                "www\\.wine9\\.com": "wine9",
                "www\\.qipaimall\\.com": "qipaimall",
                "www\\.yododo\\.cn": "yododo",
                "www\\.yoger\\.com\\.cn": "yoger",
                "www\\.dapu\\.dapu": "dapu",
                "www\\.winona\\.cn": "winona",
                "www\\.wl\\.cn": "wl",
                "www\\.shanmai\\.cn": "shanmai",
                "www\\.zgshoes\\.com": "zgshoes",
                "www\\.maichawang\\.com": "maichawang",
                "www\\.uemall\\.com": "uemall",
                "\\.51you\\.com": "51you",
                "\\.beifabook\\.com": "beifabook",
                "www\\.jpeen\\.com": "jpeen",
                "www\\.huatuoyf\\.com": "huatuoyf",
                "www\\.fengbuy\\.com": "fengbuy",
                "\\.uiyi\\.com": "uiyi",
                "www\\.hecha\\.cn": "hecha",
                "www\\.t10\\.com": "t10",
                "www\\.qw\\.cc": "qw",
                "\\.miutour\\.com": "miutour",
                "www\\.ehaoyao\\.com": "ehaoyao",
                "www\\.idx\\.com\\.cn": "idx",
                "www\\.uya100\\.com": "uya100",
                "www\\.ssnewyork\\.com": "ssnewyork",
                "www\\.clinique\\.com": "clinique",
                "www\\.hxepawn\\.com": "hxepawn",
                "www\\.brooksbrothers\\.com": "brooksbrothers",
                "www\\.omtao\\.com": "omtao",
                "www\\.ep365\\.com": "ep365",
                "www\\.columbiasports\\.cn": "columbiasports",
                "\\.bstapp\\.cn": "bstapp",
                "www\\.newbalance\\.com": "newbalance",
                "\\.wjike\\.com": "wjike",
                "www\\.bally\\.co\\.uk": "bally",
                "\\.1hai\\.cn": "1hai",
                "www\\.jialich\\.cn": "jialich",
                "\\.takeya\\.co\\.jp": "takeya",
                "www\\.forever21\\.com": "forever21",
                "www\\.modernavenue\\.com": "modernavenue",
                "www\\.muniao\\.com": "muniao",
                "www\\.zuihuiyou\\.com": "zuihuiyou",
                "www\\.bobbibrowncosmetic\\.com": "bobbibrowncosmetics",
                "www\\.super-in\\.com": "super-in",
                "www\\.hangowa\\.com": "hangowa",
                "www\\.levi\\.com": "levi",
                "www\\.fila\\.cn": "fila",
                "www\\.converse\\.com\\.cn": "converse",
                "us\\.nextdirect\\.com": "nextdirect",
                "www\\.itrip\\.com": "itrip",
                "www\\.lashou\\.com": "lashou",
                "www\\.liufeng\\.com": "liufeng",
                "www\\.trt\\.hk": "trt",
                "www1\\.wodinghua\\.com": "wodinghua",
                "\\.wuliwuli\\.cn": "wuliwuli",
                "www\\.forestfood\\.com": "forestfood",
                "\\.bonjourhk\\.com": "bonjourhk",
                "www\\.vitagou\\.hk": "vitagou",
                "\\.kinhom\\.com": "kinhom",
                "www\\.360lj\\.com": "360lj",
                "v\\.changba\\.com": "changba",
                "www\\.oakley\\.com": "oakley",
                "www\\.jpyoo\\.com": "jpyoo",
                "www\\.clarksusa\\.com": "clarksusa",
                "www\\.starwoodhotels\\.com": "starwoodhotels",
                "www\\.marriott\\.com": "marriott",
                "www\\.yesstyle\\.com": "yesstyle",
                "^evisu\\.com": "evisu",
                "^lifeseasy\\.com\\.cn": "lifeseasy",
                "www\\.ccxpet\\.com": "ccxpet",
                "www\\.0061\\.com\\.au": "x0061",
                "www\\.kkguan\\.com": "kkguan",
                "www\\.style-oclock\\.com": "style-oclock",
                "www\\.peikua\\.com": "peikua",
                "www\\.airfrance\\.us": "airfrance",
                "www\\.accorhotels\\.com": "accorhotels",
                "www\\.spacenk\\.com": "spacenk",
                "www\\.haichufang\\.com": "haichufang",
                "us\\.wconcept\\.com": "wconcept",
                "www\\.gant\\.co\\.uk": "gant",
                "www\\.catfootwear\\.com": "catfootwear",
                "www\\.saucony\\.com": "saucony",
                "www\\.zaozuo\\.com": "zaozuo",
                "e\\.littleswan\\.com": "littleswan",
                "www\\.can\\.tv": "can",
                "www\\.ssrj\\.com": "ssrj",
                "shop\\.guess\\.net\\.au": "guess",
                "www\\.etihad\\.com": "etihad",
                "store\\.fiil\\.com": "fiil",
                "www\\.mianshui365\\.com": "mianshui365",
                "www\\.tegoushe\\.com": "tegoushe",
                "www\\.wiggle\\.cn": "wiggle",
                "www\\.mdreams\\.com": "mdreams",
                "www\\.ecovacs\\.cn": "ecovacs",
                "www\\.calvinklein\\.cn": "calvinklein",
                "cn\\.memebox\\.com": "memebox",
                "www3\\.hilton\\.com": "hilton",
                "www\\.revolve\\.com": "revolve",
                "www\\.shiseido\\.com": "shiseido",
                "www\\.clarinsusa\\.com": "clarinsusa",
                "store\\.starbucks\\.com": "starbucks",
                "www\\.ray-ban\\.com": "ray-ban",
                "us\\.puma\\.com": "puma",
                "www\\.nautica\\.com": "nautica",
                "www\\.cremedelamer\\.com": "cremedelamer",
                "www\\.kipling-usa\\.com": "kipling-usa",
                "www\\.jurlique\\.com": "jurlique",
                "www\\.hushpuppies\\.com": "hushpuppies",
                "www\\.origins\\.com": "origins",
                "www\\.follifollie\\.us\\.com": "follifollie",
                "usa\\.loccitane\\.com": "loccitane",
                "\\.1688\\.com": "1688"
            }, s = {
                "^(?:http|https)://www\\.camel\\.com\\.cn/[a-z_]+/[A-Z0-9]+\\.shtml": "camel",
                "^(?:http|https)://www\\.meici\\.com/product/detail/id/\\d+": "meici",
                "^(?:http|https)://item\\.baobeigezi\\.com/product/\\d+\\.html": "baobeigezi",
                "^(?:http|https)://www\\.fengqu\\.com/detail/\\d+\\.html": "fengqu",
                "^(?:http|https)://item\\.yohobuy\\.com/product/pro_": "yohobuy",
                "^(?:http|https)://www\\.360kad\\.com/product/\\d+\\.shtml": "360kad",
                "^(?:http|https)://www\\.lovo\\.cn/pr-\\d+\\.htm": "lovo",
                "^(?:http|https)://www\\.kede\\.com/[a-z]+[0-9]+\\.html": "kede",
                "^(?:http|https)://www\\.jianke\\.com/product/[0-9]+\\.html": "jianke",
                "^(?:http|https)://www\\.j1\\.com/product/[0-9-]+": "j1",
                "^(?:http|https)://www\\.staples\\.cn/product/\\w": "staples",
                "^(?:http|https)://www\\.ehaier\\.com/product/\\d+\\.html": "ehaier",
                "^(?:http|https)://www\\.efotile\\.com/productdetail/": "efotile",
                "^(?:http|https)://www\\.wbiao\\.cn/[a-z0-9-]+\\.html": "wbiao",
                "^(?:http|https)://www\\.jiuxian\\.com/goods-[0-9]+\\.html": "jiuxian",
                "^(?:http|https)://www\\.lifevc\\.com/item/[0-9]+": "lifevc",
                "^(?:http|https)://item\\.ule\\.com/item/[0-9-]+\\.html": "ule",
                "^(?:http|https)://www\\.banggo\\.com/goods/\\d+": "banggo",
                "^(?:http|https)://item\\.tuhu\\.com/Products/": "Products",
                "^(?:http|https)://detail\\.tmall\\.(?:com|hk)/item\\.htm": "tmall",
                "^(?:http|https)://detail\\.tmall\\.hk/hk/item\\.htm": "tmall",
                "^(?:http|https)://chaoshi\\.detail\\.tmall\\.com/item\\.htm": "tmall",
                "^(?:http|https)://detail\\.yao\\.95095\\.com/item\\.htm": "taobao-95095",
                "^(?:http|https)://ju\\.taobao\\.com/tg/home\\.htm.*(item_)?id=[\\d]+": "taobao-ju",
                "^(?:http|https)://2\\.taobao\\.com/item\\.htm": "taobao-xianyu",
                "^(?:http|https)://ai\\.taobao\\.com/auction": "ai-taobao",
                "^(?:http|https)://detail\\.ju\\.taobao\\.com/home\\.htm": "taobao-ju",
                "^(?:http|https)://item\\.taobao\\.com/item.htm": "taobao",
                "^(?:http|https)://item\\.jd\\.com/\\d+\\.html": "360buy",
                "^(?:http|https)://item\\.yiyaojd\\.com/\\d+\\.html": "360buy",
                "^(?:http|https)://item\\.jd\\.hk/\\d+\\.html": "360buy",
                "^(?:http|https)://paimai\\.jd\\.com/\\d+": "360buy-paimai",
                "^(?:http|https)://day\\.jd\\.com/item/.*\\.html": "360buy-day",
                "^(?:http|https)://www\\.(?:360buy|jd)\\.com/product/\\d+\\.html": "360buy",
                "^(?:http|https)://(?:book|e)\\.(?:360buy|jd)\\.com/\\d+\\.html": "360buy-book",
                "^(?:http|https)://re\\.jd\\.com/cps/item/[0-9]+\\.html": "360buy-re",
                "^(?:http|https)://auction\\.jd\\.com/[0-9]+": "360buy-auction",
                "^(?:http|https)://mvd\\.(?:360buy|jd)\\.com/\\d+\\.html": "360buy-mvd",
                "^(?:http|https)://tuan\\.(?:360buy|jd)\\.com/team\\-\\d+\\.html": "360buy-tuan",
                "^(?:http|https)://www\\.(?:360buy|jd)\\.com/tuan/[\\d]+\\-[\\d]+\\.html": "360buy-tuan",
                "^(?:http|https)://www\\.(?:360buy|jd)\\.com/bigimage\\.aspx\\?id=\\d+": "360buy-bigimage",
                "^(?:http|https)://club\\.jd\\.com/bbsDetail/[a-z0-9_-]+\\.html": "360buy-club",
                "^(?:http|https)://item\\.suning\\.com/[0-9]+\\.html": "suning",
                "^(?:http|https)://item\\.suning\\.com/[0-9]+/[0-9]+\\.html": "suning",
                "^(?:http|https)://www\\.suning\\.(?:com|cn)/webapp/wcs/stores/servlet/(Prod|prd)": "suning",
                "^(?:http|https)://pai\\.suning\\.(?:com|cn)/shanpai/detail/": "suning-pai",
                "^(?:http|https)://pai\\.suning\\.(?:com|cn)/shanpai/[0-9]/detail/d/[0-9]+-[0-9]": "suning-pai",
                "^(?:http|https)://[\\w]+\\.suning\\.(?:com|cn)/emall/dgf": "suning-dgf",
                "^(?:http|https)://qiang\\.suning\\.com/rps-web/rp/showActivity_[\\d]+\\.htm": "suning-qiang",
                "^(?:http|https)://product\\.suning\\.com/\\d+": "suning",
                "^(?:http|https)://product\\.suning\\.com/detail[0-9_]+\\.html": "suning",
                "^(?:http|https)://www\\.suning\\.com/detail/": "suning-book-new",
                "^(?:http|https)://snbook\\.suning\\.(?:com|cn)/web/prd/": "suning-snbook",
                "^(?:http|https)://www\\.amazon\\.cn/.*?(?:dp/|gp/product/|detailApp)(?!search)": "amazon",
                "^(?:http|https)://www\\.amazon\\.com/.*?(?:dp/|gp/product/|detailApp)(?!search)": "amazon-com",
                "^(?:http|https)://www\\.amazon\\.co\\.uk/.*?(?:dp/|gp/product/|detailApp)(?!search)": "amazon-uk",
                "^(?:http|https)://www\\.amazon\\.co\\.jp/.*?(?:dp/|gp/product/|detailApp)(?!search)": "amazon-jp",
                "^(?:http|https)://www\\.6pm\\.com/product/": "6pm",
                "^(?:http|https)://www\\.6pm\\.com/[a-z]+-[a-z]+-[0-9a-z]+": "6pm",
                "^(?:http|https)://www\\.6pm\\.com/p/\\w+": "6pm",
                "^(?:http|https)://(?:www|item|s)\\.(yhd|yihaodian|1mall)\\.com/(?:product|item)/\\d+": "yihaodian",
                "^(?:http|https)://item\\.yhd\\.com/item/lp/[0-9_]+": "yihaodian",
                "^(?:http|https)://try\\.yhd\\.com/(free|fee)/\\d{4,6}_\\d+/": "yihaodian",
                "^(?:http|https)://t\\.(yhd|yihaodian|1mall)\\.com/detail/\\d+": "yihaodian-tuan",
                "^(?:http|https)://item\\.gome\\.com\\.cn/[^\\?]": "gome",
                "^(?:http|https)://tao\\.gome\\.com\\.cn/p\\-D[0-9]+": "gome-tao",
                "^(?:http|https)://q\\.gome\\.com\\.cn/item/\\w[0-9]+\\.html": "gome-q",
                "^(?:http|https)://tuan\\.gome\\.com\\.cn/deal/\\w+\\.html": "gome-tuan",
                "^(?:http|https)://www\\.gomehome\\.com/product/productinfo\\?p=[0-9-]+": "gome-home",
                "^(?:http|https)://www\\.gome\\.com\\.cn/ec/rushbuy/limitbuy/itemdetail": "gome-rushbuy",
                "^(?:http|https)://item.gomehigo.hk/[0-9a-zA-Z]+-.*": "gomehigo",
                "^(?:http|https)://(?:archive-shop|shop|www|day|lux)\\.vip(shop)?\\.com/detail": "vipshop",
                "^(?:http|https)://(?:product\\.dangdang\\.com/[^\\?]*product.aspx|reco\\.dangdang\\.com/reco_pub\\.php)\\?product_id=\\d+": "dangdang",
                "^(?:http|https)://(?:product|detail)\\.dangdang\\.com/[\\d]+": "dangdang",
                "^(?:http|https)://www\\.(xiao)?mi\\.com/(goods|item)/": "xiaomi",
                "^(?:http|https)://item\\.mi\\.com/[0-9]+\\.html": "xiaomi",
                "^(?:http|https)://item\\.mi\\.com/buyphone/[a-z0-9]+": "xiaomi",
                "^(?:http|https)://item\\.mi\\.com/static/[a-z0-9]+": "xiaomi",
                "^(?:http|https)://item\\.mi\\.com/buy/[a-z0-9]+": "xiaomi",
                "^(?:http|https)://www\\.mi\\.com/(?:mi5|mimax|redminote4|note3|hongmi3s|redmipro|hongmi3|hongmi3x|mibookair|mipad2|mitv3s|mitv3s|mitv3s|mitv3|mitv3|mitv3|tvzj|hezi3s|hezi3|hezimini|shb|mivr1c|miwifi3|scooter|mibicycle|kettle|dianfanbao|micamera|xiaoyi|air2|water|water2|ihealth2|ihealth|mjsmartlamp|desklamp|mitu|cute|wangguan|shouhuan2|shouhuan|scale|mituwatch|miwifimini|miwifilite|miwifi3c|miwifi|dianyuan10000|dianyuan10000|dianyuan5000|chaxianban2|powerstrip|recharger|chongdianqi4kou|headphone|quantie|capsuleearphone|pocketaudio|littleaudio|yinxiang|speaker|radio|mimosdge|gelpen|pillowZ1|pillowZ2)/": "xiaomi",
                "^(?:http|https)://www\\.yougou\\.com/c_": "yougou",
                "^(?:http|https)://(?:outlets|www)\\.yougou\\.com/[^?]+sku-[\\w]+": "yougou",
                "^(?:http|https)://(?:outlets|seoul|www)\\.yougou\\.com/[a-z-]+/sku-[a-z0-9-]+\\.shtml": "yougou",
                "^(?:http|https)://www\\.newegg(\\.com)?\\.cn/Product/.*?\\.htm": "newegg",
                "^(?:http|https)://zhadan\\.newegg(\\.com)?\\.cn/Bomb-\\d+\\.htm": "newegg",
                "^(?:http|https)://zhadan\\.newegg\\.cn": "newegg-zhadan",
                "^(?:http|https)://tuan\\.newegg\\.cn/deal/[0-9]+\\.htm": "newegg-tuan",
                "^(?:http|https)://[a-zA-Z]+\\.womai\\.com/(.*)Product(?:\\-|\\.do\\?m?id)": "womai",
                "^(?:http|https)://www\\.yintai\\.com/product/productdetail": "yintai",
                "^(?:http|https)://item\\.yintai\\.com/": "yintai",
                "^(?:http|https)://www\\.kaola\\.com/product/\\d+\\.html": "kaola",
                "^(?:http|https)://www\\.lemall\\.com/product/": "lemall",
                "^(?:http|https)://www\\.lemall\\.com/cn/(?:tv|sale|phone)/\\w+": "lemall",
                "^(?:http|https)://www\\.lemall\\.com/(?:le_2|le_max|le_1pro|x55pro|x65|x55|x43s|x40s|umax120|chao4max70)": "lemall",
                "^(?:http|https)://www\\.lemall\\.com/(?:chao4|le_max|le_max2|le_2pro|le_2|le_max2|x40sx40s)/(?:\\w+/|)\\w+\\.html": "lemall",
                "^(?:http|https)://www\\.vmall\\.com/item/\\d+/(?:index|buy)": "vmall",
                "^(?:http|https)://www\\.vmall\\.com/product/\\d+\\.html": "vmall",
                "^(?:http|https)://www\\.feiniu\\.com/item/[-\\w]+": "feiniu",
                "^(?:http|https)://item\\.feiniu\\.com/[0-9]+": "feiniu",
                "^(?:http|https)://mall\\.jumei\\.com[^\\?]*/product_": "jumei",
                "^(?:http|https)://pop\\.jumei\\.com/i/deal/\\w+\\.html": "jumei",
                "^(?:http|https)://(gz|bj|sh)\\.jumei\\.com/i/deal/\\w+\\.html": "jumei",
                "^(?:http|https)://item\\.jumei\\.com/[0-9a-zA-Z]+\\.html": "jumei",
                "^(?:http|https)://www\\.jumeiglobal\\.com/deal/\\w+\\.html": "jumeiglobal",
                "^(?:http|https)://item\\.jumeiglobal\\.com/[0-9a-zA-Z]+\\.html": "jumeiglobal",
                "^(?:http|https)://www\\.jumeiglobal\\.com/Deal/Combination\\?": "jumeiglobal",
                "^(?:http|https)://item(\\.vt)?\\.vancl\\.com/[\\d]+\\.html": "vancl"
            },
            l = ["3", "83", "123", "25", "1", "31", "28", "129", "2", "167", "93", "7", "32", "66", "223", "134", "180", "86", "168", "19"];
        t.exports.isAvailablePage = function () {
            for (var t in a) if (r.match(new RegExp(t, "i"))) return a[t];
            return !1
        }, t.exports.isProductPage = function (t) {
            t = t || o;
            for (var e in s) if (t.match(new RegExp(e, "i"))) return s[e];
            return !1
        };
        var c = function (t) {
            var n;
            switch (t) {
                default:
                    e("#content h2").text().indexOf("您查看的商品找不到了") > -1 && (n = !0)
            }
            return n
        };
        t.exports.isInBanList = function () {
            if (self.location != top.location || self.frameElement && "IFRAME" == self.frameElement.tagName || window.top != window.self) return !0;
            var t = window.location.href;
            return location.href.indexOf("?") > 0 && (t = o.substr(0, o.indexOf("?"))), t.match(/\.kaluli.com/) ? !1 : null != t.match(/(?:cartridge|Camcorder|carters|feifei\.com\/order\/)/) ? !1 : null != t.match(/(?:cart|member|order|myhome|picture_index|handle-buy-box|chat|t.sina.com.cn|discussion|union.dangdang|eve.360buy|gwdang.com|bank.vmall|checkout|confirm|gateway|trade|http:\/\/i.taobao.com|we.taobao.com|passport.yougou.com)/gi) ? !0 : !1
        };
        var d = function () {
            if (i) return i;
            var e = "";
            return t.exports.isInBanList() ? i = {
                type: 0,
                siteName: e
            } : (e = t.exports.isProductPage()) ? ("string" != typeof e && (n.hidebar = e.hidebar, e = e.name), n.site = e, i = c(e) ? {
                type: 0,
                siteName: e
            } : {
                type: 2,
                siteName: e
            }) : (e = t.exports.isAvailablePage(), e ? ("string" != typeof e && (n.hidebar = e.hidebar, e = e.name), n.site = e, i = {
                type: 1,
                siteName: e
            }) : i = {type: 0, siteName: ""})
        };
        t.exports.init = function () {
            var t = d();
            n.site && (n.site.indexOf("taobao") > -1 || n.site.indexOf("tmall") > -1) && (n.aliSite = !0), n.supportSite = l, n.pageInfo = t
        }
    }).call(e, n(4), n(1))
}, function (t, e, n) {
    var i;
    !function (e, n) {
        "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function (t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return n(t)
        } : n(e)
    }("undefined" != typeof window ? window : this, function (o, r) {
        function a(t) {
            var e = "length" in t && t.length, n = lt.type(t);
            return "function" === n || lt.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }

        function s(t, e, n) {
            if (lt.isFunction(e)) return lt.grep(t, function (t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType) return lt.grep(t, function (t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (gt.test(e)) return lt.filter(e, t, n);
                e = lt.filter(e, t)
            }
            return lt.grep(t, function (t) {
                return lt.inArray(t, e) >= 0 !== n
            })
        }

        function l(t, e) {
            do t = t[e]; while (t && 1 !== t.nodeType);
            return t
        }

        function c(t) {
            var e = St[t] = {};
            return lt.each(t.match(kt) || [], function (t, n) {
                e[n] = !0
            }), e
        }

        function d() {
            vt.addEventListener ? (vt.removeEventListener("DOMContentLoaded", p, !1), o.removeEventListener("load", p, !1)) : (vt.detachEvent("onreadystatechange", p), o.detachEvent("onload", p))
        }

        function p() {
            (vt.addEventListener || "load" === event.type || "complete" === vt.readyState) && (d(), lt.ready())
        }

        function u(t, e, n) {
            if (void 0 === n && 1 === t.nodeType) {
                var i = "data-" + e.replace(Pt, "-$1").toLowerCase();
                if (n = t.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : jt.test(n) ? lt.parseJSON(n) : n
                    } catch (o) {
                    }
                    lt.data(t, e, n)
                } else n = void 0
            }
            return n
        }

        function h(t) {
            var e;
            for (e in t) if (("data" !== e || !lt.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function m(t, e, n, i) {
            if (lt.acceptData(t)) {
                var o, r, a = lt.expando, s = t.nodeType, l = s ? lt.cache : t, c = s ? t[a] : t[a] && a;
                if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof e) return c || (c = s ? t[a] = K.pop() || lt.guid++ : a), l[c] || (l[c] = s ? {} : {toJSON: lt.noop}), ("object" == typeof e || "function" == typeof e) && (i ? l[c] = lt.extend(l[c], e) : l[c].data = lt.extend(l[c].data, e)), r = l[c], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[lt.camelCase(e)] = n), "string" == typeof e ? (o = r[e], null == o && (o = r[lt.camelCase(e)])) : o = r, o
            }
        }

        function f(t, e, n) {
            if (lt.acceptData(t)) {
                var i, o, r = t.nodeType, a = r ? lt.cache : t, s = r ? t[lt.expando] : lt.expando;
                if (a[s]) {
                    if (e && (i = n ? a[s] : a[s].data)) {
                        lt.isArray(e) ? e = e.concat(lt.map(e, lt.camelCase)) : e in i ? e = [e] : (e = lt.camelCase(e), e = e in i ? [e] : e.split(" ")), o = e.length;
                        for (; o--;) delete i[e[o]];
                        if (n ? !h(i) : !lt.isEmptyObject(i)) return;
                    }
                    (n || (delete a[s].data, h(a[s]))) && (r ? lt.cleanData([t], !0) : at.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
                }
            }
        }

        function g() {
            return !0
        }

        function x() {
            return !1
        }

        function v() {
            try {
                return vt.activeElement
            } catch (t) {
            }
        }

        function b(t) {
            var e = qt.split("|"), n = t.createDocumentFragment();
            if (n.createElement) for (; e.length;) n.createElement(e.pop());
            return n
        }

        function y(t, e) {
            var n, i, o = 0,
                r = typeof t.getElementsByTagName !== At ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== At ? t.querySelectorAll(e || "*") : void 0;
            if (!r) for (r = [], n = t.childNodes || t; null != (i = n[o]); o++) !e || lt.nodeName(i, e) ? r.push(i) : lt.merge(r, y(i, e));
            return void 0 === e || e && lt.nodeName(t, e) ? lt.merge([t], r) : r
        }

        function w(t) {
            It.test(t.type) && (t.defaultChecked = t.checked)
        }

        function _(t, e) {
            return lt.nodeName(t, "table") && lt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function k(t) {
            return t.type = (null !== lt.find.attr(t, "type")) + "/" + t.type, t
        }

        function S(t) {
            var e = Zt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function T(t, e) {
            for (var n, i = 0; null != (n = t[i]); i++) lt._data(n, "globalEval", !e || lt._data(e[i], "globalEval"))
        }

        function C(t, e) {
            if (1 === e.nodeType && lt.hasData(t)) {
                var n, i, o, r = lt._data(t), a = lt._data(e, r), s = r.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s) for (i = 0, o = s[n].length; o > i; i++) lt.event.add(e, n, s[n][i])
                }
                a.data && (a.data = lt.extend({}, a.data))
            }
        }

        function A(t, e) {
            var n, i, o;
            if (1 === e.nodeType) {
                if (n = e.nodeName.toLowerCase(), !at.noCloneEvent && e[lt.expando]) {
                    o = lt._data(e);
                    for (i in o.events) lt.removeEvent(e, i, o.handle);
                    e.removeAttribute(lt.expando)
                }
                "script" === n && e.text !== t.text ? (k(e).text = t.text, S(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), at.html5Clone && t.innerHTML && !lt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && It.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
            }
        }

        function j(t, e) {
            var n, i = lt(e.createElement(t)).appendTo(e.body),
                r = o.getDefaultComputedStyle && (n = o.getDefaultComputedStyle(i[0])) ? n.display : lt.css(i[0], "display");
            return i.detach(), r
        }

        function P(t) {
            var e = vt, n = ie[t];
            return n || (n = j(t, e), "none" !== n && n || (ne = (ne || lt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (ne[0].contentWindow || ne[0].contentDocument).document, e.write(), e.close(), n = j(t, e), ne.detach()), ie[t] = n), n
        }

        function z(t, e) {
            return {
                get: function () {
                    var n = t();
                    if (null != n) return n ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function L(t, e) {
            if (e in t) return e;
            for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = ge.length; o--;) if (e = ge[o] + n, e in t) return e;
            return i
        }

        function M(t, e) {
            for (var n, i, o, r = [], a = 0, s = t.length; s > a; a++) i = t[a], i.style && (r[a] = lt._data(i, "olddisplay"), n = i.style.display, e ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Mt(i) && (r[a] = lt._data(i, "olddisplay", P(i.nodeName)))) : (o = Mt(i), (n && "none" !== n || !o) && lt._data(i, "olddisplay", o ? n : lt.css(i, "display"))));
            for (a = 0; s > a; a++) i = t[a], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[a] || "" : "none"));
            return t
        }

        function E(t, e, n) {
            var i = ue.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }

        function I(t, e, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > r; r += 2) "margin" === n && (a += lt.css(t, n + Lt[r], !0, o)), i ? ("content" === n && (a -= lt.css(t, "padding" + Lt[r], !0, o)), "margin" !== n && (a -= lt.css(t, "border" + Lt[r] + "Width", !0, o))) : (a += lt.css(t, "padding" + Lt[r], !0, o), "padding" !== n && (a += lt.css(t, "border" + Lt[r] + "Width", !0, o)));
            return a
        }

        function N(t, e, n) {
            var i = !0, o = "width" === e ? t.offsetWidth : t.offsetHeight, r = oe(t),
                a = at.boxSizing && "border-box" === lt.css(t, "boxSizing", !1, r);
            if (0 >= o || null == o) {
                if (o = re(t, e, r), (0 > o || null == o) && (o = t.style[e]), se.test(o)) return o;
                i = a && (at.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
            }
            return o + I(t, e, n || (a ? "border" : "content"), i, r) + "px"
        }

        function D(t, e, n, i, o) {
            return new D.prototype.init(t, e, n, i, o)
        }

        function O() {
            return setTimeout(function () {
                xe = void 0
            }), xe = lt.now()
        }

        function B(t, e) {
            var n, i = {height: t}, o = 0;
            for (e = e ? 1 : 0; 4 > o; o += 2 - e) n = Lt[o], i["margin" + n] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }

        function R(t, e, n) {
            for (var i, o = (ke[e] || []).concat(ke["*"]), r = 0, a = o.length; a > r; r++) if (i = o[r].call(n, e, t)) return i
        }

        function q(t, e, n) {
            var i, o, r, a, s, l, c, d, p = this, u = {}, h = t.style, m = t.nodeType && Mt(t),
                f = lt._data(t, "fxshow");
            n.queue || (s = lt._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
                s.unqueued || l()
            }), s.unqueued++, p.always(function () {
                p.always(function () {
                    s.unqueued--, lt.queue(t, "fx").length || s.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = lt.css(t, "display"), d = "none" === c ? lt._data(t, "olddisplay") || P(t.nodeName) : c, "inline" === d && "none" === lt.css(t, "float") && (at.inlineBlockNeedsLayout && "inline" !== P(t.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", at.shrinkWrapBlocks() || p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            }));
            for (i in e) if (o = e[i], be.exec(o)) {
                if (delete e[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
                    if ("show" !== o || !f || void 0 === f[i]) continue;
                    m = !0
                }
                u[i] = f && f[i] || lt.style(t, i)
            } else c = void 0;
            if (lt.isEmptyObject(u)) "inline" === ("none" === c ? P(t.nodeName) : c) && (h.display = c); else {
                f ? "hidden" in f && (m = f.hidden) : f = lt._data(t, "fxshow", {}), r && (f.hidden = !m), m ? lt(t).show() : p.done(function () {
                    lt(t).hide()
                }), p.done(function () {
                    var e;
                    lt._removeData(t, "fxshow");
                    for (e in u) lt.style(t, e, u[e])
                });
                for (i in u) a = R(m ? f[i] : 0, i, p), i in f || (f[i] = a.start, m && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function H(t, e) {
            var n, i, o, r, a;
            for (n in t) if (i = lt.camelCase(n), o = e[i], r = t[n], lt.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), a = lt.cssHooks[i], a && "expand" in a) {
                r = a.expand(r), delete t[i];
                for (n in r) n in t || (t[n] = r[n], e[n] = o)
            } else e[i] = o
        }

        function F(t, e, n) {
            var i, o, r = 0, a = _e.length, s = lt.Deferred().always(function () {
                delete l.elem
            }), l = function () {
                if (o) return !1;
                for (var e = xe || O(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, r = 1 - i, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(r);
                return s.notifyWith(t, [c, r, n]), 1 > r && l ? n : (s.resolveWith(t, [c]), !1)
            }, c = s.promise({
                elem: t,
                props: lt.extend({}, e),
                opts: lt.extend(!0, {specialEasing: {}}, n),
                originalProperties: e,
                originalOptions: n,
                startTime: xe || O(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var i = lt.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (e) {
                    var n = 0, i = e ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i > n; n++) c.tweens[n].run(1);
                    return e ? s.resolveWith(t, [c, e]) : s.rejectWith(t, [c, e]), this
                }
            }), d = c.props;
            for (H(d, c.opts.specialEasing); a > r; r++) if (i = _e[r].call(c, t, d, c.opts)) return i;
            return lt.map(d, R, c), lt.isFunction(c.opts.start) && c.opts.start.call(t, c), lt.fx.timer(lt.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function W(t) {
            return function (e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0, r = e.toLowerCase().match(kt) || [];
                if (lt.isFunction(n)) for (; i = r[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function $(t, e, n, i) {
            function o(s) {
                var l;
                return r[s] = !0, lt.each(t[s] || [], function (t, s) {
                    var c = s(e, n, i);
                    return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
                }), l
            }

            var r = {}, a = t === Ge;
            return o(e.dataTypes[0]) || !r["*"] && o("*")
        }

        function X(t, e) {
            var n, i, o = lt.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
            return n && lt.extend(!0, t, n), t
        }

        function Y(t, e, n) {
            for (var i, o, r, a, s = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
            if (o) for (a in s) if (s[a] && s[a].test(o)) {
                l.unshift(a);
                break
            }
            if (l[0] in n) r = l[0]; else {
                for (a in n) {
                    if (!l[0] || t.converters[a + " " + l[0]]) {
                        r = a;
                        break
                    }
                    i || (i = a)
                }
                r = r || i
            }
            return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
        }

        function G(t, e, n, i) {
            var o, r, a, s, l, c = {}, d = t.dataTypes.slice();
            if (d[1]) for (a in t.converters) c[a.toLowerCase()] = t.converters[a];
            for (r = d.shift(); r;) if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = d.shift()) if ("*" === r) r = l; else if ("*" !== l && l !== r) {
                if (a = c[l + " " + r] || c["* " + r], !a) for (o in c) if (s = o.split(" "), s[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                    a === !0 ? a = c[o] : c[o] !== !0 && (r = s[0], d.unshift(s[1]));
                    break
                }
                if (a !== !0) if (a && t["throws"]) e = a(e); else try {
                    e = a(e)
                } catch (p) {
                    return {state: "parsererror", error: a ? p : "No conversion from " + l + " to " + r}
                }
            }
            return {state: "success", data: e}
        }

        function U(t, e, n, i) {
            var o;
            if (lt.isArray(e)) lt.each(e, function (e, o) {
                n || Ze.test(t) ? i(t, o) : U(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
            }); else if (n || "object" !== lt.type(e)) i(t, e); else for (o in e) U(t + "[" + o + "]", e[o], n, i)
        }

        function V() {
            try {
                return new o.XMLHttpRequest
            } catch (t) {
            }
        }

        function J() {
            try {
                return new o.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {
            }
        }

        function Z(t) {
            return lt.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
        }

        var K = [], Q = K.slice, tt = K.concat, et = K.push, nt = K.indexOf, it = {}, ot = it.toString,
            rt = it.hasOwnProperty, at = {}, st = "1.11.3", lt = function (t, e) {
                return new lt.fn.init(t, e)
            }, ct = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, dt = /^-ms-/, pt = /-([\da-z])/gi, ut = function (t, e) {
                return e.toUpperCase()
            };
        lt.fn = lt.prototype = {
            jquery: st, constructor: lt, selector: "", length: 0, toArray: function () {
                return Q.call(this)
            }, get: function (t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : Q.call(this)
            }, pushStack: function (t) {
                var e = lt.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            }, each: function (t, e) {
                return lt.each(this, t, e)
            }, map: function (t) {
                return this.pushStack(lt.map(this, function (e, n) {
                    return t.call(e, n, e)
                }))
            }, slice: function () {
                return this.pushStack(Q.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (t) {
                var e = this.length, n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: et, sort: K.sort, splice: K.splice
        }, lt.extend = lt.fn.extend = function () {
            var t, e, n, i, o, r, a = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || lt.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++) if (null != (o = arguments[s])) for (i in o) t = a[i], n = o[i], a !== n && (c && n && (lt.isPlainObject(n) || (e = lt.isArray(n))) ? (e ? (e = !1, r = t && lt.isArray(t) ? t : []) : r = t && lt.isPlainObject(t) ? t : {}, a[i] = lt.extend(c, r, n)) : void 0 !== n && (a[i] = n));
            return a
        }, lt.extend({
            expando: "jQuery" + (st + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
                throw new Error(t)
            }, noop: function () {
            }, isFunction: function (t) {
                return "function" === lt.type(t)
            }, isArray: Array.isArray || function (t) {
                return "array" === lt.type(t)
            }, isWindow: function (t) {
                return null != t && t == t.window
            }, isNumeric: function (t) {
                return !lt.isArray(t) && t - parseFloat(t) + 1 >= 0
            }, isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0
            }, isPlainObject: function (t) {
                var e;
                if (!t || "object" !== lt.type(t) || t.nodeType || lt.isWindow(t)) return !1;
                try {
                    if (t.constructor && !rt.call(t, "constructor") && !rt.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                if (at.ownLast) for (e in t) return rt.call(t, e);
                for (e in t) ;
                return void 0 === e || rt.call(t, e)
            }, type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? it[ot.call(t)] || "object" : typeof t
            }, globalEval: function (t) {
                t && lt.trim(t) && (o.execScript || function (t) {
                    o.eval.call(o, t)
                })(t)
            }, camelCase: function (t) {
                return t.replace(dt, "ms-").replace(pt, ut)
            }, nodeName: function (t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            }, each: function (t, e, n) {
                var i, o = 0, r = t.length, s = a(t);
                if (n) {
                    if (s) for (; r > o && (i = e.apply(t[o], n), i !== !1); o++) ; else for (o in t) if (i = e.apply(t[o], n), i === !1) break
                } else if (s) for (; r > o && (i = e.call(t[o], o, t[o]), i !== !1); o++) ; else for (o in t) if (i = e.call(t[o], o, t[o]), i === !1) break;
                return t
            }, trim: function (t) {
                return null == t ? "" : (t + "").replace(ct, "")
            }, makeArray: function (t, e) {
                var n = e || [];
                return null != t && (a(Object(t)) ? lt.merge(n, "string" == typeof t ? [t] : t) : et.call(n, t)), n
            }, inArray: function (t, e, n) {
                var i;
                if (e) {
                    if (nt) return nt.call(e, t, n);
                    for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++) if (n in e && e[n] === t) return n
                }
                return -1
            }, merge: function (t, e) {
                for (var n = +e.length, i = 0, o = t.length; n > i;) t[o++] = e[i++];
                if (n !== n) for (; void 0 !== e[i];) t[o++] = e[i++];
                return t.length = o, t
            }, grep: function (t, e, n) {
                for (var i, o = [], r = 0, a = t.length, s = !n; a > r; r++) i = !e(t[r], r), i !== s && o.push(t[r]);
                return o
            }, map: function (t, e, n) {
                var i, o = 0, r = t.length, s = a(t), l = [];
                if (s) for (; r > o; o++) i = e(t[o], o, n), null != i && l.push(i); else for (o in t) i = e(t[o], o, n), null != i && l.push(i);
                return tt.apply([], l)
            }, guid: 1, proxy: function (t, e) {
                var n, i, o;
                return "string" == typeof e && (o = t[e], e = t, t = o), lt.isFunction(t) ? (n = Q.call(arguments, 2), i = function () {
                    return t.apply(e || this, n.concat(Q.call(arguments)))
                }, i.guid = t.guid = t.guid || lt.guid++, i) : void 0
            }, now: function () {
                return +new Date
            }, support: at
        }), lt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
            it["[object " + e + "]"] = e.toLowerCase()
        });
        var ht = function (t) {
            function e(t, e, n, i) {
                var o, r, a, s, l, c, p, h, m, f;
                if ((e ? e.ownerDocument || e : q) !== M && L(e), e = e || M, n = n || [], s = e.nodeType, "string" != typeof t || !t || 1 !== s && 9 !== s && 11 !== s) return n;
                if (!i && I) {
                    if (11 !== s && (o = vt.exec(t))) if (a = o[1]) {
                        if (9 === s) {
                            if (r = e.getElementById(a), !r || !r.parentNode) return n;
                            if (r.id === a) return n.push(r), n
                        } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(a)) && B(e, r) && r.id === a) return n.push(r), n
                    } else {
                        if (o[2]) return K.apply(n, e.getElementsByTagName(t)), n;
                        if ((a = o[3]) && w.getElementsByClassName) return K.apply(n, e.getElementsByClassName(a)), n
                    }
                    if (w.qsa && (!N || !N.test(t))) {
                        if (h = p = R, m = e, f = 1 !== s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
                            for (c = T(t), (p = e.getAttribute("id")) ? h = p.replace(yt, "\\$&") : e.setAttribute("id", h), h = "[id='" + h + "'] ", l = c.length; l--;) c[l] = h + u(c[l]);
                            m = bt.test(t) && d(e.parentNode) || e, f = c.join(",")
                        }
                        if (f) try {
                            return K.apply(n, m.querySelectorAll(f)), n
                        } catch (g) {
                        } finally {
                            p || e.removeAttribute("id")
                        }
                    }
                }
                return A(t.replace(lt, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > _.cacheLength && delete t[e.shift()], t[n + " "] = i
                }

                var e = [];
                return t
            }

            function i(t) {
                return t[R] = !0, t
            }

            function o(t) {
                var e = M.createElement("div");
                try {
                    return !!t(e)
                } catch (n) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function r(t, e) {
                for (var n = t.split("|"), i = t.length; i--;) _.attrHandle[n[i]] = e
            }

            function a(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
                if (i) return i;
                if (n) for (; n = n.nextSibling;) if (n === e) return -1;
                return t ? 1 : -1
            }

            function s(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }

            function l(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function c(t) {
                return i(function (e) {
                    return e = +e, i(function (n, i) {
                        for (var o, r = t([], n.length, e), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function d(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function p() {
            }

            function u(t) {
                for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                return i
            }

            function h(t, e, n) {
                var i = e.dir, o = n && "parentNode" === i, r = F++;
                return e.first ? function (e, n, r) {
                    for (; e = e[i];) if (1 === e.nodeType || o) return t(e, n, r)
                } : function (e, n, a) {
                    var s, l, c = [H, r];
                    if (a) {
                        for (; e = e[i];) if ((1 === e.nodeType || o) && t(e, n, a)) return !0
                    } else for (; e = e[i];) if (1 === e.nodeType || o) {
                        if (l = e[R] || (e[R] = {}), (s = l[i]) && s[0] === H && s[1] === r) return c[2] = s[2];
                        if (l[i] = c, c[2] = t(e, n, a)) return !0
                    }
                }
            }

            function m(t) {
                return t.length > 1 ? function (e, n, i) {
                    for (var o = t.length; o--;) if (!t[o](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function f(t, n, i) {
                for (var o = 0, r = n.length; r > o; o++) e(t, n[o], i);
                return i
            }

            function g(t, e, n, i, o) {
                for (var r, a = [], s = 0, l = t.length, c = null != e; l > s; s++) (r = t[s]) && (!n || n(r, i, o)) && (a.push(r), c && e.push(s));
                return a
            }

            function x(t, e, n, o, r, a) {
                return o && !o[R] && (o = x(o)), r && !r[R] && (r = x(r, a)), i(function (i, a, s, l) {
                    var c, d, p, u = [], h = [], m = a.length, x = i || f(e || "*", s.nodeType ? [s] : s, []),
                        v = !t || !i && e ? x : g(x, u, t, s, l), b = n ? r || (i ? t : m || o) ? [] : a : v;
                    if (n && n(v, b, s, l), o) for (c = g(b, h), o(c, [], s, l), d = c.length; d--;) (p = c[d]) && (b[h[d]] = !(v[h[d]] = p));
                    if (i) {
                        if (r || t) {
                            if (r) {
                                for (c = [], d = b.length; d--;) (p = b[d]) && c.push(v[d] = p);
                                r(null, b = [], c, l)
                            }
                            for (d = b.length; d--;) (p = b[d]) && (c = r ? tt(i, p) : u[d]) > -1 && (i[c] = !(a[c] = p))
                        }
                    } else b = g(b === a ? b.splice(m, b.length) : b), r ? r(null, a, b, l) : K.apply(a, b)
                })
            }

            function v(t) {
                for (var e, n, i, o = t.length, r = _.relative[t[0].type], a = r || _.relative[" "], s = r ? 1 : 0, l = h(function (t) {
                    return t === e
                }, a, !0), c = h(function (t) {
                    return tt(e, t) > -1
                }, a, !0), d = [function (t, n, i) {
                    var o = !r && (i || n !== j) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                    return e = null, o
                }]; o > s; s++) if (n = _.relative[t[s].type]) d = [h(m(d), n)]; else {
                    if (n = _.filter[t[s].type].apply(null, t[s].matches), n[R]) {
                        for (i = ++s; o > i && !_.relative[t[i].type]; i++) ;
                        return x(s > 1 && m(d), s > 1 && u(t.slice(0, s - 1).concat({value: " " === t[s - 2].type ? "*" : ""})).replace(lt, "$1"), n, i > s && v(t.slice(s, i)), o > i && v(t = t.slice(i)), o > i && u(t))
                    }
                    d.push(n)
                }
                return m(d)
            }

            function b(t, n) {
                var o = n.length > 0, r = t.length > 0, a = function (i, a, s, l, c) {
                    var d, p, u, h = 0, m = "0", f = i && [], x = [], v = j, b = i || r && _.find.TAG("*", c),
                        y = H += null == v ? 1 : Math.random() || .1, w = b.length;
                    for (c && (j = a !== M && a); m !== w && null != (d = b[m]); m++) {
                        if (r && d) {
                            for (p = 0; u = t[p++];) if (u(d, a, s)) {
                                l.push(d);
                                break
                            }
                            c && (H = y)
                        }
                        o && ((d = !u && d) && h--, i && f.push(d))
                    }
                    if (h += m, o && m !== h) {
                        for (p = 0; u = n[p++];) u(f, x, a, s);
                        if (i) {
                            if (h > 0) for (; m--;) f[m] || x[m] || (x[m] = J.call(l));
                            x = g(x)
                        }
                        K.apply(l, x), c && !i && x.length > 0 && h + n.length > 1 && e.uniqueSort(l)
                    }
                    return c && (H = y, j = v), f
                };
                return o ? i(a) : a
            }

            var y, w, _, k, S, T, C, A, j, P, z, L, M, E, I, N, D, O, B, R = "sizzle" + 1 * new Date, q = t.document,
                H = 0, F = 0, W = n(), $ = n(), X = n(), Y = function (t, e) {
                    return t === e && (z = !0), 0
                }, G = 1 << 31, U = {}.hasOwnProperty, V = [], J = V.pop, Z = V.push, K = V.push, Q = V.slice,
                tt = function (t, e) {
                    for (var n = 0, i = t.length; i > n; n++) if (t[n] === e) return n;
                    return -1
                },
                et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                nt = "[\\x20\\t\\r\\n\\f]", it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ot = it.replace("w", "w#"),
                rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + nt + "*\\]",
                at = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
                st = new RegExp(nt + "+", "g"),
                lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                ct = new RegExp("^" + nt + "*," + nt + "*"),
                dt = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                pt = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"), ut = new RegExp(at),
                ht = new RegExp("^" + ot + "$"), mt = {
                    ID: new RegExp("^#(" + it + ")"),
                    CLASS: new RegExp("^\\.(" + it + ")"),
                    TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + rt),
                    PSEUDO: new RegExp("^" + at),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + et + ")$", "i"),
                    needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                }, ft = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i, xt = /^[^{]+\{\s*\[native \w/,
                vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, bt = /[+~]/, yt = /'|\\/g,
                wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"), _t = function (t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                }, kt = function () {
                    L()
                };
            try {
                K.apply(V = Q.call(q.childNodes), q.childNodes), V[q.childNodes.length].nodeType
            } catch (St) {
                K = {
                    apply: V.length ? function (t, e) {
                        Z.apply(t, Q.call(e))
                    } : function (t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];) ;
                        t.length = n - 1
                    }
                }
            }
            w = e.support = {}, S = e.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, L = e.setDocument = function (t) {
                var e, n, i = t ? t.ownerDocument || t : q;
                return i !== M && 9 === i.nodeType && i.documentElement ? (M = i, E = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", kt, !1) : n.attachEvent && n.attachEvent("onunload", kt)), I = !S(i), w.attributes = o(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), w.getElementsByTagName = o(function (t) {
                    return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
                }), w.getElementsByClassName = xt.test(i.getElementsByClassName), w.getById = o(function (t) {
                    return E.appendChild(t).id = R, !i.getElementsByName || !i.getElementsByName(R).length
                }), w.getById ? (_.find.ID = function (t, e) {
                    if ("undefined" != typeof e.getElementById && I) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : []
                    }
                }, _.filter.ID = function (t) {
                    var e = t.replace(wt, _t);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete _.find.ID, _.filter.ID = function (t) {
                    var e = t.replace(wt, _t);
                    return function (t) {
                        var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), _.find.TAG = w.getElementsByTagName ? function (t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
                } : function (t, e) {
                    var n, i = [], o = 0, r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, _.find.CLASS = w.getElementsByClassName && function (t, e) {
                    return I ? e.getElementsByClassName(t) : void 0
                }, D = [], N = [], (w.qsa = xt.test(i.querySelectorAll)) && (o(function (t) {
                    E.appendChild(t).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || N.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + R + "-]").length || N.push("~="), t.querySelectorAll(":checked").length || N.push(":checked"), t.querySelectorAll("a#" + R + "+*").length || N.push(".#.+[+~]")
                }), o(function (t) {
                    var e = i.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && N.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), N.push(",.*:")
                })), (w.matchesSelector = xt.test(O = E.matches || E.webkitMatchesSelector || E.mozMatchesSelector || E.oMatchesSelector || E.msMatchesSelector)) && o(function (t) {
                    w.disconnectedMatch = O.call(t, "div"), O.call(t, "[s!='']:x"), D.push("!=", at)
                }), N = N.length && new RegExp(N.join("|")), D = D.length && new RegExp(D.join("|")), e = xt.test(E.compareDocumentPosition), B = e || xt.test(E.contains) ? function (t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function (t, e) {
                    if (e) for (; e = e.parentNode;) if (e === t) return !0;
                    return !1
                }, Y = e ? function (t, e) {
                    if (t === e) return z = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === q && B(q, t) ? -1 : e === i || e.ownerDocument === q && B(q, e) ? 1 : P ? tt(P, t) - tt(P, e) : 0 : 4 & n ? -1 : 1)
                } : function (t, e) {
                    if (t === e) return z = !0, 0;
                    var n, o = 0, r = t.parentNode, s = e.parentNode, l = [t], c = [e];
                    if (!r || !s) return t === i ? -1 : e === i ? 1 : r ? -1 : s ? 1 : P ? tt(P, t) - tt(P, e) : 0;
                    if (r === s) return a(t, e);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (n = e; n = n.parentNode;) c.unshift(n);
                    for (; l[o] === c[o];) o++;
                    return o ? a(l[o], c[o]) : l[o] === q ? -1 : c[o] === q ? 1 : 0
                }, i) : M
            }, e.matches = function (t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function (t, n) {
                if ((t.ownerDocument || t) !== M && L(t), n = n.replace(pt, "='$1']"), w.matchesSelector && I && (!D || !D.test(n)) && (!N || !N.test(n))) try {
                    var i = O.call(t, n);
                    if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (o) {
                }
                return e(n, M, null, [t]).length > 0
            }, e.contains = function (t, e) {
                return (t.ownerDocument || t) !== M && L(t), B(t, e)
            }, e.attr = function (t, e) {
                (t.ownerDocument || t) !== M && L(t);
                var n = _.attrHandle[e.toLowerCase()],
                    i = n && U.call(_.attrHandle, e.toLowerCase()) ? n(t, e, !I) : void 0;
                return void 0 !== i ? i : w.attributes || !I ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function (t) {
                var e, n = [], i = 0, o = 0;
                if (z = !w.detectDuplicates, P = !w.sortStable && t.slice(0), t.sort(Y), z) {
                    for (; e = t[o++];) e === t[o] && (i = n.push(o));
                    for (; i--;) t.splice(n[i], 1)
                }
                return P = null, t
            }, k = e.getText = function (t) {
                var e, n = "", i = 0, o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += k(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else for (; e = t[i++];) n += k(e);
                return n
            }, _ = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: mt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(wt, _t), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, _t), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    }, CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    }, PSEUDO: function (t) {
                        var e, n = !t[6] && t[2];
                        return mt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ut.test(n) && (e = T(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(wt, _t).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    }, CLASS: function (t) {
                        var e = W[t + " "];
                        return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && W(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    }, ATTR: function (t, n, i) {
                        return function (o) {
                            var r = e.attr(o, t);
                            return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    }, CHILD: function (t, e, n, i, o) {
                        var r = "nth" !== t.slice(0, 3), a = "last" !== t.slice(-4), s = "of-type" === e;
                        return 1 === i && 0 === o ? function (t) {
                            return !!t.parentNode
                        } : function (e, n, l) {
                            var c, d, p, u, h, m, f = r !== a ? "nextSibling" : "previousSibling", g = e.parentNode,
                                x = s && e.nodeName.toLowerCase(), v = !l && !s;
                            if (g) {
                                if (r) {
                                    for (; f;) {
                                        for (p = e; p = p[f];) if (s ? p.nodeName.toLowerCase() === x : 1 === p.nodeType) return !1;
                                        m = f = "only" === t && !m && "nextSibling"
                                    }
                                    return !0
                                }
                                if (m = [a ? g.firstChild : g.lastChild], a && v) {
                                    for (d = g[R] || (g[R] = {}), c = d[t] || [], h = c[0] === H && c[1], u = c[0] === H && c[2], p = h && g.childNodes[h]; p = ++h && p && p[f] || (u = h = 0) || m.pop();) if (1 === p.nodeType && ++u && p === e) {
                                        d[t] = [H, h, u];
                                        break
                                    }
                                } else if (v && (c = (e[R] || (e[R] = {}))[t]) && c[0] === H) u = c[1]; else for (; (p = ++h && p && p[f] || (u = h = 0) || m.pop()) && ((s ? p.nodeName.toLowerCase() !== x : 1 !== p.nodeType) || !++u || (v && ((p[R] || (p[R] = {}))[t] = [H, u]), p !== e));) ;
                                return u -= o, u === i || u % i === 0 && u / i >= 0
                            }
                        }
                    }, PSEUDO: function (t, n) {
                        var o, r = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return r[R] ? r(n) : r.length > 1 ? (o = [t, t, "", n], _.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                            for (var i, o = r(t, n), a = o.length; a--;) i = tt(t, o[a]), t[i] = !(e[i] = o[a])
                        }) : function (t) {
                            return r(t, 0, o)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function (t) {
                        var e = [], n = [], o = C(t.replace(lt, "$1"));
                        return o[R] ? i(function (t, e, n, i) {
                            for (var r, a = o(t, null, i, []), s = t.length; s--;) (r = a[s]) && (t[s] = !(e[s] = r))
                        }) : function (t, i, r) {
                            return e[0] = t, o(e, null, r, n), e[0] = null, !n.pop()
                        }
                    }), has: i(function (t) {
                        return function (n) {
                            return e(t, n).length > 0
                        }
                    }), contains: i(function (t) {
                        return t = t.replace(wt, _t), function (e) {
                            return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                        }
                    }), lang: i(function (t) {
                        return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, _t).toLowerCase(), function (e) {
                            var n;
                            do if (n = I ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                    }), target: function (e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    }, root: function (t) {
                        return t === E
                    }, focus: function (t) {
                        return t === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    }, enabled: function (t) {
                        return t.disabled === !1
                    }, disabled: function (t) {
                        return t.disabled === !0
                    }, checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    }, selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    }, empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                        return !0
                    }, parent: function (t) {
                        return !_.pseudos.empty(t)
                    }, header: function (t) {
                        return gt.test(t.nodeName)
                    }, input: function (t) {
                        return ft.test(t.nodeName)
                    }, button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    }, text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    }, first: c(function () {
                        return [0]
                    }), last: c(function (t, e) {
                        return [e - 1]
                    }), eq: c(function (t, e, n) {
                        return [0 > n ? n + e : n]
                    }), even: c(function (t, e) {
                        for (var n = 0; e > n; n += 2) t.push(n);
                        return t
                    }), odd: c(function (t, e) {
                        for (var n = 1; e > n; n += 2) t.push(n);
                        return t
                    }), lt: c(function (t, e, n) {
                        for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }), gt: c(function (t, e, n) {
                        for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }, _.pseudos.nth = _.pseudos.eq;
            for (y in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) _.pseudos[y] = s(y);
            for (y in{submit: !0, reset: !0}) _.pseudos[y] = l(y);
            return p.prototype = _.filters = _.pseudos, _.setFilters = new p, T = e.tokenize = function (t, n) {
                var i, o, r, a, s, l, c, d = $[t + " "];
                if (d) return n ? 0 : d.slice(0);
                for (s = t, l = [], c = _.preFilter; s;) {
                    (!i || (o = ct.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = dt.exec(s)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(lt, " ")
                    }), s = s.slice(i.length));
                    for (a in _.filter) !(o = mt[a].exec(s)) || c[a] && !(o = c[a](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: a,
                        matches: o
                    }), s = s.slice(i.length));
                    if (!i) break
                }
                return n ? s.length : s ? e.error(t) : $(t, l).slice(0)
            }, C = e.compile = function (t, e) {
                var n, i = [], o = [], r = X[t + " "];
                if (!r) {
                    for (e || (e = T(t)), n = e.length; n--;) r = v(e[n]), r[R] ? i.push(r) : o.push(r);
                    r = X(t, b(o, i)), r.selector = t
                }
                return r
            }, A = e.select = function (t, e, n, i) {
                var o, r, a, s, l, c = "function" == typeof t && t, p = !i && T(t = c.selector || t);
                if (n = n || [], 1 === p.length) {
                    if (r = p[0] = p[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && w.getById && 9 === e.nodeType && I && _.relative[r[1].type]) {
                        if (e = (_.find.ID(a.matches[0].replace(wt, _t), e) || [])[0], !e) return n;
                        c && (e = e.parentNode), t = t.slice(r.shift().value.length)
                    }
                    for (o = mt.needsContext.test(t) ? 0 : r.length; o-- && (a = r[o], !_.relative[s = a.type]);) if ((l = _.find[s]) && (i = l(a.matches[0].replace(wt, _t), bt.test(r[0].type) && d(e.parentNode) || e))) {
                        if (r.splice(o, 1), t = i.length && u(r), !t) return K.apply(n, i), n;
                        break
                    }
                }
                return (c || C(t, p))(i, e, !I, n, bt.test(t) && d(e.parentNode) || e), n
            }, w.sortStable = R.split("").sort(Y).join("") === R, w.detectDuplicates = !!z, L(), w.sortDetached = o(function (t) {
                return 1 & t.compareDocumentPosition(M.createElement("div"))
            }), o(function (t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function (t, e, n) {
                return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), w.attributes && o(function (t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || r("value", function (t, e, n) {
                return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), o(function (t) {
                return null == t.getAttribute("disabled")
            }) || r(et, function (t, e, n) {
                var i;
                return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(o);
        lt.find = ht, lt.expr = ht.selectors, lt.expr[":"] = lt.expr.pseudos, lt.unique = ht.uniqueSort, lt.text = ht.getText, lt.isXMLDoc = ht.isXML, lt.contains = ht.contains;
        var mt = lt.expr.match.needsContext, ft = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, gt = /^.[^:#\[\.,]*$/;
        lt.filter = function (t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? lt.find.matchesSelector(i, t) ? [i] : [] : lt.find.matches(t, lt.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        }, lt.fn.extend({
            find: function (t) {
                var e, n = [], i = this, o = i.length;
                if ("string" != typeof t) return this.pushStack(lt(t).filter(function () {
                    for (e = 0; o > e; e++) if (lt.contains(i[e], this)) return !0;
                }));
                for (e = 0; o > e; e++) lt.find(t, i[e], n);
                return n = this.pushStack(o > 1 ? lt.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            }, filter: function (t) {
                return this.pushStack(s(this, t || [], !1))
            }, not: function (t) {
                return this.pushStack(s(this, t || [], !0))
            }, is: function (t) {
                return !!s(this, "string" == typeof t && mt.test(t) ? lt(t) : t || [], !1).length
            }
        });
        var xt, vt = o.document, bt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, yt = lt.fn.init = function (t, e) {
            var n, i;
            if (!t) return this;
            if ("string" == typeof t) {
                if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : bt.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || xt).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof lt ? e[0] : e, lt.merge(this, lt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : vt, !0)), ft.test(n[1]) && lt.isPlainObject(e)) for (n in e) lt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                if (i = vt.getElementById(n[2]), i && i.parentNode) {
                    if (i.id !== n[2]) return xt.find(t);
                    this.length = 1, this[0] = i
                }
                return this.context = vt, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : lt.isFunction(t) ? "undefined" != typeof xt.ready ? xt.ready(t) : t(lt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), lt.makeArray(t, this))
        };
        yt.prototype = lt.fn, xt = lt(vt);
        var wt = /^(?:parents|prev(?:Until|All))/, _t = {children: !0, contents: !0, next: !0, prev: !0};
        lt.extend({
            dir: function (t, e, n) {
                for (var i = [], o = t[e]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !lt(o).is(n));) 1 === o.nodeType && i.push(o), o = o[e];
                return i
            }, sibling: function (t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            }
        }), lt.fn.extend({
            has: function (t) {
                var e, n = lt(t, this), i = n.length;
                return this.filter(function () {
                    for (e = 0; i > e; e++) if (lt.contains(this, n[e])) return !0
                })
            }, closest: function (t, e) {
                for (var n, i = 0, o = this.length, r = [], a = mt.test(t) || "string" != typeof t ? lt(t, e || this.context) : 0; o > i; i++) for (n = this[i]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && lt.find.matchesSelector(n, t))) {
                    r.push(n);
                    break
                }
                return this.pushStack(r.length > 1 ? lt.unique(r) : r)
            }, index: function (t) {
                return t ? "string" == typeof t ? lt.inArray(this[0], lt(t)) : lt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (t, e) {
                return this.pushStack(lt.unique(lt.merge(this.get(), lt(t, e))))
            }, addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), lt.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            }, parents: function (t) {
                return lt.dir(t, "parentNode")
            }, parentsUntil: function (t, e, n) {
                return lt.dir(t, "parentNode", n)
            }, next: function (t) {
                return l(t, "nextSibling")
            }, prev: function (t) {
                return l(t, "previousSibling")
            }, nextAll: function (t) {
                return lt.dir(t, "nextSibling")
            }, prevAll: function (t) {
                return lt.dir(t, "previousSibling")
            }, nextUntil: function (t, e, n) {
                return lt.dir(t, "nextSibling", n)
            }, prevUntil: function (t, e, n) {
                return lt.dir(t, "previousSibling", n)
            }, siblings: function (t) {
                return lt.sibling((t.parentNode || {}).firstChild, t)
            }, children: function (t) {
                return lt.sibling(t.firstChild)
            }, contents: function (t) {
                return lt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : lt.merge([], t.childNodes)
            }
        }, function (t, e) {
            lt.fn[t] = function (n, i) {
                var o = lt.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = lt.filter(i, o)), this.length > 1 && (_t[t] || (o = lt.unique(o)), wt.test(t) && (o = o.reverse())), this.pushStack(o)
            }
        });
        var kt = /\S+/g, St = {};
        lt.Callbacks = function (t) {
            t = "string" == typeof t ? St[t] || c(t) : lt.extend({}, t);
            var e, n, i, o, r, a, s = [], l = !t.once && [], d = function (c) {
                for (n = t.memory && c, i = !0, r = a || 0, a = 0, o = s.length, e = !0; s && o > r; r++) if (s[r].apply(c[0], c[1]) === !1 && t.stopOnFalse) {
                    n = !1;
                    break
                }
                e = !1, s && (l ? l.length && d(l.shift()) : n ? s = [] : p.disable())
            }, p = {
                add: function () {
                    if (s) {
                        var i = s.length;
                        !function r(e) {
                            lt.each(e, function (e, n) {
                                var i = lt.type(n);
                                "function" === i ? t.unique && p.has(n) || s.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        }(arguments), e ? o = s.length : n && (a = i, d(n))
                    }
                    return this
                }, remove: function () {
                    return s && lt.each(arguments, function (t, n) {
                        for (var i; (i = lt.inArray(n, s, i)) > -1;) s.splice(i, 1), e && (o >= i && o--, r >= i && r--)
                    }), this
                }, has: function (t) {
                    return t ? lt.inArray(t, s) > -1 : !(!s || !s.length)
                }, empty: function () {
                    return s = [], o = 0, this
                }, disable: function () {
                    return s = l = n = void 0, this
                }, disabled: function () {
                    return !s
                }, lock: function () {
                    return l = void 0, n || p.disable(), this
                }, locked: function () {
                    return !l
                }, fireWith: function (t, n) {
                    return !s || i && !l || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? l.push(n) : d(n)), this
                }, fire: function () {
                    return p.fireWith(this, arguments), this
                }, fired: function () {
                    return !!i
                }
            };
            return p
        }, lt.extend({
            Deferred: function (t) {
                var e = [["resolve", "done", lt.Callbacks("once memory"), "resolved"], ["reject", "fail", lt.Callbacks("once memory"), "rejected"], ["notify", "progress", lt.Callbacks("memory")]],
                    n = "pending", i = {
                        state: function () {
                            return n
                        }, always: function () {
                            return o.done(arguments).fail(arguments), this
                        }, then: function () {
                            var t = arguments;
                            return lt.Deferred(function (n) {
                                lt.each(e, function (e, r) {
                                    var a = lt.isFunction(t[e]) && t[e];
                                    o[r[1]](function () {
                                        var t = a && a.apply(this, arguments);
                                        t && lt.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        }, promise: function (t) {
                            return null != t ? lt.extend(t, i) : i
                        }
                    }, o = {};
                return i.pipe = i.then, lt.each(e, function (t, r) {
                    var a = r[2], s = r[3];
                    i[r[1]] = a.add, s && a.add(function () {
                        n = s
                    }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function () {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
                    }, o[r[0] + "With"] = a.fireWith
                }), i.promise(o), t && t.call(o, o), o
            }, when: function (t) {
                var e, n, i, o = 0, r = Q.call(arguments), a = r.length,
                    s = 1 !== a || t && lt.isFunction(t.promise) ? a : 0, l = 1 === s ? t : lt.Deferred(),
                    c = function (t, n, i) {
                        return function (o) {
                            n[t] = this, i[t] = arguments.length > 1 ? Q.call(arguments) : o, i === e ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                        }
                    };
                if (a > 1) for (e = new Array(a), n = new Array(a), i = new Array(a); a > o; o++) r[o] && lt.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, e)) : --s;
                return s || l.resolveWith(i, r), l.promise()
            }
        });
        var Tt;
        lt.fn.ready = function (t) {
            return lt.ready.promise().done(t), this
        }, lt.extend({
            isReady: !1, readyWait: 1, holdReady: function (t) {
                t ? lt.readyWait++ : lt.ready(!0)
            }, ready: function (t) {
                if (t === !0 ? !--lt.readyWait : !lt.isReady) {
                    if (!vt.body) return setTimeout(lt.ready);
                    lt.isReady = !0, t !== !0 && --lt.readyWait > 0 || (Tt.resolveWith(vt, [lt]), lt.fn.triggerHandler && (lt(vt).triggerHandler("ready"), lt(vt).off("ready")))
                }
            }
        }), lt.ready.promise = function (t) {
            if (!Tt) if (Tt = lt.Deferred(), "complete" === vt.readyState) setTimeout(lt.ready); else if (vt.addEventListener) vt.addEventListener("DOMContentLoaded", p, !1), o.addEventListener("load", p, !1); else {
                vt.attachEvent("onreadystatechange", p), o.attachEvent("onload", p);
                var e = !1;
                try {
                    e = null == o.frameElement && vt.documentElement
                } catch (n) {
                }
                e && e.doScroll && !function i() {
                    if (!lt.isReady) {
                        try {
                            e.doScroll("left")
                        } catch (t) {
                            return setTimeout(i, 50)
                        }
                        d(), lt.ready()
                    }
                }()
            }
            return Tt.promise(t)
        };
        var Ct, At = "undefined";
        for (Ct in lt(at)) break;
        at.ownLast = "0" !== Ct, at.inlineBlockNeedsLayout = !1, lt(function () {
            var t, e, n, i;
            n = vt.getElementsByTagName("body")[0], n && n.style && (e = vt.createElement("div"), i = vt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== At && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", at.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
        }), function () {
            var t = vt.createElement("div");
            if (null == at.deleteExpando) {
                at.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    at.deleteExpando = !1
                }
            }
            t = null
        }(), lt.acceptData = function (t) {
            var e = lt.noData[(t.nodeName + " ").toLowerCase()], n = +t.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
        };
        var jt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Pt = /([A-Z])/g;
        lt.extend({
            cache: {},
            noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
            hasData: function (t) {
                return t = t.nodeType ? lt.cache[t[lt.expando]] : t[lt.expando], !!t && !h(t)
            },
            data: function (t, e, n) {
                return m(t, e, n)
            },
            removeData: function (t, e) {
                return f(t, e)
            },
            _data: function (t, e, n) {
                return m(t, e, n, !0)
            },
            _removeData: function (t, e) {
                return f(t, e, !0)
            }
        }), lt.fn.extend({
            data: function (t, e) {
                var n, i, o, r = this[0], a = r && r.attributes;
                if (void 0 === t) {
                    if (this.length && (o = lt.data(r), 1 === r.nodeType && !lt._data(r, "parsedAttrs"))) {
                        for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = lt.camelCase(i.slice(5)), u(r, i, o[i])));
                        lt._data(r, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function () {
                    lt.data(this, t)
                }) : arguments.length > 1 ? this.each(function () {
                    lt.data(this, t, e)
                }) : r ? u(r, t, lt.data(r, t)) : void 0
            }, removeData: function (t) {
                return this.each(function () {
                    lt.removeData(this, t)
                })
            }
        }), lt.extend({
            queue: function (t, e, n) {
                var i;
                return t ? (e = (e || "fx") + "queue", i = lt._data(t, e), n && (!i || lt.isArray(n) ? i = lt._data(t, e, lt.makeArray(n)) : i.push(n)), i || []) : void 0
            }, dequeue: function (t, e) {
                e = e || "fx";
                var n = lt.queue(t, e), i = n.length, o = n.shift(), r = lt._queueHooks(t, e), a = function () {
                    lt.dequeue(t, e)
                };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, a, r)), !i && r && r.empty.fire()
            }, _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return lt._data(t, n) || lt._data(t, n, {
                    empty: lt.Callbacks("once memory").add(function () {
                        lt._removeData(t, e + "queue"), lt._removeData(t, n)
                    })
                })
            }
        }), lt.fn.extend({
            queue: function (t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? lt.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                    var n = lt.queue(this, t, e);
                    lt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && lt.dequeue(this, t)
                })
            }, dequeue: function (t) {
                return this.each(function () {
                    lt.dequeue(this, t)
                })
            }, clearQueue: function (t) {
                return this.queue(t || "fx", [])
            }, promise: function (t, e) {
                var n, i = 1, o = lt.Deferred(), r = this, a = this.length, s = function () {
                    --i || o.resolveWith(r, [r])
                };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) n = lt._data(r[a], t + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
                return s(), o.promise(e)
            }
        });
        var zt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Lt = ["Top", "Right", "Bottom", "Left"],
            Mt = function (t, e) {
                return t = e || t, "none" === lt.css(t, "display") || !lt.contains(t.ownerDocument, t)
            }, Et = lt.access = function (t, e, n, i, o, r, a) {
                var s = 0, l = t.length, c = null == n;
                if ("object" === lt.type(n)) {
                    o = !0;
                    for (s in n) lt.access(t, e, s, n[s], !0, r, a)
                } else if (void 0 !== i && (o = !0, lt.isFunction(i) || (a = !0), c && (a ? (e.call(t, i), e = null) : (c = e, e = function (t, e, n) {
                        return c.call(lt(t), n)
                    })), e)) for (; l > s; s++) e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
                return o ? t : c ? e.call(t) : l ? e(t[0], n) : r
            }, It = /^(?:checkbox|radio)$/i;
        !function () {
            var t = vt.createElement("input"), e = vt.createElement("div"), n = vt.createDocumentFragment();
            if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", at.leadingWhitespace = 3 === e.firstChild.nodeType, at.tbody = !e.getElementsByTagName("tbody").length, at.htmlSerialize = !!e.getElementsByTagName("link").length, at.html5Clone = "<:nav></:nav>" !== vt.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), at.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", at.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", at.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, at.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function () {
                    at.noCloneEvent = !1
                }), e.cloneNode(!0).click()), null == at.deleteExpando) {
                at.deleteExpando = !0;
                try {
                    delete e.test
                } catch (i) {
                    at.deleteExpando = !1
                }
            }
        }(), function () {
            var t, e, n = vt.createElement("div");
            for (t in{
                submit: !0,
                change: !0,
                focusin: !0
            }) e = "on" + t, (at[t + "Bubbles"] = e in o) || (n.setAttribute(e, "t"), at[t + "Bubbles"] = n.attributes[e].expando === !1);
            n = null
        }();
        var Nt = /^(?:input|select|textarea)$/i, Dt = /^key/, Ot = /^(?:mouse|pointer|contextmenu)|click/,
            Bt = /^(?:focusinfocus|focusoutblur)$/, Rt = /^([^.]*)(?:\.(.+)|)$/;
        lt.event = {
            global: {},
            add: function (t, e, n, i, o) {
                var r, a, s, l, c, d, p, u, h, m, f, g = lt._data(t);
                if (g) {
                    for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = lt.guid++), (a = g.events) || (a = g.events = {}), (d = g.handle) || (d = g.handle = function (t) {
                        return typeof lt === At || t && lt.event.triggered === t.type ? void 0 : lt.event.dispatch.apply(d.elem, arguments)
                    }, d.elem = t), e = (e || "").match(kt) || [""], s = e.length; s--;) r = Rt.exec(e[s]) || [], h = f = r[1], m = (r[2] || "").split(".").sort(), h && (c = lt.event.special[h] || {}, h = (o ? c.delegateType : c.bindType) || h, c = lt.event.special[h] || {}, p = lt.extend({
                        type: h,
                        origType: f,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && lt.expr.match.needsContext.test(o),
                        namespace: m.join(".")
                    }, l), (u = a[h]) || (u = a[h] = [], u.delegateCount = 0, c.setup && c.setup.call(t, i, m, d) !== !1 || (t.addEventListener ? t.addEventListener(h, d, !1) : t.attachEvent && t.attachEvent("on" + h, d))), c.add && (c.add.call(t, p), p.handler.guid || (p.handler.guid = n.guid)), o ? u.splice(u.delegateCount++, 0, p) : u.push(p), lt.event.global[h] = !0);
                    t = null
                }
            },
            remove: function (t, e, n, i, o) {
                var r, a, s, l, c, d, p, u, h, m, f, g = lt.hasData(t) && lt._data(t);
                if (g && (d = g.events)) {
                    for (e = (e || "").match(kt) || [""], c = e.length; c--;) if (s = Rt.exec(e[c]) || [], h = f = s[1], m = (s[2] || "").split(".").sort(), h) {
                        for (p = lt.event.special[h] || {}, h = (i ? p.delegateType : p.bindType) || h, u = d[h] || [], s = s[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = u.length; r--;) a = u[r], !o && f !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (u.splice(r, 1), a.selector && u.delegateCount--, p.remove && p.remove.call(t, a));
                        l && !u.length && (p.teardown && p.teardown.call(t, m, g.handle) !== !1 || lt.removeEvent(t, h, g.handle), delete d[h])
                    } else for (h in d) lt.event.remove(t, h + e[c], n, i, !0);
                    lt.isEmptyObject(d) && (delete g.handle, lt._removeData(t, "events"))
                }
            },
            trigger: function (t, e, n, i) {
                var r, a, s, l, c, d, p, u = [n || vt], h = rt.call(t, "type") ? t.type : t,
                    m = rt.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = d = n = n || vt, 3 !== n.nodeType && 8 !== n.nodeType && !Bt.test(h + lt.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), h = m.shift(), m.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[lt.expando] ? t : new lt.Event(h, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = m.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : lt.makeArray(e, [t]), c = lt.event.special[h] || {}, i || !c.trigger || c.trigger.apply(n, e) !== !1)) {
                    if (!i && !c.noBubble && !lt.isWindow(n)) {
                        for (l = c.delegateType || h, Bt.test(l + h) || (s = s.parentNode); s; s = s.parentNode) u.push(s), d = s;
                        d === (n.ownerDocument || vt) && u.push(d.defaultView || d.parentWindow || o)
                    }
                    for (p = 0; (s = u[p++]) && !t.isPropagationStopped();) t.type = p > 1 ? l : c.bindType || h, r = (lt._data(s, "events") || {})[t.type] && lt._data(s, "handle"), r && r.apply(s, e), r = a && s[a], r && r.apply && lt.acceptData(s) && (t.result = r.apply(s, e), t.result === !1 && t.preventDefault());
                    if (t.type = h, !i && !t.isDefaultPrevented() && (!c._default || c._default.apply(u.pop(), e) === !1) && lt.acceptData(n) && a && n[h] && !lt.isWindow(n)) {
                        d = n[a], d && (n[a] = null), lt.event.triggered = h;
                        try {
                            n[h]()
                        } catch (f) {
                        }
                        lt.event.triggered = void 0, d && (n[a] = d)
                    }
                    return t.result
                }
            },
            dispatch: function (t) {
                t = lt.event.fix(t);
                var e, n, i, o, r, a = [], s = Q.call(arguments), l = (lt._data(this, "events") || {})[t.type] || [],
                    c = lt.event.special[t.type] || {};
                if (s[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                    for (a = lt.event.handlers.call(this, t, l), e = 0; (o = a[e++]) && !t.isPropagationStopped();) for (t.currentTarget = o.elem, r = 0; (i = o.handlers[r++]) && !t.isImmediatePropagationStopped();) (!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n = ((lt.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function (t, e) {
                var n, i, o, r, a = [], s = e.delegateCount, l = t.target;
                if (s && l.nodeType && (!t.button || "click" !== t.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                    for (o = [], r = 0; s > r; r++) i = e[r], n = i.selector + " ", void 0 === o[n] && (o[n] = i.needsContext ? lt(n, this).index(l) >= 0 : lt.find(n, this, null, [l]).length), o[n] && o.push(i);
                    o.length && a.push({elem: l, handlers: o})
                }
                return s < e.length && a.push({elem: this, handlers: e.slice(s)}), a
            },
            fix: function (t) {
                if (t[lt.expando]) return t;
                var e, n, i, o = t.type, r = t, a = this.fixHooks[o];
                for (a || (this.fixHooks[o] = a = Ot.test(o) ? this.mouseHooks : Dt.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, t = new lt.Event(r), e = i.length; e--;) n = i[e], t[n] = r[n];
                return t.target || (t.target = r.srcElement || vt), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, a.filter ? a.filter(t, r) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (t, e) {
                    var n, i, o, r = e.button, a = e.fromElement;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || vt, o = i.documentElement, n = i.body, t.pageX = e.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
                }
            },
            special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        if (this !== v() && this.focus) try {
                            return this.focus(), !1
                        } catch (t) {
                        }
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        return this === v() && this.blur ? (this.blur(), !1) : void 0
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        return lt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    }, _default: function (t) {
                        return lt.nodeName(t.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function (t, e, n, i) {
                var o = lt.extend(new lt.Event, n, {type: t, isSimulated: !0, originalEvent: {}});
                i ? lt.event.trigger(o, null, e) : lt.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
            }
        }, lt.removeEvent = vt.removeEventListener ? function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1)
        } : function (t, e, n) {
            var i = "on" + e;
            t.detachEvent && (typeof t[i] === At && (t[i] = null), t.detachEvent(i, n))
        }, lt.Event = function (t, e) {
            return this instanceof lt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? g : x) : this.type = t, e && lt.extend(this, e), this.timeStamp = t && t.timeStamp || lt.now(), void(this[lt.expando] = !0)) : new lt.Event(t, e)
        }, lt.Event.prototype = {
            isDefaultPrevented: x,
            isPropagationStopped: x,
            isImmediatePropagationStopped: x,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = g, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = g, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = g, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, lt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, e) {
            lt.event.special[t] = {
                delegateType: e, bindType: e, handle: function (t) {
                    var n, i = this, o = t.relatedTarget, r = t.handleObj;
                    return (!o || o !== i && !lt.contains(i, o)) && (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), at.submitBubbles || (lt.event.special.submit = {
            setup: function () {
                return lt.nodeName(this, "form") ? !1 : void lt.event.add(this, "click._submit keypress._submit", function (t) {
                    var e = t.target, n = lt.nodeName(e, "input") || lt.nodeName(e, "button") ? e.form : void 0;
                    n && !lt._data(n, "submitBubbles") && (lt.event.add(n, "submit._submit", function (t) {
                        t._submit_bubble = !0
                    }), lt._data(n, "submitBubbles", !0))
                })
            }, postDispatch: function (t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && lt.event.simulate("submit", this.parentNode, t, !0))
            }, teardown: function () {
                return lt.nodeName(this, "form") ? !1 : void lt.event.remove(this, "._submit")
            }
        }), at.changeBubbles || (lt.event.special.change = {
            setup: function () {
                return Nt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (lt.event.add(this, "propertychange._change", function (t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), lt.event.add(this, "click._change", function (t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), lt.event.simulate("change", this, t, !0)
                })), !1) : void lt.event.add(this, "beforeactivate._change", function (t) {
                    var e = t.target;
                    Nt.test(e.nodeName) && !lt._data(e, "changeBubbles") && (lt.event.add(e, "change._change", function (t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || lt.event.simulate("change", this.parentNode, t, !0)
                    }), lt._data(e, "changeBubbles", !0))
                })
            }, handle: function (t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
            }, teardown: function () {
                return lt.event.remove(this, "._change"), !Nt.test(this.nodeName)
            }
        }), at.focusinBubbles || lt.each({focus: "focusin", blur: "focusout"}, function (t, e) {
            var n = function (t) {
                lt.event.simulate(e, t.target, lt.event.fix(t), !0)
            };
            lt.event.special[e] = {
                setup: function () {
                    var i = this.ownerDocument || this, o = lt._data(i, e);
                    o || i.addEventListener(t, n, !0), lt._data(i, e, (o || 0) + 1)
                }, teardown: function () {
                    var i = this.ownerDocument || this, o = lt._data(i, e) - 1;
                    o ? lt._data(i, e, o) : (i.removeEventListener(t, n, !0), lt._removeData(i, e))
                }
            }
        }), lt.fn.extend({
            on: function (t, e, n, i, o) {
                var r, a;
                if ("object" == typeof t) {
                    "string" != typeof e && (n = n || e, e = void 0);
                    for (r in t) this.on(r, e, n, t[r], o);
                    return this
                }
                if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = x; else if (!i) return this;
                return 1 === o && (a = i, i = function (t) {
                    return lt().off(t), a.apply(this, arguments)
                }, i.guid = a.guid || (a.guid = lt.guid++)), this.each(function () {
                    lt.event.add(this, t, i, n, e)
                })
            }, one: function (t, e, n, i) {
                return this.on(t, e, n, i, 1)
            }, off: function (t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, lt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
                return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = x), this.each(function () {
                    lt.event.remove(this, t, n, e)
                })
            }, trigger: function (t, e) {
                return this.each(function () {
                    lt.event.trigger(t, e, this)
                })
            }, triggerHandler: function (t, e) {
                var n = this[0];
                return n ? lt.event.trigger(t, e, n, !0) : void 0
            }
        });
        var qt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Ht = / jQuery\d+="(?:null|\d+)"/g, Ft = new RegExp("<(?:" + qt + ")[\\s/>]", "i"), Wt = /^\s+/,
            $t = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Xt = /<([\w:]+)/,
            Yt = /<tbody/i, Gt = /<|&#?\w+;/, Ut = /<(?:script|style|link)/i, Vt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Jt = /^$|\/(?:java|ecma)script/i, Zt = /^true\/(.*)/, Kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Qt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: at.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            }, te = b(vt), ee = te.appendChild(vt.createElement("div"));
        Qt.optgroup = Qt.option, Qt.tbody = Qt.tfoot = Qt.colgroup = Qt.caption = Qt.thead, Qt.th = Qt.td, lt.extend({
            clone: function (t, e, n) {
                var i, o, r, a, s, l = lt.contains(t.ownerDocument, t);
                if (at.html5Clone || lt.isXMLDoc(t) || !Ft.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (ee.innerHTML = t.outerHTML, ee.removeChild(r = ee.firstChild)), !(at.noCloneEvent && at.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || lt.isXMLDoc(t))) for (i = y(r), s = y(t), a = 0; null != (o = s[a]); ++a) i[a] && A(o, i[a]);
                if (e) if (n) for (s = s || y(t), i = i || y(r), a = 0; null != (o = s[a]); a++) C(o, i[a]); else C(t, r);
                return i = y(r, "script"), i.length > 0 && T(i, !l && y(t, "script")), i = s = o = null, r
            }, buildFragment: function (t, e, n, i) {
                for (var o, r, a, s, l, c, d, p = t.length, u = b(e), h = [], m = 0; p > m; m++) if (r = t[m], r || 0 === r) if ("object" === lt.type(r)) lt.merge(h, r.nodeType ? [r] : r); else if (Gt.test(r)) {
                    for (s = s || u.appendChild(e.createElement("div")), l = (Xt.exec(r) || ["", ""])[1].toLowerCase(), d = Qt[l] || Qt._default, s.innerHTML = d[1] + r.replace($t, "<$1></$2>") + d[2], o = d[0]; o--;) s = s.lastChild;
                    if (!at.leadingWhitespace && Wt.test(r) && h.push(e.createTextNode(Wt.exec(r)[0])), !at.tbody) for (r = "table" !== l || Yt.test(r) ? "<table>" !== d[1] || Yt.test(r) ? 0 : s : s.firstChild, o = r && r.childNodes.length; o--;) lt.nodeName(c = r.childNodes[o], "tbody") && !c.childNodes.length && r.removeChild(c);
                    for (lt.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                    s = u.lastChild
                } else h.push(e.createTextNode(r));
                for (s && u.removeChild(s), at.appendChecked || lt.grep(y(h, "input"), w), m = 0; r = h[m++];) if ((!i || -1 === lt.inArray(r, i)) && (a = lt.contains(r.ownerDocument, r), s = y(u.appendChild(r), "script"), a && T(s), n)) for (o = 0; r = s[o++];) Jt.test(r.type || "") && n.push(r);
                return s = null, u
            }, cleanData: function (t, e) {
                for (var n, i, o, r, a = 0, s = lt.expando, l = lt.cache, c = at.deleteExpando, d = lt.event.special; null != (n = t[a]); a++) if ((e || lt.acceptData(n)) && (o = n[s], r = o && l[o])) {
                    if (r.events) for (i in r.events) d[i] ? lt.event.remove(n, i) : lt.removeEvent(n, i, r.handle);
                    l[o] && (delete l[o], c ? delete n[s] : typeof n.removeAttribute !== At ? n.removeAttribute(s) : n[s] = null, K.push(o))
                }
            }
        }), lt.fn.extend({
            text: function (t) {
                return Et(this, function (t) {
                    return void 0 === t ? lt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || vt).createTextNode(t))
                }, null, t, arguments.length)
            }, append: function () {
                return this.domManip(arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = _(this, t);
                        e.appendChild(t)
                    }
                })
            }, prepend: function () {
                return this.domManip(arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = _(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            }, before: function () {
                return this.domManip(arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            }, after: function () {
                return this.domManip(arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            }, remove: function (t, e) {
                for (var n, i = t ? lt.filter(t, this) : this, o = 0; null != (n = i[o]); o++) e || 1 !== n.nodeType || lt.cleanData(y(n)), n.parentNode && (e && lt.contains(n.ownerDocument, n) && T(y(n, "script")), n.parentNode.removeChild(n));
                return this
            }, empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && lt.cleanData(y(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && lt.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            }, clone: function (t, e) {
                return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                    return lt.clone(this, t, e)
                })
            }, html: function (t) {
                return Et(this, function (t) {
                    var e = this[0] || {}, n = 0, i = this.length;
                    if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Ht, "") : void 0;
                    if ("string" == typeof t && !Ut.test(t) && (at.htmlSerialize || !Ft.test(t)) && (at.leadingWhitespace || !Wt.test(t)) && !Qt[(Xt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = t.replace($t, "<$1></$2>");
                        try {
                            for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (lt.cleanData(y(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (o) {
                        }
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            }, replaceWith: function () {
                var t = arguments[0];
                return this.domManip(arguments, function (e) {
                    t = this.parentNode, lt.cleanData(y(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            }, detach: function (t) {
                return this.remove(t, !0)
            }, domManip: function (t, e) {
                t = tt.apply([], t);
                var n, i, o, r, a, s, l = 0, c = this.length, d = this, p = c - 1, u = t[0], h = lt.isFunction(u);
                if (h || c > 1 && "string" == typeof u && !at.checkClone && Vt.test(u)) return this.each(function (n) {
                    var i = d.eq(n);
                    h && (t[0] = u.call(this, n, i.html())), i.domManip(t, e)
                });
                if (c && (s = lt.buildFragment(t, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                    for (r = lt.map(y(s, "script"), k), o = r.length; c > l; l++) i = s, l !== p && (i = lt.clone(i, !0, !0), o && lt.merge(r, y(i, "script"))), e.call(this[l], i, l);
                    if (o) for (a = r[r.length - 1].ownerDocument, lt.map(r, S), l = 0; o > l; l++) i = r[l], Jt.test(i.type || "") && !lt._data(i, "globalEval") && lt.contains(a, i) && (i.src ? lt._evalUrl && lt._evalUrl(i.src) : lt.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Kt, "")));
                    s = n = null
                }
                return this
            }
        }), lt.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, e) {
            lt.fn[t] = function (t) {
                for (var n, i = 0, o = [], r = lt(t), a = r.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), lt(r[i])[e](n), et.apply(o, n.get());
                return this.pushStack(o)
            }
        });
        var ne, ie = {};
        !function () {
            var t;
            at.shrinkWrapBlocks = function () {
                if (null != t) return t;
                t = !1;
                var e, n, i;
                return n = vt.getElementsByTagName("body")[0], n && n.style ? (e = vt.createElement("div"), i = vt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== At && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(vt.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
            }
        }();
        var oe, re, ae = /^margin/, se = new RegExp("^(" + zt + ")(?!px)[a-z%]+$", "i"),
            le = /^(top|right|bottom|left)$/;
        o.getComputedStyle ? (oe = function (t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : o.getComputedStyle(t, null)
        }, re = function (t, e, n) {
            var i, o, r, a, s = t.style;
            return n = n || oe(t), a = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== a || lt.contains(t.ownerDocument, t) || (a = lt.style(t, e)), se.test(a) && ae.test(e) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 === a ? a : a + ""
        }) : vt.documentElement.currentStyle && (oe = function (t) {
            return t.currentStyle
        }, re = function (t, e, n) {
            var i, o, r, a, s = t.style;
            return n = n || oe(t), a = n ? n[e] : void 0, null == a && s && s[e] && (a = s[e]), se.test(a) && !le.test(e) && (i = s.left, o = t.runtimeStyle, r = o && o.left, r && (o.left = t.currentStyle.left), s.left = "fontSize" === e ? "1em" : a, a = s.pixelLeft + "px", s.left = i, r && (o.left = r)), void 0 === a ? a : a + "" || "auto"
        }), function () {
            function t() {
                var t, e, n, i;
                e = vt.getElementsByTagName("body")[0], e && e.style && (t = vt.createElement("div"), n = vt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", e.appendChild(n).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r = a = !1, l = !0, o.getComputedStyle && (r = "1%" !== (o.getComputedStyle(t, null) || {}).top, a = "4px" === (o.getComputedStyle(t, null) || {width: "4px"}).width, i = t.appendChild(vt.createElement("div")), i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", l = !parseFloat((o.getComputedStyle(i, null) || {}).marginRight), t.removeChild(i)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = t.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === i[0].offsetHeight, s && (i[0].style.display = "", i[1].style.display = "none", s = 0 === i[0].offsetHeight), e.removeChild(n))
            }

            var e, n, i, r, a, s, l;
            e = vt.createElement("div"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e.getElementsByTagName("a")[0], n = i && i.style, n && (n.cssText = "float:left;opacity:.5", at.opacity = "0.5" === n.opacity, at.cssFloat = !!n.cssFloat, e.style.backgroundClip = "content-box", e.cloneNode(!0).style.backgroundClip = "", at.clearCloneStyle = "content-box" === e.style.backgroundClip, at.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, lt.extend(at, {
                reliableHiddenOffsets: function () {
                    return null == s && t(), s
                }, boxSizingReliable: function () {
                    return null == a && t(), a
                }, pixelPosition: function () {
                    return null == r && t(), r
                }, reliableMarginRight: function () {
                    return null == l && t(), l
                }
            }))
        }(), lt.swap = function (t, e, n, i) {
            var o, r, a = {};
            for (r in e) a[r] = t.style[r], t.style[r] = e[r];
            o = n.apply(t, i || []);
            for (r in e) t.style[r] = a[r];
            return o
        };
        var ce = /alpha\([^)]*\)/i, de = /opacity\s*=\s*([^)]*)/, pe = /^(none|table(?!-c[ea]).+)/,
            ue = new RegExp("^(" + zt + ")(.*)$", "i"), he = new RegExp("^([+-])=(" + zt + ")", "i"),
            me = {position: "absolute", visibility: "hidden", display: "block"},
            fe = {letterSpacing: "0", fontWeight: "400"}, ge = ["Webkit", "O", "Moz", "ms"];
        lt.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var n = re(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {"float": at.cssFloat ? "cssFloat" : "styleFloat"},
            style: function (t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, r, a, s = lt.camelCase(e), l = t.style;
                    if (e = lt.cssProps[s] || (lt.cssProps[s] = L(l, s)), a = lt.cssHooks[e] || lt.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(t, !1, i)) ? o : l[e];
                    if (r = typeof n, "string" === r && (o = he.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(lt.css(t, e)), r = "number"), null != n && n === n && ("number" !== r || lt.cssNumber[s] || (n += "px"), at.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(t, n, i))))) try {
                        l[e] = n
                    } catch (c) {
                    }
                }
            },
            css: function (t, e, n, i) {
                var o, r, a, s = lt.camelCase(e);
                return e = lt.cssProps[s] || (lt.cssProps[s] = L(t.style, s)), a = lt.cssHooks[e] || lt.cssHooks[s], a && "get" in a && (r = a.get(t, !0, n)), void 0 === r && (r = re(t, e, i)), "normal" === r && e in fe && (r = fe[e]), "" === n || n ? (o = parseFloat(r), n === !0 || lt.isNumeric(o) ? o || 0 : r) : r
            }
        }), lt.each(["height", "width"], function (t, e) {
            lt.cssHooks[e] = {
                get: function (t, n, i) {
                    return n ? pe.test(lt.css(t, "display")) && 0 === t.offsetWidth ? lt.swap(t, me, function () {
                        return N(t, e, i)
                    }) : N(t, e, i) : void 0
                }, set: function (t, n, i) {
                    var o = i && oe(t);
                    return E(t, n, i ? I(t, e, i, at.boxSizing && "border-box" === lt.css(t, "boxSizing", !1, o), o) : 0)
                }
            }
        }), at.opacity || (lt.cssHooks.opacity = {
            get: function (t, e) {
                return de.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            }, set: function (t, e) {
                var n = t.style, i = t.currentStyle, o = lt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    r = i && i.filter || n.filter || "";
                n.zoom = 1, (e >= 1 || "" === e) && "" === lt.trim(r.replace(ce, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = ce.test(r) ? r.replace(ce, o) : r + " " + o)
            }
        }), lt.cssHooks.marginRight = z(at.reliableMarginRight, function (t, e) {
            return e ? lt.swap(t, {display: "inline-block"}, re, [t, "marginRight"]) : void 0
        }), lt.each({margin: "", padding: "", border: "Width"}, function (t, e) {
            lt.cssHooks[t + e] = {
                expand: function (n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[t + Lt[i] + e] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, ae.test(t) || (lt.cssHooks[t + e].set = E)
        }), lt.fn.extend({
            css: function (t, e) {
                return Et(this, function (t, e, n) {
                    var i, o, r = {}, a = 0;
                    if (lt.isArray(e)) {
                        for (i = oe(t), o = e.length; o > a; a++) r[e[a]] = lt.css(t, e[a], !1, i);
                        return r
                    }
                    return void 0 !== n ? lt.style(t, e, n) : lt.css(t, e)
                }, t, e, arguments.length > 1)
            }, show: function () {
                return M(this, !0)
            }, hide: function () {
                return M(this)
            }, toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                    Mt(this) ? lt(this).show() : lt(this).hide()
                })
            }
        }), lt.Tween = D, D.prototype = {
            constructor: D, init: function (t, e, n, i, o, r) {
                this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (lt.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var t = D.propHooks[this.prop];
                return t && t.get ? t.get(this) : D.propHooks._default.get(this)
            }, run: function (t) {
                var e, n = D.propHooks[this.prop];
                return this.options.duration ? this.pos = e = lt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
            }
        }, D.prototype.init.prototype = D.prototype, D.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = lt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                }, set: function (t) {
                    lt.fx.step[t.prop] ? lt.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[lt.cssProps[t.prop]] || lt.cssHooks[t.prop]) ? lt.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, lt.easing = {
            linear: function (t) {
                return t
            }, swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, lt.fx = D.prototype.init, lt.fx.step = {};
        var xe, ve, be = /^(?:toggle|show|hide)$/, ye = new RegExp("^(?:([+-])=|)(" + zt + ")([a-z%]*)$", "i"),
            we = /queueHooks$/, _e = [q], ke = {
                "*": [function (t, e) {
                    var n = this.createTween(t, e), i = n.cur(), o = ye.exec(e),
                        r = o && o[3] || (lt.cssNumber[t] ? "" : "px"),
                        a = (lt.cssNumber[t] || "px" !== r && +i) && ye.exec(lt.css(n.elem, t)), s = 1, l = 20;
                    if (a && a[3] !== r) {
                        r = r || a[3], o = o || [], a = +i || 1;
                        do s = s || ".5", a /= s, lt.style(n.elem, t, a + r); while (s !== (s = n.cur() / i) && 1 !== s && --l)
                    }
                    return o && (a = n.start = +a || +i || 0, n.unit = r, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
                }]
            };
        lt.Animation = lt.extend(F, {
            tweener: function (t, e) {
                lt.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, i = 0, o = t.length; o > i; i++) n = t[i], ke[n] = ke[n] || [], ke[n].unshift(e)
            }, prefilter: function (t, e) {
                e ? _e.unshift(t) : _e.push(t)
            }
        }), lt.speed = function (t, e, n) {
            var i = t && "object" == typeof t ? lt.extend({}, t) : {
                complete: n || !n && e || lt.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !lt.isFunction(e) && e
            };
            return i.duration = lt.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in lt.fx.speeds ? lt.fx.speeds[i.duration] : lt.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                lt.isFunction(i.old) && i.old.call(this), i.queue && lt.dequeue(this, i.queue)
            }, i
        }, lt.fn.extend({
            fadeTo: function (t, e, n, i) {
                return this.filter(Mt).css("opacity", 0).show().end().animate({opacity: e}, t, n, i)
            }, animate: function (t, e, n, i) {
                var o = lt.isEmptyObject(t), r = lt.speed(e, n, i), a = function () {
                    var e = F(this, lt.extend({}, t), r);
                    (o || lt._data(this, "finish")) && e.stop(!0)
                };
                return a.finish = a, o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
            }, stop: function (t, e, n) {
                var i = function (t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                    var e = !0, o = null != t && t + "queueHooks", r = lt.timers, a = lt._data(this);
                    if (o) a[o] && a[o].stop && i(a[o]); else for (o in a) a[o] && a[o].stop && we.test(o) && i(a[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                    (e || !n) && lt.dequeue(this, t)
                })
            }, finish: function (t) {
                return t !== !1 && (t = t || "fx"), this.each(function () {
                    var e, n = lt._data(this), i = n[t + "queue"], o = n[t + "queueHooks"], r = lt.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, lt.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; a > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), lt.each(["toggle", "show", "hide"], function (t, e) {
            var n = lt.fn[e];
            lt.fn[e] = function (t, i, o) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(B(e, !0), t, i, o)
            }
        }), lt.each({
            slideDown: B("show"),
            slideUp: B("hide"),
            slideToggle: B("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (t, e) {
            lt.fn[t] = function (t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), lt.timers = [], lt.fx.tick = function () {
            var t, e = lt.timers, n = 0;
            for (xe = lt.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
            e.length || lt.fx.stop(), xe = void 0
        }, lt.fx.timer = function (t) {
            lt.timers.push(t), t() ? lt.fx.start() : lt.timers.pop()
        }, lt.fx.interval = 13, lt.fx.start = function () {
            ve || (ve = setInterval(lt.fx.tick, lt.fx.interval))
        }, lt.fx.stop = function () {
            clearInterval(ve), ve = null
        }, lt.fx.speeds = {slow: 600, fast: 200, _default: 400}, lt.fn.delay = function (t, e) {
            return t = lt.fx ? lt.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
                var i = setTimeout(e, t);
                n.stop = function () {
                    clearTimeout(i)
                }
            })
        }, function () {
            var t, e, n, i, o;
            e = vt.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e.getElementsByTagName("a")[0], n = vt.createElement("select"), o = n.appendChild(vt.createElement("option")), t = e.getElementsByTagName("input")[0], i.style.cssText = "top:1px", at.getSetAttribute = "t" !== e.className, at.style = /top/.test(i.getAttribute("style")), at.hrefNormalized = "/a" === i.getAttribute("href"), at.checkOn = !!t.value, at.optSelected = o.selected, at.enctype = !!vt.createElement("form").enctype, n.disabled = !0, at.optDisabled = !o.disabled, t = vt.createElement("input"), t.setAttribute("value", ""), at.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), at.radioValue = "t" === t.value
        }();
        var Se = /\r/g;
        lt.fn.extend({
            val: function (t) {
                var e, n, i, o = this[0];
                {
                    if (arguments.length) return i = lt.isFunction(t), this.each(function (n) {
                        var o;
                        1 === this.nodeType && (o = i ? t.call(this, n, lt(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : lt.isArray(o) && (o = lt.map(o, function (t) {
                            return null == t ? "" : t + ""
                        })), e = lt.valHooks[this.type] || lt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                    });
                    if (o) return e = lt.valHooks[o.type] || lt.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(Se, "") : null == n ? "" : n)
                }
            }
        }), lt.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = lt.find.attr(t, "value");
                        return null != e ? e : lt.trim(lt.text(t))
                    }
                }, select: {
                    get: function (t) {
                        for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, a = r ? null : [], s = r ? o + 1 : i.length, l = 0 > o ? s : r ? o : 0; s > l; l++) if (n = i[l], (n.selected || l === o) && (at.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !lt.nodeName(n.parentNode, "optgroup"))) {
                            if (e = lt(n).val(), r) return e;
                            a.push(e)
                        }
                        return a
                    }, set: function (t, e) {
                        for (var n, i, o = t.options, r = lt.makeArray(e), a = o.length; a--;) if (i = o[a], lt.inArray(lt.valHooks.option.get(i), r) >= 0) try {
                            i.selected = n = !0
                        } catch (s) {
                            i.scrollHeight
                        } else i.selected = !1;
                        return n || (t.selectedIndex = -1), o
                    }
                }
            }
        }), lt.each(["radio", "checkbox"], function () {
            lt.valHooks[this] = {
                set: function (t, e) {
                    return lt.isArray(e) ? t.checked = lt.inArray(lt(t).val(), e) >= 0 : void 0
                }
            }, at.checkOn || (lt.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var Te, Ce, Ae = lt.expr.attrHandle, je = /^(?:checked|selected)$/i, Pe = at.getSetAttribute, ze = at.input;
        lt.fn.extend({
            attr: function (t, e) {
                return Et(this, lt.attr, t, e, arguments.length > 1)
            }, removeAttr: function (t) {
                return this.each(function () {
                    lt.removeAttr(this, t)
                })
            }
        }), lt.extend({
            attr: function (t, e, n) {
                var i, o, r = t.nodeType;
                if (t && 3 !== r && 8 !== r && 2 !== r) return typeof t.getAttribute === At ? lt.prop(t, e, n) : (1 === r && lt.isXMLDoc(t) || (e = e.toLowerCase(), i = lt.attrHooks[e] || (lt.expr.match.bool.test(e) ? Ce : Te)), void 0 === n ? i && "get" in i && null !== (o = i.get(t, e)) ? o : (o = lt.find.attr(t, e), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(t, n, e)) ? o : (t.setAttribute(e, n + ""), n) : void lt.removeAttr(t, e))
            }, removeAttr: function (t, e) {
                var n, i, o = 0, r = e && e.match(kt);
                if (r && 1 === t.nodeType) for (; n = r[o++];) i = lt.propFix[n] || n, lt.expr.match.bool.test(n) ? ze && Pe || !je.test(n) ? t[i] = !1 : t[lt.camelCase("default-" + n)] = t[i] = !1 : lt.attr(t, n, ""), t.removeAttribute(Pe ? n : i)
            }, attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!at.radioValue && "radio" === e && lt.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }
        }), Ce = {
            set: function (t, e, n) {
                return e === !1 ? lt.removeAttr(t, n) : ze && Pe || !je.test(n) ? t.setAttribute(!Pe && lt.propFix[n] || n, n) : t[lt.camelCase("default-" + n)] = t[n] = !0, n
            }
        }, lt.each(lt.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var n = Ae[e] || lt.find.attr;
            Ae[e] = ze && Pe || !je.test(e) ? function (t, e, i) {
                var o, r;
                return i || (r = Ae[e], Ae[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, Ae[e] = r), o
            } : function (t, e, n) {
                return n ? void 0 : t[lt.camelCase("default-" + e)] ? e.toLowerCase() : null
            }
        }), ze && Pe || (lt.attrHooks.value = {
            set: function (t, e, n) {
                return lt.nodeName(t, "input") ? void(t.defaultValue = e) : Te && Te.set(t, e, n)
            }
        }), Pe || (Te = {
            set: function (t, e, n) {
                var i = t.getAttributeNode(n);
                return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
            }
        }, Ae.id = Ae.name = Ae.coords = function (t, e, n) {
            var i;
            return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
        }, lt.valHooks.button = {
            get: function (t, e) {
                var n = t.getAttributeNode(e);
                return n && n.specified ? n.value : void 0
            }, set: Te.set
        }, lt.attrHooks.contenteditable = {
            set: function (t, e, n) {
                Te.set(t, "" === e ? !1 : e, n)
            }
        }, lt.each(["width", "height"], function (t, e) {
            lt.attrHooks[e] = {
                set: function (t, n) {
                    return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
                }
            }
        })), at.style || (lt.attrHooks.style = {
            get: function (t) {
                return t.style.cssText || void 0
            }, set: function (t, e) {
                return t.style.cssText = e + ""
            }
        });
        var Le = /^(?:input|select|textarea|button|object)$/i, Me = /^(?:a|area)$/i;
        lt.fn.extend({
            prop: function (t, e) {
                return Et(this, lt.prop, t, e, arguments.length > 1)
            }, removeProp: function (t) {
                return t = lt.propFix[t] || t, this.each(function () {
                    try {
                        this[t] = void 0, delete this[t]
                    } catch (e) {
                    }
                })
            }
        }), lt.extend({
            propFix: {"for": "htmlFor", "class": "className"}, prop: function (t, e, n) {
                var i, o, r, a = t.nodeType;
                if (t && 3 !== a && 8 !== a && 2 !== a) return r = 1 !== a || !lt.isXMLDoc(t), r && (e = lt.propFix[e] || e, o = lt.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
            }, propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = lt.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Le.test(t.nodeName) || Me.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }
        }), at.hrefNormalized || lt.each(["href", "src"], function (t, e) {
            lt.propHooks[e] = {
                get: function (t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), at.optSelected || (lt.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), lt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            lt.propFix[this.toLowerCase()] = this
        }), at.enctype || (lt.propFix.enctype = "encoding");
        var Ee = /[\t\r\n\f]/g;
        lt.fn.extend({
            addClass: function (t) {
                var e, n, i, o, r, a, s = 0, l = this.length, c = "string" == typeof t && t;
                if (lt.isFunction(t)) return this.each(function (e) {
                    lt(this).addClass(t.call(this, e, this.className))
                });
                if (c) for (e = (t || "").match(kt) || []; l > s; s++) if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ee, " ") : " ")) {
                    for (r = 0; o = e[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                    a = lt.trim(i), n.className !== a && (n.className = a)
                }
                return this
            }, removeClass: function (t) {
                var e, n, i, o, r, a, s = 0, l = this.length, c = 0 === arguments.length || "string" == typeof t && t;
                if (lt.isFunction(t)) return this.each(function (e) {
                    lt(this).removeClass(t.call(this, e, this.className))
                });
                if (c) for (e = (t || "").match(kt) || []; l > s; s++) if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ee, " ") : "")) {
                    for (r = 0; o = e[r++];) for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                    a = t ? lt.trim(i) : "", n.className !== a && (n.className = a)
                }
                return this
            }, toggleClass: function (t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : lt.isFunction(t) ? this.each(function (n) {
                    lt(this).toggleClass(t.call(this, n, this.className, e), e)
                }) : this.each(function () {
                    if ("string" === n) for (var e, i = 0, o = lt(this), r = t.match(kt) || []; e = r[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e); else (n === At || "boolean" === n) && (this.className && lt._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : lt._data(this, "__className__") || "")
                })
            }, hasClass: function (t) {
                for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ee, " ").indexOf(e) >= 0) return !0;
                return !1
            }
        }), lt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
            lt.fn[e] = function (t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), lt.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }, bind: function (t, e, n) {
                return this.on(t, null, e, n)
            }, unbind: function (t, e) {
                return this.off(t, null, e)
            }, delegate: function (t, e, n, i) {
                return this.on(e, t, n, i)
            }, undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        });
        var Ie = lt.now(), Ne = /\?/,
            De = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        lt.parseJSON = function (t) {
            if (o.JSON && o.JSON.parse) return o.JSON.parse(t + "");
            var e, n = null, i = lt.trim(t + "");
            return i && !lt.trim(i.replace(De, function (t, i, o, r) {
                return e && i && (n = 0), 0 === n ? t : (e = o || i, n += !r - !o, "")
            })) ? Function("return " + i)() : lt.error("Invalid JSON: " + t)
        }, lt.parseXML = function (t) {
            var e, n;
            if (!t || "string" != typeof t) return null;
            try {
                o.DOMParser ? (n = new DOMParser, e = n.parseFromString(t, "text/xml")) : (e = new ActiveXObject("Microsoft.XMLDOM"), e.async = "false", e.loadXML(t))
            } catch (i) {
                e = void 0
            }
            return e && e.documentElement && !e.getElementsByTagName("parsererror").length || lt.error("Invalid XML: " + t), e
        };
        var Oe, Be, Re = /#.*$/, qe = /([?&])_=[^&]*/, He = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, We = /^(?:GET|HEAD)$/, $e = /^\/\//,
            Xe = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Ye = {}, Ge = {}, Ue = "*/".concat("*");
        try {
            Be = location.href
        } catch (Ve) {
            Be = vt.createElement("a"), Be.href = "", Be = Be.href
        }
        Oe = Xe.exec(Be.toLowerCase()) || [], lt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Be,
                type: "GET",
                isLocal: Fe.test(Oe[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ue,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /xml/, html: /html/, json: /json/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": lt.parseJSON, "text xml": lt.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (t, e) {
                return e ? X(X(t, lt.ajaxSettings), e) : X(lt.ajaxSettings, t)
            },
            ajaxPrefilter: W(Ye),
            ajaxTransport: W(Ge),
            ajax: function (t, e) {
                function n(t, e, n, i) {
                    var o, d, x, v, y, _ = e;
                    2 !== b && (b = 2, s && clearTimeout(s), c = void 0, a = i || "", w.readyState = t > 0 ? 4 : 0, o = t >= 200 && 300 > t || 304 === t, n && (v = Y(p, w, n)), v = G(p, v, w, o), o ? (p.ifModified && (y = w.getResponseHeader("Last-Modified"), y && (lt.lastModified[r] = y), y = w.getResponseHeader("etag"), y && (lt.etag[r] = y)), 204 === t || "HEAD" === p.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (_ = v.state, d = v.data, x = v.error, o = !x)) : (x = _, (t || !_) && (_ = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || _) + "", o ? m.resolveWith(u, [d, _, w]) : m.rejectWith(u, [w, _, x]), w.statusCode(g), g = void 0, l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [w, p, o ? d : x]), f.fireWith(u, [w, _]), l && (h.trigger("ajaxComplete", [w, p]), --lt.active || lt.event.trigger("ajaxStop")))
                }

                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var i, o, r, a, s, l, c, d, p = lt.ajaxSetup({}, e), u = p.context || p,
                    h = p.context && (u.nodeType || u.jquery) ? lt(u) : lt.event, m = lt.Deferred(),
                    f = lt.Callbacks("once memory"), g = p.statusCode || {}, x = {}, v = {}, b = 0, y = "canceled",
                    w = {
                        readyState: 0, getResponseHeader: function (t) {
                            var e;
                            if (2 === b) {
                                if (!d) for (d = {}; e = He.exec(a);) d[e[1].toLowerCase()] = e[2];
                                e = d[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        }, getAllResponseHeaders: function () {
                            return 2 === b ? a : null
                        }, setRequestHeader: function (t, e) {
                            var n = t.toLowerCase();
                            return b || (t = v[n] = v[n] || t, x[t] = e), this
                        }, overrideMimeType: function (t) {
                            return b || (p.mimeType = t), this
                        }, statusCode: function (t) {
                            var e;
                            if (t) if (2 > b) for (e in t) g[e] = [g[e], t[e]]; else w.always(t[w.status]);
                            return this
                        }, abort: function (t) {
                            var e = t || y;
                            return c && c.abort(e), n(0, e), this
                        }
                    };
                if (m.promise(w).complete = f.add, w.success = w.done, w.error = w.fail, p.url = ((t || p.url || Be) + "").replace(Re, "").replace($e, Oe[1] + "//"), p.type = e.method || e.type || p.method || p.type, p.dataTypes = lt.trim(p.dataType || "*").toLowerCase().match(kt) || [""], null == p.crossDomain && (i = Xe.exec(p.url.toLowerCase()), p.crossDomain = !(!i || i[1] === Oe[1] && i[2] === Oe[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Oe[3] || ("http:" === Oe[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = lt.param(p.data, p.traditional)), $(Ye, p, e, w), 2 === b) return w;
                l = lt.event && p.global, l && 0 === lt.active++ && lt.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !We.test(p.type), r = p.url, p.hasContent || (p.data && (r = p.url += (Ne.test(r) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = qe.test(r) ? r.replace(qe, "$1_=" + Ie++) : r + (Ne.test(r) ? "&" : "?") + "_=" + Ie++)), p.ifModified && (lt.lastModified[r] && w.setRequestHeader("If-Modified-Since", lt.lastModified[r]), lt.etag[r] && w.setRequestHeader("If-None-Match", lt.etag[r])), (p.data && p.hasContent && p.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ue + "; q=0.01" : "") : p.accepts["*"]);
                for (o in p.headers) w.setRequestHeader(o, p.headers[o]);
                if (p.beforeSend && (p.beforeSend.call(u, w, p) === !1 || 2 === b)) return w.abort();
                y = "abort";
                for (o in{success: 1, error: 1, complete: 1}) w[o](p[o]);
                if (c = $(Ge, p, e, w)) {
                    w.readyState = 1, l && h.trigger("ajaxSend", [w, p]), p.async && p.timeout > 0 && (s = setTimeout(function () {
                        w.abort("timeout")
                    }, p.timeout));
                    try {
                        b = 1, c.send(x, n)
                    } catch (_) {
                        if (!(2 > b)) throw _;
                        n(-1, _)
                    }
                } else n(-1, "No Transport");
                return w
            },
            getJSON: function (t, e, n) {
                return lt.get(t, e, n, "json")
            },
            getScript: function (t, e) {
                return lt.get(t, void 0, e, "script")
            }
        }), lt.each(["get", "post"], function (t, e) {
            lt[e] = function (t, n, i, o) {
                return lt.isFunction(n) && (o = o || i, i = n, n = void 0), lt.ajax({
                    url: t,
                    type: e,
                    dataType: o,
                    data: n,
                    success: i
                })
            }
        }), lt._evalUrl = function (t) {
            return lt.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }, lt.fn.extend({
            wrapAll: function (t) {
                if (lt.isFunction(t)) return this.each(function (e) {
                    lt(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = lt(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            }, wrapInner: function (t) {
                return lt.isFunction(t) ? this.each(function (e) {
                    lt(this).wrapInner(t.call(this, e))
                }) : this.each(function () {
                    var e = lt(this), n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            }, wrap: function (t) {
                var e = lt.isFunction(t);
                return this.each(function (n) {
                    lt(this).wrapAll(e ? t.call(this, n) : t)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    lt.nodeName(this, "body") || lt(this).replaceWith(this.childNodes)
                }).end()
            }
        }), lt.expr.filters.hidden = function (t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !at.reliableHiddenOffsets() && "none" === (t.style && t.style.display || lt.css(t, "display"))
        }, lt.expr.filters.visible = function (t) {
            return !lt.expr.filters.hidden(t)
        };
        var Je = /%20/g, Ze = /\[\]$/, Ke = /\r?\n/g, Qe = /^(?:submit|button|image|reset|file)$/i,
            tn = /^(?:input|select|textarea|keygen)/i;
        lt.param = function (t, e) {
            var n, i = [], o = function (t, e) {
                e = lt.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
            if (void 0 === e && (e = lt.ajaxSettings && lt.ajaxSettings.traditional), lt.isArray(t) || t.jquery && !lt.isPlainObject(t)) lt.each(t, function () {
                o(this.name, this.value)
            }); else for (n in t) U(n, t[n], e, o);
            return i.join("&").replace(Je, "+")
        }, lt.fn.extend({
            serialize: function () {
                return lt.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var t = lt.prop(this, "elements");
                    return t ? lt.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !lt(this).is(":disabled") && tn.test(this.nodeName) && !Qe.test(t) && (this.checked || !It.test(t))
                }).map(function (t, e) {
                    var n = lt(this).val();
                    return null == n ? null : lt.isArray(n) ? lt.map(n, function (t) {
                        return {name: e.name, value: t.replace(Ke, "\r\n")}
                    }) : {name: e.name, value: n.replace(Ke, "\r\n")}
                }).get()
            }
        }), lt.ajaxSettings.xhr = void 0 !== o.ActiveXObject ? function () {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && V() || J()
        } : V;
        var en = 0, nn = {}, on = lt.ajaxSettings.xhr();
        o.attachEvent && o.attachEvent("onunload", function () {
            for (var t in nn) nn[t](void 0, !0)
        }), at.cors = !!on && "withCredentials" in on, on = at.ajax = !!on, on && lt.ajaxTransport(function (t) {
            if (!t.crossDomain || at.cors) {
                var e;
                return {
                    send: function (n, i) {
                        var o, r = t.xhr(), a = ++en;
                        if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (o in t.xhrFields) r[o] = t.xhrFields[o];
                        t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (o in n) void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
                        r.send(t.hasContent && t.data || null), e = function (n, o) {
                            var s, l, c;
                            if (e && (o || 4 === r.readyState)) if (delete nn[a], e = void 0, r.onreadystatechange = lt.noop, o) 4 !== r.readyState && r.abort(); else {
                                c = {}, s = r.status, "string" == typeof r.responseText && (c.text = r.responseText);
                                try {
                                    l = r.statusText
                                } catch (d) {
                                    l = ""
                                }
                                s || !t.isLocal || t.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                            }
                            c && i(s, l, c, r.getAllResponseHeaders())
                        }, t.async ? 4 === r.readyState ? setTimeout(e) : r.onreadystatechange = nn[a] = e : e()
                    }, abort: function () {
                        e && e(void 0, !0)
                    }
                }
            }
        }), lt.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /(?:java|ecma)script/},
            converters: {
                "text script": function (t) {
                    return lt.globalEval(t), t
                }
            }
        }), lt.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), lt.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var e, n = vt.head || lt("head")[0] || vt.documentElement;
                return {
                    send: function (i, o) {
                        e = vt.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, n) {
                            (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || o(200, "success"))
                        }, n.insertBefore(e, n.firstChild)
                    }, abort: function () {
                        e && e.onload(void 0, !0)
                    }
                }
            }
        });
        var rn = [], an = /(=)\?(?=&|$)|\?\?/;
        lt.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var t = rn.pop() || lt.expando + "_" + Ie++;
                return this[t] = !0, t
            }
        }), lt.ajaxPrefilter("json jsonp", function (t, e, n) {
            var i, r, a,
                s = t.jsonp !== !1 && (an.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && an.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = lt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(an, "$1" + i) : t.jsonp !== !1 && (t.url += (Ne.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
                return a || lt.error(i + " was not called"), a[0]
            }, t.dataTypes[0] = "json", r = o[i], o[i] = function () {
                a = arguments
            }, n.always(function () {
                o[i] = r, t[i] && (t.jsonpCallback = e.jsonpCallback, rn.push(i)), a && lt.isFunction(r) && r(a[0]), a = r = void 0
            }), "script") : void 0
        }), lt.parseHTML = function (t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || vt;
            var i = ft.exec(t), o = !n && [];
            return i ? [e.createElement(i[1])] : (i = lt.buildFragment([t], e, o), o && o.length && lt(o).remove(), lt.merge([], i.childNodes))
        };
        var sn = lt.fn.load;
        lt.fn.load = function (t, e, n) {
            if ("string" != typeof t && sn) return sn.apply(this, arguments);
            var i, o, r, a = this, s = t.indexOf(" ");
            return s >= 0 && (i = lt.trim(t.slice(s, t.length)), t = t.slice(0, s)), lt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), a.length > 0 && lt.ajax({
                url: t,
                type: r,
                dataType: "html",
                data: e
            }).done(function (t) {
                o = arguments, a.html(i ? lt("<div>").append(lt.parseHTML(t)).find(i) : t)
            }).complete(n && function (t, e) {
                a.each(n, o || [t.responseText, e, t])
            }), this
        }, lt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            lt.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), lt.expr.filters.animated = function (t) {
            return lt.grep(lt.timers, function (e) {
                return t === e.elem
            }).length
        };
        var ln = o.document.documentElement;
        return lt.offset = {
            setOffset: function (t, e, n) {
                var i, o, r, a, s, l, c, d = lt.css(t, "position"), p = lt(t), u = {};
                "static" === d && (t.style.position = "relative"), s = p.offset(), r = lt.css(t, "top"), l = lt.css(t, "left"), c = ("absolute" === d || "fixed" === d) && lt.inArray("auto", [r, l]) > -1, c ? (i = p.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), lt.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (u.top = e.top - s.top + a), null != e.left && (u.left = e.left - s.left + o), "using" in e ? e.using.call(t, u) : p.css(u)
            }
        }, lt.fn.extend({
            offset: function (t) {
                if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                    lt.offset.setOffset(this, t, e)
                });
                var e, n, i = {top: 0, left: 0}, o = this[0], r = o && o.ownerDocument;
                if (r) return e = r.documentElement, lt.contains(e, o) ? (typeof o.getBoundingClientRect !== At && (i = o.getBoundingClientRect()), n = Z(r), {
                    top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : i
            }, position: function () {
                if (this[0]) {
                    var t, e, n = {top: 0, left: 0}, i = this[0];
                    return "fixed" === lt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), lt.nodeName(t[0], "html") || (n = t.offset()), n.top += lt.css(t[0], "borderTopWidth", !0), n.left += lt.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - lt.css(i, "marginTop", !0),
                        left: e.left - n.left - lt.css(i, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent || ln; t && !lt.nodeName(t, "html") && "static" === lt.css(t, "position");) t = t.offsetParent;
                    return t || ln
                })
            }
        }), lt.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
            var n = /Y/.test(e);
            lt.fn[t] = function (i) {
                return Et(this, function (t, i, o) {
                    var r = Z(t);
                    return void 0 === o ? r ? e in r ? r[e] : r.document.documentElement[i] : t[i] : void(r ? r.scrollTo(n ? lt(r).scrollLeft() : o, n ? o : lt(r).scrollTop()) : t[i] = o)
                }, t, i, arguments.length, null)
            }
        }), lt.each(["top", "left"], function (t, e) {
            lt.cssHooks[e] = z(at.pixelPosition, function (t, n) {
                return n ? (n = re(t, e), se.test(n) ? lt(t).position()[e] + "px" : n) : void 0
            })
        }), lt.each({Height: "height", Width: "width"}, function (t, e) {
            lt.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, i) {
                lt.fn[i] = function (i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i),
                        a = n || (i === !0 || o === !0 ? "margin" : "border");
                    return Et(this, function (e, n, i) {
                        var o;
                        return lt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? lt.css(e, n, a) : lt.style(e, n, i, a)
                    }, e, r ? i : void 0, r, null)
                }
            })
        }), lt.fn.size = function () {
            return this.length
        }, lt.fn.andSelf = lt.fn.addBack, i = function () {
            return lt
        }.call(e, n, e, t), !(void 0 !== i && (t.exports = i)), lt
    })
}, function (t, e) {
    "use strict";

    function n(t) {
        var e = document.getElementsByTagName("head");
        e && e[0] && (e = e[0]);
        var n = document.createElement("script");
        n.src = t, n.async = !0, n.defer = !0, n.language = "JavaScript", e.appendChild(n), o = !0
    }

    var i = void 0, o = void 0, r = void 0;
    t.exports.init = function (t) {
        t && n(t)
    }, t.exports.log = function (t, e, n, a, s) {
        o && (r === t ? (clearTimeout(i), i = setTimeout(function () {
            window._czc && window._czc.push && (e = e || ".", n = n || "", window._czc.push(["_trackEvent", t, e, n, a, s]), r = t)
        }, 300)) : window._czc && window._czc.push && (e = e || ".", n = n || "", window._czc.push(["_trackEvent", t, e, n, a, s]), r = t))
    }
}, function (t, e, n) {
    (function (e, i) {
        "use strict";
        var o = n(7);
        if (o && o.parentNode && o.parentNode.removeChild && o.parentNode.removeChild(o), document.getElementById("BAIDU_HAS_BUILT")) e("#BAIDU_HAS_BUILT").addClass(i.from_device), t.exports = !0; else {
            var r = document.createElement("div");
            r.id = "BAIDU_HAS_BUILT";
            var a = document.getElementsByTagName("head");
            a && a[0] && (a = a[0]), a.appendChild(r), e("#BAIDU_HAS_BUILT").addClass(i.from_device), t.exports = !1
        }
    }).call(e, n(4), n(1))
}, function (t, e, n) {
    (function (e) {
        "use strict";

        function n() {
            if (document.currentScript) return document.currentScript;
            for (var t = document.getElementsByTagName("script"), n = 0; n < t.length; n++) if (new RegExp(e.extName + "-notifier", "i").test(t[n].src)) return t[n]
        }

        t.exports = n()
    }).call(e, n(1))
}, function (t, e) {
    "use strict";
    Function.prototype.bind || (Function.prototype.bind = function (t) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var e = Array.prototype.slice.call(arguments, 1), n = this, i = function () {
        }, o = function () {
            return n.apply(this instanceof i ? this : t, e.concat(Array.prototype.slice.call(arguments)))
        };
        return i.prototype = this.prototype, o.prototype = new i, o
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function (t, e) {
        var n;
        if (null == this) throw new TypeError('"this" is null or not defined');
        var i = Object(this), o = i.length >>> 0;
        if (0 === o) return -1;
        var r = +e || 0;
        if (Math.abs(r) === 1 / 0 && (r = 0), r >= o) return -1;
        for (n = Math.max(r >= 0 ? r : o - Math.abs(r), 0); o > n;) {
            if (n in i && i[n] === t) return n;
            n++
        }
        return -1
    }), (!Array.prototype.filter || location.host.indexOf("ule.com") > -1) && (Array.prototype.filter = function (t) {
        if (void 0 === this || null === this) throw new TypeError;
        var e = Object(this), n = e.length >>> 0;
        if ("function" != typeof t) throw new TypeError;
        for (var i = [], o = arguments.length >= 2 ? arguments[1] : void 0, r = 0; n > r; r++) if (r in e) {
            var a = e[r];
            t.call(o, a, r, e) && i.push(a)
        }
        return i
    })
}, function (t, e, n) {
    (function (e, n) {
        "use strict";
        t.exports = function (t) {
            var i = "?callback=?";
            ("sogou" === e.from_device || "chrome" === e.from_device) && (i = ""), n.getJSON(e.server + "/ip.php" + i).done(function (n) {
                n && n.result instanceof Array && (e.forbidWishlit = !0, e.forbidYFQ = !0), n && n.result && n.result.address && n.result.address.indexOf("北京") > -1 && (e.forbidWishlit = !0, e.forbidYFQ = !0), t()
            }).fail(function () {
                t()
            })
        }, t.exports.common = function (t) {
            var i = "?callback=?";
            ("sogou" === e.from_device || "chrome" === e.from_device) && (i = ""), "xdjf" === e.from_device && (i = "?callback=?&district=1"), n.getJSON(e.server + "/ip.php" + i).done(function (e) {
                t(e && e.result && e.result.address ? e : null)
            }).fail(function () {
                t(null)
            })
        }
    }).call(e, n(1), n(4))
}, function (t, e, n) {
    (function (e, i) {
        "use strict";
        var o = n(11), r = (n(16), n(21)), a = n(17), s = function () {
            e("html").addClass("bd_" + i.site)
        }, l = function () {
            var t = "";
            t = chrome.extension ? chrome.extension.getURL("css/" + i.cssname) : i.s_server + "/css/brwext/" + i.cssname, e("head").append('<link type="text/css" href="' + t + "?v=" + i.version + '" rel="stylesheet" />')
        }, c = function (t) {
            a.on(function (e) {
                "get_permanent" === e.type ? (e.value ? (e = JSON.parse(e.value), i.show_minibar = e.show_minibar || "1", i.show_inner_low = e.show_inner_low || "0", i.show_promo = e.show_promo || "1", i.show_leftguess = e.show_leftguess || "1", i.guess_fold = e.guess_fold || "0", i.guid = e.guid || "") : (i.show_minibar = "1", i.show_inner_low = "0", i.show_promo = "1", i.show_leftguess = "1", i.guess_fold = "0"), t()) : "get_local_img" === e.type ? (i.localImg = e.value, i.aliSite && (i.loadImg = e.value + "120.gif", i.noImg = e.value + "default_load_image.png")) : "user_extension_id" === e.type && (i.userid = e.value)
            }), a.trigger({type: "user_extension_id"}), a.trigger({type: "get_permanent"}), a.trigger({type: "get_local_img"})
        };
        t.exports.init = function () {
            c(function () {
                r.tongjiLog("page_view"), r.getPermanent(function () {
                    2 === i.pageInfo.type ? (r.tongjiLog("product_page_visit"), o.init(), s(), i.aliSite || l()) : 1 === i.pageInfo.type && (r.getDicts(function () {
                        n(67)()
                    }), n(68).init(), s(), i.aliSite || l())
                })
            })
        }
    }).call(e, n(4), n(1))
}, function (t, e, n) {
    (function (e, i) {
        "use strict";
        var o = n(12), r = n(13), a = n(16), s = n(15), l = n(18), c = n(19), d = n(24), p = n(25), u = n(36),
            h = n(40), m = n(53), f = n(56), g = n(60), x = n(62), v = n(17), b = n(5), y = n(21), w = n(63), _ = n(64),
            k = void 0, S = {}, T = e.supportSite, C = function () {
                var t = n(66);
                i("body").append(o.compile(t)({
                    setting: e.server + "/brwext/setting_feedback?set=1",
                    feedback: e.server + "/brwext/setting_feedback?fed=1"
                })), A()
            }, A = function () {
                i(".bdext-foot a").on("mousedown", function () {
                    i(this).addClass("_press")
                }), i(".bdext-foot a").on("click", function () {
                    v.trigger({type: "setting_feedback"})
                }), i("#bdext_mainbar .bdext-head").on("click", function () {
                    b.log("mainbar-logo-click")
                }), i(".bdext-foot a").on("mouseup", function () {
                    i(this).removeClass("_press")
                }), i("#bdext_mainbar").on("click", function (t) {
                    var e = void 0;
                    "A" === t.target.nodeName ? e = t.target.href : "A" === t.target.parentNode.nodeName && (e = t.target.parentNode.href), e && -1 === e.indexOf("javascript:") && y.tongji("4", "click", e)
                }), i(window).resize(function () {
                    clearTimeout(k), k = setTimeout(function () {
                        c.resizeAutoWidth(), h.resizeSetLeft()
                    }, 1e3)
                })
            }, j = function (t) {
                var n;
                if (t.b2c && t.b2c.store ? n = t.b2c : t.b2c_fuzzy && (n = P(t.b2c_fuzzy)), n) {
                    for (var o = [], r = 0; r < n.store.length; r++) {
                        var a = n.store[r].product[0], s = a.dp_id.match(/\d+-(\d+)$/) && a.dp_id.match(/\d+-(\d+)$/)[1];
                        s && T.indexOf(s) > -1 && o.push(n.store[r])
                    }
                    i("#bdext_mainbar").show(), e.showMainbar = !0, y.tongji("4", "show");
                    var l = c.calCompare() || o.length;
                    z(o.slice(0, l)), c.autoWidth()
                }
            }, P = function (t) {
                var e = {}, n = t.product;
                n = d(n);
                for (var i in n) if ("1" == n[i].more) {
                    var o = n[i].all;
                    for (var r in o) {
                        var a = o[r].site_name;
                        null == e[a] && (e[a] = []), e[a].push(o[r])
                    }
                } else {
                    var a = n[i].site_name;
                    null == e[a] && (e[a] = []), e[a].push(n[i])
                }
                var s = {store: []};
                for (var l in e) if ("undefined" != typeof e[l][0].fee) {
                    var c = {product: e[l], fee: e[l][0].fee};
                    s.store.push(c)
                }
                return s
            }, z = function (t) {
                for (var e = [], r = 0; r < t.length; r++) e.push(t[r].product[0]), S[t[r].product[0].dp_id] = t[r].product;
                var a = n(22), s = o.compile(a)({data: e, classname: "bdext-item-dp"});
                i(".bdext-product-compare").append(s), E()
            }, L = function (t, i) {
                var r = 0, a = S[i], s = a.length, l = c.calDetailNum(), d = l.num;
                s >= d && (r = Math.ceil(s / d));
                var p = n(23);
                t.append(o.compile(p)({
                    data: a,
                    per: d,
                    loadimg: e.loadImg,
                    pages: r
                })), s >= d ? (t.find(".bdext-product-box").width(l.width), M(t), c.loadImage(0, d, t.find(".bdext-product-box"))) : (c.loadImage(0, s, t.find(".bdext-product-box")), c.setSimplePagePos(s, t))
            }, M = function (t) {
                t.find(".bdext-turnleft .turnpage-btn").on("click", function () {
                    c.changePage(-1, this)
                }), t.find(".bdext-turnright .turnpage-btn").on("click", function () {
                    c.changePage(1, this)
                })
            }, E = function () {
                var t;
                i(".bdext-item-dp").on("mouseenter", function () {
                    clearTimeout(t), i(".bdext-product-detail").hide();
                    var e = i(this), n = e.find(".bdext-product-detail");
                    if (n.length > 0) n.show(); else {
                        var o = e.attr("data-id");
                        o && L(e, o)
                    }
                }), i(".bdext-item-dp").on("mouseleave", function () {
                    var e = this;
                    t = setTimeout(function () {
                        i(e).find(".bdext-product-detail").hide()
                    }, 100)
                })
            }, I = function (t) {
                var n = e.dp, i = e.dp.url || window.location.href,
                    o = e.server + "/brwext/product?union=" + e.union + "&url=" + encodeURIComponent(i) + "&site=" + n.site + "&isbn=" + n.isbn + "&name=" + encodeURIComponent(n.name) + "&keyword=" + encodeURIComponent(n.keyword) + "&id=" + n.id + "&price=" + n.price + "&cat_id=" + n.cat_id + "&userid=" + n.userid + "&shop_name=" + n.userid + "&cat_name=" + encodeURIComponent(n.cat_name) + "&brand_string=" + encodeURIComponent(n.brand_string);
                a.get(o).done(function (e) {
                    s.set("dp_data", e), t(e)
                })
            }, N = function (t) {
                l.init2(t.product), m.init(), g.init(), t.price.list.length > 0 && h.init2(t.price.list[0])
            };
        t.exports.init = function () {
            C(), r.get(function () {
                e.site.indexOf("taobao") > -1 || e.site.indexOf("tmall") > -1 ? (y.tongji("5", "tts"), x.ready(N), i(".bdext-history").remove()) : I(function (t) {
                    "amazon-com" === e.site || "amazon-uk" === e.site || "amazon-jp" === e.site || "6pm" === e.site ? (w.init(t.now.now_dp_id), m.init(), n(14).getRate(_.init), h.init(t.b2c.all_dp_ids, t.now.now_dp_id)) : (j(t), m.init(), f.init(), l.init(t), p.init(), u.init(), h.init(t.b2c.all_dp_ids, t.now.now_dp_id))
                })
            })
        }
    }).call(e, n(1), n(4))
}, function (t, e, n) {
    var i;
    !function () {
        function o(t) {
            return t.replace(k, "").replace(S, ",").replace(T, "").replace(C, "").replace(A, "").split(j)
        }

        function r(t) {
            return "'" + t.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'"
        }

        function a(t, e) {
            function n(t) {
                return u += t.split(/\n/).length - 1, d && (t = t.replace(/\s+/g, " ").replace(/<!--[\w\W]*?-->/g, "")), t && (t = f[1] + r(t) + f[2] + "\n"), t
            }

            function i(t) {
                var n = u;
                if (c ? t = c(t, e) : a && (t = t.replace(/\n/g, function () {
                        return u++, "$line=" + u + ";"
                    })), 0 === t.indexOf("=")) {
                    var i = p && !/^=[=#]/.test(t);
                    if (t = t.replace(/^=[=#]?|[\s;]*$/g, ""), i) {
                        var r = t.replace(/\s*\([^\)]+\)/, "");
                        x[r] || /^(include|print)$/.test(r) || (t = "$escape(" + t + ")")
                    } else t = "$string(" + t + ")";
                    t = f[1] + t + f[2]
                }
                return a && (t = "$line=" + n + ";" + t), w(o(t), function (t) {
                    if (t && !h[t]) {
                        var e;
                        e = "print" === t ? b : "include" === t ? y : x[t] ? "$utils." + t : v[t] ? "$helpers." + t : "$data." + t, _ += t + "=" + e + ",", h[t] = !0
                    }
                }), t + "\n"
            }

            var a = e.debug, s = e.openTag, l = e.closeTag, c = e.parser, d = e.compress, p = e.escape, u = 1,
                h = {$data: 1, $filename: 1, $utils: 1, $helpers: 1, $out: 1, $line: 1}, m = "".trim,
                f = m ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"],
                g = m ? "$out+=text;return $out;" : "$out.push(text);",
                b = "function(){var text=''.concat.apply('',arguments);" + g + "}",
                y = "function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);" + g + "}",
                _ = "'use strict';var $utils=this,$helpers=$utils.$helpers," + (a ? "$line=0," : ""), k = f[0],
                S = "return new String(" + f[3] + ");";
            w(t.split(s), function (t) {
                t = t.split(l);
                var e = t[0], o = t[1];
                1 === t.length ? k += n(e) : (k += i(e), o && (k += n(o)))
            });
            var T = _ + k + S;
            a && (T = "try{" + T + "}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:" + r(t) + ".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");
            try {
                var C = new Function("$data", "$filename", T);
                return C.prototype = x, C
            } catch (A) {
                throw A.temp = "function anonymous($data,$filename) {" + T + "}", A
            }
        }

        var s = function (t, e) {
            return "string" == typeof e ? y(e, {filename: t}) : d(t, e)
        };
        s.version = "3.0.0", s.config = function (t, e) {
            l[t] = e
        };
        var l = s.defaults = {openTag: "<%", closeTag: "%>", escape: !0, cache: !0, compress: !1, parser: null},
            c = s.cache = {};
        s.render = function (t, e) {
            return y(t, e)
        };
        var d = s.renderFile = function (t, e) {
            var n = s.get(t) || b({filename: t, name: "Render Error", message: "Template not found"});
            return e ? n(e) : n
        };
        s.get = function (t) {
            var e;
            if (c[t]) e = c[t]; else if ("object" == typeof document) {
                var n = document.getElementById(t);
                if (n) {
                    var i = (n.value || n.innerHTML).replace(/^\s*|\s*$/g, "");
                    e = y(i, {filename: t})
                }
            }
            return e
        };
        var p = function (t, e) {
            return "string" != typeof t && (e = typeof t, "number" === e ? t += "" : t = "function" === e ? p(t.call(t)) : ""), t
        }, u = {"<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "&": "&#38;"}, h = function (t) {
            return u[t]
        }, m = function (t) {
            return p(t).replace(/&(?![\w#]+;)|[<>"']/g, h)
        }, f = Array.isArray || function (t) {
            return "[object Array]" === {}.toString.call(t)
        }, g = function (t, e) {
            var n, i;
            if (f(t)) for (n = 0, i = t.length; i > n; n++) e.call(t, t[n], n, t); else for (n in t) e.call(t, t[n], n)
        }, x = s.utils = {$helpers: {}, $include: d, $string: p, $escape: m, $each: g};
        s.helper = function (t, e) {
            v[t] = e
        };
        var v = s.helpers = x.$helpers;
        s.onerror = function (t) {
            var e = "Template Error\n\n";
            for (var n in t) e += "<" + n + ">\n" + t[n] + "\n\n";
            "object" == typeof console && console.error(e)
        };
        var b = function (t) {
                return s.onerror(t), function () {
                    return "{Template Error}"
                }
            }, y = s.compile = function (t, e) {
                function n(n) {
                    try {
                        return new r(n, o) + ""
                    } catch (i) {
                        return e.debug ? b(i)() : (e.debug = !0, y(t, e)(n))
                    }
                }

                e = e || {};
                for (var i in l) void 0 === e[i] && (e[i] = l[i]);
                var o = e.filename;
                try {
                    var r = a(t, e)
                } catch (s) {
                    return s.filename = o || "anonymous", s.name = "Syntax Error", b(s)
                }
                return n.prototype = r.prototype, n.toString = function () {
                    return r.toString()
                }, o && e.cache && (c[o] = n), n
            }, w = x.$each,
            _ = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",
            k = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,
            S = /[^\w$]+/g, T = new RegExp(["\\b" + _.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g"),
            C = /^\d[^,]*|,\d[^,]*/g, A = /^,+|,+$/g, j = /^$|,+/;
        l.openTag = "{{", l.closeTag = "}}";
        var P = function (t, e) {
            var n = e.split(":"), i = n.shift(), o = n.join(":") || "";
            return o && (o = ", " + o), "$helpers." + i + "(" + t + o + ")"
        };
        l.parser = function (t, e) {
            t = t.replace(/^\s/, "");
            var n = t.split(" "), i = n.shift(), o = n.join(" ");
            switch (i) {
                case"if":
                    t = "if(" + o + "){";
                    break;
                case"else":
                    n = "if" === n.shift() ? " if(" + n.join(" ") + ")" : "", t = "}else" + n + "{";
                    break;
                case"/if":
                    t = "}";
                    break;
                case"each":
                    var r = n[0] || "$data", a = n[1] || "as", l = n[2] || "$value", c = n[3] || "$index",
                        d = l + "," + c;
                    "as" !== a && (r = "[]"), t = "$each(" + r + ",function(" + d + "){";
                    break;
                case"/each":
                    t = "});";
                    break;
                case"echo":
                    t = "print(" + o + ");";
                    break;
                case"print":
                case"include":
                    t = i + "(" + n.join(",") + ");";
                    break;
                default:
                    if (/^\s*\|\s*[\w\$]/.test(o)) {
                        var p = !0;
                        0 === t.indexOf("#") && (t = t.substr(1), p = !1);
                        for (var u = 0, h = t.split("|"), m = h.length, f = h[u++]; m > u; u++) f = P(f, h[u]);
                        t = (p ? "=" : "=#") + f
                    } else t = s.helpers[i] ? "=#" + i + "(" + n.join(",") + ");" : "=" + t
            }
            return t
        }, i = function () {
            return s
        }.call(e, n, e, t), !(void 0 !== i && (t.exports = i))
    }()
}, function (t, e, n) {
    (function (e, i) {
        "use strict";
        var o = (n(3), e.pageInfo.siteName), r = 0, a = n(14), s = {
            tmall: function () {
                var t = {}, e = i(".attributes-list ul").html(), n = "", o = "";
                null == e && (e = i(".attributes-list").html() || ""), e = e.replace(/(?:<\!\-\-[^\-]*\-\->|<li[^>]*>|\ \ )/gi, ""), e = e.replace(/&nbsp;/gi, " "), e = e.replace(/<\/li[^>]*>/gi, "|"), e = e.replace(/\n/gi, "");
                var r = e.match(new RegExp(/\|(\u54c1\u724c(?:\:|\uff1a)[^\|]+)/gi));
                if (r) for (var a = 0; a < r.length; a++) n += r[a] + "|";
                var s = e.match(new RegExp(/((?:\u7cfb\u5217|\u8d27\u53f7|\u578b\u53f7|\u6b3e\u53f7)(?:\:|\uff1a)[^\|]+)/gi));
                if (s) for (var a = 0; a < s.length; a++) n += s[a] + "|";
                var l = e.match(new RegExp(/(ISBN[^\:\uff1a]*(?:\:|\uff1a)[^\|]+)/gi));
                if (l) for (var a = 0; a < l.length; a++) n += l[a] + "|";
                t.skeyword = n, t.cat_id = "";
                var c = i("#tb-beacon-aplus").attr("exparams");
                if (c = c && c.match(/category=item%5f(\d+)&/), c = c && c[1], t.cat_id = c, "" == t.cat_id) {
                    var c = i("#detail-recommend-viewed").attr("data-catid");
                    t.cat_id = c
                }
                t.root_id = i('#J_FrmBid input[name="rootCatId"]').val(), t.pic = i("#J_ImgBooth").attr("src");
                var d = location.href.match(/[?&]id=(\d+)/);
                d = d && d[1];
                var p = i("meta[name='microscope-data']").attr("content"), u = p && p.match(/userid=(\d+)/);
                o = u && u[1];
                var h = i("#J_Price").text();
                return h || (h = i("#J_StrPrice").text()), h || (h = i(".tm-promo-price .tm-price").text()), h || (h = i("#J_StrPriceModBox .tm-price").text()), h || (h = i(".tm-price").text()), t.price = h, t.userid = o, t.name = i("#J_DetailMeta .tb-detail-hd h1").text().replace(/\n/g, "").trim(), t.itemId = d, t.website = "tmall", t
            }, taobao: function () {
                var t = {}, e = i(".attributes-list ul").html(), n = "", o = "";
                null == e && (e = i(".attributes-list").html()), e = e.replace(/(?:<\!\-\-[^\-]*\-\->|<li[^>]*>|\ \ )/gi, ""), e = e.replace(/&nbsp;/gi, " "), e = e.replace(/<\/li[^>]*>/gi, "|"), e = e.replace(/\n/gi, "");
                var r = e.match(new RegExp(/\|(\u54c1\u724c(?:\:|\uff1a)[^\|]+)/gi));
                if (r) for (var a = 0; a < r.length; a++) n += r[a] + "|";
                var s = e.match(new RegExp(/((?:\u7cfb\u5217|\u8d27\u53f7|\u578b\u53f7|\u6b3e\u53f7)(?:\:|\uff1a)[^\|]+)/gi));
                if (s) for (var a = 0; a < s.length; a++) n += s[a] + "|";
                var l = e.match(new RegExp(/(ISBN[^\:\uff1a]*(?:\:|\uff1a)[^\|]+)/gi));
                if (l) for (var a = 0; a < l.length; a++) n += l[a] + "|";
                t.skeyword = n, t.cat_id = i("#J_Pine").attr("data-catid"), t.root_id = i("#J_Pine").attr("data-rootid"), t.pic = i("#J_ImgBooth").attr("src");
                var c = i("meta[name='microscope-data']").attr("content"), d = c && c.match(/userid=(\d+)/);
                o = d && d[1];
                var p = i("#J_Price").text();
                return t.nnid = location.href.match(/[?&]id=([0-9]+)/) && location.href.match(/[?&]id=([0-9]+)/)[1], t.price = p, t.newtitle = i("#J_Title .tb-main-title").text().trim(), t.itemId = t.nnid, t.userid = o, t.website = "taobao", t
            }, "taobao-95095": function () {
                return {price: i("#J_PromoPrice .tm-price").text(), name: i("#J_DetailMeta .tb-detail-hd h1").text()}
            }, "taobao-ju": function () {
                var t = {}, e = /item_id=(\d+)/gi.exec(location.href);
                return t.id = e && 2 == e.length && e[1], t.name = i.trim(i(".main-box h2").text()), t
            }, "taobao-xianyu": function () {
                return {name: i("h1.title").text(), price: i(".price-block .price em").text()}
            }, "ai-taobao": function () {
                var t = void 0;
                if (!e.chrome_extension) return t = window.pageconfig.promoPrice, t || (t = window.ENV_DATA && window.ENV_DATA.compList && window.ENV_DATA.compList.item_detail && window.ENV_DATA.compList.item_detail.data && window.ENV_DATA.compList.item_detail.data.data1[0].price), {
                    name: i("h3.item-title a").text(),
                    price: t,
                    url: window.pageconfig.itemId ? "http://item.taobao.com/item.htm?id=" + window.pageconfig.itemId : null
                };
                var n = i(".aitaobao-edetail-header script").text(), o = /itemId":"(\d+)"/.exec(n);
                return o && (o = o[1]), t = /promoPrice":"([\d\.]+)"/.exec(n), t && (t = t[1]), {
                    name: i("h3.item-title a").text(),
                    price: t,
                    url: o ? "http://item.taobao.com/item.htm?id=" + o : null
                }
            }, dangdang: function () {
                var t = window.prodSpuInfo, e = {}, n = i('.book_detailed span:contains("I S B N")').text().substr(8);
                if ("" == n && (n = i('.intro span:contains("I S B N")').text().substr(8)), "" == n && (n = i('.book_messbox .show_info_left:contains("ＩＳＢＮ")').next(".show_info_right").text()), "" == n && (n = i('.book_messbox .show_info_left:contains("I S R C")').next(".show_info_right").text()), "" == n) {
                    var o = i('.book_messbox span:contains("I S R C")');
                    n = o && o.parent().text().substr(7)
                }
                if ("" == n) {
                    var n = i('#detail_describe li:contains("ISBN")').text().match(/[0-9]+/);
                    n && (n = n[0])
                }
                return e.price = i("#dd-price").text(), e.isbn = n, e.pic = i("#main-img-slider li img").eq(0).attr("src"), e.website = "dangdang", e.itemId = location.href.match(/dangdang\.com\/(\d+)/)[1], e.brand_string = i('.mall_goods_foursort_style_frame:contains("品牌")').text().replace("品牌：", ""), "" == e.brand_string && (e.brand_string = window.google_tag_params && window.google_tag_params.ecomm_pbrand), e.price || (e.price = i("#salePriceTag").text()), e.name = i(".name_info h1").text().trim(), e.cat_id = t && t.categoryId, e
            }, "360buy-paimai": function () {
                var t = {};
                return t.price = i("#priceDiv").text().match(/[0-9.]+/)[0], t.name = i(".intro_detail .name").attr("title"), t
            }, "360buy-book": function () {
                try {
                    var t = i("title").text(), n = "";
                    n = i("#summary-isbn .dd").text(), t = i("#name h1").html(), t.indexOf("<") > 0 && (t = t.substr(0, t.indexOf("<")))
                } catch (o) {
                    e.debug && console.log(o)
                }
                try {
                    n = n || i('li div:contains("ＩＳＢＮ")').text().substr(5), t = t || i("#name h2").html().replace(/(.*)<font.*/i, "$1")
                } catch (o) {
                    e.debug && console.log(o)
                }
                return {name: t, isbn: n}
            }, "360buy-tuan": function () {
                var t = {};
                t.name = t.name.replace(" - 京品惠团购", ""), e.site = "360buy";
                try {
                    t.id = i("#PshowSkuid").val()
                } catch (n) {
                    e.debug && console.log(n)
                }
                var o = i(".e-content h2").text();
                o.length > t.name.length && (t.name = o);
                try {
                    var r = i(".e-extra .p-img a");
                    r.length > 0 && !/^javascript:/.test(r.attr("href")) ? t.href = r.attr("href") : "undefined" != typeof i("#PshowSkuid").val() && (t.href = "http://item.jd.com/" + i("#PshowSkuid").val() + ".html")
                } catch (n) {
                    e.debug && console.log(n)
                }
                try {
                    t.url = i(".e-extra a").eq(0).attr("href"), t.url.indexOf("javascript") > -1 && (t.url = i(".img-info a").eq(0).attr("href"))
                } catch (n) {
                    e.debug && console.log(n)
                }
                return t
            }, "360buy-bigimage": function () {
                var t = "";
                "" == t && (t = i(".o-m-1 h1 a").attr("href"));
                var e = i(".o-m-1 h1 a").eq(0).text();
                return {url: t, name: e, isbn: ""}
            }, "360buy-club": function () {
                var t = "";
                "" == t && (t = i(".p-name a").attr("href"));
                var e = i(".p-name a").eq(0).text();
                return {url: t, name: e, isbn: ""}
            }, "360buy": function () {
                var t = {}, e = i("#name h1").text(), n = "";
                e.indexOf("<") > 0 && (e = e.substr(0, e.indexOf("<"))), n = i("#summary-isbn .dd").text(), n || (n = i("td:contains('ISBN号：')").text().match(/\d+/), n && (n = n[0])), n || (n = i("#product-detail li:contains('ISBN：')").text().match(/\d+/), n && (n = n[0])), n || (n = i("td:contains('ISBN号：')").text().substr(7)), t.name = e, t.isbn = n;
                var o = window.pageConfig && window.pageConfig.product && window.pageConfig.product.brand;
                0 != o && (t.brand_string = i('#root-nav a[href*="' + o + '"]').text()), t.price = i("#jd-price").text().replace(/[￥¥]+/, "");
                var r = [], a = i("body").attr("class");
                if (a) var s = a.match(/cat\-\d\-([0-9]+)/g);
                s || (s = []);
                for (var l = 0; l < s.length; l++) r.push(s[l].match(/\d\-([0-9]+)/)[1]);
                return t.cat_id = r.join("-"), t.price || (t.price = i(".p-price:eq(0)").text()), t.pic = i(".spec-items ul li img").eq(0).attr("src"), t.itemId = location.href.match(/(\d+)\.html/)[1], t.name = t.name && t.name.replace("【京东超市】", ""), t.website = "jd.com", t
            }, suning: function () {
                var t, n = {}, o = i("#itemDisplayName").text().trim();
                if (t || (t = i('#total dt:contains("I")').next().eq(0).text(), t = t.match(/(?:\d{13}|\d{10}|\d{8})/gi), t && (t = t[0])), t || (t = i('.book-info span:contains("I")').next().eq(0).text(), t = t.match(/(?:\d{13}|\d{10}|\d{8})/gi), t && (t = t[0])), t || (t = i('#bookParameterField dl:contains("ISBN")').text().match(/[0-9]+/), t && (t = t[0])), !e.crc64 && !n.url) {
                    var r = window.sn.productId;
                    n.url = "http://www.suning.com/emall/prd_10052_10051_-7_" + r + "_.html"
                }
                var a = i(".w3").toArray();
                a = a.map(function (t) {
                    return t.innerHTML
                });
                var s = void 0;
                a.indexOf("团购价") > -1 && (s = i("span.small-price").text());
                var l = i("#promotionPrice.mainprice").text(), c = i(".mainprice").text();
                n.name = o, n.isbn = t, n.brand_string = window.sn && window.sn.brandName || "", n.price = window.sn && window.sn.promotionPrice || 0, c && (n.price = c), l && (n.price = l), s && (n.price = s), n.itemId = location.href.match(/(\d+\/\d+)\.html/)[1];
                var d = i(".breadcrumb .dropdown:nth-last-of-type(3) a"), p = d && d.attr("href");
                return p && (n.cat_id = p.match(/(\d-\d{0,}-\d)\.html/) ? p.match(/(\d-\d{0,}-\d)\.html/)[1] : ""), n.website = "suning", n.pic = i("#bigImage img").attr("src"), n.pic && (n.pic = i("#bigImg img").attr("src")), n.name || (n.name = window.sn && window.sn.itemDisplayName), n.name = n.name && n.name.replace("【苏宁易购超市】", ""), n
            }, amazon: function () {
                var t = {}, e = "", n = i('li:contains("ISBN")').text(), o = i('li:contains("条形码")').text(),
                    r = i('li b:contains("ASIN")').parent("li").text();
                n = n ? n.substr(5) : "", o = o ? o.substr(4) : "", r = r ? r.substr(5) : "", e = "" == n ? o : "" == o ? n : n.length > o.length ? o : n, e = e || r, e = e.replace(/(\s)/g, ""), t.name = i("#btAsinTitle span").eq(0).text().replace(/(.*)<span.*/i, "$1"), t.name = i("#productTitle").text().trim(), t.isbn = e, t.brand_string = i("#brand").text().trim(), t.price = i("#priceblock_dealprice").text().replace(/[￥¥]+/, ""), "" == t.price && (t.price = i("span.a-size-large.a-color-price").text()), "" == t.price && (t.price = i("#priceblock_ourprice").text()), "" == t.price && (t.price = i("#priceblock_saleprice").text()), "" == t.price && (t.price = i(".offer-price:eq(0)").text()), "" == t.price && (t.price = i("#olp_feature_div .a-color-price").text()), "" == t.price && (t.price = i(".a-color-price:eq(0)").text());
                var a = location.href, s = location.host;
                t.itemId = location.href.match(/\/dp\/([0-9A-Za-z]+)(?:\/|$)/)[1], t.cat_id = function () {
                    var t, e, n = "";
                    return document.querySelector(".a-breadcrumb li:nth-child(7) a") ? e = document.querySelector(".a-breadcrumb li:nth-child(7) a").getAttribute("href") : document.querySelector(".a-breadcrumb li:nth-child(5) a") ? e = document.querySelector(".a-breadcrumb li:nth-child(5) a").getAttribute("href") : document.querySelector(".a-breadcrumb li:nth-child(3) a") && (e = document.querySelector(".a-breadcrumb li:nth-child(3) a").getAttribute("href")), t = e.split("?")[1], t && t.split("&").forEach(function (t) {
                        t.match(/node=.*/) && (n = t.match(/node=(.*)/)[1])
                    }), n
                }(), t.url2 = a.replace(s, "www.amazon.cn");
                for (var l = i("#wayfinding-breadcrumbs_feature_div .a-unordered-list li a"), c = l.length, d = [], p = 0; c > p; p++) d.push(l.eq(p).text().trim());
                return t.cat_name = d.join("#"), t.website = "amazon", t.pic = i("#altImages ul li img").eq(0).attr("src"), t
            }, "gome-rushbuy": function () {
                var t = "";
                return t = i(".pic a").eq(0).attr("href"), {name: i(".product-info .name").text(), isbn: "", url: t}
            }, gome: function () {
                var t = window.prdInfo, e = {}, n = "", o = i("title").html();
                if (o = i(".prdtit h1").text(), e.name = o, e.isbn = n, e.price = i("#prdPrice").text(), "" == o && (e.name = t && t.prdName), "" == e.price && (e.price = t && t.price), e.brand_string = t && t.breadName, e.itemId = location.href.match(/gome\.com\.cn\/([A-Z0-9]+)-/)[1], e.cat_id = t && t.catId, e.website = "gome", e.pic = i(".pic-small ul li img").eq(0).attr("src"), !e.cat_id) {
                    var r = i(".local a").eq(3).attr("href");
                    e.cat_id = r.match(/cat\d+/) && r.match(/cat\d+/)[0]
                }
                return e
            }, "gome-tuan": function () {
                var t = {};
                return t.url = i(".compare-link").attr("href"), t.name = i("title").html(), t.price = i("#salePrice").text(), t
            }, yihaodian: function () {
                var t = {}, e = "";
                i("#productId").length ? e = i("#productId").val() : i("#productCode").length ? e = parseInt(i("#productCode").text().slice(0, -1)) : i("#mainProductId").length ? e = i("#mainProductId").val() : i(".specific_detail p span").length && (e = parseInt(i(".specific_detail p span").text().match(/\d+$/)[0].slice(0, -1)));
                var n = i("#productMainName").text(), o = n.indexOf("<");
                o > 0 && (n = n.substr(0, o)), "" == n && (n = i(".main_info_con p.price").prev().eq(0).text()), "" == n && (n = i(".pro_tit").text());
                var r = i('#prodDetailCotentDiv dd:contains("ISBN")').text().substr(5);
                r = i.trim(r);
                var a = location.href.match(/item\/([0-9]{5,9})/);
                return t.itemId = a && a[1], t.img = i("#jsproCrumb .mBox b img").eq(0).attr("src"), t.brand_string = i("#brandName").val(), t.price = i("#current_price").text().replace(/[￥¥]+/, ""), t.cat_id = i("#categoryId").val(), t.isbn = r, t.name = n, t.id = e, t.pic = t.img, t.website = "yhd", t
            }, "yihaodian-tuan": function () {
                var t = "", e = "", n = "";
                t = i("#detailDiv h2").eq(0).text(), e = i("#productId").val(), "" == e && (e = i("#mainProductId").val()), "" == t && (t = i("title").text().replace(/.{2}团购_1号团_1号店官网/, ""));
                var o = i("#pricenow").text();
                return n = "http://item.yhd.com/item/" + i("#productMercantId").val(), {
                    name: t,
                    isbn: "",
                    id: e,
                    url: n,
                    price: o
                }
            }, womai: function () {
                var t = {};
                t.name = "";
                var e = i(".main_detail").eq(0).html().match(/var _title = "([^"]+)"/);
                return t.name = e[1], t.price = i(".buyPrice").text(), "" == t.name && (t.name = i(".WrapTit").text()), t.name = window.rtTag.data.ecom_view.prod[0].p_name, t.price = window.rtTag.data.ecom_view.prod[0].p_price, t.brand_string = window.rtTag.data.ecom_view.prod[0].p_brand, t
            }, vipshop: function () {
                var t = function () {
                    var t;
                    if (window.O_viewed) t = {
                        cat_id: window.O_viewed.category_id,
                        cat_name: window.O_viewed.category_name
                    }; else {
                        var e = i("#J-bottom-adCode").next().text();
                        e || (e = i("#J_topbar_pop_template").next().text()), e = /var O_viewed = {([\s\S]*?)}/.exec(e), e && (e = e[1]);
                        var n = /'category_id' : '(\d+)'/.exec(e);
                        n && (n = n[1]);
                        var o = /'category_name' : '(.*?)'/.exec(e);
                        o && (o = o[1]), t = {cat_name: o, cat_id: n}
                    }
                    return t
                }, e = t(), n = "";
                return n = i(".bt_layout li:contains('商品名称') .bt_lt_par_p").text(), "" == n && (n = i.trim(i(".pro_info .goods_protit").text())), "" == n && (n = i(".bt_title").text().replace(/(?:\n|\t|\s)/gi, "")), {
                    price: i(".pbox-price em").text(),
                    pic: i("#J-sImgSlide-wrap img").eq(0).attr("src"),
                    itemId: VIPTE.DETAIL.merchandise.id,
                    url: location.href,
                    name: n,
                    isbn: "",
                    cat_id: e.cat_id,
                    cat_name: e.cat_name,
                    brand_string: i(".pib-title-class a").text()
                }
            }, xiaomi: function () {
                var t = {};
                if (t.price = i("#J_goodsInfoBlock .J_mi_goodsPrice").text(), "" == t.price) {
                    var e = i(".J_proPrice").text().match(/[0-9.]+/);
                    e && (t.price = e[0])
                }
                return t
            }, yougou: function () {
                var t = {};
                return t.name = i(".goodsCon  .f16").text(), "" == t.name && (t.name = i(".goodsCon h1").text().replace(/\s/g, "")), i("#yitianPrice") && (t.price = i("#yitianPrice").text()), t
            }, lemall: function () {
                var t = i(".pro_name").eq(0).text(), e = i("#all_price").text();
                return "" == e && (e = i(".section_text .red .font48").eq(0).text()), "" == t && (t = i(".product_info_attribute .title").text()), {
                    name: "乐视" + t,
                    price: e
                }
            }, yintai: function () {
                return {name: i(".p-tit").text(), isbn: "", price: i(".qd-num").text()}
            }, newegg: function () {
                var t = {};
                return t.name = i("#proCtner .proHeader h1").text(), t.price = i("#omHiddenPrice").val(), t.url = i(".proHeader h1 a").attr("href"), t.brand_string = i('.goods_info .goods_info_name:contains("牌")+.godds_info_data').text().replace(/\s/g, ""), t
            }, feiniu: function () {
                return {name: i("#main_info_guidance_title").text(), price: i(".info-price>.JS-control-price").text()}
            }, jumei: function () {
                var t = {};
                if (t.name = i("h1.pop_detail_tit").text(), "" == t.name) {
                    t.name = i("title").html();
                    var e = i("title").html().split("-");
                    e.pop(), e.pop(), t.name = e.join("-")
                }
                return t.price = i("#mall_price_detail .price_num").text(), "" == t.price && (t.price = i("#stream_id").attr("price")), t
            }, jumeiglobal: function () {
                var t = {};
                return t.price = i(".jumei_price").text().match(/[0-9.]+/)[0], t.name = i('.deal_con_content td:contains("商品名称")').parent().find("td").eq(1).text(), "" == t.price && (t.price = i("#stream_id").attr("price")), t
            }, tuhu: function () {
                var t = {};
                return t.price = i("#product_detail .pro_price .price").text(), t.name = i(".DisplayName").eq(0).text(), t
            }, banggo: function () {
                var t = {};
                return t.price = i("#salePriceText").text(), t.name = i("#goods_base_info_panel .mbshop_detail_pdname").text(), t
            }, ule: function () {
                var t = i(".productPrice .price strong").text(), e = i(".productInfo>h1").eq(0).text();
                return {price: t, name: e}
            }, lifevc: function () {
                var t = i("#shoppingPanelUpper .price-panel .price em").text(),
                    e = i("#shoppingPanelUpper .shoppingInfo .j-curitem-name").eq(0).text();
                return {price: t, name: e}
            }, jiuxian: function () {
                var t = i("#nowPrice strong").text(), e = i(".introInfo .comName").text();
                return {price: t, name: e}
            }, wbiao: function () {
                var t = i("#g5_price").text(), e = i("#g5-tt").text();
                return {price: t, name: e}
            }, efotile: function () {
                var t = i(".item-actPrice b").text(), e = i("h2.item-title").text();
                return {price: t, name: e}
            }, ehaier: function () {
                var t = i("#product_info .cur-price").eq(0).text(), e = i("#product_info .product-title").text();
                return {price: t, name: e}
            }, staples: function () {
                var t = i(".nowPrice").eq(0).text(), e = i(".productInfo>h3>span").text();
                return {price: t, name: e}
            }, j1: function () {
                var t = i("#jianyiPrice").text(), e = i(".productarea .productarea-right-1>h1").text();
                return {price: t, name: e}
            }, jianke: function () {
                var t = i("#price_big em").text(), e = i(".det_title .widet h1").text();
                return {price: t, name: e}
            }, kede: function () {
                var t = i(".message_price").text(), e = i(".details_top_name span").text();
                return {price: t, name: e}
            }, lovo: function () {
                var t = i("#salePriceSpan big").text(), e = i("#goodsNameStrong").text();
                return {name: e, price: t}
            }, "360kad": function () {
                var t = i("#saleprice_value").text(), e = i(".prem-proname h1").text();
                return {price: t, name: e}
            }, yohobuy: function () {
                var t = i(".promotion-price .price").text(), e = i("p.name").text();
                return {price: t, name: e}
            }, fengqu: function () {
                var t = i(".goods-price-r1 strong").text(), e = i("#titleInfo h1").text();
                return {price: t, name: e}
            }, baobeigezi: function () {
                var t = i("#bb_price em").text(), e = i(".pro_name>h1").text();
                return {price: t, name: e}
            }, meici: function () {
                var t = i(".pro_price .c_purple").eq(0).text(), e = i(".pro_r .c_purple").eq(0).text();
                return {price: t, name: e}
            }, camel: function () {
                var t = i("#prod_price").text(), e = i(".c-detail-hd h3").text();
                return {price: t, name: e}
            }
        };
        t.exports.get = function (n) {
            var l = window.location.href;
            try {
                var c = s[o]();
                c.price.indexOf("?") > -1 && (c.price = "0"), c.oldPrice = c.price, c.price = a(c.price), c.site = o, null == c.url && (null != c.href ? c.url = c.href : c.url = l)
            } catch (d) {
                var c = {};
                c.site = o, c.url = l
            }
            return "undefined" != typeof c.useless && c.useless ? null : (c.icon = c.url.replace(/^http[s]?\:\/\//g, ""), c.icon = c.icon.replace(/\/.*?$/g, ""), c.icon += "/favicon.ico", ("undefined" == typeof c.id || null == c.id) && (c.id = ""), ("undefined" == typeof c.keyword || null == c.keyword) && (c.keyword = ""), ("undefined" == typeof c.skeyword || null == c.skeyword) && (c.skeyword = ""), ("undefined" == typeof c.isbn || null == c.isbn) && (c.isbn = ""), ("undefined" == typeof c.name || "" == c.name) && (c.name = i("title").html()), e.dp = c, !c.price && 2 > r ? (r++, setTimeout(function () {
                t.exports.get(n)
            }, 500)) : n && n(), c)
        }
    }).call(e, n(1), n(4))
}, function (t, e, n) {
    (function (e, i) {
        "use strict";
        var o = n(15), r = n(16), a = n(17), s = {}, l = [{unitName: "千", times: 1e3}, {unitName: "万", times: 1e4}],
            c = 1, d = function (t, n) {
                if (t) {
                    if (t = t.toString(), c = 1, Array.prototype.forEach && l.forEach(function (e) {
                            t.indexOf(e.unitName) > -1 && (c = e.times)
                        }), t = t.replace(/^[^\d]+/gi, ""), t = t.replace(/[￥\$]/gi, ""), t = t.match(/[0-9.,]+/) && t.match(/[0-9.,]+/)[0], !t) return t;
                    t = u(t, n), t = t.replace(/,/gi, ""), t = e.trim(t);
                    var i = t.indexOf("-");
                    return i > 0 && (t = t.substr(0, i)), t = t.replace(/^(\d+\.)\<.+\>(\d{0,2})\<\/.+\>/gi, "$1$2")
                }
            };
        t.exports = function (t, e) {
            return t = d(t, e), t = p(t, e), parseFloat(t) > 0 ? (t = parseFloat(t), c && (t *= c), t) : 0
        }, t.exports.getPriceBeforeExchangeRate = d;
        var p = function (t, e) {
            var n = void 0;
            return n = e ? s[e] || 1 : o.get("currency") || i.currency || 1, parseFloat((Number(t) * n).toFixed(2))
        }, u = function (t, n) {
            if (n) return t;
            if (1 == i.pageInfo.type) return t;
            var o = location.host, r = {"www.amazon.de": "primetesten", "www.amazon.fr": "premium"};
            return r[o] && e("#nav-logo .nav-logo-tagline").text().replace(/\s/g, "").trim().toLowerCase() === r[o] && (t = t.replace(".", "").replace(",", ".")), t
        }, h = function (t) {
            a.trigger({type: "setStoreRate", info: JSON.stringify(t)})
        }, m = function () {
            a.on(function (t) {
                if (t && "getStoreRate" == t.type) try {
                    var e = t.value.currency, n = JSON.parse(e);
                    s = n.elsecurr, i.currency = n.currency
                } catch (o) {
                }
            }), a.trigger({type: "getStoreRate"})
        }, f = function () {
            "www.amazon.cn" !== location.host && (location.host.indexOf("amazon") > -1 || location.host.indexOf("6pm") > -1) && m()
        };
        f(), t.exports.getExRate = function (t) {
            return parseFloat(1 | s[t])
        }, t.exports.getRate = function (t) {
            if (location.host.indexOf("amazon") > 0 && -1 == location.host.indexOf("amazon.cn") || location.host.indexOf("6pm") > -1 || location.host.indexOf("aliexpress") > -1) {
                var e = i.server + "/extension?ac=currency&url=" + encodeURIComponent(location.href);
                r.get(e).done(function (e) {
                    e && e.currency && (o.set(e), s = e.elsecurr, i.currency = e.currency, h(e)), t()
                }).fail(function () {
                    t()
                })
            } else t()
        }
    }).call(e, n(4), n(1))
}, function (t, e, n) {
    var i;
    i = function () {
        var t = {}, e = {};
        return t.get = function (t) {
            return e[t]
        }, t.set = function (t, n) {
            void 0 === n && t ? e = t : e[t] = n
        }, t
    }.call(e, n, e, t), !(void 0 !== i && (t.exports = i))
}, function (t, e, n) {
    (function (e) {
        "use strict";
        var i = n(4), o = function (t) {
            if (!t) throw new Error("url 不能为空");
            var n = "?", i = "callback=?&";
            t.indexOf("?") > -1 && (n = "&");
            var o, r = "format=jsonp&";
            return (e.chrome_extension || "maxthon" === e.from_device) && (o = !0), o && (i = "", r = "format=json&"), "" + t + n + i + r
        };
        t.exports.raw = function (t) {
            var e, n = {
                done: function (t) {
                    e = t
                }
            }, i = new XMLHttpRequest;
            return i.addEventListener("load", function () {
                e && e(i.responseText)
            }), i.open("GET", t, !0), i.send(), n
        }, t.exports.get = function (t) {
            return t = o(t) + "union=" + e.union + "&version=" + e.version + "&from_device=" + e.from_device, e.crc64 && (t += "&crc64=1"), i.getJSON(t)
        }, t.exports.getPure = function (t) {
            return t = o(t), i.getJSON(t)
        }
    }).call(e, n(1))
}, function (t, e) {
    "use strict";
    t.exports.trigger = function (t) {
        if (document.createEvent) {
            var e = document.createEvent("CustomEvent");
            e.initCustomEvent("gwd_extension", !0, !0, t), document.dispatchEvent(e)
        }
    }, t.exports.on = function (t) {
        document.addEventListener ? document.addEventListener("gwd_content", function (e) {
            t(e.detail)
        }) : document.attachEvent("gwd_content", function (e) {
            t(e.detail)
        })
    }
}, function (t, e, n) {
    (function (e, i) {
        "use strict";
        var o = n(12), r = n(16), a = n(19), s = n(21), l = n(20), c = {}, d = function (t, i, r, s) {
            var l = n(22), c = {dp_id: t, price: r, site_name: i},
                d = o.compile(l)({data: [c], classname: "bdext-item-tb"});
            e(".bdext-product-compare").append(d), a.autoWidth(), m(s)
        }, p = function (t, e, n) {
            for (var i = [], o = 0; o < t.length; o++) if (t[o].title && t[o].pic_url && t[o].price && t[o].url) {
                if (t[o].img_url = t[o].pic_url, t[o].img_url.match(/_\d+x\d+/)) {
                    var r = t[o].img_url.match(/_(\d+)x\d+/);
                    r && (r = Number(r[1]), r > 200 && (t[o].img_url = t[o].img_url + "_100x100"))
                } else t[o].img_url = t[o].img_url + "_100x100";
                t[o].rev_cnt = 0, i.push(t[o])
            }
            return i
        }, u = function (t, e, r) {
            var s = 0, l = p(c[e], e, r), d = l.length, u = a.calDetailNum(), m = u.num;
            d >= m && (s = Math.ceil(d / m));
            var f = n(23);
            t.append(o.compile(f)({
                data: l,
                per: m,
                loadimg: i.loadImg,
                pages: s
            })), d >= m ? (t.find(".bdext-product-box").width(u.width), h(t), a.loadImage(0, m, t.find(".bdext-product-box"))) : (a.loadImage(0, d, t.find(".bdext-product-box")), a.setSimplePagePos(d, t))
        }, h = function (t) {
            t.find(".bdext-turnleft .turnpage-btn").on("click", function () {
                a.changePage(-1, this)
            }), t.find(".bdext-turnright .turnpage-btn").on("click", function () {
                a.changePage(1, this)
            })
        }, m = function (t) {
            var n;
            e(".bdext-item-tb").on("mouseenter", function () {
                clearTimeout(n), e(".bdext-product-detail").hide();
                var i = e(this), o = i.find(".bdext-product-detail");
                if (o.length > 0) o.show(); else {
                    var r = i.attr("data-id");
                    r && u(i, r, t)
                }
            }), e(".bdext-item-tb").on("mouseleave", function () {
                var t = this;
                n = setTimeout(function () {
                    e(t).find(".bdext-product-detail").hide()
                }, 100)
            }), e(".bdext-item-tb").on("click", function (t) {
                var n = e(t.target).attr("href"), i = e(t.target).parent().attr("href");
                (n || i) && (n = n || i, s.tongjiLog("tbuniontotal"), n.indexOf("redirect.simba.taobao.com") > -1 && s.tongjiLog("tbunionsuccess"))
            })
        }, f = function (t, e) {
            var n = t.exact_arr, o = "1", a = t["code-server"];
            a || (a = {}, o = "0");
            var s = 100 * t.now.price;
            s || (s = 100 * i.dp.price);
            var l = i.server + "/brwext/tbres?union=" + i.union + "&url=" + encodeURIComponent(n.url) + "&site=" + n.site + "&isbn=" + n.isbn + "&keywords=" + encodeURIComponent(n.keywords) + "&brand=" + encodeURIComponent(n.brand) + "&type=" + encodeURIComponent(n.type) + "&price=" + s + "&class_id=" + n.class_id + "&name=" + encodeURIComponent(i.dp.name) + "&code_brand_id=" + a.brand_id + "&code_clean_title=" + encodeURIComponent(a.clean_title) + "&code_code=" + a.code + "&code_display_brand=" + encodeURIComponent(a.display_brand) + "&code_brand=" + encodeURIComponent(a.brand) + "&code_class_id=" + encodeURIComponent(a.class_id) + "&code_price=" + encodeURIComponent(a.price) + "&code_spec=" + encodeURIComponent(a.spec) + "&code-server=" + o;
            r.get(l).done(function (t) {
                e(t)
            })
        }, g = function (t) {
            for (var e = [], n = [], i = 0; i < t.length; i++) t[i].pic_url = t[i].originalimage, t[i].price = t[i].cutprice.toFixed(2), "淘宝" === t[i].sitename ? n.push(t[i]) : e.push(t[i]);
            var o = {};
            if (n.length > 0) {
                var r = n[0].price, a = n[n.length - 1].price;
                r === a ? o.taobao = r : o.taobao = r + "~" + a, c.taobao = n
            }
            if (e.length > 0) {
                var r = e[0].price, a = e[e.length - 1].price;
                r === a ? o.tmall = r : o.tmall = r + "~" + a, c.tmall = e
            }
            return o
        };
        t.exports.init = function (t) {
            f(t, function (t) {
                if (!(t.tmall instanceof Array) && t.tmall.product.length > 0) {
                    i.showMainbar || (e("#bdext_mainbar").show(), i.showMainbar = !0, s.tongji("mainbar", "show"));
                    var n = t.tmall.min_price + "~" + t.tmall.max_price;
                    t.tmall.min_price === t.tmall.max_price && (n = t.tmall.min_price), d("tmall", "天猫", n), c.tmall = t.tmall.product, l.init("tmall", c.tmall)
                }
                if (!(t.taobao instanceof Array) && t.taobao.product.length > 0) {
                    i.showMainbar || (e("#bdext_mainbar").show(), i.showMainbar = !0, s.tongji("mainbar", "show"));
                    var n = t.taobao.min_price + "~" + t.taobao.max_price;
                    t.taobao.min_price === t.taobao.max_price && (n = t.taobao.min_price), d("taobao", "淘宝", n), c.taobao = t.taobao.product, l.init("taobao", c.taobao)
                }
            })
        }, t.exports.init2 = function (t) {
            var n = g(t);
            n.taobao && (d("taobao", "淘宝", n.taobao, !0), i.showMainbar || (e("#bdext_mainbar").show(), i.showMainbar = !0, s.tongji("mainbar", "show"))), n.tmall && (d("tmall", "天猫", n.tmall, !0), i.showMainbar || (e("#bdext_mainbar").show(), i.showMainbar = !0, s.tongji("mainbar", "show")))
        }
    }).call(e, n(4), n(1))
}, function (t, e, n) {
    (function (e, n) {
        "use strict";
        var i = 0, o = e(window).width(), r = function () {
            var t = 131, n = e(".bdext-right").outerWidth(), i = e(".bdext-product-compare").outerWidth(),
                r = o - t - n - i;
            return r
        };
        t.exports.calCompare = function () {
            var t = r();
            return parseInt(t / 120)
        }, t.exports.loadImage = function (n, i, o) {
            for (var r = n; i > r; r++) {
                var a = e(o).find("img").eq(r)[0];
                if (!a) return;
                var s = a.getAttribute("data-original"), l = a.src;
                s !== l && t.exports.checkImage(a, s)
            }
        }, t.exports.checkImage = function (t, i) {
            var o = new Image;
            o.onload = function () {
                e(t).attr("src", i)
            }, o.onerror = function () {
                e(t).attr("src", n.noImg)
            }, o.src = i
        }, t.exports.calDetailNum = function () {
            var t = 132, e = 220;
            return {num: parseInt((o - t) / e), width: o - t - 1}
        }, t.exports.changePage = function (n, i) {
            var o = e(i).parent().parent(), r = o.find(".bdext-product-box li"), a = r.length,
                s = Number(o.find(".bdext-page-num em").text()), l = t.exports.calDetailNum().num, c = Math.ceil(a / l);
            if (r.hide(), 1 == n) {
                s === c && (s = 0);
                for (var d = s * l, p = (s + 1) * l > a ? a : (s + 1) * l; p > d; d++) r.eq(d).show();
                t.exports.loadImage(s * l, (s + 1) * l > a ? a : (s + 1) * l, r), s++
            } else {
                1 === s && (s = c + 1);
                for (var d = (s - 2) * l, p = (s - 1) * l > a ? a : (s - 1) * l; p > d; d++) r.eq(d).show();
                t.exports.loadImage((s - 2) * l, (s - 1) * l > a ? a : (s - 1) * l, r), s--
            }
            o.find(".bdext-page-num em").text(s)
        }, t.exports.setSimplePagePos = function (t, e) {
            var n = e.offset().left, i = e.outerWidth(), r = e.find(".bdext-product-detail"), a = 220 * t + 2,
                s = n + i / 2 - a / 2;
            0 > s && (s = 0), s + a > o && (s = o - a - 2), r.css("left", s + "px")
        }, t.exports.autoWidth = function () {
            if (!(i > 10)) {
                var n = r();
                0 > n && (i++, e(".bdext-item-dp:last").remove(), t.exports.autoWidth())
            }
        }, t.exports.resizeAutoWidth = function () {
            o = e(window).width(), e(".bdext-product-detail").remove(), t.exports.autoWidth()
        }
    }).call(e, n(4), n(1))
}, function (t, e) {
    "use strict";
    var n = function (t, e, n) {
        for (var i = 0; i < e.length; i++) e[i].num_iid && (e[i].oldUrl = e[i].url, e[i].url = "https://browser.gwdang.com/coupon_redirect?id=" + e[i].num_iid)
    };
    t.exports.init = function (t, e, i) {
        e && e instanceof Array && n(t, e, i)
    }
}, function (t, e, n) {
    (function (e, i) {
        "use strict";

        function o(t) {
            return e.extend(!0, {}, t)
        }

        var r = n(16), a = n(17), s = function (t) {
            var e = new Image;
            e.src = t
        };
        t.exports.deepCopy = o, t.exports.settings = function (t, e) {
            a.trigger({type: "setStorage", key: t, value: e})
        }, t.exports.getDicts = function (t) {
            var e = i.server + "/brwext/permanent_id";
            r.get(e).done(function (e) {
                e && e.force && (i.force = e.force), t()
            })
        }, t.exports.getPermanent = function (t) {
            var e = i.server + "/extension?ac=bdextPermanent";
            r.get(e).done(function (e) {
                for (var n in e) i[n] = e[n];
                t()
            })
        }, t.exports.setPermanent = function (t, e, o) {
            var r = n(16);
            r.get(i.server + "/extension?ac=bdextPermanent&op=" + t + "&" + e + "=" + o).done(function (t) {
                i[e] = o
            })
        }, t.exports.tongjiLog = function (t) {
            var e = i.userid;
            if (!i.site || !(i.site.indexOf("taobao") > -1 || i.site.indexOf("tmall") > -1)) {
                i.site = i.site || "";
                var n = i.server + "/visit/?userid=" + e + "&from_device=" + i.from_device + "&action=" + t + "&refer=" + encodeURIComponent(document.referrer) + "&site=" + i.site;
                s(n)
            }
        }, t.exports.tongji = function (t, e, n) {
            n = n || "";
            var i = location.href, o = document.title, r = {2401: i, 2402: t, 2403: o};
            n && (r.url = n), "show" === e ? r[2411] = "1" : "click" === e && (r[2412] = "1"), a.trigger({
                type: "tongji",
                value: JSON.stringify(r)
            })
        }
    }).call(e, n(4), n(1))
}, function (t, e) {
    t.exports = '{{each data}}\n<div class="{{classname}}" data-id="{{$value.dp_id}}">\n  <span>\n    <p class="item-pri fontb fontZh">￥{{$value.price}}</p>\n    <p class="item-tle fontZh">{{$value.site_name}}</p>\n  </span>\n</div>\n{{/each}}'
}, function (t, e) {
    t.exports = '<div class="bdext-product-detail" {{if pages !=0}} style="left:0px;" {{/if}}>\n  {{if pages > 1 }}\n  <div class="bdext-page bdext-turnleft">\n    <span class="bdext-bg turnpage-btn"></span>\n  </div>\n  {{/if}}\n  <div class="bdext-product-box ">\n    <ul>\n      {{each data}}\n      <li {{if $index%per == 0}} class="bdext-margl0" {{/if}}>\n        <a href="{{$value.url}}" target="_blank" class="bdext-item-img">\n          <img src="{{loadimg}}" data-original="{{$value.img_url}}">\n        </a>\n        <a href="{{$value.url}}" target="_blank" title="{{$value.title}}" class="bdext-item-tle">\n          {{$value.title}}\n        </a>\n        <span class="bdext-item-price fontb"> \n          ￥{{$value.price}}\n        </span>\n        {{if $value.rev_cnt != 0 && $value.rev_cnt}}\n        <span class="bdext-item-cnv">评论数：{{$value.rev_cnt}}</span>\n        {{/if}}\n      </li>\n      {{/each}}\n    </ul>\n  </div>\n  {{if pages > 1}}\n  <div class="bdext-page bdext-turnright">\n    <span class="bdext-page-num"><em>1</em>/{{pages}}</span>\n    <span class="bdext-bg turnpage-btn"></span>\n  </div>\n  {{/if}}\n</div>'
}, function (t, e, n) {
    (function (e) {
        "use strict";
        var i = n(14);
        t.exports = function (t) {
            var n = [], o = e.dp.price || 0;
            if ("189" === e.site) {
                for (var r = 0; r < t.length; r++) i(t[r].price) >= o && n.push(t[r]);
                return n
            }
            return t
        }, t.exports.tb = function (t) {
            if (t instanceof Array) return t;
            for (var n = [], o = t.product, r = e.dp.price || 0, a = 0; a < o.length; a++) o[a].img_url && !o[a].img_url.match(/_\d+x\d+/) && (o[a].img_url = o[a].img_url + "_100x100"), o[a].pic_url && !o[a].pic_url.match(/_\d+x\d+/) && (o[a].pic_url = o[a].pic_url + "_100x100");
            if ("189" === e.site) {
                for (var a = 0; a < o.length; a++) i(o[a].price) >= r && n.push(o[a]);
                t.min_price = n[0] && n[0].price, t.product = n
            }
            return t
        }
    }).call(e, n(1))
}, function (t, e, n) {
    (function (e, i) {
        "use strict";
        var o = n(12), r = n(16), a = n(15), s = n(19), l = n(26), c = n(5), d = n(21), p = void 0, u = function (t) {
            var n = e.dp.price || 0, i = a.get("dp_data");
            !n && i && i.now && (n = i.now.price), n || (n = 0);
            var o = e.server + "/extension?ac=price_b2c_lowest&class_id= " + i.now.class_id + "&site_id=" + i.now.site_id + "&price=" + n + "&keyword=" + encodeURIComponent(i.now.coreword || "");
            r.get(o).done(function (e) {
                e && e.data && e.data.length > 0 && t(i.now, e.data)
            })
        }, h = function (t) {
            t.highest_price = t.last_price, t.last_price = t.last_price.toString().split(".")[0]
        }, m = function (t) {
            var i = [], o = n(34);
            t.length > 30 && (t = t.slice(0, 30));
            for (var r = 0; r < t.length; r++) {
                t[r].discount = (10 * t[r].discount).toFixed(1), h(t[r]);
                var a = {
                    site_id: t[r].site_id,
                    url: t[r].url,
                    mod: "zuidijia",
                    union: e.union.split("_")[1],
                    dp_id: t[r].url_crc + "-" + t[r].site_id
                };
                Number(t[r].price) < 0 || (t[r].url = o.init(a), i.push(t[r]))
            }
            return i
        }, f = function (t, e) {
            e = m(e), p = e, g(e), x(t, e)
        }, g = function (t) {
            var r = 0, a = t.length, l = s.calDetailNum(), c = l.num;
            r = Math.ceil(a / c);
            var d = i(".bdext-lowpri"), p = n(35);
            d.append(o.compile(p)({
                data: t,
                per: c,
                loadimg: e.loadImg,
                pages: r
            })), i(".bdext-lowpri").show(), v(d), d.find(".bdext-product-box").width(l.width), s.loadImage(0, c, d.find(".bdext-product-box")), s.autoWidth()
        }, x = function (t, e) {
            l.bdext(t, e), d.tongji("2", "show"), i("#bd_inner_low .bd_inner_head .site_icon").on("click", function () {
                c.log("lowest-logo-click")
            }), i("#bd_inner_low .bd_inner_content").on("click", function (t) {
                var e = void 0;
                "A" === t.target.nodeName ? e = t.target.href : "A" === t.target.parentNode.nodeName && (e = t.target.parentNode.href), e && -1 === e.indexOf("javascript:") && d.tongji("2", "click", e)
            })
        }, v = function (t) {
            t.off(), t.find(".bdext-turnright .turnpage-btn").off(), t.find(".bdext-turnleft .turnpage-btn").off(), t.on("mouseenter", function () {
                var t = i(this).find(".bdext-product-detail");
                0 === t.length ? (g(p), i(".bdext-lowpri").find(".bdext-product-detail").show()) : i(this).find(".bdext-product-detail").show()
            }), t.on("mouseleave", function () {
                i(this).find(".bdext-product-detail").hide()
            }), t.find(".bdext-turnleft .turnpage-btn").on("click", function () {
                s.changePage(-1, this)
            }), t.find(".bdext-turnright .turnpage-btn").on("click", function () {
                s.changePage(1, this)
            })
        };
        t.exports.init = function () {
            u(f)
        }
    }).call(e, n(1), n(4))
}, function (t, e, n) {
    (function (e, i) {
        "use strict";
        var o = n(27), r = n(28), a = n(29), s = n(5), l = n(31), c = n(12), d = n(15), p = n(16), u = {}, h = {}, m = {
            "360buy": {
                "#fitting-suit": ["#fitting-suit", "before"],
                "#fittings": ["#fittings", "before"],
                "#shopRecSuit": ["#shopRecSuit", "before"]
            },
            "360buy-re": {"#similar_goods": ["#similar_goods", "prepend"]},
            amazon: {
                "#buyxgety_feature_div": ["#buyxgety_feature_div", "before"],
                "#rhf-container .rhf-border": ["#rhf-container .rhf-border", "before"],
                "#fallbacksession-sims-feature": ["#fallbacksession-sims-feature", "before"]
            },
            "51buy": {".grid_c1 .xtiein": [".grid_c1 .xtiein", "before"]},
            suning: {
                "#accessoryInfo": ["#accessoryInfo", "prepend"],
                "#listProContent": ["#listProContent", "prepend"],
                ".wrapper .procon-side": [".wrapper .procon-side", "before"]
            },
            dangdang: {
                "#main_bd .show": ["#main_bd .show", "after"],
                "#main_bd .product_main": ["#main_bd .product_main", "after"]
            },
            gome: {"#gm-other-info": ["#gm-other-info", "prepend"]},
            yihaodian: {".fm_detail_one": [".fm_detail_one", "after"]},
            jumei: {
                ".layout_1090 .deal_content": [".layout_1090 .deal_content", "after"],
                ".mall_detail_wrap": [".mall_detail_wrap", "append"]
            },
            vmall: {"#group-area+.hr-20+.layout": ["#group-area+.hr-20+.layout", "prepend"]},
            feiniu: {"#tracker_item .product-about": ["#tracker_item .product-about", "before"]},
            yougou: {"#goodsContainer+p": ["#goodsContainer+p", "after"]},
            kaola: {".PInfoWrap": [".PInfoWrap", "after"]},
            vipshop: {"#J-FW-detail .M-detail": ["#J-FW-detail .M-detail", "before"]},
            womai: {".detail_main": [".detail_main", "prepend"], ".detailed": [".detailed", "before"]},
            jiuxian: {".detail-box2": [".detail-box2", "before"]},
            secoo: {"#showAdds": ["#showAdds", "before"]},
            wbiao: {"#history_buy": ["#history_buy", "before"]},
            sfbest: {".main-box": [".main-box", "before"]},
            miyabaobei: {".poppro .bfd_div": [".poppro .bfd_div", "before"]},
            fengqu: {"#recommend": ["#recommend", "before"]},
            ehaier: {".product-details-box": [".product-details-box", "before"]},
            zol: {
                "#J_RecommendedDistributor": ["#J_RecommendedDistributor", "before"],
                ".product-detail-box": [".product-detail-box", "after"]
            }
        }, f = function () {
            var t = m[e.site];
            for (var n in t) if (i(n).length > 0) {
                if ("prepend" == t[n][1] && "none" == i(n).css("display")) continue;
                return t[n]
            }
            return !1
        }, g = function (t, e, n) {
            switch (n) {
                case"before":
                    i(e).before(t);
                    break;
                case"append":
                    i(e).append(t);
                    break;
                case"after":
                    i(e).after(t);
                    break;
                case"prepend":
                    i(e).prepend(t)
            }
        }, x = function (t) {
            var n = i("#" + e.extBrand + "_inner_" + t.type + " ." + e.extBrand + "_inner_content").width(),
                o = i(".inner_page_left").width(), r = n - 2 * o - 4;
            i("#" + e.extBrand + "_inner_" + t.type + " .inner_pro_list").width(r), v(r, t)
        }, v = function (t, n) {
            t = t || 0;
            var o = n.data.length || 0, r = parseInt(t / 192), a = o % r == 0 ? o / r : parseInt(o / r) + 1;
            n.total = a, n.per = r, n.conw = t, i("#" + e.extBrand + "_inner_" + n.type + " .total_page").text(a), 1 == a && i("#" + e.extBrand + "_inner_" + n.type + " ." + e.extBrand + "_inner_content .turnpage").css("visibility", "hidden")
        }, b = function (t, n) {
            var i = f();
            if (i !== !1 && 0 != n.length) {
                h.data = n, h.type = t;
                var r = c.compile(o)({
                    data: n,
                    type: t,
                    num: n.length,
                    s_server: e.s_server,
                    new_extension: e.new_extension,
                    extName: e.extName,
                    setting: e.server + "/brwext/setting_feedback?set=1",
                    extBrand: e.extBrand
                });
                g(r, i[0], i[1]), s.log("嵌入页面同类历史最低价展现"), x(h), C(1, h), w(h)
            }
        }, y = function (t, n) {
            var r = f();
            if (r !== !1 && 0 != n.length) {
                u.data = n, u.type = t;
                var a = c.compile(o)({
                    data: n,
                    type: t,
                    num: n.length,
                    s_server: e.s_server,
                    new_extension: e.new_extension,
                    extName: e.extName,
                    extBrand: e.extBrand
                });
                i("." + e.extBrand + "_inner_lowprice").length > 0 ? i("." + e.extBrand + "_inner_lowprice").before(a) : g(a, r[0], r[1]), x(u), C(1, u), s.log("嵌入页面猜你喜欢展现"), w(u)
            }
        }, w = function (t) {
            i("#" + e.extBrand + "_inner_" + t.type + " .inner_page_left").on("click", function () {
                j(-1, t)
            }), i("#" + e.extBrand + "_inner_" + t.type + " .inner_page_right").on("click", function () {
                j(1, t)
            }), i("#" + e.extBrand + "_inner_low li").on("click", function () {
                s.log("嵌入页面同类历史最低价点击")
            }), i("#" + e.extBrand + "_inner_favor li").on("click", function () {
                s.log("嵌入页面猜你喜欢点击")
            })
        }, _ = function (t) {
            for (var e = 0; e < t.length; e++) t[e].newdiscount = t[e].discount, t[e].highest = t[e].highest_price;
            return t
        }, k = function (t) {
            for (var e = t.length || 0, n = 0; e > n; n++) {
                var i = (Number(t[n].price) / 100).toString();
                -1 == i.indexOf(".") ? t[n].price = i + ".00" : i.match(/\.[0-9]{2}/) ? t[n].price = i : t[n].price = i + "0"
            }
            return t
        }, S = function (t) {
            if (t.per && 0 != t.per) {
                var n = t.conw - 192 * t.per, o = parseInt(n / 4);
                i("#" + e.extBrand + "_inner_" + t.type + ' .inner_pro_list li:not(".li_first")').css("margin-left", o + 12 + "px")
            }
        }, T = function (t) {
            for (var e = 0; t > e; e++) {
                var n = i("#gwd_inner_favor .item_img img").eq(e);
                l.checkimg(n.attr("src"), n, 170)
            }
        }, C = function (t, e) {
            var n = e.data.slice((t - 1) * e.per, t * e.per);
            A(n, e)
        }, A = function (t, n) {
            var o = c.compile(r)({data: t, s_server: e.s_server});
            i("#" + e.extBrand + "_inner_" + n.type + " .inner_pro_list ." + e.extBrand + "_" + n.type + "_list").empty().append(o), T(t.length), S(n)
        }, j = function (t, n) {
            var o = Number(i("#" + e.extBrand + "_inner_" + n.type + " ." + e.extBrand + "_inner_page .cur_page").text());
            1 === t ? (o == n.total && (o = 0), i("#" + e.extBrand + "_inner_" + n.type + " ." + e.extBrand + "_inner_page .cur_page").text(++o), C(o, n)) : (1 == o && (o = n.total + 1), i("#" + e.extBrand + "_inner_" + n.type + " ." + e.extBrand + "_inner_page .cur_page").text(--o), C(o, n))
        }, P = function (t, n, i) {
            var o = t.site_id, r = t.now_dp_id,
                a = e.server + "/brwext/guess_favor?dp_id=" + r + "&dp_ids=&site_id=" + o + "&column=alsoview";
            p.get(a).done(function (t) {
                i("favor", n.concat(k(t)))
            })
        };
        t.exports.init = function (t, n) {
            "sxdx" !== e.from_device && (0 != d.get("show_guessfavor") && a.getDpLowest(function (e) {
                P(t, e, y)
            }), 0 != d.get("show_lowpri") && n && b("low", _(n.data)))
        }, t.exports.bdext = function (t, i) {
            0 != e.show_inner_low && (o = n(32), r = n(33), b("low", _(i)))
        }
    }).call(e, n(1), n(4))
}, function (t, e) {
    t.exports = '<div id="{{extBrand}}_inner_{{type}}" class="{{extBrand}}_inner_lowprice">\n  <div class="{{extBrand}}_inner_head">\n    <a class="site_icon" {{if !new_extension}} href="http://www.{{extName}}.com" target="_blank" title="购物党" {{/if}}></a>\n    <span class="big_title">\n      {{if type == \'low\'}}\n        历史最低价\n      {{else}}\n        猜你喜欢\n      {{/if}}\n    </span>\n    <span class="small_title">\n      {{if type == \'low\'}}\n        这些同类商品处于历史最低价\n      {{else}}\n        看过本商品的还看了\n      {{/if}}\n    </span>\n\n    <a class="{{extBrand}}_inner_page">\n      <span class="cur_page">1</span>\n      <span>/</span>\n      <span class="total_page">1</span>\n    </a>\n  </div>\n  <div class="{{extBrand}}_inner_content">\n    <a class="inner_page_left turnpage"><em></em></a>\n    <div class="inner_pro_list" >\n      <ul class="{{extBrand}}_{{type}}_list">\n      </ul>\n    </div>\n    <a class="inner_page_right turnpage"><em></em></a>\n  </div>\n  <style type="text/css">\n    .{{extBrand}}_inner_lowprice {\n      width: 100%;\n      height: 318px;\n      border: 1px solid #ddd;\n      background-color: #fff;\n      margin-bottom: 10px;\n      display: inline-block;\n    }\n    .{{extBrand}}_jiuxian .{{extBrand}}_inner_lowprice, .{{extBrand}}_kaola .{{extBrand}}_inner_lowprice{\n      margin-top: 10px;\n    }\n    .{{extBrand}}_wbiao .{{extBrand}}_inner_lowprice {\n      box-sizing: border-box;\n    }\n    .{{extBrand}}_inner_content {\n      width: 100%;\n    }\n    .{{extBrand}}_inner_head {\n      height: 52px;\n      position: relative;\n    }\n    .big_title {\n      display: inline-block;\n      margin-top: 21px;\n      height: 16px;\n      line-height: 16px;\n      margin-left: 51px;\n      font-size: 14px;\n      font-weight: bold;\n    }\n    .small_title {\n      font-size: 12px;\n      margin-left: 12px;\n    }\n    a.{{extBrand}}_inner_page {\n      position: absolute;\n      right: 20px;\n      top: 20px;\n    }\n     a.{{extBrand}}_inner_page:hover {\n      text-decoration: none;\n    }\n    .{{extBrand}}_inner_head .site_icon {\n      display: inline-block;\n      position: absolute;\n      top: 18px;\n      left: 18px;\n      height: 21px;\n      width: 24px;\n      {{if new_extension}}\n        background: url(\'{{s_server}}/images/extensions/{{extBrand}}_site_icon2_1.png\') no-repeat;\n      {{else}}\n        background: url(\'{{s_server}}/images/extensions/1211logo.png\') no-repeat;\n      {{/if}}\n      \n    }\n    .{{extBrand}}_inner_lowprice *{\n      font-family: \'Microsoft Yahei\';\n    }\n    a.inner_page_left,.inner_page_right {\n      width: 62px;\n      display: inline-block;\n      height: 170px;\n      cursor: pointer;\n    }\n    a.inner_page_left em {\n      display: inline-block;\n      height: 20px;\n      width: 20px;\n      margin-top: 80px;\n      margin-left: 28px;\n      background: url(\'{{s_server}}/images/extensions/1215back_normal.jpg\') no-repeat;\n    }\n    a.inner_page_left em:hover {\n      background: url(\'{{s_server}}/images/extensions/1215back_hover.jpg\') no-repeat;\n    }\n    .inner_page_right em {\n      display: inline-block;\n      height: 20px;\n      width: 20px;\n      margin-top: 80px;\n      margin-left: 20px;\n      background: url(\'{{s_server}}/images/extensions/1215forward_normal.jpg\') no-repeat;\n    }\n    .inner_page_right em:hover {\n      background: url(\'{{s_server}}/images/extensions/1215forward_hover.jpg\') no-repeat;\n    }\n    .inner_pro_list {\n      overflow: hidden;\n      height: 264px;\n      width: 1000px;\n    }\n    .inner_page_left, .inner_pro_list {\n      float: left;\n    }\n    .{{extBrand}}_inner_lowprice ul li {\n      float: left;\n      margin-left: 20px;\n      height: 264px;\n      list-style: none;\n    }\n    .{{extBrand}}_inner_lowprice ul li.li_first {\n      margin-left: 0px;\n    }\n    .{{extBrand}}_inner_lowprice ul li .item_img {\n      display: inline-block;\n      height: 172px;\n      width: 172px;\n      border: 1px solid #f1f1f1;\n      position: relative;\n      box-sizing: border-box;\n    }\n    .{{extBrand}}_inner_lowprice li img {\n      height: 170px;\n      width: 170px;\n    }\n    .{{extBrand}}_inner_lowprice li .small_desc img {\n      height: 16px;\n      width: 16px;\n      vertical-align: inherit;\n    }\n    .small_desc .site_icon {\n      display: inline-block;\n      width: 21px;\n      height: 18px;\n      float: left;\n    }\n    .{{extBrand}}_inner_lowprice li a em{\n      position: absolute;\n      bottom: 0px;\n      left: 0px;\n      display: inline-block;\n      background-color: #ea5412;\n      color: #fff;\n      width: 42px;\n      height: 15px;\n      line-height: 15px;\n      text-align: center;\n      font-size: 12px;\n      font-style: normal;\n    }\n    .inner_dp_desc {\n      width: 170px;\n      margin-top: 10px;\n    }\n    .inner_dp_desc .dp_title{\n      color: #595757;\n      font-size: 12px;\n      display: inline-block;\n      width: 170px;\n      height: 36px;\n      line-height: 18px;\n      overflow: hidden;\n    }\n    .small_desc {\n      margin-top: 6px;\n      display: inline-block;\n      height: 36px;\n      width: 170px;\n      cursor: text;\n    }\n    .small_desc:hover {\n      cursor: text;\n    }\n    .small_desc .new_price {\n      font-size: 14px;\n      color: #d80000;\n      float: left;\n    }\n    .small_desc .old_price {\n      font-size: 12px;\n      color: #9FA0A0;\n      float: right;\n      text-decoration: line-through;\n    }\n  </style>\n</div>'
}, function (t, e) {
    t.exports = '{{each data}}\n  <li class="{{$index==0?\'li_first\':\'\'}}">\n    <a class="item_img" href="{{$value.url}}" title="{{$value.title}}" target="_blank">\n      <img src="{{$value.img_url}}">\n      {{if $value.newdiscount}}\n        <em>{{$value.newdiscount}}折</em>\n      {{/if}}\n    </a>\n    <div class="inner_dp_desc">\n      <a class="dp_title" href="{{$value.url}}" title="{{$value.title}}" target="_blank">\n        {{$value.title}}\n      </a>\n      <a class="small_desc">\n        {{if $value.site_name}}\n          <span class="site_icon" title="{{$value.site_name}}"><img src="{{s_server}}/images/favicon/{{$value.site_id}}.ico"></span>\n        {{/if}}\n        <span class="new_price">\n          {{if $value.types == \'fashion\'}}\n            ¥\n          {{/if}}\n          {{$value.price}}\n\n        </span>\n        <span class="old_price" style="display: {{($value.highest)?\'inline-block\':\'none\'}}">{{$value.highest}}</span>\n      </a>\n    </div>\n  </li>\n{{/each}}'
}, function (t, e, n) {
    (function (e, i) {
        "use strict";
        var o = void 0,
            r = ["jsdx", "njck", "chuyun", "tlxs", "jsxy", "zjdx", "xingyue", "shck", "mi_new", "gdjm", "hntt", "xdjf", "hagw", "shlt", "bjlt", "923253", "1098164", "538625", "1329185", "929733"],
            a = {
                njck: ["uFs7IN", "Lh2X2A"],
                gdjm: ["uFs7IN", "Lh2X2A"],
                jxdx: ["DSzEFa", "tW6ntQ"],
                mi_new: ["GPVj60", "OsmJKb"],
                jsdx: ["6VJMoM", "n6wGzA"],
                jsxy: ["6VJMoM", "n6wGzA"],
                chuyun: ["9kkzKP", "Qy1GA1"],
                bjlt: ["9kkzKP", "Qy1GA1"],
                zjdx: ["U2x8Wt", "7l5Y1W"],
                xingyue: ["CH7fir", "hXaVSm"],
                hntt: ["CH7fir", "hXaVSm"],
                shck: ["9oxDA6", "fpWAGu"],
                tlxs: ["fOyCLb", "pbLqmC"],
                xdjf: ["Pma8rH", "d3Ap32"],
                shlt: ["JVPCEo", "UjZ7CN"],
                hagw: ["86ePOv", "5o4KUm"],
                1098164: ["CH7fir", "CH7fir"],
                538625: ["UjZ7CN", "UjZ7CN"],
                923253: ["d3Ap32", "d3Ap32"],
                1329185: ["UjZ7CN", "UjZ7CN"],
                929733: ["DSzEFa", "DSzEFa"]
            }, s = ["efotile"], l = function () {
                function t(t) {
                    var e, n = 1, i = 0;
                    if (t) for (n = 0, e = t.length - 1; e >= 0; e--) i = t.charCodeAt(e), n = (n << 6 & 268435455) + i + (i << 14), i = 266338304 & n, n = 0 != i ? n ^ i >> 21 : n;
                    return n
                }

                return ("" + t(window.location.href) + t(document.domain) + (new Date - 0) + Math.floor(1e3 * Math.random())).substr(0, 32)
            }(), c = function (t) {
                for (var n = [], i = 1; i < t.length; i++) {
                    var o = {}, r = t[i].curl1.match(/&url=([^&]+)&/) && t[i].curl1.match(/&url=([^&]+)&/)[1];
                    "mi_new" === e.from_device && r && r.match(/(?:lemall|vmall)/) || (o.url = t[i].curl1, o.img_url = t[i].timg, o.title = t[i].pn, o.price = t[i].price, o.types = "fashion", n.push(o))
                }
                return n
            }, d = function (t, e) {
                i.ajax({
                    url: t, scriptCharset: "UTF-8", dataType: "jsonp", jsonp: "jsonq", success: function (t) {
                        o || (e(t && t.length > 1 ? c(t) : []), o = !0)
                    }, error: function () {
                        o || (e([]), o = !0)
                    }
                }), setTimeout(function () {
                    o || (e([]), o = !0)
                }, 5500)
            }, p = function () {
                for (var t = 0; t < s.length; t++) if (e.site === s[t]) return !0;
                return n(30).init() ? !0 : !1
            };
        t.exports.getlLowest = function (t) {
            if (p()) return void t([]);
            var n = e.from_device_t || e.from_device;
            if ("tlxs" == n) return void t([]);
            if (-1 == r.indexOf(n)) return void t([]);
            var i = "https://show-3.mediav.com/s?type=1&showid=" + a[n][0] + "&of=4&uid=" + l + "}&qhpid=&impct=20";
            d(i, t)
        }, t.exports.getDpLowest = function (t) {
            if (p()) return void t([]);
            if (-1 == r.indexOf(e.from_device)) return void t([]);
            var n = "https://show-3.mediav.com/s?type=1&showid=" + a[e.from_device][1] + "&of=4&uid=" + l + "}&qhpid=&impct=20";
            d(n, t)
        }
    }).call(e, n(1), n(4))
}, function (t, e, n) {
    (function (e) {
        "use strict";
        var n = ["jd.com", "taobao.com", "suning.com", "tmall.com", "west.cn", "chuangcd.cn", "edianzu.com", "baoshuiguoji.com", "mvmall.cn", "gap.cn", "jsswordshop.com", "bwsku.com", "gx.cn", "stwfde.com", "quwaifu.com", "aolaigo.com", "daogoumao.cn", "1688.com", "ghs.net", "shijieguan.cn", "gdliwan888.com", "izujie.com", "yxlp-bj.com", "678pw.cn", "ilahui.com", "gouwubang.com", "cttyw.com", "aojiesi.cn", "xiangshenghang.com", "nbzdpt.cn", "360.cn", "zjcreate.com", "dlyiju.com.cn", "huamu0101.com", "fushihua.cn", "wjyh.com", "fsaoting.cn", "miyinsuo.com", "km1818.com", "shuhuaty.com", "sgdz-power.com", "purcotton.com", "ymi.cn", "xjt.cc", "lencolo.com", "yiwugou.com", "361fenqigo.com", "benghome.com", "eleitex.com", "jingzhuohang.com", "zhaojiafang.com", "nnyhwj.com", "duoduo123.com", "ks-long.com", "21kk.cn", "staples.cn", "lyljw.com", "homedo.com", "591yhw.com", "qianshi360.com", "365350.com", "afjy988.com", "hcbuy.com", "bjftst.com", "laborless-tft.com", "maigangle.com", "jiu91yi.com", "elsteel.com.cn", "jn360so.cn", "bdfdj.com", "nangwj.com", "zhe900.com", "qegoo.cn", "feisu.com", "hdydoor.com", "cnmeijin.cn", "jy027.com", "cnbuyers.cn", "qq501.com", "baoupin.com", "jo365.cn", "taodianjia.com", "511box.com", "vhall.com", "wine9.com", "safe-best.com", "judazhe.com", "honglingjin.cn", "dangdang.com", "yng960.com", "360safe.com", "10fur.com", "teaok.com", "51yho.com", "shleiyi.com", "lookfantastic.com", "windeln.de", "windeln.com.cn", "tripidi.com", "myprotein.cn", "mouser.cn", "mioskincare.com", "lookfantastic.cn", "iherb.cn", "growgorgeous.com", "globalblue.cn", "gcmasia.com", "esprit.cn", "ba.de", "79gold.com", "sasa.com", "joinwework.cn", "rakuten.com", "takeya.co.jp", "strawberrynet.com", "royyoungchemist.com.au", "pharmacyonline.com.au", "pharmacy4less.com.au", "p-bandai.asia", "getthelabel.com", "feelunique.com", "babyhaven.com", "hktdc.com"];
        t.exports.init = function () {
            if (!e.new_extension) return !1;
            for (var t = document.domain, i = 0; i < n.length; i++) if (t === n[i]) return !0;
            return !1
        }
    }).call(e, n(1))
}, function (t, e, n) {
    (function (e) {
        "use strict";
        t.exports.checkimg = function (t, n, i, o) {
            var r = "undefined" == typeof i || "" == i || null == i ? 90 : i, a = t, s = new Image;
            e.browser.msie && e.browser.version < 11 ? s.onreadystatechange = function () {
                if ("complete" == s.readyState || "loaded" == s.readyState) {
                    if (s.width > 0 && s.height > 0) {
                        var e = r / s.width < r / s.height ? r / s.width : r / s.height;
                        1 >= e ? (n.css("width", s.width * e), n.css("height", s.height * e)) : (n.css("width", s.width), n.css("height", s.height))
                    }
                    n.attr("src", t)
                }
            } : s.onload = function () {
                if (1 == s.complete) {
                    if (s.width > 0 && s.height > 0) {
                        var e = r / s.width < r / s.height ? r / s.width : r / s.height;
                        1 >= e ? (n.css("width", s.width * e), n.css("height", s.height * e)) : (n.css("width", s.width), n.css("height", s.height))
                    }
                    n.attr("src", t), o && o()
                }
            }, s.onerror = function () {
                n.attr("src", e.s_server + "/images/extensions/default_load_image.png").css("width", 90), n.attr("data-original", e.s_server + "/images/extensions/default_load_image.png")
            }, s.src = a
        }
    }).call(e, n(1))
}, function (t, e) {
    t.exports = '<div id="{{extBrand}}_inner_{{type}}" class="{{extBrand}}_inner_lowprice">\n  <div class="{{extBrand}}_inner_head">\n    <a class="site_icon bdext-bg" href="javascript:" ></a>\n    <span class="big_title">\n        历史最低价\n    </span>\n    <span class="small_title">\n        这些同类商品处于历史最低价\n    </span>\n\n    <a class="{{extBrand}}_inner_page">\n      <span class="cur_page">1</span>\n      <span>/</span>\n      <span class="total_page">1</span>\n    </a>\n  </div>\n  <div class="{{extBrand}}_inner_content">\n    <a class="inner_page_left turnpage"><em class="bdext-bg"></em></a>\n    <div class="inner_pro_list" >\n      <ul class="{{extBrand}}_{{type}}_list">\n      </ul>\n    </div>\n    <a class="inner_page_right turnpage"><em class="bdext-bg"></em></a>\n  </div>\n  <style type="text/css">\n    .{{extBrand}}_inner_lowprice {\n      width: 100%;\n      height: 318px;\n      border: 1px solid #d9d9d9;\n      background-color: #fff;\n      margin-bottom: 10px;\n      display: inline-block;\n    }\n    .{{extBrand}}_jiuxian .{{extBrand}}_inner_lowprice, .{{extBrand}}_kaola .{{extBrand}}_inner_lowprice{\n      margin-top: 10px;\n    }\n    .{{extBrand}}_wbiao .{{extBrand}}_inner_lowprice {\n      box-sizing: border-box;\n    }\n    .{{extBrand}}_inner_content {\n      width: 100%;\n    }\n    .{{extBrand}}_inner_head {\n      height: 52px;\n      position: relative;\n    }\n    .big_title {\n      display: inline-block;\n      margin-top: 21px;\n      height: 16px;\n      line-height: 16px;\n      margin-left: 51px;\n      font-size: 14px;\n      font-weight: bold;\n      color: #425766;\n    }\n    .small_title {\n      font-size: 12px;\n      margin-left: 12px;\n      color: #a0abb2;\n    }\n    a.{{extBrand}}_inner_page {\n      position: absolute;\n      right: 20px;\n      top: 20px;\n      color: #425766;\n    }\n     a.{{extBrand}}_inner_page:hover {\n      text-decoration: none;\n    }\n    .{{extBrand}}_inner_head .site_icon {\n      display: inline-block;\n      position: absolute;\n      top: 18px;\n      left: 18px;\n      height: 23px;\n      width: 23px;\n      background-position: 0px 0px;\n    }\n    .{{extBrand}}_inner_lowprice *{\n      font-family: \'Microsoft Yahei\';\n    }\n    a.inner_page_left,.inner_page_right {\n      width: 50px;\n      display: inline-block;\n      height: 170px;\n      cursor: pointer;\n    }\n    a.inner_page_left em {\n      display: inline-block;\n      height: 50px;\n      width: 30px;\n      margin-top: 80px;\n      margin-left: 15px;\n      background-position: -77px -127px;\n    }\n    .inner_page_right em {\n      display: inline-block;\n      height: 50px;\n      width: 30px;\n      margin-top: 80px;\n      margin-left: 8px;\n      background-position: -115px -127px;\n    }\n    .inner_pro_list {\n      overflow: hidden;\n      height: 264px;\n      width: 1000px;\n    }\n    .inner_page_left, .inner_pro_list {\n      float: left;\n    }\n    .{{extBrand}}_inner_lowprice ul li {\n      float: left;\n      margin-left: 20px;\n      height: 264px;\n      list-style: none;\n    }\n    .{{extBrand}}_inner_lowprice ul li.li_first {\n      margin-left: 0px;\n    }\n    .{{extBrand}}_inner_lowprice ul li .item_img {\n      display: inline-block;\n      height: 172px;\n      width: 172px;\n      border: 1px solid #f1f1f1;\n      position: relative;\n      box-sizing: border-box;\n      text-align: center;\n    }\n    .{{extBrand}}_inner_lowprice li img {\n      height: auto;\n      width: auto;\n      max-height: 170px;\n      max-width: 170px;\n      vertical-align: middle;\n      margin: 0 auto;\n    }\n    .{{extBrand}}_inner_lowprice li .small_desc img {\n      height: 16px;\n      width: 16px;\n      vertical-align: inherit;\n    }\n    .small_desc .site_icon {\n      display: inline-block;\n      width: 21px;\n      height: 18px;\n      float: left;\n    }\n    .{{extBrand}}_inner_lowprice li a em{\n      position: absolute;\n      bottom: 0px;\n      left: 0px;\n      display: inline-block;\n      background-color: #ff4500;\n      color: #fff;\n      width: 42px;\n      height: 16px;\n      line-height: 16px;\n      text-align: center;\n      font-size: 12px;\n      font-style: normal;\n    }\n    .inner_dp_desc {\n      width: 170px;\n      margin-top: 10px;\n    }\n    .inner_dp_desc .dp_title{\n      color: #425766;\n      font-size: 12px;\n      display: inline-block;\n      width: 170px;\n      height: 36px;\n      line-height: 18px;\n      overflow: hidden;\n    }\n    .small_desc {\n      margin-top: 6px;\n      display: inline-block;\n      height: 36px;\n      width: 170px;\n      cursor: text;\n    }\n    .small_desc:hover {\n      cursor: text;\n    }\n    .small_desc .new_price {\n      font-size: 14px;\n      color: #e52222;\n      float: left;\n    }\n    .small_desc .old_price {\n      font-size: 12px;\n      color: #a0abb2;\n      float: right;\n      text-decoration: line-through;\n    }\n  </style>\n</div>';
}, function (t, e) {
    t.exports = '{{each data}}\n  <li class="{{$index==0?\'li_first\':\'\'}}">\n    <a class="item_img" href="{{$value.url}}" title="{{$value.title}}" target="_blank">\n      <img src="{{$value.img_url}}">\n      {{if $value.newdiscount}}\n        <em>{{$value.newdiscount}}折</em>\n      {{/if}}\n    </a>\n    <div class="inner_dp_desc">\n      <a class="dp_title" href="{{$value.url}}" title="{{$value.title}}" target="_blank">\n        {{$value.title}}\n      </a>\n      <a class="small_desc">\n        <span class="new_price">\n            ¥{{$value.price}}\n        </span>\n        <span class="old_price" style="display: {{($value.highest)?\'inline-block\':\'none\'}}">¥{{$value.highest}}</span>\n      </a>\n    </div>\n  </li>\n{{/each}}'
}, function (t, e, n) {
    (function (e) {
        "use strict";
        t.exports.init = function (t) {
            var n = e.u_server, i = "u." + e.u_key + ".com";
            if ("object" == typeof t) {
                if (t.url.indexOf(i) > -1) return t.url;
                var o = "";
                return t.ext && (o = "-" + t.ext), t.is_mobile && t.isbrowser ? t.url : n + "/union/go/?site_id=" + t.site_id + "&target_url=" + encodeURIComponent(t.url) + "&union=" + t.union + "&column=" + t.mod + "-" + t.dp_id + o
            }
        }
    }).call(e, n(1))
}, function (t, e) {
    t.exports = '<div class="bdext-product-detail lowest-product-detail"  style="left:0px;" >\n  <div class="bdext-page bdext-turnleft">\n    <span class="bdext-bg turnpage-btn"></span>\n  </div>\n  <div class="bdext-product-box ">\n    <ul>\n      {{each data}}\n      <li {{if $index%per == 0}} class="bdext-margl0" {{/if}}>\n        <a href="{{$value.url}}" target="_blank" class="bdext-item-img">\n          <img src="{{loadimg}}" data-original="{{$value.img_url}}">\n          {{ if $value.discount }}\n          <span class="bdext-discount">{{$value.discount}}折</span>\n          {{/if}}\n        </a>\n        <a href="{{$value.url}}" target="_blank" title="{{$value.title}}" class="bdext-item-tle">\n          {{$value.title}}\n        </a>\n        <span class="lowest-price-info "> \n          <span class="now-pri fontb">￥{{$value.price}}</span>\n          <span class="old-pri">￥{{$value.last_price}}</span>\n        </span>\n      </li>\n      {{/each}}\n    </ul>\n  </div>\n  <div class="bdext-page bdext-turnright">\n    <span class="bdext-page-num"><em>1</em>/{{pages}}</span>\n    <span class="bdext-bg turnpage-btn"></span>\n  </div>\n</div>'
}, function (t, e, n) {
    (function (e, i) {
        "use strict";
        var o = n(37), r = n(12), a = 0, s = n(15), l = n(34), c = function (t, o, s) {
            var l = n(39);
            e(t).append(r.compile(l)({data: o, s_server: i.s_server, his_size: a}))
        }, d = function (t, n) {
            c(e(".bdext-history"), t, n)
        }, p = function () {
            return a >= 4 ? 380 : 95 * a
        }, u = function (t) {
            for (var e = [], n = 0; n < t.length; n++) if (t[n].url) {
                var o = {
                    site_id: t[n].site_id,
                    url: t[n].url,
                    mod: "history",
                    union: i.union.split("_")[1],
                    dp_id: t[n].dp_id
                };
                t[n].url = l.init(o), e.push(t[n])
            }
            return e
        }, h = function (t) {
            t = t || [], t = u(t.slice(0, 10)), a = t.length;
            var e = p();
            d(t, e), m()
        }, m = function () {
            e(".bdext-history").on("mouseenter", function () {
                e("#history_detail").show()
            }), e(".bdext-history").on("mouseleave", function () {
                e("#history_detail").hide()
            }), e(".item_close_btn").on("click", function () {
                var t = e(this).attr("data-id");
                a--, v(e(this).parents("li"), t)
            }), e("#history_detail .clear_his").on("click", function () {
                g()
            })
        }, f = function () {
            o.get(h)
        }, g = function () {
            o.delAll(function () {
                e(".history_detail .history_content ul").empty(), e(".history_detail .history_content").addClass("no-his-content"), e(".history_detail .history_content").height(76), e(".clear_his").hide()
            })
        }, x = function () {
            var t = s.get("dp_data"), e = t && t.now.now_dp_id;
            "taobao" != i.site && "tmall" != i.site && o.add(e)
        }, v = function (t, n) {
            var i = p();
            o.del(n, function () {
                return e(t).remove(), 343 != i ? 0 === a ? (e(".history_detail .history_content").addClass("no-his-content"), void e(".clear_his").hide()) : void e(".history_detail .history_content").height(i) : void 0
            })
        };
        t.exports.init = function () {
            f(), x()
        }
    }).call(e, n(4), n(1))
}, function (t, e, n) {
    var i;
    (function (o) {
        "use strict";
        i = function () {
            var t, e, i, r = {}, a = n(16), s = n(38);
            r.get = function (n) {
                a.get(o.server + "/brwext/history?op=get").done(function (o) {
                    o = s(o.result), o = l(o), t = o, n && n(o), i && !e && (i(o), e = !0)
                })
            };
            var l = function (t) {
                for (var e = [], n = 0; n < t.length; n++) {
                    var i = Number(t[n].price);
                    t[n].url && t[n].title && i && i > 0 && e.push(t[n])
                }
                return e
            };
            return r.add = function (t, e) {
                a.get(o.server + "/brwext/history?op=add&dp_id=" + t).done(function (t) {
                    e && e(t)
                })
            }, r.delAll = function (t) {
                a.get(o.server + "/brwext/history?op=delAll").done(function (e) {
                    t()
                })
            }, r.del = function (t, e) {
                a.get(o.server + "/brwext/history?op=del&dp_id=" + t).done(function (t) {
                    e && e()
                })
            }, r.getSize = function (n) {
                t ? (n(t), e = !0) : i = n, setTimeout(function () {
                    e || (i(null), e = !0)
                }, 14e3)
            }, r
        }.call(e, n, e, t), !(void 0 !== i && (t.exports = i))
    }).call(e, n(1))
}, function (t, e, n) {
    (function (e) {
        "use strict";
        t.exports = function (t) {
            var n = ["15", "94", "108", "196", "32", "234", "273", "290", "292", "367", "373", "377"],
                i = e.crc64 ? e.img64_server : e.img_server;
            if (!t.length) return [];
            for (var o = 0; o < t.length; o++) {
                var r = t[o], a = r.dp_id;
                if (a) for (var s = a.match(/\d+-(\d+)/)[1], l = 0; l < n.length; l++) s === n[l] && (t[o].pic_url ? t[o].pic_url = i + "/c_zoom,h_90/dp" + r.dp_id : t[o].img_url = i + "/c_zoom,h_90/dp" + r.dp_id)
            }
            return t
        }
    }).call(e, n(1))
}, function (t, e) {
    t.exports = '<div id="history_detail" class="history_detail">\n  <div class="history_head">\n    <span class="history_head_tle">浏览历史</span>\n    {{if his_size != 0}}\n    <span class="clear_his">清空历史</span>\n    {{/if}}\n  </div>\n  <div class="history_content his_size_{{his_size}}">\n    <ul>\n      {{each data}}\n      <li >\n        <a class="item_img" href="{{$value.url}}" target="_blank" title="{{$value.title}}"><img src="{{$value.img_url}}"></a>\n        <div class="item_desc">\n          <a class="item_title" href="{{$value.url}}" target="_blank" title="{{$value.title}}">{{$value.title}}</a>\n          <a class="other_desc">\n            <span class="site_icon" title="{{$value.site_name}}"><img src="{{s_server}}/images/favicon/{{$value.site_id}}.ico"></span>\n            <span class="item_price">¥{{$value.price}}</span>\n            <span class="item_close_btn" data-id="{{$value.dp_id}}">删除</span>\n          </a>\n        </div>\n      </li>\n      {{/each}}\n    </ul>\n    <div class="no-history">暂无浏览历史</div>\n  </div>\n</div>'
}, function (t, e, n) {
    (function (e, i) {
        "use strict";
        var o = n(16), r = n(12), a = n(41), s = n(50), l = n(14), c = n(19), d = 36e5, p = 24 * d, u = n(21),
            h = e.supportSite, m = function (t) {
                0 === t.store[0].all_line.length ? (g(null), x(null)) : (e.showMainbar || "amazon-uk" === e.site || "amazon-com" === e.site || "amazon-jp" === e.site || (i("#bdext_mainbar").show(), e.showMainbar = !0, u.tongji("mainbar", "show")), e.showMinibar || (i("#bdext_minibar").css("display", "inline-block"), e.showMinibar = !0), a.init(t), g(t), "6pm" !== e.site && x(t))
            }, f = function (t) {
                try {
                    var e = parseInt(t.store[0].current_price.toString().replace(",", "")), n = t.store[0].all_line;
                    e = n[n.length - 1];
                    var i = Math.min.apply(null, t.store[0].all_line);
                    return e == i ? !0 : !1
                } catch (o) {
                    return console.log(o), !1
                }
            }, g = function (t) {
                if (t) {
                    if (1 === t.price_status) i(".bdext-trend .bdext-trend-icon").addClass("bdext-trend-up"), i(".bdext-trend .bdext-trend-tle").text("价格上涨"); else if (0 === t.price_status) i(".bdext-trend .bdext-trend-icon").addClass("bdext-trend-stable"), i(".bdext-trend .bdext-trend-tle").text("价格平稳"); else if (-1 === t.price_status) {
                        var e = "价格下降";
                        (f(t) || t.store[0].islowest) && (e = "历史最低"), i(".bdext-trend .bdext-trend-icon").addClass("bdext-trend-low"), i(".bdext-trend .bdext-trend-tle").text(e)
                    }
                    i(".bdext-trend").show(), c.autoWidth()
                }
            }, x = function (t) {
                if (t) {
                    if (i(".bdext-mini-trend em").addClass("bdext-bg"), 1 === t.price_status) i(".bdext-mini-trend em").addClass("bdext-trend-up"), i(".bdext-mini-trend>span").text("价格上涨"); else if (0 === t.price_status) i(".bdext-mini-trend em").addClass("bdext-trend-stable"), i(".bdext-mini-trend>span").text("价格平稳"); else if (-1 === t.price_status) {
                        var e = "价格下降";
                        (f(t) || t.store[0].islowest) && (e = "历史最低"), i(".bdext-mini-trend em").addClass("bdext-trend-low"), i(".bdext-mini-trend>span").text(e)
                    }
                } else i(".bdext-mini-trend em").hide(), i(".bdext-mini-trend>span").text("暂无价格走势").addClass("no_info"), i(".bdext-mini-trend").css("text-align", "center")
            }, v = function (t, n, i) {
                var r = (100 * e.dp.price).toFixed(2),
                    a = e.server + "/extension?ac=price_trend&dp_ids=" + t + "&dp_id=" + n + "&price=" + r;
                o.get(a).done(function (t) {
                    i(t)
                })
            }, b = function () {
                y(), _()
            }, y = function () {
                var t = '<div id="bdext_maintrend_detail"></div>';
                i(".bdext-trend").append(r.compile(t)()), i(".bdext-trend").on("mouseleave", function () {
                    i("#bdext_maintrend_detail").hide()
                }), w()
            }, w = function () {
                var t = i("#bdext_maintrend_detail");
                if (0 !== t.length) {
                    var e = i(window).width(), n = 1101, o = 0;
                    n + 106 > e && (o = (e - n) / 2, t.css("left", o + "px")), n > e && t.height(e - 2), 1e3 > e && t.remove()
                }
            }, _ = function () {
                var t = '<div id="bdext_minitrend_detail"><div id="bdext_mini_trendbox"></div></div>';
                i(".bdext-mini-trend").append(r.compile(t)()), i(".bdext-mini-trend").on("mouseenter", function () {
                    i("#bdext_minibar").addClass("_mshover")
                }), i(".bdext-mini-trend").on("mouseleave", function () {
                    i("#bdext_minitrend_detail").hide(), i("#bdext_minibar").removeClass("_mshover")
                })
            }, k = function (t) {
                for (var e = 0, n = t.length, i = t.map(function (t) {
                    return t[1]
                }), o = Math.min.apply(void 0, i), r = t[n - 1][1], a = !1, s = 20, l = 0, c = n - 1; c >= 0; c--) {
                    var d = t[c][1];
                    if (c > 0 && (l += (t[c][0] - t[c - 1][0]) / 864e5), 0 != d) if (r != d) {
                        if (parseFloat(r) > parseFloat(d) && c >= n - s - 1) {
                            e = 1;
                            break
                        }
                        if (parseFloat(r) < parseFloat(d)) {
                            e = -1, r === o && (a = !0);
                            break
                        }
                    } else if (l > 180) break
                }
                return {price_status: e, islowest: a, price_last: r}
            }, S = function (t) {
                var e = "USD";
                "www.amazon.co.jp" == location.host && (e = "JPY"), ["www.amazon.fr", "www.amazon.de", "www.amazon.es", "www.amazon.nl", "www.amazon.it"].indexOf(location.host) > -1 && (e = "EUR"), "www.amazon.ca" == location.host && (e = "CAD"), "www.amazon.co.uk" == location.host && (e = "GBP"), t.store[0].currency = e
            }, T = function (t) {
                var n = "";
                if ("taobao" == t && (n = i("#J_PromoPriceNum").text(), "" == n && 0 == i("#J_PromoPriceNum").length && (n = i("#J_StrPrice .tb-rmb-num").text())), "tmall" == t && ("" == n && (n = i("#J_DetailMeta #J_PromoPrice span.tm-price").text()), "" == n && (n = i("span.tm-price").text()), "detail.tmall.hk" === location.host && (n = i("span.tm-price:eq(1)").text()), i(".tb-wrTuan-num").text() && (n = i(".tb-wrTuan-num").text())), "taobao-95095" == t && (n = i("#J_PromoPrice .tm-price").text(), "" == n && (n = i("#J_StrPriceModBox .tm-price").text())), "ai-taobao" == t) {
                    if (e.chrome_extension) {
                        var o = i(".aitaobao-edetail-header script").text();
                        n = /promoPrice":"([\d\.]+)"/.exec(o), n && (n = n[1])
                    } else n = window.pageconfig.promoPrice;
                    "" != n && n || (n = i(".price-wrap .price-single .price-promo strong").text())
                }
                return n.indexOf("-") > -1 && (n = n.split("-")[0]), l(n)
            }, C = function (t, n) {
                if (t && t.list) {
                    var i = void 0, o = void 0, r = void 0, a = void 0, s = void 0, l = t.list.length, c = [];
                    a = new Date(t.curTime).getTime(), o = r = t.list[0].price;
                    try {
                        for (var u = 0; l > u; u++) {
                            var h = t.list[u];
                            c.push([new Date(h.time).getTime(), h.price]), h.price > r && (r = h.price), h.price < o && (o = h.price)
                        }
                        for (var u = l - 1; u > 0; u--) if (c[u][0] - c[u - 1][0] > 864e5) {
                            var m = [c[u][0] - 864e5, c[u - 1][1]];
                            c.splice(u, 0, m)
                        }
                        var f = c[c.length - 1];
                        if (f[0] < a) {
                            var g = f[1], x = T(e.site);
                            a - f[0] > 864e5 && c.push([a - 864e5, g]), x && g != x && (x > r && (r = x), o > x && (o = x), c.push([a, x]))
                        }
                        var v = T(e.site);
                        v && (c[c.length - 1][1] = v);
                        var b = k(c), y = b.price_status, w = b.price_last;
                        i = b.islowest;
                        for (var _ = o + "-" + r, S = new Date(t.startTime).getDate(), C = new Date(t.startTime).getMonth(), A = new Date(t.startTime).getFullYear(), P = [], z = new Date, L = function (t) {
                            for (var e = 0; e < c.length - 1; e++) if (t >= c[e][0] && t < c[e + 1][0]) return c[e][1];
                            return c[c.length - 1][1]
                        }, M = c[0][0]; M <= z.getTime();) {
                            var E = L(M);
                            P.push(parseFloat(E.toFixed(2))), M += p
                        }
                        var I = null;
                        P.length >= 365 && (I = P.slice(P.length - 365));
                        var N = null;
                        P.length >= 31 && (N = P.slice(P.length - 31));
                        var D = null;
                        if (P.length >= 6) {
                            var O = P.slice(P.length - 6);
                            D = [];
                            for (var u = 0; u < O.length - 1; u++) {
                                for (var B = [], R = 0; 24 > R; R++) B.push(O[u]);
                                D = D.concat(B)
                            }
                            D.push(O[O.length - 1])
                        }
                        var q = new Date;
                        s = {
                            price_status: y,
                            startD: S,
                            startM: C,
                            startY: A,
                            now_day: z.getTime(),
                            extra: "start from another",
                            store: [{
                                current_price: w,
                                all_line: P,
                                all_line_begin_time: c[0][0] + 8 * d,
                                year_line: I,
                                year_line_time: z.getTime() - 365 * p,
                                month_line: N,
                                month_line_time: z.getTime() - 30 * p,
                                short_day_line: D,
                                short_day_line_begin_time: q.getTime() + 8 * d - 5 * p,
                                min_stamp: "0",
                                islowest: i,
                                name: j(),
                                price_range: _,
                                promo: [],
                                all_equal_short: !1
                            }]
                        }, n(s)
                    } catch (H) {
                        console.log(H)
                    }
                }
            }, A = function (t, i) {
                "tmall" == e.site || "taobao95095" == e.site ? v(t, i, function (t) {
                    0 !== t.price_status || 0 === t.price_status && t.store[0].highest !== t.store[0].lowest ? m(t) : n(50).getTrend(function (e) {
                        e ? C(e, function (e) {
                            m(e ? e : t)
                        }) : m(t)
                    })
                }) : e.site.indexOf("taobao") > -1 ? s.getTrend(function (e) {
                    e ? C(e, function (e) {
                        e ? m(e) : v(t, i, function (t) {
                            m(t)
                        })
                    }) : v(t, i, function (t) {
                        m(t)
                    })
                }) : v(t, i, function (t) {
                    ("amazon-com" === e.site || "amazon-uk" === e.site || "amazon-jp" === e.site) && S(t), m(t)
                })
            }, j = function () {
                var t = "", n = {
                    taobao: "淘宝",
                    tmall: "天猫",
                    "360buy": "京东商城",
                    "51buy": "易迅网",
                    suning: "苏宁易购",
                    yihaodian: "一号店",
                    dangdang: "当当网",
                    gome: "国美在线",
                    lefeng: "乐蜂网",
                    xiu: "走秀网",
                    philips: "飞利浦",
                    tcl: "TCL商城",
                    "e-changhong": "长虹商城",
                    konka: "康佳商城",
                    hisense: "海信商城",
                    ineigo: "爱内购",
                    skg: "SKG商城",
                    "k-touch": "天语手机官网",
                    gionee: "金立",
                    oppo: "OPPO",
                    gfive: "基伍官方商城",
                    vivo: "vivo",
                    meilishuo: "美丽说",
                    mogujie: "蘑菇街",
                    xiaomi: "小米官网",
                    lemall: "乐视商城",
                    grainger: "固安捷官网",
                    piao: "网易电影票",
                    163: "网易商城",
                    dianping: "点评团",
                    nuomi: "百度糯米",
                    meituan: "美团",
                    bookuu: "博库文具",
                    bookschina: "中国图书网",
                    1688: "阿里巴巴",
                    zol: "中关村商城",
                    amazon: "亚马逊",
                    tiantian: "天天网",
                    womai: "我买网",
                    yougou: "优购网",
                    vmall: "华为商城",
                    paixie: "拍鞋网",
                    newegg: "新蛋商城",
                    vancl: "凡客诚品"
                };
                try {
                    for (var i = e.site, o = ["360buy", "gome", "suning", "taobao", "yihaodian", "womai", "bookschina", "paixie", "bookuu", "tiantian"], r = 0; r < o.length; r++) if (i.indexOf(o[r]) > -1) {
                        i = o[r];
                        break
                    }
                    t = n[i]
                } catch (a) {
                    if (e.debug) throw a
                }
                return "undefined" == typeof t && (t = ""), "淘宝" == t && window.location.host.toString().indexOf("tmall") > -1 && (t = "天猫"), t
            };
        t.exports.init = function (t, e) {
            if (e && !e.match(/^0-[0-9]+/)) {
                if (t) {
                    var n = t.split("|");
                    e && -1 === n.indexOf(e) && n.push(e);
                    for (var i = [], o = 0; o < n.length; o++) {
                        var r = n[o].match(/\d+-(\d+)/)[1];
                        h.indexOf(r) > -1 && i.push(n[o])
                    }
                    t = i.join(",")
                }
                b(), A(t, e)
            }
        }, t.exports.init2 = function (t) {
            b(), t.list = t.monthtrend, t.curTime = t.lastday, t.startTime = new Date(new Date(t.monthtrend[0].time) - 2592e6), C(t, function (t) {
                t && m(t)
            })
        }, t.exports.resizeSetLeft = function () {
            w()
        }
    }).call(e, n(1), n(4))
}, function (t, e, n) {
    var i;
    (function (o, r) {
        "use strict";
        i = function () {
            var t = new Date, i = void 0, a = n(43), s = n(14), l = n(44), c = n(4), d = n(45), p = n(12), u = n(5),
                h = n(46), m = n(21), f = !1, g = "美元", x = 1, v = 0, b = 864e5, y = 10, w = 3, _ = !1, k = void 0,
                S = void 0, T = !1, C = void 0, A = void 0;
            o.SVGRenderer.prototype.symbols.rect = function (t, e, n, i) {
                return ["M", t - 2, e, "L", t + 9, e, "L", t + 9, e + 5, "L", t - 2, e + 5, "Z"]
            }, o.SVGRenderer.prototype.symbols.smallRect = function (t, e, n, i) {
                return ["M", t - 2, e, "L", t + 9, e, "Z"]
            }, o.wrap(o.Tooltip.prototype, "hide", function (t) {
                t.apply(this), this.chart.tooltip.options.onHide.apply(this)
            });
            var j = {folded: "smallRect", extended: "rect"};
            (r.IE7 || r.IE8) && (j.folded = "circle", j.extended = "circle");
            var P = "plotAll", z = !1, L = function () {
                var t = [], e = {
                    inList: function (e) {
                        return t.indexOf(e) > -1
                    }, add: function (e) {
                        T && z || t.indexOf(e) > -1 || t.push(e)
                    }, remove: function (e) {
                        var n = t.indexOf(e);
                        n > -1 && t.splice(n, 1)
                    }
                };
                return e
            }(), M = function () {
                var t = {};
                t["评论数"] = "#ca60a6";
                var e = ["#45b7f5", "#eb46eb", "#ffad06", "#21c1db", "#b88ae6", "#b37036", "#b9db0f", "#ffd91c"], n = 0;
                return function (i) {
                    return t[i] ? t[i] : n < e.length ? (t[i] = e[n++], t[i]) : (t[i] = "#" + parseInt(256 * Math.random() * 256 * 256).toString(16), t[i])
                }
            }(), E = function () {
                var t = !1;
                return function () {
                    t || (t = !0, u.log("trend-qrcode-show"), h("trend-qrcode-show"))
                }
            }(), I = function (t, e) {
                return Math.abs(t - e) < 1e-4
            }, N = function (t) {
                return JSON.parse(JSON.stringify(t))
            }, D = !0, O = 0, B = !1, R = void 0, q = void 0, H = void 0, F = void 0, W = void 0, $ = void 0;
            O = n(49);
            var X = function (t, e, n, i) {
                var o = F.store.filter(function (e) {
                    return e.name === t
                })[0];
                if (void 0 == o) return e;
                var r = o[W];
                if (!r) return e;
                if (!o.all_equal_short && "short_day_line" !== W && i) {
                    var a = void 0, s = void 0;
                    switch (W) {
                        case"all_line":
                            a = o.all_line_begin_time;
                            break;
                        case"year_line":
                            a = o.year_line_time;
                            break;
                        case"month_line":
                            a = o.month_line_time
                    }
                    return a = new Date(a - 288e5), a = new Date(a.getYear() + 1900, a.getMonth(), a.getDate()), s = i - a.getTime(), r[parseInt(s / b)]
                }
                var l = parseInt(r.length * n - 1);
                0 > l && (l += 1);
                var c = void 0;
                c = l >= 1 ? [r[l - 1], r[l], r[l + 1]] : [r[l], r[l + 1]], c = c.filter(function (t) {
                    return void 0 !== t
                });
                var d = c.map(function (t) {
                    return Math.abs(t - e)
                }), p = d.indexOf(Math.min.apply(null, d));
                return c[p]
            }, Y = null, G = {}, U = {x: 0, y: 0};
            o.setOptions({global: {timezoneOffset: 8}});
            var V = {highLine: null, lowLine: null}, J = !1, Z = function (t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
                    n = t.yAxis instanceof Array ? t.yAxis[0] : t.yAxis, i = n.plotLinesAndBands,
                    a = t.chart ? t.chart : t, s = a.series;
                s.forEach(function (t) {
                    ("max" === t.name || "min" === t.name) && t.remove(!0)
                }), O || (O = 0);
                var l = it(s), c = i.filter(function (t) {
                    return "highPrice" === t.id
                }), p = i.filter(function (t) {
                    return "lowPrice" === t.id
                }), u = i.filter(function (t) {
                    return "originPrice" === t.id
                });
                if (c = c.length ? c[0].options : V.highLine, p = p.length ? p[0].options : V.lowLine, u.length && (u = u[0].options), V.highLine = c, V.lowLine = p, n.removePlotLine("highPrice"), n.removePlotLine("lowPrice"), u && (n.removePlotLine("originPrice"), n.addPlotLine(u)), l) {
                    l.max = parseFloat(o.numberFormat(l.max, 2, ".", "")), l.min = parseFloat(o.numberFormat(l.min, 2, ".", "")), c.value = l.max, p.value = l.min;
                    var h = function (t) {
                        return ""
                    };
                    f && (h = function (t) {
                        var e = {
                            com: "$",
                            "co.uk": "£",
                            de: "EUR",
                            "co.jp": "¥",
                            fr: "EUR",
                            ca: "CDN$",
                            cn: "¥",
                            it: "EUR",
                            es: "EUR",
                            "6pm": "$"
                        }, n = "";
                        for (var i in e) location.host.indexOf(i) > -1 && ("amazon" === r.site || "6pm" == r.site) && (n = e[i]);
                        return n
                    });
                    var m = h();
                    c.label.text = "最高:" + m + d(l.max), p.label.text = "最低:" + m + d(l.min), "www.amazon.co.jp" == location.host && (c.label.text = "最高:" + d(l.max) + "日元", p.label.text = "最低:" + d(l.min) + "日元"), c.label.y = w, p.label.y = w, u.label && (u.label.y = w);
                    var g = function (t, e) {
                        return Math.abs(t - e) < .05
                    };
                    I(c.value, p.value) && (c.label.text = "", p.label.text = "现价:" + m + d(l.min), "www.amazon.co.jp" == location.host && (p.label.text = "现价:" + d(l.min) + "日元"), l.minStart = Math.max(l.minStart, l.maxStart), l.maxStart = l.minStart), (g(c.value, O) || g(p.value, O)) && (D || z) && u.label ? (u.label.text = "", n.removePlotLine("originPrice"), n.addPlotLine(u)) : D && u.label && (u.label.text = "原价:" + m + d(O), "www.amazon.co.jp" == location.host && (u.label.text = "原价:" + d(O) + "日元"), n.removePlotLine("originPrice"), n.addPlotLine(u)), e || (n.addPlotLine(c), n.addPlotLine(p));
                    var x = s[0], v = x.data[x.data.length - 1];
                    v || (v = {x: H});
                    var b = {
                        name: "max",
                        showInLegend: !1,
                        pointStart: l.maxStart,
                        pointInterval: v.x - l.maxStart,
                        zIndex: 1e3,
                        data: [{
                            y: l.max,
                            marker: {
                                enabled: !0,
                                fillColor: "#ed4a4a",
                                radius: 3,
                                symbol: "circle",
                                states: {
                                    hover: {
                                        enabled: !0,
                                        lineColor: "#fadbdc",
                                        fillColor: "#ed4a4a",
                                        lineWidth: 3,
                                        radius: 5,
                                        symbol: "circle"
                                    }
                                }
                            }
                        }, {y: l.max, marker: {enabled: !1, states: {hover: {enabled: !1}}}}],
                        color: "#ed4a4a",
                        dashStyle: "dash",
                        lineWidth: 1,
                        states: {hover: {enabled: !0, halo: {size: 0}}}
                    }, y = {
                        name: "min",
                        showInLegend: !1,
                        pointStart: l.minStart,
                        pointInterval: v.x - l.minStart,
                        zIndex: 1e3,
                        data: [{
                            y: l.min,
                            marker: {
                                fillColor: "#35bd67",
                                radius: 3,
                                enabled: !0,
                                symbol: "circle",
                                states: {
                                    hover: {
                                        enabled: !0,
                                        lineColor: "#daf5e4",
                                        fillColor: "#35bd67",
                                        lineWidth: 3,
                                        radius: 5,
                                        symbol: "circle"
                                    }
                                }
                            }
                        }, {y: l.min, marker: {enabled: !1, states: {hover: {enabled: !1}}}}],
                        color: "#35bd67",
                        dashStyle: "dash",
                        lineWidth: 1
                    };
                    e || (a.addSeries(b), a.addSeries(y));
                    var T = l.max - l.min;
                    (O - l.max) / T > .5 && T ? (_ = !0, u.value = c.value + .5 * T, k = u.value, S = O - u.value) : (_ = !1, u.value = O);
                    var C = l.max, A = l.min;
                    D && (C = Math.max(l.max, u.value), A = Math.min(l.min, u.value)), 0 === A && (A = l.min);
                    var j = C - A, P = parseInt(j / 5 * 10) / 10, L = .5;
                    if (j > 50 && (L = 10), .5 > j && (L = .1), .2 > j && (L = .05), L > P) P = L; else {
                        for (var M = L; P > M;) M += L;
                        P = M
                    }
                    var E = {
                        max: C + .1 * j,
                        min: A - .1 * j > 0 ? A - .1 * j : A,
                        tickInterval: j ? P : 10,
                        tickStart: parseInt(A)
                    };
                    u.value > E.max && z && (E.max = u.value), n.update(E);
                    var N = n.plotLinesAndBands.map(function (t) {
                        return t.svgElem ? {id: t.id, y: t.svgElem.d.split(" ")[2]} : {id: t.id, y: t.value}
                    }), B = {};
                    if (N.forEach(function (t) {
                            B[t.id] = parseFloat(t.y)
                        }), !(N.length <= 2)) {
                        var R = {
                            highLow: B.highPrice - B.lowPrice,
                            highOrigin: B.highPrice - B.originPrice,
                            lowOrigin: B.lowPrice - B.originPrice
                        };
                        Math.abs(R.highLow) < 11 && 0 !== R.highLow && (c.label.y -= 5.5, p.label.y += 5.5), Math.abs(R.highOrigin) < 11 && (c.value - u.value < 0 ? (u.label.y -= 5.5, c.label.y += 5.5) : c.value - u.value > 0 && (u.label.y += 5.5, c.label.y -= 5.5)), Math.abs(R.lowOrigin) < 11 && (p.value - u.value < 0 ? (u.label.y -= 5.5, p.label.y += 5.5) : p.value - u.value > 0 && (u.label.y += 5.5, p.label.y -= 5.5)), n.removePlotLine("highPrice"), n.removePlotLine("lowPrice"), n.removePlotLine("originPrice"), e || (n.addPlotLine(c), n.addPlotLine(p), n.addPlotLine(u))
                    }
                }
            }, K = {
                chart: {
                    renderTo: "plotArea",
                    type: "line",
                    animation: !1,
                    marginRight: 290,
                    marginLeft: 70,
                    events: {
                        load: function () {
                            var e = this.series[0];
                            p = e.data[e.data.length - 1].x;
                            var n = this.xAxis[0].max - 5 * b;
                            e.options.pointStart > n && (n = e.options.pointStart);
                            var i = {
                                name: "当前商城原始价格",
                                pointStart: n,
                                pointInterval: 1,
                                data: [{y: O, marker: {enabled: !1}}, {y: O, marker: {enabled: !1}}],
                                lineWidth: 1,
                                zIndex: 1,
                                marker: {symbol: j.extended, states: {hover: {enabled: !1}}},
                                color: "#888888",
                                enableMouseTracking: !1,
                                legendIndex: 0
                            }, o = this.series;
                            A = o && o[1] && "评论数" === o[1].name ? o[1] : null, $ = this.plotWidth;
                            var r = o[0].data;
                            if (i.data[0].y ? this.addSeries(i) : this.yAxis[0].removePlotLine("originPrice"), z) o.forEach(function (t, e) {
                                0 === e || "当前商城原始价格" === t.name ? t.show() : t.hide()
                            }); else {
                                for (var a = 0; a < o.length; a++) L.inList(o[a].name) ? (o[a].show(), "当前商城原始价格" === o[a].name && O && (this.yAxis[0].addPlotLine(q), D = !0, i.data[0].y || this.yAxis[0].removePlotLine("originPrice"), D = !0), o[a].update({marker: {symbol: j.extended}})) : (o[a].hide(), "当前商城原始价格" === o[a].name && (this.yAxis[0].removePlotLine("originPrice"), D = !1), o[a].update({marker: {symbol: j.folded}}));
                                T && o[1] && "评论数" === o[1].name && o[1] && o[1].show()
                            }
                            var s = 0;
                            switch (P) {
                                case"plotYear":
                                    s = 366;
                                    break;
                                case"plotMonth":
                                    s = 30;
                                    break;
                                case"plot5Day":
                                    s = 5
                            }
                            Z(this, J), "plotAll" === P || z || this.xAxis[0].update({min: H - s * b, max: H});
                            var l = o.filter(function (t) {
                                return t.visible && "max" !== t.name && "min" !== t.name
                            });
                            if (0 !== l.length) {
                                var c = l.map(function (t) {
                                    return t.options.pointStart
                                }).filter(function (t) {
                                    return t
                                }), d = Math.min.apply(null, c);
                                "plotAll" === P || z || (d = H - s * b);
                                for (var a = 0; a < o.length; a++) if (o[a].data.length) {
                                    r = o[a].data;
                                    break
                                }
                                var p = r[r.length - 1];
                                if (this.xAxis[0].update({
                                        min: d,
                                        max: p ? p.x : t.getTime()
                                    }), 1 === l.length && "当前商城原始价格" === l[0].name && ("plotAll" !== P || z || this.xAxis[0].update({
                                        min: H - 36e5,
                                        max: H
                                    }), this.yAxis[0].update({min: O, max: O})), this.yAxis.length > 1) {
                                    if (this.yAxis[0].dataMin == this.yAxis[0].dataMax) {
                                        var u = parseInt(.2 * this.yAxis[0].dataMin);
                                        u > 100 && (u = 100 * Math.round(u / 100)), this.yAxis[0].update({
                                            min: parseInt(.5 * this.yAxis[0].dataMin),
                                            max: parseInt(1.5 * this.yAxis[0].dataMin),
                                            tickInterval: u
                                        })
                                    }
                                    this.yAxis[1].update({
                                        min: this.yAxis[1].dataMin,
                                        max: this.yAxis[1].dataMax,
                                        tickInterval: parseInt(this.yAxis[1].dataMax / 5) || 1
                                    }), this.xAxis[0].update({min: this.series[1].data[0].category})
                                }
                            }
                        }
                    }
                },
                credits: {enabled: !1},
                title: {text: "test", style: {fontWeight: "bold", fontFamily: "Microsoft YaHei", fontSize: 16}},
                xAxis: {
                    offset: 0,
                    type: "datetime",
                    dateTimeLabelFormats: {minute: "%m/%d", hour: "%m/%d", day: "%m/%d", week: "%m/%d", month: "%Y/%m"},
                    minorGridLineColor: "#dfdfdf",
                    labels: {
                        rotation: -25,
                        y: 30,
                        style: {fontSize: "12px", fontFamily: "Arial", color: "#323333"},
                        align: "center"
                    },
                    gridLineColor: "#e6e9eb",
                    lineColor: "#e6e9eb",
                    gridLineWidth: 1,
                    tickLength: 0,
                    minTickInterval: b,
                    startOnTick: !1,
                    tickPositioner: function () {
                        var t = [], e = this.min, n = this.max, i = new Date(e), o = 0, r = void 0, a = 1;
                        if (n - e > 300 * b) {
                            var s = new Date(1900 + i.getYear(), i.getMonth() + 1, 2);
                            o = s.getTime();
                            for (var l = $ / ((n - e) / (30 * b)); 100 > a * l;) a++;
                            r = "nmonth"
                        } else if (n - e > 64 * b) {
                            var s = new Date(1900 + i.getYear(), i.getMonth() + 1, 2);
                            o = s.getTime(), r = "month"
                        } else if (n - e > 10 * b) o = e, r = "day"; else {
                            var s = new Date(1900 + i.getYear(), i.getMonth(), i.getDate() + 1);
                            o = s.getTime(), r = "hour"
                        }
                        for (; n >= o - 54e6;) switch (t.push(o - 54e6), r) {
                            case"month":
                                var s = new Date(o), c = new Date(1900 + s.getYear(), s.getMonth() + 1, 2);
                                o = c.getTime();
                                break;
                            case"day":
                                o += 5 * b;
                                break;
                            case"hour":
                                o += b;
                                break;
                            case"nmonth":
                                s = new Date(o), c = new Date(1900 + s.getYear(), s.getMonth() + a, 2), o = c.getTime()
                        }
                        if (z) {
                            for (var d = 0; t[d] < this.min;) d++;
                            t = [t[d], t[t.length - 1]]
                        }
                        switch (r) {
                            case"month":
                            case"nmonth":
                                t.info = {unitName: "month", higherRanks: {}};
                                break;
                            default:
                                t.info = {unitName: "day", higherRanks: {}}
                        }
                        return t
                    }
                },
                yAxis: {
                    offset: 0,
                    labels: {
                        formatter: function () {
                            var t = void 0;
                            return t = !_ || this.value < k ? o.numberFormat(this.value, 2) : o.numberFormat(this.value + S, 2), t = t.replace(".00", "")
                        }
                    },
                    align: "high",
                    gridLineColor: "#e6e9eb",
                    title: {
                        text: "人民币:",
                        rotation: 0,
                        y: -20,
                        x: -13,
                        align: "high",
                        offset: 0,
                        style: {fontFamily: "Microsoft YaHei", fontSize: 12, color: "#323333"}
                    },
                    plotLines: [{
                        id: "highPrice",
                        color: "rgba(255,255,255,1)",
                        dashStyle: "dash",
                        value: 0,
                        width: 1,
                        label: {
                            text: "最高",
                            align: "right",
                            x: y,
                            y: w,
                            textAlign: "left",
                            style: {color: "#e4393c", fontWeight: "bold", fontFamily: "Microsoft YaHei", fontSize: 12}
                        }
                    }, {
                        id: "lowPrice",
                        color: "#fff",
                        dashStyle: "dash",
                        value: 0,
                        width: 1,
                        label: {
                            text: "最低",
                            align: "right",
                            textAlign: "left",
                            x: y,
                            y: w,
                            style: {color: "#35bd67", fontWeight: "bold", fontFamily: "Microsoft YaHei", fontSize: 12}
                        }
                    }, {
                        id: "originPrice",
                        value: O,
                        width: 1,
                        color: "#888888",
                        zIndex: 1,
                        label: {
                            text: "原价:" + O,
                            align: "right",
                            textAlign: "left",
                            x: y,
                            y: w,
                            style: {color: "#888888", fontWeight: "bold", fontFamily: "Microsoft YaHei", fontSize: 12}
                        }
                    }]
                },
                legend: {
                    enabled: !0,
                    align: "right",
                    verticalAlign: "top",
                    layout: "verticle",
                    borderColor: "#f0f3f5",
                    borderWidth: 1,
                    width: 150,
                    x: -30,
                    y: 30,
                    symbolWidth: 10,
                    symbolHeight: 10,
                    itemMarginTop: 4,
                    itemStyle: {fontFamily: "Microsoft Yahei", fontSize: "12px", color: "#323233"}
                },
                plotOptions: {
                    series: {
                        turboThreshold: 0,
                        states: {hover: {enabled: !0, halo: {size: 0}}},
                        marker: {enabled: !1},
                        dataGrouping: {enabled: !1},
                        animation: !1,
                        events: {
                            legendItemClick: function (e) {
                                var n = this.chart.series;
                                n.forEach(function (t) {
                                    "max" !== t.name && "min" !== t.name || !t.remove || t.remove(!0)
                                });
                                var i = this.index, o = this.xAxis.min, r = this.xAxis.max;
                                "当前商城原始价格" === n[i].name && (D ? this.yAxis.removePlotLine("originPrice") : this.yAxis.addPlotLine(q), D = !D), n[i].visible ? n[i].hide() : n[i].show(), n.forEach(function (t, e) {
                                    t.visible && "评论数" !== t.name ? (L.add(t.name), t.update({marker: {symbol: j.extended}})) : (L.remove(t.name), t.update({marker: {symbol: j.folded}}))
                                });
                                var a = n.filter(function (t) {
                                    return t.visible && "max" !== t.name && "min" !== t.name
                                });
                                if (0 === a.length) return Z(this, J), !1;
                                var s = a[0].data;
                                if (s = s[s.length - 1], "plotAll" === P) {
                                    var l = a.map(function (t) {
                                        return t.options.pointStart
                                    }).filter(function (t) {
                                        return t
                                    }), c = Math.min.apply(null, l);
                                    this.xAxis.update({min: c, max: s ? s.x : t.getTime()})
                                }
                                if (1 === a.length && "当前商城原始价格" === a[0].name) {
                                    var p = this.yAxis.plotLinesAndBands.filter(function (t) {
                                        return "originPrice" === t.id
                                    });
                                    p = p[0].options, p.value = O, this.yAxis.removePlotLine("originPrice"), p.label.text = "原价:" + d(O), this.yAxis.addPlotLine(p), "undefined" === o || "undefined" === r ? this.xAxis.update({
                                        max: H,
                                        min: H - 30 * b
                                    }) : this.xAxis.update({min: o, max: r}), this.yAxis.update({min: O, max: O})
                                }
                                return "plotYear" === P && this.xAxis.update({min: H - 367 * b, max: H}), Z(this, J), !1
                            }
                        }
                    }, line: {
                        states: {hover: {enabled: !0, lineWidth: 1}}, events: {
                            mouseOut: function (t) {
                                c("#timeCursor").css({
                                    left: "-1000px",
                                    right: ""
                                }), c("#dashedLine").css({left: "-1000px"})
                            }
                        }
                    }
                },
                tooltip: {
                    shadow: !1,
                    shared: !0,
                    valueSuffix: "元",
                    hideDelay: 0,
                    shape: "square",
                    followPointer: !1,
                    dateTimeLabelFormats: {
                        day: "%Y/%m/%e",
                        minute: "%Y/%m/%e",
                        second: "%Y/%m/%e",
                        hour: "%Y/%m/%e %H:%M"
                    },
                    useHTML: !0,
                    positioner: function (t, e, n) {
                        return n.plotX + t > this.chart.plotWidth + 12 ? {
                            x: n.plotX - t + this.chart.plotLeft,
                            y: this.chart.plotHeight / 2 - e / 2 + 45
                        } : {x: n.plotX + this.chart.plotLeft, y: this.chart.plotHeight / 2 - e / 2 + 45}
                    },
                    onHide: function () {
                        c("#timeCursor").css({left: "-1000px", right: ""}), c("#dashedLine").css({left: "-1000px"})
                    },
                    formatter: function () {
                        var t = this, e = new Date(this.x - 288e5), n = e.getYear() + 1900;
                        (r.IE7 || r.IE8) && (n = e.getYear());
                        var i = e.getMonth() + 1, a = e.getDate(), s = e.getHours(),
                            l = n + "/" + i + "/" + a + (B ? " " + s + ":00" : ""),
                            p = '<table style="table-layout: fixed;"><tr><td colspan="3" style="text-align: center;font-weight: bold;font-family: Arial;font-size:14px">' + l + '</td><td></td><td calss="promoTd"></td></tr>',
                            u = this.points.sort(function (t, e) {
                                var n = X(e.series.name, e.y, (e.point.index + 1) / e.series.data.length, e.x - 288e5) - X(t.series.name, t.y, (t.point.index + 1) / t.series.data.length, e.x - 288e5);
                                return n
                            }).filter(function (t) {
                                return "max" === t.series.name || "min" === t.series.name ? !1 : !0
                            });
                        return 0 === u.length ? !1 : (c("#timeCursor").html(l), c("#timeCursor").css({
                            left: U.x + Q() + "px",
                            right: ""
                        }), U.x + 38 + Q() > $ && c("#timeCursor").css({left: U.x + Q() - parseInt(c("#timeCursor").css("width")) - 10 + "px"}), "-1000px" === c("#dashedLine").css("left") && this.points[0].point.index === this.points[0].series.data.length - 1 && (U.x -= 3), c("#dashedLine").css({left: U.x + Q() + "px"}), u.forEach(function (e, n) {
                            var i = e.point.series.name,
                                r = X(i, e.point.y, (e.point.index + 1) / e.point.series.data.length, e.point.x - 288e5),
                                a = o.numberFormat(r * x, 2);
                            r = o.numberFormat(r, 2), "." === r[r.length - 1] && (r += "00");
                            var s = ((t.x - 684e5) / 1e3).toString(), l = G && G[s] && G[s].msg || "";
                            l = "";
                            var c = f ? "(" + a + g + ")" : "", u = o.numberFormat(v, 2);
                            "." === u[u.length - 1] && (u += "00"), c = t.x === Y && f ? "(" + u + g + ")" : c, 0 !== e.series.index && (c = "");
                            var h = r + "元" + c;
                            f && (h = "" + g + r + "(&yen" + a + ")"), l && (h = h + "(原价: " + (G[s].ori_price / 100).toFixed(2) + ")"), "www.amazon.co.jp" == location.host && (r = r.replace(",", ""), r = d(parseFloat(r)), h = r + "日元(" + a + "人民币)"), "评论数" === i && (r = r.replace(".00", ""), h = r + "次"), p += '<tr><td style="width: 80px; text-align: left"><span style="color: ' + e.point.series.color + ';font-size:12px;font-family:arial;float:none">●</span>' + e.point.series.name + '</td>\n					<td style="text-align: right;width: 80px;">' + h + '</td><td class="promoTd">' + l + "</td></tr>"
                        }), p += "</table>")
                    },
                    backgroundColor: "rgba(255,255,255,0.8)",
                    borderColor: "#4d4d4d",
                    borderWidth: .3,
                    style: {padding: 0}
                },
                series: []
            };
            (r.IE7 || r.IE8) && (K.tooltip.style = {width: "400px"}), q = K.yAxis.plotLines.filter(function (t) {
                return "originPrice" === t.id
            })[0];
            var Q = function () {
                return -c("#biggraph").offset().left
            }, tt = function (t) {
                return t.length ? 1 === t.length ? t[0].all_line_begin_time : t.reduce(function (t, e) {
                    return "number" == typeof t ? Math.min(t, e.all_line_begin_time) : Math.min(t.all_line_begin_time, e.all_line_begin_time)
                }) : !1
            }, et = {plotAll: [], plotYear: [], plotMonth: [], plot5Day: [], plotSpecial: []}, nt = function (t) {
                K.xAxis.minTickInterval = t
            }, it = function (t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
                    n = t.filter(function (t) {
                        return e ? !0 : "当前商城原始价格" === t.name || "max" === t.name || "min" === t.name || "评论数" === t.name ? !1 : void 0 === t.visible ? !0 : t.visible
                    });
                return n = n.map(function (t) {
                    if ("number" == typeof t.data[0]) return {
                        max: Math.max.apply(null, t.data),
                        min: Math.min.apply(null, t.data)
                    };
                    var e = function () {
                        var e = t.data.map(function (t) {
                            return t.y
                        }), n = Math.max.apply(null, e), i = Math.min.apply(null, e), o = t.data.filter(function (t) {
                            return t.y === n
                        }), r = t.data.filter(function (t) {
                            return t.y === i
                        }), a = o.map(function (t) {
                            return t.x
                        }), s = r.map(function (t) {
                            return t.x
                        }), l = {max: n, min: i, maxStart: Math.max.apply(null, a), minStart: Math.max.apply(null, s)};
                        return {v: l}
                    }();
                    return "object" == typeof e ? e.v : void 0
                }), 0 === n.length ? !1 : 1 === n.length ? {
                    max: n[0].max,
                    min: n[0].min,
                    maxStart: n[0].maxStart,
                    minStart: n[0].minStart
                } : n.reduce(function (t, e) {
                    var n = t.max > e.max ? t.maxStart : e.maxStart, i = t.min < e.min ? t.minStart : e.minStart;
                    return t.max === e.max && (n = Math.max(t.maxStart, e.maxStart)), t.min === e.min && (i = Math.max(t.minStart, e.minStart)), {
                        max: Math.max(t.max, e.max),
                        min: Math.min(t.min, e.min),
                        maxStart: n,
                        minStart: i
                    }
                })
            }, ot = N(K.yAxis.plotLines), rt = function (t) {
                var e = m.deepCopy(t);
                if (!(e.yAxis instanceof Array && e.yAxis.length > 1)) {
                    var n = {
                        offset: 0,
                        align: "high",
                        gridLineColor: "#e6e9eb",
                        opposite: !0,
                        labels: {zIndex: 99999},
                        min: 0,
                        max: 100,
                        title: {
                            text: "评论(次)",
                            rotation: 0,
                            y: -20,
                            x: -3,
                            align: "high",
                            offset: 65,
                            style: {fontFamily: "Microsoft YaHei", fontSize: 12, color: "#323333"}
                        }
                    }, i = e.yAxis;
                    return e.yAxis = e.yAxis instanceof Array ? e.yAxis : [], 0 == e.yAxis.length && e.yAxis.push(i), e.yAxis.push(n), e
                }
            }, at = function (e, n, r, a) {
                void 0 === n && (n = !1);
                var s = e;
                z = n, "center" === e && (e = "plotAll"), "plotSpecial" === s && (J = !0), r.series = et[e], "plotSpecial" === e && (e = "plotAll"), c(".floatButtons>a").removeClass("activePlot"), c(".floatButtons>#" + e).addClass("activePlot"), r.title.text = c("#" + e).text();
                var l = et[s], p = it(l, !0);
                if (p && st(p.max, p.min, r), "plot5Day" === e ? (r.title.text = "近五天价格走势", nt(b), B = !0, W = "short_day_line") : B = !1, "plotMonth" === e && (r.title.text = "近一月价格走势", nt(5 * b), W = "month_line"), "plotAll" === e) {
                    r.title.text = "全部价格走势", "plotSpecial" === s && (r.title.text = "全部价格&评论走势", r.title.style.fontWeight = "normal", r.chart.marginTop = 70, r.chart.marginBottom = 40, r.chart.marginRight = 80), a && !C && (r.title.text = "全部价格走势");
                    var u = Math.max.apply(null, l.map(function (t) {
                        return t.data.length
                    }));
                    nt(u > 30 ? 30 * b : u > 5 ? 5 * b : b), W = "all_line", (R[0].all_equal_short || R[0].all_line.length < 5 && 1 == R.length) && (W = "short_day_line", B = !0, R[0].all_line.length < 5 && 1 == R.length && (r.series[0].pointStart = t.getTime() + 288e5 - (R[0].all_line.length - 1) * b));
                }
                "plotYear" === e && (r.title.text = "近一年价格走势", nt(30 * b), W = "year_line", r.chart.marginBottom = 55), n || (P = e), "plotSpecial" === s && (r = rt(r), r.series[1].yAxis = 1, r.series[0].yAxis = 0);
                var h = r.yAxis instanceof Array ? r.yAxis[0] : r.yAxis;
                J || (h.plotLines[2].value = O, h.plotLines[2].label.text = "原价:" + d(O)), i = new o.Chart(r)
            }, st = function (t, e, n) {
                if (!J) {
                    var i = n.yAxis instanceof Array ? n.yAxis[0] : n.yAxis;
                    i.plotLines = N(ot), i.plotLines instanceof Array || (i.plotLines = JSON.parse(i.plotLines)), i.plotLines[0].value = t, i.plotLines[1].value = e, i.plotLines[0].label.text = "最高:" + t + "元", i.plotLines[1].label.text = "最低:" + e + "元", i.min = Math.min(e, O)
                }
            }, lt = function (t) {
                c(".floatButtons>" + t).removeClass("bjd-hidden")
            }, ct = function () {
                c(".floatButtons").on("click", "a", function (t) {
                    at(t.target.id, !1, m.deepCopy(K))
                })
            }, dt = function () {
                var t = void 0, e = void 0;
                c("#gwd_wishlist_trend_detail_btn").on("click", "span", function (n) {
                    var i = c(n.target).attr("data-id");
                    if ("plotSpecial" === i) {
                        if (c(".trend-max-min-price").addClass("reviewT"), e || (e = !0, u.log("review-trend-click"), h("review-trend-click")), C) return;
                        if (A) return void(t ? (A.show(), t = !1, c("span.review-trend-sp").addClass("msclick")) : (A.hide(), t = !0, c("span.review-trend-sp").removeClass("msclick")));
                        t = !1, T = !0, c("span.review-trend-sp").addClass("msclick")
                    } else A = null, T = !1, c(".trend-max-min-price").removeClass("reviewT"), c("span.review-trend-sp").removeClass("msclick");
                    at(i, !1, m.deepCopy(K), !0)
                })
            }, pt = function (t) {
                return {y: t, marker: {enabled: !1}}
            };
            return e = {
                init: function (t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? "dpPage" : arguments[1],
                        n = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
                        o = arguments.length <= 3 || void 0 === arguments[3] ? !1 : arguments[3],
                        d = K.yAxis instanceof Array ? K.yAxis[0] : K.yAxis;
                    if (o || (o = {
                            top: !0,
                            bottom: !0,
                            middle: !0,
                            baidu: !0
                        }), !t.store || !t.store[0] || 0 !== t.store[0].all_line.length) {
                        c("body").append('<div id="biggraph" style="position: absolute;left: -1000000px; top: -100000px;background: white;overflow: hidden"></div>'), c("#biggraph").append(p.compile(a)({
                            extBrand: r.extBrand,
                            s_server: r.s_server
                        }));
                        var y = "";
                        ct(), n && c(n).append(c("#biggraph")), c("#" + r.extName + "-trend").hover(function () {
                            if (K.yAxis.title.text = "人民币:", J = o.top, c(window).width() < 1200 && (K.title.x = -150), K.legend.enabled = !0, J ? K.chart.marginRight = 200 : K.chart.marginRight = 305, K.chart.marginBottom = 55, c("#biggraph").css({
                                    left: 0,
                                    top: 0,
                                    bottom: 0,
                                    right: 0
                                }), "trend" !== y) {
                                var t = c("#" + r.extName + "-pri-trend-chart");
                                t.append(c("#biggraph")), y = "trend", c(".floatButtons").show(), c("#bjd-qrcode-trend").show(), c("#bjd-qrcode-trend").length && E(), c("#biggraph").css({visibility: "hidden"}), window.setTimeout(function () {
                                    at(P, !1, m.deepCopy(K));
                                    var t = c("#" + r.extName + "-pri-trend-chart").width();
                                    i.setSize(t + 20, 250), $ = i.plotWidth, i.axes[0].update(K.xAxis), c("#biggraph").css({visibility: "visible"})
                                }, 0)
                            }
                        });
                        var w = function (e) {
                            c(".trend-max-min-price .t-max-pri").text("最高:" + (t.store[0].highest || t.store[0].price_range.split("-")[1])), c(".trend-max-min-price .t-min-pri").text("最低:" + (t.store[0].lowest || t.store[0].price_range.split("-")[0])), J = o.middle, J = !0, K.title.x = 0, K.legend.enabled = !1, K.chart.marginRight = 40, K.chart.marginTop = 60, K.chart.marginBottom = 68, K.yAxis.title.text = "价格(元)", K.xAxis.labels.y = 25, K.title.style.fontWeight = "normal", c(".floatButtons").hide(), c("#bjd-qrcode-trend").hide(), c("#detailPromotion").css({zIndex: 0}), c("#biggraph").css({
                                left: 0,
                                top: 0,
                                bottom: 0,
                                right: 0
                            }), "btn" !== y && (c(e).append(c("#biggraph")), dt(), y = "btn", c("#biggraph").css({visibility: "hidden"}), window.setTimeout(function () {
                                D = !1, O = 0, at(T ? "plotSpecial" : "plotAll", !1, m.deepCopy(K), !0), c("#biggraph").css({visibility: "visible"})
                            }, 0))
                        };
                        c("#" + r.extBrand + "_price_history_btn").hover(function () {
                            w("#" + r.extBrand + "_wishlist_trend_detail_chart")
                        }), c("#" + r.extBrand + "_wishlist_trend_detail").mouseleave(function () {
                            c("#detailPromotion").css({zIndex: 15})
                        }), c("#" + r.extBrand + "-trend").hover(function () {
                            J = o.bottom, K.yAxis.title.text = "人民币:", y !== "" + r.extBrand && (K.legend.enabled = !0, J ? K.chart.marginRight = 200 : K.chart.marginRight = 305, c("#biggraph").css({
                                left: 0,
                                top: 0,
                                bottom: 0,
                                right: 0
                            }), c("#" + r.extBrand + "-trend-chart").append(c("#biggraph")), y = "" + r.extBrand, c("#biggraph").css({visibility: "hidden"}), window.setTimeout(function () {
                                at(P, !1, m.deepCopy(K)), i.reflow(), c("#biggraph").css({visibility: "visible"}), c("#" + r.extBrand + "-trend-chart").show()
                            }, 0), c(".floatButtons").show(), c("#bjd-qrcode-trend").show(), c("#bjd-qrcode-trend").length && E(), c("#bjd-qrcode-trend").css("bottom", "9px"))
                        }), c(".bdext-trend").on("mouseenter", function () {
                            return J = o.baidu, "bdtrend" === y ? void c("#bdext_maintrend_detail").show() : (K.legend.enabled = !0, K.chart.marginRight = 305, c("#biggraph").css({
                                left: 0,
                                top: 0,
                                bottom: 0,
                                right: 0
                            }), c("#bdext_maintrend_detail").append(c("#biggraph")), y = "bdtrend", c("#biggraph").css({visibility: "hidden"}), window.setTimeout(function () {
                                at(P, !1, m.deepCopy(K)), i.reflow(), c("#biggraph").css({visibility: "visible"})
                            }, 0), c("#bdext_maintrend_detail").show(), void c(".floatButtons").show())
                        }), c(".bdext-mini-trend").on("mouseenter", function () {
                            w("#bdext_mini_trendbox"), c("#bdext_minitrend_detail").show()
                        }), c("#plotArea").css({maxWidth: document.body.clientWidth - 280 + "px"}), c("#plotArea").mousemove(function (t) {
                            U.x = t.pageX, U.y = t.pageY
                        }), c("#plotArea").click(function () {
                            return !1
                        }), c("#timeCursor").css({left: "-1000px"}), t && !function () {
                            R = t.store, t.review_trend && t.review_trend.review_trend && t.review_trend.review_trend.list.length > 1 ? R.push({
                                name: "评论数",
                                all_line_begin_time: new Date(t.review_trend.review_trend.startTime).getTime(),
                                all_line: t.review_trend.review_trend.list
                            }) : (C = !0, c("#gwd_wishlist_trend_detail_btn").addClass("no-review")), F = t, G = t.promoInfo;
                            var n = Math.min(t.store[0] && t.store[0].all_line_begin_time, tt(R)), i = t.now_day;
                            H = t.now_day;
                            var o = [{
                                plot: "plotAll",
                                start: "all_line_begin_time",
                                minDay: .1,
                                data: "all_line"
                            }, {
                                plot: "plot5Day",
                                start: "short_day_line_begin_time",
                                minDay: 5,
                                data: "short_day_line"
                            }, {
                                plot: "plotMonth",
                                start: "month_line_time",
                                minDay: 30,
                                data: "month_line"
                            }, {
                                plot: "plotYear",
                                start: "year_line_time",
                                minDay: 365,
                                data: "year_line"
                            }, {plot: "plotSpecial", start: "all_line_begin_time", minDay: .1, data: "all_line"}];
                            if (lt("#plotAll"), -1 === R[0].name.indexOf("(当前)") && (R[0].name += "(当前)"), R[0].currency || "www.amazon.com" === location.host || "www.aliexpress.com" === location.host) {
                                var a = {USD: "$", EUR: "EUR", JPY: "日元", CAD: "CDN$", GBP: "£"},
                                    p = {USD: "美元", EUR: "欧元", JPY: "日元", CAD: "加元", GBP: "英镑"};
                                R[0].currency || (R[0].currency = "USD"), v = s.getPriceBeforeExchangeRate(r.dp.oldPrice), g = a[R[0].currency], d.title.text = p[R[0].currency] + "：", K.chart.marginRight = 390, f = !0;
                                var y = function (t) {
                                    return s(t, R[0].currency)
                                };
                                x = y(1e6) / 1e6, O /= x;
                                var w = function (t) {
                                    return t && (t = t.map(function (t) {
                                        return t / x
                                    })), t
                                };
                                if (R.length > 1) for (var _ = 1; _ < R.length; _++) "亚马逊" === R[_].name && (R[_].name = "亚马逊中国"), R[_].all_line = w(R[_].all_line), R[_].short_day_line = w(R[_].short_day_line), R[_].month_line = w(R[_].month_line), R[_].year_line = w(R[_].year_line);
                                try {
                                    var k = ["all_line", "short_day_line", "month_line", "year_line"];
                                    k.forEach(function (t) {
                                    })
                                } catch (S) {
                                }
                            }
                            var T = 18;
                            "zhidemai" === e && (T = 1), "priceHistory" === e && (T = 20);
                            for (var A = !1, _ = 0; _ < Math.min(R.length, T); _++) (i - R[_].all_line_begin_time > 5 * b || !R[_].all_equal_short) && (A = !0);
                            1 !== R.length || R[1] && "评论数" === R[1].name ? c("#bjd-qrcode-trend").remove() : (u.log("trend-qrcode-show"), h("trend-qrcode-show"));
                            for (var P = parseInt((i - n) / b), _ = 0; _ < Math.min(R.length, T); _++) if (0 !== R[_].all_line.length) {
                                if (R[_].all_equal_short && 1 !== R.length) {
                                    R[_].all_line = [];
                                    for (var z = 0; z < R[_].short_day_line.length; z += 24) R[_].all_line.push(R[_].short_day_line[z]);
                                    R[_].all_line_begin_time = t.now_day - 5 * b, R[_].all_equal_short = !1
                                }
                                for (var E = 0; E < o.length; E++) {
                                    var z = o[E];
                                    if (l(i) - l(n) >= z.minDay * b || "plot5Day" === z.plot && A) {
                                        if (!R[_][z.data]) continue;
                                        if ("plot5Day" === z.plot && !A) continue;
                                        if ("plotSpecial" !== z.plot && "评论数" === R[_].name) continue;
                                        if ("plotSpecial" === z.plot && _ > 0 && "评论数" !== R[_].name) continue;
                                        "short_day_line_begin_time" !== z.start && (R[_][z.start] = l(R[_][z.start])), R[_].all_equal_short && "all_line_begin_time" === z.start && (R[_][z.start] = R[_].short_day_line_begin_time), lt("#" + z.plot);
                                        var I = {
                                            color: M(R[_].name),
                                            name: R[_].name,
                                            pointStart: R[_][z.start],
                                            pointInterval: b,
                                            legendIndex: 1,
                                            lineWidth: 1,
                                            zIndex: 500,
                                            marker: {symbol: j.extended, states: {hover: {enabled: !1}}},
                                            states: {hover: {enabled: !1, halo: {size: 0}}},
                                            data: R[_][z.data]
                                        };
                                        if ("plot5Day" === z.plot && (I.pointInterval = 36e5, I.pointInterval * I.data.length + I.pointStart > H && (H = I.pointInterval * I.data.length + I.pointStart)), "plotAll" === z.plot && I.data.length < 30 && (I.pointInterval = b, nt(b)), "plotAll" === z.plot && R[_].all_equal_short) if (0 === _) I.pointInterval = 36e5; else {
                                            var D = new Date(I.pointStart),
                                                B = new Date(D.getYear() + 1900, D.getMonth(), D.getDate(), 8);
                                            I.pointStart = B.getTime(), I.pointInterval = b;
                                            for (var q = [], W = 0; W < I.data.length; W += 24) q.push(I.data[W]);
                                            I.data = q
                                        }
                                        for (; I.data && I.data.length < 100 && "plotAll" !== z.plot;) {
                                            for (var $ = [], X = 0; X < I.data.length && ($.push(I.data[X]), X + 1 !== I.data.length); X++) $.push((I.data[X + 1] + I.data[X]) / 2);
                                            I.data = $, I.pointInterval = I.pointInterval / 2
                                        }
                                        I.data = I.data ? I.data.map(pt) : null, null != I.data && et[z.plot].push(I)
                                    }
                                }
                            }
                            if (1 === et.plotAll.length) {
                                var Y = et.plotAll[0];
                                for (Y.data = Y.data.map(function (t) {
                                    return t.y
                                }); Y.data.length < 100;) {
                                    for (var $ = [], E = 0; E < Y.data.length && ($.push(Y.data[E]), E + 1 !== Y.data.length); E++) $.push((Y.data[E + 1] + Y.data[E]) / 2);
                                    Y.data = $, Y.pointInterval = Y.pointInterval / 2
                                }
                                Y.data = Y.data.map(function (t) {
                                    return {y: t, marker: {enabled: !1}}
                                })
                            }
                            R[0].all_equal_short ? (P++, c("#plotAll").html("全部(" + P + "天)")) : c("#plotAll").html("全部" + R[0].all_line.length + "天"), O && "zhidemai" !== e && L.add("当前商城原始价格"), L.add(R[0].name);
                            var U = function (t, e) {
                                var n = e.map(function (t) {
                                    return t.name
                                });
                                return t.map(function (t) {
                                    if (-1 === n.indexOf(t.name)) return t;
                                    var i = e.filter(function (e) {
                                        return e.name === t.name
                                    })[0], o = N(t);
                                    return o.data = i.data, o.pointStart = i.pointStart, o.pointInterval = i.pointInterval, o
                                })
                            }, V = function (t) {
                                var e = t.map(function (t) {
                                    return t.pointInterval
                                }), n = Math.min.apply(null, e);
                                t.forEach(function (t) {
                                    for (; t.pointInterval > n;) {
                                        for (var e = [], i = 0; i < t.data.length && (e.push(t.data[i]), i + 1 !== t.data.length); i++) {
                                            var o = {marker: t.data[i].marker, y: (t.data[i + 1].y + t.data[i].y) / 2};
                                            e.push(o)
                                        }
                                        t.pointInterval = t.pointInterval / 2, t.data = e
                                    }
                                })
                            };
                            ["plotMonth", "plotYear"].forEach(function (t) {
                                if (!c("#" + t).hasClass("bjd-hidden")) {
                                    var e = et.plotAll, n = et[t], i = U(e, n);
                                    et[t] = i, V(et[t])
                                }
                            }), V(et.plotAll), V(et.plotSpecial), at("plotAll", !1, m.deepCopy(K))
                        }(), (r.IE7 || r.IE8 || r.IE9 || r.IE10 || r.IE11) && (c("#gwd_wishlist_trend_detail_chart").css({width: "460px"}), c("#gwd_wishlist_trend_detail").css({width: "569px"})), !r.IE9 && !r.IE10 || "vip" !== r.site && "vipshop" !== r.site || c("#gwd_wishlist_trend_detail_chart").css({width: "390px"})
                    }
                }
            }
        }.call(e, n, e, t), !(void 0 !== i && (t.exports = i))
    }).call(e, n(42), n(1))
}, function (t, e, n) {
    var i;
    !function () {
        function o(t, e) {
            var n;
            t || (t = {});
            for (n in e) t[n] = e[n];
            return t
        }

        function r() {
            var t, e, n = arguments, i = {}, o = function (t, e) {
                var n, i;
                "object" != typeof t && (t = {});
                for (i in e) e.hasOwnProperty(i) && (n = e[i], n && "object" == typeof n && "[object Array]" !== Object.prototype.toString.call(n) && "renderTo" !== i && "number" != typeof n.nodeType ? t[i] = o(t[i] || {}, n) : t[i] = e[i]);
                return t
            };
            for (n[0] === !0 && (i = n[1], n = Array.prototype.slice.call(n, 2)), e = n.length, t = 0; e > t; t++) i = o(i, n[t]);
            return i
        }

        function a(t, e) {
            return parseInt(t, e || 10)
        }

        function s(t) {
            return "string" == typeof t
        }

        function l(t) {
            return t && "object" == typeof t
        }

        function c(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }

        function d(t) {
            return "number" == typeof t
        }

        function p(t) {
            return xt.log(t) / xt.LN10
        }

        function u(t) {
            return xt.pow(10, t)
        }

        function h(t, e) {
            for (var n = t.length; n--;) if (t[n] === e) {
                t.splice(n, 1);
                break
            }
        }

        function m(t) {
            return t !== W && null !== t
        }

        function f(t, e, n) {
            var i, o;
            if (s(e)) m(n) ? t.setAttribute(e, n) : t && t.getAttribute && (o = t.getAttribute(e)); else if (m(e) && l(e)) for (i in e) t.setAttribute(i, e[i]);
            return o
        }

        function g(t) {
            return c(t) ? t : [t]
        }

        function x() {
            var t, e, n = arguments, i = n.length;
            for (t = 0; i > t; t++) if (e = n[t], e !== W && null !== e) return e
        }

        function v(t, e) {
            zt && !Dt && e && e.opacity !== W && (e.filter = "alpha(opacity=" + 100 * e.opacity + ")"), o(t.style, e)
        }

        function b(t, e, n, i, r) {
            var a = ft.createElement(t);
            return e && o(a, e), r && v(a, {padding: 0, border: Qt, margin: 0}), n && v(a, n), i && i.appendChild(a), a
        }

        function y(t, e) {
            var n = function () {
                return W
            };
            return n.prototype = new t, o(n.prototype, e), n
        }

        function w(t, e, n, i) {
            var o = le.numberFormat, r = G.lang, s = +t || 0,
                l = -1 === e ? (s.toString().split(".")[1] || "").length : isNaN(e = kt(e)) ? 2 : e,
                c = void 0 === n ? r.decimalPoint : n, d = void 0 === i ? r.thousandsSep : i, p = 0 > s ? "-" : "",
                u = String(a(s = kt(s).toFixed(l))), h = u.length > 3 ? u.length % 3 : 0;
            return o !== w ? o(t, e, n, i) : p + (h ? u.substr(0, h) + d : "") + u.substr(h).replace(/(\d{3})(?=\d)/g, "$1" + d) + (l ? c + kt(s - u).toFixed(l).slice(2) : "")
        }

        function _(t, e) {
            return new Array((e || 2) + 1 - String(t).length).join(0) + t
        }

        function k(t, e, n) {
            var i = t[e];
            t[e] = function () {
                var t = Array.prototype.slice.call(arguments);
                return t.unshift(i), n.apply(this, t)
            }
        }

        function S(t, e) {
            var n, i = /f$/, o = /\.([0-9])/, r = G.lang;
            return i.test(t) ? (n = t.match(o), n = n ? n[1] : -1, null !== e && (e = w(e, n, r.decimalPoint, t.indexOf(",") > -1 ? r.thousandsSep : ""))) : e = U(t, e), e
        }

        function T(t, e) {
            for (var n, i, o, r, a, s, l, c = "{", d = !1, p = []; -1 !== (l = t.indexOf(c));) {
                if (n = t.slice(0, l), d) {
                    for (i = n.split(":"), o = i.shift().split("."), a = o.length, s = e, r = 0; a > r; r++) s = s[o[r]];
                    i.length && (s = S(i.join(":"), s)), p.push(s)
                } else p.push(n);
                t = t.slice(l + 1), d = !d, c = d ? "}" : "{"
            }
            return p.push(t), p.join("")
        }

        function C(t) {
            return xt.pow(10, bt(xt.log(t) / xt.LN10))
        }

        function A(t, e, n, i) {
            var o, r;
            for (n = x(n, 1), o = t / n, e || (e = [1, 2, 2.5, 5, 10], i === !1 && (1 === n ? e = [1, 2, 5, 10] : .1 >= n && (e = [1 / n]))), r = 0; r < e.length && (t = e[r], !(o <= (e[r] + (e[r + 1] || e[r])) / 2)); r++) ;
            return t *= n
        }

        function j(t, e) {
            var n, i, o = t.length;
            for (i = 0; o > i; i++) t[i].ss_i = i;
            for (t.sort(function (t, i) {
                return n = e(t, i), 0 === n ? t.ss_i - i.ss_i : n
            }), i = 0; o > i; i++) delete t[i].ss_i
        }

        function P(t) {
            for (var e = t.length, n = t[0]; e--;) t[e] < n && (n = t[e]);
            return n
        }

        function z(t) {
            for (var e = t.length, n = t[0]; e--;) t[e] > n && (n = t[e]);
            return n
        }

        function L(t, e) {
            var n;
            for (n in t) t[n] && t[n] !== e && t[n].destroy && t[n].destroy(), delete t[n]
        }

        function M(t) {
            Y || (Y = b(Yt)), t && Y.appendChild(t), Y.innerHTML = ""
        }

        function E(t) {
            return parseFloat(t.toPrecision(14))
        }

        function I(t, e) {
            V = x(t, e.animation)
        }

        function N() {
            var t = G.global.useUTC, e = t ? "getUTC" : "get", n = t ? "setUTC" : "set";
            tt = G.global.Date || window.Date, nt = 6e4 * (t && G.global.timezoneOffset || 0), et = t ? tt.UTC : function (t, e, n, i, o, r) {
                return new tt(t, e, x(n, 1), x(i, 0), x(o, 0), x(r, 0)).getTime()
            }, it = e + "Minutes", ot = e + "Hours", rt = e + "Day", at = e + "Date", st = e + "Month", lt = e + "FullYear", ct = n + "Minutes", dt = n + "Hours", pt = n + "Date", ut = n + "Month", ht = n + "FullYear"
        }

        function D(t) {
            return G = r(!0, G, t), N(), G
        }

        function O() {
            return G
        }

        function B() {
        }

        function R(t, e, n, i) {
            this.axis = t, this.pos = e, this.type = n || "", this.isNew = !0, n || i || this.addLabel()
        }

        function q() {
            this.init.apply(this, arguments)
        }

        function H() {
            this.init.apply(this, arguments)
        }

        function F(t, e, n, i, o) {
            var r = t.chart.inverted;
            this.axis = t, this.isNegative = n, this.options = e, this.x = i, this.total = null, this.points = {}, this.stack = o, this.alignOptions = {
                align: e.align || (r ? n ? "left" : "right" : "center"),
                verticalAlign: e.verticalAlign || (r ? "middle" : n ? "bottom" : "top"),
                y: x(e.y, r ? 4 : n ? 14 : -6),
                x: x(e.x, r ? n ? -6 : 6 : 0)
            }, this.textAlign = e.textAlign || (r ? n ? "right" : "left" : "center")
        }

        var W, $, X, Y, G, U, V, J, Z, K, Q, tt, et, nt, it, ot, rt, at, st, lt, ct, dt, pt, ut, ht, mt = n(4),
            ft = document, gt = window, xt = Math, vt = xt.round, bt = xt.floor, yt = xt.ceil, wt = xt.max, _t = xt.min,
            kt = xt.abs, St = xt.cos, Tt = xt.sin, Ct = xt.PI, At = 2 * Ct / 360, jt = navigator.userAgent,
            Pt = gt.opera, zt = /msie/i.test(jt) && !Pt, Lt = 8 === ft.documentMode, Mt = /AppleWebKit/.test(jt),
            Et = /Firefox/.test(jt), It = /(Mobile|Android|Windows Phone)/.test(jt), Nt = "http://www.w3.org/2000/svg",
            Dt = !!ft.createElementNS && !!ft.createElementNS(Nt, "svg").createSVGRect,
            Ot = Et && parseInt(jt.split("Firefox/")[1], 10) < 4,
            Bt = !Dt && !zt && !!ft.createElement("canvas").getContext, Rt = {}, qt = 0, Ht = function () {
                return W
            }, Ft = [], Wt = 0, $t = "Highcharts", Xt = "4.0.4", Yt = "div", Gt = "absolute", Ut = "relative",
            Vt = "hidden", Jt = "highcharts-", Zt = "visible", Kt = "px", Qt = "none", te = "M", ee = "L",
            ne = /^[0-9]+$/, ie = "", oe = "hover", re = "select", ae = "stroke-width", se = {}, le = {};
        i = function () {
            return le
        }.call(e, n, e, t), !(void 0 !== i && (t.exports = i)), U = function (t, e, n) {
            if (!m(e) || isNaN(e)) return "Invalid date";
            t = x(t, "%Y-%m-%d %H:%M:%S");
            var i, r = new tt(e - nt), a = r[ot](), s = r[rt](), l = r[at](), c = r[st](), d = r[lt](), p = G.lang,
                u = p.weekdays, h = o({
                    a: u[s].substr(0, 3),
                    A: u[s],
                    d: _(l),
                    e: l,
                    b: p.shortMonths[c],
                    B: p.months[c],
                    m: _(c + 1),
                    y: d.toString().substr(2, 2),
                    Y: d,
                    H: _(a),
                    I: _(a % 12 || 12),
                    l: a % 12 || 12,
                    M: _(r[it]()),
                    p: 12 > a ? "AM" : "PM",
                    P: 12 > a ? "am" : "pm",
                    S: _(r.getSeconds()),
                    L: _(vt(e % 1e3), 3)
                }, le.dateFormats);
            for (i in h) for (; -1 !== t.indexOf("%" + i);) t = t.replace("%" + i, "function" == typeof h[i] ? h[i](e) : h[i]);
            return n ? t.substr(0, 1).toUpperCase() + t.substr(1) : t
        }, K = function (t, e) {
            var n = "Highcharts error #" + t + ": www.highcharts.com/errors/" + t;
            if (e) throw n;
            gt.console && console.log(n)
        }, Z = {
            millisecond: 1,
            second: 1e3,
            minute: 6e4,
            hour: 36e5,
            day: 864e5,
            week: 6048e5,
            month: 26784e5,
            year: 31556952e3
        }, J = {
            init: function (t, e, n) {
                e = e || "";
                var i, o, r, a, s, l = t.shift, c = e.indexOf("C") > -1, d = c ? 7 : 3, p = e.split(" "),
                    u = [].concat(n), h = function (t) {
                        for (r = t.length; r--;) t[r] === te && t.splice(r + 1, 0, t[r + 1], t[r + 2], t[r + 1], t[r + 2])
                    };
                if (c && (h(p), h(u)), t.isArea && (a = p.splice(p.length - 6, 6), s = u.splice(u.length - 6, 6)), l <= u.length / d && p.length === u.length) for (; l--;) u = [].concat(u).splice(0, d).concat(u);
                if (t.shift = 0, p.length) for (i = u.length; p.length < i;) o = [].concat(p).splice(p.length - d, d), c && (o[d - 6] = o[d - 2], o[d - 5] = o[d - 1]), p = p.concat(o);
                return a && (p = p.concat(a), u = u.concat(s)), [p, u]
            }, step: function (t, e, n, i) {
                var o, r = [], a = t.length;
                if (1 === n) r = i; else if (a === e.length && 1 > n) for (; a--;) o = parseFloat(t[a]), r[a] = isNaN(o) ? t[a] : n * parseFloat(e[a] - o) + o; else r = e;
                return r
            }
        }, function (t) {
            gt.HighchartsAdapter = gt.HighchartsAdapter || t && {
                init: function (e) {
                    var n = t.fx;
                    t.extend(t.easing, {
                        easeOutQuad: function (t, e, n, i, o) {
                            return -i * (e /= o) * (e - 2) + n
                        }
                    }), t.each(["cur", "_default", "width", "height", "opacity"], function (e, i) {
                        var o, r = n.step;
                        "cur" === i ? r = n.prototype : "_default" === i && t.Tween && (r = t.Tween.propHooks[i], i = "set"), o = r[i], o && (r[i] = function (t) {
                            var n;
                            return t = e ? t : this, "align" !== t.prop ? (n = t.elem, n.attr ? n.attr(t.prop, "cur" === i ? W : t.now) : o.apply(this, arguments)) : void 0
                        })
                    }), k(t.cssHooks.opacity, "get", function (t, e, n) {
                        return e.attr ? e.opacity || 0 : t.call(this, e, n)
                    }), this.addAnimSetter("d", function (t) {
                        var n, i = t.elem;
                        t.started || (n = e.init(i, i.d, i.toD), t.start = n[0], t.end = n[1], t.started = !0), i.attr("d", e.step(t.start, t.end, t.pos, i.toD))
                    }), this.each = Array.prototype.forEach ? function (t, e) {
                        return Array.prototype.forEach.call(t, e)
                    } : function (t, e) {
                        var n, i = t.length;
                        for (n = 0; i > n; n++) if (e.call(t[n], t[n], n, t) === !1) return n
                    }, t.fn.highcharts = function () {
                        var t, e, n, i = "Chart", o = arguments;
                        return this[0] && (s(o[0]) && (i = o[0], o = Array.prototype.slice.call(o, 1)), t = o[0], t !== W && (t.chart = t.chart || {}, t.chart.renderTo = this[0], n = new le[i](t, o[1]), e = this), t === W && (e = Ft[f(this[0], "data-highcharts-chart")])), e
                    }
                }, addAnimSetter: function (e, n) {
                    t.Tween ? t.Tween.propHooks[e] = {set: n} : t.fx.step[e] = n
                }, getScript: t.getScript, inArray: t.inArray, adapterRun: function (e, n) {
                    return t(e)[n]()
                }, grep: t.grep, map: function (t, e) {
                    for (var n = [], i = 0, o = t.length; o > i; i++) n[i] = e.call(t[i], t[i], i, t);
                    return n
                }, offset: function (e) {
                    return t(e).offset()
                }, addEvent: function (e, n, i) {
                    t(e).bind(n, i)
                }, removeEvent: function (e, n, i) {
                    var o = ft.removeEventListener ? "removeEventListener" : "detachEvent";
                    ft[o] && e && !e[o] && (e[o] = function () {
                    }), t(e).unbind(n, i)
                }, fireEvent: function (e, n, i, r) {
                    var a, s = t.Event(n), l = "detached" + n;
                    !zt && i && (delete i.layerX, delete i.layerY, delete i.returnValue), o(s, i), e[n] && (e[l] = e[n], e[n] = null), t.each(["preventDefault", "stopPropagation"], function (t, e) {
                        var n = s[e];
                        s[e] = function () {
                            try {
                                n.call(s)
                            } catch (t) {
                                "preventDefault" === e && (a = !0)
                            }
                        }
                    }), t(e).trigger(s), e[l] && (e[n] = e[l], e[l] = null), !r || s.isDefaultPrevented() || a || r(s)
                }, washMouseEvent: function (t) {
                    var e = t.originalEvent || t;
                    return e.pageX === W && (e.pageX = t.pageX, e.pageY = t.pageY), e
                }, animate: function (e, n, i) {
                    var o = t(e);
                    e.style || (e.style = {}), n.d && (e.toD = n.d, n.d = 1), o.stop(), n.opacity !== W && e.attr && (n.opacity += "px"), e.hasAnim = 1, o.animate(n, i)
                }, stop: function (e) {
                    e.hasAnim && t(e).stop()
                }
            }
        }(mt);
        var ce = gt.HighchartsAdapter, de = ce || {};
        ce && ce.init.call(ce, J);
        var pe = de.adapterRun, ue = de.getScript, he = de.inArray, me = de.each, fe = de.grep, ge = de.offset,
            xe = de.map, ve = de.addEvent, be = de.removeEvent, ye = de.fireEvent, we = de.washMouseEvent,
            _e = de.animate, ke = de.stop,
            Se = {enabled: !0, x: 0, y: 15, style: {color: "#606060", cursor: "default", fontSize: "11px"}};
        G = {
            colors: ["#7cb5ec", "#434348", "#90ed7d", "#f7a35c", "#8085e9", "#f15c80", "#e4d354", "#8085e8", "#8d4653", "#91e8e1"],
            symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
            lang: {
                loading: "Loading...",
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                decimalPoint: ".",
                numericSymbols: ["k", "M", "G", "T", "P", "E"],
                resetZoom: "Reset zoom",
                resetZoomTitle: "Reset zoom level 1:1",
                thousandsSep: ","
            },
            global: {
                useUTC: !0,
                canvasToolsURL: "http://code.highcharts.com/4.0.4/modules/canvas-tools.js",
                VMLRadialGradientURL: "http://code.highcharts.com/4.0.4/gfx/vml-radial-gradient.png"
            },
            chart: {
                borderColor: "#4572A7",
                borderRadius: 0,
                defaultSeriesType: "line",
                ignoreHiddenSeries: !0,
                spacing: [10, 10, 15, 10],
                backgroundColor: "#FFFFFF",
                plotBorderColor: "#C0C0C0",
                resetZoomButton: {theme: {zIndex: 20}, position: {align: "right", x: -10, y: 10}}
            },
            title: {text: "Chart title", align: "center", margin: 15, style: {color: "#333333", fontSize: "18px"}},
            subtitle: {text: "", align: "center", style: {color: "#555555"}},
            plotOptions: {
                line: {
                    allowPointSelect: !1,
                    showCheckbox: !1,
                    animation: {duration: 1e3},
                    events: {},
                    lineWidth: 2,
                    marker: {
                        lineWidth: 0,
                        radius: 4,
                        lineColor: "#FFFFFF",
                        states: {
                            hover: {enabled: !0, lineWidthPlus: 1, radiusPlus: 2},
                            select: {fillColor: "#FFFFFF", lineColor: "#000000", lineWidth: 2}
                        }
                    },
                    point: {events: {}},
                    dataLabels: r(Se, {
                        align: "center", enabled: !1, formatter: function () {
                            return null === this.y ? "" : w(this.y, -1)
                        }, verticalAlign: "bottom", y: 0
                    }),
                    cropThreshold: 300,
                    pointRange: 0,
                    states: {
                        hover: {lineWidthPlus: 1, marker: {}, halo: {size: 10, opacity: .25}},
                        select: {marker: {}}
                    },
                    stickyTracking: !0,
                    turboThreshold: 1e3
                }
            },
            labels: {style: {position: Gt, color: "#3E576F"}},
            legend: {
                enabled: !0,
                align: "center",
                layout: "horizontal",
                labelFormatter: function () {
                    return this.name
                },
                borderColor: "#909090",
                borderRadius: 0,
                navigation: {activeColor: "#274b6d", inactiveColor: "#CCC"},
                shadow: !1,
                itemStyle: {color: "#333333", fontSize: "12px", fontWeight: "bold"},
                itemHoverStyle: {color: "#000"},
                itemHiddenStyle: {color: "#CCC"},
                itemCheckboxStyle: {position: Gt, width: "13px", height: "13px"},
                symbolPadding: 5,
                verticalAlign: "bottom",
                x: 0,
                y: 0,
                title: {style: {fontWeight: "bold"}}
            },
            loading: {
                labelStyle: {fontWeight: "bold", position: Ut, top: "45%"},
                style: {position: Gt, backgroundColor: "white", opacity: .5, textAlign: "center"}
            },
            tooltip: {
                enabled: !0,
                animation: Dt,
                backgroundColor: "rgba(249, 249, 249, .85)",
                borderWidth: 1,
                borderRadius: 3,
                dateTimeLabelFormats: {
                    millisecond: "%A, %b %e, %H:%M:%S.%L",
                    second: "%A, %b %e, %H:%M:%S",
                    minute: "%A, %b %e, %H:%M",
                    hour: "%A, %b %e, %H:%M",
                    day: "%A, %b %e, %Y",
                    week: "Week from %A, %b %e, %Y",
                    month: "%B %Y",
                    year: "%Y"
                },
                headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
                pointFormat: '<span style="color:{series.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
                shadow: !0,
                snap: It ? 25 : 10,
                style: {color: "#333333", cursor: "default", fontSize: "12px", padding: "8px", whiteSpace: "nowrap"}
            },
            credits: {
                enabled: !0,
                text: "Highcharts.com",
                href: "http://www.highcharts.com",
                position: {align: "right", x: -10, verticalAlign: "bottom", y: -5},
                style: {cursor: "pointer", color: "#909090", fontSize: "9px"}
            }
        };
        var Te = G.plotOptions, Ce = Te.line;
        N();
        var Ae = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
            je = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
            Pe = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, ze = function (t) {
                function e(t) {
                    t && t.stops ? l = xe(t.stops, function (t) {
                        return ze(t[1])
                    }) : (s = Ae.exec(t), s ? c = [a(s[1]), a(s[2]), a(s[3]), parseFloat(s[4], 10)] : (s = je.exec(t), s ? c = [a(s[1], 16), a(s[2], 16), a(s[3], 16), 1] : (s = Pe.exec(t), s && (c = [a(s[1]), a(s[2]), a(s[3]), 1]))))
                }

                function n(e) {
                    var n;
                    return l ? (n = r(t), n.stops = [].concat(n.stops), me(l, function (t, i) {
                        n.stops[i] = [n.stops[i][0], t.get(e)]
                    })) : n = c && !isNaN(c[0]) ? "rgb" === e ? "rgb(" + c[0] + "," + c[1] + "," + c[2] + ")" : "a" === e ? c[3] : "rgba(" + c.join(",") + ")" : t, n
                }

                function i(t) {
                    if (l) me(l, function (e) {
                        e.brighten(t)
                    }); else if (d(t) && 0 !== t) {
                        var e;
                        for (e = 0; 3 > e; e++) c[e] += a(255 * t), c[e] < 0 && (c[e] = 0), c[e] > 255 && (c[e] = 255)
                    }
                    return this
                }

                function o(t) {
                    return c[3] = t, this
                }

                var s, l, c = [];
                return e(t), {get: n, brighten: i, rgba: c, setOpacity: o}
            };
        B.prototype = {
            opacity: 1,
            textProps: ["fontSize", "fontWeight", "fontFamily", "color", "lineHeight", "width", "textDecoration", "textShadow", "HcTextStroke"],
            init: function (t, e) {
                var n = this;
                n.element = "span" === e ? b(e) : ft.createElementNS(Nt, e), n.renderer = t
            },
            animate: function (t, e, n) {
                var i = x(e, V, !0);
                return ke(this), i ? (i = r(i, {}), n && (i.complete = n), _e(this, t, i)) : (this.attr(t), n && n()), this
            },
            colorGradient: function (t, e, n) {
                var i, o, a, s, l, d, p, u, h, f, g, x = this.renderer, v = [];
                if (t.linearGradient ? o = "linearGradient" : t.radialGradient && (o = "radialGradient"), o) {
                    a = t[o], s = x.gradients, d = t.stops, h = n.radialReference, c(a) && (t[o] = a = {
                        x1: a[0],
                        y1: a[1],
                        x2: a[2],
                        y2: a[3],
                        gradientUnits: "userSpaceOnUse"
                    }), "radialGradient" === o && h && !m(a.gradientUnits) && (a = r(a, {
                        cx: h[0] - h[2] / 2 + a.cx * h[2],
                        cy: h[1] - h[2] / 2 + a.cy * h[2],
                        r: a.r * h[2],
                        gradientUnits: "userSpaceOnUse"
                    }));
                    for (f in a) "id" !== f && v.push(f, a[f]);
                    for (f in d) v.push(d[f]);
                    v = v.join(","), s[v] ? g = s[v].attr("id") : (a.id = g = Jt + qt++, s[v] = l = x.createElement(o).attr(a).add(x.defs), l.stops = [], me(d, function (t) {
                        var e;
                        0 === t[1].indexOf("rgba") ? (i = ze(t[1]), p = i.get("rgb"), u = i.get("a")) : (p = t[1], u = 1), e = x.createElement("stop").attr({
                            offset: t[0],
                            "stop-color": p,
                            "stop-opacity": u
                        }).add(l), l.stops.push(e)
                    })), n.setAttribute(e, "url(" + x.url + "#" + g + ")")
                }
            },
            attr: function (t, e) {
                var n, i, o, r, a = this.element, s = this;
                if ("string" == typeof t && e !== W && (n = t, t = {}, t[n] = e), "string" == typeof t) s = (this[t + "Getter"] || this._defaultGetter).call(this, t, a); else {
                    for (n in t) i = t[n], r = !1, this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(n) && (o || (this.symbolAttr(t), o = !0), r = !0), !this.rotation || "x" !== n && "y" !== n || (this.doTransform = !0), r || (this[n + "Setter"] || this._defaultSetter).call(this, i, n, a), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(n) && this.updateShadows(n, i);
                    this.doTransform && (this.updateTransform(), this.doTransform = !1)
                }
                return s
            },
            updateShadows: function (t, e) {
                for (var n = this.shadows, i = n.length; i--;) n[i].setAttribute(t, "height" === t ? wt(e - (n[i].cutHeight || 0), 0) : "d" === t ? this.d : e)
            },
            addClass: function (t) {
                var e = this.element, n = f(e, "class") || "";
                return -1 === n.indexOf(t) && f(e, "class", n + " " + t), this
            },
            symbolAttr: function (t) {
                var e = this;
                me(["x", "y", "r", "start", "end", "width", "height", "innerR", "anchorX", "anchorY"], function (n) {
                    e[n] = x(t[n], e[n])
                }), e.attr({d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e)})
            },
            clip: function (t) {
                return this.attr("clip-path", t ? "url(" + this.renderer.url + "#" + t.id + ")" : Qt)
            },
            crisp: function (t) {
                var e, n, i = this, o = {}, r = t.strokeWidth || i.strokeWidth || 0;
                n = vt(r) % 2 / 2, t.x = bt(t.x || i.x || 0) + n, t.y = bt(t.y || i.y || 0) + n, t.width = bt((t.width || i.width || 0) - 2 * n), t.height = bt((t.height || i.height || 0) - 2 * n), t.strokeWidth = r;
                for (e in t) i[e] !== t[e] && (i[e] = o[e] = t[e]);
                return o
            },
            css: function (t) {
                var e, n, i, r = this, s = r.styles, l = {}, c = r.element, d = "", p = !s;
                if (t && t.color && (t.fill = t.color), s) for (n in t) t[n] !== s[n] && (l[n] = t[n], p = !0);
                if (p) {
                    if (e = r.textWidth = t && t.width && "text" === c.nodeName.toLowerCase() && a(t.width), s && (t = o(s, l)), r.styles = t, e && (Bt || !Dt && r.renderer.forExport) && delete t.width, zt && !Dt) v(r.element, t); else {
                        i = function (t, e) {
                            return "-" + e.toLowerCase()
                        };
                        for (n in t) d += n.replace(/([A-Z])/g, i) + ":" + t[n] + ";";
                        f(c, "style", d)
                    }
                    e && r.added && r.renderer.buildText(r)
                }
                return r
            },
            on: function (t, e) {
                var n = this, i = n.element;
                return X && "click" === t ? (i.ontouchstart = function (t) {
                    n.touchEventFired = tt.now(), t.preventDefault(), e.call(i, t)
                }, i.onclick = function (t) {
                    (-1 === jt.indexOf("Android") || tt.now() - (n.touchEventFired || 0) > 1100) && e.call(i, t)
                }) : i["on" + t] = e, this
            },
            setRadialReference: function (t) {
                return this.element.radialReference = t, this
            },
            translate: function (t, e) {
                return this.attr({translateX: t, translateY: e})
            },
            invert: function () {
                var t = this;
                return t.inverted = !0, t.updateTransform(), t
            },
            updateTransform: function () {
                var t, e = this, n = e.translateX || 0, i = e.translateY || 0, o = e.scaleX, r = e.scaleY,
                    a = e.inverted, s = e.rotation, l = e.element;
                a && (n += e.attr("width"), i += e.attr("height")), t = ["translate(" + n + "," + i + ")"], a ? t.push("rotate(90) scale(-1,1)") : s && t.push("rotate(" + s + " " + (l.getAttribute("x") || 0) + " " + (l.getAttribute("y") || 0) + ")"), (m(o) || m(r)) && t.push("scale(" + x(o, 1) + " " + x(r, 1) + ")"), t.length && l.setAttribute("transform", t.join(" "))
            },
            toFront: function () {
                var t = this.element;
                return t.parentNode.appendChild(t), this
            },
            align: function (t, e, n) {
                var i, o, r, a, l, c = {}, d = this.renderer, p = d.alignedObjects;
                return t ? (this.alignOptions = t, this.alignByTranslate = e, (!n || s(n)) && (this.alignTo = l = n || "renderer", h(p, this), p.push(this), n = null)) : (t = this.alignOptions, e = this.alignByTranslate, l = this.alignTo), n = x(n, d[l], d), i = t.align, o = t.verticalAlign, r = (n.x || 0) + (t.x || 0), a = (n.y || 0) + (t.y || 0), ("right" === i || "center" === i) && (r += (n.width - (t.width || 0)) / {
                    right: 1,
                    center: 2
                }[i]), c[e ? "translateX" : "x"] = vt(r), ("bottom" === o || "middle" === o) && (a += (n.height - (t.height || 0)) / ({
                    bottom: 1,
                    middle: 2
                }[o] || 1)), c[e ? "translateY" : "y"] = vt(a), this[this.placed ? "animate" : "attr"](c), this.placed = !0, this.alignAttr = c, this
            },
            getBBox: function () {
                var t, e, n, i = this, r = i.bBox, a = i.renderer, s = i.rotation, l = i.element, c = i.styles,
                    d = s * At, p = i.textStr;
                if (("" === p || ne.test(p)) && (n = "num." + p.toString().length + (c ? "|" + c.fontSize + "|" + c.fontFamily : "")), n && (r = a.cache[n]), !r) {
                    if (l.namespaceURI === Nt || a.forExport) {
                        try {
                            r = l.getBBox ? o({}, l.getBBox()) : {width: l.offsetWidth, height: l.offsetHeight}
                        } catch (u) {
                        }
                        (!r || r.width < 0) && (r = {width: 0, height: 0})
                    } else r = i.htmlGetBBox();
                    a.isSVG && (t = r.width, e = r.height, zt && c && "11px" === c.fontSize && "16.9" === e.toPrecision(3) && (r.height = e = 14), s && (r.width = kt(e * Tt(d)) + kt(t * St(d)), r.height = kt(e * St(d)) + kt(t * Tt(d)))), i.bBox = r, n && (a.cache[n] = r)
                }
                return r
            },
            show: function (t) {
                return t && this.element.namespaceURI === Nt ? this.element.removeAttribute("visibility") : this.attr({visibility: t ? "inherit" : Zt}), this
            },
            hide: function () {
                return this.attr({visibility: Vt})
            },
            fadeOut: function (t) {
                var e = this;
                e.animate({opacity: 0}, {
                    duration: t || 150, complete: function () {
                        e.attr({y: -9999})
                    }
                })
            },
            add: function (t) {
                var e, n, i, o, r, s = this.renderer, l = t || s, c = l.element || s.box, d = this.element,
                    p = this.zIndex;
                if (t && (this.parentGroup = t), this.parentInverted = t && t.inverted, void 0 !== this.textStr && s.buildText(this), p && (l.handleZ = !0, p = a(p)), l.handleZ) for (e = c.childNodes, o = 0; o < e.length; o++) if (n = e[o], i = f(n, "zIndex"), n !== d && (a(i) > p || !m(p) && m(i))) {
                    c.insertBefore(d, n), r = !0;
                    break
                }
                return r || c.appendChild(d), this.added = !0, this.onAdd && this.onAdd(), this
            },
            safeRemoveChild: function (t) {
                var e = t.parentNode;
                e && e.removeChild(t)
            },
            destroy: function () {
                var t, e, n, i = this, o = i.element || {}, r = i.shadows,
                    a = i.renderer.isSVG && "SPAN" === o.nodeName && i.parentGroup;
                if (o.onclick = o.onmouseout = o.onmouseover = o.onmousemove = o.point = null, ke(i), i.clipPath && (i.clipPath = i.clipPath.destroy()), i.stops) {
                    for (n = 0; n < i.stops.length; n++) i.stops[n] = i.stops[n].destroy();
                    i.stops = null
                }
                for (i.safeRemoveChild(o), r && me(r, function (t) {
                    i.safeRemoveChild(t)
                }); a && a.div && 0 === a.div.childNodes.length;) t = a.parentGroup, i.safeRemoveChild(a.div), delete a.div, a = t;
                i.alignTo && h(i.renderer.alignedObjects, i);
                for (e in i) delete i[e];
                return null
            },
            shadow: function (t, e, n) {
                var i, o, r, a, s, l, c = [], d = this.element;
                if (t) {
                    for (a = x(t.width, 3), s = (t.opacity || .15) / a, l = this.parentInverted ? "(-1,-1)" : "(" + x(t.offsetX, 1) + ", " + x(t.offsetY, 1) + ")", i = 1; a >= i; i++) o = d.cloneNode(0), r = 2 * a + 1 - 2 * i, f(o, {
                        isShadow: "true",
                        stroke: t.color || "black",
                        "stroke-opacity": s * i,
                        "stroke-width": r,
                        transform: "translate" + l,
                        fill: Qt
                    }), n && (f(o, "height", wt(f(o, "height") - r, 0)), o.cutHeight = r), e ? e.element.appendChild(o) : d.parentNode.insertBefore(o, d), c.push(o);
                    this.shadows = c
                }
                return this
            },
            xGetter: function (t) {
                return "circle" === this.element.nodeName && (t = {x: "cx", y: "cy"}[t] || t), this._defaultGetter(t)
            },
            _defaultGetter: function (t) {
                var e = x(this[t], this.element ? this.element.getAttribute(t) : null, 0);
                return /^[\-0-9\.]+$/.test(e) && (e = parseFloat(e)), e
            },
            dSetter: function (t, e, n) {
                t && t.join && (t = t.join(" ")), /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"), n.setAttribute(e, t), this[e] = t
            },
            dashstyleSetter: function (t) {
                var e;
                if (t = t && t.toLowerCase()) {
                    for (t = t.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(","), e = t.length; e--;) t[e] = a(t[e]) * this["stroke-width"];
                    t = t.join(",").replace("NaN", "none"), this.element.setAttribute("stroke-dasharray", t)
                }
            },
            alignSetter: function (t) {
                this.element.setAttribute("text-anchor", {left: "start", center: "middle", right: "end"}[t])
            },
            opacitySetter: function (t, e, n) {
                this[e] = t, n.setAttribute(e, t)
            },
            titleSetter: function (t) {
                var e = this.element.getElementsByTagName("title")[0];
                e || (e = ft.createElementNS(Nt, "title"), this.element.appendChild(e)), e.textContent = x(t, "").replace(/<[^>]*>/g, "")
            },
            textSetter: function (t) {
                t !== this.textStr && (delete this.bBox, this.textStr = t, this.added && this.renderer.buildText(this))
            },
            fillSetter: function (t, e, n) {
                "string" == typeof t ? n.setAttribute(e, t) : t && this.colorGradient(t, e, n)
            },
            zIndexSetter: function (t, e, n) {
                n.setAttribute(e, t), this[e] = t
            },
            _defaultSetter: function (t, e, n) {
                n.setAttribute(e, t)
            }
        }, B.prototype.yGetter = B.prototype.xGetter, B.prototype.translateXSetter = B.prototype.translateYSetter = B.prototype.rotationSetter = B.prototype.verticalAlignSetter = B.prototype.scaleXSetter = B.prototype.scaleYSetter = function (t, e) {
            this[e] = t, this.doTransform = !0
        }, B.prototype["stroke-widthSetter"] = B.prototype.strokeSetter = function (t, e, n) {
            this[e] = t, this.stroke && this["stroke-width"] ? (this.strokeWidth = this["stroke-width"], B.prototype.fillSetter.call(this, this.stroke, "stroke", n), n.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === e && 0 === t && this.hasStroke && (n.removeAttribute("stroke"), this.hasStroke = !1)
        };
        var Le = function () {
            this.init.apply(this, arguments)
        };
        Le.prototype = {
            Element: B, init: function (t, e, n, i, o) {
                var r, a, s, l = this, c = location;
                r = l.createElement("svg").attr({version: "1.1"}).css(this.getStyle(i)), a = r.element, t.appendChild(a), -1 === t.innerHTML.indexOf("xmlns") && f(a, "xmlns", Nt), l.isSVG = !0, l.box = a, l.boxWrapper = r, l.alignedObjects = [], l.url = (Et || Mt) && ft.getElementsByTagName("base").length ? c.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "", s = this.createElement("desc").add(), s.element.appendChild(ft.createTextNode("Created with " + $t + " " + Xt)), l.defs = this.createElement("defs").add(), l.forExport = o, l.gradients = {}, l.cache = {}, l.setSize(e, n, !1);
                var d, p;
                Et && t.getBoundingClientRect && (l.subPixelFix = d = function () {
                    v(t, {left: 0, top: 0}), p = t.getBoundingClientRect(), v(t, {
                        left: yt(p.left) - p.left + Kt,
                        top: yt(p.top) - p.top + Kt
                    })
                }, d(), ve(gt, "resize", d))
            }, getStyle: function (t) {
                return this.style = o({
                    fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                    fontSize: "12px"
                }, t)
            }, isHidden: function () {
                return !this.boxWrapper.getBBox().width
            }, destroy: function () {
                var t = this, e = t.defs;
                return t.box = null, t.boxWrapper = t.boxWrapper.destroy(), L(t.gradients || {}), t.gradients = null, e && (t.defs = e.destroy()), t.subPixelFix && be(gt, "resize", t.subPixelFix), t.alignedObjects = null, null
            }, createElement: function (t) {
                var e = new this.Element;
                return e.init(this, t), e
            }, draw: function () {
            }, buildText: function (t) {
                for (var e, n, i, o = t.element, r = this, s = r.forExport, l = x(t.textStr, "").toString(), c = -1 !== l.indexOf("<"), d = o.childNodes, p = f(o, "x"), u = t.styles, h = t.textWidth, m = u && u.lineHeight, g = u && u.HcTextStroke, b = d.length, y = function (t) {
                    return m ? a(m) : r.fontMetrics(/(px|em)$/.test(t && t.style.fontSize) ? t.style.fontSize : u && u.fontSize || r.style.fontSize || 12, t).h
                }; b--;) o.removeChild(d[b]);
                return c || g || -1 !== l.indexOf(" ") ? (n = /<.*style="([^"]+)".*>/, i = /<.*href="(http[^"]+)".*>/, h && !t.added && this.box.appendChild(o), e = c ? l.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [l], "" === e[e.length - 1] && e.pop(), me(e, function (e, a) {
                    var l, c = 0;
                    e = e.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||"), l = e.split("|||"), me(l, function (e) {
                        if ("" !== e || 1 === l.length) {
                            var d, m = {}, g = ft.createElementNS(Nt, "tspan");
                            if (n.test(e) && (d = e.match(n)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), f(g, "style", d)), i.test(e) && !s && (f(g, "onclick", 'location.href="' + e.match(i)[1] + '"'), v(g, {cursor: "pointer"})), e = (e.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">"), " " !== e) {
                                if (g.appendChild(ft.createTextNode(e)), c ? m.dx = 0 : a && null !== p && (m.x = p), f(g, m), o.appendChild(g), !c && a && (!Dt && s && v(g, {display: "block"}), f(g, "dy", y(g))), h) for (var x, b, w, _ = e.replace(/([^\^])-/g, "$1- ").split(" "), k = l.length > 1 || _.length > 1 && "nowrap" !== u.whiteSpace, S = u.HcHeight, T = [], C = y(g), A = 1; k && (_.length || T.length);) delete t.bBox, w = t.getBBox(), b = w.width, !Dt && r.forExport && (b = r.measureSpanWidth(g.firstChild.data, t.styles)), x = b > h, x && 1 !== _.length ? (g.removeChild(g.firstChild), T.unshift(_.pop())) : (_ = T, T = [], _.length && (A++, S && A * C > S ? (_ = ["..."], t.attr("title", t.textStr)) : (g = ft.createElementNS(Nt, "tspan"), f(g, {
                                    dy: C,
                                    x: p
                                }), d && f(g, "style", d), o.appendChild(g))), b > h && (h = b)), _.length && g.appendChild(ft.createTextNode(_.join(" ").replace(/- /g, "-")));
                                c++
                            }
                        }
                    })
                }), void 0) : void o.appendChild(ft.createTextNode(l))
            }, button: function (t, e, n, i, a, s, l, c, d) {
                var p, u, h, m, f, g, x = this.label(t, e, n, d, null, null, null, null, "button"), v = 0,
                    b = {x1: 0, y1: 0, x2: 0, y2: 1};
                return a = r({
                    "stroke-width": 1,
                    stroke: "#CCCCCC",
                    fill: {linearGradient: b, stops: [[0, "#FEFEFE"], [1, "#F6F6F6"]]},
                    r: 2,
                    padding: 5,
                    style: {color: "black"}
                }, a), h = a.style, delete a.style, s = r(a, {
                    stroke: "#68A",
                    fill: {linearGradient: b, stops: [[0, "#FFF"], [1, "#ACF"]]}
                }, s), m = s.style, delete s.style, l = r(a, {
                    stroke: "#68A",
                    fill: {linearGradient: b, stops: [[0, "#9BD"], [1, "#CDF"]]}
                }, l), f = l.style, delete l.style, c = r(a, {style: {color: "#CCC"}}, c), g = c.style, delete c.style, ve(x.element, zt ? "mouseover" : "mouseenter", function () {
                    3 !== v && x.attr(s).css(m)
                }), ve(x.element, zt ? "mouseout" : "mouseleave", function () {
                    3 !== v && (p = [a, s, l][v], u = [h, m, f][v], x.attr(p).css(u))
                }), x.setState = function (t) {
                    x.state = v = t, t ? 2 === t ? x.attr(l).css(f) : 3 === t && x.attr(c).css(g) : x.attr(a).css(h)
                }, x.on("click", function () {
                    3 !== v && i.call(x)
                }).attr(a).css(o({cursor: "default"}, h))
            }, crispLine: function (t, e) {
                return t[1] === t[4] && (t[1] = t[4] = vt(t[1]) - e % 2 / 2), t[2] === t[5] && (t[2] = t[5] = vt(t[2]) + e % 2 / 2), t
            }, path: function (t) {
                var e = {fill: Qt};
                return c(t) ? e.d = t : l(t) && o(e, t), this.createElement("path").attr(e)
            }, circle: function (t, e, n) {
                var i = l(t) ? t : {x: t, y: e, r: n}, o = this.createElement("circle");
                return o.xSetter = function (t) {
                    this.element.setAttribute("cx", t)
                }, o.ySetter = function (t) {
                    this.element.setAttribute("cy", t)
                }, o.attr(i)
            }, arc: function (t, e, n, i, o, r) {
                var a;
                return l(t) && (e = t.y, n = t.r, i = t.innerR, o = t.start, r = t.end, t = t.x), a = this.symbol("arc", t || 0, e || 0, n || 0, n || 0, {
                    innerR: i || 0,
                    start: o || 0,
                    end: r || 0
                }), a.r = n, a
            }, rect: function (t, e, n, i, o, r) {
                o = l(t) ? t.r : o;
                var a = this.createElement("rect"),
                    s = l(t) ? t : t === W ? {} : {x: t, y: e, width: wt(n, 0), height: wt(i, 0)};
                return r !== W && (s.strokeWidth = r, s = a.crisp(s)), o && (s.r = o), a.rSetter = function (t) {
                    f(this.element, {rx: t, ry: t})
                }, a.attr(s)
            }, setSize: function (t, e, n) {
                var i = this, o = i.alignedObjects, r = o.length;
                for (i.width = t, i.height = e, i.boxWrapper[x(n, !0) ? "animate" : "attr"]({
                    width: t,
                    height: e
                }); r--;) o[r].align()
            }, g: function (t) {
                var e = this.createElement("g");
                return m(t) ? e.attr({"class": Jt + t}) : e
            }, image: function (t, e, n, i, r) {
                var a, s = {preserveAspectRatio: Qt};
                return arguments.length > 1 && o(s, {
                    x: e,
                    y: n,
                    width: i,
                    height: r
                }), a = this.createElement("image").attr(s), a.element.setAttributeNS ? a.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", t) : a.element.setAttribute("hc-svg-href", t), a
            }, symbol: function (t, e, n, i, r, a) {
                var s, l, c, d, p, u = this.symbols[t], h = u && u(vt(e), vt(n), i, r, a), m = /^url\((.*?)\)$/;
                return h ? (s = this.path(h), o(s, {
                    symbolName: t,
                    x: e,
                    y: n,
                    width: i,
                    height: r
                }), a && o(s, a)) : m.test(t) && (p = function (t, e) {
                    t.element && (t.attr({
                        width: e[0],
                        height: e[1]
                    }), t.alignByTranslate || t.translate(vt((i - e[0]) / 2), vt((r - e[1]) / 2)))
                }, c = t.match(m)[1], d = Rt[c] || a && a.width && a.height && [a.width, a.height], s = this.image(c).attr({
                    x: e,
                    y: n
                }), s.isImg = !0, d ? p(s, d) : (s.attr({width: 0, height: 0}), l = b("img", {
                    onload: function () {
                        p(s, Rt[c] = [this.width, this.height])
                    }, src: c
                }))), s
            }, symbols: {
                circle: function (t, e, n, i) {
                    var o = .166 * n;
                    return [te, t + n / 2, e, "C", t + n + o, e, t + n + o, e + i, t + n / 2, e + i, "C", t - o, e + i, t - o, e, t + n / 2, e, "Z"]
                }, square: function (t, e, n, i) {
                    return [te, t, e, ee, t + n, e, t + n, e + i, t, e + i, "Z"]
                }, triangle: function (t, e, n, i) {
                    return [te, t + n / 2, e, ee, t + n, e + i, t, e + i, "Z"]
                }, "triangle-down": function (t, e, n, i) {
                    return [te, t, e, ee, t + n, e, t + n / 2, e + i, "Z"]
                }, diamond: function (t, e, n, i) {
                    return [te, t + n / 2, e, ee, t + n, e + i / 2, t + n / 2, e + i, t, e + i / 2, "Z"]
                }, arc: function (t, e, n, i, o) {
                    var r = o.start, a = o.r || n || i, s = o.end - .001, l = o.innerR, c = o.open, d = St(r),
                        p = Tt(r), u = St(s), h = Tt(s), m = o.end - r < Ct ? 0 : 1;
                    return [te, t + a * d, e + a * p, "A", a, a, 0, m, 1, t + a * u, e + a * h, c ? te : ee, t + l * u, e + l * h, "A", l, l, 0, m, 0, t + l * d, e + l * p, c ? "" : "Z"]
                }, callout: function (t, e, n, i, o) {
                    var r, a = 6, s = 6, l = _t(o && o.r || 0, n, i), c = l + s, d = o && o.anchorX, p = o && o.anchorY,
                        u = vt(o.strokeWidth || 0) % 2 / 2;
                    return t += u, e += u, r = ["M", t + l, e, "L", t + n - l, e, "C", t + n, e, t + n, e, t + n, e + l, "L", t + n, e + i - l, "C", t + n, e + i, t + n, e + i, t + n - l, e + i, "L", t + l, e + i, "C", t, e + i, t, e + i, t, e + i - l, "L", t, e + l, "C", t, e, t, e, t + l, e], d && d > n && p > e + c && e + i - c > p ? r.splice(13, 3, "L", t + n, p - s, t + n + a, p, t + n, p + s, t + n, e + i - l) : d && 0 > d && p > e + c && e + i - c > p ? r.splice(33, 3, "L", t, p + s, t - a, p, t, p - s, t, e + l) : p && p > i && d > t + c && t + n - c > d ? r.splice(23, 3, "L", d + s, e + i, d, e + i + a, d - s, e + i, t + l, e + i) : p && 0 > p && d > t + c && t + n - c > d && r.splice(3, 3, "L", d - s, e, d, e - a, d + s, e, n - l, e), r
                }
            }, clipRect: function (t, e, n, i) {
                var o, r = Jt + qt++, a = this.createElement("clipPath").attr({id: r}).add(this.defs);
                return o = this.rect(t, e, n, i, 0).add(a), o.id = r, o.clipPath = a, o
            }, text: function (t, e, n, i) {
                var o, r = this, a = Bt || !Dt && r.forExport, s = {};
                return i && !r.forExport ? r.html(t, e, n) : (s.x = Math.round(e || 0), n && (s.y = Math.round(n)), (t || 0 === t) && (s.text = t), o = r.createElement("text").attr(s), a && o.css({position: Gt}), i || (o.xSetter = function (t, e, n) {
                    var i, o, r = n.getElementsByTagName("tspan"), a = n.getAttribute(e);
                    for (o = 0; o < r.length; o++) i = r[o], i.getAttribute(e) === a && i.setAttribute(e, t);
                    n.setAttribute(e, t)
                }), o)
            }, fontMetrics: function (t, e) {
                t = t || this.style.fontSize, e && gt.getComputedStyle && (e = e.element || e, t = gt.getComputedStyle(e, "").fontSize), t = /px/.test(t) ? a(t) : /em/.test(t) ? 12 * parseFloat(t) : 12;
                var n = 24 > t ? t + 4 : vt(1.2 * t), i = vt(.8 * n);
                return {h: n, b: i, f: t}
            }, label: function (t, e, n, i, a, s, l, c, d) {
                function p() {
                    var t, e, n = T.element.style;
                    g = (void 0 === x || void 0 === v || S.styles.textAlign) && T.textStr && T.getBBox(), S.width = (x || g.width || 0) + 2 * A + j, S.height = (v || g.height || 0) + 2 * A, w = A + k.fontMetrics(n && n.fontSize, T).b, _ && (f || (t = vt(-C * A), e = c ? -w : 0, S.box = f = i ? k.symbol(i, t, e, S.width, S.height, z) : k.rect(t, e, S.width, S.height, 0, z[ae]), f.attr("fill", Qt).add(S)), f.isImg || f.attr(o({
                        width: vt(S.width),
                        height: vt(S.height)
                    }, z)), z = null)
                }

                function u() {
                    var t, e = S.styles, n = e && e.textAlign, i = j + A * (1 - C);
                    t = c ? 0 : w, m(x) && g && ("center" === n || "right" === n) && (i += {
                        center: .5,
                        right: 1
                    }[n] * (x - g.width)), (i !== T.x || t !== T.y) && (T.attr("x", i), t !== W && T.attr("y", t)), T.x = i, T.y = t
                }

                function h(t, e) {
                    f ? f.attr(t, e) : z[t] = e
                }

                var f, g, x, v, b, y, w, _, k = this, S = k.g(d), T = k.text("", 0, 0, l).attr({zIndex: 1}), C = 0,
                    A = 3, j = 0, P = 0, z = {};
                S.onAdd = function () {
                    T.add(S), S.attr({text: t || 0 === t ? t : "", x: e, y: n}), f && m(a) && S.attr({
                        anchorX: a,
                        anchorY: s
                    })
                }, S.widthSetter = function (t) {
                    x = t
                }, S.heightSetter = function (t) {
                    v = t
                }, S.paddingSetter = function (t) {
                    m(t) && t !== A && (A = t, u())
                }, S.paddingLeftSetter = function (t) {
                    m(t) && t !== j && (j = t, u())
                }, S.alignSetter = function (t) {
                    C = {left: 0, center: .5, right: 1}[t]
                }, S.textSetter = function (t) {
                    t !== W && T.textSetter(t), p(), u()
                }, S["stroke-widthSetter"] = function (t, e) {
                    t && (_ = !0), P = t % 2 / 2, h(e, t)
                }, S.strokeSetter = S.fillSetter = S.rSetter = function (t, e) {
                    "fill" === e && t && (_ = !0), h(e, t)
                }, S.anchorXSetter = function (t, e) {
                    a = t, h(e, t + P - b)
                }, S.anchorYSetter = function (t, e) {
                    s = t, h(e, t - y)
                }, S.xSetter = function (t) {
                    S.x = t, C && (t -= C * ((x || g.width) + A)), b = vt(t), S.attr("translateX", b)
                }, S.ySetter = function (t) {
                    y = S.y = vt(t), S.attr("translateY", y)
                };
                var L = S.css;
                return o(S, {
                    css: function (t) {
                        if (t) {
                            var e = {};
                            t = r(t), me(S.textProps, function (n) {
                                t[n] !== W && (e[n] = t[n], delete t[n])
                            }), T.css(e)
                        }
                        return L.call(S, t)
                    }, getBBox: function () {
                        return {width: g.width + 2 * A, height: g.height + 2 * A, x: g.x - A, y: g.y - A}
                    }, shadow: function (t) {
                        return f && f.shadow(t), S
                    }, destroy: function () {
                        be(S.element, "mouseenter"), be(S.element, "mouseleave"), T && (T = T.destroy()), f && (f = f.destroy()), B.prototype.destroy.call(S), S = k = p = u = h = null
                    }
                })
            }
        }, $ = Le, o(B.prototype, {
            htmlCss: function (t) {
                var e = this, n = e.element, i = t && "SPAN" === n.tagName && t.width;
                return i && (delete t.width, e.textWidth = i, e.updateTransform()), e.styles = o(e.styles, t), v(e.element, t), e
            }, htmlGetBBox: function () {
                var t = this, e = t.element, n = t.bBox;
                return n || ("text" === e.nodeName && (e.style.position = Gt), n = t.bBox = {
                    x: e.offsetLeft,
                    y: e.offsetTop,
                    width: e.offsetWidth,
                    height: e.offsetHeight
                }), n
            }, htmlUpdateTransform: function () {
                if (!this.added) return void(this.alignOnAdd = !0);
                var t = this, e = t.renderer, n = t.element, i = t.translateX || 0, o = t.translateY || 0, r = t.x || 0,
                    s = t.y || 0, l = t.textAlign || "left", c = {left: 0, center: .5, right: 1}[l], d = t.shadows;
                if (v(n, {marginLeft: i, marginTop: o}), d && me(d, function (t) {
                        v(t, {marginLeft: i + 1, marginTop: o + 1})
                    }), t.inverted && me(n.childNodes, function (t) {
                        e.invertChild(t, n)
                    }), "SPAN" === n.tagName) {
                    var p, u, h = t.rotation, f = a(t.textWidth), g = [h, l, n.innerHTML, t.textWidth].join(",");
                    g !== t.cTT && (u = e.fontMetrics(n.style.fontSize).b, m(h) && t.setSpanRotation(h, c, u), p = x(t.elemWidth, n.offsetWidth), p > f && /[ \-]/.test(n.textContent || n.innerText) && (v(n, {
                        width: f + Kt,
                        display: "block",
                        whiteSpace: "normal"
                    }), p = f), t.getSpanCorrection(p, u, c, h, l)), v(n, {
                        left: r + (t.xCorr || 0) + Kt,
                        top: s + (t.yCorr || 0) + Kt
                    }), Mt && (u = n.offsetHeight), t.cTT = g
                }
            }, setSpanRotation: function (t, e, n) {
                var i = {},
                    o = zt ? "-ms-transform" : Mt ? "-webkit-transform" : Et ? "MozTransform" : Pt ? "-o-transform" : "";
                i[o] = i.transform = "rotate(" + t + "deg)", i[o + (Et ? "Origin" : "-origin")] = i.transformOrigin = 100 * e + "% " + n + "px", v(this.element, i)
            }, getSpanCorrection: function (t, e, n) {
                this.xCorr = -t * n, this.yCorr = -e
            }
        }), o(Le.prototype, {
            html: function (t, e, n) {
                var i = this.createElement("span"), r = i.element, a = i.renderer;
                return i.textSetter = function (t) {
                    t !== r.innerHTML && delete this.bBox, r.innerHTML = this.textStr = t
                }, i.xSetter = i.ySetter = i.alignSetter = i.rotationSetter = function (t, e) {
                    "align" === e && (e = "textAlign"), i[e] = t, i.htmlUpdateTransform()
                }, i.attr({text: t, x: vt(e), y: vt(n)}).css({
                    position: Gt,
                    whiteSpace: "nowrap",
                    fontFamily: this.style.fontFamily,
                    fontSize: this.style.fontSize
                }), i.css = i.htmlCss, a.isSVG && (i.add = function (t) {
                    var e, n, s = a.box.parentNode, l = [];
                    if (this.parentGroup = t, t) {
                        if (e = t.div, !e) {
                            for (n = t; n;) l.push(n), n = n.parentGroup;
                            me(l.reverse(), function (t) {
                                var n;
                                e = t.div = t.div || b(Yt, {className: f(t.element, "class")}, {
                                    position: Gt,
                                    left: (t.translateX || 0) + Kt,
                                    top: (t.translateY || 0) + Kt
                                }, e || s), n = e.style, o(t, {
                                    translateXSetter: function (e, i) {
                                        n.left = e + Kt, t[i] = e, t.doTransform = !0
                                    }, translateYSetter: function (e, i) {
                                        n.top = e + Kt, t[i] = e, t.doTransform = !0
                                    }, visibilitySetter: function (t, e) {
                                        n[e] = t
                                    }
                                })
                            })
                        }
                    } else e = s;
                    return e.appendChild(r), i.added = !0, i.alignOnAdd && i.htmlUpdateTransform(), i
                }), i
            }
        });
        var Me, Ee;
        if (!Dt && !Bt) {
            Ee = {
                init: function (t, e) {
                    var n = this, i = ["<", e, ' filled="f" stroked="f"'], o = ["position: ", Gt, ";"], r = e === Yt;
                    ("shape" === e || r) && o.push("left:0;top:0;width:1px;height:1px;"), o.push("visibility: ", r ? Vt : Zt), i.push(' style="', o.join(""), '"/>'), e && (i = r || "span" === e || "img" === e ? i.join("") : t.prepVML(i), n.element = b(i)), n.renderer = t
                }, add: function (t) {
                    var e = this, n = e.renderer, i = e.element, o = n.box, r = t && t.inverted,
                        a = t ? t.element || t : o;
                    return r && n.invertChild(i, a), a.appendChild(i), e.added = !0, e.alignOnAdd && !e.deferUpdateTransform && e.updateTransform(), e.onAdd && e.onAdd(), e
                }, updateTransform: B.prototype.htmlUpdateTransform, setSpanRotation: function () {
                    var t = this.rotation, e = St(t * At), n = Tt(t * At);
                    v(this.element, {filter: t ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", e, ", M12=", -n, ", M21=", n, ", M22=", e, ", sizingMethod='auto expand')"].join("") : Qt})
                }, getSpanCorrection: function (t, e, n, i, o) {
                    var r, a = i ? St(i * At) : 1, s = i ? Tt(i * At) : 0,
                        l = x(this.elemHeight, this.element.offsetHeight), c = o && "left" !== o;
                    this.xCorr = 0 > a && -t, this.yCorr = 0 > s && -l, r = 0 > a * s, this.xCorr += s * e * (r ? 1 - n : n), this.yCorr -= a * e * (i ? r ? n : 1 - n : 1), c && (this.xCorr -= t * n * (0 > a ? -1 : 1), i && (this.yCorr -= l * n * (0 > s ? -1 : 1)), v(this.element, {textAlign: o}))
                }, pathToVML: function (t) {
                    for (var e = t.length, n = []; e--;) d(t[e]) ? n[e] = vt(10 * t[e]) - 5 : "Z" === t[e] ? n[e] = "x" : (n[e] = t[e], !t.isArc || "wa" !== t[e] && "at" !== t[e] || (n[e + 5] === n[e + 7] && (n[e + 7] += t[e + 7] > t[e + 5] ? 1 : -1), n[e + 6] === n[e + 8] && (n[e + 8] += t[e + 8] > t[e + 6] ? 1 : -1)));
                    return n.join(" ") || "x"
                }, clip: function (t) {
                    var e, n, i = this;
                    return t ? (e = t.members, h(e, i), e.push(i), i.destroyClip = function () {
                        h(e, i)
                    }, n = t.getCSS(i)) : (i.destroyClip && i.destroyClip(), n = {clip: Lt ? "inherit" : "rect(auto)"}), i.css(n)
                }, css: B.prototype.htmlCss, safeRemoveChild: function (t) {
                    t.parentNode && M(t)
                }, destroy: function () {
                    return this.destroyClip && this.destroyClip(), B.prototype.destroy.apply(this)
                }, on: function (t, e) {
                    return this.element["on" + t] = function () {
                        var t = gt.event;
                        t.target = t.srcElement, e(t)
                    }, this
                }, cutOffPath: function (t, e) {
                    var n;
                    return t = t.split(/[ ,]/), n = t.length, (9 === n || 11 === n) && (t[n - 4] = t[n - 2] = a(t[n - 2]) - 10 * e), t.join(" ")
                }, shadow: function (t, e, n) {
                    var i, o, r, s, l, c, d, p = [], u = this.element, h = this.renderer, m = u.style, f = u.path;
                    if (f && "string" != typeof f.value && (f = "x"), l = f, t) {
                        for (c = x(t.width, 3), d = (t.opacity || .15) / c, i = 1; 3 >= i; i++) s = 2 * c + 1 - 2 * i, n && (l = this.cutOffPath(f.value, s + .5)), r = ['<shape isShadow="true" strokeweight="', s, '" filled="false" path="', l, '" coordsize="10 10" style="', u.style.cssText, '" />'], o = b(h.prepVML(r), null, {
                            left: a(m.left) + x(t.offsetX, 1),
                            top: a(m.top) + x(t.offsetY, 1)
                        }), n && (o.cutOff = s + 1), r = ['<stroke color="', t.color || "black", '" opacity="', d * i, '"/>'], b(h.prepVML(r), null, null, o), e ? e.element.appendChild(o) : u.parentNode.insertBefore(o, u), p.push(o);
                        this.shadows = p
                    }
                    return this
                }, updateShadows: Ht, setAttr: function (t, e) {
                    Lt ? this.element[t] = e : this.element.setAttribute(t, e)
                }, classSetter: function (t) {
                    this.element.className = t
                }, dashstyleSetter: function (t, e, n) {
                    var i = n.getElementsByTagName("stroke")[0] || b(this.renderer.prepVML(["<stroke/>"]), null, null, n);
                    i[e] = t || "solid", this[e] = t
                }, dSetter: function (t, e, n) {
                    var i, o = this.shadows;
                    if (t = t || [], this.d = t.join && t.join(" "), n.path = t = this.pathToVML(t), o) for (i = o.length; i--;) o[i].path = o[i].cutOff ? this.cutOffPath(t, o[i].cutOff) : t;
                    this.setAttr(e, t)
                }, fillSetter: function (t, e, n) {
                    var i = n.nodeName;
                    "SPAN" === i ? n.style.color = t : "IMG" !== i && (n.filled = t !== Qt, this.setAttr("fillcolor", this.renderer.color(t, n, e, this)))
                }, opacitySetter: Ht, rotationSetter: function (t, e, n) {
                    var i = n.style;
                    this[e] = i[e] = t, i.left = -vt(Tt(t * At) + 1) + Kt, i.top = vt(St(t * At)) + Kt
                }, strokeSetter: function (t, e, n) {
                    this.setAttr("strokecolor", this.renderer.color(t, n, e))
                }, "stroke-widthSetter": function (t, e, n) {
                    n.stroked = !!t, this[e] = t, d(t) && (t += Kt), this.setAttr("strokeweight", t)
                }, titleSetter: function (t, e) {
                    this.setAttr(e, t)
                }, visibilitySetter: function (t, e, n) {
                    "inherit" === t && (t = Zt), this.shadows && me(this.shadows, function (n) {
                        n.style[e] = t
                    }), "DIV" === n.nodeName && (t = t === Vt ? "-999em" : 0, Lt || (n.style[e] = t ? Zt : Vt), e = "top"), n.style[e] = t
                }, xSetter: function (t, e, n) {
                    this[e] = t, "x" === e ? e = "left" : "y" === e && (e = "top"), this.updateClipping ? (this[e] = t, this.updateClipping()) : n.style[e] = t
                }, zIndexSetter: function (t, e, n) {
                    n.style[e] = t
                }
            }, le.VMLElement = Ee = y(B, Ee), Ee.prototype.ySetter = Ee.prototype.widthSetter = Ee.prototype.heightSetter = Ee.prototype.xSetter;
            var Ie = {
                Element: Ee, isIE8: jt.indexOf("MSIE 8.0") > -1, init: function (t, e, n, i) {
                    var r, a, s, l = this;
                    if (l.alignedObjects = [], r = l.createElement(Yt).css(o(this.getStyle(i), {position: Ut})), a = r.element, t.appendChild(r.element), l.isVML = !0, l.box = a, l.boxWrapper = r, l.cache = {}, l.setSize(e, n, !1), !ft.namespaces.hcv) {
                        ft.namespaces.add("hcv", "urn:schemas-microsoft-com:vml"), s = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } ";
                        try {
                            ft.createStyleSheet().cssText = s
                        } catch (c) {
                            ft.styleSheets[0].cssText += s
                        }
                    }
                }, isHidden: function () {
                    return !this.box.offsetWidth
                }, clipRect: function (t, e, n, i) {
                    var r = this.createElement(), a = l(t);
                    return o(r, {
                        members: [],
                        left: (a ? t.x : t) + 1,
                        top: (a ? t.y : e) + 1,
                        width: (a ? t.width : n) - 1,
                        height: (a ? t.height : i) - 1,
                        getCSS: function (t) {
                            var e = t.element, n = e.nodeName, i = "shape" === n, r = t.inverted, a = this,
                                s = a.top - (i ? e.offsetTop : 0), l = a.left, c = l + a.width, d = s + a.height,
                                p = {clip: "rect(" + vt(r ? l : s) + "px," + vt(r ? d : c) + "px," + vt(r ? c : d) + "px," + vt(r ? s : l) + "px)"};
                            return !r && Lt && "DIV" === n && o(p, {width: c + Kt, height: d + Kt}), p
                        },
                        updateClipping: function () {
                            me(r.members, function (t) {
                                t.element && t.css(r.getCSS(t))
                            })
                        }
                    })
                }, color: function (t, e, n, i) {
                    var o, r, a, s = this, l = /^rgba/, c = Qt;
                    if (t && t.linearGradient ? a = "gradient" : t && t.radialGradient && (a = "pattern"), a) {
                        var d, p, u, h, m, f, g, x, v, y, w, _, k = t.linearGradient || t.radialGradient, S = "",
                            T = t.stops, C = [], A = function () {
                                r = ['<fill colors="' + C.join(",") + '" opacity="', x, '" o:opacity2="', g, '" type="', a, '" ', S, 'focus="100%" method="any" />'], b(s.prepVML(r), null, null, e)
                            };
                        if (w = T[0], _ = T[T.length - 1], w[0] > 0 && T.unshift([0, w[1]]), _[0] < 1 && T.push([1, _[1]]), me(T, function (t, e) {
                                l.test(t[1]) ? (o = ze(t[1]), d = o.get("rgb"), p = o.get("a")) : (d = t[1], p = 1), C.push(100 * t[0] + "% " + d), e ? (x = p, v = d) : (g = p, y = d)
                            }), "fill" === n) if ("gradient" === a) u = k.x1 || k[0] || 0, h = k.y1 || k[1] || 0, m = k.x2 || k[2] || 0, f = k.y2 || k[3] || 0, S = 'angle="' + (90 - 180 * xt.atan((f - h) / (m - u)) / Ct) + '"', A(); else {
                            var j, P = k.r, z = 2 * P, L = 2 * P, M = k.cx, E = k.cy, I = e.radialReference,
                                N = function () {
                                    I && (j = i.getBBox(), M += (I[0] - j.x) / j.width - .5, E += (I[1] - j.y) / j.height - .5, z *= I[2] / j.width, L *= I[2] / j.height), S = 'src="' + G.global.VMLRadialGradientURL + '" size="' + z + "," + L + '" origin="0.5,0.5" position="' + M + "," + E + '" color2="' + y + '" ', A()
                                };
                            i.added ? N() : i.onAdd = N, c = v
                        } else c = d
                    } else if (l.test(t) && "IMG" !== e.tagName) o = ze(t), r = ["<", n, ' opacity="', o.get("a"), '"/>'], b(this.prepVML(r), null, null, e), c = o.get("rgb"); else {
                        var D = e.getElementsByTagName(n);
                        D.length && (D[0].opacity = 1, D[0].type = "solid"), c = t
                    }
                    return c
                }, prepVML: function (t) {
                    var e = "display:inline-block;behavior:url(#default#VML);", n = this.isIE8;
                    return t = t.join(""), n ? (t = t.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), t = -1 === t.indexOf('style="') ? t.replace("/>", ' style="' + e + '" />') : t.replace('style="', 'style="' + e)) : t = t.replace("<", "<hcv:"), t
                }, text: Le.prototype.html, path: function (t) {
                    var e = {coordsize: "10 10"};
                    return c(t) ? e.d = t : l(t) && o(e, t), this.createElement("shape").attr(e)
                }, circle: function (t, e, n) {
                    var i = this.symbol("circle");
                    return l(t) && (n = t.r, e = t.y, t = t.x), i.isCircle = !0, i.r = n, i.attr({x: t, y: e})
                }, g: function (t) {
                    var e, n;
                    return t && (n = {className: Jt + t, "class": Jt + t}), e = this.createElement(Yt).attr(n)
                }, image: function (t, e, n, i, o) {
                    var r = this.createElement("img").attr({src: t});
                    return arguments.length > 1 && r.attr({x: e, y: n, width: i, height: o}), r
                }, createElement: function (t) {
                    return "rect" === t ? this.symbol(t) : Le.prototype.createElement.call(this, t)
                }, invertChild: function (t, e) {
                    var n = this, i = e.style, o = "IMG" === t.tagName && t.style;
                    v(t, {
                        flip: "x",
                        left: a(i.width) - (o ? a(o.top) : 1),
                        top: a(i.height) - (o ? a(o.left) : 1),
                        rotation: -90
                    }), me(t.childNodes, function (e) {
                        n.invertChild(e, t)
                    })
                }, symbols: {
                    arc: function (t, e, n, i, o) {
                        var r, a = o.start, s = o.end, l = o.r || n || i, c = o.innerR, d = St(a), p = Tt(a), u = St(s),
                            h = Tt(s);
                        return s - a === 0 ? ["x"] : (r = ["wa", t - l, e - l, t + l, e + l, t + l * d, e + l * p, t + l * u, e + l * h], o.open && !c && r.push("e", te, t, e), r.push("at", t - c, e - c, t + c, e + c, t + c * u, e + c * h, t + c * d, e + c * p, "x", "e"), r.isArc = !0, r)
                    }, circle: function (t, e, n, i, o) {
                        return o && (n = i = 2 * o.r), o && o.isCircle && (t -= n / 2, e -= i / 2), ["wa", t, e, t + n, e + i, t + n, e + i / 2, t + n, e + i / 2, "e"]
                    }, rect: function (t, e, n, i, o) {
                        return Le.prototype.symbols[m(o) && o.r ? "callout" : "square"].call(0, t, e, n, i, o)
                    }
                }
            };
            le.VMLRenderer = Me = function () {
                this.init.apply(this, arguments)
            }, Me.prototype = r(Le.prototype, Ie), $ = Me
        }
        Le.prototype.measureSpanWidth = function (t, e) {
            var n, i = ft.createElement("span"), o = ft.createTextNode(t);
            return i.appendChild(o), v(i, e), this.box.appendChild(i), n = i.offsetWidth, M(i), n
        };
        var Ne, De;
        Bt && (le.CanVGRenderer = Ne = function () {
            Nt = "http://www.w3.org/1999/xhtml"
        }, Ne.prototype.symbols = {}, De = function () {
            function t() {
                var t, n = e.length;
                for (t = 0; n > t; t++) e[t]();
                e = []
            }

            var e = [];
            return {
                push: function (n, i) {
                    0 === e.length && ue(i, t), e.push(n)
                }
            }
        }(), $ = Ne), R.prototype = {
            addLabel: function () {
                var t, e, n, i, r = this, a = r.axis, s = a.options, l = a.chart, c = a.horiz, p = a.categories,
                    h = a.names, f = r.pos, g = s.labels, v = g.rotation, b = a.tickPositions,
                    y = c && p && !g.step && !g.staggerLines && !g.rotation && l.plotWidth / b.length || !c && (l.margin[3] || .33 * l.chartWidth),
                    w = f === b[0], _ = f === b[b.length - 1], k = p ? x(p[f], h[f], f) : f, S = r.label, T = b.info;
                a.isDatetimeAxis && T && (i = s.dateTimeLabelFormats[T.higherRanks[f] || T.unitName]), r.isFirst = w, r.isLast = _, t = a.labelFormatter.call({
                    axis: a,
                    chart: l,
                    isFirst: w,
                    isLast: _,
                    dateTimeLabelFormat: i,
                    value: a.isLog ? E(u(k)) : k
                }), e = y && {width: wt(1, vt(y - 2 * (g.padding || 10))) + Kt}, m(S) ? S && S.attr({text: t}).css(e) : (n = {align: a.labelAlign}, d(v) && (n.rotation = v), y && g.ellipsis && (e.HcHeight = a.len / b.length), r.label = S = m(t) && g.enabled ? l.renderer.text(t, 0, 0, g.useHTML).attr(n).css(o(e, g.style)).add(a.labelGroup) : null, a.tickBaseline = l.renderer.fontMetrics(g.style.fontSize, S).b, v && 2 === a.side && (a.tickBaseline *= St(v * At))), r.yOffset = S ? x(g.y, a.tickBaseline + (2 === a.side ? 8 : -(S.getBBox().height / 2))) : 0
            }, getLabelSize: function () {
                var t = this.label, e = this.axis;
                return t ? t.getBBox()[e.horiz ? "height" : "width"] : 0
            }, getLabelSides: function () {
                var t = this.label.getBBox(), e = this.axis, n = e.horiz, i = e.options, o = i.labels,
                    r = n ? t.width : t.height, a = n ? o.x - r * {left: 0, center: .5, right: 1}[e.labelAlign] : 0,
                    s = n ? r + a : r;
                return [a, s]
            }, handleOverflow: function (t, e) {
                var n, i, o, r, a, s = !0, l = this.axis, c = this.isFirst, d = this.isLast, p = l.horiz,
                    u = p ? e.x : e.y, h = l.reversed, m = l.tickPositions, f = this.getLabelSides(), g = f[0],
                    x = f[1], v = this.label.line, b = v || 0, y = l.labelEdge, w = l.justifyLabels && (c || d);
                if (y[b] === W || u + g > y[b] ? y[b] = u + x : w || (s = !1), w) {
                    a = l.justifyToPlot, n = a ? l.pos : 0, i = a ? n + l.len : l.chart.chartWidth;
                    do t += c ? 1 : -1, o = l.ticks[m[t]]; while (m[t] && (!o || !o.label || o.label.line !== v));
                    r = o && o.label.xy && o.label.xy.x + o.getLabelSides()[c ? 0 : 1], c && !h || d && h ? n > u + g && (u = n - g, o && u + x > r && (s = !1)) : u + x > i && (u = i - x, o && r > u + g && (s = !1)), e.x = u
                }
                return s
            }, getPosition: function (t, e, n, i) {
                var o = this.axis, r = o.chart, a = i && r.oldChartHeight || r.chartHeight;
                return {
                    x: t ? o.translate(e + n, null, null, i) + o.transB : o.left + o.offset + (o.opposite ? (i && r.oldChartWidth || r.chartWidth) - o.right - o.left : 0),
                    y: t ? a - o.bottom + o.offset - (o.opposite ? o.height : 0) : a - o.translate(e + n, null, null, i) - o.transB
                }
            }, getLabelPosition: function (t, e, n, i, o, r, a, s) {
                var l = this.axis, c = l.transA, d = l.reversed, p = l.staggerLines;
                return t = t + o.x - (r && i ? r * c * (d ? -1 : 1) : 0), e = e + this.yOffset - (r && !i ? r * c * (d ? 1 : -1) : 0), p && (n.line = a / (s || 1) % p, e += n.line * (l.labelOffset / p)), {
                    x: t,
                    y: e
                }
            }, getMarkPath: function (t, e, n, i, o, r) {
                return r.crispLine([te, t, e, ee, t + (o ? 0 : -n), e + (o ? n : 0)], i)
            }, render: function (t, e, n) {
                var i, o, r, a = this, s = a.axis, l = s.options, c = s.chart, d = c.renderer, p = s.horiz, u = a.type,
                    h = a.label, m = a.pos, f = l.labels, g = a.gridLine, v = u ? u + "Grid" : "grid",
                    b = u ? u + "Tick" : "tick", y = l[v + "LineWidth"], w = l[v + "LineColor"],
                    _ = l[v + "LineDashStyle"], k = l[b + "Length"], S = l[b + "Width"] || 0, T = l[b + "Color"],
                    C = l[b + "Position"], A = a.mark, j = f.step, P = !0, z = s.tickmarkOffset,
                    L = a.getPosition(p, m, z, e), M = L.x, E = L.y,
                    I = p && M === s.pos + s.len || !p && E === s.pos ? -1 : 1;
                n = x(n, 1), this.isActive = !0, y && (i = s.getPlotLinePath(m + z, y * I, e, !0), g === W && (r = {
                    stroke: w,
                    "stroke-width": y
                }, _ && (r.dashstyle = _), u || (r.zIndex = 1), e && (r.opacity = 0), a.gridLine = g = y ? d.path(i).attr(r).add(s.gridGroup) : null), !e && g && i && g[a.isNew ? "attr" : "animate"]({
                    d: i,
                    opacity: n
                })), S && k && ("inside" === C && (k = -k), s.opposite && (k = -k), o = a.getMarkPath(M, E, k, S * I, p, d), A ? A.animate({
                    d: o,
                    opacity: n
                }) : a.mark = d.path(o).attr({
                    stroke: T,
                    "stroke-width": S,
                    opacity: n
                }).add(s.axisGroup)), h && !isNaN(M) && (h.xy = L = a.getLabelPosition(M, E, h, p, f, z, t, j), a.isFirst && !a.isLast && !x(l.showFirstLabel, 1) || a.isLast && !a.isFirst && !x(l.showLastLabel, 1) ? P = !1 : s.isRadial || f.step || f.rotation || e || 0 === n || (P = a.handleOverflow(t, L)), j && t % j && (P = !1), P && !isNaN(L.y) ? (L.opacity = n, h[a.isNew ? "attr" : "animate"](L), a.isNew = !1) : h.attr("y", -9999))
            }, destroy: function () {
                L(this, this.axis)
            }
        }, le.PlotLineOrBand = function (t, e) {
            this.axis = t, e && (this.options = e, this.id = e.id)
        }, le.PlotLineOrBand.prototype = {
            render: function () {
                var t, e, n, i, o, a, s = this, l = s.axis, c = l.horiz, d = (l.pointRange || 0) / 2, u = s.options,
                    h = u.label, f = s.label, g = u.width, x = u.to, v = u.from, b = m(v) && m(x), y = u.value,
                    w = u.dashStyle, _ = s.svgElem, k = [], S = u.color, T = u.zIndex, C = u.events, A = {},
                    j = l.chart.renderer;
                if (l.isLog && (v = p(v), x = p(x), y = p(y)), g) k = l.getPlotLinePath(y, g), A = {
                    stroke: S,
                    "stroke-width": g
                }, w && (A.dashstyle = w); else {
                    if (!b) return;
                    v = wt(v, l.min - d), x = _t(x, l.max + d), k = l.getPlotBandPath(v, x, u), S && (A.fill = S), u.borderWidth && (A.stroke = u.borderColor, A["stroke-width"] = u.borderWidth)
                }
                if (m(T) && (A.zIndex = T), _) k ? _.animate({d: k}, null, _.onGetPath) : (_.hide(), _.onGetPath = function () {
                    _.show()
                }, f && (s.label = f = f.destroy())); else if (k && k.length && (s.svgElem = _ = j.path(k).attr(A).add(), C)) {
                    t = function (t) {
                        _.on(t, function (e) {
                            C[t].apply(s, [e])
                        })
                    };
                    for (e in C) t(e)
                }
                return h && m(h.text) && k && k.length && l.width > 0 && l.height > 0 ? (h = r({
                    align: c && b && "center",
                    x: c ? !b && 4 : 10,
                    verticalAlign: !c && b && "middle",
                    y: c ? b ? 16 : 10 : b ? 6 : -4,
                    rotation: c && !b && 90
                }, h), f || (A = {
                    align: h.textAlign || h.align,
                    rotation: h.rotation
                }, m(T) && (A.zIndex = T), s.label = f = j.text(h.text, 0, 0, h.useHTML).attr(A).css(h.style).add()), n = [k[1], k[4], b ? k[6] : k[1]], i = [k[2], k[5], b ? k[7] : k[2]], o = P(n), a = P(i), f.align(h, !1, {
                    x: o,
                    y: a,
                    width: z(n) - o,
                    height: z(i) - a
                }), f.show()) : f && f.hide(), s
            }, destroy: function () {
                h(this.axis.plotLinesAndBands, this), delete this.axis, L(this)
            }
        }, Q = {
            getPlotBandPath: function (t, e) {
                var n = this.getPlotLinePath(e), i = this.getPlotLinePath(t);
                return i && n ? i.push(n[4], n[5], n[1], n[2]) : i = null, i
            }, addPlotBand: function (t) {
                return this.addPlotBandOrLine(t, "plotBands")
            }, addPlotLine: function (t) {
                return this.addPlotBandOrLine(t, "plotLines")
            }, addPlotBandOrLine: function (t, e) {
                var n = new le.PlotLineOrBand(this, t).render(), i = this.userOptions;
                return n && (e && (i[e] = i[e] || [], i[e].push(t)), this.plotLinesAndBands.push(n)), n
            }, removePlotBandOrLine: function (t) {
                for (var e = this.plotLinesAndBands, n = this.options, i = this.userOptions, o = e.length; o--;) e[o].id === t && e[o].destroy();
                me([n.plotLines || [], i.plotLines || [], n.plotBands || [], i.plotBands || []], function (e) {
                    for (o = e.length; o--;) e[o].id === t && h(e, e[o])
                })
            }
        }, q.prototype = {
            defaultOptions: {
                dateTimeLabelFormats: {
                    millisecond: "%H:%M:%S.%L",
                    second: "%H:%M:%S",
                    minute: "%H:%M",
                    hour: "%H:%M",
                    day: "%e. %b",
                    week: "%e. %b",
                    month: "%b '%y",
                    year: "%Y"
                },
                endOnTick: !1,
                gridLineColor: "#C0C0C0",
                labels: Se,
                lineColor: "#C0D0E0",
                lineWidth: 1,
                minPadding: .01,
                maxPadding: .01,
                minorGridLineColor: "#E0E0E0",
                minorGridLineWidth: 1,
                minorTickColor: "#A0A0A0",
                minorTickLength: 2,
                minorTickPosition: "outside",
                startOfWeek: 1,
                startOnTick: !1,
                tickColor: "#C0D0E0",
                tickLength: 10,
                tickmarkPlacement: "between",
                tickPixelInterval: 100,
                tickPosition: "outside",
                tickWidth: 1,
                title: {align: "middle", style: {color: "#707070"}},
                type: "linear"
            },
            defaultYAxisOptions: {
                endOnTick: !0,
                gridLineWidth: 1,
                tickPixelInterval: 72,
                showLastLabel: !0,
                labels: {x: -8, y: 3},
                lineWidth: 0,
                maxPadding: .05,
                minPadding: .05,
                startOnTick: !0,
                tickWidth: 0,
                title: {rotation: 270, text: "Values"},
                stackLabels: {
                    enabled: !1, formatter: function () {
                        return w(this.total, -1)
                    }, style: Se.style
                }
            },
            defaultLeftAxisOptions: {labels: {x: -15, y: null}, title: {rotation: 270}},
            defaultRightAxisOptions: {labels: {x: 15, y: null}, title: {rotation: 90}},
            defaultBottomAxisOptions: {labels: {x: 0, y: null}, title: {rotation: 0}},
            defaultTopAxisOptions: {labels: {x: 0, y: -15}, title: {rotation: 0}},
            init: function (t, e) {
                var n = e.isX, i = this;
                i.horiz = t.inverted ? !n : n, i.isXAxis = n, i.coll = n ? "xAxis" : "yAxis", i.opposite = e.opposite, i.side = e.side || (i.horiz ? i.opposite ? 0 : 2 : i.opposite ? 1 : 3), i.setOptions(e);
                var o = this.options, r = o.type, a = "datetime" === r;
                i.labelFormatter = o.labels.formatter || i.defaultLabelFormatter, i.userOptions = e, i.minPixelPadding = 0, i.chart = t, i.reversed = o.reversed, i.zoomEnabled = o.zoomEnabled !== !1, i.categories = o.categories || "category" === r, i.names = [], i.isLog = "logarithmic" === r, i.isDatetimeAxis = a, i.isLinked = m(o.linkedTo), i.tickmarkOffset = i.categories && "between" === o.tickmarkPlacement && 1 === x(o.tickInterval, 1) ? .5 : 0, i.ticks = {}, i.labelEdge = [], i.minorTicks = {}, i.plotLinesAndBands = [], i.alternateBands = {}, i.len = 0, i.minRange = i.userMinRange = o.minRange || o.maxZoom, i.range = o.range, i.offset = o.offset || 0, i.stacks = {}, i.oldStacks = {}, i.max = null, i.min = null, i.crosshair = x(o.crosshair, g(t.options.tooltip.crosshairs)[n ? 0 : 1], !1);
                var s, l = i.options.events;
                -1 === he(i, t.axes) && (n && !this.isColorAxis ? t.axes.splice(t.xAxis.length, 0, i) : t.axes.push(i), t[i.coll].push(i)), i.series = i.series || [], t.inverted && n && i.reversed === W && (i.reversed = !0), i.removePlotBand = i.removePlotBandOrLine, i.removePlotLine = i.removePlotBandOrLine;
                for (s in l) ve(i, s, l[s]);
                i.isLog && (i.val2lin = p, i.lin2val = u)
            },
            setOptions: function (t) {
                this.options = r(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], r(G[this.coll], t));
            },
            defaultLabelFormatter: function () {
                var t, e, n = this.axis, i = this.value, o = n.categories, r = this.dateTimeLabelFormat,
                    a = G.lang.numericSymbols, s = a && a.length, l = n.options.labels.format,
                    c = n.isLog ? i : n.tickInterval;
                if (l) e = T(l, this); else if (o) e = i; else if (r) e = U(r, i); else if (s && c >= 1e3) for (; s-- && e === W;) t = Math.pow(1e3, s + 1), c >= t && null !== a[s] && (e = w(i / t, -1) + a[s]);
                return e === W && (e = kt(i) >= 1e4 ? w(i, 0) : w(i, -1, W, "")), e
            },
            getSeriesExtremes: function () {
                var t = this, e = t.chart;
                t.hasVisibleSeries = !1, t.dataMin = t.dataMax = t.ignoreMinPadding = t.ignoreMaxPadding = null, t.buildStacks && t.buildStacks(), me(t.series, function (n) {
                    if (n.visible || !e.options.chart.ignoreHiddenSeries) {
                        var i, o, r, a = n.options, s = a.threshold;
                        t.hasVisibleSeries = !0, t.isLog && 0 >= s && (s = null), t.isXAxis ? (i = n.xData, i.length && (t.dataMin = _t(x(t.dataMin, i[0]), P(i)), t.dataMax = wt(x(t.dataMax, i[0]), z(i)))) : (n.getExtremes(), r = n.dataMax, o = n.dataMin, m(o) && m(r) && (t.dataMin = _t(x(t.dataMin, o), o), t.dataMax = wt(x(t.dataMax, r), r)), m(s) && (t.dataMin >= s ? (t.dataMin = s, t.ignoreMinPadding = !0) : t.dataMax < s && (t.dataMax = s, t.ignoreMaxPadding = !0)))
                    }
                })
            },
            translate: function (t, e, n, i, o, r) {
                var a, s = this, l = 1, c = 0, p = i ? s.oldTransA : s.transA, u = i ? s.oldMin : s.min,
                    h = s.minPixelPadding, m = (s.options.ordinal || s.isLog && o) && s.lin2val;
                return p || (p = s.transA), n && (l *= -1, c = s.len), s.reversed && (l *= -1, c -= l * (s.sector || s.len)), e ? (t = t * l + c, t -= h, a = t / p + u, m && (a = s.lin2val(a))) : (m && (t = s.val2lin(t)), "between" === r && (r = .5), a = l * (t - u) * p + c + l * h + (d(r) ? p * r * s.pointRange : 0)), a
            },
            toPixels: function (t, e) {
                return this.translate(t, !1, !this.horiz, null, !0) + (e ? 0 : this.pos)
            },
            toValue: function (t, e) {
                return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, null, !0)
            },
            getPlotLinePath: function (t, e, n, i, o) {
                var r, a, s, l, c, d = this, p = d.chart, u = d.left, h = d.top,
                    m = n && p.oldChartHeight || p.chartHeight, f = n && p.oldChartWidth || p.chartWidth, g = d.transB;
                return o = x(o, d.translate(t, null, null, n)), r = s = vt(o + g), a = l = vt(m - o - g), isNaN(o) ? c = !0 : d.horiz ? (a = h, l = m - d.bottom, (u > r || r > u + d.width) && (c = !0)) : (r = u, s = f - d.right, (h > a || a > h + d.height) && (c = !0)), c && !i ? null : p.renderer.crispLine([te, r, a, ee, s, l], e || 1)
            },
            getLinearTickPositions: function (t, e, n) {
                var i, o, r = E(bt(e / t) * t), a = E(yt(n / t) * t), s = [];
                if (e === n && d(e)) return [e];
                for (i = r; a >= i && (s.push(i), i = E(i + t), i !== o);) o = i;
                return s
            },
            getMinorTickPositions: function () {
                var t, e, n, i = this, o = i.options, r = i.tickPositions, a = i.minorTickInterval, s = [];
                if (i.isLog) for (n = r.length, e = 1; n > e; e++) s = s.concat(i.getLogTickPositions(a, r[e - 1], r[e], !0)); else if (i.isDatetimeAxis && "auto" === o.minorTickInterval) s = s.concat(i.getTimeTicks(i.normalizeTimeTickInterval(a), i.min, i.max, o.startOfWeek)), s[0] < i.min && s.shift(); else for (t = i.min + (r[0] - i.min) % a; t <= i.max; t += a) s.push(t);
                return s
            },
            adjustForMinRange: function () {
                var t, e, n, i, o, r, a, s, l = this, c = l.options, d = l.min, p = l.max,
                    u = l.dataMax - l.dataMin >= l.minRange;
                if (l.isXAxis && l.minRange === W && !l.isLog && (m(c.min) || m(c.max) ? l.minRange = null : (me(l.series, function (t) {
                        for (o = t.xData, r = t.xIncrement ? 1 : o.length - 1, n = r; n > 0; n--) i = o[n] - o[n - 1], (e === W || e > i) && (e = i)
                    }), l.minRange = _t(5 * e, l.dataMax - l.dataMin))), p - d < l.minRange) {
                    var h = l.minRange;
                    t = (h - p + d) / 2, a = [d - t, x(c.min, d - t)], u && (a[2] = l.dataMin), d = z(a), s = [d + h, x(c.max, d + h)], u && (s[2] = l.dataMax), p = P(s), h > p - d && (a[0] = p - h, a[1] = x(c.min, p - h), d = z(a))
                }
                l.min = d, l.max = p
            },
            setAxisTranslation: function (t) {
                var e, n, i = this, o = i.max - i.min, r = i.axisPointRange || 0, a = 0, l = 0, c = i.linkedParent,
                    d = !!i.categories, p = i.transA;
                (i.isXAxis || d || r) && (c ? (a = c.minPointOffset, l = c.pointRangePadding) : me(i.series, function (t) {
                    var n = d ? 1 : i.isXAxis ? t.pointRange : i.axisPointRange || 0, c = t.options.pointPlacement,
                        p = t.closestPointRange;
                    n > o && (n = 0), r = wt(r, n), a = wt(a, s(c) ? 0 : n / 2), l = wt(l, "on" === c ? 0 : n), !t.noSharedTooltip && m(p) && (e = m(e) ? _t(e, p) : p)
                }), n = i.ordinalSlope && e ? i.ordinalSlope / e : 1, i.minPointOffset = a *= n, i.pointRangePadding = l *= n, i.pointRange = _t(r, o), i.closestPointRange = e), t && (i.oldTransA = p), i.translationSlope = i.transA = p = i.len / (o + l || 1), i.transB = i.horiz ? i.left : i.bottom, i.minPixelPadding = p * a
            },
            setTickPositions: function (t) {
                var e, n, i, o, r = this, a = r.chart, s = r.options, l = s.startOnTick, c = s.endOnTick, u = r.isLog,
                    h = r.isDatetimeAxis, f = r.isXAxis, g = r.isLinked, v = r.options.tickPositioner, b = s.maxPadding,
                    y = s.minPadding, w = s.tickInterval, _ = s.minTickInterval, k = s.tickPixelInterval,
                    S = r.categories;
                if (g ? (r.linkedParent = a[r.coll][s.linkedTo], n = r.linkedParent.getExtremes(), r.min = x(n.min, n.dataMin), r.max = x(n.max, n.dataMax), s.type !== r.linkedParent.options.type && K(11, 1)) : (r.min = x(r.userMin, s.min, r.dataMin), r.max = x(r.userMax, s.max, r.dataMax)), u && (!t && _t(r.min, x(r.dataMin, r.min)) <= 0 && K(10, 1), r.min = E(p(r.min)), r.max = E(p(r.max))), r.range && m(r.max) && (r.userMin = r.min = wt(r.min, r.max - r.range), r.userMax = r.max, r.range = null), r.beforePadding && r.beforePadding(), r.adjustForMinRange(), S || r.axisPointRange || r.usePercentage || g || !m(r.min) || !m(r.max) || (e = r.max - r.min, e && (m(s.min) || m(r.userMin) || !y || !(r.dataMin < 0) && r.ignoreMinPadding || (r.min -= e * y), m(s.max) || m(r.userMax) || !b || !(r.dataMax > 0) && r.ignoreMaxPadding || (r.max += e * b))), d(s.floor) && (r.min = wt(r.min, s.floor)), d(s.ceiling) && (r.max = _t(r.max, s.ceiling)), r.min === r.max || void 0 === r.min || void 0 === r.max ? r.tickInterval = 1 : g && !w && k === r.linkedParent.options.tickPixelInterval ? r.tickInterval = r.linkedParent.tickInterval : (r.tickInterval = x(w, S ? 1 : (r.max - r.min) * k / wt(r.len, k)), !m(w) && r.len < k && !this.isRadial && !this.isLog && !S && l && c && (o = !0, r.tickInterval /= 4)), f && !t && me(r.series, function (t) {
                        t.processData(r.min !== r.oldMin || r.max !== r.oldMax)
                    }), r.setAxisTranslation(!0), r.beforeSetTickPositions && r.beforeSetTickPositions(), r.postProcessTickInterval && (r.tickInterval = r.postProcessTickInterval(r.tickInterval)), r.pointRange && (r.tickInterval = wt(r.pointRange, r.tickInterval)), !w && r.tickInterval < _ && (r.tickInterval = _), h || u || w || (r.tickInterval = A(r.tickInterval, null, C(r.tickInterval), x(s.allowDecimals, !(r.tickInterval > 1 && r.tickInterval < 5 && r.max > 1e3 && r.max < 9999)))), r.minorTickInterval = "auto" === s.minorTickInterval && r.tickInterval ? r.tickInterval / 5 : s.minorTickInterval, r.tickPositions = i = s.tickPositions ? [].concat(s.tickPositions) : v && v.apply(r, [r.min, r.max]), i || (!r.ordinalPositions && (r.max - r.min) / r.tickInterval > wt(2 * r.len, 200) && K(19, !0), i = h ? r.getTimeTicks(r.normalizeTimeTickInterval(r.tickInterval, s.units), r.min, r.max, s.startOfWeek, r.ordinalPositions, r.closestPointRange, !0) : u ? r.getLogTickPositions(r.tickInterval, r.min, r.max) : r.getLinearTickPositions(r.tickInterval, r.min, r.max), o && i.splice(1, i.length - 2), r.tickPositions = i), !g) {
                    var T, j = i[0], P = i[i.length - 1], z = r.minPointOffset || 0;
                    l ? r.min = j : r.min - z > j && i.shift(), c ? r.max = P : r.max + z < P && i.pop(), 0 === i.length && m(j) && i.push((P + j) / 2), 1 === i.length && (T = kt(r.max) > 1e13 ? 1 : .001, r.min -= T, r.max += T)
                }
            },
            setMaxTicks: function () {
                var t = this.chart, e = t.maxTicks || {}, n = this.tickPositions,
                    i = this._maxTicksKey = [this.coll, this.pos, this.len].join("-");
                !this.isLinked && !this.isDatetimeAxis && n && n.length > (e[i] || 0) && this.options.alignTicks !== !1 && (e[i] = n.length), t.maxTicks = e
            },
            adjustTickAmount: function () {
                var t = this, e = t.chart, n = t._maxTicksKey, i = t.tickPositions, o = e.maxTicks;
                if (o && o[n] && !t.isDatetimeAxis && !t.categories && !t.isLinked && t.options.alignTicks !== !1 && this.min !== W) {
                    var r, a = t.tickAmount, s = i.length;
                    if (t.tickAmount = r = o[n], r > s) {
                        for (; i.length < r;) i.push(E(i[i.length - 1] + t.tickInterval));
                        t.transA *= (s - 1) / (r - 1), t.max = i[i.length - 1]
                    }
                    m(a) && r !== a && (t.isDirty = !0)
                }
            },
            setScale: function () {
                var t, e, n, i, o = this, r = o.stacks;
                if (o.oldMin = o.min, o.oldMax = o.max, o.oldAxisLength = o.len, o.setAxisSize(), i = o.len !== o.oldAxisLength, me(o.series, function (t) {
                        (t.isDirtyData || t.isDirty || t.xAxis.isDirty) && (n = !0)
                    }), i || n || o.isLinked || o.forceRedraw || o.userMin !== o.oldUserMin || o.userMax !== o.oldUserMax) {
                    if (!o.isXAxis) for (t in r) for (e in r[t]) r[t][e].total = null, r[t][e].cum = 0;
                    o.forceRedraw = !1, o.getSeriesExtremes(), o.setTickPositions(), o.oldUserMin = o.userMin, o.oldUserMax = o.userMax, o.isDirty || (o.isDirty = i || o.min !== o.oldMin || o.max !== o.oldMax)
                } else if (!o.isXAxis) {
                    o.oldStacks && (r = o.stacks = o.oldStacks);
                    for (t in r) for (e in r[t]) r[t][e].cum = r[t][e].total
                }
                o.setMaxTicks()
            },
            setExtremes: function (t, e, n, i, r) {
                var a = this, s = a.chart;
                n = x(n, !0), r = o(r, {min: t, max: e}), ye(a, "setExtremes", r, function () {
                    a.userMin = t, a.userMax = e, a.eventArgs = r, a.isDirtyExtremes = !0, n && s.redraw(i)
                })
            },
            zoom: function (t, e) {
                var n = this.dataMin, i = this.dataMax, o = this.options;
                return this.allowZoomOutside || (m(n) && t <= _t(n, x(o.min, n)) && (t = W), m(i) && e >= wt(i, x(o.max, i)) && (e = W)), this.displayBtn = t !== W || e !== W, this.setExtremes(t, e, !1, W, {trigger: "zoom"}), !0
            },
            setAxisSize: function () {
                var t = this.chart, e = this.options, n = e.offsetLeft || 0, i = e.offsetRight || 0, o = this.horiz,
                    r = x(e.width, t.plotWidth - n + i), a = x(e.height, t.plotHeight), s = x(e.top, t.plotTop),
                    l = x(e.left, t.plotLeft + n), c = /%$/;
                c.test(a) && (a = parseInt(a, 10) / 100 * t.plotHeight), c.test(s) && (s = parseInt(s, 10) / 100 * t.plotHeight + t.plotTop), this.left = l, this.top = s, this.width = r, this.height = a, this.bottom = t.chartHeight - a - s, this.right = t.chartWidth - r - l, this.len = wt(o ? r : a, 0), this.pos = o ? l : s
            },
            getExtremes: function () {
                var t = this, e = t.isLog;
                return {
                    min: e ? E(u(t.min)) : t.min,
                    max: e ? E(u(t.max)) : t.max,
                    dataMin: t.dataMin,
                    dataMax: t.dataMax,
                    userMin: t.userMin,
                    userMax: t.userMax
                }
            },
            getThreshold: function (t) {
                var e = this, n = e.isLog, i = n ? u(e.min) : e.min, o = n ? u(e.max) : e.max;
                return i > t || null === t ? t = i : t > o && (t = o), e.translate(t, 0, 1, 0, 1)
            },
            autoLabelAlign: function (t) {
                var e, n = (x(t, 0) - 90 * this.side + 720) % 360;
                return e = n > 15 && 165 > n ? "right" : n > 195 && 345 > n ? "left" : "center"
            },
            getOffset: function () {
                var t, e, n, i, o, r, a, s, l, c, d, p, u, h, f, g = this, v = g.chart, b = v.renderer, y = g.options,
                    w = g.tickPositions, _ = g.ticks, k = g.horiz, S = g.side, T = v.inverted ? [1, 0, 3, 2][S] : S,
                    C = 0, A = 0, j = y.title, P = y.labels, z = 0, L = v.axisOffset, M = v.clipOffset,
                    E = [-1, 1, 1, -1][S], I = 1, N = x(P.maxStaggerLines, 5);
                if (g.hasData = t = g.hasVisibleSeries || m(g.min) && m(g.max) && !!w, g.showAxis = e = t || x(y.showEmpty, !0), g.staggerLines = g.horiz && P.staggerLines, g.axisGroup || (g.gridGroup = b.g("grid").attr({zIndex: y.gridZIndex || 1}).add(), g.axisGroup = b.g("axis").attr({zIndex: y.zIndex || 2}).add(), g.labelGroup = b.g("axis-labels").attr({zIndex: P.zIndex || 7}).addClass(Jt + g.coll.toLowerCase() + "-labels").add()), t || g.isLinked) {
                    if (g.labelAlign = x(P.align || g.autoLabelAlign(P.rotation)), me(w, function (t) {
                            _[t] ? _[t].addLabel() : _[t] = new R(g, t)
                        }), g.horiz && !g.staggerLines && N && !P.rotation) {
                        for (a = g.reversed ? [].concat(w).reverse() : w; N > I;) {
                            for (s = [], l = !1, r = 0; r < a.length; r++) c = a[r], d = _[c].label && _[c].label.getBBox(), u = d ? d.width : 0, h = r % I, u && (p = g.translate(c), s[h] !== W && p < s[h] && (l = !0), s[h] = p + u);
                            if (!l) break;
                            I++
                        }
                        I > 1 && (g.staggerLines = I)
                    }
                    me(w, function (t) {
                        (0 === S || 2 === S || {
                            1: "left",
                            3: "right"
                        }[S] === g.labelAlign) && (z = wt(_[t].getLabelSize(), z))
                    }), g.staggerLines && (z *= g.staggerLines, g.labelOffset = z)
                } else for (o in _) _[o].destroy(), delete _[o];
                j && j.text && j.enabled !== !1 && (g.axisTitle || (g.axisTitle = b.text(j.text, 0, 0, j.useHTML).attr({
                    zIndex: 7,
                    rotation: j.rotation || 0,
                    align: j.textAlign || {low: "left", middle: "center", high: "right"}[j.align]
                }).addClass(Jt + this.coll.toLowerCase() + "-title").css(j.style).add(g.axisGroup), g.axisTitle.isNew = !0), e && (C = g.axisTitle.getBBox()[k ? "height" : "width"], n = j.offset, A = m(n) ? 0 : x(j.margin, k ? 5 : 10)), g.axisTitle[e ? "show" : "hide"]()), g.offset = E * x(y.offset, L[S]), f = 2 === S ? g.tickBaseline : 0, i = z + A + (z && E * (k ? x(P.y, g.tickBaseline + 8) : P.x) - f), g.axisTitleMargin = x(n, i), L[S] = wt(L[S], g.axisTitleMargin + C + E * g.offset, i), M[T] = wt(M[T], 2 * bt(y.lineWidth / 2))
            },
            getLinePath: function (t) {
                var e = this.chart, n = this.opposite, i = this.offset, o = this.horiz,
                    r = this.left + (n ? this.width : 0) + i,
                    a = e.chartHeight - this.bottom - (n ? this.height : 0) + i;
                return n && (t *= -1), e.renderer.crispLine([te, o ? this.left : r, o ? a : this.top, ee, o ? e.chartWidth - this.right : r, o ? a : e.chartHeight - this.bottom], t)
            },
            getTitlePosition: function () {
                var t = this.horiz, e = this.left, n = this.top, i = this.len, o = this.options.title, r = t ? e : n,
                    s = this.opposite, l = this.offset, c = a(o.style.fontSize || 12),
                    d = {low: r + (t ? 0 : i), middle: r + i / 2, high: r + (t ? i : 0)}[o.align],
                    p = (t ? n + this.height : e) + (t ? 1 : -1) * (s ? -1 : 1) * this.axisTitleMargin + (2 === this.side ? c : 0);
                return {
                    x: t ? d : p + (s ? this.width : 0) + l + (o.x || 0),
                    y: t ? p - (s ? this.height : 0) + l : d + (o.y || 0)
                }
            },
            render: function () {
                var t, e, n, i, o = this, r = o.horiz, a = o.reversed, s = o.chart, l = s.renderer, c = o.options,
                    d = o.isLog, p = o.isLinked, h = o.tickPositions, f = o.axisTitle, g = o.ticks, x = o.minorTicks,
                    v = o.alternateBands, b = c.stackLabels, y = c.alternateGridColor, w = o.tickmarkOffset,
                    _ = c.lineWidth, k = s.hasRendered, S = k && m(o.oldMin) && !isNaN(o.oldMin), T = o.hasData,
                    C = o.showAxis, A = c.labels.overflow, j = o.justifyLabels = r && A !== !1;
                o.labelEdge.length = 0, o.justifyToPlot = "justify" === A, me([g, x, v], function (t) {
                    var e;
                    for (e in t) t[e].isActive = !1
                }), (T || p) && (o.minorTickInterval && !o.categories && me(o.getMinorTickPositions(), function (t) {
                    x[t] || (x[t] = new R(o, t, "minor")), S && x[t].isNew && x[t].render(null, !0), x[t].render(null, !1, 1)
                }), h.length && (t = h.slice(), (r && a || !r && !a) && t.reverse(), j && (t = t.slice(1).concat([t[0]])), me(t, function (e, n) {
                    j && (n = n === t.length - 1 ? 0 : n + 1), (!p || e >= o.min && e <= o.max) && (g[e] || (g[e] = new R(o, e)), S && g[e].isNew && g[e].render(n, !0, .1), g[e].render(n))
                }), w && 0 === o.min && (g[-1] || (g[-1] = new R(o, -1, null, !0)), g[-1].render(-1))), y && me(h, function (t, e) {
                    e % 2 === 0 && t < o.max && (v[t] || (v[t] = new le.PlotLineOrBand(o)), n = t + w, i = h[e + 1] !== W ? h[e + 1] + w : o.max, v[t].options = {
                        from: d ? u(n) : n,
                        to: d ? u(i) : i,
                        color: y
                    }, v[t].render(), v[t].isActive = !0)
                }), o._addedPlotLB || (me((c.plotLines || []).concat(c.plotBands || []), function (t) {
                    o.addPlotBandOrLine(t)
                }), o._addedPlotLB = !0)), me([g, x, v], function (t) {
                    var e, n, i = [], o = V ? V.duration || 500 : 0, r = function () {
                        for (n = i.length; n--;) t[i[n]] && !t[i[n]].isActive && (t[i[n]].destroy(), delete t[i[n]])
                    };
                    for (e in t) t[e].isActive || (t[e].render(e, !1, 0), t[e].isActive = !1, i.push(e));
                    t !== v && s.hasRendered && o ? o && setTimeout(r, o) : r()
                }), _ && (e = o.getLinePath(_), o.axisLine ? o.axisLine.animate({d: e}) : o.axisLine = l.path(e).attr({
                    stroke: c.lineColor,
                    "stroke-width": _,
                    zIndex: 7
                }).add(o.axisGroup), o.axisLine[C ? "show" : "hide"]()), f && C && (f[f.isNew ? "attr" : "animate"](o.getTitlePosition()), f.isNew = !1), b && b.enabled && o.renderStackTotals(), o.isDirty = !1
            },
            redraw: function () {
                this.render(), me(this.plotLinesAndBands, function (t) {
                    t.render()
                }), me(this.series, function (t) {
                    t.isDirty = !0
                })
            },
            destroy: function (t) {
                var e, n, i = this, o = i.stacks, r = i.plotLinesAndBands;
                t || be(i);
                for (e in o) L(o[e]), o[e] = null;
                for (me([i.ticks, i.minorTicks, i.alternateBands], function (t) {
                    L(t)
                }), n = r.length; n--;) r[n].destroy();
                me(["stackTotalGroup", "axisLine", "axisTitle", "axisGroup", "cross", "gridGroup", "labelGroup"], function (t) {
                    i[t] && (i[t] = i[t].destroy())
                }), this.cross && this.cross.destroy()
            },
            drawCrosshair: function (t, e) {
                if (this.crosshair) {
                    if ((m(e) || !x(this.crosshair.snap, !0)) === !1) return void this.hideCrosshair();
                    var n, i, o = this.crosshair, r = o.animation;
                    if (x(o.snap, !0) ? m(e) && (i = this.chart.inverted != this.horiz ? e.plotX : this.len - e.plotY) : i = this.horiz ? t.chartX - this.pos : this.len - t.chartY + this.pos, n = this.isRadial ? this.getPlotLinePath(this.isXAxis ? e.x : x(e.stackY, e.y)) : this.getPlotLinePath(null, null, null, null, i), null === n) return void this.hideCrosshair();
                    if (this.cross) this.cross.attr({visibility: Zt})[r ? "animate" : "attr"]({d: n}, r); else {
                        var a = {"stroke-width": o.width || 1, stroke: o.color || "#C0C0C0", zIndex: o.zIndex || 2};
                        o.dashStyle && (a.dashstyle = o.dashStyle), this.cross = this.chart.renderer.path(n).attr(a).add()
                    }
                }
            },
            hideCrosshair: function () {
                this.cross && this.cross.hide()
            }
        }, o(q.prototype, Q), q.prototype.getTimeTicks = function (t, e, n, i) {
            var r, a, s = [], l = {}, c = G.global.useUTC, d = new tt(e - nt), p = t.unitRange, u = t.count;
            if (m(e)) {
                p >= Z.second && (d.setMilliseconds(0), d.setSeconds(p >= Z.minute ? 0 : u * bt(d.getSeconds() / u))), p >= Z.minute && d[ct](p >= Z.hour ? 0 : u * bt(d[it]() / u)), p >= Z.hour && d[dt](p >= Z.day ? 0 : u * bt(d[ot]() / u)), p >= Z.day && d[pt](p >= Z.month ? 1 : u * bt(d[at]() / u)), p >= Z.month && (d[ut](p >= Z.year ? 0 : u * bt(d[st]() / u)), a = d[lt]()), p >= Z.year && (a -= a % u, d[ht](a)), p === Z.week && d[pt](d[at]() - d[rt]() + x(i, 1)), r = 1, nt && (d = new tt(d.getTime() + nt)), a = d[lt]();
                for (var h = d.getTime(), f = d[st](), g = d[at](), v = (Z.day + (c ? nt : 60 * d.getTimezoneOffset() * 1e3)) % Z.day; n > h;) s.push(h), p === Z.year ? h = et(a + r * u, 0) : p === Z.month ? h = et(a, f + r * u) : c || p !== Z.day && p !== Z.week ? h += p * u : h = et(a, f, g + r * u * (p === Z.day ? 1 : 7)), r++;
                s.push(h), me(fe(s, function (t) {
                    return p <= Z.hour && t % Z.day === v
                }), function (t) {
                    l[t] = "day"
                })
            }
            return s.info = o(t, {higherRanks: l, totalRange: p * u}), s
        }, q.prototype.normalizeTimeTickInterval = function (t, e) {
            var n, i,
                o = e || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]],
                r = o[o.length - 1], a = Z[r[0]], s = r[1];
            for (i = 0; i < o.length; i++) if (r = o[i], a = Z[r[0]], s = r[1], o[i + 1]) {
                var l = (a * s[s.length - 1] + Z[o[i + 1][0]]) / 2;
                if (l >= t) break
            }
            return a === Z.year && 5 * a > t && (s = [1, 2, 5]), n = A(t / a, s, "year" === r[0] ? wt(C(t / a), 1) : 1), {
                unitRange: a,
                count: n,
                unitName: r[0]
            }
        }, q.prototype.getLogTickPositions = function (t, e, n, i) {
            var o = this, r = o.options, a = o.len, s = [];
            if (i || (o._minorAutoInterval = null), t >= .5) t = vt(t), s = o.getLinearTickPositions(t, e, n); else if (t >= .08) {
                var l, c, d, h, m, f, g, v = bt(e);
                for (l = t > .3 ? [1, 2, 4] : t > .15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9], c = v; n + 1 > c && !g; c++) for (h = l.length, d = 0; h > d && !g; d++) m = p(u(c) * l[d]), m > e && (!i || n >= f) && f !== W && s.push(f), f > n && (g = !0), f = m
            } else {
                var b = u(e), y = u(n), w = r[i ? "minorTickInterval" : "tickInterval"], _ = "auto" === w ? null : w,
                    k = r.tickPixelInterval / (i ? 5 : 1), S = i ? a / o.tickPositions.length : a;
                t = x(_, o._minorAutoInterval, (y - b) * k / (S || 1)), t = A(t, null, C(t)), s = xe(o.getLinearTickPositions(t, b, y), p), i || (o._minorAutoInterval = t / 5)
            }
            return i || (o.tickInterval = t), s
        };
        var Oe = le.Tooltip = function () {
            this.init.apply(this, arguments)
        };
        Oe.prototype = {
            init: function (t, e) {
                var n = e.borderWidth, i = e.style, o = a(i.padding);
                this.chart = t, this.options = e, this.crosshairs = [], this.now = {
                    x: 0,
                    y: 0
                }, this.isHidden = !0, this.label = t.renderer.label("", 0, 0, e.shape || "callout", null, null, e.useHTML, null, "tooltip").attr({
                    padding: o,
                    fill: e.backgroundColor,
                    "stroke-width": n,
                    r: e.borderRadius,
                    zIndex: 8
                }).css(i).css({padding: 0}).add().attr({y: -9999}), Bt || this.label.shadow(e.shadow), this.shared = e.shared
            }, destroy: function () {
                this.label && (this.label = this.label.destroy()), clearTimeout(this.hideTimer), clearTimeout(this.tooltipTimeout)
            }, move: function (t, e, n, i) {
                var r = this, a = r.now,
                    s = r.options.animation !== !1 && !r.isHidden && (kt(t - a.x) > 1 || kt(e - a.y) > 1),
                    l = r.followPointer || r.len > 1;
                o(a, {
                    x: s ? (2 * a.x + t) / 3 : t,
                    y: s ? (a.y + e) / 2 : e,
                    anchorX: l ? W : s ? (2 * a.anchorX + n) / 3 : n,
                    anchorY: l ? W : s ? (a.anchorY + i) / 2 : i
                }), r.label.attr(a), s && (clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () {
                    r && r.move(t, e, n, i)
                }, 32))
            }, hide: function (t) {
                var e, n = this;
                clearTimeout(this.hideTimer), this.isHidden || (e = this.chart.hoverPoints, this.hideTimer = setTimeout(function () {
                    n.label.fadeOut(), n.isHidden = !0
                }, x(t, this.options.hideDelay, 500)), e && me(e, function (t) {
                    t.setState()
                }), this.chart.hoverPoints = null)
            }, getAnchor: function (t, e) {
                var n, i, o = this.chart, r = o.inverted, a = o.plotTop, s = 0, l = 0;
                return t = g(t), n = t[0].tooltipPos, this.followPointer && e && (e.chartX === W && (e = o.pointer.normalize(e)), n = [e.chartX - o.plotLeft, e.chartY - a]), n || (me(t, function (t) {
                    i = t.series.yAxis, s += t.plotX, l += (t.plotLow ? (t.plotLow + t.plotHigh) / 2 : t.plotY) + (!r && i ? i.top - a : 0)
                }), s /= t.length, l /= t.length, n = [r ? o.plotWidth - l : s, this.shared && !r && t.length > 1 && e ? e.chartY - a : r ? o.plotHeight - s : l]), xe(n, vt)
            }, getPosition: function (t, e, n) {
                var i, o = this.chart, r = this.distance, a = {}, s = ["y", o.chartHeight, e, n.plotY + o.plotTop],
                    l = ["x", o.chartWidth, t, n.plotX + o.plotLeft],
                    c = n.ttBelow || o.inverted && !n.negative || !o.inverted && n.negative, d = function (t, e, n, i) {
                        var o = i - r > n, s = e > i + r + n, l = i - r - n, d = i + r;
                        if (c && s) a[t] = d; else if (!c && o) a[t] = l; else if (o) a[t] = l; else {
                            if (!s) return !1;
                            a[t] = d
                        }
                    }, p = function (t, e, n, i) {
                        return r > i || i > e - r ? !1 : void(n / 2 > i ? a[t] = 1 : i > e - n / 2 ? a[t] = e - n - 2 : a[t] = i - n / 2)
                    }, u = function (t) {
                        var e = s;
                        s = l, l = e, i = t
                    }, h = function () {
                        d.apply(0, s) !== !1 ? p.apply(0, l) !== !1 || i || (u(!0), h()) : i ? a.x = a.y = 0 : (u(!0), h())
                    };
                return (o.inverted || this.len > 1) && u(), h(), a
            }, defaultFormatter: function (t) {
                var e, n = this.points || g(this), i = n[0].series;
                return e = [t.tooltipHeaderFormatter(n[0])], me(n, function (t) {
                    i = t.series, e.push(i.tooltipFormatter && i.tooltipFormatter(t) || t.point.tooltipFormatter(i.tooltipOptions.pointFormat))
                }), e.push(t.options.footerFormat || ""), e.join("")
            }, refresh: function (t, e) {
                var n, i, o, r, a, s, l = this, c = l.chart, d = l.label, p = l.options, u = {}, h = [],
                    m = p.formatter || l.defaultFormatter, f = c.hoverPoints, v = l.shared;
                clearTimeout(this.hideTimer), l.followPointer = g(t)[0].series.tooltipOptions.followPointer, o = l.getAnchor(t, e), n = o[0], i = o[1], !v || t.series && t.series.noSharedTooltip ? u = t.getLabelConfig() : (c.hoverPoints = t, f && me(f, function (t) {
                    t.setState()
                }), me(t, function (t) {
                    t.setState(oe), h.push(t.getLabelConfig())
                }), u = {
                    x: t[0].category,
                    y: t[0].y
                }, u.points = h, this.len = h.length, t = t[0]), r = m.call(u, l), s = t.series, this.distance = x(s.tooltipOptions.distance, 16), r === !1 ? this.hide() : (l.isHidden && (ke(d), d.attr("opacity", 1).show()), d.attr({text: r}), a = p.borderColor || t.color || s.color || "#606060", d.attr({stroke: a}), l.updatePosition({
                    plotX: n,
                    plotY: i,
                    negative: t.negative,
                    ttBelow: t.ttBelow
                }), this.isHidden = !1), ye(c, "tooltipRefresh", {
                    text: r,
                    x: n + c.plotLeft,
                    y: i + c.plotTop,
                    borderColor: a
                })
            }, updatePosition: function (t) {
                var e = this.chart, n = this.label,
                    i = (this.options.positioner || this.getPosition).call(this, n.width, n.height, t);
                this.move(vt(i.x), vt(i.y), t.plotX + e.plotLeft, t.plotY + e.plotTop)
            }, tooltipHeaderFormatter: function (t) {
                var e, n = t.series, i = n.tooltipOptions, o = i.dateTimeLabelFormats, r = i.xDateFormat, a = n.xAxis,
                    s = a && "datetime" === a.options.type && d(t.key), l = i.headerFormat,
                    c = a && a.closestPointRange;
                if (s && !r) {
                    if (c) {
                        for (e in Z) if (Z[e] >= c || Z[e] <= Z.day && t.key % Z[e] > 0) {
                            r = o[e];
                            break
                        }
                    } else r = o.day;
                    r = r || o.year
                }
                return s && r && (l = l.replace("{point.key}", "{point.key:" + r + "}")), T(l, {point: t, series: n})
            }
        };
        var Be;
        X = ft.documentElement.ontouchstart !== W;
        var Re = le.Pointer = function (t, e) {
            this.init(t, e)
        };
        if (Re.prototype = {
                init: function (t, e) {
                    var n, i, o = e.chart, r = o.events, a = Bt ? "" : o.zoomType, s = t.inverted;
                    this.options = e, this.chart = t, this.zoomX = n = /x/.test(a), this.zoomY = i = /y/.test(a), this.zoomHor = n && !s || i && s, this.zoomVert = i && !s || n && s, this.hasZoom = n || i, this.runChartClick = r && !!r.click, this.pinchDown = [], this.lastValidTouch = {}, le.Tooltip && e.tooltip.enabled && (t.tooltip = new Oe(t, e.tooltip), this.followTouchMove = e.tooltip.followTouchMove), this.setDOMEvents()
                }, normalize: function (t, e) {
                    var n, i, r;
                    return t = t || window.event, t = we(t), t.target || (t.target = t.srcElement), r = t.touches ? t.touches.length ? t.touches.item(0) : t.changedTouches[0] : t, e || (this.chartPosition = e = ge(this.chart.container)), r.pageX === W ? (n = wt(t.x, t.clientX - e.left), i = t.y) : (n = r.pageX - e.left, i = r.pageY - e.top), o(t, {
                        chartX: vt(n),
                        chartY: vt(i)
                    })
                }, getCoordinates: function (t) {
                    var e = {xAxis: [], yAxis: []};
                    return me(this.chart.axes, function (n) {
                        e[n.isXAxis ? "xAxis" : "yAxis"].push({
                            axis: n,
                            value: n.toValue(t[n.horiz ? "chartX" : "chartY"])
                        })
                    }), e
                }, getIndex: function (t) {
                    var e = this.chart;
                    return e.inverted ? e.plotHeight + e.plotTop - t.chartY : t.chartX - e.plotLeft
                }, runPointActions: function (t) {
                    var e, n, i, o, r, a, s = this, l = s.chart, c = l.series, d = l.tooltip, p = l.hoverPoint,
                        u = l.hoverSeries, h = l.chartWidth, m = s.getIndex(t);
                    if (d && s.options.tooltip.shared && (!u || !u.noSharedTooltip)) {
                        for (i = [], o = c.length, r = 0; o > r; r++) c[r].visible && c[r].options.enableMouseTracking !== !1 && !c[r].noSharedTooltip && c[r].singularTooltips !== !0 && c[r].tooltipPoints.length && (n = c[r].tooltipPoints[m], n && n.series && (n._dist = kt(m - n.clientX), h = _t(h, n._dist), i.push(n)));
                        for (o = i.length; o--;) i[o]._dist > h && i.splice(o, 1);
                        i.length && i[0].clientX !== s.hoverX && (d.refresh(i, t), s.hoverX = i[0].clientX)
                    }
                    e = u && u.tooltipOptions.followPointer, u && u.tracker && !e ? (n = u.tooltipPoints[m], n && n !== p && n.onMouseOver(t)) : d && e && !d.isHidden && (a = d.getAnchor([{}], t), d.updatePosition({
                        plotX: a[0],
                        plotY: a[1]
                    })), d && !s._onDocumentMouseMove && (s._onDocumentMouseMove = function (t) {
                        Ft[Be] && Ft[Be].pointer.onDocumentMouseMove(t)
                    }, ve(ft, "mousemove", s._onDocumentMouseMove)), me(l.axes, function (e) {
                        e.drawCrosshair(t, x(n, p))
                    })
                }, reset: function (t, e) {
                    var n = this, i = n.chart, o = i.hoverSeries, r = i.hoverPoint, a = i.tooltip,
                        s = a && a.shared ? i.hoverPoints : r;
                    t = t && a && s, t && g(s)[0].plotX === W && (t = !1), t ? (a.refresh(s), r && r.setState(r.state, !0)) : (r && r.onMouseOut(), o && o.onMouseOut(), a && a.hide(e), n._onDocumentMouseMove && (be(ft, "mousemove", n._onDocumentMouseMove), n._onDocumentMouseMove = null), me(i.axes, function (t) {
                        t.hideCrosshair()
                    }), n.hoverX = null)
                }, scaleGroups: function (t, e) {
                    var n, i = this.chart;
                    me(i.series, function (o) {
                        n = t || o.getPlotBox(), o.xAxis && o.xAxis.zoomEnabled && (o.group.attr(n), o.markerGroup && (o.markerGroup.attr(n), o.markerGroup.clip(e ? i.clipRect : null)), o.dataLabelsGroup && o.dataLabelsGroup.attr(n))
                    }), i.clipRect.attr(e || i.clipBox)
                }, dragStart: function (t) {
                    var e = this.chart;
                    e.mouseIsDown = t.type, e.cancelClick = !1, e.mouseDownX = this.mouseDownX = t.chartX, e.mouseDownY = this.mouseDownY = t.chartY
                }, drag: function (t) {
                    var e, n, i = this.chart, o = i.options.chart, r = t.chartX, a = t.chartY, s = this.zoomHor,
                        l = this.zoomVert, c = i.plotLeft, d = i.plotTop, p = i.plotWidth, u = i.plotHeight,
                        h = this.mouseDownX, m = this.mouseDownY, f = o.panKey && t[o.panKey + "Key"];
                    c > r ? r = c : r > c + p && (r = c + p), d > a ? a = d : a > d + u && (a = d + u), this.hasDragged = Math.sqrt(Math.pow(h - r, 2) + Math.pow(m - a, 2)), this.hasDragged > 10 && (e = i.isInsidePlot(h - c, m - d), i.hasCartesianSeries && (this.zoomX || this.zoomY) && e && !f && (this.selectionMarker || (this.selectionMarker = i.renderer.rect(c, d, s ? 1 : p, l ? 1 : u, 0).attr({
                        fill: o.selectionMarkerFill || "rgba(69,114,167,0.25)",
                        zIndex: 7
                    }).add())), this.selectionMarker && s && (n = r - h, this.selectionMarker.attr({
                        width: kt(n),
                        x: (n > 0 ? 0 : n) + h
                    })), this.selectionMarker && l && (n = a - m, this.selectionMarker.attr({
                        height: kt(n),
                        y: (n > 0 ? 0 : n) + m
                    })), e && !this.selectionMarker && o.panning && i.pan(t, o.panning))
                }, drop: function (t) {
                    var e = this.chart, n = this.hasPinched;
                    if (this.selectionMarker) {
                        var i, r = {xAxis: [], yAxis: [], originalEvent: t.originalEvent || t},
                            a = this.selectionMarker, s = a.attr ? a.attr("x") : a.x, l = a.attr ? a.attr("y") : a.y,
                            c = a.attr ? a.attr("width") : a.width, d = a.attr ? a.attr("height") : a.height;
                        (this.hasDragged || n) && (me(e.axes, function (e) {
                            if (e.zoomEnabled) {
                                var n = e.horiz, o = "touchend" === t.type ? e.minPixelPadding : 0,
                                    a = e.toValue((n ? s : l) + o), p = e.toValue((n ? s + c : l + d) - o);
                                isNaN(a) || isNaN(p) || (r[e.coll].push({
                                    axis: e,
                                    min: _t(a, p),
                                    max: wt(a, p)
                                }), i = !0)
                            }
                        }), i && ye(e, "selection", r, function (t) {
                            e.zoom(o(t, n ? {animation: !1} : null))
                        })), this.selectionMarker = this.selectionMarker.destroy(), n && this.scaleGroups()
                    }
                    e && (v(e.container, {cursor: e._cursor}), e.cancelClick = this.hasDragged > 10, e.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
                }, onContainerMouseDown: function (t) {
                    t = this.normalize(t), t.preventDefault && t.preventDefault(), this.dragStart(t)
                }, onDocumentMouseUp: function (t) {
                    Ft[Be] && Ft[Be].pointer.drop(t)
                }, onDocumentMouseMove: function (t) {
                    var e = this.chart, n = this.chartPosition, i = e.hoverSeries;
                    t = this.normalize(t, n), n && i && !this.inClass(t.target, "highcharts-tracker") && !e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) && this.reset()
                }, onContainerMouseLeave: function () {
                    var t = Ft[Be];
                    t && (t.pointer.reset(), t.pointer.chartPosition = null)
                }, onContainerMouseMove: function (t) {
                    var e = this.chart;
                    Be = e.index, t = this.normalize(t), t.returnValue = !1, "mousedown" === e.mouseIsDown && this.drag(t), !this.inClass(t.target, "highcharts-tracker") && !e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) || e.openMenu || this.runPointActions(t)
                }, inClass: function (t, e) {
                    for (var n; t;) {
                        if (n = f(t, "class")) {
                            if (-1 !== n.indexOf(e)) return !0;
                            if (-1 !== n.indexOf(Jt + "container")) return !1
                        }
                        t = t.parentNode
                    }
                }, onTrackerMouseOut: function (t) {
                    var e = this.chart.hoverSeries, n = t.relatedTarget || t.toElement,
                        i = n && n.point && n.point.series;
                    !e || e.options.stickyTracking || this.inClass(n, Jt + "tooltip") || i === e || e.onMouseOut()
                }, onContainerClick: function (t) {
                    var e = this.chart, n = e.hoverPoint, i = e.plotLeft, r = e.plotTop;
                    t = this.normalize(t), t.cancelBubble = !0, e.cancelClick || (n && this.inClass(t.target, Jt + "tracker") ? (ye(n.series, "click", o(t, {point: n})), e.hoverPoint && n.firePointEvent("click", t)) : (o(t, this.getCoordinates(t)), e.isInsidePlot(t.chartX - i, t.chartY - r) && ye(e, "click", t)))
                }, setDOMEvents: function () {
                    var t = this, e = t.chart.container;
                    e.onmousedown = function (e) {
                        t.onContainerMouseDown(e)
                    }, e.onmousemove = function (e) {
                        t.onContainerMouseMove(e)
                    }, e.onclick = function (e) {
                        t.onContainerClick(e)
                    }, ve(e, "mouseleave", t.onContainerMouseLeave), 1 === Wt && ve(ft, "mouseup", t.onDocumentMouseUp), X && (e.ontouchstart = function (e) {
                        t.onContainerTouchStart(e)
                    }, e.ontouchmove = function (e) {
                        t.onContainerTouchMove(e)
                    }, 1 === Wt && ve(ft, "touchend", t.onDocumentTouchEnd))
                }, destroy: function () {
                    var t;
                    be(this.chart.container, "mouseleave", this.onContainerMouseLeave), Wt || (be(ft, "mouseup", this.onDocumentMouseUp), be(ft, "touchend", this.onDocumentTouchEnd)), clearInterval(this.tooltipTimeout);
                    for (t in this) this[t] = null
                }
            }, o(le.Pointer.prototype, {
                pinchTranslate: function (t, e, n, i, o, r) {
                    (this.zoomHor || this.pinchHor) && this.pinchTranslateDirection(!0, t, e, n, i, o, r), (this.zoomVert || this.pinchVert) && this.pinchTranslateDirection(!1, t, e, n, i, o, r)
                }, pinchTranslateDirection: function (t, e, n, i, o, r, a, s) {
                    var l, c, d, p, u, h, m = this.chart, f = t ? "x" : "y", g = t ? "X" : "Y", x = "chart" + g,
                        v = t ? "width" : "height", b = m["plot" + (t ? "Left" : "Top")], y = s || 1, w = m.inverted,
                        _ = m.bounds[t ? "h" : "v"], k = 1 === e.length, S = e[0][x], T = n[0][x], C = !k && e[1][x],
                        A = !k && n[1][x], j = function () {
                            !k && kt(S - C) > 20 && (y = s || kt(T - A) / kt(S - C)), d = (b - T) / y + S, l = m["plot" + (t ? "Width" : "Height")] / y
                        };
                    j(), c = d, c < _.min ? (c = _.min, p = !0) : c + l > _.max && (c = _.max - l, p = !0), p ? (T -= .8 * (T - a[f][0]), k || (A -= .8 * (A - a[f][1])), j()) : a[f] = [T, A], w || (r[f] = d - b, r[v] = l), h = w ? t ? "scaleY" : "scaleX" : "scale" + g, u = w ? 1 / y : y, o[v] = l, o[f] = c, i[h] = y, i["translate" + g] = u * b + (T - u * S)
                }, pinch: function (t) {
                    var e = this, n = e.chart, i = e.pinchDown, r = e.followTouchMove, a = t.touches, s = a.length,
                        l = e.lastValidTouch, c = e.hasZoom, d = e.selectionMarker, p = {},
                        u = 1 === s && (e.inClass(t.target, Jt + "tracker") && n.runTrackerClick || e.runChartClick),
                        h = {};
                    !c && !r || u || t.preventDefault(), xe(a, function (t) {
                        return e.normalize(t)
                    }), "touchstart" === t.type ? (me(a, function (t, e) {
                        i[e] = {chartX: t.chartX, chartY: t.chartY}
                    }), l.x = [i[0].chartX, i[1] && i[1].chartX], l.y = [i[0].chartY, i[1] && i[1].chartY], me(n.axes, function (t) {
                        if (t.zoomEnabled) {
                            var e = n.bounds[t.horiz ? "h" : "v"], i = t.minPixelPadding,
                                o = t.toPixels(x(t.options.min, t.dataMin)),
                                r = t.toPixels(x(t.options.max, t.dataMax)), a = _t(o, r), s = wt(o, r);
                            e.min = _t(t.pos, a - i), e.max = wt(t.pos + t.len, s + i)
                        }
                    }), e.res = !0) : i.length && (d || (e.selectionMarker = d = o({destroy: Ht}, n.plotBox)), e.pinchTranslate(i, a, p, d, h, l), e.hasPinched = c, e.scaleGroups(p, h), !c && r && 1 === s ? this.runPointActions(e.normalize(t)) : e.res && (e.res = !1, this.reset(!1, 0)))
                }, onContainerTouchStart: function (t) {
                    var e = this.chart;
                    Be = e.index, 1 === t.touches.length ? (t = this.normalize(t), e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) ? (this.runPointActions(t), this.pinch(t)) : this.reset()) : 2 === t.touches.length && this.pinch(t)
                }, onContainerTouchMove: function (t) {
                    (1 === t.touches.length || 2 === t.touches.length) && this.pinch(t)
                }, onDocumentTouchEnd: function (t) {
                    Ft[Be] && Ft[Be].pointer.drop(t)
                }
            }), gt.PointerEvent || gt.MSPointerEvent) {
            var qe = {}, He = !!gt.PointerEvent, Fe = function () {
                var t, e = [];
                e.item = function (t) {
                    return this[t]
                };
                for (t in qe) qe.hasOwnProperty(t) && e.push({
                    pageX: qe[t].pageX,
                    pageY: qe[t].pageY,
                    target: qe[t].target
                });
                return e
            }, We = function (t, e, n, i) {
                var o;
                t = t.originalEvent || t, "touch" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_TOUCH || !Ft[Be] || (i(t), o = Ft[Be].pointer, o[e]({
                    type: n,
                    target: t.currentTarget,
                    preventDefault: Ht,
                    touches: Fe()
                }))
            };
            o(Re.prototype, {
                onContainerPointerDown: function (t) {
                    We(t, "onContainerTouchStart", "touchstart", function (t) {
                        qe[t.pointerId] = {pageX: t.pageX, pageY: t.pageY, target: t.currentTarget}
                    })
                }, onContainerPointerMove: function (t) {
                    We(t, "onContainerTouchMove", "touchmove", function (t) {
                        qe[t.pointerId] = {
                            pageX: t.pageX,
                            pageY: t.pageY
                        }, qe[t.pointerId].target || (qe[t.pointerId].target = t.currentTarget)
                    })
                }, onDocumentPointerUp: function (t) {
                    We(t, "onContainerTouchEnd", "touchend", function (t) {
                        delete qe[t.pointerId]
                    })
                }, batchMSEvents: function (t) {
                    t(this.chart.container, He ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown), t(this.chart.container, He ? "pointermove" : "MSPointerMove", this.onContainerPointerMove), t(ft, He ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
                }
            }), k(Re.prototype, "init", function (t, e, n) {
                t.call(this, e, n), (this.hasZoom || this.followTouchMove) && v(e.container, {
                    "-ms-touch-action": Qt,
                    "touch-action": Qt
                })
            }), k(Re.prototype, "setDOMEvents", function (t) {
                t.apply(this), (this.hasZoom || this.followTouchMove) && this.batchMSEvents(ve)
            }), k(Re.prototype, "destroy", function (t) {
                this.batchMSEvents(be), t.call(this)
            })
        }
        var $e = le.Legend = function (t, e) {
            this.init(t, e)
        };
        $e.prototype = {
            init: function (t, e) {
                var n = this, i = e.itemStyle, o = x(e.padding, 8), a = e.itemMarginTop || 0;
                this.options = e, e.enabled && (n.itemStyle = i, n.itemHiddenStyle = r(i, e.itemHiddenStyle), n.itemMarginTop = a, n.padding = o, n.initialItemX = o, n.initialItemY = o - 5, n.maxItemWidth = 0, n.chart = t, n.itemHeight = 0, n.lastLineHeight = 0, n.symbolWidth = x(e.symbolWidth, 16), n.pages = [], n.render(), ve(n.chart, "endResize", function () {
                    n.positionCheckboxes()
                }))
            }, colorizeItem: function (t, e) {
                var n, i, o = this, r = o.options, a = t.legendItem, s = t.legendLine, l = t.legendSymbol,
                    c = o.itemHiddenStyle.color, d = e ? r.itemStyle.color : c,
                    p = e ? t.legendColor || t.color || "#CCC" : c, u = t.options && t.options.marker, h = {fill: p};
                if (a && a.css({fill: d, color: d}), s && s.attr({stroke: p}), l) {
                    if (u && l.isMarker) {
                        h.stroke = p, u = t.convertAttribs(u);
                        for (n in u) i = u[n], i !== W && (h[n] = i)
                    }
                    l.attr(h)
                }
            }, positionItem: function (t) {
                var e = this, n = e.options, i = n.symbolPadding, o = !n.rtl, r = t._legendItemPos, a = r[0], s = r[1],
                    l = t.checkbox;
                t.legendGroup && t.legendGroup.translate(o ? a : e.legendWidth - a - 2 * i - 4, s), l && (l.x = a, l.y = s)
            }, destroyItem: function (t) {
                var e = t.checkbox;
                me(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function (e) {
                    t[e] && (t[e] = t[e].destroy())
                }), e && M(t.checkbox)
            }, destroy: function () {
                var t = this, e = t.group, n = t.box;
                n && (t.box = n.destroy()), e && (t.group = e.destroy())
            }, positionCheckboxes: function (t) {
                var e, n = this.group.alignAttr, i = this.clipHeight || this.legendHeight;
                n && (e = n.translateY, me(this.allItems, function (o) {
                    var r, a = o.checkbox;
                    a && (r = e + a.y + (t || 0) + 3, v(a, {
                        left: n.translateX + o.checkboxOffset + a.x - 20 + Kt,
                        top: r + Kt,
                        display: r > e - 6 && e + i - 6 > r ? "" : Qt
                    }))
                }))
            }, renderTitle: function () {
                var t, e = this.options, n = this.padding, i = e.title, o = 0;
                i.text && (this.title || (this.title = this.chart.renderer.label(i.text, n - 3, n - 4, null, null, null, null, null, "legend-title").attr({zIndex: 1}).css(i.style).add(this.group)), t = this.title.getBBox(), o = t.height, this.offsetWidth = t.width, this.contentGroup.attr({translateY: o})), this.titleHeight = o
            }, renderItem: function (t) {
                var e, n, i, o = this, a = o.chart, s = a.renderer, l = o.options, c = "horizontal" === l.layout,
                    d = o.symbolWidth, p = l.symbolPadding, u = o.itemStyle, h = o.itemHiddenStyle, m = o.padding,
                    f = c ? x(l.itemDistance, 20) : 0, g = !l.rtl, v = l.width, b = l.itemMarginBottom || 0,
                    y = o.itemMarginTop, w = o.initialItemX, _ = t.legendItem,
                    k = t.series && t.series.drawLegendSymbol ? t.series : t, S = k.options,
                    C = o.createCheckboxForItem && S && S.showCheckbox, A = l.useHTML;
                _ || (t.legendGroup = s.g("legend-item").attr({zIndex: 1}).add(o.scrollGroup), t.legendItem = _ = s.text(l.labelFormat ? T(l.labelFormat, t) : l.labelFormatter.call(t), g ? d + p : -p, o.baseline || 0, A).css(r(t.visible ? u : h)).attr({
                    align: g ? "left" : "right",
                    zIndex: 2
                }).add(t.legendGroup), o.baseline || (o.baseline = s.fontMetrics(u.fontSize, _).f + 3 + y, _.attr("y", o.baseline)), k.drawLegendSymbol(o, t), o.setItemEvents && o.setItemEvents(t, _, A, u, h), o.colorizeItem(t, t.visible), C && o.createCheckboxForItem(t)), n = _.getBBox(), i = t.checkboxOffset = l.itemWidth || t.legendItemWidth || d + p + n.width + f + (C ? 20 : 0), o.itemHeight = e = vt(t.legendItemHeight || n.height), c && o.itemX - w + i > (v || a.chartWidth - 2 * m - w - l.x) && (o.itemX = w, o.itemY += y + o.lastLineHeight + b, o.lastLineHeight = 0), o.maxItemWidth = wt(o.maxItemWidth, i), o.lastItemY = y + o.itemY + b, o.lastLineHeight = wt(e, o.lastLineHeight), t._legendItemPos = [o.itemX, o.itemY], c ? o.itemX += i : (o.itemY += y + e + b, o.lastLineHeight = e), o.offsetWidth = v || wt((c ? o.itemX - w - f : i) + m, o.offsetWidth)
            }, getAllItems: function () {
                var t = [];
                return me(this.chart.series, function (e) {
                    var n = e.options;
                    x(n.showInLegend, m(n.linkedTo) ? !1 : W, !0) && (t = t.concat(e.legendItems || ("point" === n.legendType ? e.data : e)))
                }), t
            }, render: function () {
                var t, e, n, i, r = this, a = r.chart, s = a.renderer, l = r.group, c = r.box, d = r.options,
                    p = r.padding, u = d.borderWidth, h = d.backgroundColor;
                r.itemX = r.initialItemX, r.itemY = r.initialItemY, r.offsetWidth = 0, r.lastItemY = 0, l || (r.group = l = s.g("legend").attr({zIndex: 7}).add(), r.contentGroup = s.g().attr({zIndex: 1}).add(l), r.scrollGroup = s.g().add(r.contentGroup)), r.renderTitle(), t = r.getAllItems(), j(t, function (t, e) {
                    return (t.options && t.options.legendIndex || 0) - (e.options && e.options.legendIndex || 0)
                }), d.reversed && t.reverse(), r.allItems = t, r.display = e = !!t.length, me(t, function (t) {
                    r.renderItem(t)
                }), n = d.width || r.offsetWidth, i = r.lastItemY + r.lastLineHeight + r.titleHeight, i = r.handleOverflow(i), (u || h) && (n += p, i += p, c ? n > 0 && i > 0 && (c[c.isNew ? "attr" : "animate"](c.crisp({
                    width: n,
                    height: i
                })), c.isNew = !1) : (r.box = c = s.rect(0, 0, n, i, d.borderRadius, u || 0).attr({
                    stroke: d.borderColor,
                    "stroke-width": u || 0,
                    fill: h || Qt
                }).add(l).shadow(d.shadow), c.isNew = !0), c[e ? "show" : "hide"]()), r.legendWidth = n, r.legendHeight = i, me(t, function (t) {
                    r.positionItem(t)
                }), e && l.align(o({
                    width: n,
                    height: i
                }, d), !0, "spacingBox"), a.isResizing || this.positionCheckboxes()
            }, handleOverflow: function (t) {
                var e, n, i = this, o = this.chart, r = o.renderer, a = this.options, s = a.y,
                    l = "top" === a.verticalAlign, c = o.spacingBox.height + (l ? -s : s) - this.padding,
                    d = a.maxHeight, p = this.clipRect, u = a.navigation, h = x(u.animation, !0), m = u.arrowSize || 12,
                    f = this.nav, g = this.pages, v = this.allItems;
                return "horizontal" === a.layout && (c /= 2), d && (c = _t(c, d)), g.length = 0, t > c && !a.useHTML ? (this.clipHeight = e = wt(c - 20 - this.titleHeight - this.padding, 0), this.currentPage = x(this.currentPage, 1), this.fullHeight = t, me(v, function (t, i) {
                    var o = t._legendItemPos[1], r = vt(t.legendItem.getBBox().height), a = g.length;
                    (!a || o - g[a - 1] > e && (n || o) !== g[a - 1]) && (g.push(n || o), a++), i === v.length - 1 && o + r - g[a - 1] > e && g.push(o), o !== n && (n = o)
                }), p || (p = i.clipRect = r.clipRect(0, this.padding, 9999, 0), i.contentGroup.clip(p)), p.attr({height: e}), f || (this.nav = f = r.g().attr({zIndex: 1}).add(this.group), this.up = r.symbol("triangle", 0, 0, m, m).on("click", function () {
                    i.scroll(-1, h)
                }).add(f), this.pager = r.text("", 15, 10).css(u.style).add(f), this.down = r.symbol("triangle-down", 0, 0, m, m).on("click", function () {
                    i.scroll(1, h)
                }).add(f)), i.scroll(0), t = c) : f && (p.attr({height: o.chartHeight}), f.hide(), this.scrollGroup.attr({translateY: 1}), this.clipHeight = 0), t
            }, scroll: function (t, e) {
                var n, i = this.pages, o = i.length, r = this.currentPage + t, a = this.clipHeight,
                    s = this.options.navigation, l = s.activeColor, c = s.inactiveColor, d = this.pager,
                    p = this.padding;
                r > o && (r = o), r > 0 && (e !== W && I(e, this.chart), this.nav.attr({
                    translateX: p,
                    translateY: a + this.padding + 7 + this.titleHeight,
                    visibility: Zt
                }), this.up.attr({fill: 1 === r ? c : l}).css({cursor: 1 === r ? "default" : "pointer"}), d.attr({text: r + "/" + o}), this.down.attr({
                    x: 18 + this.pager.getBBox().width,
                    fill: r === o ? c : l
                }).css({cursor: r === o ? "default" : "pointer"}), n = -i[r - 1] + this.initialItemY, this.scrollGroup.animate({translateY: n}), this.currentPage = r, this.positionCheckboxes(n))
            }
        };
        var Xe = le.LegendSymbolMixin = {
            drawRectangle: function (t, e) {
                var n = t.options.symbolHeight || 12;
                e.legendSymbol = this.chart.renderer.rect(0, t.baseline - 5 - n / 2, t.symbolWidth, n, t.options.symbolRadius || 0).attr({zIndex: 3}).add(e.legendGroup)
            }, drawLineMarker: function (t) {
                var e, n, i, o = this.options, r = o.marker, a = t.options, s = t.symbolWidth, l = this.chart.renderer,
                    c = this.legendGroup,
                    d = t.baseline - vt(.3 * l.fontMetrics(a.itemStyle.fontSize, this.legendItem).b);
                o.lineWidth && (i = {"stroke-width": o.lineWidth}, o.dashStyle && (i.dashstyle = o.dashStyle), this.legendLine = l.path([te, 0, d, ee, s, d]).attr(i).add(c)), r && r.enabled !== !1 && (e = r.radius, this.legendSymbol = n = l.symbol(this.symbol, s / 2 - e, d - e, 2 * e, 2 * e).add(c), n.isMarker = !0)
            }
        };
        (/Trident\/7\.0/.test(jt) || Et) && k($e.prototype, "positionItem", function (t, e) {
            var n = this, i = function () {
                e._legendItemPos && t.call(n, e)
            };
            i(), setTimeout(i)
        }), H.prototype = {
            init: function (t, e) {
                var n, i = t.series;
                t.series = null, n = r(G, t), n.series = t.series = i, this.userOptions = t;
                var o = n.chart;
                this.margin = this.splashArray("margin", o), this.spacing = this.splashArray("spacing", o);
                var a = o.events;
                this.bounds = {
                    h: {},
                    v: {}
                }, this.callback = e, this.isResizing = 0, this.options = n, this.axes = [], this.series = [], this.hasCartesianSeries = o.showAxes;
                var s, l = this;
                if (l.index = Ft.length, Ft.push(l), Wt++, o.reflow !== !1 && ve(l, "load", function () {
                        l.initReflow()
                    }), a) for (s in a) ve(l, s, a[s]);
                l.xAxis = [], l.yAxis = [], l.animation = Bt ? !1 : x(o.animation, !0), l.pointCount = l.colorCounter = l.symbolCounter = 0, l.firstRender()
            }, initSeries: function (t) {
                var e, n = this, i = n.options.chart, o = t.type || i.type || i.defaultSeriesType, r = se[o];
                return r || K(17, !0), e = new r, e.init(this, t), e
            }, isInsidePlot: function (t, e, n) {
                var i = n ? e : t, o = n ? t : e;
                return i >= 0 && i <= this.plotWidth && o >= 0 && o <= this.plotHeight
            }, adjustTickAmounts: function () {
                this.options.chart.alignTicks !== !1 && me(this.axes, function (t) {
                    t.adjustTickAmount()
                }), this.maxTicks = null
            }, redraw: function (t) {
                var e, n, i, r = this, a = r.axes, s = r.series, l = r.pointer, c = r.legend, d = r.isDirtyLegend,
                    p = r.hasCartesianSeries, u = r.isDirtyBox, h = s.length, m = h, f = r.renderer, g = f.isHidden(),
                    x = [];
                for (I(t, r), g && r.cloneRenderTo(), r.layOutTitles(); m--;) if (i = s[m], i.options.stacking && (e = !0, i.isDirty)) {
                    n = !0;
                    break
                }
                if (n) for (m = h; m--;) i = s[m], i.options.stacking && (i.isDirty = !0);
                me(s, function (t) {
                    t.isDirty && "point" === t.options.legendType && (d = !0)
                }), d && c.options.enabled && (c.render(), r.isDirtyLegend = !1), e && r.getStacks(), p && (r.isResizing || (r.maxTicks = null, me(a, function (t) {
                    t.setScale()
                })), r.adjustTickAmounts()), r.getMargins(), p && (me(a, function (t) {
                    t.isDirty && (u = !0)
                }), me(a, function (t) {
                    t.isDirtyExtremes && (t.isDirtyExtremes = !1, x.push(function () {
                        ye(t, "afterSetExtremes", o(t.eventArgs, t.getExtremes())), delete t.eventArgs
                    })), (u || e) && t.redraw()
                })), u && r.drawChartBox(), me(s, function (t) {
                    t.isDirty && t.visible && (!t.isCartesian || t.xAxis) && t.redraw()
                }), l && l.reset(!0), f.draw(), ye(r, "redraw"), g && r.cloneRenderTo(!0), me(x, function (t) {
                    t.call()
                })
            }, get: function (t) {
                var e, n, i, o = this, r = o.axes, a = o.series;
                for (e = 0; e < r.length; e++) if (r[e].options.id === t) return r[e];
                for (e = 0; e < a.length; e++) if (a[e].options.id === t) return a[e];
                for (e = 0; e < a.length; e++) for (i = a[e].points || [], n = 0; n < i.length; n++) if (i[n].id === t) return i[n];
                return null
            }, getAxes: function () {
                var t, e, n = this, i = this.options, o = i.xAxis = g(i.xAxis || {}), r = i.yAxis = g(i.yAxis || {});
                me(o, function (t, e) {
                    t.index = e, t.isX = !0
                }), me(r, function (t, e) {
                    t.index = e
                }), t = o.concat(r), me(t, function (t) {
                    e = new q(n, t)
                }), n.adjustTickAmounts()
            }, getSelectedPoints: function () {
                var t = [];
                return me(this.series, function (e) {
                    t = t.concat(fe(e.points || [], function (t) {
                        return t.selected
                    }))
                }), t
            }, getSelectedSeries: function () {
                return fe(this.series, function (t) {
                    return t.selected
                })
            }, getStacks: function () {
                var t = this;
                me(t.yAxis, function (t) {
                    t.stacks && t.hasVisibleSeries && (t.oldStacks = t.stacks)
                }), me(t.series, function (e) {
                    !e.options.stacking || e.visible !== !0 && t.options.chart.ignoreHiddenSeries !== !1 || (e.stackKey = e.type + x(e.options.stack, ""))
                })
            }, setTitle: function (t, e, n) {
                var i, o, a = this, s = a.options;
                i = s.title = r(s.title, t), o = s.subtitle = r(s.subtitle, e), me([["title", t, i], ["subtitle", e, o]], function (t) {
                    var e = t[0], n = a[e], i = t[1], o = t[2];
                    n && i && (a[e] = n = n.destroy()), o && o.text && !n && (a[e] = a.renderer.text(o.text, 0, 0, o.useHTML).attr({
                        align: o.align,
                        "class": Jt + e,
                        zIndex: o.zIndex || 4
                    }).css(o.style).add())
                }), a.layOutTitles(n)
            }, layOutTitles: function (t) {
                var e, n = 0, i = this.title, r = this.subtitle, a = this.options, s = a.title, l = a.subtitle,
                    c = this.renderer, d = this.spacingBox.width - 44;
                i && (i.css({width: (s.width || d) + Kt}).align(o({y: c.fontMetrics(s.style.fontSize, i).b - 3}, s), !1, "spacingBox"), s.floating || s.verticalAlign || (n = i.getBBox().height)), r && (r.css({width: (l.width || d) + Kt}).align(o({y: n + (s.margin - 13) + c.fontMetrics(s.style.fontSize, r).b}, l), !1, "spacingBox"), l.floating || l.verticalAlign || (n = yt(n + r.getBBox().height))), e = this.titleOffset !== n, this.titleOffset = n, !this.isDirtyBox && e && (this.isDirtyBox = e, this.hasRendered && x(t, !0) && this.isDirtyBox && this.redraw())
            }, getChartSize: function () {
                var t = this, e = t.options.chart, n = e.width, i = e.height, o = t.renderToClone || t.renderTo;
                m(n) || (t.containerWidth = pe(o, "width")), m(i) || (t.containerHeight = pe(o, "height")), t.chartWidth = wt(0, n || t.containerWidth || 600), t.chartHeight = wt(0, x(i, t.containerHeight > 19 ? t.containerHeight : 400))
            }, cloneRenderTo: function (t) {
                var e = this.renderToClone, n = this.container;
                t ? e && (this.renderTo.appendChild(n), M(e), delete this.renderToClone) : (n && n.parentNode === this.renderTo && this.renderTo.removeChild(n), this.renderToClone = e = this.renderTo.cloneNode(0), v(e, {
                    position: Gt,
                    top: "-9999px",
                    display: "block"
                }), e.style.setProperty && e.style.setProperty("display", "block", "important"), ft.body.appendChild(e), n && e.appendChild(n))
            }, getContainer: function () {
                var t, e, n, i, r, l, c = this, d = c.options.chart, p = "data-highcharts-chart";
                c.renderTo = i = d.renderTo, l = Jt + qt++, s(i) && (c.renderTo = i = ft.getElementById(i)), i || K(13, !0), r = a(f(i, p)), !isNaN(r) && Ft[r] && Ft[r].hasRendered && Ft[r].destroy(), f(i, p, c.index), i.innerHTML = "", d.skipClone || i.offsetWidth || c.cloneRenderTo(), c.getChartSize(), e = c.chartWidth, n = c.chartHeight, c.container = t = b(Yt, {
                    className: Jt + "container" + (d.className ? " " + d.className : ""),
                    id: l
                }, o({
                    position: Ut,
                    overflow: Vt,
                    width: e + Kt,
                    height: n + Kt,
                    textAlign: "left",
                    lineHeight: "normal",
                    zIndex: 0,
                    "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
                }, d.style), c.renderToClone || i), c._cursor = t.style.cursor, c.renderer = d.forExport ? new Le(t, e, n, d.style, !0) : new $(t, e, n, d.style), Bt && c.renderer.create(c, t, e, n)
            }, getMargins: function () {
                var t, e = this, n = e.spacing, i = e.legend, o = e.margin, r = e.options.legend, a = x(r.margin, 20),
                    s = r.x, l = r.y, c = r.align, d = r.verticalAlign, p = e.titleOffset;
                e.resetMargins(), t = e.axisOffset, p && !m(o[0]) && (e.plotTop = wt(e.plotTop, p + e.options.title.margin + n[0])), i.display && !r.floating && ("right" === c ? m(o[1]) || (e.marginRight = wt(e.marginRight, i.legendWidth - s + a + n[1])) : "left" === c ? m(o[3]) || (e.plotLeft = wt(e.plotLeft, i.legendWidth + s + a + n[3])) : "top" === d ? m(o[0]) || (e.plotTop = wt(e.plotTop, i.legendHeight + l + a + n[0])) : "bottom" === d && (m(o[2]) || (e.marginBottom = wt(e.marginBottom, i.legendHeight - l + a + n[2])))), e.extraBottomMargin && (e.marginBottom += e.extraBottomMargin), e.extraTopMargin && (e.plotTop += e.extraTopMargin), e.hasCartesianSeries && me(e.axes, function (t) {
                    t.getOffset()
                }), m(o[3]) || (e.plotLeft += t[3]), m(o[0]) || (e.plotTop += t[0]), m(o[2]) || (e.marginBottom += t[2]), m(o[1]) || (e.marginRight += t[1]), e.setChartSize()
            }, reflow: function (t) {
                var e = this, n = e.options.chart, i = e.renderTo, o = n.width || pe(i, "width"),
                    r = n.height || pe(i, "height"), a = t ? t.target : gt, s = function () {
                        e.container && (e.setSize(o, r, !1), e.hasUserSize = null)
                    };
                e.hasUserSize || !o || !r || a !== gt && a !== ft || ((o !== e.containerWidth || r !== e.containerHeight) && (clearTimeout(e.reflowTimeout), t ? e.reflowTimeout = setTimeout(s, 100) : s()), e.containerWidth = o, e.containerHeight = r)
            }, initReflow: function () {
                var t = this, e = function (e) {
                    t.reflow(e)
                };
                ve(gt, "resize", e), ve(t, "destroy", function () {
                    be(gt, "resize", e)
                })
            }, setSize: function (t, e, n) {
                var i, o, r, a = this;
                a.isResizing += 1, r = function () {
                    a && ye(a, "endResize", null, function () {
                        a.isResizing -= 1
                    })
                }, I(n, a), a.oldChartHeight = a.chartHeight, a.oldChartWidth = a.chartWidth, m(t) && (a.chartWidth = i = wt(0, vt(t)), a.hasUserSize = !!i), m(e) && (a.chartHeight = o = wt(0, vt(e))), (V ? _e : v)(a.container, {
                    width: i + Kt,
                    height: o + Kt
                }, V), a.setChartSize(!0), a.renderer.setSize(i, o, n), a.maxTicks = null, me(a.axes, function (t) {
                    t.isDirty = !0, t.setScale()
                }), me(a.series, function (t) {
                    t.isDirty = !0
                }), a.isDirtyLegend = !0, a.isDirtyBox = !0, a.layOutTitles(), a.getMargins(), a.redraw(n), a.oldChartHeight = null, ye(a, "resize"), V === !1 ? r() : setTimeout(r, V && V.duration || 500)
            }, setChartSize: function (t) {
                var e, n, i, o, r, a, s, l = this, c = l.inverted, d = l.renderer, p = l.chartWidth, u = l.chartHeight,
                    h = l.options.chart, m = l.spacing, f = l.clipOffset;
                l.plotLeft = i = vt(l.plotLeft), l.plotTop = o = vt(l.plotTop), l.plotWidth = r = wt(0, vt(p - i - l.marginRight)), l.plotHeight = a = wt(0, vt(u - o - l.marginBottom)), l.plotSizeX = c ? a : r, l.plotSizeY = c ? r : a, l.plotBorderWidth = h.plotBorderWidth || 0, l.spacingBox = d.spacingBox = {
                    x: m[3],
                    y: m[0],
                    width: p - m[3] - m[1],
                    height: u - m[0] - m[2]
                }, l.plotBox = d.plotBox = {
                    x: i,
                    y: o,
                    width: r,
                    height: a
                }, s = 2 * bt(l.plotBorderWidth / 2), e = yt(wt(s, f[3]) / 2), n = yt(wt(s, f[0]) / 2), l.clipBox = {
                    x: e,
                    y: n,
                    width: bt(l.plotSizeX - wt(s, f[1]) / 2 - e),
                    height: wt(0, bt(l.plotSizeY - wt(s, f[2]) / 2 - n))
                }, t || me(l.axes, function (t) {
                    t.setAxisSize(), t.setAxisTranslation()
                })
            }, resetMargins: function () {
                var t = this, e = t.spacing, n = t.margin;
                t.plotTop = x(n[0], e[0]), t.marginRight = x(n[1], e[1]), t.marginBottom = x(n[2], e[2]), t.plotLeft = x(n[3], e[3]), t.axisOffset = [0, 0, 0, 0], t.clipOffset = [0, 0, 0, 0]
            }, drawChartBox: function () {
                var t, e, n = this, i = n.options.chart, o = n.renderer, r = n.chartWidth, a = n.chartHeight,
                    s = n.chartBackground, l = n.plotBackground, c = n.plotBorder, d = n.plotBGImage,
                    p = i.borderWidth || 0, u = i.backgroundColor, h = i.plotBackgroundColor, m = i.plotBackgroundImage,
                    f = i.plotBorderWidth || 0, g = n.plotLeft, x = n.plotTop, v = n.plotWidth, b = n.plotHeight,
                    y = n.plotBox, w = n.clipRect, _ = n.clipBox;
                t = p + (i.shadow ? 8 : 0), (p || u) && (s ? s.animate(s.crisp({
                    width: r - t,
                    height: a - t
                })) : (e = {fill: u || Qt}, p && (e.stroke = i.borderColor, e["stroke-width"] = p), n.chartBackground = o.rect(t / 2, t / 2, r - t, a - t, i.borderRadius, p).attr(e).addClass(Jt + "background").add().shadow(i.shadow))), h && (l ? l.animate(y) : n.plotBackground = o.rect(g, x, v, b, 0).attr({fill: h}).add().shadow(i.plotShadow)), m && (d ? d.animate(y) : n.plotBGImage = o.image(m, g, x, v, b).add()), w ? w.animate({
                    width: _.width,
                    height: _.height
                }) : n.clipRect = o.clipRect(_), f && (c ? c.animate(c.crisp({
                    x: g,
                    y: x,
                    width: v,
                    height: b,
                    strokeWidth: -f
                })) : n.plotBorder = o.rect(g, x, v, b, 0, -f).attr({
                    stroke: i.plotBorderColor,
                    "stroke-width": f,
                    fill: Qt,
                    zIndex: 1
                }).add()), n.isDirtyBox = !1
            }, propFromSeries: function () {
                var t, e, n, i = this, o = i.options.chart, r = i.options.series;
                me(["inverted", "angular", "polar"], function (a) {
                    for (t = se[o.type || o.defaultSeriesType], n = i[a] || o[a] || t && t.prototype[a], e = r && r.length; !n && e--;) t = se[r[e].type], t && t.prototype[a] && (n = !0);
                    i[a] = n
                })
            }, linkSeries: function () {
                var t = this, e = t.series;
                me(e, function (t) {
                    t.linkedSeries.length = 0
                }), me(e, function (e) {
                    var n = e.options.linkedTo;
                    s(n) && (n = ":previous" === n ? t.series[e.index - 1] : t.get(n), n && (n.linkedSeries.push(e), e.linkedParent = n))
                })
            }, renderSeries: function () {
                me(this.series, function (t) {
                    t.translate(), t.setTooltipPoints && t.setTooltipPoints(), t.render()
                })
            }, renderLabels: function () {
                var t = this, e = t.options.labels;
                e.items && me(e.items, function (n) {
                    var i = o(e.style, n.style), r = a(i.left) + t.plotLeft, s = a(i.top) + t.plotTop + 12;
                    delete i.left, delete i.top, t.renderer.text(n.html, r, s).attr({zIndex: 2}).css(i).add()
                })
            }, render: function () {
                var t = this, e = t.axes, n = t.renderer, i = t.options;
                t.setTitle(), t.legend = new $e(t, i.legend), t.getStacks(), me(e, function (t) {
                    t.setScale()
                }), t.getMargins(), t.maxTicks = null, me(e, function (t) {
                    t.setTickPositions(!0), t.setMaxTicks()
                }), t.adjustTickAmounts(), t.getMargins(), t.drawChartBox(), t.hasCartesianSeries && me(e, function (t) {
                    t.render()
                }), t.seriesGroup || (t.seriesGroup = n.g("series-group").attr({zIndex: 3}).add()), t.renderSeries(), t.renderLabels(), t.showCredits(i.credits), t.hasRendered = !0
            }, showCredits: function (t) {
                t.enabled && !this.credits && (this.credits = this.renderer.text(t.text, 0, 0).on("click", function () {
                    t.href && (location.href = t.href)
                }).attr({align: t.position.align, zIndex: 8}).css(t.style).add().align(t.position))
            }, destroy: function () {
                var t, e = this, n = e.axes, i = e.series, o = e.container, r = o && o.parentNode;
                for (ye(e, "destroy"), Ft[e.index] = W, Wt--, e.renderTo.removeAttribute("data-highcharts-chart"), be(e), t = n.length; t--;) n[t] = n[t].destroy();
                for (t = i.length; t--;) i[t] = i[t].destroy();
                me(["title", "subtitle", "chartBackground", "plotBackground", "plotBGImage", "plotBorder", "seriesGroup", "clipRect", "credits", "pointer", "scroller", "rangeSelector", "legend", "resetZoomButton", "tooltip", "renderer"], function (t) {
                    var n = e[t];
                    n && n.destroy && (e[t] = n.destroy())
                }), o && (o.innerHTML = "", be(o), r && M(o));
                for (t in e) delete e[t]
            }, isReadyToRender: function () {
                var t = this;
                return !Dt && gt == gt.top && "complete" !== ft.readyState || Bt && !gt.canvg ? (Bt ? De.push(function () {
                    t.firstRender()
                }, t.options.global.canvasToolsURL) : ft.attachEvent("onreadystatechange", function () {
                    ft.detachEvent("onreadystatechange", t.firstRender), "complete" === ft.readyState && t.firstRender()
                }), !1) : !0
            }, firstRender: function () {
                var t = this, e = t.options, n = t.callback;
                t.isReadyToRender() && (t.getContainer(), ye(t, "init"), t.resetMargins(), t.setChartSize(), t.propFromSeries(), t.getAxes(), me(e.series || [], function (e) {
                    t.initSeries(e)
                }), t.linkSeries(), ye(t, "beforeRender"), le.Pointer && (t.pointer = new Re(t, e)), t.render(), t.renderer.draw(), n && n.apply(t, [t]), me(t.callbacks, function (e) {
                    e.apply(t, [t])
                }), t.cloneRenderTo(!0), ye(t, "load"))
            }, splashArray: function (t, e) {
                var n = e[t], i = l(n) ? n : [n, n, n, n];
                return [x(e[t + "Top"], i[0]), x(e[t + "Right"], i[1]), x(e[t + "Bottom"], i[2]), x(e[t + "Left"], i[3])]
            }
        }, H.prototype.callbacks = [];
        var Ye = le.CenteredSeriesMixin = {
            getCenter: function () {
                var t, e, n = this.options, i = this.chart, o = 2 * (n.slicedOffset || 0), r = i.plotWidth - 2 * o,
                    s = i.plotHeight - 2 * o, l = n.center,
                    c = [x(l[0], "50%"), x(l[1], "50%"), n.size || "100%", n.innerSize || 0], d = _t(r, s);
                return xe(c, function (n, i) {
                    return e = /%$/.test(n), t = 2 > i || 2 === i && e, (e ? [r, s, d, d][i] * a(n) / 100 : n) + (t ? o : 0)
                })
            }
        }, Ge = function () {
        };
        Ge.prototype = {
            init: function (t, e, n) {
                var i, o = this;
                return o.series = t, o.applyOptions(e, n), o.pointAttr = {}, t.options.colorByPoint && (i = t.options.colors || t.chart.options.colors, o.color = o.color || i[t.colorCounter++], t.colorCounter === i.length && (t.colorCounter = 0)), t.chart.pointCount++, o
            }, applyOptions: function (t, e) {
                var n = this, i = n.series, r = i.options.pointValKey || i.pointValKey;
                return t = Ge.prototype.optionsToObject.call(this, t), o(n, t), n.options = n.options ? o(n.options, t) : t, r && (n.y = n[r]), n.x === W && i && (n.x = e === W ? i.autoIncrement() : e), n
            }, optionsToObject: function (t) {
                var e, n = {}, i = this.series, o = i.pointArrayMap || ["y"], r = o.length, a = 0, s = 0;
                if ("number" == typeof t || null === t) n[o[0]] = t; else if (c(t)) for (t.length > r && (e = typeof t[0], "string" === e ? n.name = t[0] : "number" === e && (n.x = t[0]), a++); r > s;) n[o[s++]] = t[a++]; else "object" == typeof t && (n = t, t.dataLabels && (i._hasPointLabels = !0), t.marker && (i._hasPointMarkers = !0));
                return n
            }, destroy: function () {
                var t, e = this, n = e.series, i = n.chart, o = i.hoverPoints;
                i.pointCount--, o && (e.setState(), h(o, e), o.length || (i.hoverPoints = null)), e === i.hoverPoint && e.onMouseOut(), (e.graphic || e.dataLabel) && (be(e), e.destroyElements()), e.legendItem && i.legend.destroyItem(e);
                for (t in e) e[t] = null
            }, destroyElements: function () {
                for (var t, e = this, n = ["graphic", "dataLabel", "dataLabelUpper", "group", "connector", "shadowGroup"], i = 6; i--;) t = n[i], e[t] && (e[t] = e[t].destroy())
            }, getLabelConfig: function () {
                var t = this;
                return {
                    x: t.category,
                    y: t.y,
                    key: t.name || t.category,
                    series: t.series,
                    point: t,
                    percentage: t.percentage,
                    total: t.total || t.stackTotal
                }
            }, tooltipFormatter: function (t) {
                var e = this.series, n = e.tooltipOptions, i = x(n.valueDecimals, ""), o = n.valuePrefix || "",
                    r = n.valueSuffix || "";
                return me(e.pointArrayMap || ["y"], function (e) {
                    e = "{point." + e, (o || r) && (t = t.replace(e + "}", o + e + "}" + r)), t = t.replace(e + "}", e + ":,." + i + "f}")
                }), T(t, {point: this, series: this.series})
            }, firePointEvent: function (t, e, n) {
                var i = this, o = this.series, r = o.options;
                (r.point.events[t] || i.options && i.options.events && i.options.events[t]) && this.importEvents(), "click" === t && r.allowPointSelect && (n = function (t) {
                    i.select(null, t.ctrlKey || t.metaKey || t.shiftKey)
                }), ye(this, t, e, n)
            }
        };
        var Ue = function () {
        };
        Ue.prototype = {
            isCartesian: !0,
            type: "line",
            pointClass: Ge,
            sorted: !0,
            requireSorting: !0,
            pointAttrToOptions: {stroke: "lineColor", "stroke-width": "lineWidth", fill: "fillColor", r: "radius"},
            axisTypes: ["xAxis", "yAxis"],
            colorCounter: 0,
            parallelArrays: ["x", "y"],
            init: function (t, e) {
                var n, i, r = this, a = t.series, s = function (t, e) {
                    return x(t.options.index, t._i) - x(e.options.index, e._i)
                };
                r.chart = t, r.options = e = r.setOptions(e), r.linkedSeries = [], r.bindAxes(), o(r, {
                    name: e.name,
                    state: ie,
                    pointAttr: {},
                    visible: e.visible !== !1,
                    selected: e.selected === !0
                }), Bt && (e.animation = !1), i = e.events;
                for (n in i) ve(r, n, i[n]);
                (i && i.click || e.point && e.point.events && e.point.events.click || e.allowPointSelect) && (t.runTrackerClick = !0), r.getColor(), r.getSymbol(), me(r.parallelArrays, function (t) {
                    r[t + "Data"] = []
                }), r.setData(e.data, !1), r.isCartesian && (t.hasCartesianSeries = !0), a.push(r), r._i = a.length - 1, j(a, s), this.yAxis && j(this.yAxis.series, s), me(a, function (t, e) {
                    t.index = e, t.name = t.name || "Series " + (e + 1)
                })
            },
            bindAxes: function () {
                var t, e = this, n = e.options, i = e.chart;
                me(e.axisTypes || [], function (o) {
                    me(i[o], function (i) {
                        t = i.options, (n[o] === t.index || n[o] !== W && n[o] === t.id || n[o] === W && 0 === t.index) && (i.series.push(e), e[o] = i, i.isDirty = !0)
                    }), e[o] || e.optionalAxis === o || K(18, !0)
                })
            },
            updateParallelArrays: function (t, e) {
                var n = t.series, i = arguments, o = "number" == typeof e ? function (i) {
                    var o = "y" === i && n.toYData ? n.toYData(t) : t[i];
                    n[i + "Data"][e] = o
                } : function (t) {
                    Array.prototype[e].apply(n[t + "Data"], Array.prototype.slice.call(i, 2))
                };
                me(n.parallelArrays, o)
            },
            autoIncrement: function () {
                var t = this, e = t.options, n = t.xIncrement;
                return n = x(n, e.pointStart, 0), t.pointInterval = x(t.pointInterval, e.pointInterval, 1), t.xIncrement = n + t.pointInterval, n
            },
            getSegments: function () {
                var t, e = this, n = -1, i = [], o = e.points, r = o.length;
                if (r) if (e.options.connectNulls) {
                    for (t = r; t--;) null === o[t].y && o.splice(t, 1);
                    o.length && (i = [o])
                } else me(o, function (t, e) {
                    null === t.y ? (e > n + 1 && i.push(o.slice(n + 1, e)), n = e) : e === r - 1 && i.push(o.slice(n + 1, e + 1))
                });
                e.segments = i
            },
            setOptions: function (t) {
                var e, n = this.chart, i = n.options, o = i.plotOptions, a = n.userOptions || {},
                    s = a.plotOptions || {}, l = o[this.type];
                return this.userOptions = t, e = r(l, o.series, t), this.tooltipOptions = r(G.tooltip, G.plotOptions[this.type].tooltip, a.tooltip, s.series && s.series.tooltip, s[this.type] && s[this.type].tooltip, t.tooltip), null === l.marker && delete e.marker, e
            },
            getCyclic: function (t, e, n) {
                var i, o = this.userOptions, r = "_" + t + "Index", a = t + "Counter";
                e || (m(o[r]) ? i = o[r] : (o[r] = i = this.chart[a] % n.length, this.chart[a] += 1), e = n[i]), this[t] = e
            },
            getColor: function () {
                this.options.colorByPoint || this.getCyclic("color", this.options.color || Te[this.type].color, this.chart.options.colors)
            },
            getSymbol: function () {
                var t = this.options.marker;
                this.getCyclic("symbol", t.symbol, this.chart.options.symbols), /^url/.test(this.symbol) && (t.radius = 0)
            },
            drawLegendSymbol: Xe.drawLineMarker,
            setData: function (t, e, n, i) {
                var o, r, a, l = this, p = l.points, u = p && p.length || 0, h = l.options, m = l.chart, f = null,
                    g = l.xAxis, v = g && !!g.categories, b = l.tooltipPoints, y = h.turboThreshold, w = this.xData,
                    _ = this.yData, k = l.pointArrayMap, S = k && k.length;
                if (t = t || [], o = t.length, e = x(e, !0), i === !1 || !o || u !== o || l.cropped || l.hasGroupedData) {
                    if (l.xIncrement = null, l.pointRange = v ? 1 : h.pointRange, l.colorCounter = 0, me(this.parallelArrays, function (t) {
                            l[t + "Data"].length = 0
                        }), y && o > y) {
                        for (r = 0; null === f && o > r;) f = t[r], r++;
                        if (d(f)) {
                            var T = x(h.pointStart, 0), C = x(h.pointInterval, 1);
                            for (r = 0; o > r; r++) w[r] = T, _[r] = t[r], T += C;
                            l.xIncrement = T
                        } else if (c(f)) if (S) for (r = 0; o > r; r++) a = t[r], w[r] = a[0], _[r] = a.slice(1, S + 1); else for (r = 0; o > r; r++) a = t[r], w[r] = a[0], _[r] = a[1]; else K(12)
                    } else for (r = 0; o > r; r++) t[r] !== W && (a = {series: l}, l.pointClass.prototype.applyOptions.apply(a, [t[r]]), l.updateParallelArrays(a, r), v && a.name && (g.names[a.x] = a.name));
                    for (s(_[0]) && K(14, !0), l.data = [], l.options.data = t, r = u; r--;) p[r] && p[r].destroy && p[r].destroy();
                    b && (b.length = 0), g && (g.minRange = g.userMinRange), l.isDirty = l.isDirtyData = m.isDirtyBox = !0, n = !1
                } else me(t, function (t, e) {
                    p[e].update(t, !1, null, !1)
                });
                e && m.redraw(n)
            },
            processData: function (t) {
                var e, n, i, o, r, a, s, l, c = this, d = c.xData, p = c.yData, u = d.length, h = 0, m = c.xAxis,
                    f = c.options, g = f.cropThreshold, x = 0, v = c.isCartesian;
                if (v && !c.isDirty && !m.isDirty && !c.yAxis.isDirty && !t) return !1;
                for (m && (a = m.getExtremes(), s = a.min, l = a.max), v && c.sorted && (!g || u > g || c.forceCrop) && (d[u - 1] < s || d[0] > l ? (d = [], p = []) : (d[0] < s || d[u - 1] > l) && (e = this.cropData(c.xData, c.yData, s, l), d = e.xData, p = e.yData, h = e.start, n = !0, x = d.length)), r = d.length - 1; r >= 0; r--) i = d[r] - d[r - 1], !n && d[r] > s && d[r] < l && x++, i > 0 && (o === W || o > i) ? o = i : 0 > i && c.requireSorting && K(15);
                c.cropped = n, c.cropStart = h, c.processedXData = d, c.processedYData = p, c.activePointCount = x, null === f.pointRange && (c.pointRange = o || 1), c.closestPointRange = o
            },
            cropData: function (t, e, n, i) {
                var o, r = t.length, a = 0, s = r, l = x(this.cropShoulder, 1);
                for (o = 0; r > o; o++) if (t[o] >= n) {
                    a = wt(0, o - l);
                    break
                }
                for (; r > o; o++) if (t[o] > i) {
                    s = o + l;
                    break
                }
                return {xData: t.slice(a, s), yData: e.slice(a, s), start: a, end: s}
            },
            generatePoints: function () {
                var t, e, n, i, o = this, r = o.options, a = r.data, s = o.data, l = o.processedXData,
                    c = o.processedYData, d = o.pointClass, p = l.length, u = o.cropStart || 0, h = o.hasGroupedData,
                    m = [];
                if (!s && !h) {
                    var f = [];
                    f.length = a.length, s = o.data = f
                }
                for (i = 0; p > i; i++) e = u + i, h ? m[i] = (new d).init(o, [l[i]].concat(g(c[i]))) : (s[e] ? n = s[e] : a[e] !== W && (s[e] = n = (new d).init(o, a[e], l[i])), m[i] = n), m[i].index = e;
                if (s && (p !== (t = s.length) || h)) for (i = 0; t > i; i++) i !== u || h || (i += p), s[i] && (s[i].destroyElements(), s[i].plotX = W);
                o.data = s, o.points = m
            },
            getExtremes: function (t) {
                var e, n, i, o, r, a, s, l, c, d = this.xAxis, p = this.yAxis, u = this.processedXData, h = [], m = 0,
                    f = d.getExtremes(), g = f.min, v = f.max;
                for (t = t || this.stackedYData || this.processedYData, e = t.length, l = 0; e > l; l++) if (a = u[l], s = t[l], n = null !== s && s !== W && (!p.isLog || s.length || s > 0), i = this.getExtremesFromAll || this.cropped || (u[l + 1] || a) >= g && (u[l - 1] || a) <= v, n && i) if (c = s.length) for (; c--;) null !== s[c] && (h[m++] = s[c]); else h[m++] = s;
                this.dataMin = x(o, P(h)), this.dataMax = x(r, z(h))
            },
            translate: function () {
                this.processedXData || this.processData(), this.generatePoints();
                var t, e = this, n = e.options, i = n.stacking, o = e.xAxis, r = o.categories, a = e.yAxis,
                    s = e.points, l = s.length, c = !!e.modifyValue, p = n.pointPlacement, u = "between" === p || d(p),
                    h = n.threshold;
                for (t = 0; l > t; t++) {
                    var f, g, v = s[t], b = v.x, y = v.y, w = v.low,
                        _ = i && a.stacks[(e.negStacks && h > y ? "-" : "") + e.stackKey];
                    a.isLog && 0 >= y && (v.y = y = null, K(10)), v.plotX = o.translate(b, 0, 0, 0, 1, p, "flags" === this.type), i && e.visible && _ && _[b] && (f = _[b], g = f.points[e.index + "," + t], w = g[0], y = g[1], 0 === w && (w = x(h, a.min)), a.isLog && 0 >= w && (w = null), v.total = v.stackTotal = f.total, v.percentage = f.total && v.y / f.total * 100, v.stackY = y, f.setOffset(e.pointXOffset || 0, e.barW || 0)), v.yBottom = m(w) ? a.translate(w, 0, 1, 0, 1) : null, c && (y = e.modifyValue(y, v)), v.plotY = "number" == typeof y && y !== 1 / 0 ? a.translate(y, 0, 1, 0, 1) : W, v.clientX = u ? o.translate(b, 0, 0, 0, 1) : v.plotX, v.negative = v.y < (h || 0), v.category = r && r[v.x] !== W ? r[v.x] : v.x
                }
                e.getSegments()
            },
            animate: function (t) {
                var e, n, i, r = this, a = r.chart, s = a.renderer, c = r.options.animation, d = r.clipBox || a.clipBox,
                    p = a.inverted;
                c && !l(c) && (c = Te[r.type].animation), i = ["_sharedClip", c.duration, c.easing, d.height].join(","), t ? (e = a[i], n = a[i + "m"], e || (a[i] = e = s.clipRect(o(d, {width: 0})), a[i + "m"] = n = s.clipRect(-99, p ? -a.plotLeft : -a.plotTop, 99, p ? a.chartWidth : a.chartHeight)), r.group.clip(e), r.markerGroup.clip(n), r.sharedClipKey = i) : (e = a[i], e && e.animate({width: a.plotSizeX}, c), a[i + "m"] && a[i + "m"].animate({width: a.plotSizeX + 99}, c), r.animate = null)
            },
            afterAnimate: function () {
                var t = this.chart, e = this.sharedClipKey, n = this.group, i = this.clipBox;
                n && this.options.clip !== !1 && (e && i || n.clip(i ? t.renderer.clipRect(i) : t.clipRect), this.markerGroup.clip()), ye(this, "afterAnimate"), setTimeout(function () {
                    e && t[e] && (i || (t[e] = t[e].destroy()), t[e + "m"] && (t[e + "m"] = t[e + "m"].destroy()))
                }, 100)
            },
            drawPoints: function () {
                var t, e, n, i, r, a, s, l, c, d, p, u, h, m = this, f = m.points, g = m.chart, v = m.options,
                    b = v.marker, y = m.pointAttr[""], w = m.markerGroup,
                    _ = x(b.enabled, !m.requireSorting || m.activePointCount < .5 * m.xAxis.len / b.radius);
                if (b.enabled !== !1 || m._hasPointMarkers) for (i = f.length; i--;) r = f[i], e = bt(r.plotX), n = r.plotY, c = r.graphic, d = r.marker || {}, p = !!r.marker, u = _ && d.enabled === W || d.enabled, h = g.isInsidePlot(vt(e), n, g.inverted), u && n !== W && !isNaN(n) && null !== r.y ? (t = r.pointAttr[r.selected ? re : ie] || y, a = t.r, s = x(d.symbol, m.symbol), l = 0 === s.indexOf("url"), c ? c[h ? "show" : "hide"](!0).animate(o({
                    x: e - a,
                    y: n - a
                }, c.symbolName ? {
                    width: 2 * a,
                    height: 2 * a
                } : {})) : h && (a > 0 || l) && (r.graphic = c = g.renderer.symbol(s, e - a, n - a, 2 * a, 2 * a, p ? d : b).attr(t).add(w))) : c && (r.graphic = c.destroy())
            },
            convertAttribs: function (t, e, n, i) {
                var o, r, a = this.pointAttrToOptions, s = {};
                t = t || {}, e = e || {}, n = n || {}, i = i || {};
                for (o in a) r = a[o], s[o] = x(t[r], e[o], n[o], i[o]);
                return s
            },
            getAttribs: function () {
                var t, e, n, i, r, a, s = this, l = s.options, c = Te[s.type].marker ? l.marker : l, d = c.states,
                    p = d[oe], u = s.color, h = {stroke: u, fill: u}, f = s.points || [], g = [],
                    x = s.pointAttrToOptions, v = s.hasPointSpecificOptions, b = l.negativeColor, y = c.lineColor,
                    w = c.fillColor, _ = l.turboThreshold;
                if (l.marker ? (p.radius = p.radius || c.radius + p.radiusPlus, p.lineWidth = p.lineWidth || c.lineWidth + p.lineWidthPlus) : p.color = p.color || ze(p.color || u).brighten(p.brightness).get(), g[ie] = s.convertAttribs(c, h), me([oe, re], function (t) {
                        g[t] = s.convertAttribs(d[t], g[ie])
                    }), s.pointAttr = g, e = f.length, !_ || _ > e || v) for (; e--;) {
                    if (n = f[e], c = n.options && n.options.marker || n.options, c && c.enabled === !1 && (c.radius = 0), n.negative && b && (n.color = n.fillColor = b), v = l.colorByPoint || n.color, n.options) for (a in x) m(c[x[a]]) && (v = !0);
                    v ? (c = c || {}, i = [], d = c.states || {}, t = d[oe] = d[oe] || {}, l.marker || (t.color = t.color || !n.options.color && p.color || ze(n.color).brighten(t.brightness || p.brightness).get()), r = {color: n.color}, w || (r.fillColor = n.color), y || (r.lineColor = n.color), i[ie] = s.convertAttribs(o(r, c), g[ie]), i[oe] = s.convertAttribs(d[oe], g[oe], i[ie]), i[re] = s.convertAttribs(d[re], g[re], i[ie])) : i = g, n.pointAttr = i
                }
            },
            destroy: function () {
                var t, e, n, i, o, r = this, a = r.chart, s = /AppleWebKit\/533/.test(jt), l = r.data || [];
                for (ye(r, "destroy"), be(r), me(r.axisTypes || [], function (t) {
                    o = r[t], o && (h(o.series, r), o.isDirty = o.forceRedraw = !0)
                }), r.legendItem && r.chart.legend.destroyItem(r), e = l.length; e--;) n = l[e], n && n.destroy && n.destroy();
                r.points = null, clearTimeout(r.animationTimeout), me(["area", "graph", "dataLabelsGroup", "group", "markerGroup", "tracker", "graphNeg", "areaNeg", "posClip", "negClip"], function (e) {
                    r[e] && (t = s && "group" === e ? "hide" : "destroy", r[e][t]())
                }), a.hoverSeries === r && (a.hoverSeries = null), h(a.series, r);
                for (i in r) delete r[i];
            },
            getSegmentPath: function (t) {
                var e = this, n = [], i = e.options.step;
                return me(t, function (o, r) {
                    var a, s = o.plotX, l = o.plotY;
                    e.getPointSpline ? n.push.apply(n, e.getPointSpline(t, o, r)) : (n.push(r ? ee : te), i && r && (a = t[r - 1], "right" === i ? n.push(a.plotX, l) : "center" === i ? n.push((a.plotX + s) / 2, a.plotY, (a.plotX + s) / 2, l) : n.push(s, a.plotY)), n.push(o.plotX, o.plotY))
                }), n
            },
            getGraphPath: function () {
                var t, e = this, n = [], i = [];
                return me(e.segments, function (o) {
                    t = e.getSegmentPath(o), o.length > 1 ? n = n.concat(t) : i.push(o[0])
                }), e.singlePoints = i, e.graphPath = n, n
            },
            drawGraph: function () {
                var t = this, e = this.options, n = [["graph", e.lineColor || this.color]], i = e.lineWidth,
                    o = e.dashStyle, r = "square" !== e.linecap, a = this.getGraphPath(), s = e.negativeColor;
                s && n.push(["graphNeg", s]), me(n, function (n, s) {
                    var l, c = n[0], d = t[c];
                    d ? (ke(d), d.animate({d: a})) : i && a.length && (l = {
                        stroke: n[1],
                        "stroke-width": i,
                        fill: Qt,
                        zIndex: 1
                    }, o ? l.dashstyle = o : r && (l["stroke-linecap"] = l["stroke-linejoin"] = "round"), t[c] = t.chart.renderer.path(a).attr(l).add(t.group).shadow(!s && e.shadow))
                })
            },
            clipNeg: function () {
                var t, e, n, i, o, r = this.options, a = this.chart, s = a.renderer,
                    l = r.negativeColor || r.negativeFillColor, c = this.graph, d = this.area, p = this.posClip,
                    u = this.negClip, h = a.chartWidth, m = a.chartHeight, f = wt(h, m), g = this.yAxis;
                l && (c || d) && (t = vt(g.toPixels(r.threshold || 0, !0)), 0 > t && (f -= t), i = {
                    x: 0,
                    y: 0,
                    width: f,
                    height: t
                }, o = {
                    x: 0,
                    y: t,
                    width: f,
                    height: f
                }, a.inverted && (i.height = o.y = a.plotWidth - t, s.isVML && (i = {
                    x: a.plotWidth - t - a.plotLeft,
                    y: 0,
                    width: h,
                    height: m
                }, o = {
                    x: t + a.plotLeft - h,
                    y: 0,
                    width: a.plotLeft + t,
                    height: h
                })), g.reversed ? (e = o, n = i) : (e = i, n = o), p ? (p.animate(e), u.animate(n)) : (this.posClip = p = s.clipRect(e), this.negClip = u = s.clipRect(n), c && this.graphNeg && (c.clip(p), this.graphNeg.clip(u)), d && (d.clip(p), this.areaNeg.clip(u))))
            },
            invertGroups: function () {
                function t() {
                    var t = {width: e.yAxis.len, height: e.xAxis.len};
                    me(["group", "markerGroup"], function (n) {
                        e[n] && e[n].attr(t).invert()
                    })
                }

                var e = this, n = e.chart;
                e.xAxis && (ve(n, "resize", t), ve(e, "destroy", function () {
                    be(n, "resize", t)
                }), t(), e.invertGroups = t)
            },
            plotGroup: function (t, e, n, i, o) {
                var r = this[t], a = !r;
                return a && (this[t] = r = this.chart.renderer.g(e).attr({
                    visibility: n,
                    zIndex: i || .1
                }).add(o)), r[a ? "attr" : "animate"](this.getPlotBox()), r
            },
            getPlotBox: function () {
                var t = this.chart, e = this.xAxis, n = this.yAxis;
                return t.inverted && (e = n, n = this.xAxis), {
                    translateX: e ? e.left : t.plotLeft,
                    translateY: n ? n.top : t.plotTop,
                    scaleX: 1,
                    scaleY: 1
                }
            },
            render: function () {
                var t, e = this, n = e.chart, i = e.options, o = i.animation,
                    r = o && !!e.animate && n.renderer.isSVG && x(o.duration, 500) || 0, a = e.visible ? Zt : Vt,
                    s = i.zIndex, l = e.hasRendered, c = n.seriesGroup;
                t = e.plotGroup("group", "series", a, s, c), e.markerGroup = e.plotGroup("markerGroup", "markers", a, s, c), r && e.animate(!0), e.getAttribs(), t.inverted = e.isCartesian ? n.inverted : !1, e.drawGraph && (e.drawGraph(), e.clipNeg()), me(e.points, function (t) {
                    t.redraw && t.redraw()
                }), e.drawDataLabels && e.drawDataLabels(), e.visible && e.drawPoints(), e.drawTracker && e.options.enableMouseTracking !== !1 && e.drawTracker(), n.inverted && e.invertGroups(), i.clip === !1 || e.sharedClipKey || l || t.clip(n.clipRect), r && e.animate(), l || (r ? e.animationTimeout = setTimeout(function () {
                    e.afterAnimate()
                }, r) : e.afterAnimate()), e.isDirty = e.isDirtyData = !1, e.hasRendered = !0
            },
            redraw: function () {
                var t = this, e = t.chart, n = t.isDirtyData, i = t.group, o = t.xAxis, r = t.yAxis;
                i && (e.inverted && i.attr({
                    width: e.plotWidth,
                    height: e.plotHeight
                }), i.animate({
                    translateX: x(o && o.left, e.plotLeft),
                    translateY: x(r && r.top, e.plotTop)
                })), t.translate(), t.setTooltipPoints && t.setTooltipPoints(!0), t.render(), n && ye(t, "updatedData")
            }
        }, F.prototype = {
            destroy: function () {
                L(this, this.axis)
            }, render: function (t) {
                var e = this.options, n = e.format, i = n ? T(n, this) : e.formatter.call(this);
                this.label ? this.label.attr({
                    text: i,
                    visibility: Vt
                }) : this.label = this.axis.chart.renderer.text(i, null, null, e.useHTML).css(e.style).attr({
                    align: this.textAlign,
                    rotation: e.rotation,
                    visibility: Vt
                }).add(t)
            }, setOffset: function (t, e) {
                var n, i = this, o = i.axis, r = o.chart, a = r.inverted, s = this.isNegative,
                    l = o.translate(o.usePercentage ? 100 : this.total, 0, 0, 0, 1), c = o.translate(0), d = kt(l - c),
                    p = r.xAxis[0].translate(this.x) + t, u = r.plotHeight, h = {
                        x: a ? s ? l : l - d : p,
                        y: a ? u - p - e : s ? u - l - d : u - l,
                        width: a ? d : e,
                        height: a ? e : d
                    }, m = this.label;
                m && (m.align(this.alignOptions, null, h), n = m.alignAttr, m[this.options.crop === !1 || r.isInsidePlot(n.x, n.y) ? "show" : "hide"](!0))
            }
        }, q.prototype.buildStacks = function () {
            var t = this.series, e = x(this.options.reversedStacks, !0), n = t.length;
            if (!this.isXAxis) {
                for (this.usePercentage = !1; n--;) t[e ? n : t.length - n - 1].setStackedPoints();
                if (this.usePercentage) for (n = 0; n < t.length; n++) t[n].setPercentStacks()
            }
        }, q.prototype.renderStackTotals = function () {
            var t, e, n, i = this, o = i.chart, r = o.renderer, a = i.stacks, s = i.stackTotalGroup;
            s || (i.stackTotalGroup = s = r.g("stack-labels").attr({
                visibility: Zt,
                zIndex: 6
            }).add()), s.translate(o.plotLeft, o.plotTop);
            for (t in a) {
                e = a[t];
                for (n in e) e[n].render(s)
            }
        }, Ue.prototype.setStackedPoints = function () {
            if (this.options.stacking && (this.visible === !0 || this.chart.options.chart.ignoreHiddenSeries === !1)) {
                var t, e, n, i, o, r, a, s, l = this, c = l.processedXData, d = l.processedYData, p = [], u = d.length,
                    h = l.options, m = h.threshold, f = h.stack, g = h.stacking, x = l.stackKey, v = "-" + x,
                    b = l.negStacks, y = l.yAxis, w = y.stacks, _ = y.oldStacks;
                for (r = 0; u > r; r++) a = c[r], s = d[r], o = l.index + "," + r, t = b && m > s, i = t ? v : x, w[i] || (w[i] = {}), w[i][a] || (_[i] && _[i][a] ? (w[i][a] = _[i][a], w[i][a].total = null) : w[i][a] = new F(y, y.options.stackLabels, t, a, f)), e = w[i][a], e.points[o] = [e.cum || 0], "percent" === g ? (n = t ? x : v, b && w[n] && w[n][a] ? (n = w[n][a], e.total = n.total = wt(n.total, e.total) + kt(s) || 0) : e.total = E(e.total + (kt(s) || 0))) : e.total = E(e.total + (s || 0)), e.cum = (e.cum || 0) + (s || 0), e.points[o].push(e.cum), p[r] = e.cum;
                "percent" === g && (y.usePercentage = !0), this.stackedYData = p, y.oldStacks = {}
            }
        }, Ue.prototype.setPercentStacks = function () {
            var t = this, e = t.stackKey, n = t.yAxis.stacks, i = t.processedXData;
            me([e, "-" + e], function (e) {
                for (var o, r, a, s, l = i.length; l--;) o = i[l], r = n[e] && n[e][o], a = r && r.points[t.index + "," + l], a && (s = r.total ? 100 / r.total : 0, a[0] = E(a[0] * s), a[1] = E(a[1] * s), t.stackedYData[l] = a[1])
            })
        }, o(H.prototype, {
            addSeries: function (t, e, n) {
                var i, o = this;
                return t && (e = x(e, !0), ye(o, "addSeries", {options: t}, function () {
                    i = o.initSeries(t), o.isDirtyLegend = !0, o.linkSeries(), e && o.redraw(n)
                })), i
            }, addAxis: function (t, e, n, i) {
                var o, a = e ? "xAxis" : "yAxis", s = this.options;
                o = new q(this, r(t, {
                    index: this[a].length,
                    isX: e
                })), s[a] = g(s[a] || {}), s[a].push(t), x(n, !0) && this.redraw(i)
            }, showLoading: function (t) {
                var e = this, n = e.options, i = e.loadingDiv, r = n.loading, a = function () {
                    i && v(i, {
                        left: e.plotLeft + Kt,
                        top: e.plotTop + Kt,
                        width: e.plotWidth + Kt,
                        height: e.plotHeight + Kt
                    })
                };
                i || (e.loadingDiv = i = b(Yt, {className: Jt + "loading"}, o(r.style, {
                    zIndex: 10,
                    display: Qt
                }), e.container), e.loadingSpan = b("span", null, r.labelStyle, i), ve(e, "redraw", a)), e.loadingSpan.innerHTML = t || n.lang.loading, e.loadingShown || (v(i, {
                    opacity: 0,
                    display: ""
                }), _e(i, {opacity: r.style.opacity}, {duration: r.showDuration || 0}), e.loadingShown = !0), a()
            }, hideLoading: function () {
                var t = this.options, e = this.loadingDiv;
                e && _e(e, {opacity: 0}, {
                    duration: t.loading.hideDuration || 100, complete: function () {
                        v(e, {display: Qt})
                    }
                }), this.loadingShown = !1
            }
        }), o(Ge.prototype, {
            update: function (t, e, n, i) {
                function o() {
                    a.applyOptions(t), l(t) && !c(t) && (a.redraw = function () {
                        d && (t && t.marker && t.marker.symbol ? a.graphic = d.destroy() : d.attr(a.pointAttr[a.state || ""])), t && t.dataLabels && a.dataLabel && (a.dataLabel = a.dataLabel.destroy()), a.redraw = null
                    }), r = a.index, s.updateParallelArrays(a, r), u.data[r] = a.options, s.isDirty = s.isDirtyData = !0, !s.fixedBox && s.hasCartesianSeries && (p.isDirtyBox = !0), "point" === u.legendType && p.legend.destroyItem(a), e && p.redraw(n)
                }

                var r, a = this, s = a.series, d = a.graphic, p = s.chart, u = s.options;
                e = x(e, !0), i === !1 ? o() : a.firePointEvent("update", {options: t}, o)
            }, remove: function (t, e) {
                var n, i = this, o = i.series, r = o.points, a = o.chart, s = o.data;
                I(e, a), t = x(t, !0), i.firePointEvent("remove", null, function () {
                    n = he(i, s), s.length === r.length && r.splice(n, 1), s.splice(n, 1), o.options.data.splice(n, 1), o.updateParallelArrays(i, "splice", n, 1), i.destroy(), o.isDirty = !0, o.isDirtyData = !0, t && a.redraw()
                })
            }
        }), o(Ue.prototype, {
            addPoint: function (t, e, n, i) {
                var o, r, a, s, l = this, c = l.options, d = l.data, p = l.graph, u = l.area, h = l.chart,
                    m = l.xAxis && l.xAxis.names, f = p && p.shift || 0, g = c.data, v = l.xData;
                if (I(i, h), n && me([p, u, l.graphNeg, l.areaNeg], function (t) {
                        t && (t.shift = f + 1)
                    }), u && (u.isArea = !0), e = x(e, !0), o = {series: l}, l.pointClass.prototype.applyOptions.apply(o, [t]), a = o.x, s = v.length, l.requireSorting && a < v[s - 1]) for (r = !0; s && v[s - 1] > a;) s--;
                l.updateParallelArrays(o, "splice", s, 0, 0), l.updateParallelArrays(o, s), m && o.name && (m[a] = o.name), g.splice(s, 0, t), r && (l.data.splice(s, 0, null), l.processData()), "point" === c.legendType && l.generatePoints(), n && (d[0] && d[0].remove ? d[0].remove(!1) : (d.shift(), l.updateParallelArrays(o, "shift"), g.shift())), l.isDirty = !0, l.isDirtyData = !0, e && (l.getAttribs(), h.redraw())
            }, remove: function (t, e) {
                var n = this, i = n.chart;
                t = x(t, !0), n.isRemoving || (n.isRemoving = !0, ye(n, "remove", null, function () {
                    n.destroy(), i.isDirtyLegend = i.isDirtyBox = !0, i.linkSeries(), t && i.redraw(e)
                })), n.isRemoving = !1
            }, update: function (t, e) {
                var n, i = this, a = this.chart, s = this.userOptions, l = this.type, c = se[l].prototype,
                    d = ["group", "markerGroup", "dataLabelsGroup"];
                me(d, function (t) {
                    d[t] = i[t], delete i[t]
                }), t = r(s, {
                    animation: !1,
                    index: this.index,
                    pointStart: this.xData[0]
                }, {data: this.options.data}, t), this.remove(!1);
                for (n in c) c.hasOwnProperty(n) && (this[n] = W);
                o(this, se[t.type || l].prototype), me(d, function (t) {
                    i[t] = d[t]
                }), this.init(a, t), a.linkSeries(), x(e, !0) && a.redraw(!1)
            }
        }), o(q.prototype, {
            update: function (t, e) {
                var n = this.chart;
                t = n.options[this.coll][this.options.index] = r(this.userOptions, t), this.destroy(!0), this._addedPlotLB = W, this.init(n, o(t, {events: W})), n.isDirtyBox = !0, x(e, !0) && n.redraw()
            }, remove: function (t) {
                for (var e = this.chart, n = this.coll, i = this.series, o = i.length; o--;) i[o] && i[o].remove(!1);
                h(e.axes, this), h(e[n], this), e.options[n].splice(this.options.index, 1), me(e[n], function (t, e) {
                    t.options.index = e
                }), this.destroy(), e.isDirtyBox = !0, x(t, !0) && e.redraw()
            }, setTitle: function (t, e) {
                this.update({title: t}, e)
            }, setCategories: function (t, e) {
                this.update({categories: t}, e)
            }
        });
        var Ve = y(Ue);
        se.line = Ve, Te.area = r(Ce, {threshold: 0});
        var Je = y(Ue, {
            type: "area", getSegments: function () {
                var t, e, n, i, o = this, r = [], a = [], s = [], l = this.xAxis, c = this.yAxis,
                    d = c.stacks[this.stackKey], p = {}, u = this.points, h = this.options.connectNulls;
                if (this.options.stacking && !this.cropped) {
                    for (n = 0; n < u.length; n++) p[u[n].x] = u[n];
                    for (i in d) null !== d[i].total && s.push(+i);
                    s.sort(function (t, e) {
                        return t - e
                    }), me(s, function (i) {
                        var r, s = 0;
                        if (!h || p[i] && null !== p[i].y) if (p[i]) a.push(p[i]); else {
                            for (n = o.index; n <= c.series.length; n++) if (r = d[i].points[n + "," + i]) {
                                s = r[1];
                                break
                            }
                            t = l.translate(i), e = c.toPixels(s, !0), a.push({
                                y: null,
                                plotX: t,
                                clientX: t,
                                plotY: e,
                                yBottom: e,
                                onMouseOver: Ht
                            })
                        }
                    }), a.length && r.push(a)
                } else Ue.prototype.getSegments.call(this), r = this.segments;
                this.segments = r
            }, getSegmentPath: function (t) {
                var e, n, i = Ue.prototype.getSegmentPath.call(this, t), o = [].concat(i), r = this.options,
                    a = i.length, s = this.yAxis.getThreshold(r.threshold);
                if (3 === a && o.push(ee, i[1], i[2]), r.stacking && !this.closedStacks) for (e = t.length - 1; e >= 0; e--) n = x(t[e].yBottom, s), e < t.length - 1 && r.step && o.push(t[e + 1].plotX, n), o.push(t[e].plotX, n); else this.closeSegment(o, t, s);
                return this.areaPath = this.areaPath.concat(o), i
            }, closeSegment: function (t, e, n) {
                t.push(ee, e[e.length - 1].plotX, n, ee, e[0].plotX, n)
            }, drawGraph: function () {
                this.areaPath = [], Ue.prototype.drawGraph.apply(this);
                var t = this, e = this.areaPath, n = this.options, i = n.negativeColor, o = n.negativeFillColor,
                    r = [["area", this.color, n.fillColor]];
                (i || o) && r.push(["areaNeg", i, o]), me(r, function (i) {
                    var o = i[0], r = t[o];
                    r ? r.animate({d: e}) : t[o] = t.chart.renderer.path(e).attr({
                        fill: x(i[2], ze(i[1]).setOpacity(x(n.fillOpacity, .75)).get()),
                        zIndex: 0
                    }).add(t.group)
                })
            }, drawLegendSymbol: Xe.drawRectangle
        });
        se.area = Je, Te.spline = r(Ce);
        var Ze = y(Ue, {
            type: "spline", getPointSpline: function (t, e, n) {
                var i, o, r, a, s, l = 1.5, c = l + 1, d = e.plotX, p = e.plotY, u = t[n - 1], h = t[n + 1];
                if (u && h) {
                    var m, f = u.plotX, g = u.plotY, x = h.plotX, v = h.plotY;
                    i = (l * d + f) / c, o = (l * p + g) / c, r = (l * d + x) / c, a = (l * p + v) / c, m = (a - o) * (r - d) / (r - i) + p - a, o += m, a += m, o > g && o > p ? (o = wt(g, p), a = 2 * p - o) : g > o && p > o && (o = _t(g, p), a = 2 * p - o), a > v && a > p ? (a = wt(v, p), o = 2 * p - a) : v > a && p > a && (a = _t(v, p), o = 2 * p - a), e.rightContX = r, e.rightContY = a
                }
                return n ? (s = ["C", u.rightContX || u.plotX, u.rightContY || u.plotY, i || d, o || p, d, p], u.rightContX = u.rightContY = null) : s = [te, d, p], s
            }
        });
        se.spline = Ze, Te.areaspline = r(Te.area);
        var Ke = Je.prototype, Qe = y(Ze, {
            type: "areaspline",
            closedStacks: !0,
            getSegmentPath: Ke.getSegmentPath,
            closeSegment: Ke.closeSegment,
            drawGraph: Ke.drawGraph,
            drawLegendSymbol: Xe.drawRectangle
        });
        se.areaspline = Qe, Te.column = r(Ce, {
            borderColor: "#FFFFFF",
            borderRadius: 0,
            groupPadding: .2,
            marker: null,
            pointPadding: .1,
            minPointLength: 0,
            cropThreshold: 50,
            pointRange: null,
            states: {
                hover: {brightness: .1, shadow: !1, halo: !1},
                select: {color: "#C0C0C0", borderColor: "#000000", shadow: !1}
            },
            dataLabels: {align: null, verticalAlign: null, y: null},
            stickyTracking: !1,
            tooltip: {distance: 6},
            threshold: 0
        });
        var tn = y(Ue, {
            type: "column",
            pointAttrToOptions: {stroke: "borderColor", fill: "color", r: "borderRadius"},
            cropShoulder: 0,
            trackerGroups: ["group", "dataLabelsGroup"],
            negStacks: !0,
            init: function () {
                Ue.prototype.init.apply(this, arguments);
                var t = this, e = t.chart;
                e.hasRendered && me(e.series, function (e) {
                    e.type === t.type && (e.isDirty = !0)
                })
            },
            getColumnMetrics: function () {
                var t, e, n = this, i = n.options, o = n.xAxis, r = n.yAxis, a = o.reversed, s = {}, l = 0;
                i.grouping === !1 ? l = 1 : me(n.chart.series, function (i) {
                    var o = i.options, a = i.yAxis;
                    i.type === n.type && i.visible && r.len === a.len && r.pos === a.pos && (o.stacking ? (t = i.stackKey, s[t] === W && (s[t] = l++), e = s[t]) : o.grouping !== !1 && (e = l++), i.columnIndex = e)
                });
                var c = _t(kt(o.transA) * (o.ordinalSlope || i.pointRange || o.closestPointRange || o.tickInterval || 1), o.len),
                    d = c * i.groupPadding, p = c - 2 * d, u = p / l, h = i.pointWidth,
                    f = m(h) ? (u - h) / 2 : u * i.pointPadding, g = x(h, u - 2 * f),
                    v = (a ? l - (n.columnIndex || 0) : n.columnIndex) || 0, b = f + (d + v * u - c / 2) * (a ? -1 : 1);
                return n.columnMetrics = {width: g, offset: b}
            },
            translate: function () {
                var t = this, e = t.chart, n = t.options,
                    i = t.borderWidth = x(n.borderWidth, t.activePointCount > .5 * t.xAxis.len ? 0 : 1), o = t.yAxis,
                    r = n.threshold, a = t.translatedThreshold = o.getThreshold(r), s = x(n.minPointLength, 5),
                    l = t.getColumnMetrics(), c = l.width, d = t.barW = wt(c, 1 + 2 * i), p = t.pointXOffset = l.offset,
                    u = -(i % 2 ? .5 : 0), h = i % 2 ? .5 : 1;
                e.renderer.isVML && e.inverted && (h += 1), n.pointPadding && (d = yt(d)), Ue.prototype.translate.apply(t), me(t.points, function (n) {
                    var i, r, l, m = x(n.yBottom, a), f = _t(wt(-999 - m, n.plotY), o.len + 999 + m), g = n.plotX + p,
                        v = d, b = _t(f, m), y = wt(f, m) - b;
                    kt(y) < s && s && (y = s, b = vt(kt(b - a) > s ? m - s : a - (o.translate(n.y, 0, 1, 0, 1) <= a ? s : 0))), n.barX = g, n.pointWidth = c, n.tooltipPos = e.inverted ? [o.len - f, t.xAxis.len - g - v / 2] : [g + v / 2, f + o.pos - e.plotTop], i = vt(g + v) + u, g = vt(g) + u, v = i - g, l = kt(b) < .5, r = vt(b + y) + h, b = vt(b) + h, y = r - b, l && (b -= 1, y += 1), n.shapeType = "rect", n.shapeArgs = {
                        x: g,
                        y: b,
                        width: v,
                        height: y
                    }
                })
            },
            getSymbol: Ht,
            drawLegendSymbol: Xe.drawRectangle,
            drawGraph: Ht,
            drawPoints: function () {
                var t, e, n = this, i = this.chart, o = n.options, a = i.renderer, s = o.animationLimit || 250;
                me(n.points, function (l) {
                    var c, d = l.plotY, p = l.graphic;
                    d === W || isNaN(d) || null === l.y ? p && (l.graphic = p.destroy()) : (t = l.shapeArgs, c = m(n.borderWidth) ? {"stroke-width": n.borderWidth} : {}, e = l.pointAttr[l.selected ? re : ie] || n.pointAttr[ie], p ? (ke(p), p.attr(c)[i.pointCount < s ? "animate" : "attr"](r(t))) : l.graphic = p = a[l.shapeType](t).attr(e).attr(c).add(n.group).shadow(o.shadow, null, o.stacking && !o.borderRadius))
                })
            },
            animate: function (t) {
                var e, n = this, i = this.yAxis, o = n.options, r = this.chart.inverted, a = {};
                Dt && (t ? (a.scaleY = .001, e = _t(i.pos + i.len, wt(i.pos, i.toPixels(o.threshold))), r ? a.translateX = e - i.len : a.translateY = e, n.group.attr(a)) : (a.scaleY = 1, a[r ? "translateX" : "translateY"] = i.pos, n.group.animate(a, n.options.animation), n.animate = null))
            },
            remove: function () {
                var t = this, e = t.chart;
                e.hasRendered && me(e.series, function (e) {
                    e.type === t.type && (e.isDirty = !0)
                }), Ue.prototype.remove.apply(t, arguments)
            }
        });
        se.column = tn, Te.bar = r(Te.column);
        var en = y(tn, {type: "bar", inverted: !0});
        se.bar = en, Te.scatter = r(Ce, {
            lineWidth: 0,
            tooltip: {
                headerFormat: '<span style="color:{series.color}">●</span> <span style="font-size: 10px;"> {series.name}</span><br/>',
                pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
            },
            stickyTracking: !1
        });
        var nn = y(Ue, {
            type: "scatter",
            sorted: !1,
            requireSorting: !1,
            noSharedTooltip: !0,
            trackerGroups: ["markerGroup", "dataLabelsGroup"],
            takeOrdinalPosition: !1,
            singularTooltips: !0,
            drawGraph: function () {
                this.options.lineWidth && Ue.prototype.drawGraph.call(this)
            }
        });
        se.scatter = nn, Te.pie = r(Ce, {
            borderColor: "#FFFFFF",
            borderWidth: 1,
            center: [null, null],
            clip: !1,
            colorByPoint: !0,
            dataLabels: {
                distance: 30, enabled: !0, formatter: function () {
                    return this.point.name
                }
            },
            ignoreHiddenPoint: !0,
            legendType: "point",
            marker: null,
            size: null,
            showInLegend: !1,
            slicedOffset: 10,
            states: {hover: {brightness: .1, shadow: !1}},
            stickyTracking: !1,
            tooltip: {followPointer: !0}
        });
        var on = y(Ge, {
            init: function () {
                Ge.prototype.init.apply(this, arguments);
                var t, e = this;
                return e.y < 0 && (e.y = null), o(e, {
                    visible: e.visible !== !1,
                    name: x(e.name, "Slice")
                }), t = function (t) {
                    e.slice("select" === t.type)
                }, ve(e, "select", t), ve(e, "unselect", t), e
            }, setVisible: function (t) {
                var e = this, n = e.series, i = n.chart;
                e.visible = e.options.visible = t = t === W ? !e.visible : t, n.options.data[he(e, n.data)] = e.options, me(["graphic", "dataLabel", "connector", "shadowGroup"], function (n) {
                    e[n] && e[n][t ? "show" : "hide"](!0)
                }), e.legendItem && i.legend.colorizeItem(e, t), !n.isDirty && n.options.ignoreHiddenPoint && (n.isDirty = !0, i.redraw())
            }, slice: function (t, e, n) {
                var i, o = this, r = o.series, a = r.chart;
                I(n, a), e = x(e, !0), o.sliced = o.options.sliced = t = m(t) ? t : !o.sliced, r.options.data[he(o, r.data)] = o.options, i = t ? o.slicedTranslation : {
                    translateX: 0,
                    translateY: 0
                }, o.graphic.animate(i), o.shadowGroup && o.shadowGroup.animate(i)
            }, haloPath: function (t) {
                var e = this.shapeArgs, n = this.series.chart;
                return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(n.plotLeft + e.x, n.plotTop + e.y, e.r + t, e.r + t, {
                    innerR: this.shapeArgs.r,
                    start: e.start,
                    end: e.end
                })
            }
        }), rn = {
            type: "pie",
            isCartesian: !1,
            pointClass: on,
            requireSorting: !1,
            noSharedTooltip: !0,
            trackerGroups: ["group", "dataLabelsGroup"],
            axisTypes: [],
            pointAttrToOptions: {stroke: "borderColor", "stroke-width": "borderWidth", fill: "color"},
            singularTooltips: !0,
            getColor: Ht,
            animate: function (t) {
                var e = this, n = e.points, i = e.startAngleRad;
                t || (me(n, function (t) {
                    var n = t.graphic, o = t.shapeArgs;
                    n && (n.attr({r: e.center[3] / 2, start: i, end: i}), n.animate({
                        r: o.r,
                        start: o.start,
                        end: o.end
                    }, e.options.animation))
                }), e.animate = null)
            },
            setData: function (t, e, n, i) {
                Ue.prototype.setData.call(this, t, !1, n, i), this.processData(), this.generatePoints(), x(e, !0) && this.chart.redraw(n)
            },
            generatePoints: function () {
                var t, e, n, i, o = 0, r = this.options.ignoreHiddenPoint;
                for (Ue.prototype.generatePoints.call(this), e = this.points, n = e.length, t = 0; n > t; t++) i = e[t], o += r && !i.visible ? 0 : i.y;
                for (this.total = o, t = 0; n > t; t++) i = e[t], i.percentage = o > 0 ? i.y / o * 100 : 0, i.total = o
            },
            translate: function (t) {
                this.generatePoints();
                var e, n, i, o, r, a, s, l = this, c = 0, d = 1e3, p = l.options, u = p.slicedOffset,
                    h = u + p.borderWidth, m = p.startAngle || 0, f = l.startAngleRad = Ct / 180 * (m - 90),
                    g = l.endAngleRad = Ct / 180 * (x(p.endAngle, m + 360) - 90), v = g - f, b = l.points,
                    y = p.dataLabels.distance, w = p.ignoreHiddenPoint, _ = b.length;
                for (t || (l.center = t = l.getCenter()), l.getX = function (e, n) {
                    return i = xt.asin(_t((e - t[1]) / (t[2] / 2 + y), 1)), t[0] + (n ? -1 : 1) * (St(i) * (t[2] / 2 + y))
                }, a = 0; _ > a; a++) s = b[a], e = f + c * v, (!w || s.visible) && (c += s.percentage / 100), n = f + c * v, s.shapeType = "arc", s.shapeArgs = {
                    x: t[0],
                    y: t[1],
                    r: t[2] / 2,
                    innerR: t[3] / 2,
                    start: vt(e * d) / d,
                    end: vt(n * d) / d
                }, i = (n + e) / 2, i > 1.5 * Ct ? i -= 2 * Ct : -Ct / 2 > i && (i += 2 * Ct), s.slicedTranslation = {
                    translateX: vt(St(i) * u),
                    translateY: vt(Tt(i) * u)
                }, o = St(i) * t[2] / 2, r = Tt(i) * t[2] / 2, s.tooltipPos = [t[0] + .7 * o, t[1] + .7 * r], s.half = -Ct / 2 > i || i > Ct / 2 ? 1 : 0, s.angle = i, h = _t(h, y / 2), s.labelPos = [t[0] + o + St(i) * y, t[1] + r + Tt(i) * y, t[0] + o + St(i) * h, t[1] + r + Tt(i) * h, t[0] + o, t[1] + r, 0 > y ? "center" : s.half ? "right" : "left", i]
            },
            drawGraph: null,
            drawPoints: function () {
                var t, e, n, i, r = this, a = r.chart, s = a.renderer, l = r.options.shadow;
                l && !r.shadowGroup && (r.shadowGroup = s.g("shadow").add(r.group)), me(r.points, function (a) {
                    e = a.graphic, i = a.shapeArgs, n = a.shadowGroup, l && !n && (n = a.shadowGroup = s.g("shadow").add(r.shadowGroup)), t = a.sliced ? a.slicedTranslation : {
                        translateX: 0,
                        translateY: 0
                    }, n && n.attr(t), e ? e.animate(o(i, t)) : a.graphic = e = s[a.shapeType](i).setRadialReference(r.center).attr(a.pointAttr[a.selected ? re : ie]).attr({"stroke-linejoin": "round"}).attr(t).add(r.group).shadow(l, n), void 0 !== a.visible && a.setVisible(a.visible)
                })
            },
            sortByAngle: function (t, e) {
                t.sort(function (t, n) {
                    return void 0 !== t.angle && (n.angle - t.angle) * e
                })
            },
            drawLegendSymbol: Xe.drawRectangle,
            getCenter: Ye.getCenter,
            getSymbol: Ht
        };
        rn = y(Ue, rn), se.pie = rn, Ue.prototype.drawDataLabels = function () {
            var t, e, n, i, a = this, s = a.options, l = s.cursor, c = s.dataLabels, d = a.points,
                p = a.hasRendered || 0;
            (c.enabled || a._hasPointLabels) && (a.dlProcessOptions && a.dlProcessOptions(c), i = a.plotGroup("dataLabelsGroup", "data-labels", c.defer ? Vt : Zt, c.zIndex || 6), x(c.defer, !0) && (i.attr({opacity: +p}), p || ve(a, "afterAnimate", function () {
                a.visible && i.show(), i[s.animation ? "animate" : "attr"]({opacity: 1}, {duration: 200})
            })), e = c, me(d, function (s) {
                var d, p, u, h, f, g = s.dataLabel, v = s.connector, b = !0;
                if (t = s.options && s.options.dataLabels, d = x(t && t.enabled, e.enabled), g && !d) s.dataLabel = g.destroy(); else if (d) {
                    if (c = r(e, t), f = c.rotation, p = s.getLabelConfig(), n = c.format ? T(c.format, p) : c.formatter.call(p, c), c.style.color = x(c.color, c.style.color, a.color, "black"), g) m(n) ? (g.attr({text: n}), b = !1) : (s.dataLabel = g = g.destroy(), v && (s.connector = v.destroy())); else if (m(n)) {
                        u = {
                            fill: c.backgroundColor,
                            stroke: c.borderColor,
                            "stroke-width": c.borderWidth,
                            r: c.borderRadius || 0,
                            rotation: f,
                            padding: c.padding,
                            zIndex: 1
                        };
                        for (h in u) u[h] === W && delete u[h];
                        g = s.dataLabel = a.chart.renderer[f ? "text" : "label"](n, 0, -999, null, null, null, c.useHTML).attr(u).css(o(c.style, l && {cursor: l})).add(i).shadow(c.shadow)
                    }
                    g && a.alignDataLabel(s, g, c, null, b)
                }
            }))
        }, Ue.prototype.alignDataLabel = function (t, e, n, i, r) {
            var a, s = this.chart, l = s.inverted, c = x(t.plotX, -999), d = x(t.plotY, -999), p = e.getBBox(),
                u = this.visible && (t.series.forceDL || s.isInsidePlot(c, vt(d), l) || i && s.isInsidePlot(c, l ? i.x + 1 : i.y + i.height - 1, l));
            u && (i = o({
                x: l ? s.plotWidth - d : c,
                y: vt(l ? s.plotHeight - c : d),
                width: 0,
                height: 0
            }, i), o(n, {
                width: p.width,
                height: p.height
            }), n.rotation ? e[r ? "attr" : "animate"]({
                x: i.x + n.x + i.width / 2,
                y: i.y + n.y + i.height / 2
            }).attr({align: n.align}) : (e.align(n, null, i), a = e.alignAttr, "justify" === x(n.overflow, "justify") ? this.justifyDataLabel(e, n, a, p, i, r) : x(n.crop, !0) && (u = s.isInsidePlot(a.x, a.y) && s.isInsidePlot(a.x + p.width, a.y + p.height)))), u || (e.attr({y: -999}), e.placed = !1)
        }, Ue.prototype.justifyDataLabel = function (t, e, n, i, o, r) {
            var a, s, l = this.chart, c = e.align, d = e.verticalAlign;
            a = n.x, 0 > a && ("right" === c ? e.align = "left" : e.x = -a, s = !0), a = n.x + i.width, a > l.plotWidth && ("left" === c ? e.align = "right" : e.x = l.plotWidth - a, s = !0), a = n.y, 0 > a && ("bottom" === d ? e.verticalAlign = "top" : e.y = -a, s = !0), a = n.y + i.height, a > l.plotHeight && ("top" === d ? e.verticalAlign = "bottom" : e.y = l.plotHeight - a, s = !0), s && (t.placed = !r, t.align(e, null, o))
        }, se.pie && (se.pie.prototype.drawDataLabels = function () {
            var t, e, n, i, o, r, a, s, l, c, d, p, u, h = this, m = h.data, f = h.chart, g = h.options.dataLabels,
                v = x(g.connectorPadding, 10), b = x(g.connectorWidth, 1), y = f.plotWidth, w = f.plotHeight,
                _ = x(g.softConnector, !0), k = g.distance, S = h.center, T = S[2] / 2, C = S[1], A = k > 0,
                j = [[], []], P = [0, 0, 0, 0], L = function (t, e) {
                    return e.y - t.y
                };
            if (h.visible && (g.enabled || h._hasPointLabels)) {
                for (Ue.prototype.drawDataLabels.apply(h), me(m, function (t) {
                    t.dataLabel && t.visible && j[t.half].push(t)
                }), p = 2; p--;) {
                    var M, E, I, N, D = [], O = [], B = j[p], R = B.length;
                    if (R) {
                        for (h.sortByAngle(B, p - .5), u = a = 0; !a && B[u];) a = B[u] && B[u].dataLabel && (B[u].dataLabel.getBBox().height || 21), u++;
                        if (k > 0) {
                            for (I = _t(C + T + k, f.plotHeight), E = wt(0, C - T - k); I >= E; E += a) D.push(E);
                            if (M = D.length, R > M) {
                                for (d = [].concat(B), d.sort(L), u = R; u--;) d[u].rank = u;
                                for (u = R; u--;) B[u].rank >= M && B.splice(u, 1);
                                R = B.length
                            }
                            for (u = 0; R > u; u++) {
                                t = B[u], r = t.labelPos;
                                var q, H, F = 9999;
                                for (H = 0; M > H; H++) q = kt(D[H] - r[1]), F > q && (F = q, N = H);
                                if (u > N && null !== D[u]) N = u; else if (R - u + N > M && null !== D[u]) for (N = M - R + u; null === D[N];) N++; else for (; null === D[N];) N++;
                                O.push({i: N, y: D[N]}), D[N] = null
                            }
                            O.sort(L)
                        }
                        for (u = 0; R > u; u++) {
                            var W, $;
                            t = B[u], r = t.labelPos, i = t.dataLabel, c = t.visible === !1 ? Vt : Zt, $ = r[1], k > 0 ? (W = O.pop(), N = W.i, l = W.y, ($ > l && null !== D[N + 1] || l > $ && null !== D[N - 1]) && (l = _t(wt(0, $), f.plotHeight))) : l = $, s = g.justify ? S[0] + (p ? -1 : 1) * (T + k) : h.getX(l === C - T - k || l === C + T + k ? $ : l, p), i._attr = {
                                visibility: c,
                                align: r[6]
                            }, i._pos = {
                                x: s + g.x + ({left: v, right: -v}[r[6]] || 0),
                                y: l + g.y - 10
                            }, i.connX = s, i.connY = l, null === this.options.size && (o = i.width, v > s - o ? P[3] = wt(vt(o - s + v), P[3]) : s + o > y - v && (P[1] = wt(vt(s + o - y + v), P[1])), 0 > l - a / 2 ? P[0] = wt(vt(-l + a / 2), P[0]) : l + a / 2 > w && (P[2] = wt(vt(l + a / 2 - w), P[2])))
                        }
                    }
                }
                (0 === z(P) || this.verifyDataLabelOverflow(P)) && (this.placeDataLabels(), A && b && me(this.points, function (t) {
                    e = t.connector, r = t.labelPos, i = t.dataLabel, i && i._pos ? (c = i._attr.visibility, s = i.connX, l = i.connY, n = _ ? [te, s + ("left" === r[6] ? 5 : -5), l, "C", s, l, 2 * r[2] - r[4], 2 * r[3] - r[5], r[2], r[3], ee, r[4], r[5]] : [te, s + ("left" === r[6] ? 5 : -5), l, ee, r[2], r[3], ee, r[4], r[5]], e ? (e.animate({d: n}), e.attr("visibility", c)) : t.connector = e = h.chart.renderer.path(n).attr({
                        "stroke-width": b,
                        stroke: g.connectorColor || t.color || "#606060",
                        visibility: c
                    }).add(h.dataLabelsGroup)) : e && (t.connector = e.destroy())
                }))
            }
        }, se.pie.prototype.placeDataLabels = function () {
            me(this.points, function (t) {
                var e, n = t.dataLabel;
                n && (e = n._pos, e ? (n.attr(n._attr), n[n.moved ? "animate" : "attr"](e), n.moved = !0) : n && n.attr({y: -999}))
            })
        }, se.pie.prototype.alignDataLabel = Ht, se.pie.prototype.verifyDataLabelOverflow = function (t) {
            var e, n = this.center, i = this.options, o = i.center, r = i.minSize || 80, a = r;
            return null !== o[0] ? a = wt(n[2] - wt(t[1], t[3]), r) : (a = wt(n[2] - t[1] - t[3], r), n[0] += (t[3] - t[1]) / 2), null !== o[1] ? a = wt(_t(a, n[2] - wt(t[0], t[2])), r) : (a = wt(_t(a, n[2] - t[0] - t[2]), r), n[1] += (t[0] - t[2]) / 2), a < n[2] ? (n[2] = a, this.translate(n), me(this.points, function (t) {
                t.dataLabel && (t.dataLabel._pos = null)
            }), this.drawDataLabels && this.drawDataLabels()) : e = !0, e
        }), se.column && (se.column.prototype.alignDataLabel = function (t, e, n, i, o) {
            var a = this.chart, s = a.inverted, l = t.dlBox || t.shapeArgs,
                c = t.below || t.plotY > x(this.translatedThreshold, a.plotSizeY),
                d = x(n.inside, !!this.options.stacking);
            l && (i = r(l), s && (i = {
                x: a.plotWidth - i.y - i.height,
                y: a.plotHeight - i.x - i.width,
                width: i.height,
                height: i.width
            }), d || (s ? (i.x += c ? 0 : i.width, i.width = 0) : (i.y += c ? i.height : 0, i.height = 0))), n.align = x(n.align, !s || d ? "center" : c ? "right" : "left"), n.verticalAlign = x(n.verticalAlign, s || d ? "middle" : c ? "top" : "bottom"), Ue.prototype.alignDataLabel.call(this, t, e, n, i, o)
        });
        var an = le.TrackerMixin = {
            drawTrackerPoint: function () {
                var t = this, e = t.chart, n = e.pointer, i = t.options.cursor, o = i && {cursor: i}, r = function (n) {
                    var i, o = n.target;
                    for (e.hoverSeries !== t && t.onMouseOver(); o && !i;) i = o.point, o = o.parentNode;
                    i !== W && i !== e.hoverPoint && i.onMouseOver(n)
                };
                me(t.points, function (t) {
                    t.graphic && (t.graphic.element.point = t), t.dataLabel && (t.dataLabel.element.point = t)
                }), t._hasTracking || (me(t.trackerGroups, function (e) {
                    t[e] && (t[e].addClass(Jt + "tracker").on("mouseover", r).on("mouseout", function (t) {
                        n.onTrackerMouseOut(t)
                    }).css(o), X && t[e].on("touchstart", r))
                }), t._hasTracking = !0)
            }, drawTrackerGraph: function () {
                var t, e, n = this, i = n.options, o = i.trackByArea, r = [].concat(o ? n.areaPath : n.graphPath),
                    a = r.length, s = n.chart, l = s.pointer, c = s.renderer, d = s.options.tooltip.snap, p = n.tracker,
                    u = i.cursor, h = u && {cursor: u}, m = n.singlePoints, f = function () {
                        s.hoverSeries !== n && n.onMouseOver()
                    }, g = "rgba(192,192,192," + (Dt ? 1e-4 : .002) + ")";
                if (a && !o) for (e = a + 1; e--;) r[e] === te && r.splice(e + 1, 0, r[e + 1] - d, r[e + 2], ee), (e && r[e] === te || e === a) && r.splice(e, 0, ee, r[e - 2] + d, r[e - 1]);
                for (e = 0; e < m.length; e++) t = m[e], r.push(te, t.plotX - d, t.plotY, ee, t.plotX + d, t.plotY);
                p ? p.attr({d: r}) : (n.tracker = c.path(r).attr({
                    "stroke-linejoin": "round",
                    visibility: n.visible ? Zt : Vt,
                    stroke: g,
                    fill: o ? g : Qt,
                    "stroke-width": i.lineWidth + (o ? 0 : 2 * d),
                    zIndex: 2
                }).add(n.group), me([n.tracker, n.markerGroup], function (t) {
                    t.addClass(Jt + "tracker").on("mouseover", f).on("mouseout", function (t) {
                        l.onTrackerMouseOut(t)
                    }).css(h), X && t.on("touchstart", f)
                }))
            }
        };
        se.column && (tn.prototype.drawTracker = an.drawTrackerPoint), se.pie && (se.pie.prototype.drawTracker = an.drawTrackerPoint), se.scatter && (nn.prototype.drawTracker = an.drawTrackerPoint), o($e.prototype, {
            setItemEvents: function (t, e, n, i, o) {
                var r = this;
                (n ? e : t.legendGroup).on("mouseover", function () {
                    t.setState(oe), e.css(r.options.itemHoverStyle)
                }).on("mouseout", function () {
                    e.css(t.visible ? i : o), t.setState()
                }).on("click", function (e) {
                    var n = "legendItemClick", i = function () {
                        t.setVisible()
                    };
                    e = {browserEvent: e}, t.firePointEvent ? t.firePointEvent(n, e, i) : ye(t, n, e, i)
                })
            }, createCheckboxForItem: function (t) {
                var e = this;
                t.checkbox = b("input", {
                    type: "checkbox",
                    checked: t.selected,
                    defaultChecked: t.selected
                }, e.options.itemCheckboxStyle, e.chart.container), ve(t.checkbox, "click", function (e) {
                    var n = e.target;
                    ye(t, "checkboxClick", {checked: n.checked}, function () {
                        t.select()
                    })
                })
            }
        }), G.legend.itemStyle.cursor = "pointer", o(H.prototype, {
            showResetZoom: function () {
                var t = this, e = G.lang, n = t.options.chart.resetZoomButton, i = n.theme, o = i.states,
                    r = "chart" === n.relativeTo ? null : "plotBox";
                this.resetZoomButton = t.renderer.button(e.resetZoom, null, null, function () {
                    t.zoomOut()
                }, i, o && o.hover).attr({
                    align: n.position.align,
                    title: e.resetZoomTitle
                }).add().align(n.position, !1, r)
            }, zoomOut: function () {
                var t = this;
                ye(t, "selection", {resetSelection: !0}, function () {
                    t.zoom()
                })
            }, zoom: function (t) {
                var e, n, i = this, o = i.pointer, r = !1;
                !t || t.resetSelection ? me(i.axes, function (t) {
                    e = t.zoom()
                }) : me(t.xAxis.concat(t.yAxis), function (t) {
                    var n = t.axis, i = n.isXAxis;
                    (o[i ? "zoomX" : "zoomY"] || o[i ? "pinchX" : "pinchY"]) && (e = n.zoom(t.min, t.max), n.displayBtn && (r = !0))
                }), n = i.resetZoomButton, r && !n ? i.showResetZoom() : !r && l(n) && (i.resetZoomButton = n.destroy()), e && i.redraw(x(i.options.chart.animation, t && t.animation, i.pointCount < 100))
            }, pan: function (t, e) {
                var n, i = this, o = i.hoverPoints;
                o && me(o, function (t) {
                    t.setState()
                }), me("xy" === e ? [1, 0] : [1], function (e) {
                    var o = t[e ? "chartX" : "chartY"], r = i[e ? "xAxis" : "yAxis"][0],
                        a = i[e ? "mouseDownX" : "mouseDownY"], s = (r.pointRange || 0) / 2, l = r.getExtremes(),
                        c = r.toValue(a - o, !0) + s, d = r.toValue(a + i[e ? "plotWidth" : "plotHeight"] - o, !0) - s;
                    r.series.length && c > _t(l.dataMin, l.min) && d < wt(l.dataMax, l.max) && (r.setExtremes(c, d, !1, !1, {trigger: "pan"}), n = !0), i[e ? "mouseDownX" : "mouseDownY"] = o
                }), n && i.redraw(!1), v(i.container, {cursor: "move"})
            }
        }), o(Ge.prototype, {
            select: function (t, e) {
                var n = this, i = n.series, o = i.chart;
                t = x(t, !n.selected), n.firePointEvent(t ? "select" : "unselect", {accumulate: e}, function () {
                    n.selected = n.options.selected = t, i.options.data[he(n, i.data)] = n.options, n.setState(t && re), e || me(o.getSelectedPoints(), function (t) {
                        t.selected && t !== n && (t.selected = t.options.selected = !1, i.options.data[he(t, i.data)] = t.options, t.setState(ie), t.firePointEvent("unselect"))
                    })
                })
            }, onMouseOver: function (t) {
                var e = this, n = e.series, i = n.chart, o = i.tooltip, r = i.hoverPoint;
                r && r !== e && r.onMouseOut(), e.firePointEvent("mouseOver"), !o || o.shared && !n.noSharedTooltip || o.refresh(e, t), e.setState(oe), i.hoverPoint = e
            }, onMouseOut: function () {
                var t = this.series.chart, e = t.hoverPoints;
                this.firePointEvent("mouseOut"), e && -1 !== he(this, e) || (this.setState(), t.hoverPoint = null)
            }, importEvents: function () {
                if (!this.hasImportedEvents) {
                    var t, e = this, n = r(e.series.options.point, e.options), i = n.events;
                    e.events = i;
                    for (t in i) ve(e, t, i[t]);
                    this.hasImportedEvents = !0
                }
            }, setState: function (t, e) {
                var n, i, a, s, l = this, c = l.plotX, d = l.plotY, p = l.series, u = p.options.states,
                    h = Te[p.type].marker && p.options.marker, m = h && !h.enabled, f = h && h.states[t],
                    g = f && f.enabled === !1, x = p.stateMarkerGraphic, v = l.marker || {}, b = p.chart, y = p.halo;
                t = t || ie, s = l.pointAttr[t] || p.pointAttr[t], t === l.state && !e || l.selected && t !== re || u[t] && u[t].enabled === !1 || t && (g || m && f.enabled === !1) || t && v.states && v.states[t] && v.states[t].enabled === !1 || (l.graphic ? (n = h && l.graphic.symbolName && s.r, l.graphic.attr(r(s, n ? {
                    x: c - n,
                    y: d - n,
                    width: 2 * n,
                    height: 2 * n
                } : {})), x && x.hide()) : (t && f && (n = f.radius, a = v.symbol || p.symbol, x && x.currentSymbol !== a && (x = x.destroy()), x ? x[e ? "animate" : "attr"]({
                    x: c - n,
                    y: d - n
                }) : a && (p.stateMarkerGraphic = x = b.renderer.symbol(a, c - n, d - n, 2 * n, 2 * n).attr(s).add(p.markerGroup), x.currentSymbol = a)), x && x[t && b.isInsidePlot(c, d, b.inverted) ? "show" : "hide"]()), i = u[t] && u[t].halo, i && i.size ? (y || (p.halo = y = b.renderer.path().add(p.seriesGroup)), y.attr(o({fill: ze(l.color || p.color).setOpacity(i.opacity).get()}, i.attributes))[e ? "animate" : "attr"]({d: l.haloPath(i.size)})) : y && y.attr({d: []}), l.state = t)
            }, haloPath: function (t) {
                var e = this.series, n = e.chart, i = e.getPlotBox(), o = n.inverted;
                return n.renderer.symbols.circle(i.translateX + (o ? e.yAxis.len - this.plotY : this.plotX) - t, i.translateY + (o ? e.xAxis.len - this.plotX : this.plotY) - t, 2 * t, 2 * t)
            }
        }), o(Ue.prototype, {
            onMouseOver: function () {
                var t = this, e = t.chart, n = e.hoverSeries;
                n && n !== t && n.onMouseOut(), t.options.events.mouseOver && ye(t, "mouseOver"),
                    t.setState(oe), e.hoverSeries = t
            }, onMouseOut: function () {
                var t = this, e = t.options, n = t.chart, i = n.tooltip, o = n.hoverPoint;
                o && o.onMouseOut(), t && e.events.mouseOut && ye(t, "mouseOut"), !i || e.stickyTracking || i.shared && !t.noSharedTooltip || i.hide(), t.setState(), n.hoverSeries = null
            }, setState: function (t) {
                var e, n = this, i = n.options, o = n.graph, r = n.graphNeg, a = i.states, s = i.lineWidth;
                if (t = t || ie, n.state !== t) {
                    if (n.state = t, a[t] && a[t].enabled === !1) return;
                    t && (s = a[t].lineWidth || s + (a[t].lineWidthPlus || 0)), o && !o.dashstyle && (e = {"stroke-width": s}, o.attr(e), r && r.attr(e))
                }
            }, setVisible: function (t, e) {
                var n, i = this, o = i.chart, r = i.legendItem, a = o.options.chart.ignoreHiddenSeries, s = i.visible;
                i.visible = t = i.userOptions.visible = t === W ? !s : t, n = t ? "show" : "hide", me(["group", "dataLabelsGroup", "markerGroup", "tracker"], function (t) {
                    i[t] && i[t][n]()
                }), o.hoverSeries === i && i.onMouseOut(), r && o.legend.colorizeItem(i, t), i.isDirty = !0, i.options.stacking && me(o.series, function (t) {
                    t.options.stacking && t.visible && (t.isDirty = !0)
                }), me(i.linkedSeries, function (e) {
                    e.setVisible(t, !1)
                }), a && (o.isDirtyBox = !0), e !== !1 && o.redraw(), ye(i, n)
            }, setTooltipPoints: function (t) {
                var e, n, i, o, r, a, s, l = this, c = [], d = l.xAxis, p = d && d.getExtremes(),
                    u = d ? d.tooltipLen || d.len : l.chart.plotSizeX, h = [];
                if (l.options.enableMouseTracking !== !1 && !l.singularTooltips) {
                    for (t && (l.tooltipPoints = null), me(l.segments || l.points, function (t) {
                        c = c.concat(t)
                    }), d && d.reversed && (c = c.reverse()), l.orderTooltipPoints && l.orderTooltipPoints(c), e = c.length, s = 0; e > s; s++) if (o = c[s], r = o.x, r >= p.min && r <= p.max) for (a = c[s + 1], n = i === W ? 0 : i + 1, i = c[s + 1] ? _t(wt(0, bt((o.clientX + (a ? a.wrappedClientX || a.clientX : u)) / 2)), u) : u; n >= 0 && i >= n;) h[n++] = o;
                    l.tooltipPoints = h
                }
            }, show: function () {
                this.setVisible(!0)
            }, hide: function () {
                this.setVisible(!1)
            }, select: function (t) {
                var e = this;
                e.selected = t = t === W ? !e.selected : t, e.checkbox && (e.checkbox.checked = t), ye(e, t ? "select" : "unselect")
            }, drawTracker: an.drawTrackerGraph
        }), o(le, {
            Axis: q,
            Chart: H,
            Color: ze,
            Point: Ge,
            Tick: R,
            Renderer: $,
            Series: Ue,
            SVGElement: B,
            SVGRenderer: Le,
            arrayMin: P,
            arrayMax: z,
            charts: Ft,
            dateFormat: U,
            format: T,
            pathAnim: J,
            getOptions: O,
            hasBidiBug: Ot,
            isTouchDevice: It,
            numberFormat: w,
            seriesTypes: se,
            setOptions: D,
            addEvent: ve,
            removeEvent: be,
            createElement: b,
            discardElement: M,
            css: v,
            each: me,
            extend: o,
            map: xe,
            merge: r,
            pick: x,
            splat: g,
            extendClass: y,
            pInt: a,
            wrap: k,
            svg: Dt,
            canvas: Bt,
            vml: !Dt && !Bt,
            product: $t,
            version: Xt
        })
    }()
}, function (t, e) {
    t.exports = '<style>\n	.panel-shadow {\n		top: 250px;\n	}\n\n	.floatButtons {\n		position: absolute;\n		top: 9px;\n		right: 0px;\n		overflow: hidden;\n		z-index: 99;\n	}\n\n	.highcharts-container {\n		width: 100%!important;\n		height: 100%!important;\n	}\n\n	.highcharts-container > svg {\n		width: 100%!important;\n		height: 100%!important;		\n	}\n\n	.highcharts-tooltip span {\n		z-index: 9999!important;\n	}\n\n	.highcharts-tooltip table {\n		width: auto!important;\n		margin-left: 8px!important;\n		margin-right: 8px!important;\n		border: none;\n		border-spacing: none;\n	}\n\n	.highcharts-tooltip td {\n		font-family: "Microsoft Yahei";\n		font-size: 12px;\n		border: none;\n	}\n\n	.highcharts-tooltip .promoTd{\n		text-align: left;\n		padding-left: 5px;\n		width: 100px;\n		max-width: 100px;\n		color: #4a90e2;\n		overflow: hidden;\n		text-overflow: ellipsis!important;\n	}\n\n	.floatButtons > a{\n		cursor: pointer;\n		background: none;\n		border: none;\n		border-right: 1px solid black;\n		padding-left: 20px;\n		padding-right: 20px;\n		height: 16px;\n		line-height: 16px;\n		color: #000;\n		font-family: "Microsoft YaHei";\n		font-size: 12px!important;\n	}\n\n	#{{extBrand}}_wishlist_trend_detail_chart {\n		position: relative;\n		width: 460px;\n		height: 254px;\n	}\n\n	#{{extBrand}}_wishlist_trend_detail {\n		clear: both;\n		background-color: white;\n		height: 285px;\n	}\n\n	@media (max-width: 1250px) {\n		#{{extBrand}}-trend-chart {\n			position: fixed;\n			left: 50%;\n			margin-left: -400px;\n		}\n	}\n\n	.floatButtons > a:first-child {\n		border-left: 1px solid black;\n	}\n\n	.floatButtons > a:focus {\n		outline: none;\n	}\n\n	.activePlot {\n		background: rgb(227,227,227)!important;\n	}\n\n	.bjd-newtrend-dev .bjd-hidden {\n		display: none!important;\n	}\n\n	#plotArea {\n		position: absolute;\n		right: 0px;\n		left: 0px;\n		height: 254px;\n		max-width: 2000px!important;\n		font-family: "Microsoft YaHei";\n	}\n\n	#timeCursor {\n		position: absolute;\n		height: 20px;\n		line-height: 20px;\n		color: #fff;\n		background: #454a4d;\n		font-family: \'Arial\';\n		font-weight: bold;\n		top: 205px;\n		font-size: 12px;\n		padding-left: 7px;\n		padding-right: 7px;\n		/*left: -10000px;*/\n	}\n\n	#dashedLine {\n		position: absolute;\n		height: 160px;\n		left: -100000px;\n		border: none;\n		border-left: 2px dotted #000;\n		top: 54px;\n		z-index: 1;\n		pointer-events: none;\n	}\n\n	.highcharts-tooltip {\n		z-index: 99;\n		background: white;\n	}\n\n\n	#bjd-qrcode-trend {\n		position: absolute;\n		width: 150px;\n		height: 150px;\n		right: 35px;\n		bottom: 0px;\n		text-align: center;\n	}\n\n	#bjd-qrcode-trend span {\n		position: relative;\n		font-size: 12px;\n		font-family: "Microsoft Yahei";\n		color: #535854;\n		top: 8px;\n	}\n</style>\n\n<div class="floatButtons bjd-newtrend-dev">\n	<a class="bjd-hidden" id="plotAll">全部</a><a class="bjd-hidden" id="plotYear">年线</a><a class="bjd-hidden" id="plotMonth">月线</a><a class="bjd-hidden" id="plot5Day">5日线</a>\n</div>\n<div id="plotArea">\n	\n</div>\n<div id="timeCursor">\n	请稍候...\n</div>\n<div id="dashedLine"></div>\n<!-- <div id="bjd-qrcode-trend">\n	<img src="{{s_server}}/images/extensions/trend_qrcode.jpg" alt="" style="width: 94px;height:94px" />\n	<br>\n	<span>微信上也能查历史价格</span>\n</div> -->'
}, function (t, e, n) {
    var i;
    i = function () {
        return function (t) {
            var e = new Date(t), n = new Date(e.getFullYear(), e.getMonth(), e.getDate()), i = n.getTime() + 684e5;
            return i
        }
    }.call(e, n, e, t), !(void 0 !== i && (t.exports = i))
}, function (t, e, n) {
    var i;
    i = function () {
        return function (t) {
            if (t = parseFloat(t), t > 1e4) {
                var e = (t / 1e4).toFixed(2);
                return e = e.replace(".00", ""), e + "万"
            }
            return t.toFixed(2).replace(".00", "")
        }
    }.call(e, n, e, t), !(void 0 !== i && (t.exports = i))
}, function (t, e, n) {
    var i;
    (function (o) {
        "use strict";
        i = function () {
            function t(t) {
                var e = n(47).getInfo("user_extension_id") || "", i = o.tj_server;
                o.new_extension && (i = o.server), t || (t = "");
                var a = "img_random" + Math.random(), s = window[a] = new Image;
                s.onload = s.onerror = function () {
                    window[a] = null
                }, s.src = i + "/visit/?version=" + o.version + "&userid=" + e + "&ab=" + r.get("ab") + "&uuid=" + r.get("uuid") + "&from_device=" + o.from_device + "&permanent_id=" + r.get("p_id") + "&random=" + Math.random() + "&action=" + t + "&refer=" + encodeURIComponent(document.referrer) + "&url=" + encodeURIComponent(location.href)
            }

            var e = void 0, i = void 0, r = n(15);
            return function (n) {
                i === n ? (i = n, clearTimeout(e), e = setTimeout(function () {
                    t(n)
                }, 500)) : (i = n, t(n))
            }
        }.call(e, n, e, t), !(void 0 !== i && (t.exports = i))
    }).call(e, n(1))
}, function (t, e, n) {
    (function (e) {
        "use strict";
        var i = n(17), o = n(48), r = o.getBrowser(), a = {}, s = function (t) {
            t && e.site && "user_extension_id" === t.type && n(46)("browser_user:" + e.site + ":extType:" + l())
        }, l = function () {
            var t = "";
            return t = "default" === e.from_device ? r.utype : e.from_device
        };
        t.exports.init = function () {
            i.trigger({type: "user_extension_id"}), i.trigger({type: "browser_setinfo"}), i.on(function (t) {
                if ("browser_setinfo" === t.type) {
                    if (t.value && t.value instanceof Object) for (var e in t.value) a[e] = t.value[e]
                } else a[t.type] = t.value, s(t)
            })
        }, t.exports.getInfo = function (t) {
            return a[t]
        }
    }).call(e, n(1))
}, function (t, e, n) {
    (function (e) {
        "use strict";
        var n = {url: "", utype: ""}, i = navigator.userAgent.toLowerCase();
        t.exports.getBrowser = function () {
            if ("ActiveXObject" in window) n.url = e.c_server + ("/files/ext/" + e.extName + "_install_IE.exe"), n.utype = "ie", n.utitle = "IE", n.background = "-401px -81px"; else if (i.indexOf("firefox") > -1) n.url = "https://addons.mozilla.org/firefox/downloads/latest/405940/addon-405940-latest.xpi?src=dp-btn-primary", n.utype = "firefox", n.utitle = "火狐", n.background = "-401px -44px"; else if (i.indexOf("opera") > -1 || i.indexOf("opr") > -1) n.url = e.c_server + "/files/ext/opera.crx", n.utype = "opera", n.utitle = "Opera", n.background = "-2px -120px"; else if (i.indexOf("safari") > -1 && -1 == i.indexOf("chrome")) n.url = e.c_server + ("/files/ext/" + e.extName + ".safariextz"), n.utype = "safari", n.utitle = "Safari", n.background = "-301px -44px"; else if (i.indexOf("chrome") > -1) {
                var t = r();
                i.indexOf("qqbrowser") > -1 ? (n.url = "https://pcbrowser.dd.qq.com/pcbrowserbig/qbextension/update/20160122/jgphnjokjhjlcnnajmfjlacjnjkhleah.crx", n.utype = "qq", n.utitle = "QQ", n.background = "-104px -81px") : i.indexOf("maxthon") > -1 ? (n.url = "http://extension.maxthon.cn/detail/index.php?view_id=358", n.utype = "maxthon", n.utitle = "傲游", n.background = "-401px -4px") : i.indexOf("bidubrowser") > -1 ? (n.url = "http://chajian.baidu.com/2015/#all/39/mcgoibhhihpolaiioggajoipieefgmoa", n.utype = "baidu", n.utitle = "百度", n.background = "-104px -120px") : i.indexOf("ubrowser") > -1 ? (n.url = "http://extensions.uc.cn/newindex.htm#!detail/bpdlhpjkjbdiflnankpohpfepecdjgag", n.utype = "uc", n.utitle = "UC", n.background = "-2px -44px") : i.indexOf("lbbrowser") > -1 ? (n.url = "http://store.liebao.cn/admin/extensions/201511/ea878d5a4d2a008ad78978a94eea62a1.crx", n.utype = "liebao", n.utitle = "猎豹安全", n.background = "-301px -4px") : i.indexOf("taobrowser") > -1 ? (n.url = e.c_server + "/files/ext/chrome.crx", n.utype = "taobao", n.utitle = "淘宝", n.background = "-104px -44px") : i.indexOf("2345explorer") > -1 ? (n.url = "http://extension.ie.2345.com/#nfbikdkjfjcejddbdcpbafnclkfdhijd", n.utype = "2345", n.utitle = "2345王牌", n.background = "-301px -81px") : i.indexOf("2345chrome") > -1 ? (n.url = "http://extension.chrome.2345.com/#nfbikdkjfjcejddbdcpbafnclkfdhijd", n.utype = "2345jiasu", n.utitle = "2345加速") : i.indexOf("coolnovo") > -1 ? (n.url = e.c_server + "/files/ext/chrome.crx", n.utype = "fengshu", n.utitle = "枫树", n.background = "-2px -81px") : i.indexOf("greenbrowser") > -1 ? (n.url = e.c_server + ("/files/ext/" + e.extName + "_for_greenbrowser.zip"), n.utype = "gb", n.utitle = "GB", n.background = "-203px -81px") : "Chrome" === t ? (n.url = e.c_server + "/app/extension?from_device=" + e.from_device_num, n.utype = "chrome", n.utitle = "Chrome", n.background = "-2px -4px") : "360SE" === t ? (n.url = "https://ext.se.360.cn/webstore/detail/nfbikdkjfjcejddbdcpbafnclkfdhijd", n.utype = "360se", n.utitle = "360安全", n.background = "-203px -4px") : "360EE" === t ? (n.url = "https://ext.chrome.360.cn/webstore/detail/nfbikdkjfjcejddbdcpbafnclkfdhijd", n.utype = "360se", n.utitle = "360极速 ", n.background = "-104px -4px") : i.indexOf("se") > -1 ? (n.url = "http://ie.sogou.com/tools/tool_337.html", n.utype = "sogou", n.utitle = "搜狗", n.background = "-401px -120px") : (n.url = e.c_server + "/app/extension", n.utype = "chrome", n.utitle = "Chromium内核")
            } else n.url = e.c_server + "/app/extension", n.utype = "chrome", n.utitle = "未知浏览器";
            return n
        };
        var o = {
            result: "Chrome",
            details: {Chrome: 5, Chromium: 0, _360SE: 0, _360EE: 0},
            sorted: ["Chrome", "360SE", "360EE", "Chromium"],
            exec: function (t) {
                var e = {Chrome: 5, Chromium: 0, _360SE: 0, _360EE: 0}, n = window.navigator.userAgent;
                if (/Chrome\/([\d.])+\sSafari\/([\d.])+$/.test(n)) {
                    if ("Win32" == window.navigator.platform) {
                        if (window.clientInformation.languages || (e._360SE += 8), /zh/i.test(navigator.language) && (e._360SE += 3, e._360EE += 3), window.clientInformation.languages) {
                            var i = window.clientInformation.languages.length;
                            i >= 3 ? (e.Chrome += 10, e.Chromium += 6) : 2 == i ? (e.Chrome += 3, e.Chromium += 6, e._360EE += 6) : 1 == i && (e.Chrome += 4, e.Chromium += 4)
                        }
                        for (var o in window.navigator.plugins) "np-mswmp.dll" == window.navigator.plugins[o].filename && (e._360SE += 20, e._360EE += 20);
                        Object.keys(window.chrome.webstore).length <= 1 ? e._360SE += 7 : 2 == Object.keys(window.chrome.webstore).length && (e._360SE += 4, e.Chromium += 3), window.navigator.plugins.length >= 30 ? (e._360EE += 7, e._360SE += 7, e.Chrome += 7) : window.navigator.plugins.length < 30 && window.navigator.plugins.length > 10 ? (e._360EE += 3, e._360SE += 3, e.Chrome += 3) : window.navigator.plugins.length <= 10 && (e.Chromium += 6)
                    } else e._360SE -= 50, e._360EE -= 50, /Linux/i.test(window.navigator.userAgent) && (e.Chromium += 5);
                    var r = 0, a = void 0;
                    for (var o in window.navigator.plugins) if (a = /^(.+) PDF Viewer$/.exec(window.navigator.plugins[o].name)) {
                        if ("Chrome" == a[1]) {
                            e.Chrome += 6, e._360SE += 6, r = 1;
                            break
                        }
                        if ("Chromium" == a[1]) {
                            e.Chromium += 10, e._360EE += 6, r = 1;
                            break
                        }
                    }
                    r || (e.Chromium += 9)
                }
                var s = new Object;
                s.Chrome = e.Chrome, s.Chromium = e.Chromium, s["360SE"] = e._360SE, s["360EE"] = e._360EE;
                var l = [];
                for (var c in s) l.push([c, s[c]]);
                return l.sort(function (t, e) {
                    return e[1] - t[1]
                }), this.sorted = l, this.details = e, this.result = l[0][0], "result" == t ? l[0][0] : "details" == t ? s : "sorted" == t ? l : void 0
            }
        }, r = function () {
            var t = window.navigator.userAgent;
            try {
                if (o.exec(), /Chrome\/([\d.])+\sSafari\/([\d.])+$/.test(t)) return o.result
            } catch (e) {
                return
            }
        };
        t.exports.getChromeVersion = function () {
            var t = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
            return t ? parseInt(t[2], 10) : !1
        }
    }).call(e, n(1))
}, function (t, e, n) {
    var i;
    (function (o, r) {
        "use strict";
        i = function () {
            var t = 0, e = {
                "360buy": "#page_maprice",
                suning: ["del.small-price", "del", "#itemPrice>del"],
                amazon: [".digital-list-price>td>.a-text-strike", ".a-span12.a-color-secondary.a-size-base", ".a-text-strike"],
                yougou: "del:eq(0)",
                dangdang: [".price_m:eq(0)", ".d15_price_info .price_pc .price_m"],
                vipshop: ".J-mPrice",
                keede: ".message_price_kd",
                feiniu: "del.fn-rmb-num:eq(0)",
                kaola: "#js_marketPrice",
                111: "del",
                jiuxian: "del",
                yintai: ".mk-num",
                beibei: '.strike[op-value="originPrice"]',
                bookschina: "td:eq(19)",
                tmall: [".tb-rmb-num", ".tm-tagPrice-panel .tm-price", ".tm-price-panel .tm-price"],
                taobao: "#J_StrPrice>em.tb-rmb-num",
                "taobao-95095": ".tm-price-panel .tm-price:eq(0)",
                lefeng: ".marketPrice-s"
            }, i = "";
            if (void 0 != e[o.site]) {
                var a = e[o.site];
                if (a instanceof Array) a.forEach(function (e) {
                    var n = r(e), o = r(e).toArray().length;
                    if (o > 1 && (n = r(e + (":eq(" + (o - 1) + ")"))), !t && n && n.text()) {
                        var a = n.text();
                        a.trim && (a = a.trim());
                        var s = parseFloat(a.replace(",", "").replace("￥", "").replace("¥", "").replace("$", "").replace(",", ""));
                        t = s, i = e
                    }
                }); else {
                    var s = r(a);
                    if (s && s.text().length > 0) {
                        var l = s.text();
                        l.trim && (l = l.trim());
                        var c = parseFloat(l.replace(",", "").replace("￥", "").replace("¥", "").replace(",", ""));
                        t = c, i = a
                    }
                }
            }
            if ("detail.tmall.hk" === location.host) {
                t = r("span.tm-price:eq(0)").text();
                var d = r("em.tm-yen:eq(0)").text();
                ("₩" === d || "NT$" === d || -1 === r("span.tm-price:eq(0)").css("text-decoration").indexOf("line-through")) && (t = null);
                var p = r(".wrtoriginprice .tm-price").text();
                p && (t = p)
            }
            var u = r("#J_StrPrice").text() && -1 === r("#J_StrPrice").css("text-decoration").toString().indexOf("line-through");
            if ("taobao" !== o.site && "tmall" !== o.site && "taobao-95095" !== o.site || !(u || "tmall" === o.site && "none" === r("#J_StrPriceModBox").css("display")) || (".tm-price-panel .tm-price" === i || "#J_StrPrice>em.tb-rmb-num" === i) && (t = null), "taobao" === o.site || "tmall" === o.site || "taobao-95095" === o.site) {
                var h = r(i);
                h.css("text-decoration") && -1 === h.css("text-decoration").toString().indexOf("line-through") && ("taobao" === o.site ? -1 === h.parent().css("text-decoration").toString().indexOf("line-through") && (t = null) : t = null)
            }
            if ("bookschina" === o.site) {
                var m = r("td").toArray().map(function (t) {
                    return t.innerText
                }), f = m.indexOf("定    价：");
                t = m[f + 1]
            }
            var g = null;
            return "www.amazon.co.jp" === location.host && (g = "JPY"), t = n(14)(t, g), t = parseFloat(t)
        }.call(e, n, e, t), !(void 0 !== i && (t.exports = i))
    }).call(e, n(1), n(4))
}, function (t, e, n) {
    (function (e) {
        "use strict";
        var i = n(17), o = void 0, r = [], a = void 0, s = function () {
            var t = location.href, s = t.match(/[?&]id=([0-9]+)/) && t.match(/[?&]id=([0-9]+)/)[1];
            if (s) {
                var l = e.dp && e.dp.site || e.site;
                if (l.indexOf("95095") > -1) return void(o = {nodata: !0});
                "ai-taobao" == l && (l = "taobao");
                var c = n(51).init();
                i.trigger({type: "getTaobaoTrend", info: c}), i.on(function (t) {
                    if ("getTaobaoTrend" == t.type && t.value) try {
                        if (o = JSON.parse(t.value).priceHistoryData, o || (o = {nodata: !0}), r.length > 0) {
                            for (var e = 0; e < r.length; e++) r[e](o);
                            a = !0
                        }
                    } catch (n) {
                    }
                })
            }
        };
        t.exports._init = function () {
            e.on("pageType=2", function () {
                s()
            })
        }, t.exports.init2 = function () {
            s()
        }, t.exports.getTrend = function (t) {
            return o ? (o.nodata && (o = null), void t(o)) : (r.push(t), void setTimeout(function () {
                a || t(null)
            }, 3e3))
        }
    }).call(e, n(1))
}, function (t, e, n) {
    (function (e) {
        "use strict";
        var n = 88, i = ["t=" + e("title").html().substr(0, 250), "k=lxsx", "d=ls"],
            o = encodeURIComponent(location.href), r = {
                zero: ["0", "00", "000", "0000", "00000", "000000", "0000000", "00000000"], strReverse: function (t) {
                    var e, n, i = [];
                    for (e = 0, n = t.length; n > e; e++) i[i.length] = t.charAt(e);
                    return i.reverse().join("")
                }, isString: function (t) {
                    return "[object String]" === Object.prototype.toString.call(t)
                }, encrypt: function (t, e, n) {
                    var i, o, a = [];
                    if (!r.isString(t)) return "";
                    for (i = 0, o = t.length; o > i; i++) a[a.length] = r.to(t.charCodeAt(i), e);
                    return n ? r.strReverse(a.join("")) : a.join("")
                }, to: function (t, e) {
                    var i = "" + (t + n).toString(16), o = e - i.length;
                    return o > 0 ? r.zero[o - 1] + i : i
                }, decrypt: function (t, e, n) {
                    if (!r.isString(t)) return "";
                    var i = [];
                    n && (t = r.strReverse(t));
                    for (var o = 0, a = 0; o < t.length; o += e, a++) {
                        var s = t.substring(o, o + e);
                        i[a] = r.tranFormat(s, e)
                    }
                    return String.fromCharCode.apply(String, i)
                }, tranFormat: function (t, e) {
                    return t.length !== e ? 0 : parseInt(t.replace(/^0+/g, ""), 16) - n
                }, genExtensionId: function () {
                    if (window.localStorage.extensionid) return window.localStorage.extensionid;
                    for (var t = "", e = 1; 32 >= e; ++e) t += Math.floor(16 * Math.random()).toString(16), (8 == e || 12 == e || 16 == e || 20 == e) && (t += "-");
                    return window.localStorage.extensionid = t, t
                }
            };
        t.exports.init = function () {
            var t = "", e = "//zhu", n = "shou.huih", a = "ui.cn/product", s = "Sense?br", l = "owser=chrome&ver",
                c = "sion=4.2.9.6&vendor=chrom";
            t = e + n + a + s + l + c;
            var d = r.genExtensionId(), p = r.encrypt(i.join("^&"), 4, !1), u = r.encrypt(o, 2, !0),
                h = 1900 - u.length;
            p = p.length > h ? p.substr(0, h) : p;
            var m = location.protocol + t + "enew&av=3.0&extensionid=" + d + "&email=&pop=&k=" + p + "&nl=true&m=" + u;
            return m
        }
    }).call(e, n(4))
}, function (t, e) {
    t.exports = '<div class="wxqrcode">\n  <span class="qrcode-sp1">扫码立即领取</span>\n  <span>天猫淘宝内部优惠券</span>\n  <img src="{{src}}">\n  <span class="wxqrcode_close"></span>\n  <style type="text/css">\n    .wxqrcode {\n      height: 227px;\n      width: 160px;\n      position: absolute;\n      top: -2px;\n      right: 0px;\n      z-index: 99999999999;\n      border-left: none;\n      border: 1px solid #cacfd2;\n    }\n    .wxqrcode span {\n      float: left;\n      height: 19px;\n      width: 100%;\n      text-align: center;\n      line-height: 19px;\n      color: #fc5052;\n      font-size: 14px;\n      font-weight: bold;\n    }\n    .qrcode-sp1 {\n      margin-top: 12px;\n    }\n    .wxqrcode img {\n      height: 148px;\n      width: 148px;\n      float: left;\n      margin-left: 6px;\n      margin-top: 12px;\n    }\n    .wxqrcode .wxqrcode_close {\n      position: absolute;\n      top: 0px;\n      right: 0px;\n      background: url(\'{{s_server}}/images/extensions/newbar/qrcode_close.png\') 0px 0px no-repeat;\n      display: inline-block;\n      height: 16px;\n      width: 16px;\n      cursor: pointer;\n    }\n    #bdext_minitrend_detail.addqrcode {\n      width: 661px;\n    }\n    #bdext_minitrend_detail.addqrcode #bdext_mini_trendbox {\n      width: 459px;\n    }\n  </style>\n</div>'
}, function (t, e, n) {
    (function (e, i) {
        "use strict";
        var o = n(12), r = n(15), a = n(5), s = n(21), l = {
            vmall: [".pro-price"],
            yougou: ["#ygprice_area"],
            gome: [".prdprice", ".unitprice"],
            vipshop: [".pi-price-box"],
            "360buy": ["#summary-price", ".summary-price", "#surplus-time", "#product-intro #price"],
            "360buy-book": ["#summary-price"],
            taobao: [".tm-fcs-panel", "#J_PromoPrice", "#J_StrPriceModBox"],
            "taobao-95095": [".tm-fcs-panel", "#J_PromoPrice", "#J_StrPriceModBox"],
            tmall: [".tm-fcs-panel", "#J_PromoPrice", "#J_StrPriceModBox"],
            "51buy": ['.xbase_item:contains("促销价")', '.xbase_item:contains("易迅价")', "#goods_detail_mate .item_icson", ".xbase_row2", "#promotePrice", "#shopprice", "#promotePriceArea"],
            suning: ["#noPrice", "#_main_price", "#existPrice", "#netPriceBox", "#hasPrice", "#priceDom"],
            dangdang: [".d15_price_info", ".price_qiang", ".price_info", ".show_info .sale>p", ".sale_box:first"],
            yihaodian: ["#point_productPrice", ".price_array", "#currentPriceArea"],
            vancl: ["#pricearea .cuxiaoPrice"],
            newegg: [".neweggPrice", ".goods_price_now"],
            "amazon-com": ["#unifiedPrice_feature_div", "#price_feature_div", "#price", "#winePriceAndSavings_feature_div"],
            "amazon-uk": ["#price_feature_div"],
            "amazon-jp": ["#unifiedPrice_feature_div", "#price_feature_div", "#price", "#winePriceAndSavings_feature_div"],
            "6pm": ["#priceSlot"],
            tuhu: ["#product_detail .pro_price"],
            banggo: ["#goods_base_info_panel .mbshop_detail_baseinfo"],
            ule: ["#proDetail .productPrice"],
            lifevc: ["#shoppingPanelUpper .price-panel"],
            jiuxian: [".infoItems.priceBox"],
            wbiao: ["#g5-pz"],
            efotile: [".item-actPrice"],
            ehaier: [".product-info-list"],
            staples: ["#priceDiv .producntPrice"],
            j1: ["#ecPriceDl"],
            jianke: ["#price_big"],
            "360kad": [".prem-ac-information"],
            yohobuy: [".market-price"],
            fengqu: [".goods-price-c1"]
        }, c = function (t) {
            var n = e.site, o = l[n];
            if (o) for (var r = 0; r < o.length; r++) if (i(o[r]).length > 0) return void t(o[r])
        }, d = function (t, n) {
            if ("6pm" !== e.site) {
                var o = void 0;
                if (t || n) {
                    var r = Number(t.price.replace(",", ""));
                    if (r < e.dp.price) {
                        var a = t.site_name, s = t.price;
                        o = '<span class="low_sp1">更低价:&nbsp;</span><span class="low_sp2">' + a + '</span><span class="low_sp3">￥' + s + "</span>"
                    } else o = '<div class="low_qtdiv">其他<span class="other_sp">' + n + "</span>家报价</div>"
                } else o = '<span class="no_pri_sp">暂无商家比价</span>';
                i(".bdext-mini-compare").append(i(o)).show()
            }
        }, p = function () {
            var t = n(54), a = r.get("dp_data"), s = [], l = a.b2c.store && a.b2c.store.length;
            if (!l) return void d();
            if (i("#bdext_minibar").css("display", "inline-block"), e.showMinibar = !0, l = l > 6 ? 6 : l, a.b2c.store) for (var c = 0; l > c; c++) {
                var p = a.b2c.store[c].product[0];
                a.now.now_dp_id == p.dp_id && a.b2c.store[c].product[1] && (p = a.b2c.store[c].product[1]), p.site_id = p.dp_id.match(/\d+-(\d+)/)[1], s.push(p)
            }
            var h = o.compile(t)({data: s, s_server: e.s_server});
            d(a.b2c.store[0].product[0], l), i(".bdext-mini-compare").append(h), u()
        }, u = function () {
            i(".bdext-mini-compare").on("mouseenter", function () {
                i("#bdext_minibar").addClass("_mshover")
            }), i(".bdext-mini-compare").on("mouseleave", function () {
                i("#bdext_minibar").removeClass("_mshover")
            })
        }, h = function () {
            if ("suning" === e.site && i("#R-n-similar").children().length > 0) {
                var t = i("#proinfoMain").height();
                i("#proinfoMain").height(t + 110)
            }
        }, m = function (t) {
            var r = n(55);
            i(t).eq(0).after(o.compile(r)({
                alisite: e.aliSite,
                setting: e.server + "/brwext/setting_feedback?set=1"
            })), s.tongji("1", "show"), i("#bdext_minibar .bdext-mini-logo").on("click", function () {
                a.log("minibar-logo-click")
            }), i("#bdext_minibar").on("click", function (t) {
                var e = void 0;
                "A" === t.target.nodeName ? e = t.target.href : "A" === t.target.parentNode.nodeName && (e = t.target.parentNode.href), e && -1 === e.indexOf("javascript:") && s.tongji("1", "click", e)
            }), h()
        };
        t.exports.init = function () {
            "0" !== e.show_minibar && c(function (t) {
                m(t), e.aliSite || -1 !== e.site.indexOf("amazon") || p()
            })
        }
    }).call(e, n(1), n(4))
}, function (t, e) {
    t.exports = '<div id="minibar_compare">\n  <ul>\n    {{each data}}\n      <li>\n        <a href="{{$value.url}}" target="_blank">\n          <img src="{{s_server}}/images/favicon/{{$value.site_id}}.png" >\n          <span class="bdext_site_name">{{$value.site_name}}</span>\n          <span class="bdext-com-price">￥{{$value.price}}</span>\n        </a>\n      </li>\n    {{/each}}\n  </ul>\n</div>'
}, function (t, e) {
    t.exports = '<div id="bdext_mb_bg">\n  <div id="bdext_minibar">\n    <div class="bdext-toptabs">\n      <div class="bdext-mini-logo">\n        <a >\n          <em class="bdext-bg"></em>\n        </a>\n        \n      </div>\n      <div class="bdext-mini-trend">\n        <em ></em>\n        <span>价格走势</span>\n      </div>\n      {{if !alisite}}\n      <div class="bdext-mini-compare">\n\n      </div>\n      {{/if}}\n    </div>\n    <div class="promo-box">\n      <ul>\n      </ul>\n    </div>\n  </div>\n</div>'
}, function (t, e, n) {
    (function (e, i) {
        "use strict";
        var o = n(16), r = n(12), a = n(57), s = n(15), l = function (t) {
            var n = s.get("dp_data"), i = n.now.now_dp_id, r = n.now.class_id, a = n.exact_arr.sbrand,
                l = n.exact_arr.brand_id, c = n.exact_arr.taobao_class_id,
                d = "" == n.collectInfo.title ? e.dp.name : n.collectInfo.title,
                p = e.server + "/brwext/promo_brand?pg=1&ps=5&order=0&tb_class=" + c + "&class_id=" + r + "&dp_id=" + i + "&title=" + encodeURIComponent(d) + "&url=" + encodeURIComponent(window.location.href) + "&sbrand=" + encodeURIComponent(a) + "&brand_id=" + l;
            o.get(p).done(function (e) {
                t(e && e.products && e.products.length > 0 ? e : null)
            })
        }, c = function (t) {
            if (t) {
                var e = n(59), o = r.compile(e)({data: t.products});
                i("#bdext_minibar .promo-box ul").append(o), i(".promo-box").show(), i(".bdext-toptabs .bdext-mini-logo, .bdext-mini-compare").addClass("hasPromo")
            }
            a.init()
        };
        t.exports.init = function () {
            "0" !== e.show_promo && "0" !== e.show_minibar && (e.aliSite || l(c))
        }
    }).call(e, n(1), n(4))
}, function (t, e, n) {
    var i;
    (function (o) {
        "use strict";
        i = function () {
            function t(n) {
                for (var i = w[n], o = 0; o < i.length; o++) if (g(i[o]).is(":visible") && e()) return u = n, void r(m);
                y++, 10 !== y && setTimeout(function () {
                    t(n)
                }, 1e3)
            }

            function e() {
                var t = !1, e = o.site;
                switch (e) {
                    case"360buy":
                        t = !0;
                        break;
                    case"dangdang":
                        t = !0;
                        break;
                    case"suning":
                        t = g("#qrCode").text().indexOf("手机购买") > -1 ? !0 : g("#phoneOrderCode").text().indexOf("手机专享价") > -1 && g("#phoneOrderCode").is(":visible") ? !0 : !1;
                        break;
                    case"51buy":
                        if (g("#sea_desc").text().indexOf("手机专享价") > -1) t = !0; else if (g(".xprice .m-qrcode .txt em").text().indexOf("手机购买省") > -1) {
                            if (g(".xprice .m-qrcode .txt em").text().indexOf("￥0.00") > -1) return !1;
                            t = !0
                        } else t = !1;
                        break;
                    case"gome":
                        "手机专享" == g("#shoujizhuanxiang_box .hl_red_bg").text() && (t = !0);
                        break;
                    case"yihaodian":
                        t = g("#productSubName").text().indexOf("手机端下单") > -1 ? !0 : !1
                }
                return t
            }

            function i() {
                for (var e in w) o.site === e && t(e);
                return 0 === y ? !1 : void 0
            }

            function r(t) {
                var e = document.location.href;
                x.get(o.server + "/extension?ac=go_mobile&url=" + encodeURIComponent(e)).done(function (t) {
                    "" !== t.url && 1 === t.status && ("luyou" == o.btype || "juzi" === o.from_device ? (l(t.url), c(t.url)) : C(t.url))
                })
            }

            function a() {
                return "360buy" == o.site ? !0 : "ActiveXObject" in window ? !1 : !0
            }

            function s() {
                var t = "";
                g("#bjd_m_price").on("mouseenter", function () {
                    t = g(this).css("color"), "suning" == o.site || o.site.indexOf("suning") > -1 ? g(this).css("color", "#fff") : g(this).css("color", "#003399")
                }).on("mouseleave", function () {
                    g(this).css("color", t)
                }), g("#bjd_m_price").on("click", function () {
                    n(46)("click:mobile_price"), v.log("手机专享价点击")
                })
            }

            function l(t) {
                if (t && "360buy" == u) {
                    var e = p(), i = n(58);
                    g("#summary-price .dd").eq(0).append(b.compile(i)({
                        url: d(t),
                        price: e,
                        new_extension: o.new_extension,
                        extBrand: o.extBrand
                    })), g("#" + o.extBrand + "_mobile_price").on("click", function () {
                        n(46)("click:mobile_price_360buy"), v.log("手机专享价点击2jd")
                    })
                }
            }

            function c(t) {
                if (t) {
                    var e = p(), n = "购物党将带您前往手机版页面，以专享价购买商品";
                    o.new_extension && (n = "");
                    var i, r = k[u];
                    if (g.isArray(S[u])) {
                        for (var a = 0; a < S[u].length; a++) if (g(S[u][a]).length > 0) {
                            i = S[u][a];
                            break
                        }
                    } else i = S[u];
                    "dangdang" == u || "suning" == u || "360buy" == u || "360buy_1" == u ? g(i).eq(0).after(b.compile(r)({
                        url: d(t),
                        price: e,
                        title: n
                    })) : g(i).eq(0).before(b.compile(r)({url: d(t), price: e, title: n})), v.log("展现手机专享价"), s()
                }
            }

            function d(t) {
                var e = o.toMobileUrl;
                return e + "/union/go?site_id=" + h.site_id + "&target_url=" + t + "&union=" + m + "&column=zhuanxiang_" + h.now_dp_id
            }

            function p() {
                var t = "";
                if (("360buy" == u || "360buy_1" == u) && (t = g(_[u]).text()), "dangdang" == u && (t = g(_[u]).text()), "yihaodian" == u) {
                    var e = g("#productSubName").text().match(/([0-9.]+)元/);
                    e && (t = "¥" + e[1])
                }
                if ("51buy" == u) {
                    var e = g("#sea_desc").text().match(/专享价([0-9.]+)/);
                    if (e) t = "¥" + e[1]; else {
                        var n = o.dp.price, i = g(".xprice .m-qrcode .txt em").text().match(/[0-9.]+/);
                        i && (i = i[0], n = Number(n) - Number(i), t = "¥" + n)
                    }
                }
                if ("suning" == u) {
                    var e = Number(g(".qrcode-main-price em").text());
                    if ("" != e) {
                        var r = o.dp.price, t = (r - e).toString();
                        -1 == t.indexOf(".") && (t = "¥" + t + ".00")
                    } else {
                        var e = g("#phoneOrderCode").text().match(/[0-9.]+/);
                        e && (e = e[0]), e && (t = "¥" + e)
                    }
                }
                if ("gome" == u) {
                    var a = g("#savemoney").text().match(/[0-9.]+/);
                    a && (a = Number(a[0]) || 0);
                    var r = o.dp.price, t = (r - a).toString();
                    -1 == t.indexOf(".") && (t = "¥" + t + ".00")
                }
                return t.match(/[0-9]{5}/) && (t = t.replace(/\.[0-9]+/, "")), t
            }

            var u, h, m, f = {}, g = n(4), x = n(16), v = n(5), b = n(12), y = 0, w = {
                    "360buy": ["#prom-mbuy .mob-buy", "#m-pirce"],
                    yihaodian: ["#productSubName"],
                    dangdang: ["#mobile_exclusive_price"],
                    suning: ["#qrCode", "#phoneOrderCode"],
                    gome: ["#shoujizhuanxiang_box"],
                    "51buy": ["#sea_desc"]
                }, _ = {"360buy": "#prom-mbuy .J-m-price", "360buy_1": "#m-pirce .J-m-price", dangdang: "#mobile_price"},
                k = {
                    "360buy": '<a id="bjd_m_price" href="{{url}}" target="_blank"  rel="noreferrer" title="{{title}}"style="text-decoration:underline;color:#005aa0;">无需扫码，电脑上也可享受手机优惠价!</a>',
                    "360buy_1": '<a id="bjd_m_price" href="{{url}}" target="_blank"  rel="noreferrer" title="{{title}}"style="text-decoration:underline;color:#005aa0;">无需扫码，电脑上也可享受手机优惠价!</a>',
                    yihaodian: '<a id="bjd_m_price" href="{{url}}" target="_blank"  rel="noreferrer" title="{{title}}"style="text-decoration:underline;color:#06c;background-color: #fff4f2;display: block;padding-left: 10px;height: 26px;line-height: 26px;font-size: 13px;">手机专享价{{price}}，立即前往购买</a>',
                    dangdang: '<a id="bjd_m_price" href="{{url}}" target="_blank" rel="noreferrer" title="{{title}}"style="text-decoration:underline;color:#005aa0;">无需扫码，电脑上也可享受手机优惠价!</a>',
                    suning: '<a id="bjd_m_price" href="{{url}}" target="_blank" rel="noreferrer" title="{{title}}"style="text-decoration:underline;float:right;position:absolute;right:15px;width:110px;color: #003399;">前往手机版页面购买</a>',
                    "51buy": '<a id="bjd_m_price" href="{{url}}" target="_blank" rel="noreferrer" title="{{title}}"style="text-decoration:underline;color:#06c;display: block;height: 26px;line-height: 26px;font-size: 13px;">手机专享价{{price}}，立即前往购买</a>',
                    gome: '<a id="bjd_m_price" href="{{url}}" target="_blank" rel="noreferrer" title="{{title}}"style="text-decoration:underline;color:#06c;display: block;height: 26px;line-height: 26px;font-size: 13px;">手机专享价{{price}}，立即前往购买</a>'
                }, S = {
                    "360buy": ["#m-pirce", ".J-prom-mbuy", "#prom-one"],
                    yihaodian: "#" + o.extBrand + "_promo_active_yihaodian",
                    dangdang: "#mobile_exclusive_price",
                    suning: ["#qrCode .qrcode-main-img", ".ph-price-qrcode .qrcode-region"],
                    "51buy": "#" + o.extBrand + "_promo_active_51buy",
                    gome: "#shoujizhuanxiang_box"
                };
            f.init = function (t, e) {
                m = e, h = t, a() && i()
            };
            var T = function (t) {
                var e = p(),
                    n = '<li class="mobile_price">\n              <span>手机专享</span>\n              <a href="' + t + '" target="_blank">' + e + "</a>\n            </li>";
                g("#bdext_minibar .promo-box ul").prepend(g(n)), g("#bdext_minibar .promo-box").show(), g(".bdext-toptabs .bdext-mini-logo, .bdext-mini-compare").addClass("hasPromo")
            }, C = function (t) {
                "baidu" === o.from_device ? T(t) : A(t)
            }, A = function (t) {
                if ("360buy" !== o.site && (("360buy" != o.site || "mi_new" == o.from_device) && (t = d(t)), t)) {
                    var e = p(),
                        n = '<li class="li_0" data-type="mob"><a href="' + t + '" title="购物党将带您前往手机版页面，以专享价购买商品" target="_blank" id="' + o.extBrand + '_mobile_price" rel="noreferrer"><span class="mobile_title" >专享价购买</span><span class="mobile_num">' + e + "</span>>></a></li>";
                    g(".promo_box_left ul").prepend(g(n));
                    for (var i = g(".promo_box_left ul li"), r = i.length, a = 0; r > a; a++) i.eq(a).attr("class", "li_" + a);
                    3 > r ? (g("#" + o.extBrand + "_wishlist_div").addClass("oneline"), g("#" + o.extBrand + "_promo_box").show(), 1 == r && g(".promo_shuxian").hide()) : g("#" + o.extBrand + "_wishlist_div").removeClass("oneline").addClass("twolines"), v.log("新版嵌入手机专享价展现"), g("#" + o.extBrand + "_mobile_price").on("click", function () {
                        v.log("新版嵌入手机专享价点击")
                    })
                }
            };
            return f
        }.call(e, n, e, t), !(void 0 !== i && (t.exports = i))
    }).call(e, n(1))
}, function (t, e) {
    t.exports = '<a id="{{extBrand}}_mobile_price" href="{{url}}" target="_blank" rel="noreferrer" {{if !new_extension}}title="购物党将带您前往手机版页面，以专享价购买商品\n" {{/if}}>\n  <span class="{{extBrand}}_mprice_title">点此专享价购买</span>\n  <span class="{{extBrand}}_mprice_num">{{price}}</span>\n  <style type="text/css">\n    a#{{extBrand}}_mobile_price {\n      width: 132px;\n      display: inline;\n      margin-left: 5px;\n      text-decoration: none;\n      cursor: pointer;\n    }\n    span.{{extBrand}}_mprice_title {\n      display: inline-block;\n      width: 94px;\n      background-color: #568cdf;\n      line-height: 16px;\n      color: #fff;\n      text-align: center;\n    }\n    span.{{extBrand}}_mprice_title:hover{\n      background-color: #3071c6;\n      text-decoration: none;\n    }\n    span.{{extBrand}}_mprice_num {\n      color: #e4393c;\n      display: inline-block;\n      margin-left: 5px;\n      text-align: center;\n      font-size: 14px;\n    }\n  </style>\n</a>'
}, function (t, e) {
    t.exports = '{{each data}}\n<li class="bdext_promo_list">\n  <em class="bdext-bg"></em>\n  <a href="{{$value.url}}" target="_blank" title="{{$value.title}}">{{$value.title}}</a>\n</li>\n{{/each}}'
}, function (t, e, n) {
    (function (e, i) {
        "use strict";
        var o = n(12), r = n(61), a = n(62), s = n(21), l = void 0, c = function (t) {
            if (t) {
                var n = void 0, a = e(window).height(), c = e(window).width();
                if (!(768 > a || 1336 > c)) {
                    var d = t.productsuggest, u = d.length;
                    u > 4 && (n = !0), l = Math.ceil(u / 4), e("body").append(o.compile(r)({
                        data: d.slice(0, 8),
                        pages: n
                    })), "1" === i.guess_fold && (e(".bdext_big_content").hide(), e(".bdext_small").show()), s.tongji("3", "show"), p()
                }
            }
        }, d = function (t, n, i) {
            n = Number(n);
            var o = e(".bdext_guess_body li"), r = o.length;
            if (o.hide(), -1 === t) {
                1 === n && (n = i + 1);
                for (var a = 4 * (n - 2), s = 4 * (n - 1) > r ? r : 4 * (n - 1); s > a; a++) o.eq(a).show();
                n--
            } else {
                n === i && (n = 0);
                for (var a = 4 * n, s = 4 * (n + 1) > r ? r : 4 * (n + 1); s > a; a++) o.eq(a).show();
                n++
            }
            e(".guess-n-p").text(n)
        }, p = function () {
            e(".bdext_guess_footer .bdext-guess-tl").on("mousedown", function () {
                e(this).addClass("_press")
            }), e(".bdext_guess_footer .bdext-guess-tl").on("click", function () {
                var t = e(".guess-n-p").text();
                d(-1, t, l)
            }), e(".bdext_guess_footer .bdext-guess-tl").on("mouseup", function () {
                e(this).removeClass("_press")
            }), e(".bdext_guess_footer .bdext-guess-tr").on("mousedown", function () {
                e(this).addClass("_press")
            }), e(".bdext_guess_footer .bdext-guess-tr").on("click", function () {
                var t = e(".guess-n-p").text();
                d(1, t, l)
            }), e(".bdext_guess_footer .bdext-guess-tr").on("mouseup", function () {
                e(this).removeClass("_press")
            }), e(".bdext-guess-close").on("click", function () {
                e(".bdext_big_content").hide(), e(".bdext_small").show(), s.settings("guess_fold", "1")
            }), e(".bdext_small").on("click", function () {
                e(".bdext_big_content").show(), e(".bdext_small").hide(), s.settings("guess_fold", "0")
            }), e(".bdext_guess_body a").on("click", function () {
                var t = e(this).attr("href");
                t && s.tongji("3", "click", t)
            })
        };
        t.exports.init = function () {
            "0" !== i.show_leftguess && (i.site.indexOf("taobao") > -1 || i.site.indexOf("tmall") > -1) && a.init(c)
        }
    }).call(e, n(4), n(1))
}, function (t, e) {
    t.exports = '<div id="bdext_guess">\n  <div class="bdext_big_content">\n    <div class="bdext-big-head">\n      <span class="bdext-bg bdext-guess-close"></span>\n    </div>\n    <div class="bdext_guess_body">\n      <ul>\n        {{each data}}\n        <li>\n          <a href="{{$value.url}}" class="bdext_guess_img" target="_blank">\n            <img src="{{$value.image}}">\n          </a>\n          <span class="guess_price">\n            ￥{{$value.price}}\n          </span>\n        </li>\n        {{/each}}\n      </ul>\n    </div>\n    {{ if pages}}\n    <div class="bdext_guess_footer">\n      <span class="bdext-bg bdext-guess-tl"></span>\n      <span><em class="guess-n-p">1</em><em>/</em><em class="guess-t-p">2</em></span>\n      <span class="bdext-bg bdext-guess-tr"></span>\n    </div>\n    {{/if}}\n  </div>\n  <div class="bdext_small">\n    <span class="sm-tle">相似款</span>\n    <span class="bdext-bg bdext-guess-open"></span>\n  </div>\n  <style type="text/css">\n    #bdext_guess {\n      position: fixed;\n      left: 0px;\n      top: 200px;\n      z-index: 999999;\n    }\n    #bdext_guess em {\n      font-style: normal;\n    }\n    #bdext_guess * {\n      font-family: "microsoft yahei";\n    }\n    .bdext_big_content{\n      height: 507px;\n      width: 109px;\n      background-color: #fff;\n      border: 1px solid rgba(0,0,0,0.06);\n      box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.16);\n      border-radius: 5px;\n    }\n    .bdext_big_content {\n      {{if !pages}}\n        height = 458px;\n      {{/if}}\n    }\n    .bdext_guess_img {\n      display: inline-block;\n      height: 80px;\n      width: 80px;\n    }\n    .bdext_guess_body {\n      height: 436px;\n      width: 109px;\n      overflow: hidden;\n      text-align: center;\n    }\n    .bdext-big-head {\n      height: 23px;\n      position: relative;\n    }\n    .bdext-guess-close {\n      display: inline-block;\n      position: absolute;\n      height: 16px;\n      width: 16px;\n      background-position: -218px -80px;\n      top: 3px;\n      right: 4px;\n      cursor: pointer;\n    }\n    .bdext_guess_footer {\n      margin-top: 15px;\n    }\n    .bdext_guess_footer:after {\n      display: block;\n      content: "";\n      clear: both;\n    }\n    .bdext_guess_footer span {\n      float: left;\n      height: 21px;\n      width: 21px;\n    }\n    .bdext_guess_footer .bdext-guess-tl {\n      background-position: -205px 0px;\n      margin-left: 13px;\n      margin-right: 8px;\n      cursor: pointer;\n    }\n    .bdext_guess_footer .bdext-guess-tl:hover {\n      background-position: -233px -28px;\n    }\n    .bdext_guess_footer span.bdext-guess-tl._press {\n      background-position: -233px -56px;\n    }\n    .bdext_guess_footer .bdext-guess-tr {\n      background-position: -235px 0px;\n      margin-left: 13px;\n      cursor: pointer;\n    }\n    .bdext_guess_footer .bdext-guess-tr:hover {\n      background-position: -207px -28px;\n    }\n    .bdext_guess_footer span.bdext-guess-tr._press {\n      background-position: -207px -56px;\n    }\n    #bdext_guess li {\n      height: 96px;\n      margin-bottom: 13px;\n    }\n    .guess_price {\n      color: #e52222;\n      position: relative;\n      top: 2px;\n      width: 100%;\n      display: inline-block;\n      text-align: center;\n    }\n    #bdext_guess img {\n      max-height: 80px;\n      max-width: 80px;\n    }\n    .guess-t-p {\n      margin-left: 3px;\n    }\n    .guess-n-p {\n      margin-right: 4px;\n    }\n    .bdext_small {\n      display: none;\n      height: 88px;\n      width: 27px;\n      background-color: #fff;\n      border: 1px solid rgba(0,0,0,0.06);\n      box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.16);\n      border-radius: 5px;\n      cursor: pointer;\n      text-align: center;\n    }\n    .bdext_small .sm-tle {\n      font-size: 14px;\n      margin-top: 20px;\n      float: left;\n      font-family: "microsoft yahei";\n      color: #425766;\n      text-align: center;\n      line-height: 14px;\n    }\n    .bdext-guess-open{\n      height: 18px;\n      width: 18px;\n      background-position: -201px -80px;\n      display: inline-block;\n      margin-top: 4px;\n    }\n  </style>\n</div>'
}, function (t, e, n) {
    (function (e) {
        "use strict";
        var i, o, r = n(17), a = function () {
            var t = e.dp, n = t.itemId, i = t.cat_id, o = e.guid || t.userid || s(), r = encodeURIComponent(t.name),
                a = t.price, l = t.url, c = encodeURIComponent(t.pic), d = t.website;
            if (d) {
                var p = "itemId=" + n + "&title=" + r + "&cid=" + i + "&price=" + a + "&url=" + encodeURIComponent(l) + "&pic=" + c + "&website=" + d + "&userId=" + o + ",";
                return p
            }
        }, s = function () {
            for (var t = "0122", e = "0123456789abcdefghijklmn", n = 0; 28 > n; n++) t += e[parseInt(28 * Math.random())];
            return t
        };
        t.exports.init = function (t) {
            i ? t(i) : 0 === i ? t(null) : o = t
        }, t.exports.ready = function (t) {
            var e = a();
            e && (r.on(function (e) {
                try {
                    "taotaosou" == e.type && (i = JSON.parse(e.value), o && o(i), t(i))
                } catch (n) {
                    i = 0
                }
            }), r.trigger({type: "taotaosou", src: a()}))
        }
    }).call(e, n(1))
}, function (t, e, n) {
    (function (e, i) {
        "use strict";
        var o = n(16), r = n(14), a = (n(12), n(34)),
            s = {1: "中国", 228: "美国", 229: "日本", 246: "德国", 266: "英国", 365: "法国", 366: "加拿大"},
            l = {228: "USD", 229: "JPY", 246: "EUR", 266: "GBP", 365: "EUR", 366: "CAD"},
            c = {1: "¥", 228: "$", 229: "円", 246: "EUR", 266: "£", 365: "EUR", 366: "CDN$"}, d = function (t, n) {
                var i = e.server + "/extension?ac=amazonGlobal&dp_id=" + t;
                o.get(i).done(function (t) {
                    t && t.length > 0 && n(t)
                })
            }, p = function (t) {
                for (var n = 0, i = t.length; i > n; n++) {
                    var o = t[n].dp_id.split("-")[1];
                    "1" === t[n].nowpage ? t[n].siteName = s[o] + "亚马逊(当前商城)" : t[n].siteName = s[o] + "亚马逊";
                    var d = (Number(t[n].pri) / 100).toFixed(2), p = "";
                    if ("1" !== o) {
                        var u = "";
                        u = "229" === o ? d + c[o] : c[o] + d, p = r(d, l[o]), d = "¥" + p + ("(" + u + ")")
                    } else p = d, d = "¥" + d;
                    var h = {
                        site_id: o,
                        url: t[n].url,
                        mod: "amazon_global",
                        union: e.union.split("_")[1],
                        dp_id: t[n].dp_id
                    };
                    t[n].url = a.init(h), t[n].price = d, t[n].purePrice = p
                }
                return t.sort(function (t, e) {
                    return Number(t.purePrice) - Number(e.purePrice)
                }), t
            }, u = function (t) {
                t = p(t);
                var n = t[0],
                    o = '<a href="' + n.url + '" target="_blank" id="amazon_global_link">亚马逊海外购：<span>' + n.price + "</span></a>";
                i(".bdext-mini-compare").append(i(o)).show(), i("#bdext_minibar").css("min-width", "393px"), e.showMinibar || (i("#bdext_minibar").css("display", "inline-block"), e.showMinibar = !0)
            };
        t.exports.init = function (t) {
            d(t, u)
        }
    }).call(e, n(1), n(4))
}, function (t, e, n) {
    (function (e, i) {
        "use strict";
        var o = n(14), r = n(12), a = n(16), s = void 0, l = void 0, c = void 0, d = void 0, p = {
            "amazon-com": ["#priceblock_dealprice span", "#priceblock_ourprice span .buyingPrice", "#priceblock_dealprice", "#priceblock_saleprice", "#priceblock_ourprice", "#price_feature_div .a-color-price", "#wineTotalPrice"],
            "amazon-jp": ["#priceblock_dealprice span", "#priceblock_ourprice span .buyingPrice", "#priceblock_dealprice", "#priceblock_saleprice", "#priceblock_ourprice", "#price_feature_div .a-color-price", "#wineTotalPrice"],
            "6pm": ['li[id="priceSlot"] div[class="price"]']
        }, u = {
            "amazon-com": ["#priceBadging_feature_div .a-color-secondary", "#ourprice_shippingmessage .a-color-secondary"],
            "amazon-jp": ["#priceBadging_feature_div .a-color-secondary", "#ourprice_shippingmessage .a-color-secondary"],
            "6pm": []
        }, h = function (t) {
            return t.goods_original_price = Number((t.goods_original_price / 100).toFixed(2)), t.goods_price = Number((t.goods_price / 100).toFixed(2)), t.official_original_postage = Number((t.official_original_postage / 100).toFixed(2)), t.official_postage = Number((t.official_postage / 100).toFixed(2)), t.xm_official = t.official_original_postage - t.official_postage, t.international_original_postage = Number((t.international_original_postage / 100).toFixed(2)), t.international_postage = Number((t.international_postage / 100).toFixed(2)), t.xm_international = t.international_original_postage - t.international_postage, t.tax_original_fee = Number((t.tax_original_fee / 100).toFixed(2)), t.tax_fee = Number((t.tax_fee / 100).toFixed(2)), t.xm_fee = t.tax_original_fee - t.tax_fee, t.purePrice = t.goods_price + t.official_postage + t.international_postage + t.tax_fee, t.purePrice = t.purePrice.toFixed(2), t.goods_price = t.goods_price.toFixed(2), t
        }, m = function () {
            var t = e("#color+p").text();
            t || (t = e("#stage-swatches a.active").attr("title"));
            var n = {color: t};
            return JSON.stringify(n)
        }, f = function () {
            var t = u[i.site];
            if (t) {
                for (var n = 0; n < t.length; n++) {
                    var r = e(t[n]).text();
                    if (r && r.match(/\d+/)) return r = o.getPriceBeforeExchangeRate(r)
                }
                return 0
            }
        }, g = function () {
            var t = p[i.site];
            if (t) for (var n = 0; n < t.length; n++) {
                var r = e(t[n]).text();
                if (r && r.match(/\d+/)) return r = o.getPriceBeforeExchangeRate(r)
            }
        }, x = function () {
            var t = "";
            return i.site.indexOf("amazon") > -1 ? (t = location.href.match(/\/dp\/(\w+)\//), t = t && t[1], t || (t = e("#addToCart #ASIN").val())) : "6pm" === i.site && (t = e('span[id="sku"]').text().match(/\d+/), t ? t = t[0] : (t = e('span[id="sku"]').text().match(/\d+/), t = t && t[0])), t
        }, v = function () {
            var t = e('div[id="merchant-info"] a');
            return 0 === t.length ? 1 : 1 === t.length ? t.text().toLocaleLowerCase().indexOf("amazon") > -1 ? 1 : 2 : 2 === t.length && t.eq(1).text().toLocaleLowerCase().indexOf("amazon") > -1 ? 1 : 2
        }, b = function (t, e, n) {
            return 1 == n && e >= 5 && t >= 3.5 ? !0 : 2 == n && e >= 10 && t >= 4 ? !0 : !1
        }, y = function (t) {
            return t ? t += t.indexOf("?") > -1 ? "&p_r=gouwudang&p_k=plug_top_1&outer_pid=8507" : "?p_r=gouwudang&p_k=plug_top_1&outer_pid=8507" : t
        }, w = function (t) {
            var e = "http://www.gwdang.com/promotion/haitaomid?url_crc=" + t.sku + "&url=" + encodeURIComponent(location.href) + "&f_d=" + i.from_device;
            return e
        }, _ = function () {
            var t = 0, n = 0;
            i.site.indexOf("amzon") > -1 && (t = e('div[id="averageCustomerReviews"] span[class="a-icon-alt"]').text().match(/^[0-9.]+/), t = t && t[0], n = e('div[id="averageCustomerReviews"] span[id="acrCustomerReviewText"]').text().match(/^\d+/), n = n && n[0]);
            var o = x();
            d = o;
            var r = g();
            l = r;
            var a = f(), s = v();
            r && (r = Number(r) + Number(a));
            var c = b(t, n, s);
            return {price: r, sku: o, review_score: t, review_number: n, goodP: c, ziying: s}
        }, k = function (t, n) {
            var r = i.dp;
            if (!t.price) return e("#bdext_minibar").hide(), void(i.showMinibar = !1);
            var s = 100 * Number(t.price);
            s = Number(s.toFixed(2));
            var c = "";
            "6pm" === i.site && (c = "&spec=" + m());
            var d = i.server + "/api/haitao?price=" + s + "&url_crc=" + t.sku + "&url=" + encodeURIComponent(location.href) + "&review_number=" + t.review_number + "&review_score=" + t.review_score + "&sell_side=" + t.ziying + "&priority=" + t.priority + c;
            a.get(d).done(function (t) {
                if (t && 1 === t.data.product_status) {
                    var i = t.data.product_detail;
                    i.url = y(t.data.product_url), n(i)
                } else if (2 === t.data.product_status) {
                    var i = t.data.product_detail_estimate;
                    if (!i) return void e("#bdext_minibar").hide();
                    i.url = w(r), n(i)
                } else {
                    var a = "";
                    4 === t.data.product_status && (a = "抱歉，由于相关法律或者转运禁运的原因，该商品暂时不支持一键海淘"), 5 === t.data.product_status && (a = "抱歉，该商品已下架，暂时不支持一键海淘"), 6 === t.data.product_status && (a = "抱歉该商家口碑不好，不建议您购买");
                    var i = {
                        goods_price: o(l),
                        url: "javascript:void();",
                        type: t.data.product_status,
                        tle: a,
                        noinfo: !0
                    };
                    n(i)
                }
            })
        }, S = function () {
            i.site.indexOf("amazon") > -1 && e("#actionPanelWrapper").length > 0 && (e(".bdext-mini-compare").remove(), e("body").addClass("specailHack"))
        }, T = function () {
            e("#bdext_htbtn").on("mouseenter", function () {
                e(this).find(".yjht-box").show(), e("#bdext_minibar").addClass("_mshover")
            }), e("#bdext_htbtn").on("mouseleave", function () {
                e("#bdext_htbtn .yjht-box").hide(), e("#bdext_minibar").removeClass("_mshover")
            }), e("#bdext_htbtn .yjht-box").on("mouseleave", function () {
                e(this).hide(), e("#bdext_minibar").removeClass("_mshover")
            })
        }, C = function (t) {
            j("off"), t.noinfo || (t = h(t));
            var o = n(65);
            e("#bdext_htbtn").remove(), e(".bdext-mini-logo").after(r.compile(o)({data: t})), j("on"), i.showMinibar || (e("#bdext_minibar").css("display", "inline-block"), i.showMinibar = !0), T()
        }, A = function () {
            var t = _();
            t.goodP ? (t.priority = 3, k(t, C)) : (t.priority = 1, k(t, C))
        }, j = function (t) {
            "on" === t ? document.getElementById(c).addEventListener("DOMSubtreeModified", P) : "off" === t && document.getElementById(c).removeEventListener("DOMSubtreeModified", P)
        }, P = function () {
            clearTimeout(s), s = setTimeout(function () {
                (l !== g() || d !== x()) && A()
            }, 500)
        };
        t.exports.init = function () {
            c = "unifiedPrice_feature_div", 0 === e("#" + c).length && (c = "price_feature_div"), 0 === e("#" + c).length && (c = "winePriceAndSavings_feature_div"), "6pm" === i.site && (c = "priceSlot"), A(), S()
        }
    }).call(e, n(4), n(1))
}, function (t, e) {
    t.exports = '<div id="bdext_htbtn" class="{{if data.noinfo}} noinfo {{/if}}">\n    <a href="{{data.url}}" target="_blank">\n    <span class="yjht-icon"></span>\n    <span class="yjht-tle">一键海淘</span>\n    <span class="yjht-pri">￥{{data.goods_price}}</span>\n  </a>\n  \n  <div class="yjht-box">\n    {{if !data.noinfo}}\n    <div class="box-div1">\n      <span class="sp-name">官网运费</span>\n      <span>:</span>\n      <span>￥{{data.official_postage}}</span>\n    </div>\n    <div class="box-div2">\n      <span class="sp-name">转运费</span>\n      <span>:</span>\n      <span>￥{{data.international_postage}}</span>\n    </div>\n    <div class="box-div3">\n      <span class="sp-name">税费</span>\n      <span>:</span>\n      <span class="sf-num">￥{{data.tax_fee}}</span>\n      <span class="sf-desc">\n        <span>(</span>\n        <span class="sf-desc-num">{{data.xm_fee}}</span>\n        <span class="sf-desc-tle">限免</span>\n        <span>)</span>\n      </span>\n    </div>\n    <div class="box-div4">\n      <span class="sp-name">到手价</span>\n      <span>:</span>\n      <span class="last-pri">￥{{data.purePrice}}</span>\n    </div>\n    {{else}}\n      <div class="noinfo-remind remind-{{data.type}}">\n        <p>{{data.tle}}</p>\n      </div>\n    {{/if}}\n  </div>\n  <style type="text/css">\n    #bdext_htbtn {\n      border: 1px solid #c6ccd1;\n      width: 186px;\n    }\n    .bd_6pm #bdext_htbtn {\n      width: 245px;\n    }\n    #bdext_htbtn:hover {\n      border: 1px solid #425766;\n      z-index: 222;\n    }\n    #bdext_htbtn *, #bdext_mb_bg * {\n      box-sizing: content-box;\n    }\n    #bdext_htbtn span {\n      float: left;\n    }\n    #bdext_htbtn.noinfo {\n      background-color: #fafafa;\n    }\n    #bdext_htbtn.noinfo .yjht-tle, #bdext_htbtn.noinfo .yjht-pri {\n      color: #9b9b9b;\n    }\n    #bdext_htbtn .yjht-icon {\n      background: url(\'https://cdn.gwdang.com/images/extensions/bdext/bd_yjht_logo.png\') 0px 0px no-repeat;\n      height: 20px;\n      width: 20px;\n      margin-top: 11px;\n      margin-left: 14px;\n    }\n    .bd_6pm #bdext_htbtn .yjht-icon {\n      margin-left: 40px;\n    }\n    #bdext_htbtn.noinfo .yjht-icon {\n      background: url(\'https://cdn.gwdang.com/images/extensions/bdext/bd_yjht_logo2.png\') 0px 0px no-repeat;\n    }\n    .yjht-box {\n      position: absolute;\n      display: none;\n      top: 39px;\n      left: -1px;\n      height: 138px;\n      width: 186px;\n      background: #FFFFFF;\n      border: 1px solid #E6E9EB;\n      box-shadow: 0 2px 4px 0 rgba(0,0,0,0.11);\n    }\n    .bd_6pm .yjht-box {\n      width: 245px;\n      z-index: 999999;\n    }\n    .yjht-box>div {\n      float: left;\n      width: 100%;\n      line-height: 14px;\n      font-size: 12px;\n      font-weight: bold;\n      margin-left: 12px;\n    }\n    .yjht-box>div .sp-name {\n      float: left;\n      width: 52px;\n      height: 14px;\n    }\n    .yjht-box>div .sp-name+span {\n      margin-left: 5px;\n      margin-right: 5px;\n    }\n    .box-div1 {\n      margin-top: 15px;\n    }\n    .box-div2 {\n      margin-top: 16px;\n    }\n    .box-div3 {\n      margin-top: 17px;\n    }\n    .box-div4 {\n      margin-top: 17px;\n    }\n    .yjht-tle, .yjht-pri {\n      height: 38px;\n      line-height: 38px;\n      font-size: 14px;\n    }\n    #bdext_htbtn .yjht-tle {\n      margin-left: 14px;\n      margin-right: 2px;\n      color: #435459;\n    }\n    .yjht-pri {\n      color: #d10831;\n      font-weight: bold;\n    }\n    .sf-num {\n      margin-right: 5px;\n    }\n    .sf-desc:after {\n      content: "";\n      display: block;\n      clear: both;\n    }\n    .sf-desc span {\n      font-weight: normal!important;\n      float: left!important;\n      display: inline-block;\n    }\n    .sf-desc-num {\n      text-decoration: line-through;\n      margin: 0 2px;\n    }\n    .sf-desc-tle {\n      background-color: #F6A623;\n      border-radius: 8px;\n      color: #fff;\n      font-size: 12px;\n      width: 32px;\n      height: 14px;\n      margin-right: 2px;\n      text-align: center;\n    }\n    .yjht-box>div .sp-name {\n      text-align:justify;\n      text-justify:distribute-all-lines;/*ie6-8*/\n      text-align-last:justify;/* ie9*/\n      -moz-text-align-last:justify;/*ff*/\n      -webkit-text-align-last:justify;/*chrome 20+*/\n    }\n    @media screen and (-webkit-min-device-pixel-ratio:0){/* chrome*/\n      .yjht-box>div .sp-name:after{\n        content:".";\n        display: inline-block;\n        width:100%;\n        overflow:hidden;\n        height:0;\n      }\n    }\n    #bdext_htbtn .last-pri {\n      color: #d10831;\n    }\n    .yjht-box .noinfo-remind {\n      margin: 0px;\n    }\n    .yjht-box .remind-4 {\n      background: url(\'https://cdn.gwdang.com/images/extensions/bdext/bd_yjht_forbid.png\') 57px 11px no-repeat;\n    }\n    .yjht-box .remind-5 {\n      background: url(\'https://cdn.gwdang.com/images/extensions/bdext/bd_yjht_close.png\') 57px 11px no-repeat;\n    }\n    .yjht-box .remind-6 {\n      background: url(\'https://cdn.gwdang.com/images/extensions/bdext/bd_yjht_bad.png\') 57px 11px no-repeat;\n    }\n    #bdext_htbtn .noinfo-remind p {\n      margin: 0px;\n      margin-top: 77px;\n      text-align: center;\n      width: 144px;\n      height: auto;\n      line-height: 16px;\n      margin-left: 20px;\n      font-size: 12px;\n      color: #8d8d8d;\n      font-weight: normal;\n    }\n    .bdext-mini-trend {\n      left: -1px;\n    }\n    .bd_6pm .bdext-mini-trend {\n      display: none!important;\n    }\n    div#bdext_minitrend_detail {\n      left: -239px;\n    }\n    .specailHack div#bdext_minitrend_detail {\n      left: auto;\n      right: 0px;\n    }\n    div#actionPanelWrapper.burj {\n      overflow: visible!important;\n    }\n  </style>\n</div'
}, function (t, e) {
    t.exports = '<div id="bdext_mainbar" class="bdext-detail">\n  <div class="bdext-head">\n      <a href="javascript:" class="bdext-bg bd-head-icon"></a>\n      <!-- <span class="bd-tle">比价助手</span> -->\n  </div>\n  <div class="bdext-product-compare">\n    \n  </div>\n  \n  <div class="bdext-right">\n    <div class="bdext-lowpri">同类历史低价</div>\n    <div class="bdext-trend">\n      <span class="bdext-bg bdext-trend-icon "></span>\n      <span class="bdext-trend-tle">价格下降</span>\n    </div>\n    <div class="bdext-history">\n      <span class="bdext-bg"></span>\n    </div>\n    <div class="bdext-foot">\n      <a href="javascript:"  class="bdext-feedback bdext-bg" title="反馈"></a>\n      <a href="javascript:"  class="bdext-setting bdext-bg" title="设置"></a>\n    </div>\n  </div>\n  \n  <style type="text/css">\n    .bdext-detail {\n      display: none;\n    }\n  </style>\n</div>\n'
}, function (t, e, n) {
    (function (e, n) {
        "use strict";

        function i(t, e) {
            if (0 != e.indexOf("http")) {
                if (0 == e.indexOf("javascript")) t = "", e = ""; else if (0 == e.indexOf("//")) t = "http:"; else if (0 == e.indexOf("/")) t = t.replace(/(http:\/\/[^\/]+).*/gi, "$1"); else {
                    var n = t.substr(0, t.indexOf("//") + 2);
                    t = t.substr(t.indexOf("//") + 2);
                    var i = t.split("/"), o = i.length - 1;
                    if (0 == e.indexOf("./")) e = e.substr(2); else if (0 == e.indexOf("../")) for (; 0 == e.indexOf("../");) e = e.substr(3), o--;
                    t = n;
                    for (var r = 0; o > r; r++) t += i[r] + "/"
                }
                e = t + e
            }
            return e
        }

        function o() {
            var t = e.site;
            return "yhd" == e.site && (t = "yihaodian"), "vip" == e.site && (t = "vipshop"), t
        }

        function r() {
            ("baidu" == e.from_device || "mi_new" == e.from_device || "njck" == e.from_device || "bjlt" == e.from_device || e.new_extension) && (d["360buy"] = 3)
        }

        var a = e.u_server + "/union/go", s = ["jsdx", "tlxs", "hndx", "xdjf", "hagw", "baidu", "mi_new"];
        !e.isMobile && s.indexOf && s.indexOf(e.from_device) > -1 && (a = e.specialUnion);
        var l, c = !0, d = {
            dangdang: 2,
            newegg: 7,
            m18: 10,
            sephoracps: 12,
            lefeng: 13,
            s: 14,
            "51buy": 15,
            moonbasa: 17,
            keede: 18,
            kede: 18,
            vancl: 19,
            letao: 22,
            taoxie: 24,
            suning: 25,
            coo8: 26,
            gome: 28,
            "gome-rushbuy": 28,
            gomehigo: 28,
            yihaodian: 31,
            "yihaodian-tuan": 31,
            womai: 32,
            leyou: 33,
            shopin: 34,
            xiu: 35,
            mbaobao: 36,
            chunshuitang: 40,
            x: 41,
            no5: 43,
            sasa: 45,
            "360kxr": 50,
            m6go: 51,
            morefood: 54,
            "99read": 59,
            "china-pub": 60,
            bookschina: 61,
            winxuan: 62,
            efeihu: 63,
            yintai: 66,
            strawberrynet: 69,
            happigo: 72,
            gap: 73,
            tmall: 83,
            tiantian: 84,
            jumei: 86,
            yougou: 93,
            111: 94,
            jianke: 97,
            muyingzhijia: 98,
            lingshi: 99,
            banggo: 100,
            yesmywine: 101,
            jiumei: 102,
            winenice: 102,
            jiuxian: 103,
            goujiuwang: 108,
            okhqb: 109,
            bookuu: 110,
            d1: 115,
            paixie: 122,
            s8: 123,
            homevv: 124,
            jxdyf: 125,
            jinxiang: 125,
            sfbest: 126,
            benlai: 127,
            tootoo: 128,
            vipshop: 129,
            fclub: 130,
            ihush: 131,
            vmall: 134,
            lenovo: 135,
            apple: 136,
            zm7: 138,
            miqi: 139,
            zhiwo: 140,
            j1: 141,
            wangjiu: 142,
            liebo: 144,
            esprit: 145,
            lamiu: 146,
            aimer: 147,
            kadang: 148,
            lizi: 149,
            metromall: 150,
            pba: 151,
            shangpin: 152,
            wbiao: 153,
            handuyishe: 154,
            ehaier: 155,
            secoo: 156,
            camel: 157,
            masamaso: 158,
            nop: 159,
            naruku: 160,
            gaojie: 161,
            zhenpin: 162,
            sportica: 163,
            xifuquan: 164,
            milier: 165,
            lemall: 168,
            dianping: 171,
            ctrip: 173,
            yiguo: 174,
            yummy77: 175,
            fruitday: 178,
            jumeiglobal: 179,
            feiniu: 180,
            feifei: 181,
            zuipin: 182,
            yohobuy: 184,
            lvmama: 185,
            ikjtao: 188,
            mf910: 194,
            markmall: 194,
            miyabaobei: 195,
            ule: 196,
            mingshengec: 197,
            wangfujing: 198,
            nuomi: 199,
            qunar: 200,
            meilishuo: 202,
            mogujie: 203,
            "55tuan": 204,
            jinjianginns: 205,
            elong: 206,
            500: 209,
            supuy: 210,
            lv: 211,
            caipiao: 212,
            lining: 213,
            koolearn: 214,
            springtour: 215,
            228: 216,
            rrs: 217,
            coocaa: 218,
            lifevc: 220,
            niubia: 221,
            kzj365: 222,
            kaola: 223,
            ymatou: 224,
            metao: 225,
            kjt: 226,
            logitech: 227,
            ebay: 230,
            xiji: 232,
            nike: 233,
            "360kad": 234,
            lbxcn: 235,
            meici: 236,
            beibei: 237,
            "6pm": 238,
            shopbop: 241,
            sierratradingpost: 243,
            ashford: 243,
            "lookfantastic-com": 248,
            vsigo: 252,
            "100yue": 256,
            haitaocheng: 258,
            joesnewbalanceoutlet: 259,
            daling: 267,
            sfht: 268,
            fengqu: 268,
            mei: 269,
            showjoy: 270,
            ocj: 271,
            sundan: 272,
            easeeyes: 273,
            yunhou: 274,
            haituncun: 275,
            walmart: 276,
            vmei: 277,
            jgb: 278,
            "51din": 279,
            aidai: 280,
            boqii: 281,
            toursforfun: 282,
            lulutrip: 283,
            spider: 284,
            microsoftstore: 285,
            jiae: 286,
            zazhipu: 287,
            xgdq: 288,
            xtep: 289,
            midea: 290,
            staples: 291,
            efotile: 292,
            bestcake: 293,
            lovo: 294,
            hua: 295,
            zhe800: 296,
            bftv: 297,
            tujia: 298,
            tuhu: 299,
            htc: 300,
            roseonly: 301,
            rong360: 302,
            niwodai: 303,
            cosme: 304,
            diapers: 305,
            windeln: 306,
            babyneo: 307,
            escentual: 308,
            thewatchery: 309,
            saksfifthavenue: 310,
            esteelauder: 311,
            biccamera: 312,
            taqu: 313,
            qyer: 314,
            "axmall ": 315,
            muji: 316,
            gmarket: 317,
            "11st": 318,
            smartbargains: 319,
            yahooshop: 320,
            bloomingdales: 321,
            mikihouse: 322,
            toysrus: 323,
            comfortfirst: 324,
            gymboree: 325,
            albeebaby: 326,
            babymarkt: 327,
            uggaustralia: 328,
            neimanmarcus: 329,
            shoebuy: 330,
            szul: 331,
            timex: 332,
            kay: 333,
            ewatches: 334,
            swarovski: 335,
            worldofwatches: 336,
            danielwellington: 337,
            beautybay: 338,
            beauty: 339,
            beautybar: 340,
            skinstore: 341,
            laneige: 342,
            bose: 343,
            bestbuy: 344,
            bhphotovideo: 345,
            sony: 346,
            bl: 347,
            bestinfoods: 348,
            you163: 349,
            jinjiang: 350,
            guojimami: 351,
            baiyangwang: 352,
            royyoungchemist: 354,
            medihealshop: 355,
            "1001pharmacies": 356,
            "lookfantastic-cn": 357,
            "1-163": 358,
            kaixinbao: 359,
            juanpi: 360,
            booking: 361,
            pharmacyonline: 362,
            bodyguardapotheke: 363,
            purcotton: 364,
            wstx: 367,
            hisense: 368,
            zhongjiu: 369,
            kaluli: 370,
            to8to: 371,
            opposhop: 372,
            baobeigezi: 373,
            yao123: 374,
            baicheng: 375,
            gionee: 376,
            suanjuzi: 377,
            aomygod: 378,
            luolai: 379,
            vivo: 380,
            dixintong: 381,
            coolpad: 382,
            skg: 383,
            iqiyi: 384,
            aolaigo: 385,
            missfresh: 386,
            pushenkuajing: 387,
            feelunique: 388,
            chemistdirect: 389,
            netpharmacy: 390,
            pharmacy4less: 391,
            pharmacydirect: 392,
            amcal: 393,
            laredoute: 394,
            unserekleineapotheke: 395,
            erwinmueller: 396,
            kiwidiscovery: 397,
            springlane: 398,
            "jako-o": 399,
            easytoys: 400,
            tlcpharmacy: 401,
            bienmanger: 402,
            dewaren: 403,
            "discount-apotheke": 404,
            "holland-at-home": 405,
            youyu: 406,
            kiwistarcare: 407,
            lenovomobile: 408,
            kiehls: 409,
            zappos: 410,
            coach: 411,
            yoox: 412,
            "11street": 413,
            "51taouk": 414,
            hqhair: 415,
            katespade: 416,
            vitafy: 417,
            lotte: 418,
            carrefour: 419,
            tea7: 420,
            puzeyf: 421,
            kohls: 422,
            bodybuilding: 423,
            nordstrom: 424,
            costco: 425,
            target: 426,
            kmart: 427,
            overstock: 428,
            sears: 429,
            shoprobam: 430,
            goumin: 431,
            flyco: 432,
            opplestore: 433,
            syshop: 434,
            yfdyf: 435,
            hotels: 436,
            aihuishou: 437,
            thebeastshop: 438,
            jomooshop: 439,
            septwolves: 440,
            lianjia: 441,
            "5i5j": 442,
            home6: 443,
            "800pharm": 444,
            ujipin: 445,
            mmb: 446,
            ihaveu: 447,
            ikang: 448,
            wyn88: 449,
            mcake: 450,
            xmeise: 451,
            lecake: 452,
            jd100: 453,
            jinghua: 454,
            taohwu: 455,
            zbird: 456,
            km1818: 457,
            zocai: 458,
            taoshu: 459,
            aizhigu: 460,
            tieyou: 461,
            fieldschina: 462,
            wdmcake: 463,
            lqxshop: 464,
            usashopcn: 467,
            wine9: 468,
            qipaimall: 469,
            yododo: 470,
            1688: 471,
            yoger: 472,
            dapu: 473,
            winona: 474,
            wl: 475,
            shanmai: 476,
            zgshoes: 477,
            maichawang: 478,
            uemall: 489,
            "51you": 480,
            beifabook: 481,
            jpeen: 482,
            huatuoyf: 483,
            fengbuy: 484,
            uiyi: 485,
            hecha: 486,
            t10: 487,
            qw: 488,
            miutour: 489,
            ehaoyao: 490,
            idx: 491,
            uya100: 492,
            ssnewyork: 493,
            clinique: 494,
            hxepawn: 495,
            brooksbrothers: 496,
            omtao: 497,
            ep365: 498,
            columbiasports: 499,
            bstapp: 500,
            newbalance: 501,
            wjike: 502,
            bally: 503,
            "1hai": 504,
            jialich: 505,
            takeya: 506,
            forever21: 507,
            modernavenue: 508,
            muniao: 509,
            zuihuiyou: 510,
            centanet: 511,
            bobbibrowncosmetics: 512,
            "super-in": 513,
            hangowa: 514,
            levi: 515,
            fila: 516,
            converse: 517,
            nextdirect: 518,
            itrip: 519,
            lashou: 520,
            liufeng: 521,
            trt: 522,
            wodinghua: 523,
            wuliwuli: 524,
            forestfood: 525,
            bonjourhk: 526,
            vitagou: 527,
            kinhom: 528,
            "360lj": 529,
            changba: 530,
            oakley: 531,
            jpyoo: 532,
            clarksusa: 533,
            starwoodhotels: 534,
            marriott: 535,
            yesstyle: 536,
            evisu: 537,
            lifeseasy: 538,
            ccxpet: 539,
            x0061: 540,
            kkguan: 541,
            "style-oclock": 542,
            peikua: 543,
            airfrance: 544,
            accorhotels: 545,
            spacenk: 546,
            haichufang: 547,
            wconcept: 548,
            gant: 549,
            catfootwear: 550,
            saucony: 551,
            zaozuo: 552,
            littleswan: 553,
            can: 554,
            ssrj: 555,
            guess: 556,
            etihad: 557,
            fiil: 558,
            mianshui365: 559,
            tegoushe: 560,
            wiggle: 561,
            mdreams: 562,
            ecovacs: 563,
            calvinklein: 564,
            memebox: 565,
            hilton: 566,
            revolve: 567,
            shiseido: 568,
            clarinsusa: 569,
            starbucks: 570,
            "ray-ban": 571,
            puma: 572,
            nautica: 573,
            cremedelamer: 574,
            "kipling-usa": 575,
            jurlique: 576,
            hushpuppies: 577,
            origins: 578,
            follifollie: 779,
            loccitane: 580,
            hpstore: 582,
            "01home": 584,
            healthpost: 588,
            imengxiang: 590,
            hysj: 591,
            saohuo7: 592,
            repai: 593,
            mayi: 594,
            yinpiao: 595,
            "ihome-ins": 596,
            incake: 597,
            kuwo: 598,
            ywart: 599,
            cct: 600,
            ansgo: 601,
            pilibaba: 602,
            xiaoniu88: 603,
            ahava: 604,
            "5-fifth": 605,
            thewatchhut: 606,
            babyhaven: 607,
            "cosme-de": 608,
            getthelabel: 609,
            matsuya: 610,
            timberland: 611,
            topman: 612,
            homeaway: 613,
            beautyexpert: 614,
            haimi: 615,
            mankind: 616,
            thehut: 617,
            topshop: 618,
            mamaladen: 619,
            "traveler-store": 620,
            travelzoo: 621,
            umishoes: 622,
            perriconemd: 623,
            ferrari: 624,
            willerexpress: 625,
            unineed: 626,
            acnestudios: 627,
            aeropostale: 628,
            agoda: 629,
            albamoda: 630,
            allbeauty: 631,
            allsaints: 632,
            allsole: 633,
            urbanoutfitters: 634,
            vitabiotics: 635,
            bellemaison: 636,
            benefitcosmetics: 637,
            bhcosmetics: 638,
            bjmylikes: 639,
            vitaminbay: 640,
            waitrose: 641,
            wolfordshop: 642,
            boohoo: 643,
            boots: 644,
            britishcornershop: 645,
            yirendai: 646,
            ys7: 647,
            coggles: 648,
            corsetdeal: 649,
            cottonon: 650,
            crocs: 651,
            cruisefashion: 652,
            dell: 653,
            dermstore: 654,
            disneystore: 655,
            dorothyperkins: 656,
            doudoukang: 657,
            dujiake: 658,
            dunelondon: 659,
            eastbay: 660,
            eastdane: 661,
            zaful: 662,
            zavvi: 663,
            feinkeit: 664,
            eibmarkt: 665,
            belluna: 666,
            emirates: 667,
            ems: 668,
            eterna: 669,
            eurail: 670,
            exantediet: 671,
            expedia: 672,
            falke: 673,
            famousfootwear: 674,
            foreo: 676,
            wangxinlicai: 677,
            foreverunique: 678,
            forzieri: 679,
            freecountry: 680,
            frenchconnection: 682,
            "gift-land": 683,
            growgorgeous: 687,
            hotel: 690,
            houseoffraser: 691,
            huizuche: 692,
            iwantoneofthose: 695,
            jjglobal: 696,
            juicycouture: 699,
            kenko: 700,
            kikocosmetics: 702,
            lancerskincare: 703,
            lego: 704,
            lordandtaylor: 706,
            maizhi: 711,
            matchesfashion: 712,
            matsukiyo: 713,
            microsoft: 715,
            mioskincare: 716,
            missselfridge: 717,
            mountaingear: 718,
            mybag: 720,
            myprotein: 721,
            myvitamins: 723,
            "net-a-porter": 724,
            "newbalance-uk": 725,
            ddky: 726,
            newlook: 727,
            chinaacc: 728,
            bmai: 729,
            "nike-hk": 730,
            "nike-br": 731,
            inke: 732,
            nyandcompany: 733,
            "oasis-stores": 734,
            orbitz: 735,
            orchira: 736,
            "origins-uk": 737,
            petsmart: 738,
            junrongdai: 739,
            napai: 740,
            gree: 741,
            probikekit: 742,
            qatarairways: 743,
            radley: 744,
            allianz: 745,
            ralphlauren: 746,
            rebeccaminkoff: 747,
            youmi: 748,
            "21cake": 749,
            rentalcars: 750,
            ricaud: 751,
            rockport: 752,
            ruelala: 753,
            "56ren": 754,
            saksoff5th: 755,
            anantara: 756,
            sc24: 757,
            chesudi: 758,
            shoes: 759,
            shopspring: 760,
            simplysupplements: 761,
            ehmall: 762,
            farfetch: 763,
            ssense: 764,
            stevemadden: 765,
            freepeople: 766,
            gaosouyi: 767,
            imomoko: 768,
            taodo: 769,
            michaelkors: 770,
            ttcj: 771,
            "uf-club": 772,
            zhaidou: 773,
            "163yun": 774,
            apo: 775,
            jimu: 776,
            hao24: 777,
            seagoor: 778,
            wannar: 779,
            caihang: 780,
            csmall: 781,
            kuajing: 782,
            millenniumhotels: 783,
            reebonz: 784,
            wemakeprice: 785,
            wzhouhui: 786,
            huijiayou: 787,
            melimelo: 788,
            "91xcm": 789,
            "ashford-zh": 790,
            cjonmart: 791,
            cnyto: 792,
            granddfs: 793,
            officedepot: 794,
            tianhong: 795,
            yilingshop: 796,
            klook: 797,
            "charm-color": 798,
            felissimo: 799,
            surfstitch: 800,
            lornajane: 801,
            reiss: 802,
            gzl: 803,
            "9drug": 804,
            yungoubs: 805
        };
        t.exports = function () {
            var t = o();
            r();
            var s = location.href;
            if (!(s.indexOf("order") > -1 || s.indexOf("cart") > -1) && e.set_force) try {
                if (d[t] && n.inArray("" + d[t], e.force) >= 0) return;
                n("body").delegate("a", "mouseenter mouseleave mouseover", function (t) {
                    var e = n(this).attr("ct");
                    "mouseover" != t.type && e && n(this).attr("href", e).removeAttr("ct").attr("cted", "1")
                }), "s8" != t ? n("body").delegate("a", "click", function (o) {
                    if (!(n.inArray("" + d[t], e.force) >= 0) && !l && ("1" !== n(this).attr("cted") || e.isMobile)) {
                        if (c && !e.isMobile && ("jsdx" == e.from_device && e.secondShow || "tlxs" == e.from_device && e.secondShow || "hndx" == e.from_device || "xdjf" == e.from_device && e.secondShow || "hagw" == e.from_device && e.secondShow || "mi_new" == e.from_device)) return void(c = !1);
                        if (d[t]) {
                            var r = n(this).attr("href");
                            if (!r || r.indexOf("order") > -1 || r.indexOf("cart") > -1) return;
                            var s = n(this).attr("class") || "";
                            r = i(e.href, r), 0 == r.indexOf("http") && r.indexOf("" + e.extName) < 0 && -1 == s.indexOf(e.extName + "_link") && (r = a + "?site_id=" + d[t] + "&target_url=" + encodeURIComponent(r) + "&from=ct&column=dicts&union=" + e.union.replace("union_", ""), n(this).attr("ct", n(this).attr("href")), n(this).attr("href", r), l = !0, n.ajax({
                                url: e.server + "/brwext/permanent_id/",
                                dataType: "jsonp",
                                jsonp: "callback",
                                async: !0,
                                data: "version=2&op=set_force&type=" + d[t] + "&union=" + e.union,
                                success: function (t) {
                                    e.force = t.force
                                },
                                error: function (t, e, n) {
                                }
                            }))
                        }
                    }
                }) : n("body").delegate("a", "click", function (o) {
                    if (!(n.inArray("" + d[t], e.force) >= 0)) {
                        if (c) return void(c = !1);
                        if (d[t]) {
                            var r = n(this).attr("href");
                            r = i(e.href, r), 0 == r.indexOf("http") && r.indexOf("" + e.extName) < 0 && (r.indexOf("item") > 0 || r.indexOf("detail") > 0) && (r = a + "?site_id=" + d[t] + "&target_url=" + encodeURIComponent(r) + "&from=ct", n(this).attr("ct", n(this).attr("href")), n(this).attr("href", r), n.ajax({
                                url: e.server + "/brwext/permanent_id/",
                                dataType: "jsonp",
                                jsonp: "callback",
                                async: !0,
                                data: "version=2&op=set_force&type=" + d[t],
                                success: function (t) {
                                    e.force = t.force
                                },
                                error: function (t, e, n) {
                                }
                            }))
                        }
                    }
                })
            } catch (p) {
                if (e.debug) throw p
            }
        }
    }).call(e, n(1), n(4))
}, function (t, e, n) {
    (function (e, i) {
        "use strict";
        var o = n(16), r = n(12), a = n(69), s = n(15), l = void 0, c = void 0, d = {}, p = !0, u = {
            lianjia: {list: ".sellListContent li", hrefitem: ".info .title a", insertdom: ".sellListContent li"},
            lianjia2: {
                list: "#js-ershoufangList .m-list>ul>li",
                hrefitem: ".prop-title a",
                insertdom: "#js-ershoufangList .m-list>ul>li"
            },
            "5i5j": {list: "#exchangeList .list-body>li", hrefitem: "a", insertdom: "#exchangeList .list-body>li"},
            centanet: {
                list: ".section-houselists .house-item",
                hrefitem: ".house-title a",
                insertdom: ".section-houselists .house-item"
            },
            centanet2: {
                list: ".result-lists .house-main .house-item",
                hrefitem: ".house-title a", insertdom: ".result-lists .house-main .house-item"
            }
        }, h = {
            lianjia: ".content>.price",
            lianjia2: ".houseInfo",
            "5i5j": ".house-info>li:first-child",
            centanet: "#sidefixedbox .infotop",
            centanet2: ".roombase-infor .roombase-price"
        }, m = {lianjia: 441, "5i5j": 442, centanet: 511}, f = function () {
            var t = S(), n = void 0;
            if (2 == t) {
                var i = location.href;
                switch (e.site) {
                    case"lianjia":
                        n = i.match(/\/([a-z0-9A-Z]+)\.html/)[1];
                        break;
                    case"5i5j":
                        n = i.match(/\/([a-z0-9]+)(?:$|\?)/)[1];
                        break;
                    case"centanet":
                        n = i.match(/\/([a-z0-9]+)\.html/)[1]
                }
            } else {
                var o = c;
                switch (e.site) {
                    case"lianjia":
                        n = Array.prototype.map.call(o, function (t) {
                            return t.match(/\/([a-z0-9A-Z]+)\.html/)[1]
                        }).join(",");
                        break;
                    case"5i5j":
                        n = Array.prototype.map.call(o, function (t) {
                            return t.match(/\/([a-z0-9]+)(?:$|\?)/)[1]
                        }).join(",");
                        break;
                    case"centanet":
                        n = Array.prototype.map.call(o, function (t) {
                            return t.match(/\/([a-z0-9]+)\.html/)[1]
                        }).join(",")
                }
            }
            return n
        }, g = function () {
            var t = m[e.site];
            if (t) {
                var n = f(), r = e.u_house + "/api/house_collection?ac=exist&site_id=" + t + "&house_code=" + n;
                o.get(r).done(function (t) {
                    if (t && t.exist) for (var e = i(".ht-price-remind"), n = 0; n < e.length; n++) {
                        var o = e.eq(n).attr("data-id");
                        t.exist[o] && (e.eq(n).addClass("hasremind"), e.eq(n).find("span").text("已添加提醒"), e.eq(n).attr("data-colid", t.exist[o]))
                    }
                })
            }
        }, x = function (t, n) {
            if (!(d[t] >= 4)) {
                d[t] || (d[t] = 1), d[t]++;
                var i = m[e.site],
                    r = e.u_house + "/api/house_collection?ac=add&site_id=" + i + "&house_code=" + t + "&from_url=" + encodeURIComponent(location.href);
                o.get(r).done(function (t) {
                    t && "收藏成功" === t.msg ? n(t) : "请先登录" === t.msg && (location.href = t.loginUrl)
                })
            }
        }, v = function (t, n) {
            var i = e.u_house + "/api/house_collection?ac=del&collection_id=" + t;
            o.get(i).done(function (t) {
                t && "删除成功" === t.msg && n()
            })
        }, b = function () {
            var t = void 0, e = void 0;
            i(".ht-trend-desc, #bdext_minibar .bdext-toptabs").on("mouseenter", function () {
                var t = i(this).parent().parent().hasClass("trend-box-1");
                if (!t) {
                    var e = i(this).parent().next().find(".house-trend-img img").attr("src");
                    if (!e) {
                        var n = i(this).parent().next().find(".house-trend-img img").attr("data-src");
                        i(this).parent().next().find(".house-trend-img img").attr("src", n)
                    }
                    i(this).addClass("mshover"), i(this).parent().next().show()
                }
            }), i(".ht-trend-desc, #bdext_minibar .bdext-toptabs").on("mouseleave", function () {
                var e = this;
                t = setTimeout(function () {
                    i(e).parent().next().hide(), i(e).removeClass("mshover")
                }, 300)
            }), i(".houset-detail").on("mouseenter", function () {
                clearTimeout(t)
            }), i(".houset-detail").on("mouseleave", function () {
                i(this).hide(), i(".ht-trend-desc, #bdext_minibar").removeClass("mshover")
            }), i(".ht-price-remind").on("click", function () {
                var t = this, e = i(this).find("span").text(), n = i(this).attr("data-id");
                if ("降价提醒" === e) x(n, function (e) {
                    i(t).addClass("hasremind"), i(t).find("span").text("已添加提醒"), i(t).attr("data-colid", e.collect_id)
                }); else {
                    var o = i(this).attr("data-colid");
                    v(o, function () {
                        i(t).attr("data-colid", null), i(t).removeClass("hasremind"), i(t).find("span").text("降价提醒")
                    })
                }
            }), i(".ht-price-remind").on("mouseenter", function () {
                0 != s.get("show_ljfqrcode") && p && i(this).parent().parent().find(".ht-wxqrcode").show()
            }), i(".ht-price-remind").on("mouseleave", function () {
                var t = this;
                e = setTimeout(function () {
                    i(t).parent().parent().find(".ht-wxqrcode").hide()
                }, 150)
            }), i(".ht-wxqrcode").on("mouseenter", function () {
                clearTimeout(e)
            }), i(".ht-wxqrcode").on("mouseleave", function () {
                i(".ht-wxqrcode").hide()
            }), i(".ht-wxqrcode .ht-wx-sp3").on("click", function () {
                i(".ht-wxqrcode").hide(), p = !1, a.settings("set_show_ljfqrcode", "show_ljfqrcode", "0")
            })
        }, y = function (t) {
            var o = n(70);
            "baidu" === e.from_device && (o = n(71));
            for (var a = u[l], s = i(a.list), c = 0; c < s.length; c++) {
                var d = s.eq(c).find(a.hrefitem), p = d.attr("href");
                -1 === p.indexOf("http") && (p = location.protocol + "//" + location.host + p);
                var h = void 0;
                switch (e.site) {
                    case"lianjia":
                        h = p.match(/\/([a-z0-9A-Z]+)\.html/)[1];
                        break;
                    case"5i5j":
                        h = p.match(/\/([a-z0-9]+)(?:$|\?)/)[1];
                        break;
                    case"centanet":
                        h = p.match(/\/([a-z0-9]+)\.html/)[1]
                }
                p = encodeURIComponent(p), t.data[p] && s.eq(c).append(r.compile(o)({
                    data: t.data[p],
                    server: e.server,
                    s_server: e.s_server,
                    housecode: h
                }))
            }
            setTimeout(g, 500), b()
        }, w = function (t) {
            var o = f(), a = h[l], s = n(70);
            "baidu" === e.from_device && (s = n(71));
            var c = encodeURIComponent(location.href);
            i(a).after(r.compile(s)({
                data: t.data[c],
                server: e.server,
                s_server: e.s_server,
                pagetype: "dppage",
                housecode: o
            })), b(), setTimeout(g, 500)
        }, _ = function (t) {
            var e = u[l], n = e.list + " " + e.hrefitem, o = location.host;
            if (o.indexOf("lianjia") > -1 && 2 === t) return location.href;
            if (o.indexOf("lianjia") > -1) {
                var r = Array.prototype.map.call(i(n), function (t) {
                    var e = i(t).attr("href");
                    return (e.indexOf("http") > -1 ? "" : "http://" + location.host) + e
                });
                return c = r, r.join("||")
            }
            if (o.indexOf("5i5j") > -1 && 2 === t) return location.href;
            if (o.indexOf("5i5j") > -1) {
                var r = Array.prototype.map.call(i("#exchangeList .list-body>li>a"), function (t) {
                    return location.protocol + "//" + location.host + i(t).attr("href")
                });
                return c = r, r.join("||")
            }
            if (o.indexOf("centanet") > -1 && 2 === t) return location.href;
            if (o.indexOf("centanet") > -1) {
                var r = Array.prototype.map.call(i(n), function (t) {
                    return location.protocol + "//" + location.host + i(t).attr("href")
                });
                return c = r, r.join("||")
            }
        }, k = function (t, n) {
            var i = _(t), r = e.server + "/extension/houseTip?url=" + encodeURIComponent(i);
            o.get(r).done(function (t) {
                n(t)
            })
        }, S = function () {
            var t = location.href, e = 0, n = l;
            switch (n) {
                case"lianjia":
                    e = t.match(/\d+\.html/) && i("#topImg").length > 0 ? 2 : 1;
                    break;
                case"lianjia2":
                    e = t.match(/\d+\.html/) && i("#albumBig").length > 0 ? 2 : 1;
                    break;
                case"5i5j":
                    t.match(/exchange\/\d+(?:$|\?)/) && i(".bigImg").length > 0 ? e = 2 : t.match(/exchange/) && (e = 1);
                    break;
                case"centanet":
                    t.match(/ershoufang\/[a-z0-9]+\.html/) && i("#picBox").length > 0 ? e = 2 : t.match(/ershoufang/) && (e = 1);
                    break;
                case"centanet2":
                    t.match(/ershoufang\/[a-z0-9]+\.html/) ? e = 2 : t.match(/ershoufang/) && (e = 1)
            }
            return e
        }, T = function () {
            var t = n(72);
            i("body").append(r.compile(t)({
                s_server: e.s_server,
                extBrand: e.extBrand
            })), i("body").addClass("house_" + l)
        };
        t.exports.init = function () {
            if (l = e.site, "lianjia" == l || "5i5j" == l || "centanet" == l) {
                ("sh.lianjia.com" === location.host || "su.lianjia.com" === location.host) && (l = "lianjia2"), "sh.centanet.com" === location.host && (l = "centanet2");
                var t = S();
                2 === t ? k(t, w) : k(t, y), T()
            }
        }
    }).call(e, n(1), n(4))
}, function (t, e, n) {
    var i;
    (function (o, r) {
        "use strict";
        i = function () {
            function t(t, e, n, i) {
                function o() {
                    r >= n || (t() ? e() : (r++, setTimeout(o, i)))
                }

                var r = 0;
                o()
            }

            function e(t) {
                var e = t, i = n(16);
                i.get(o.server + "/brwext/permanent_id?version=2&op=set_p_fold&p_fold=" + e).done(function (t) {
                    o.p_fold = e
                })
            }

            function i(t) {
                return r.extend(!0, {}, t)
            }

            var a = function (t, e, i) {
                var r = n(16);
                r.get(o.server + "/brwext/permanent_id?" + ("version=2&op=" + t + "&" + e + "=" + i)).done(function (t) {
                    o[e] = i
                })
            };
            return {mainbarfold: e, settings: a, retry: t, deepCopy: i}
        }.call(e, n, e, t), !(void 0 !== i && (t.exports = i))
    }).call(e, n(1), n(4))
}, function (t, e) {
    t.exports = '<div class="house-trend-box {{pagetype}} trend-box{{data.trend}}">\n  <div class="houset-btn">\n    <a class="house-trend-bg" title="撸房价"></a>\n    <div class="ht-trend-desc">\n      <span class="h-color{{data.trend}}">{{data.trendMsg}}</span>\n      <em class="trend-icon{{data.trend}} house-trend-bg"></em>\n    </div>\n    <div class="ht-price-remind" data-id="{{housecode}}">\n      <em class="house-trend-bg"></em>\n      <span>降价提醒</span>\n    </div>\n  </div>\n  <div class="houset-detail">\n    <div class="house-trend-img">\n      <img src="" data-src="{{server}}{{data.trendImg}}&width=460&height=210&plotFontSize=10">\n    </div>\n    <div class="house-price-qrcode">\n      <span class="mgtop">每日成交行情</span>\n      <span class="red-pri">房源历史报价</span>\n      <img src="{{s_server}}/images/extensions/newbar/housepri-qrcode2.png">\n      <p>扫码关注撸房价</p>\n    </div>\n    <div class="price-range">\n      {{if data.maxPrice == data.minPrice}}\n        <span >现价：{{data.maxPrice}}万</span>\n      {{else}}\n        <span class="toppri">最高价：{{data.maxPrice}}万</span>\n        <span class="lowpri">最低价：{{data.minPrice}}万</span>\n      {{/if}}\n    </div>\n  </div>\n  <div class="ht-wxqrcode">\n    <span class="ht-wx-sp1">关注公众号</span>\n    <span class="ht-wx-sp2">房源降价实时提醒</span>\n    <img src="{{s_server}}/images/extensions/newbar/housepri-qrcode2.png">\n    <span class="ht-wx-sp3">不再提示</span>\n  </div>\n</div>'
}, function (t, e) {
    t.exports = '<div id="bdext_mb_bg" class="{{pagetype}} trend-box{{data.trend}}">\n  <div id="bdext_minibar" >\n    <div class="bdext-toptabs">\n      <div class="bdext-mini-logo">\n        <a >\n          <em class="bdext-bg"></em>\n        </a>\n        \n      </div>\n      <div class="bdext-mini-trend">\n        <em class="bdext-bg trend-icon{{data.trend}}"></em>\n        <span >{{data.trendMsg}}</span>\n      </div>\n    </div>\n  </div>\n  <div class="houset-detail">\n    <div class="house-trend-img">\n      <img src="" data-src="{{server}}{{data.trendImg}}&width=460&height=210&plotFontSize=10">\n    </div>\n    <div class="house-price-qrcode">\n      <span class="mgtop">每日成交行情</span>\n      <span class="red-pri">房源历史报价</span>\n      <img src="{{s_server}}/images/extensions/newbar/housepri-qrcode.jpg">\n      <p>扫码关注撸房价</p>\n    </div>\n    <div class="price-range">\n      {{if data.maxPrice == data.minPrice}}\n        <span >现价：{{data.maxPrice}}万</span>\n      {{else}}\n        <span class="toppri">最高价：{{data.maxPrice}}万</span>\n        <span class="lowpri">最低价：{{data.minPrice}}万</span>\n      {{/if}}\n    </div>\n  </div>\n</div>'
}, function (t, e) {
    t.exports = '<style type="text/css">\n  .house_centanet2 .house-item {\n    position: relative;\n    overflow: visible;\n  }\n  .house_5i5j #bdext_mb_bg.dppage, .house_centanet2 #bdext_mb_bg.dppage {\n    position: relative;\n  }\n  #bdext_mb_bg.dppage {\n    height: 40px;\n  }\n  .house-trend-bg {\n      background: url("{{s_server}}/images/extensions/xbt/house-trend-icon2.png") no-repeat;\n    }\n    .house-trend-box {\n      position: absolute;\n      right: 0px;\n      bottom: 56px;\n      width: 282px;\n      height: 32px;\n      border: 1px solid #eee;\n      border-radius: 5px;\n      background: #fff;\n      display: block!important;\n      box-sizing: content-box;\n      font-family: "Microsoft Yahei","微软雅黑"\n    }\n    #bdext_mb_bg #bdext_minibar {\n      position: absolute;\n      right: 0px;\n      bottom: 56px;\n      display: block;\n    }\n    .house_centanet2 #bdext_mb_bg #bdext_minibar {\n      right: 6px;\n      bottom: 29px;\n    }\n    .house_centanet2 #bdext_mb_bg.dppage #bdext_minibar {\n      right: -32px;\n    }\n    .house_centanet #bdext_mb_bg.dppage #bdext_minibar {\n      right: -18px;\n    }\n    .house_5i5j #bdext_mb_bg #bdext_minibar {\n      bottom: 30px;\n    }\n    .house_centanet #bdext_mb_bg #bdext_minibar {\n      bottom: 20px;\n    }\n    #bdext_mb_bg.dppage #bdext_minibar {\n      bottom: -8px;\n      position: relative;\n      display: block;\n    }\n    .house-trend-box * {\n      box-sizing: content-box;\n    }\n    .house-trend-box.trend-box-1 .ht-trend-desc {\n      background-color: #f0f0f0;\n    }\n    .house_lianjia2 .house-trend-box {\n      bottom: 32px;\n    }\n    .house_centanet .house-trend-box {\n      right: 40px;\n      bottom: 22px;\n    }\n    .house_centanet2 .house-trend-box {\n      right: 52px;\n      bottom: 32px;\n    }\n    .house_centanet .house-trend-box.dppage {\n      right: -16px;\n      bottom: 0px;\n    }\n    .house_centanet2 .house-trend-box.dppage {\n      right: -38px;\n      bottom: -15px;\n    }\n    .{{extBrand}}_5i5j .house-trend-box {\n      bottom: 30px;\n    }\n    .house-trend-box.dppage {\n      position: relative;\n      bottom: 0px;\n    }\n    .house_lianjia2 .house-trend-box.dppage {\n      bottom: 1px;\n    }\n    .houset-btn {\n      width: 100%;\n      height: 100%;\n    }\n    .houset-btn:after {\n      content: "";\n      display: block;\n      clear: both;\n    }\n    .houset-detail {\n      position: absolute;\n      top: 32px;\n      right: 0px;\n      height: 240px;\n      width: 580px;\n      z-index: 999999999;\n      border: 1px solid #eee;\n      background-color: #fff;\n      box-sizing: content-box;\n      box-shadow: 0px 5px 15px 0 rgba(23,25,27,0.15);\n      display: none;\n    }\n    #bdext_mb_bg .houset-detail {\n      top: 188px;\n      right: 0px;\n    }\n    .house_centanet2 #bdext_mb_bg .houset-detail {\n      top: 196px;\n      right: 5px;\n    }\n    .house_5i5j #bdext_mb_bg .houset-detail {\n      top: 133px;\n    }\n    .house_centanet #bdext_mb_bg .houset-detail {\n      top: 230px;\n    }\n    #bdext_mb_bg.dppage .houset-detail {\n      top: 97px;\n      right: 149px;\n    }\n    .house_centanet2 #bdext_mb_bg.dppage .houset-detail {\n      top: 48px;\n      right: 235px;\n    }\n    .house_centanet #bdext_mb_bg.dppage .houset-detail {\n      top: 152px;\n      right: 51px;\n    }\n    .house_5i5j #bdext_mb_bg.dppage .houset-detail {\n      top: 46px;\n      right: 78px;\n    }\n    .house-trend-img {\n      float: left;\n      width: 462px;\n      height: 210px;\n      margin-top: 30px;\n    }\n    .houset-btn a {\n      float: left;\n      width: 32px;\n      height: 32px;\n      border-right: 1px solid #e6e6e6;\n      background-position: -6px -48px;\n    }\n    .ht-trend-desc {\n      float: left;\n      height: 32px;\n      width: 124px;\n      cursor: pointer;\n    }\n    .ht-price-remind {\n      float: left;\n      width: 124px;\n      height: 32px;\n      border-left: 1px solid #e6e6e6;\n      cursor: pointer;\n    }\n    .ht-price-remind:hover {\n      background-color: #f1f5f6;\n    }\n    .ht-price-remind span {\n      color: #f7705b;\n      font-size: 14px;\n      float: right;\n      height: 32px;\n      width: auto;\n      line-height: 32px;\n      margin-right: 6px;\n    }\n    .ht-price-remind em {\n      background-position: -30px -22px;\n      height: 16px;\n      width: 16px;\n      float: right;\n      margin-right: 22px;\n      margin-top: 8px;\n    }\n    .ht-price-remind.hasremind span {\n      color: #333;\n    }\n    .ht-price-remind.hasremind em {\n      background-position: -57px -22px;\n      margin-right: 16px;\n    }\n    .bdext-mini-trend.mshover{\n      border: 1px solid #425766;\n      z-index: 2;\n    }\n    .ht-trend-desc.mshover {\n      background-color: #f1f5f6;\n    }\n    .ht-trend-desc span {\n      line-height: 32px;\n      font-size: 14px;\n      float: left;\n      cursor: pointer;\n      margin-left: 22px;\n    }\n    .ht-trend-desc span.h-color0 {\n      color: #f7a82b;\n    }\n    .ht-trend-desc span.h-color1 {\n      color: #ff1e1e;\n    }\n    .ht-trend-desc span.h-color2, .ht-trend-desc span.h-color3 {\n      color: #0baa74;\n    }\n    .ht-trend-desc span.h-color3 {\n      margin-left: 10px;\n    }\n    .ht-trend-desc span.h-color-1 {\n      color: #888;\n    }\n    .ht-trend-desc em {\n      float: left;\n      height: 20px;\n      width: 26px;\n      margin-top: 6px;\n      margin-left: 8px;\n    }\n    .ht-trend-desc .trend-icon0 {\n        background-position: -32px -2px;\n    }\n    .ht-trend-desc .trend-icon1 {\n        background-position: -66px -2px;\n    }\n    .ht-trend-desc .trend-icon2 {\n        background-position: -5px -2px;\n    }\n    .ht-trend-desc .trend-icon3 {\n        background-position: -4px -20px;\n    }\n    .ht-trend-desc .trend-icon-1 {\n      display: none;\n    }\n    #bdext_mb_bg .trend-icon2, #bdext_mb_bg .trend-icon3 {\n      background-position: 0px -109px;\n    }\n    #bdext_mb_bg .trend-icon0 {\n      background-position: 0px -84px;\n    }\n    #bdext_mb_bg .trend-icon1 {\n      background-position: 0px -57px;\n    }\n    #bdext_mb_bg .trend-icon-1 {\n      display: none;\n    }\n    .price-range {\n      position: absolute;\n      top: 10px;\n      right: 140px;\n      width: auto;\n      text-align: right;\n    }\n    .price-range span {\n      line-height: 20px;\n      font-size: 14px;\n      color: #505050;\n    }\n    .price-range .toppri {\n      color: #e64340;\n    }\n    .price-range .lowpri {\n      color: #0baa74;\n      margin-left: 14px;\n    }\n    .house-price-qrcode {\n      float: right;\n      height: 100%;\n      width: 117px;\n      text-align: center;\n      border-left: 1px solid #f0f0f0;\n    }\n    .house-price-qrcode span {\n      font-size: 14px;\n      float: left;\n      width: 100%;\n      height: 25px;\n      line-height: 20px!important;\n      text-align: center;\n      color: #353535;\n    }\n    .house-price-qrcode .mgtop {\n      margin-top: 14px;\n    }\n    .house-price-qrcode .red-pri {\n      margin-top: 3px;\n    }\n    .house-price-qrcode img {\n      display: inline-block!important;\n      width: 100px!important;\n      height: auto!important;\n    }\n    .house-price-qrcode p {\n      font-size: 12px;\n      line-height: 20px;\n      margin-top: 2px;\n    }\n    #exchangeList .list-body>li {\n      overflow: visible;\n      height: 166px;\n    }\n    .house-basic-main {\n      overflow: visible;\n      height: 378px;\n    }\n    .{{extBrand}}_lianjia .content  {\n      padding-bottom: 70px;\n    }\n    .house_lianjia2 .m-list li {\n      height: 214px;\n      overflow: visible;\n      position: relative;\n    }\n    .ht-wxqrcode {\n      position: absolute;\n      top: 32px;\n      right: 0px;\n      width: 124px;\n      height: 176px;\n      border: 1px solid #dadee1;\n      background-color: #fff;\n      z-index: 999999999999;\n      box-shadow: 0px 5px 15px 0 rgba(23,25,27,0.15);\n      display: none;\n    }\n    .ht-wxqrcode * {\n      float: left;\n    }\n    .ht-wxqrcode span {\n      width: 100%;\n      height: 14px;\n      line-height: 14px;\n      font-size: 14px;\n      text-align: center;\n    }\n    .ht-wxqrcode img {\n      width: 100px!important;\n      height: 100px!important;\n      margin-top: 4px;\n      margin-left: 11px;\n    }\n    .ht-wx-sp1 {\n      margin-top: 10px;\n      color: #585858;\n    }\n    .ht-wx-sp2 {\n      margin-top: 8px;\n      color: #eb6862;\n    }\n    .ht-wx-sp3 {\n      color: #b2b2b2;\n      text-decoration: underline!important;\n      font-size: 12px!important;\n      cursor: pointer;\n    }\n</style>'
}]);