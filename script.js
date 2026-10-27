(() => {
  const projects = {
    campaigns: {
      number: "01",
      title: "视觉单图",
      en: "Visual Campaigns",
      summary: "从单帧建立品牌的第一印象。",
      heading: ["光影勾勒轮廓","色彩构筑氛围"],
      description: "以光影、色彩与构图组织画面，捕捉服装的轮廓、面料的质感与人物的姿态。从细节到整体氛围，为品牌呈现具有辨识度的时装视觉。",
      note: "概念示意 / 待替换作品。三幅图片均用于呈现视觉方向，不代表真实商业项目或客户。",
      tags: ["Campaign Key Visual", "Banner System", "Fashion Portrait"],
      images: [
        {
          src: "assets/stock/campaign-wide.jpg",
          alt: "冬装造型女性肖像，围巾与针织层次，暖色时装广告示意",
          label: "Campaign wide / 4:3",
          width: 1280,
          height: 960,
          lead: true
        },
        {
          src: "assets/stock/campaign-tall.jpg",
          alt: "橄榄绿大衣与帽饰造型的女性肖像，概念时装大片",
          label: "Portrait study / 4:5",
          width: 1200,
          height: 1500
        },
        {
          src: "assets/stock/campaign-shadow.jpg",
          alt: "柔和自然光下的女性时装肖像，简洁造型与阴影",
          label: "Light study / 2:3",
          width: 853,
          height: 1280
        }
      ]
    },
    series: {
      number: "02",
      title: "系列套图",
      en: "Fashion Series",
      summary: "把同一季的服装放进连续画面，保持人物、造型与场景语气的一致。",
      heading: ["延续统一风格","展开系列叙事"],
      description: "围绕同一主题统筹人物、造型与场景，让多张画面保持连贯的视觉语言。以不同景别与细节变化，呈现完整系列，适用于新品发布、品牌画册与社媒专题。",
      note: "概念示意 / 待替换作品。画面中的人物与造型并非同一真实系列，仅用于说明系列一致性方向。",
      tags: ["Series Consistency", "Wardrobe Range", "Scene Direction"],
      images: [
        {
          src: "assets/stock/series-tailoring.jpg",
          alt: "极简造型女性与时装肖像，系列概念第一幅",
          label: "Series 01 / Minimal",
          width: 907,
          height: 1280
        },
        {
          src: "assets/stock/series-knit.jpg",
          alt: "城市街头的当代感时装造型，系列概念第二幅",
          label: "Series 02 / Street",
          width: 853,
          height: 1280
        },
        {
          src: "assets/stock/series-dress.jpg",
          alt: "棕色连衣裙女性在建筑场景中的时装肖像，系列概念第三幅",
          label: "Series 03 / Dress",
          width: 1000,
          height: 1500
        }
      ]
    },
    styling: {
      number: "03",
      title: "AI 换衣",
      en: "Virtual Styling",
      summary: "从原始造型、目标单品到换装结果，用三段对照说明版型、色彩与整体气质的变化。",
      heading: ["延展现有影像","焕新服装表达"],
      description: "针对上新拍摄成本高、模特档期受限、搭配素材不足等需求，利用已有的人物影像与服装素材，延展不同单品、配色及造型的上身展示，减少重复拍摄，为商品上新与内容推广提供视觉支持。",
      note: "概念示意 / 待替换作品。对照图为流程概念，并非同一人物的真实换装结果。",
      tags: ["Virtual Styling", "Silhouette Study", "Look Comparison"],
      images: [
        {
          src: "assets/stock/styling-original.jpg",
          alt: "中性背景前的女性日常造型，换装概念原图",
          label: "Original / 原图",
          width: 900,
          height: 1350
        },
        {
          src: "assets/stock/styling-garment.jpg",
          alt: "衣架上的米色西装外套与手袋，目标单品概念",
          label: "Garment / 目标单品",
          width: 900,
          height: 1348
        },
        {
          src: "assets/stock/styling-result.jpg",
          alt: "白色西装造型女性坐姿肖像，换装结果概念",
          label: "Result / 结果",
          width: 900,
          height: 1350
        }
      ]
    },
    motion: {
      number: "04",
      title: "动态影像",
      en: "Motion",
      summary: "动态方向关注面料的流动、转身的节奏与光线的变化，让服装从静帧进入时间。",
      heading: ["捕捉面料流动","赋予画面节奏"],
      description: "以面料的起伏、人物的姿态与光线的变化，延展静态画面的表现力。通过节奏与镜头衔接呈现服装细节，为品牌短片、新品预告与社媒内容建立动态表达。",
      note: "视频封面示意 / 无真实影片。当前展示为非播放器静态海报，待真实动态作品替换。",
      tags: ["Motion Study", "Fabric Movement", "Video Cover"],
      images: [
        {
          src: "assets/stock/motion-fabric.jpg",
          alt: "深色背景中手持流动面料的女性，动态影像封面概念",
          label: "Cover still / 16:10",
          width: 1600,
          height: 1067,
          lead: true
        },
        {
          src: "assets/stock/motion-dress.jpg",
          alt: "黑白时装摄影中跃动的人物与裙摆，动态影像概念",
          label: "Movement study / 3:4",
          width: 1200,
          height: 1600
        }
      ]
    },
    homepage: {
      number: "05",
      title: "平面主页设计",
      en: "Homepage Art Direction",
      summary: "以平面长图组织品牌首页的视觉节奏：首屏、产品陈列与材质叙事形成连续的阅读路径。",
      heading: ["编排品牌视觉","构建页面秩序"],
      description: "围绕品牌气质与产品重点，统筹图片、字体与留白，梳理从首屏到细节的阅读节奏。以平面长图呈现完整的首页视觉方案，为后续页面制作提供设计参考。",
      note: "概念示意 / 待替换作品。平面长图与图片素材均为版式概念，非实际交付网站。",
      tags: ["Homepage Art Direction", "Long-form Layout", "Flat Visual"],
      images: [
        {
          src: "assets/stock/home-boutique.jpg",
          alt: "暖色调时装店铺陈列空间，主页设计概念素材",
          label: "Art direction / Space",
          width: 1200,
          height: 800,
          lead: true
        },
        {
          src: "assets/stock/home-rack.jpg",
          alt: "白色背景中的中性色服装衣架陈列",
          label: "Wardrobe / Still life",
          width: 900,
          height: 1350
        },
        {
          src: "assets/stock/home-detail.jpg",
          alt: "暖色针织面料近景，材质细节概念",
          label: "Material / Detail",
          width: 1200,
          height: 800
        }
      ]
    }
  };



const campaignWorks = [{"src":"assets/campaigns/batch-1/image-001.jpg","width":6336,"height":2688,"alt":"视觉单图作品 01","label":"视觉单图 01"},{"src":"assets/campaigns/batch-1/image-002.jpg","width":3392,"height":5056,"alt":"视觉单图作品 02","label":"视觉单图 02"},{"src":"assets/campaigns/batch-1/image-003.jpg","width":3392,"height":5056,"alt":"视觉单图作品 03","label":"视觉单图 03"},{"src":"assets/campaigns/batch-1/image-004.jpg","width":3392,"height":5056,"alt":"视觉单图作品 04","label":"视觉单图 04"},{"src":"assets/campaigns/batch-1/image-005.jpg","width":6336,"height":2688,"alt":"视觉单图作品 05","label":"视觉单图 05"},{"src":"assets/campaigns/batch-1/image-006.jpg","width":3392,"height":5056,"alt":"视觉单图作品 06","label":"视觉单图 06"},{"src":"assets/campaigns/batch-1/image-007.jpg","width":3392,"height":5056,"alt":"视觉单图作品 07","label":"视觉单图 07"},{"src":"assets/campaigns/batch-1/image-008.jpg","width":6336,"height":2688,"alt":"视觉单图作品 08","label":"视觉单图 08"},{"src":"assets/campaigns/batch-1/image-009.jpg","width":6336,"height":2688,"alt":"视觉单图作品 09","label":"视觉单图 09"},{"src":"assets/campaigns/batch-1/image-010.jpg","width":3392,"height":5056,"alt":"视觉单图作品 10","label":"视觉单图 10"},{"src":"assets/campaigns/batch-1/image-011.jpg","width":6336,"height":2688,"alt":"视觉单图作品 11","label":"视觉单图 11"},{"src":"assets/campaigns/batch-1/image-012.jpg","width":6336,"height":2688,"alt":"视觉单图作品 12","label":"视觉单图 12"},{"src":"assets/campaigns/batch-1/image-013.jpg","width":6336,"height":2688,"alt":"视觉单图作品 13","label":"视觉单图 13"},{"src":"assets/campaigns/batch-1/image-014.jpg","width":6336,"height":2688,"alt":"视觉单图作品 14","label":"视觉单图 14"},{"src":"assets/campaigns/batch-1/image-015.jpg","width":6336,"height":2688,"alt":"视觉单图作品 15","label":"视觉单图 15"},{"src":"assets/campaigns/batch-1/image-016.jpg","width":3136,"height":1344,"alt":"视觉单图作品 16","label":"视觉单图 16"},{"src":"assets/campaigns/batch-1/image-017.jpg","width":3168,"height":1344,"alt":"视觉单图作品 17","label":"视觉单图 17"},{"src":"assets/campaigns/batch-1/image-018.jpg","width":3392,"height":5056,"alt":"视觉单图作品 18","label":"视觉单图 18"},{"src":"assets/campaigns/batch-1/image-019.jpg","width":1584,"height":672,"alt":"视觉单图作品 19","label":"视觉单图 19"},{"src":"assets/campaigns/batch-1/image-020.jpg","width":3168,"height":1344,"alt":"视觉单图作品 20","label":"视觉单图 20"},{"src":"assets/campaigns/batch-1/image-021.jpg","width":1792,"height":2400,"alt":"视觉单图作品 21","label":"视觉单图 21"},{"src":"assets/campaigns/batch-1/image-022.jpg","width":3168,"height":1344,"alt":"视觉单图作品 22","label":"视觉单图 22"},{"src":"assets/campaigns/batch-1/image-023.jpg","width":3168,"height":1344,"alt":"视觉单图作品 23","label":"视觉单图 23"},{"src":"assets/campaigns/batch-1/image-024.jpg","width":1792,"height":2400,"alt":"视觉单图作品 24","label":"视觉单图 24"},{"src":"assets/campaigns/batch-1/image-025.jpg","width":1792,"height":2400,"alt":"视觉单图作品 25","label":"视觉单图 25"},{"src":"assets/campaigns/batch-1/image-026.jpg","width":3168,"height":1344,"alt":"视觉单图作品 26","label":"视觉单图 26"},{"src":"assets/campaigns/batch-1/image-027.jpg","width":1792,"height":2400,"alt":"视觉单图作品 27","label":"视觉单图 27"},{"src":"assets/campaigns/batch-1/image-028.jpg","width":3168,"height":1344,"alt":"视觉单图作品 28","label":"视觉单图 28"},{"src":"assets/campaigns/batch-1/image-029.jpg","width":1792,"height":2400,"alt":"视觉单图作品 29","label":"视觉单图 29"},{"src":"assets/campaigns/batch-1/image-030.jpg","width":1792,"height":2400,"alt":"视觉单图作品 30","label":"视觉单图 30"},{"src":"assets/campaigns/batch-1/image-031.jpg","width":3168,"height":1344,"alt":"视觉单图作品 31","label":"视觉单图 31"},{"src":"assets/campaigns/batch-1/image-032.jpg","width":3168,"height":1344,"alt":"视觉单图作品 32","label":"视觉单图 32"},{"src":"assets/campaigns/batch-1/image-033.jpg","width":1792,"height":2400,"alt":"视觉单图作品 33","label":"视觉单图 33"},{"src":"assets/campaigns/batch-1/image-034.jpg","width":1792,"height":2400,"alt":"视觉单图作品 34","label":"视觉单图 34"},{"src":"assets/campaigns/batch-1/image-035.jpg","width":3168,"height":1344,"alt":"视觉单图作品 35","label":"视觉单图 35"},{"src":"assets/campaigns/batch-1/image-036.jpg","width":1792,"height":2400,"alt":"视觉单图作品 36","label":"视觉单图 36"},{"src":"assets/campaigns/batch-1/image-037.jpg","width":1792,"height":2400,"alt":"视觉单图作品 37","label":"视觉单图 37"},{"src":"assets/campaigns/batch-1/image-038.jpg","width":1792,"height":2400,"alt":"视觉单图作品 38","label":"视觉单图 38"},{"src":"assets/campaigns/batch-1/image-039.jpg","width":3168,"height":1344,"alt":"视觉单图作品 39","label":"视觉单图 39"},{"src":"assets/campaigns/batch-1/image-040.jpg","width":3136,"height":1344,"alt":"视觉单图作品 40","label":"视觉单图 40"},{"src":"assets/campaigns/batch-1/image-041.jpg","width":3136,"height":1344,"alt":"视觉单图作品 41","label":"视觉单图 41"},{"src":"assets/campaigns/batch-1/image-042.jpg","width":3136,"height":1344,"alt":"视觉单图作品 42","label":"视觉单图 42"},{"src":"assets/campaigns/batch-1/image-043.jpg","width":1728,"height":2304,"alt":"视觉单图作品 43","label":"视觉单图 43"},{"src":"assets/campaigns/batch-1/image-044.jpg","width":3392,"height":5056,"alt":"视觉单图作品 44","label":"视觉单图 44"},{"src":"assets/campaigns/batch-1/image-045.jpg","width":3392,"height":5056,"alt":"视觉单图作品 45","label":"视觉单图 45"},{"src":"assets/campaigns/batch-1/image-046.jpg","width":6336,"height":2688,"alt":"视觉单图作品 46","label":"视觉单图 46"},{"src":"assets/campaigns/batch-1/image-047.jpg","width":3392,"height":5056,"alt":"视觉单图作品 47","label":"视觉单图 47"},{"src":"assets/campaigns/batch-1/image-048.jpg","width":3392,"height":5056,"alt":"视觉单图作品 48","label":"视觉单图 48"},{"src":"assets/campaigns/batch-1/image-049.jpg","width":3392,"height":5056,"alt":"视觉单图作品 49","label":"视觉单图 49"},{"src":"assets/campaigns/batch-1/image-050.jpg","width":3392,"height":5056,"alt":"视觉单图作品 50","label":"视觉单图 50"},{"src":"assets/campaigns/batch-1/image-051.jpg","width":6336,"height":2688,"alt":"视觉单图作品 51","label":"视觉单图 51"},{"src":"assets/campaigns/batch-1/image-052.jpg","width":3392,"height":5056,"alt":"视觉单图作品 52","label":"视觉单图 52"},{"src":"assets/campaigns/batch-1/image-053.jpg","width":3392,"height":5056,"alt":"视觉单图作品 53","label":"视觉单图 53"},{"src":"assets/campaigns/batch-1/image-054.jpg","width":3392,"height":5056,"alt":"视觉单图作品 54","label":"视觉单图 54"},{"src":"assets/campaigns/batch-1/image-055.jpg","width":6336,"height":2688,"alt":"视觉单图作品 55","label":"视觉单图 55"},{"src":"assets/campaigns/batch-1/image-056.jpg","width":6336,"height":2688,"alt":"视觉单图作品 56","label":"视觉单图 56"},{"src":"assets/campaigns/batch-1/image-057.jpg","width":6336,"height":2688,"alt":"视觉单图作品 57","label":"视觉单图 57"},{"src":"assets/campaigns/batch-1/image-058.jpg","width":3392,"height":5056,"alt":"视觉单图作品 58","label":"视觉单图 58"},{"src":"assets/campaigns/batch-1/image-059.jpg","width":3392,"height":5056,"alt":"视觉单图作品 59","label":"视觉单图 59"},{"src":"assets/campaigns/batch-1/image-060.jpg","width":6336,"height":2688,"alt":"视觉单图作品 60","label":"视觉单图 60"},{"src":"assets/campaigns/batch-1/image-061.jpg","width":6336,"height":2688,"alt":"视觉单图作品 61","label":"视觉单图 61"},{"src":"assets/campaigns/batch-1/image-062.jpg","width":6336,"height":2688,"alt":"视觉单图作品 62","label":"视觉单图 62"},{"src":"assets/campaigns/batch-1/image-063.jpg","width":6336,"height":2688,"alt":"视觉单图作品 63","label":"视觉单图 63"},{"src":"assets/campaigns/batch-1/image-064.jpg","width":6336,"height":2688,"alt":"视觉单图作品 64","label":"视觉单图 64"},{"src":"assets/campaigns/batch-1/image-065.jpg","width":3392,"height":5056,"alt":"视觉单图作品 65","label":"视觉单图 65"},{"src":"assets/campaigns/batch-1/image-066.jpg","width":6336,"height":2688,"alt":"视觉单图作品 66","label":"视觉单图 66"},{"src":"assets/campaigns/batch-1/image-067.jpg","width":6336,"height":2688,"alt":"视觉单图作品 67","label":"视觉单图 67"},{"src":"assets/campaigns/batch-1/image-068.jpg","width":6336,"height":2688,"alt":"视觉单图作品 68","label":"视觉单图 68"},{"src":"assets/campaigns/batch-1/image-069.jpg","width":6336,"height":2688,"alt":"视觉单图作品 69","label":"视觉单图 69"},{"src":"assets/campaigns/batch-1/image-070.jpg","width":3392,"height":5056,"alt":"视觉单图作品 70","label":"视觉单图 70"},{"src":"assets/campaigns/batch-1/image-071.jpg","width":3392,"height":5056,"alt":"视觉单图作品 71","label":"视觉单图 71"},{"src":"assets/campaigns/batch-1/image-072.jpg","width":6336,"height":2688,"alt":"视觉单图作品 72","label":"视觉单图 72"}];
projects.campaigns.images = campaignWorks.slice(0, 3);
projects.campaigns.note = "精选视觉单图作品。";

const homepageWorks = [{"src":"assets/homepage/batch-1/image-001.jpg","width":4096,"height":9102,"alt":"平面主页设计作品 01","label":"主页设计 01"},{"src":"assets/homepage/batch-1/image-002.jpg","width":2730,"height":4096,"alt":"平面主页设计作品 02","label":"主页设计 02"},{"src":"assets/homepage/batch-1/image-003.jpg","width":720,"height":1267,"alt":"平面主页设计作品 03","label":"主页设计 03"},{"src":"assets/homepage/batch-1/image-004.jpg","width":4096,"height":6748,"alt":"平面主页设计作品 04","label":"主页设计 04"},{"src":"assets/homepage/batch-1/image-005.jpg","width":720,"height":1280,"alt":"平面主页设计作品 05","label":"主页设计 05"},{"src":"assets/homepage/batch-1/image-006.jpg","width":720,"height":1280,"alt":"平面主页设计作品 06","label":"主页设计 06"},{"src":"assets/homepage/batch-1/image-007.jpg","width":2352,"height":3520,"alt":"平面主页设计作品 07","label":"主页设计 07"},{"src":"assets/homepage/batch-1/image-008.jpg","width":4096,"height":6748,"alt":"平面主页设计作品 08","label":"主页设计 08"},{"src":"assets/homepage/batch-1/image-009.jpg","width":2040,"height":6144,"alt":"平面主页设计作品 09","label":"主页设计 09"},{"src":"assets/homepage/batch-1/image-010.jpg","width":720,"height":1280,"alt":"平面主页设计作品 10","label":"主页设计 10"},{"src":"assets/homepage/batch-1/image-011.jpg","width":4096,"height":6748,"alt":"平面主页设计作品 11","label":"主页设计 11"},{"src":"assets/homepage/batch-1/image-012.jpg","width":4096,"height":7372,"alt":"平面主页设计作品 12","label":"主页设计 12"},{"src":"assets/homepage/batch-1/image-013.jpg","width":4096,"height":7168,"alt":"平面主页设计作品 13","label":"主页设计 13"}];
projects.homepage.images = homepageWorks.slice(0,3);
projects.homepage.note = "平面主页设计作品。";
const seriesSets = [{"project":"滑雪-登山","folder":"滑雪-登山\\1\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-01/image-01.jpg","width":1792,"height":2400,"alt":"滑雪-登山 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-01/image-02.jpg","width":1871,"height":2400,"alt":"滑雪-登山 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-01/image-03.jpg","width":1800,"height":2400,"alt":"滑雪-登山 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-01/image-04.jpg","width":1792,"height":2400,"alt":"滑雪-登山 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-01/image-05.jpg","width":1799,"height":2400,"alt":"滑雪-登山 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-01/image-06.jpg","width":1800,"height":2400,"alt":"滑雪-登山 系列套图 06","label":"系列图 06"}]},{"project":"滑雪-登山","folder":"滑雪-登山\\2\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-02/image-01.jpg","width":1800,"height":2400,"alt":"滑雪-登山 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-02/image-02.jpg","width":1792,"height":2400,"alt":"滑雪-登山 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-02/image-03.jpg","width":1800,"height":2400,"alt":"滑雪-登山 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-02/image-04.jpg","width":1800,"height":2400,"alt":"滑雪-登山 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-02/image-05.jpg","width":1771,"height":2400,"alt":"滑雪-登山 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-02/image-06.jpg","width":1792,"height":2400,"alt":"滑雪-登山 系列套图 06","label":"系列图 06"}]},{"project":"男装-1","folder":"男装-1\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-03/image-01.jpg","width":1792,"height":2400,"alt":"男装-1 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-03/image-02.jpg","width":1792,"height":2400,"alt":"男装-1 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-03/image-03.jpg","width":1792,"height":2400,"alt":"男装-1 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-03/image-04.jpg","width":1792,"height":2400,"alt":"男装-1 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-03/image-05.jpg","width":1792,"height":2400,"alt":"男装-1 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-03/image-06.jpg","width":1792,"height":2400,"alt":"男装-1 系列套图 06","label":"系列图 06"}]},{"project":"男装-2","folder":"男装-2\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-04/image-01.jpg","width":1782,"height":2400,"alt":"男装-2 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-04/image-02.jpg","width":1800,"height":2400,"alt":"男装-2 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-04/image-03.jpg","width":1800,"height":2400,"alt":"男装-2 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-04/image-04.jpg","width":1799,"height":2400,"alt":"男装-2 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-04/image-05.jpg","width":1799,"height":2400,"alt":"男装-2 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-04/image-06.jpg","width":1784,"height":2400,"alt":"男装-2 系列套图 06","label":"系列图 06"}]},{"project":"男装","folder":"男装\\1\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-05/image-01.jpg","width":1792,"height":2400,"alt":"男装 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-05/image-02.jpg","width":1792,"height":2400,"alt":"男装 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-05/image-03.jpg","width":1800,"height":2400,"alt":"男装 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-05/image-04.jpg","width":1792,"height":2400,"alt":"男装 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-05/image-05.jpg","width":1792,"height":2400,"alt":"男装 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-05/image-06.jpg","width":1792,"height":2400,"alt":"男装 系列套图 06","label":"系列图 06"}]},{"project":"男装","folder":"男装\\2\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-06/image-01.jpg","width":1792,"height":2400,"alt":"男装 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-06/image-02.jpg","width":1800,"height":2400,"alt":"男装 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-06/image-03.jpg","width":1792,"height":2400,"alt":"男装 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-06/image-04.jpg","width":1792,"height":2400,"alt":"男装 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-06/image-05.jpg","width":1792,"height":2400,"alt":"男装 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-06/image-06.jpg","width":1792,"height":2400,"alt":"男装 系列套图 06","label":"系列图 06"}]},{"project":"人台","folder":"人台\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-07/image-01.jpg","width":1792,"height":2400,"alt":"人台 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-07/image-02.jpg","width":1792,"height":2400,"alt":"人台 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-07/image-03.jpg","width":1792,"height":2400,"alt":"人台 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-07/image-04.jpg","width":1792,"height":2400,"alt":"人台 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-07/image-05.jpg","width":1792,"height":2400,"alt":"人台 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-07/image-06.jpg","width":1792,"height":2400,"alt":"人台 系列套图 06","label":"系列图 06"},{"src":"assets/series/import-1/set-07/image-07.jpg","width":1792,"height":2400,"alt":"人台 系列套图 07","label":"系列图 07"},{"src":"assets/series/import-1/set-07/image-08.jpg","width":1792,"height":2400,"alt":"人台 系列套图 08","label":"系列图 08"}]},{"project":"运动大码四件","folder":"运动大码四件\\1\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-08/image-01.jpg","width":1800,"height":2400,"alt":"运动大码四件 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-08/image-02.jpg","width":1800,"height":2400,"alt":"运动大码四件 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-08/image-03.jpg","width":1792,"height":2400,"alt":"运动大码四件 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-08/image-04.jpg","width":1792,"height":2400,"alt":"运动大码四件 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-08/image-05.jpg","width":1792,"height":2400,"alt":"运动大码四件 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-08/image-06.jpg","width":1792,"height":2400,"alt":"运动大码四件 系列套图 06","label":"系列图 06"},{"src":"assets/series/import-1/set-08/image-07.jpg","width":1800,"height":2400,"alt":"运动大码四件 系列套图 07","label":"系列图 07"}]},{"project":"运动大码四件","folder":"运动大码四件\\2\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-09/image-01.jpg","width":1800,"height":2400,"alt":"运动大码四件 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-09/image-02.jpg","width":1792,"height":2400,"alt":"运动大码四件 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-09/image-03.jpg","width":1792,"height":2400,"alt":"运动大码四件 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-09/image-04.jpg","width":1792,"height":2400,"alt":"运动大码四件 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-09/image-05.jpg","width":1792,"height":2400,"alt":"运动大码四件 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-09/image-06.jpg","width":1792,"height":2400,"alt":"运动大码四件 系列套图 06","label":"系列图 06"}]},{"project":"Colvenic","folder":"Colvenic\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-10/image-01.jpg","width":1792,"height":2400,"alt":"Colvenic 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-10/image-02.jpg","width":1792,"height":2400,"alt":"Colvenic 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-10/image-03.jpg","width":1792,"height":2400,"alt":"Colvenic 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-10/image-04.jpg","width":1792,"height":2400,"alt":"Colvenic 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-10/image-05.jpg","width":1792,"height":2400,"alt":"Colvenic 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-10/image-06.jpg","width":1792,"height":2400,"alt":"Colvenic 系列套图 06","label":"系列图 06"},{"src":"assets/series/import-1/set-10/image-07.jpg","width":1792,"height":2400,"alt":"Colvenic 系列套图 07","label":"系列图 07"}]},{"project":"Denimwave","folder":"Denimwave\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-11/image-01.jpg","width":1792,"height":2400,"alt":"Denimwave 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-11/image-02.jpg","width":1792,"height":2400,"alt":"Denimwave 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-11/image-03.jpg","width":1792,"height":2400,"alt":"Denimwave 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-11/image-04.jpg","width":1792,"height":2400,"alt":"Denimwave 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-11/image-05.jpg","width":1792,"height":2400,"alt":"Denimwave 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-11/image-06.jpg","width":1792,"height":2400,"alt":"Denimwave 系列套图 06","label":"系列图 06"}]},{"project":"IRON GLYPH","folder":"IRON GLYPH\\1\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-12/image-01.jpg","width":1792,"height":2400,"alt":"IRON GLYPH 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-12/image-02.jpg","width":1792,"height":2400,"alt":"IRON GLYPH 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-12/image-03.jpg","width":1792,"height":2400,"alt":"IRON GLYPH 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-12/image-04.jpg","width":1792,"height":2400,"alt":"IRON GLYPH 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-12/image-05.jpg","width":1792,"height":2400,"alt":"IRON GLYPH 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-12/image-06.jpg","width":1792,"height":2400,"alt":"IRON GLYPH 系列套图 06","label":"系列图 06"},{"src":"assets/series/import-1/set-12/image-07.jpg","width":1792,"height":2400,"alt":"IRON GLYPH 系列套图 07","label":"系列图 07"}]},{"project":"IRON GLYPH","folder":"IRON GLYPH\\2\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-13/image-01.jpg","width":1792,"height":2400,"alt":"IRON GLYPH 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-13/image-02.jpg","width":1792,"height":2400,"alt":"IRON GLYPH 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-13/image-03.jpg","width":1792,"height":2400,"alt":"IRON GLYPH 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-13/image-04.jpg","width":1792,"height":2400,"alt":"IRON GLYPH 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-13/image-05.jpg","width":1792,"height":2400,"alt":"IRON GLYPH 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-13/image-06.jpg","width":1792,"height":2400,"alt":"IRON GLYPH 系列套图 06","label":"系列图 06"}]},{"project":"lumi","folder":"lumi\\1\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-14/image-01.jpg","width":1800,"height":2400,"alt":"lumi 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-14/image-02.jpg","width":1792,"height":2400,"alt":"lumi 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-14/image-03.jpg","width":1800,"height":2400,"alt":"lumi 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-14/image-04.jpg","width":1792,"height":2400,"alt":"lumi 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-14/image-05.jpg","width":1792,"height":2400,"alt":"lumi 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-14/image-06.jpg","width":1792,"height":2400,"alt":"lumi 系列套图 06","label":"系列图 06"}]},{"project":"lumi","folder":"lumi\\2\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-15/image-01.jpg","width":1792,"height":2400,"alt":"lumi 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-15/image-02.jpg","width":1792,"height":2400,"alt":"lumi 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-15/image-03.jpg","width":1792,"height":2400,"alt":"lumi 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-15/image-04.jpg","width":1792,"height":2400,"alt":"lumi 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-15/image-05.jpg","width":1792,"height":2400,"alt":"lumi 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-15/image-06.jpg","width":1792,"height":2400,"alt":"lumi 系列套图 06","label":"系列图 06"}]},{"project":"Nelvento","folder":"Nelvento\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-16/image-01.jpg","width":1792,"height":2400,"alt":"Nelvento 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-16/image-02.jpg","width":1792,"height":2400,"alt":"Nelvento 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-16/image-03.jpg","width":1792,"height":2400,"alt":"Nelvento 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-16/image-04.jpg","width":1792,"height":2400,"alt":"Nelvento 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-16/image-05.jpg","width":1792,"height":2400,"alt":"Nelvento 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-16/image-06.jpg","width":1792,"height":2400,"alt":"Nelvento 系列套图 06","label":"系列图 06"},{"src":"assets/series/import-1/set-16/image-07.jpg","width":1792,"height":2400,"alt":"Nelvento 系列套图 07","label":"系列图 07"}]},{"project":"Quarkem","folder":"Quarkem\\1\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-17/image-01.jpg","width":1792,"height":2400,"alt":"Quarkem 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-17/image-02.jpg","width":1792,"height":2400,"alt":"Quarkem 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-17/image-03.jpg","width":1792,"height":2400,"alt":"Quarkem 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-17/image-04.jpg","width":1792,"height":2400,"alt":"Quarkem 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-17/image-05.jpg","width":1792,"height":2400,"alt":"Quarkem 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-17/image-06.jpg","width":1792,"height":2400,"alt":"Quarkem 系列套图 06","label":"系列图 06"},{"src":"assets/series/import-1/set-17/image-07.jpg","width":1792,"height":2400,"alt":"Quarkem 系列套图 07","label":"系列图 07"},{"src":"assets/series/import-1/set-17/image-08.jpg","width":1792,"height":2400,"alt":"Quarkem 系列套图 08","label":"系列图 08"}]},{"project":"Quarkem","folder":"Quarkem\\2\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-18/image-01.jpg","width":1792,"height":2400,"alt":"Quarkem 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-18/image-02.jpg","width":1792,"height":2400,"alt":"Quarkem 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-18/image-03.jpg","width":1792,"height":2400,"alt":"Quarkem 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-18/image-04.jpg","width":1792,"height":2400,"alt":"Quarkem 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-18/image-05.jpg","width":1792,"height":2400,"alt":"Quarkem 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-18/image-06.jpg","width":1792,"height":2400,"alt":"Quarkem 系列套图 06","label":"系列图 06"}]},{"project":"RivetRise","folder":"RivetRise\\1\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-19/image-01.jpg","width":1792,"height":2400,"alt":"RivetRise 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-19/image-02.jpg","width":1799,"height":2400,"alt":"RivetRise 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-19/image-03.jpg","width":1792,"height":2400,"alt":"RivetRise 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-19/image-04.jpg","width":1799,"height":2400,"alt":"RivetRise 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-19/image-05.jpg","width":1792,"height":2400,"alt":"RivetRise 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-19/image-06.jpg","width":1792,"height":2400,"alt":"RivetRise 系列套图 06","label":"系列图 06"},{"src":"assets/series/import-1/set-19/image-07.jpg","width":1792,"height":2400,"alt":"RivetRise 系列套图 07","label":"系列图 07"}]},{"project":"RivetRise","folder":"RivetRise\\2\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-20/image-01.jpg","width":1792,"height":2400,"alt":"RivetRise 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-20/image-02.jpg","width":1800,"height":2400,"alt":"RivetRise 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-20/image-03.jpg","width":1792,"height":2400,"alt":"RivetRise 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-20/image-04.jpg","width":1792,"height":2400,"alt":"RivetRise 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-20/image-05.jpg","width":1792,"height":2400,"alt":"RivetRise 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-20/image-06.jpg","width":1792,"height":2400,"alt":"RivetRise 系列套图 06","label":"系列图 06"},{"src":"assets/series/import-1/set-20/image-07.jpg","width":1792,"height":2400,"alt":"RivetRise 系列套图 07","label":"系列图 07"}]},{"project":"RivetRise","folder":"RivetRise\\3\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-21/image-01.jpg","width":1792,"height":2400,"alt":"RivetRise 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-21/image-02.jpg","width":1792,"height":2400,"alt":"RivetRise 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-21/image-03.jpg","width":1792,"height":2400,"alt":"RivetRise 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-21/image-04.jpg","width":1792,"height":2400,"alt":"RivetRise 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-21/image-05.jpg","width":1800,"height":2400,"alt":"RivetRise 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-21/image-06.jpg","width":1792,"height":2400,"alt":"RivetRise 系列套图 06","label":"系列图 06"}]},{"project":"Slateforde","folder":"Slateforde\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-22/image-01.jpg","width":1792,"height":2400,"alt":"Slateforde 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-22/image-02.jpg","width":1792,"height":2400,"alt":"Slateforde 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-22/image-03.jpg","width":1792,"height":2400,"alt":"Slateforde 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-22/image-04.jpg","width":1792,"height":2400,"alt":"Slateforde 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-22/image-05.jpg","width":1792,"height":2400,"alt":"Slateforde 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-22/image-06.jpg","width":1792,"height":2400,"alt":"Slateforde 系列套图 06","label":"系列图 06"},{"src":"assets/series/import-1/set-22/image-07.jpg","width":1792,"height":2400,"alt":"Slateforde 系列套图 07","label":"系列图 07"}]},{"project":"Suri Mira","folder":"Suri Mira\\sz260610192137743204766\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-23/image-01.jpg","width":1792,"height":2400,"alt":"Suri Mira 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-23/image-02.jpg","width":1792,"height":2400,"alt":"Suri Mira 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-23/image-03.jpg","width":1792,"height":2400,"alt":"Suri Mira 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-23/image-04.jpg","width":1792,"height":2400,"alt":"Suri Mira 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-23/image-05.jpg","width":1792,"height":2400,"alt":"Suri Mira 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-23/image-06.jpg","width":1792,"height":2400,"alt":"Suri Mira 系列套图 06","label":"系列图 06"},{"src":"assets/series/import-1/set-23/image-07.jpg","width":1792,"height":2400,"alt":"Suri Mira 系列套图 07","label":"系列图 07"},{"src":"assets/series/import-1/set-23/image-08.jpg","width":1792,"height":2400,"alt":"Suri Mira 系列套图 08","label":"系列图 08"}]},{"project":"Suri Mira","folder":"Suri Mira\\sz260624134897388444693\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-24/image-01.jpg","width":1792,"height":2400,"alt":"Suri Mira 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-24/image-02.jpg","width":1792,"height":2400,"alt":"Suri Mira 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-24/image-03.jpg","width":1792,"height":2400,"alt":"Suri Mira 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-24/image-04.jpg","width":1792,"height":2400,"alt":"Suri Mira 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-24/image-05.jpg","width":1792,"height":2400,"alt":"Suri Mira 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-24/image-06.jpg","width":1792,"height":2400,"alt":"Suri Mira 系列套图 06","label":"系列图 06"}]},{"project":"Suri Mira","folder":"Suri Mira\\sz260706192859523992095\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-25/image-01.jpg","width":1792,"height":2400,"alt":"Suri Mira 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-25/image-02.jpg","width":1792,"height":2400,"alt":"Suri Mira 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-25/image-03.jpg","width":1792,"height":2400,"alt":"Suri Mira 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-25/image-04.jpg","width":1792,"height":2400,"alt":"Suri Mira 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-25/image-05.jpg","width":1792,"height":2400,"alt":"Suri Mira 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-25/image-06.jpg","width":1792,"height":2400,"alt":"Suri Mira 系列套图 06","label":"系列图 06"},{"src":"assets/series/import-1/set-25/image-07.jpg","width":1792,"height":2400,"alt":"Suri Mira 系列套图 07","label":"系列图 07"}]},{"project":"Suri Mira","folder":"Suri Mira\\sz260720135424534680524\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-26/image-01.jpg","width":1792,"height":2400,"alt":"Suri Mira 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-26/image-02.jpg","width":1792,"height":2400,"alt":"Suri Mira 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-26/image-03.jpg","width":1792,"height":2400,"alt":"Suri Mira 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-26/image-04.jpg","width":1792,"height":2400,"alt":"Suri Mira 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-26/image-05.jpg","width":1792,"height":2400,"alt":"Suri Mira 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-26/image-06.jpg","width":1792,"height":2400,"alt":"Suri Mira 系列套图 06","label":"系列图 06"}]},{"project":"VOXRYNE","folder":"VOXRYNE\\1\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-27/image-01.jpg","width":1792,"height":2400,"alt":"VOXRYNE 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-27/image-02.jpg","width":1792,"height":2400,"alt":"VOXRYNE 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-27/image-03.jpg","width":1792,"height":2400,"alt":"VOXRYNE 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-27/image-04.jpg","width":1792,"height":2400,"alt":"VOXRYNE 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-27/image-05.jpg","width":1792,"height":2400,"alt":"VOXRYNE 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-27/image-06.jpg","width":1792,"height":2400,"alt":"VOXRYNE 系列套图 06","label":"系列图 06"},{"src":"assets/series/import-1/set-27/image-07.jpg","width":1792,"height":2400,"alt":"VOXRYNE 系列套图 07","label":"系列图 07"}]},{"project":"VOXRYNE","folder":"VOXRYNE\\2\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-28/image-01.jpg","width":1792,"height":2400,"alt":"VOXRYNE 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-28/image-02.jpg","width":1792,"height":2400,"alt":"VOXRYNE 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-28/image-03.jpg","width":1792,"height":2400,"alt":"VOXRYNE 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-28/image-04.jpg","width":1792,"height":2400,"alt":"VOXRYNE 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-28/image-05.jpg","width":1792,"height":2400,"alt":"VOXRYNE 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-28/image-06.jpg","width":1792,"height":2400,"alt":"VOXRYNE 系列套图 06","label":"系列图 06"},{"src":"assets/series/import-1/set-28/image-07.jpg","width":1792,"height":2400,"alt":"VOXRYNE 系列套图 07","label":"系列图 07"}]},{"project":"Zalmeno","folder":"Zalmeno\\1\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-29/image-01.jpg","width":1792,"height":2400,"alt":"Zalmeno 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-29/image-02.jpg","width":1792,"height":2400,"alt":"Zalmeno 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-29/image-03.jpg","width":1792,"height":2400,"alt":"Zalmeno 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-29/image-04.jpg","width":1792,"height":2400,"alt":"Zalmeno 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-29/image-05.jpg","width":1792,"height":2400,"alt":"Zalmeno 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-29/image-06.jpg","width":1800,"height":2400,"alt":"Zalmeno 系列套图 06","label":"系列图 06"}]},{"project":"Zalmeno","folder":"Zalmeno\\2\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-30/image-01.jpg","width":1792,"height":2400,"alt":"Zalmeno 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-30/image-02.jpg","width":1792,"height":2400,"alt":"Zalmeno 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-30/image-03.jpg","width":1792,"height":2400,"alt":"Zalmeno 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-30/image-04.jpg","width":1792,"height":2400,"alt":"Zalmeno 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-30/image-05.jpg","width":1792,"height":2400,"alt":"Zalmeno 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-30/image-06.jpg","width":1792,"height":2400,"alt":"Zalmeno 系列套图 06","label":"系列图 06"},{"src":"assets/series/import-1/set-30/image-07.jpg","width":1792,"height":2400,"alt":"Zalmeno 系列套图 07","label":"系列图 07"},{"src":"assets/series/import-1/set-30/image-08.jpg","width":1792,"height":2400,"alt":"Zalmeno 系列套图 08","label":"系列图 08"}]},{"project":"Zovinel","folder":"Zovinel\\1\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-31/image-01.jpg","width":1800,"height":2400,"alt":"Zovinel 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-31/image-02.jpg","width":1800,"height":2400,"alt":"Zovinel 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-31/image-03.jpg","width":1800,"height":2400,"alt":"Zovinel 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-31/image-04.jpg","width":1800,"height":2400,"alt":"Zovinel 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-31/image-05.jpg","width":1800,"height":2400,"alt":"Zovinel 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-31/image-06.jpg","width":1806,"height":2400,"alt":"Zovinel 系列套图 06","label":"系列图 06"},{"src":"assets/series/import-1/set-31/image-07.jpg","width":1800,"height":2400,"alt":"Zovinel 系列套图 07","label":"系列图 07"}]},{"project":"Zovinel","folder":"Zovinel\\2\\已压缩 用于网页","images":[{"src":"assets/series/import-1/set-32/image-01.jpg","width":1800,"height":2400,"alt":"Zovinel 系列套图 01","label":"系列图 01"},{"src":"assets/series/import-1/set-32/image-02.jpg","width":1800,"height":2400,"alt":"Zovinel 系列套图 02","label":"系列图 02"},{"src":"assets/series/import-1/set-32/image-03.jpg","width":1800,"height":2400,"alt":"Zovinel 系列套图 03","label":"系列图 03"},{"src":"assets/series/import-1/set-32/image-04.jpg","width":1800,"height":2400,"alt":"Zovinel 系列套图 04","label":"系列图 04"},{"src":"assets/series/import-1/set-32/image-05.jpg","width":1800,"height":2400,"alt":"Zovinel 系列套图 05","label":"系列图 05"},{"src":"assets/series/import-1/set-32/image-06.jpg","width":1800,"height":2400,"alt":"Zovinel 系列套图 06","label":"系列图 06"},{"src":"assets/series/import-1/set-32/image-07.jpg","width":1800,"height":2400,"alt":"Zovinel 系列套图 07","label":"系列图 07"}]}];
projects.series.images=seriesSets[0].images.slice(0,3);
projects.series.note="系列套图作品。";
const order=Object.keys(projects), $=id=>document.getElementById(id);
function imageNode(im,eager=false){const img=document.createElement('img');Object.assign(img,{src:im.src,alt:im.alt,width:im.width,height:im.height,loading:eager?'eager':'lazy',decoding:'async'});return img;}
if($('featured-banner')){
 let previous=null;try{previous=localStorage.getItem('fashion-last-banner');}catch(_){}
 const banners=projects.campaigns.images;
 const pool=banners.filter(im=>im.src!==previous);
 const choices=pool.length?pool:banners;
 const chosen=choices[Math.floor(Math.random()*choices.length)];
 try{localStorage.setItem('fashion-last-banner',chosen.src);}catch(_){}
 $('banner-media').replaceChildren(imageNode(chosen,true));$('banner-label').textContent=chosen.label;
}
if(!$('category-switch'))return;
const steps={
 campaigns:[['视觉定调','以服装轮廓、色彩与材质确定画面语气。'],['构图与光线','围绕服装组织人物姿态、光线与背景。'],['单图延展','探索不同风格的广告横幅与时装大片。']],
 series:[['系列语言','确定人物、服装与场景的一致性目标。'],['造型变化','围绕服装品类安排造型与取景节奏。'],['连续叙事','以连贯画面呈现系列服装与视觉方向。']],
 styling:[['原始造型','以原图作为人物、姿态与场景参考。'],['目标服装','明确服装的版型、材质与搭配方向。'],['结果概念','三图说明流程，并非同一人物的实际换装结果。']],
 motion:[['面料与姿态','关注织物和人物的运动可能。'],['光线与节奏','以静帧研究影像的氛围与节奏。'],['视频封面示意','当前无真实影片，仅展示静态海报。']],
 homepage:[['首屏定调','用字体、影像与留白建立品牌第一印象。'],['陈列与材质','组织空间、服装陈列与材质细节。'],['平面长图','展示平面视觉概念，不作为网页开发服务。']]
};
let active='campaigns';
let seriesGender='women';
let coverTimer;
function mountCover(images){
 clearInterval(coverTimer);
 const cover=$('category-cover');
 cover.setAttribute('role','region');cover.setAttribute('aria-label','??????');
 let index=0,startX=null;
 const viewport=document.createElement('div');viewport.className='cover-viewport';
 const track=document.createElement('div');track.className='cover-track';
 const slides=images.map(im=>{const slide=document.createElement('div');slide.className='cover-slide';slide.append(imageNode(im,true));track.append(slide);return slide;});viewport.append(track);
 const controls=document.createElement('div');controls.className='cover-controls';
 const previous=document.createElement('button'),next=document.createElement('button'),count=document.createElement('span');
 previous.type=next.type='button';previous.textContent='?';next.textContent='?';previous.setAttribute('aria-label','?????');next.setAttribute('aria-label','?????');count.className='cover-count';
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 function show(value){index=(value+images.length)%images.length;track.style.transform='translateX(-'+(index*100)+'%)';slides.forEach((slide,i)=>slide.setAttribute('aria-hidden',String(i!==index)));count.textContent=String(index+1).padStart(2,'0')+' / '+String(images.length).padStart(2,'0');}
 function restart(){clearInterval(coverTimer);if(!reduced.matches&&!document.hidden&&images.length>1)coverTimer=setInterval(()=>show(index+1),4000);}
 previous.onclick=()=>{show(index-1);restart();};next.onclick=()=>{show(index+1);restart();};
 cover.onkeydown=e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();show(index+(e.key==='ArrowRight'?1:-1));restart();}};
 viewport.onpointerdown=e=>{startX=e.clientX;};viewport.onpointerup=e=>{if(startX!==null&&Math.abs(e.clientX-startX)>40){show(index+(e.clientX<startX?1:-1));restart();}startX=null;};viewport.onpointercancel=()=>{startX=null;};
 controls.append(previous,count,next);cover.replaceChildren(viewport);show(0);restart();document.onvisibilitychange=restart;reduced.onchange=restart;
}

