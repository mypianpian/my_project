$(function() {

    // 添加模块功能
    var MODULE = [];

        // 模块标题
        MODULE['modTitle'] = `<div class="section-hd">
                                    <h2 class="section-hd-title npf-editable">
                                        模块标题
                                    </h2>
                                </div>`;

        // 会议地址
        MODULE['meetingLocation'] = `
                <div class="section-bd">
                    <div class="c-grid">
                        <div class="c-g-24">
                            <div class="guidebook-notice-warpper">
                                <div class="guidebook-notice">
                                    <div class="guidebook-notice-figure">
                                        <picture class="npf-pic-editable">
                                            <source media="(max-width: 600px)" srcset="http://imgcache.qq.com/open_proj/proj_qcloud_v2/event/summit/css/img/adress1-xs.jpg">
                                            <img src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/event/summit/css/img/adress1.jpg" alt="">
                                        </picture>
                                    </div>
                                    <div class="guidebook-notice-details">
                                        <div class="guidebook-notice-details-inner">
                                            <p class="time"><span class="label npf-editable">9月21日</span><span class="label npf-editable">上海站</span></p>
                                            <p class="station"><span class="label npf-editable">上海中星铂尔曼大酒店</span></p>
                                            <p class="map npf-editable">上海市徐汇区浦北路1号</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="guidebook-map">
                                    <div id="container" style="display: block; width: 100%; height: 100%;">
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            <script>
            var _this = this;
            window["mapsload"] = function () {
                _this.googleMapsLoaded = true;
            
                if (_this.initialized) {
                    _this.reportReady();
                    _this.createMap();
                }
            }; 
            
            this.initialize = function (reportReady) {
                this._super(false);
            
                if (this.mapsload) {
                    this.reportReady();
                    this.createMap();
                }
            };
            </script>
            <script charset="utf-8" src="http://map.qq.com/api/js?v=2.exp&callback=mapsload"></script>
            <script type="text/javascript">
                var init = function() {
                    var center = new qq.maps.LatLng(31.159460, 121.429800);
                    var map = new qq.maps.Map(document.getElementById('container'), {
                        center: center,
                        zoom: 17
                    });
                    var marker = new qq.maps.Marker({
                        position: center,
                        map: map,
                        content: ''
                    });
                    var label = new qq.maps.Label({
                        position: center,
                        map: map,
                        content: '上海中星铂尔曼大酒店'
                    });
                }
                setTimeout(function(){
                    init();                
                },500)
            </script>
            `;

        // 回顾
        MODULE['lookBack'] = `

                <div class="section-bd">
                    <div class="c-grid">
                        <div class="c-g-24">        
            <div class="review">
                <div class="review-grids">
                    <div class="review-col">
                        <div class="review-item">
                            <div id="j-videoMask" class="review-figure npf-pic-editable">
                                <img src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/event/summit/css/img/temp/img2.jpg" alt="">
                                <span class="review-icon-play"></span>
                            </div>
                            <video class="review-video" controls="" src="https://course2-10050352.file.myqcloud.com/产品入门/云计算基础知识（腾讯云&amp;极客学院）/1.云计算-什么是云.mp4">当前浏览器不能支持视频播放，请采用chrome或IE9以上浏览器</video>
                            <video class="review-video in" controls="" src="https://course2-10050352.file.myqcloud.com/产品入门/云计算基础知识（腾讯云&amp;极客学院）/1.云计算-什么是云.mp4">当前浏览器不能支持视频播放，请采用chrome或IE9以上浏览器</video>
                        </div>
                    </div>
                    <div class="review-col">
                         <div class="review-item">
                            <p class="review-figure npf-pic-editable">
                                <img src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/event/summit/css/img/temp/img3.jpg" alt="">
                            </p>
                            <p class="review-desc npf-editable">腾讯云技术领袖峰会回顾腾讯云技术领袖峰会回顾</p>
                        </div>
                    </div>
                    <div class="review-col">
                         <a href="javascript:void(0);" target="_blank" class="review-item">
                            <p class="review-figure npf-pic-editable">
                                <img src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/event/summit/css/img/temp/img4.jpg" alt="">
                            </p>
                            <p class="review-desc npf-editable">腾讯云技术领袖峰会回顾腾讯云技术领袖峰会回顾</p>
                        </a>
                        <div class="review-item">
                            <a href="javascript:void(0);" target="_blank" class="review-figure npf-pic-editable">
                                <img src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/event/summit/css/img/temp/img4.jpg" alt="">
                            </a>
                            <p class="review-desc npf-editable">腾讯云技术领袖峰会回顾腾讯云技术领袖峰会回顾</p>
                        </div>
                    </div>
                </div>
            </div>
                    </div>
                </div>
            </div>
            `;

        // 合作伙伴
        MODULE['cooperativePartner'] = `
                <div class="section-bd">
                    <div class="c-grid">
                        <div class="c-g-24">        
            <div class="partner-list">
                <div class="partner-list-item">
                    <a href="javascript:void(0);" class="partner-figure npf-pic-editable">
                        <img src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/event/summit/css/img/temp/partner1.jpg" alt="">
                    </a>
                </div>
                <div class="partner-list-item">
                    <a href="javascript:void(0);" class="partner-figure npf-pic-editable">
                        <img src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/event/summit/css/img/temp/partner1.jpg" alt="">
                    </a>
                </div>
                <div class="partner-list-item">
                    <a href="javascript:void(0);" class="partner-figure npf-pic-editable">
                        <img src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/event/summit/css/img/temp/partner1.jpg" alt="">
                    </a>
                </div>
                <div class="partner-list-item">
                    <a href="javascript:void(0);" class="partner-figure npf-pic-editable">
                        <img src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/event/summit/css/img/temp/partner1.jpg" alt="">
                    </a>
                </div>
                <div class="partner-list-item">
                    <a href="javascript:void(0);" class="partner-figure npf-pic-editable">
                        <img src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/event/summit/css/img/temp/partner1.jpg" alt="">
                    </a>
                </div>
                <div class="partner-list-item">
                    <a href="javascript:void(0);" class="partner-figure npf-pic-editable">
                        <img src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/event/summit/css/img/temp/partner1.jpg" alt="">
                    </a>
                </div>
                <div class="partner-list-item">
                    <a href="javascript:void(0);" class="partner-figure npf-pic-editable">
                        <img src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/event/summit/css/img/temp/partner1.jpg" alt="">
                    </a>
                </div>
            </div>
                    </div>
                </div>
            </div>
            `;

        // 推荐
        MODULE['recommend'] = `
                <div class="section-bd">
                    <div class="c-grid">
                        <div class="c-g-24">

            <div class="recommend-list">
                <div class="recommend-list-item">
                    <div class="recommend-list-item-box">
                        <div class="recommend-title npf-editable">云服务器CVM</div>
                        <div class="recommend-desc npf-editable">这里一句话介绍</div>
                        <div class="recommend-toolbar">
                            <a href="javascript:void(0);" target="_blank" class="recommend-button npf-editable">免费体验</a>
                        </div>
                    </div>
                </div>
                <div class="recommend-list-item">
                    <div class="recommend-list-item-box">
                        <div class="recommend-title npf-editable">云数据库MYSQL</div>
                        <div class="recommend-desc npf-editable">一体化多维度监控，高效管理海量数据库</div>
                        <div class="recommend-toolbar">
                            <a href="javascript:void(0);" target="_blank" class="recommend-button npf-editable">免费体验</a>
                        </div>
                    </div>
                </div>
                <div class="recommend-list-item">
                    <div class="recommend-list-item-box">
                        <div class="recommend-title npf-editable">云数据库MYSQL</div>
                        <div class="recommend-desc npf-editable">一体化多维度监控，高效管理海量数据库</div>
                        <div class="recommend-toolbar">
                            <a href="javascript:void(0);" target="_blank" class="recommend-button npf-editable">免费体验</a>
                        </div>
                    </div>
                </div>
            </div>
                    </div>
                </div>
            </div>
            `;

        // 峰会介绍
        MODULE['introduces'] = `
                <div class="section-bd">
                    <div class="c-grid">
                        <div class="c-g-24">

            <div class="introduces npf-svg-editable">
                <p>这里是描述填充文案这里是描述填充文案这里是描述填充文案这里是描述填充文案这里是描述填充文案这里是描述填充文案这里是描述填充文案这里是描述填充文案</p>
                <p>这里是描述填充文案</p>
                <p>这里是描述填充文案</p>
                <p>这里是描述填充文案</p>
            </div>
                    </div>
                </div>
            </div>
            `;

        // 播放器
        MODULE['liveVideo'] = `
                <div class="section-bd">
                    <div class="c-grid">
                        <div class="c-g-24">

            <div class="live-video">
                <div class="live-video-figure npf-pic-editable">
                    <img src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/event/summit/css/img/temp/img2.jpg" alt="">
                    <div class="live-video-callback">
                        <div class="live-video-callback-inner">
                            <p class="npf-editable">直播开始时间: 09:30</p>
                            <p class="npf-editable">敬请期待</p>
                        </div>
                    </div>
                </div>
                <video src="#" class="live-video-play" style="display: none;"></video>
                <iframe src="" class="live-video-play" style="display: none;" frameborder="0"></iframe>
            </div>
                    </div>
                </div>
            </div>
            `;

        // 议程
        MODULE['agenda'] = `
                <div class="section-bd">
                    <div class="c-grid">
                        <div class="c-g-24">

            <table class="agenda-list">
                <colgroup>
                    <col class="col-1" style="width: 130px;">
                    <col class="col-2">
                    <col class="col-3" style="width: 200px;">
                    <col class="col-4" style="width: 420px;">
                </colgroup>
                <thead>
                    <tr>
                        <td>时间</td>
                        <td>议题方向</td>
                        <td colspan="2">演讲嘉宾</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>09:00-09:30</td>
                        <td>腾讯领导致</td>
                        <td>马化腾</td>
                        <td>腾讯董事会主席</td>
                    </tr>
                    <tr>
                        <td>09:00-09:30</td>
                        <td>行业生态话题：云端教育</td>
                        <td>神秘嘉宾</td>
                        <td>互联网教育产业先行者</td>
                    </tr>
                    <tr>
                        <td>09:00-09:30</td>
                        <td>行业生态话题：互联网+清洁能源的趋势与价值</td>
                        <td>神秘嘉宾</td>
                        <td>互联网+智慧能源先行者</td>
                    </tr>
                    <tr>
                        <td>09:00-09:30</td>
                        <td>云计算大方向</td>
                        <td>                     
                            <p>
                                <span class="visible-sm-hidden">邱跃鹏</span>
                                <span class="visible-sm-block">邱跃鹏&emsp;腾讯副总裁，腾讯云总裁</span>
                            </p>
                            <p>腾讯云各产品负责人</p>
                        </td>
                        <td>                            
                            <p><span class="visible-sm-hidden">腾讯副总裁，腾讯云总裁</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td>09:00-09:30</td>
                        <td>云安全方向</td>
                        <td>Aloysius Cheang</td>
                        <td>云安全联盟全球执行副总裁</td>
                    </tr>
                    <tr>
                        <td colspan="1">09:00-09:30</td>
                        <td colspan="3">午休</td>
                    </tr>
                    <tr>
                        <td>09:00-09:30</td>
                        <td>腾讯云核心战略发布</td>
                        <td>
                            <p>邱跃鹏</p>
                            <p>邱跃鹏</p>
                            <p>邱跃鹏</p>
                        </td>
                        <td>
                            <p>腾讯副总裁，腾讯云负责人</p>
                            <p>腾讯副总裁，腾讯云负责人</p>
                            <p>腾讯副总裁，腾讯云负责人</p>
                        </td>
                    </tr>
                    <tr>
                        <td>09:00-09:30</td>
                        <td>腾讯云核心战略发布</td>
                        <td colspan="2">
                            <p>腾讯副总裁，腾讯云负责人腾讯副总裁，腾讯云负责人</p>
                            <p>腾讯副总裁，腾讯云负责人腾讯副总裁，腾讯云负责人</p>
                            <p>腾讯副总裁，腾讯云负责人腾讯副总裁，腾讯云负责人</p>
                        </td>
                    </tr>
                </tbody>
            </table>
                    </div>
                </div>
            </div>
            `;

        // 嘉宾小图
        MODULE['guestSmall'] = `
                <div class="section-bd">
                    <div class="c-grid">
                        <div class="c-g-24">

            <ul class="guest-list guest-small-list">
                <li class="guest-list-item">
                    <div class="guest-list-item-box">
                        <div class="guest-list-item-figure npf-pic-editable">
                            <img src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/event/summit/css/img/temp/guest4.jpg" alt="">
                        </div>
                        <div class="guest-list-item-details">
                            <strong class="name npf-editable">马化腾</strong>
                            <div class="desc npf-editable">
                                腾讯公司董事会主席兼首席执行官
                            </div>
                            <div class="more npf-editable">
                                腾讯公司主要创办人之一，现任腾讯公司执行董事、董事会主席兼首席执行官，全面负责腾讯的战略规划、定位和管理。
                            </div>
                        </div>
                    </div>
                </li>
                <li class="guest-list-item">
                    <div class="guest-list-item-box">
                        <div class="guest-list-item-figure npf-pic-editable">
                            <img src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/event/summit/css/img/temp/guest4.jpg" alt="">
                        </div>
                        <div class="guest-list-item-details">
                            <strong class="name npf-editable">嘉宾</strong>
                            <div class="desc npf-editable">
                                美的集团董事长兼总裁
                            </div>
                            <div class="more npf-editable">
                                曾任深圳市万科财务顾问有限公司总经理、万科企业股份有限公司副总经理、常务副总经理兼财务负责人、总经理。现任万科集团总裁。
                            </div>
                        </div>
                    </div>
                </li>
                <li class="guest-list-item">
                    <div class="guest-list-item-box">
                        <div class="guest-list-item-figure npf-pic-editable">
                            <img src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/event/summit/css/img/temp/guest4.jpg" alt="">
                        </div>
                        <div class="guest-list-item-details">
                            <strong class="name npf-editable">嘉宾</strong>
                            <div class="desc npf-editable">
                                新东方集团董事长兼首席执行官
                            </div>
                            <div class="more npf-editable">
                                新东方创始人，现任新东方集团董事长兼首席执行官，洪泰基金创始合伙人，耿丹学院理事长，民盟中央常委，第十一、十二届全国政协委员。
                            </div>
                        </div>
                    </div>
                </li>
                <li class="guest-list-item">
                    <div class="guest-list-item-box">
                        <div class="guest-list-item-figure npf-pic-editable">
                            <img src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/event/summit/css/img/temp/guest4.jpg" alt="">
                        </div>
                        <div class="guest-list-item-details">
                            <strong class="name npf-editable">Joe Weinman</strong>
                            <div class="desc npf-editable">
                                顶级云计算战略家
                            </div>
                            <div class="more npf-editable">
                                《云经济学——企业云计算战略与布局》作者，开创性地提出了“云经济学”这一定义，被TechTarge冠以“十大云计算领袖”之一的称号。
                            </div>
                        </div>
                    </div>
                </li>
                <li class="guest-list-item">
                    <div class="guest-list-item-box">
                        <div class="guest-list-item-figure npf-pic-editable">
                            <img src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/event/summit/css/img/temp/guest4.jpg" alt="">
                        </div>
                        <div class="guest-list-item-details">
                            <strong class="name npf-editable">嘉宾</strong>
                            <div class="desc npf-editable">
                                简单描述文字填充
                            </div>
                            <div class="more npf-editable">
                                云经济学——企业云计算战略与布局》作者，开创性地提出了“云经济学”这一定义，被TechTarge冠以“十大云计算领袖”之一的称号。
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
                    </div>
                </div>
            </div>
            `;

        // 嘉宾大图
        MODULE['guestLarge'] = `

                <div class="section-bd">
                    <div class="c-grid">
                        <div class="c-g-24">

            <ul class="guest-list guest-large-list">
                <li class="guest-list-item">
                    <div class="guest-list-item-box">
                        <div class="guest-list-item-figure npf-pic-editable">
                            <img src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/event/summit/css/img/temp/guest1.jpg" alt="">
                        </div>
                        <div class="guest-list-item-details">
                            <strong class="name npf-editable">嘉宾1</strong>
                            <div class="desc">
                                <p class="npf-editable">简单描述文字填充</p>
                                <p class="npf-editable">简单描述文字填充</p>
                            </div>
                            <div class="more">
                                <p class="npf-editable">详细描述文字填充详细描述文字填充</p>
                                <p class="npf-editable">详细描述文字填充详细描述文字填充</p>
                                <p class="npf-editable">详细描述文字填充详细描述文字填充</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="guest-list-item">
                    <div class="guest-list-item-box">
                        <div class="guest-list-item-figure npf-pic-editable">
                            <img src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/event/summit/css/img/temp/guest2.jpg" alt="">
                        </div>
                        <div class="guest-list-item-details">
                            <strong class="name npf-editable">嘉宾2</strong>
                            <div class="desc">
                                <p class="npf-editable">简单描述文字填充</p>
                                <p class="npf-editable">简单描述文字填充</p>
                            </div>
                            <div class="more">
                                <p class="npf-editable">详细描述文字填充详细描述文字填充</p>
                                <p class="npf-editable">详细描述文字填充详细描述文字填充</p>
                                <p class="npf-editable">详细描述文字填充详细描述文字填充</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="guest-list-item">
                    <div class="guest-list-item-box">
                        <div class="guest-list-item-figure npf-pic-editable">
                            <img src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/event/summit/css/img/temp/guest3.jpg" alt="">
                        </div>
                        <div class="guest-list-item-details">
                            <strong class="name npf-editable">嘉宾3</strong>
                            <div class="desc">
                                <p class="npf-editable">简单描述文字填充</p>
                                <p class="npf-editable">简单描述文字填充</p>
                            </div>
                            <div class="more">
                                <p class="npf-editable">详细描述文字填充详细描述文字填充</p>
                                <p class="npf-editable">详细描述文字填充详细描述文字填充</p>
                                <p class="npf-editable">详细描述文字填充详细描述文字填充</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="guest-list-item">
                    <div class="guest-list-item-box">
                        <div class="guest-list-item-figure npf-pic-editable">
                            <img src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/event/summit/css/img/temp/guest1.jpg" alt="">
                        </div>
                        <div class="guest-list-item-details">
                            <strong class="name npf-editable">嘉宾1</strong>
                            <div class="desc">
                                <p class="npf-editable">简单描述文字填充</p>
                                <p class="npf-editable">简单描述文字填充</p>
                            </div>
                            <div class="more">
                                <p class="npf-editable">详细描述文字填充详细描述文字填充</p>
                                <p class="npf-editable">详细描述文字填充详细描述文字填充</p>
                                <p class="npf-editable">详细描述文字填充详细描述文字填充</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="guest-list-item">
                    <div class="guest-list-item-box">
                        <div class="guest-list-item-figure npf-pic-editable">
                            <img src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/event/summit/css/img/temp/guest2.jpg" alt="">
                        </div>
                        <div class="guest-list-item-details">
                            <strong class="name npf-editable">嘉宾2</strong>
                            <div class="desc">
                                <p class="npf-editable">简单描述文字填充</p>
                                <p class="npf-editable">简单描述文字填充</p>
                            </div>
                            <div class="more">
                                <p class="npf-editable">详细描述文字填充详细描述文字填充</p>
                                <p class="npf-editable">详细描述文字填充详细描述文字填充</p>
                                <p class="npf-editable">详细描述文字填充详细描述文字填充</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="guest-list-item">
                    <div class="guest-list-item-box">
                        <div class="guest-list-item-figure npf-pic-editable">
                            <img src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/event/summit/css/img/temp/guest3.jpg" alt="">
                        </div>
                        <div class="guest-list-item-details">
                            <strong class="name npf-editable">嘉宾3</strong>
                            <div class="desc">
                                <p class="npf-editable">简单描述文字填充</p>
                                <p class="npf-editable">简单描述文字填充</p>
                            </div>
                            <div class="more">
                                <p class="npf-editable">详细描述文字填充详细描述文字填充</p>
                                <p class="npf-editable">详细描述文字填充详细描述文字填充</p>
                                <p class="npf-editable">详细描述文字填充详细描述文字填充</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="guest-list-item">
                    <div class="guest-list-item-box">
                        <div class="guest-list-item-figure npf-pic-editable">
                            <img src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/event/summit/css/img/temp/guest1.jpg" alt="">
                        </div>
                        <div class="guest-list-item-details">
                            <strong class="name npf-editable">嘉宾4</strong>
                            <div class="desc">
                                <p class="npf-editable">简单描述文字填充</p>
                                <p class="npf-editable">简单描述文字填充</p>
                            </div>
                            <div class="more">
                                <p class="npf-editable">详细描述文字填充详细描述文字填充</p>
                                <p class="npf-editable">详细描述文字填充详细描述文字填充</p>
                                <p class="npf-editable">详细描述文字填充详细描述文字填充</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="guest-list-item">
                    <div class="guest-list-item-box">
                        <div class="guest-list-item-figure npf-pic-editable">
                            <img src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/event/summit/css/img/temp/guest1.jpg" alt="">
                        </div>
                        <div class="guest-list-item-details">
                            <strong class="name npf-editable">嘉宾5</strong>
                            <div class="desc">
                                <p class="npf-editable">简单描述文字填充</p>
                                <p class="npf-editable">简单描述文字填充</p>
                            </div>
                            <div class="more">
                                <p class="npf-editable">详细描述文字填充详细描述文字填充</p>
                                <p class="npf-editable">详细描述文字填充详细描述文字填充</p>
                                <p class="npf-editable">详细描述文字填充详细描述文字填充</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="guest-list-item">
                    <div class="guest-list-item-box">
                        <div class="guest-list-item-figure npf-pic-editable">
                            <img src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/event/summit/css/img/temp/guest1.jpg" alt="">
                        </div>
                        <div class="guest-list-item-details">
                            <strong class="name npf-editable">嘉宾6</strong>
                            <div class="desc">
                                <p class="npf-editable">简单描述文字填充</p>
                                <p class="npf-editable">简单描述文字填充</p>
                            </div>
                            <div class="more">
                                <p class="npf-editable">详细描述文字填充详细描述文字填充</p>
                                <p class="npf-editable">详细描述文字填充详细描述文字填充</p>
                                <p class="npf-editable">详细描述文字填充详细描述文字填充</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="guest-list-item">
                    <div class="guest-list-item-box guest-list-item-box-nodetails">
                        <div class="guest-list-item-figure npf-pic-editable">
                            <img src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/event/summit/css/img/temp/guest1.jpg" alt="">
                        </div>
                        <div class="guest-list-item-details">
                            <strong class="name npf-editable">嘉宾7</strong>
                            <div class="desc">
                                <p class="npf-editable">简单描述文字填充</p>
                                <p class="npf-editable">简单描述文字填充</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
                    </div>
                </div>
            </div>
            `;


    // 弹出可选模块列表
    var sectionDom;

    $(document).delegate('.btn-add-mod', 'click', function() {
        $('.mask').removeClass('none')
        sectionDom = $(this).parents('.section-inner');

        // 浮层显示
        $('.module-select-wrap').removeClass('none')

        // 模块列表切换
        $(function() {
            var $div_li = $('div.mod-tab_menu ul li');
            $div_li.click(function() {
                $(this).addClass('cur')
                    .siblings().removeClass('cur');
                var index = $div_li.index(this);
                $('div.mod-tab_box > div')
                    .eq(index).show()
                    .siblings().hide();
            })
        })

        // 弹层关闭按钮
        $('.btn-close').click(function() {
            $('.module-select-wrap').addClass('none');

            $('.mask').addClass('none');
            $('.btn-close').unbind();
        });

    })


    // 在弹层中选择需要的模块
    function addModule(module) {
        sectionDom.find('.btn-add-mod').before(MODULE[module])
    }

    $('.mod-show-multi a').click(function() {
        $(this).toggleClass('cur');
    })

    $('.mod-show-only a').click(function() {
        $(this).addClass('cur').siblings().removeClass('cur')
    })

    $('.dialog-bottom .confirm').click(function() {
        $('.mod-show .cur').each(function() {
            addModule($(this).attr('data-action'));
        })

        $('.module-select-wrap').addClass('none');
        $('.mask').addClass('none');
        $('.mod-show a').removeClass('cur')
    })


    // 添加通栏
    var fullColumn = `
        <div class="section">
            <div class="section-inner">
                <a href="##" class="btn-add-mod">添加模块</a>
            </div>
        </div>`;

    $(document).delegate('.btn-add-column', 'click', function() {
        var _this = $(this);

        $('.npf-skin-wrap').append(fullColumn)
        // _this.before(fullColumn)
    })









    // 每个模块添加文字编辑功能
    $(document).delegate('.npf-editable', 'click', function() {
        $(this).attr('contenteditable', 'true')
    })
    $(document).delegate('.npf-editable', 'blur', function() {
        $(this).attr('contenteditable', 'false')
    })

    // 每个模块添加文本可编辑提示
    $(document).delegate('.npf-editable', 'hover', function() {
        $(this).toggleClass("edit-focus");
        return false;
    })





    // 每个模块添加图片可编辑提示
    $(document).delegate('.npf-pic-editable img', 'hover', function() {
        $(this).toggleClass("img-focus");
        return false;
    })

    // 获取图片地址
    var imgSrc = '';

    function handleReceive(event) {
        if (event.origin != "http://rocket.oa.com:8080") return;
        //处理数据
        imgSrc = event.data;
    }
    window.addEventListener("message", handleReceive, false);

    // 页面图片地址修改
    var _thisImg;
    $(document).delegate('.npf-pic-editable', 'click', function() {
        var _this = $(this);
        _thisImg = _this.find('img');

        // 将输入框文本置空
        $('.pic-module-edit').removeClass('none')
        $('.pic-module-btn').click(function() {
            _thisImg.attr('src', imgSrc)
            $('.pic-module-edit').addClass('none');
            $('.pic-module-btn').unbind();
        })
        $('.btn.cancel').click(function() {
            $('.pic-module-edit').addClass('none');
            $('.btn.cancel').unbind();
        });
    })


    // 小浮层操作(通栏)
        // 每个模块添加功能操作浮层
        var dialogManageColumn = `
            <div class="dialog-manage">
                <a class="btn-up" href="javascript:void(0);">上移通栏</a>
                <a class="btn-down" href="javascript:void(0);">下移通栏</a>
                <a class="btn-copy" href="javascript:void(0);">复制通栏</a>
                <a class="btn-del" href="javascript:void(0);">删除通栏</a>
            </div>`;

        // 浮层的显示与否                   
        $(document).delegate('.section', 'hover', function(e) {
            var _this = $(this)
            if (e.type == 'mouseenter') {
                _this.append(dialogManageColumn)
            } else {
                $('.dialog-manage').remove();
            }
        })


        // 为每个模块添加操作
            // 向上移动
            $(document).delegate('.btn-up', 'click', function() {
                var $parent = $(this).parents('.section');
                if ($parent.prev()) {
                    $parent.after($parent.prev().clone())
                    $parent.prev().remove();
                }
            })

            // 向下移动
            $(document).delegate('.btn-down', 'click', function() {
                var $parent = $(this).parents('.section');
                if ($parent.next().length > 0) {
                    $parent.next().after($parent.clone())
                    $parent.remove();
                }
            })

            // 删除该模块
            $(document).delegate('.btn-del', 'click', function() {
                var $parent = $(this).parents('.section');
                $parent.remove();
            })

            // 复制该模块
            // var tooltip,
            //     hidetooltiptimer;

            // function createtooltip() {
            //     tooltip = $('<div class="tooltips"></div>');
            //      tooltip[0].style.cssText =
            //          'position:absolute; background:#fff; color:#000; padding:4px;z-index:10000;' + 'border-radius:2px; font-size:12px;box-shadow:3px 3px 3px rgba(0,0,0,.4);' + 'opacity:0;transition:opacity 0.5s'
            //     tooltip[0].innerHTML = '复制成功!'
            //     $('body').append(tooltip)
            // }

            // // 显示  复制成功  提示
            // function showtooltip(e) {
            //     var evt = e || event
            //     clearTimeout(hidetooltiptimer)
            //     tooltip[0].style.left = evt.pageX - 10 + 'px'
            //     tooltip[0].style.top = evt.pageY + 15 + 'px'
            //     tooltip[0].style.opacity = 1
            //     hidetooltiptimer = setTimeout(function() {
            //         $('.tooltips').remove()
            //     }, 500)
            // }

            // function copySelectionText() {
            //     var copysuccess;
            //     try {
            //         copysuccess = document.execCommand("copy")
            //     } catch (e) {
            //         copysuccess = false
            //     }
            //     return copysuccess
            // }

            // function copyfieldvalue(e) {
            //     createtooltip();
            //     var field = $('.copy-text')[0];


            //     field.focus();
            //     field.setSelectionRange(0, field.value.length)
            //     var copysuccess = copySelectionText();
            //     if (copysuccess) {
            //         showtooltip(e)
            //     }
            // }

            // $(document).delegate('.btn-copy', 'click', function() {
            //     var $parent = $(this).parents('.section');
            //     $parent.find('.dialog-manage').remove();
            //     $('.copy-text').val($parent.prop('outerHTML'));
            //     // copyfieldvalue(event)
            // })








    // 小浮层操作(模块)
        // 每个模块添加功能操作浮层
        var dialogManageMod = `
            <div class="dialog-manage">
                <a class="btn-mod-up" href="javascript:void(0);">上移模块</a>
                <a class="btn-mod-down" href="javascript:void(0);">下移模块</a>
                <a class="btn-mod-copy" href="javascript:void(0);">复制模块</a>
                <a class="btn-mod-del" href="javascript:void(0);">删除模块</a>
            </div>`;

        // 浮层的显示与否                   
        $(document).delegate('.c-g-24', 'hover', function(e) {
            var _this = $(this)
            if (e.type == 'mouseenter') {
                _this.append(dialogManageMod)
            } else {
                $('.dialog-manage').remove();
            }
        })

        // 为每个模块添加操作
            // 向上移动
            $(document).delegate('.btn-mod-up', 'click', function() {
                var $parent = $(this).parents('.section-bd');
                if ($parent.prev()) {
                    $parent.after($parent.prev().clone())
                    $parent.prev().remove();
                }
            })

            // 向下移动
            $(document).delegate('.btn-mod-down', 'click', function() {
                var $parent = $(this).parents('.section-bd');
                if ($parent.next().length > 0) {
                    $parent.next().after($parent.clone())
                    $parent.remove();
                }
            })

            // 删除该模块
            $(document).delegate('.btn-mod-del', 'click', function() {
                var $parent = $(this).parents('.section-bd');
                $parent.remove();
            })







    // 代码编辑功能
    var _thisSvg;
    var $thisCon;
    $('body').on('click', '.npf-svg-editable', function() {
        $('.mask').removeClass('none');
        $thisCon = $(this);
        _thisSvg = $thisCon.find('svg');
        $('.svg-module-edit').removeClass('none')
        // 每次都清空输入框
        $(".svg-edit-cont").val('')

        // 将输入框文本置空
        $('.svg-module-btn').click(function() {
            $('.mask').addClass('none');
            var svgCont = $(".svg-edit-cont").val();
            $thisCon.html(svgCont)
            $('.svg-module-edit').addClass('none');
            $('.svg-module-edit').unbind();
        })

        $('.btn.cancel').click(function() {
            $('.mask').addClass('none');
            $('.svg-module-edit').addClass('none');
            $('.btn.cancel').unbind();
        });

    });



    // 切换侧边栏
    $(function() {
        $('.aside-menu').click(toggleSidebar);
    })

    function toggleSidebar() {
        $('.aside-menu').toggleClass('cur');
        $('.tools-main').toggleClass('preview');
        return false;
    }

    // 工具栏跟随
    $(window).on('scroll', function() {
        var scrollTop = parseInt($(window).scrollTop());
        if (scrollTop >= 60) {
            $('.tools-sidebar').css('position', 'fixed')
        } else {
            $('.tools-sidebar').css('position', 'absolute')
        }
    });

    $('.btn-fold').toggle(function(event) {
        $(this).next('.form-list,.template-list').animate({
            height: 'toggle',
            opacity: 'toggle'
        }, "slow").end().addClass('cur');
    }, function() {
        $(this).next('.form-list,.template-list').animate({
            height: 'toggle',
            opacity: 'toggle'
        }, "slow").end().removeClass('cur');
    });



    // 微信分享输入框添加地址
    $('.weixin-pic').click(function() {
        $('.mask').removeClass('none');
        $('.pic-module-edit').removeClass('none')
        $('.pic-module-btn').click(function() {
            $('.weixin-pic').attr('value', imgSrc)
            $('.pic-module-edit').addClass('none');
        })
        $('.btn.cancel').click(function() {
            $('.mask').addClass('none');
            $('.pic-module-edit').addClass('none');
            $('.btn.cancel').unbind();
        });
    })




    // 换肤功能
    $('.sel-color.color-1').click(function() {
        $('.npf-skin-wrap').removeAttr('style').attr('class', 'npf-skin-wrap color-1')
    });
    $('.sel-color.color-2').click(function() {
        $('.npf-skin-wrap').removeAttr('style').attr('class', 'npf-skin-wrap color-2')
    });
    $('.sel-color.color-3').click(function() {
        $('.npf-skin-wrap').removeAttr('style').attr('class', 'npf-skin-wrap color-3')
    });
    $('.sel-color.color-4').click(function() {
        $('.npf-skin-wrap').removeAttr('style').attr('class', 'npf-skin-wrap color-4')
    });
    $('.sel-color.color-5').click(function() {
        $('.npf-skin-wrap').removeAttr('style').attr('class', 'npf-skin-wrap color-5')
    });
    $('.sel-color.color-6').click(function() {
        $('.npf-skin-wrap').removeAttr('style').attr('class', 'npf-skin-wrap color-6')
    });

    // 自定义颜色
    $(".inf-color").change(function(){
        var infColor = $(".inf-color").val()
        $('.npf-skin-wrap').css('background-color',infColor)
    })

    


});