function getCategory(){
 let saved='';try{saved=sessionStorage.getItem('fashion-next-category')||'';sessionStorage.removeItem('fashion-next-category');}catch(_){}
 try{const query=new URLSearchParams(location.search).get('category');const hash=new URLSearchParams(location.hash.replace(/^#/, '')).get('category');for(const key of [query,hash,saved])if(key&&projects[key])return key;}catch(_){}
 return projects[saved]?saved:'campaigns';
}


const imageDialog=document.createElement('dialog');
imageDialog.className='homepage-image-dialog';
imageDialog.setAttribute('aria-label','作品图片预览');
const imageViewport=document.createElement('div');
imageViewport.className='homepage-image-viewport';
const largeImage=document.createElement('img');
largeImage.draggable=false;imageViewport.append(largeImage);
imageDialog.append(imageViewport);imageDialog.tabIndex=-1;document.body.append(imageDialog);
let viewerScale=1,viewerX=0,viewerY=0,drag=null;
function paintViewer(){largeImage.style.transform='translate('+viewerX+'px,'+viewerY+'px) scale('+viewerScale+')';imageViewport.classList.toggle('is-zoomed',viewerScale>1);}
function resetViewer(){viewerScale=1;viewerX=0;viewerY=0;paintViewer();}
function zoomAt(next,clientX,clientY){
 const rect=imageViewport.getBoundingClientRect(), x=clientX-(rect.left+rect.width/2), y=clientY-(rect.top+rect.height/2);
 const scale=Math.min(8,Math.max(1,next)),ratio=scale/viewerScale;
 viewerX=x-(x-viewerX)*ratio;viewerY=y-(y-viewerY)*ratio;viewerScale=scale;
 if(scale===1){viewerX=0;viewerY=0;}paintViewer();
}
function zoomCenter(factor){const r=imageViewport.getBoundingClientRect();zoomAt(viewerScale*factor,r.left+r.width/2,r.top+r.height/2);}
imageViewport.addEventListener('wheel',event=>{event.preventDefault();zoomAt(viewerScale*Math.exp(-event.deltaY*0.0015),event.clientX,event.clientY);},{passive:false});

let suppressViewerClick=false,clearViewerClickTimer;
imageViewport.addEventListener('pointerdown',event=>{
 if(viewerScale<=1||(event.pointerType==='mouse'&&event.button!==0))return;
 clearTimeout(clearViewerClickTimer);suppressViewerClick=false;
 drag={id:event.pointerId,x:event.clientX,y:event.clientY,tx:viewerX,ty:viewerY,moved:false};
 imageViewport.setPointerCapture(event.pointerId);imageViewport.classList.add('is-dragging');
 event.preventDefault();
});
imageViewport.addEventListener('pointermove',event=>{
 if(!drag||event.pointerId!==drag.id)return;
 const dx=event.clientX-drag.x,dy=event.clientY-drag.y;
 if(Math.abs(dx)+Math.abs(dy)>3)drag.moved=true;
 viewerX=drag.tx+dx;viewerY=drag.ty+dy;paintViewer();
});
function endDrag(event){
 if(!drag||event.pointerId!==drag.id)return;
 suppressViewerClick=drag.moved;drag=null;imageViewport.classList.remove('is-dragging');
 if(suppressViewerClick)clearViewerClickTimer=setTimeout(()=>{suppressViewerClick=false;},300);
}
imageViewport.addEventListener('pointerup',endDrag);
imageViewport.addEventListener('pointercancel',endDrag);
imageViewport.addEventListener('lostpointercapture',endDrag);
imageViewport.addEventListener('click',event=>{
 if(suppressViewerClick){suppressViewerClick=false;return;}
 const r=largeImage.getBoundingClientRect();
 if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)imageDialog.close();
});
imageDialog.addEventListener('keydown',event=>{if(event.key==='+'||event.key==='='){event.preventDefault();zoomCenter(1.25);}else if(event.key==='-'){event.preventDefault();zoomCenter(1/1.25);}else if(event.key==='0'){event.preventDefault();resetViewer();}});
imageDialog.addEventListener('close',()=>{largeImage.removeAttribute('src');resetViewer();});
let seriesStripObservers=[];
function render(key,updateURL=false){
 seriesStripObservers.forEach(observer=>observer.disconnect());seriesStripObservers=[];
 active=projects[key]?key:'campaigns';const p=projects[active];
 document.title=p.title+' — AI FASHION STUDIO';
 $('category-number').textContent=p.number+' / AI FASHION PRACTICE';$('category-title').textContent=p.title;$('category-en').textContent=p.en;
 $('category-summary').textContent=p.summary;$('category-description').textContent=p.description;
 $('content-title').replaceChildren(document.createTextNode(p.heading[0]),document.createElement('br'),document.createTextNode(p.heading[1]));
 $('category-note').textContent=p.note;mountCover(p.images);
 $('category-tags').replaceChildren(...p.tags.map(t=>{const li=document.createElement('li');li.textContent=t;return li;}));
 $('category-switch').replaceChildren(...order.map(id=>{const a=document.createElement('a');a.href='work.html?category='+id;a.dataset.category=id;if(id===active)a.setAttribute('aria-current','page');const n=document.createElement('span'),h=document.createElement('strong'),en=document.createElement('small');n.textContent=projects[id].number;h.textContent=projects[id].title;en.textContent=projects[id].en;a.append(n,h,en);return a;}));

 $('process-steps').replaceChildren(...steps[active].map(([title,description],i)=>{const block=document.createElement('section'),n=document.createElement('p'),h=document.createElement('h3'),d=document.createElement('p');n.className='eyebrow';n.textContent='0'+(i+1)+' / Visual direction';h.textContent=title;d.textContent=description;block.append(n,h,d);return block;}));
 const gallery=$('detail-gallery');gallery.className='detail-gallery gallery--'+active;
 const baseStudies=active==='campaigns'?campaignWorks:active==='homepage'?homepageWorks:p.images;
 const ratios=['3 / 4','4 / 3','1 / 1','16 / 9'];
 const examplePool=[...projects.campaigns.images,...projects.series.images,...projects.styling.images,...projects.motion.images,...projects.homepage.images];
 const extraStudies=[];
 const studyImages=[...baseStudies,...extraStudies];
 gallery.replaceChildren(...studyImages.map(im=>{const f=document.createElement('figure'),c=document.createElement('figcaption'),img=imageNode(im);c.textContent=im.exampleNumber?'???? '+im.exampleNumber+' / '+im.ratio:im.label;if(im.ratio){const frame=document.createElement('div');frame.className='study-crop';frame.style.aspectRatio=im.ratio;img.alt=im.alt+'?'+im.ratio+'??????';frame.append(img);f.append(frame,c);}else{f.append(img,c);}return f;}));

 if(active==='homepage'||active==='campaigns'){
   gallery.querySelectorAll('figure').forEach((figure,index)=>{
     const image=figure.querySelector('img'),button=document.createElement('button');
     button.type='button';button.className='homepage-image-trigger';
     button.setAttribute('aria-label','放大查看'+(active==='campaigns'?'视觉单图':'主页设计')+'作品 '+String(index+1).padStart(2,'0'));
     image.replaceWith(button);button.append(image);
     button.addEventListener('click',()=>{largeImage.src=image.src;largeImage.alt=image.alt;resetViewer();imageDialog.showModal();imageDialog.focus();});
   });
 }

 let genderSwitch=$('series-gender-switch');
 if(!genderSwitch){genderSwitch=document.createElement('div');genderSwitch.id='series-gender-switch';genderSwitch.className='series-gender-switch';genderSwitch.setAttribute('role','group');genderSwitch.setAttribute('aria-label','系列套图分类');gallery.before(genderSwitch);}
 genderSwitch.hidden=active!=='series';
 if(active==='series'){
  genderSwitch.replaceChildren(...[['women','女装'],['men','男装']].map(([value,label])=>{const button=document.createElement('button');button.type='button';button.textContent=label;button.dataset.gender=value;button.setAttribute('aria-pressed',String(seriesGender===value));button.addEventListener('click',()=>{seriesGender=value;render(active);$('series-gender-switch').querySelector('[data-gender="'+value+'"]').focus({preventScroll:true});});return button;}));
  const womenProjects=new Set(['lumi','Suri Mira','Zovinel','滑雪-登山','运动大码四件','人台']);
  const grouped=new Map();
  seriesSets.filter(set=>(womenProjects.has(set.project)?'women':'men')===seriesGender).forEach(set=>{if(!grouped.has(set.project))grouped.set(set.project,[]);grouped.get(set.project).push(set);});
  gallery.replaceChildren(...Array.from(grouped).sort(([a],[b])=>Number(b==='Zovinel')-Number(a==='Zovinel')).map(([name,sets],projectIndex)=>{
   const section=document.createElement('section');section.className='series-set';
   const header=document.createElement('div');header.className='series-set-heading';
   const names={'lumi':'Rue Lumi','滑雪-登山':'Ski & Mountain','男装':'Menswear','男装-1':'Menswear 01','男装-2':'Menswear 02','人台':'Dress Forms','运动大码四件':'Plus-Size Activewear'};
   const titleGroup=document.createElement('div');titleGroup.className='series-title-group';
   const eyebrow=document.createElement('span');eyebrow.className='series-title-label';eyebrow.textContent='SERIES / '+String(projectIndex+1).padStart(2,'0');
   const title=document.createElement('h3');title.textContent=names[name]||name;titleGroup.append(eyebrow,title);header.append(titleGroup);section.append(header);
   sets.forEach((set,setIndex)=>{
    const block=document.createElement('div');block.className='series-real-set';
    if(set.images.length<=6){
     const row=document.createElement('div');row.className='series-photo-row series-real-row';row.tabIndex=0;row.setAttribute('aria-label',name+'，第 '+(setIndex+1)+' 组图片，可横向浏览');
     set.images.forEach(im=>{const figure=document.createElement('figure');figure.append(imageNode(im));row.append(figure);});block.append(row);
    }else{


     const deck=document.createElement('div');deck.className='series-strip';
     const track=document.createElement('div');track.className='series-strip-track';track.setAttribute('role','group');track.setAttribute('aria-label',name+'，第 '+(setIndex+1)+' 组叠放图片');
     const cards=[];
     function revealCard(index){const overlap=parseFloat(track.style.getPropertyValue('--series-overlap'))||0;cards.forEach((card,i)=>card.style.setProperty('--card-shift',i>index?overlap+'px':'0px'));}
     function restoreCards(){cards.forEach(card=>card.style.setProperty('--card-shift','0px'));}
     set.images.forEach((im,index)=>{const figure=document.createElement('figure');figure.className='series-strip-card';figure.tabIndex=0;figure.setAttribute('aria-label',im.alt);figure.append(imageNode(im));figure.addEventListener('pointerenter',event=>{if(event.pointerType==='mouse')revealCard(index);});figure.addEventListener('focus',()=>revealCard(index));figure.addEventListener('blur',restoreCards);cards.push(figure);track.append(figure);});
     track.addEventListener('pointerleave',restoreCards);
     deck.append(track);block.append(deck);
     function fitStack(){
      const width=track.clientWidth;if(!width)return;
      const gap=parseFloat(getComputedStyle(track).getPropertyValue('--series-photo-gap'))||16;
      const cardWidth=matchMedia('(max-width:767px)').matches?Math.min(160,width):matchMedia('(max-width:1024px)').matches?Math.min(144,width):Math.max(1,(width-5*gap)/6);
      const overlap=Math.max(0,(cardWidth*set.images.length-width)/(set.images.length-1)+1);
      track.style.setProperty('--series-card-width',cardWidth+'px');track.style.setProperty('--series-overlap',overlap+'px');
     }
     const observer=new ResizeObserver(fitStack);observer.observe(track);seriesStripObservers.push(observer);


    }
    section.append(block);
   });
   return section;
  }));
 }
 $('artboard-slot').hidden=true;gallery.hidden=false;
 const galleryNote=gallery.closest('.gallery-section').querySelector('.section-line > span');if(galleryNote)galleryNote.textContent=active==='homepage'?'Homepage designs / 主页设计':active==='series'?'Fashion series / 系列套图':'Concept studies / 概念示意';
 if(updateURL){try{history.pushState({category:active},'','work.html?category='+active);}catch(_){}}
}
$('category-switch').addEventListener('click',e=>{const a=e.target.closest('[data-category]');if(!a||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;e.preventDefault();render(a.dataset.category,true);$('category-switch').querySelector('[aria-current]').focus({preventScroll:true});});
window.addEventListener('popstate',()=>render(getCategory()));render(getCategory());
})();