// 存储功能
function save2Local() {
    localStorage.setItem('html', $('.html-view').html());
}

// 3 秒自动保存一次到本地
var autoSave = setInterval(function() {
    save2Local()
}, 3000)

// 第二次进来检查本地保存有数据，则自动恢复
if (localStorage.getItem('html')) {
    $('.html-view').html(localStorage.getItem('html'));
}

// 保存按钮
$('.btn-download').click(function() {

    // 去掉因为编辑文字、图片添加的类名
    var contentHtml = $('.html-view').clone().find('*').removeClass('npf-editable npf-pic-editable').removeAttr('contenteditable').end().html()

    // 微信分享
    var weixinShare = '<input type="hidden" value="' + $('.weixin-pic').val() + '" id="shareThumbnail">' +
        '<script src="//imgcache.qq.com/open_proj/proj_qcloud_v2/js/wechat-share.js" charset="utf-8"></script>';

    // 页面代码汇总拼接
    oName = 'index.html',
        oContent = '<!DOCTYPE html><html lang="zh-cmn-Hans"><head><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no"><title>' + $('.inf-title').val() + '</title><meta name="keywords" content="' + $('.inf-keywords').val() + '"><meta name="description" content="' + $('.inf-description').val() + '"><link href="https://imgcache.qq.com/open_proj/proj_qcloud_v2/gateway/portal/css/global.css" rel="stylesheet" /><link href="http://10.100.65.223/open_proj/proj_qcloud_v2/event/summit/css/layout.import.css" rel="stylesheet" /><link href="http://10.100.65.223/open_proj/proj_qcloud_v2/event/summit/css/mod.import.css" rel="stylesheet" /></head><body>' + '<div id="qcc_header"><qcc-header></qcc-header></div>' + contentHtml + '<div id="qcc_footer"><qcc-footer></qcc-footer></div>' + '<script type="text/javascript" src="http://imgcache.qq.com/open_proj/proj_qcloud_v2/gateway/event/pc/npf/js/jquery.js"></script>' + '<script type="text/javascript" src="http://10.100.65.223/open_proj/proj_qcloud_v2/gateway/qcc-template/qcc-dev.js"></script>' + '<script type="text/javascript" src="http://119.29.8.64/source/nicklu/special-tools-v2/npf.js"></script>' + weixinShare + '</body></html>';





    var blob = new Blob([oContent], {
        type: "text/plain;charset=utf-8"
    });

    saveAs(blob, oName);
})

// 清空按钮，用于清空页面
$('.btn-empty').click(function() {
    $('.npf-skin-wrap').empty();
    localStorage.setItem('html', $('.html-view').html());
    // localStorage.setItem('html', '');
    // $('.html-view').html('<a href="##" class="btn-add-column">+添加通栏</a>')
});

